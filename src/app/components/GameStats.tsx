"use client";
import { useEffect, useState } from "react";
import StatUpdater from "./StatUpdater";
import { allQuestions, getRandomQuestion, updateStats, checkGameOver } from "./functions";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import deathIcon from "../../../public/ministers/skulls.jpg";

// Component for Game Stats
export const GameStats = () => {
    const [agriculture, setAgriculture] = useState(50);
    const [infrastructure, setInfrastructure] = useState(50);
    const [internalSecurity, setInternalSecurity] = useState(50);
    const [international, setInternational] = useState(50);
    const [budget, setBudget] = useState(50);
    const [publicOpinion, setPublicSupport] = useState(50);

    // Set the first question as fixed
    const [usedQuestions, setUsedQuestions] = useState<number[]>([allQuestions[0].id]);
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
    const [gameOver, setGameOver] = useState(false);
    const [gameOverReason, setGameOverReason] = useState("");

    // Statlar güncellendiğinde oyunun bitip bitmediğini kontrol eden useEffect
    useEffect(() => {
        const isGameOver = checkGameOver(publicOpinion, internalSecurity, international, budget, infrastructure, agriculture);
        if (isGameOver) {
            setGameOver(true);
            if (publicOpinion <= 1) setGameOverReason("Toplumun desteği");
            else if (internalSecurity <= 1) setGameOverReason("Ülke güvenliği zafiyeti");
            else if (international <= 1) setGameOverReason("Uluslararası ilişkiler");
            else if (budget <= 1) setGameOverReason("Bütçe");
            else if (infrastructure <= 1) setGameOverReason("Altyapı ve çevre");
            else if (agriculture <= 1) setGameOverReason("Tarım üretimi");
        }
    }, [publicOpinion, internalSecurity, international, budget, infrastructure, agriculture]);

    // Function to handle answer selection
    const answerQuestion = (direction: "left" | "right") => {
        const answer =
            direction === "left"
                ? currentQuestion.answers[0]
                : currentQuestion.answers[1];

        updateStats(answer.effect, {
            setAgriculture,
            setInfrastructure,
            setInternalSecurity,
            setInternational,
            setPublicSupport,
            setBudget
        });

        // Get a random next question that hasn't been used
        const nextQuestion = getRandomQuestion(usedQuestions);
        if (!gameOver && nextQuestion) {
            setCurrentQuestion(nextQuestion);
            setUsedQuestions((prev) => [...prev, nextQuestion.id]);
        }
    };

    const restartGame = () => {
        setAgriculture(50);
        setInfrastructure(50);
        setInternalSecurity(50);
        setInternational(50);
        setBudget(50);
        setPublicSupport(50);
        setUsedQuestions([allQuestions[0].id]);
        setCurrentQuestion(allQuestions[0]);
        setGameOver(false);
        setGameOverReason("");
    };

    // Oyun bittiyse oyunun son ekranını göster
    if (gameOver) {
        return (
            <div className="text-center p-4 bg-white rounded-lg">
                <h1>Oyun Bitti!</h1>
                <Image src={deathIcon} alt="Oyun Bitti" className="my-4 h-[20rem] w-[710px]" />
                <Button className="w-80 h-auto" onClick={restartGame}>
                    Tekrar Oyna
                </Button>
            </div>
        )
    };

    return (
        <div className="flex flex-col gap-2 w-full justify-center items-center border-[1px] border-gray-400 rounded-md p-3">
            <StatUpdater
                agriculture={agriculture}
                infrastructure={infrastructure}
                internalSecurity={internalSecurity}
                international={international}
                currency={budget}
                publicSupport={publicOpinion}
            />

            {/* Question display */}
            {currentQuestion ? (
                <div className="text-center bg-white p-2 rounded-lg border-gray-400 border-[1px]">
                    <div>
                        <p className="text-xl w-[880px]">{currentQuestion.question}</p>
                    </div>


                    {currentQuestion.photo && currentQuestion.title && (
                        <div className="flex flex-col items-center mt-4 gap-4 justify-center">
                            <img
                                src={
                                    currentQuestion.photo instanceof File
                                        ? URL.createObjectURL(currentQuestion.photo)
                                        : typeof currentQuestion.photo === 'object' && 'src' in currentQuestion.photo
                                            ? currentQuestion.photo.src
                                            : currentQuestion.photo
                                }
                                alt={currentQuestion.title}
                                className="border-[1px] border-gray-400 h-[20rem] rounded"
                            />
                            <p className="font-medium text-xl">{currentQuestion.title}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center bg-white rounded-lg">All questions answered!</div>
            )}

            {/* Answer buttons */}
            {currentQuestion && (
                <div className="flex justify-center w-full p-2.5 gap-3">
                    <Button
                        className="w-80 h-auto"
                        onClick={() => answerQuestion("left")}
                    >
                        {currentQuestion.answers[0].text}
                    </Button>
                    <Button
                        className="w-80 h-auto"
                        onClick={() => answerQuestion("right")}
                    >
                        {currentQuestion.answers[1].text}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default GameStats;

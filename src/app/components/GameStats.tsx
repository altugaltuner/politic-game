"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import StatUpdater from "./StatUpdater";
import { allQuestions, getRandomQuestion, updateStats, checkGameOver } from "./functions";

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


    // Statlar güncellendiğinde oyunun bitip bitmediğini kontrol eden useEffect
    useEffect(() => {
        const isGameOver = checkGameOver(publicOpinion, internalSecurity, international, budget, infrastructure, agriculture);

        if (isGameOver) {
            setGameOver(true); // Eğer stat sıfırın altına düştüyse oyunu bitir
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

    // Oyun bittiyse oyunun son ekranını göster
    if (gameOver) {
        if (publicOpinion <= 1) {
            return (
                <div className="text-center p-4 bg-white rounded-lg">
                    <h1>Oyun Bitti!</h1>
                    <p>Toplumun desteği</p>
                </div>
            );
        }
        else if (internalSecurity <= 1) {
            return (
                <div className="text-center p-4 bg-white rounded-lg">
                    <h1>Oyun Bitti!</h1>
                    <p>Ülke güvenliği zafiyeti</p>
                </div>
            );
        }
        else if (international <= 1) {
            return (
                <div className="text-center p-4 bg-white rounded-lg">
                    <h1>Oyun Bitti!</h1>
                    <p>Uluslararası ilişkiler</p>
                </div>
            );
        }
        else if (budget <= 1) {
            return (
                <div className="text-center p-4 bg-white rounded-lg">
                    <h1>Oyun Bitti!</h1>
                    <p>Bütçe</p>
                </div>
            );
        }
        else if (infrastructure <= 1) {
            return (
                <div className="text-center p-4 bg-white rounded-lg">
                    <h1>Oyun Bitti!</h1>
                    <p>Altyapı ve çevre</p>
                </div>
            );
        }
        else if (agriculture <= 1) {
            return (
                <div className="text-center p-4 bg-white rounded-lg">
                    <h1>Oyun Bitti!</h1>
                    <p>Tarım üretimi</p>
                </div>
            );
        }
    }

    return (
        <div className="flex flex-col gap-2 w-full justify-center items-center border-[1px] border-gray-400 p-3">
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
                <div className="text-center bg-white rounded-lg">
                    <div>
                        <p>{currentQuestion.question}</p>
                    </div>


                    {currentQuestion.photo && currentQuestion.title && (
                        <div className="flex flex-col items-center mt-4 gap-4 justify-center">
                            <Image
                                src={currentQuestion.photo.src}
                                alt={currentQuestion.title}
                                width={1000}
                                height={500}
                                className="w-full h-[20rem]"
                            />
                            <p className="mt-2 font-medium text-2xl">{currentQuestion.title}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center bg-white rounded-lg">All questions answered!</div>
            )}

            {/* Answer buttons */}
            {currentQuestion && (
                <div className="flex justify-center w-full p-2.5">
                    <button
                        className="bg-[#95a8b8] w-[50%] text-white py-2.5 px-5 rounded-lg mr-2.5"
                        onClick={() => answerQuestion("left")}
                    >
                        {currentQuestion.answers[0].text}
                    </button>
                    <button
                        className="bg-[#95a8b8] w-[50%] text-white py-2.5 px-5 rounded-lg"
                        onClick={() => answerQuestion("right")}
                    >
                        {currentQuestion.answers[1].text}
                    </button>
                </div>
            )}
        </div>
    );
};

export default GameStats;

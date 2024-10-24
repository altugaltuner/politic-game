"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import StatUpdater from "./StatUpdater";
import { allQuestions, getRandomQuestion, updateStats, checkGameOver } from "./functions";

// Component for Game Stats
export const GameStats = () => {
    const [agriculture, setAgriculture] = useState(50);
    const [education, setEducation] = useState(50);
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
        const isGameOver = checkGameOver(publicOpinion, internalSecurity, international, budget, education, infrastructure, agriculture);

        if (isGameOver) {
            setGameOver(true); // Eğer stat sıfırın altına düştüyse oyunu bitir
        }
    }, [publicOpinion, internalSecurity, international, budget, education, infrastructure, agriculture]);

    // Function to handle answer selection
    const answerQuestion = (direction: "left" | "right") => {
        const answer =
            direction === "left"
                ? currentQuestion.answers[0]
                : currentQuestion.answers[1];

        updateStats(answer.effect, {
            setAgriculture,
            setEducation,
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
        return (
            <div className="text-center p-4 bg-white rounded-lg">
                <h1>Oyun Bitti!</h1>
                <p>Bir stat sıfırın altına düştü, oyunu kaybettiniz!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-[35px] w-full">
            <StatUpdater
                agriculture={agriculture}
                education={education}
                infrastructure={infrastructure}
                internalSecurity={internalSecurity}
                international={international}
                currency={budget}
                publicSupport={publicOpinion}
            />

            {/* Question display */}
            {currentQuestion ? (
                <div className="text-center p-4 bg-white rounded-lg">
                    <p>{currentQuestion.question}</p>

                    {/* Render the current minister's photo and title */}
                    {currentQuestion.photo && currentQuestion.title && (
                        <div className="flex flex-col items-center mt-4 justify-center">
                            <Image
                                src={currentQuestion.photo.src}
                                alt={currentQuestion.title}
                                width={80}
                                height={80}
                                className="w-2/3 h-[26rem]"
                            />
                            <p className="mt-2">{currentQuestion.title}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center p-4 bg-white rounded-lg">All questions answered!</div>
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

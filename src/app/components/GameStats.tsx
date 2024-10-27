"use client";
import { useEffect, useState } from "react";
import StatUpdater from "./StatUpdater";
import { allQuestions, getRandomQuestion, updateStats, checkGameOver } from "./functions";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import deathIcon from "../../../public/ministers/skulls.jpg";
import victoryImg from "../../../public/ministers/victory.png";

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
            if (publicOpinion <= 1) setGameOverReason("Halkın güvenini kaybettiniz. Muhalefetin de erken seçim talebine boyun eğerek seçimlere gitmek zorunda kaldınız. Seçimleri kaybettiniz!");
            else if (internalSecurity <= 1) setGameOverReason("İç güvenlik zafiyeti nedeniyle ülke kaosa sürüklendi. Güvenlik olmadan istikrar sağlanamadı!");
            else if (international <= 1) setGameOverReason("Dış politikayı yönetemediniz. Ülkenin küresel arenadaki itibarı sıfırlandı!");
            else if (budget <= 1) setGameOverReason("Bütçe kaynakları tükendi ve ekonomik kriz kaçınılmaz oldu. Mali dengeyi sağlayamadığınız için yönetim sona erdi!");
            else if (infrastructure <= 1) setGameOverReason("Altyapı ve çevre sorunları çözülemedi ve temel hizmetler sağlanamaz hale geldi!");
            else if (agriculture <= 1) setGameOverReason("Tarım üretimi azaldı ve gıda krizi ortaya çıktı. Ülke halkının ihtiyaçlarını karşılayamıyorsunuz!");
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
            <div className="flex flex-col gap-2 w-full justify-center items-center rounded-md p-3">
                <StatUpdater
                    agriculture={agriculture}
                    infrastructure={infrastructure}
                    internalSecurity={internalSecurity}
                    international={international}
                    currency={budget}
                    publicSupport={publicOpinion}
                />
                <div className="text-center bg-white p-2 rounded-lg border-gray-400 border-[1px] flex items-center flex-col">
                    <h1 className="text-xl w-[880px] h-[70px]">{gameOverReason}</h1>
                    <Image src={deathIcon} alt="Oyun Bitti" className=" my-4 w-[710px] border-[1px] border-gray-400 max-h-[20rem] rounded" />
                </div>
                <Button className="w-80 h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-800" onClick={restartGame}>
                    Tekrar Oyna
                </Button>
            </div>
        )
    };

    if (allQuestions.length === usedQuestions.length) {
        return (
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
                <StatUpdater
                    agriculture={agriculture}
                    infrastructure={infrastructure}
                    internalSecurity={internalSecurity}
                    international={international}
                    currency={budget}
                    publicSupport={publicOpinion}
                />
                <h1 className="text-xl w-[880px] h-[70px]">Oyun Bitti! Tüm soruları yanıtladınız!</h1>
                <Image src={victoryImg} alt="Oyun Bitti" className="my-4 h-[20rem] w-[710px]" />
                <Button className="w-80 h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-800" onClick={restartGame}>
                    Tekrar Oyna
                </Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2 w-full justify-center items-center rounded-md p-3">
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
                <div className=" text-center bg-white pb-4 pt-4 pr-10 pl-10 rounded-lg border-gray-400 border-[1px] 2xl:w-[905px]">
                    <div className="flex justify-center">
                        <p className="text-xl min-h-[110px] flex flex-col justify-center w-5/6">{currentQuestion.question}</p>
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
                                className="border-[1px] border-gray-400 max-h-[20rem] rounded"
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
                <div className="flex justify-center w-full gap-5 p-2.5">
                    <Button
                        className="w-80 h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-800"
                        onClick={() => answerQuestion("left")}
                    >
                        {currentQuestion.answers[0].text}
                    </Button>

                    <Button
                        className="w-80 h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-800"
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

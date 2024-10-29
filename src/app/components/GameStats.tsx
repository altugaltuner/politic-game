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
    const [isVisible, setIsVisible] = useState(true);
    const [, setAudio] = useState<HTMLAudioElement | null>(null);

    const soundFiles = [
        "/sound-effects/malecrowd-1.mp3",
        "/sound-effects/malecrowd-2.mp3",
        "/sound-effects/malecrowd-3.mp3",
        "/sound-effects/malecrowd-4.mp3",
        "/sound-effects/malecrowd-5.mp3",
        "/sound-effects/malecrowd-6.mp3",
        "/sound-effects/malecrowd-7.mp3",
        "/sound-effects/malecrowd-8.mp3",
        "/sound-effects/malecrowd-9.mp3",
        "/sound-effects/malecrowd-10.mp3",
        "/sound-effects/malecrowd-11.mp3",
        "/sound-effects/malecrowd-12.mp3",
    ];


    const getRandomSound = () => {
        const randomIndex = Math.floor(Math.random() * soundFiles.length);
        return soundFiles[randomIndex];
    }

    const playSoundEffect = () => {
        const randomSound = getRandomSound();
        const newAudio = new Audio(randomSound);
        setAudio(newAudio);
        newAudio.play();

        // Sesin 3 saniye boyunca çalması
        setTimeout(() => {
            // Fade out efekti başlat
            fadeOut(newAudio);
        }, 2000); // 2 saniye sonra fade out başlat

        setTimeout(() => {
            newAudio.pause();
            setAudio(null);
        }, 3000);
    };

    // Fade out fonksiyonu
    const fadeOut = (audio: HTMLAudioElement) => {
        let volume = 1.0; // Başlangıç sesi
        const fadeDuration = 1000; // Fade out süresi (ms)
        const fadeInterval = 50; // Her adımın süresi (ms)
        const fadeStep = volume / (fadeDuration / fadeInterval); // Her adımda azaltılacak ses

        const fade = setInterval(() => {
            if (volume > 0) {
                volume = Math.max(0, volume - fadeStep); // Sesi azalt
                audio.volume = volume;
            } else {
                clearInterval(fade); // Fade out tamamlandı
                audio.pause(); // Sesi durdur
                setAudio(null);
            }
        }, fadeInterval);
    };


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

        setIsVisible(false);

        // Get a random next question that hasn't been used
        const nextQuestion = getRandomQuestion(usedQuestions);
        if (!gameOver && nextQuestion) {
            setTimeout(() => {
                setCurrentQuestion(nextQuestion);
                setUsedQuestions((prev) => [...prev, nextQuestion.id]);
                setIsVisible(true); // Soru görünümünü göster
            }, 500); // 0.5 saniye bekleyin

            setTimeout(() => {
                playSoundEffect();
            }, 1000); // 1 saniye bekleyin
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
            <div className="flex flex-col gap-2 w-full justify-center items-center rounded-md">
                <StatUpdater
                    agriculture={agriculture}
                    infrastructure={infrastructure}
                    internalSecurity={internalSecurity}
                    international={international}
                    currency={budget}
                    publicSupport={publicOpinion}
                />
                <div className="question-container visible text-center gap-[30px] bg-white p-2 rounded-lg w-full border-gray-400 border-[1px] flex items-center flex-col sm:min-h-[547px] h-[430px]">
                    <h1 className="md:text-xl sm:text-base text-sm min-h-[110px] flex flex-col justify-center w-5/6">{gameOverReason}</h1>
                    <Image src={deathIcon} width={500} alt="Oyun Bitti" className="border-[1px] border-gray-400 max-h-[13rem] rounded" />
                </div>
                <Button className="w-auto h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-800" onClick={restartGame}>
                    Tekrar Oyna
                </Button>
            </div>
        )
    };

    if (allQuestions.length === usedQuestions.length) {
        return (
            <div className="flex flex-col gap-2 w-full justify-center items-center rounded-md">
                <StatUpdater
                    agriculture={agriculture}
                    infrastructure={infrastructure}
                    internalSecurity={internalSecurity}
                    international={international}
                    currency={budget}
                    publicSupport={publicOpinion}
                />
                <div className="flex flex-col items-center text-center bg-white sm:p-4 p-2 rounded-lg sm:min-h-[547px] h-[430px] border-gray-400 border-[1px] lg:w-[905px]">
                    <h1 className="md:text-xl sm:text-base text-sm min-h-[110px] flex flex-col justify-center w-5/6">Başardın! Türkiyeyi son nefesine kadar yönetebildin. Huzur içinde ölebilirsin.</h1>
                    <Image src={victoryImg} alt="Oyun Bitti" className="my-4 h-[15rem] sm:w-[567px] w-[355px]" />
                    <Button className=" h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-800" onClick={restartGame}>
                        Tekrar Oyna
                    </Button>
                </div>

            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2 w-full justify-center items-center rounded-md">
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
                <div className={`question-container ${isVisible ? 'visible' : ''} text-center bg-white sm:p-4 p-2 rounded-lg sm:min-h-[560px] h-[430px] border-gray-400 border-[1px] lg:w-[905px]`}>
                    <div className="flex justify-center">
                        <p className="font-aldrich md:text-xl sm:text-base text-sm min-h-[110px] flex flex-col justify-center w-5/6">{currentQuestion.question}</p>
                    </div>

                    {currentQuestion.photo && currentQuestion.title && (
                        <div className="flex flex-col items-center mt-4 gap-4 justify-center">
                            <Image
                                width={567} height={320}
                                src={
                                    currentQuestion.photo instanceof File
                                        ? URL.createObjectURL(currentQuestion.photo)
                                        : typeof currentQuestion.photo === 'object' && 'src' in currentQuestion.photo
                                            ? currentQuestion.photo.src
                                            : currentQuestion.photo
                                }
                                alt={currentQuestion.title}
                                className="border-[1px] border-gray-400 sm:max-h-[16rem] max-h-[11rem] rounded"
                            />
                            <p className="font-medium md:text-xl text-sm">{currentQuestion.title}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center bg-white rounded-lg">All questions answered!</div>
            )}

            {/* Answer buttons */}
            {currentQuestion && (
                <div className="flex sm:flex-row flex-col justify-center rounded-lg bg-white border-gray-400 border-[1px] lg:w-[905px] w-full sm:gap-5 gap-2 p-2.5 items-center">
                    <Button
                        className="sm:w-80 w-full h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-800 md:text-sm text-xs"
                        onClick={() => answerQuestion("left")}
                    >
                        {currentQuestion.answers[0].text}
                    </Button>

                    <Button
                        className="sm:w-80 w-full h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 active:scale-95 active:bg-blue-800 md:text-sm text-xs"
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

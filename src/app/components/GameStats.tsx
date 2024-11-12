"use client";
import { useEffect, useState } from "react";
import StatUpdater from "./StatUpdater";
import { allQuestions, getRandomQuestion, updateStats, checkGameOver } from "./functions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ataturk from "../../../public/images/ataturk.webp";
import { FiAlertCircle } from "react-icons/fi";
import { ReactTyped } from "react-typed";
import { events } from "../../database/events";
import { EventModal } from "./eventModal";

type GameStatsProps = {
    setSelectedListIDs: (newListID: string) => void;
    resetSelectedListIDs: () => void;
    handleSelectedOptionModalOpen: () => void;
};

interface Effects {
    agriculturalProduction?: number;
    infrastructureAndEnvironment?: number;
    internalSecurity?: number;
    publicSupport?: number;
    budget?: number;
    internationalRelations?: number;
}

// Component for Game Stats
export const GameStats: React.FC<GameStatsProps> = ({ setSelectedListIDs, resetSelectedListIDs, handleSelectedOptionModalOpen }) => {
    const [agriculture, setAgriculture] = useState(50);
    const [infrastructure, setInfrastructure] = useState(50);
    const [internalSecurity, setInternalSecurity] = useState(50);
    const [international, setInternational] = useState(50);
    const [budget, setBudget] = useState(50);
    const [publicOpinion, setPublicSupport] = useState(50);
    const [isVisible, setIsVisible] = useState(true);
    const [, setAudio] = useState<HTMLAudioElement | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    function closeModal(effects: Effects) {
        setIsModalOpen(false);

        if (effects) {
            if (effects.agriculturalProduction !== undefined) {
                setAgriculture((prev) => prev + (effects.agriculturalProduction ?? 0));
            }
            if (effects.infrastructureAndEnvironment !== undefined) {
                setInfrastructure((prev) => prev + (effects.infrastructureAndEnvironment ?? 0));
            }
            if (effects.internalSecurity !== undefined) {
                setInternalSecurity((prev) => prev + (effects.internalSecurity ?? 0));
            }
            if (effects.publicSupport !== undefined) {
                setPublicSupport((prev) => prev + (effects.publicSupport ?? 0));
            }
            if (effects.budget !== undefined) {
                setBudget((prev) => prev + (effects.budget ?? 0));
            }
            if (effects.internationalRelations !== undefined) {
                setInternational((prev) => prev + (effects.internationalRelations ?? 0));
            }
        }
    }


    const getRandomEventIndex = () => {
        return Math.floor(Math.random() * events.length);
    };
    const [currentEvent, setCurrentEvent] = useState(events[getRandomEventIndex()]);
    const [usedEvents, setUsedEvents] = useState<number[]>([]);

    // Set the first question as fixed
    const [usedQuestions, setUsedQuestions] = useState<number[]>([allQuestions[0].id]);
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
    const [gameOver, setGameOver] = useState(false);
    const [gameOverReason, setGameOverReason] = useState("");
    const [deathStat, setDeathStat] = useState<string | null>(null);
    const [score, setScore] = useState(0);

    const getRandomEvent = (usedEvents: number[]) => {
        if (usedQuestions.length > 4 && gameOver === false) {
            const availableEvents = events.filter(
                (event) => event.id !== undefined && !usedEvents.includes(event.id)
            );

            if (availableEvents.length === 0) {
                return null;
            }

            const randomIndex = Math.floor(Math.random() * availableEvents.length);
            return availableEvents[randomIndex];
        }
    };

    const oneInTenChance = () => {
        const boolean = Math.random() < 0.2;
        return boolean;
    };

    useEffect(() => {
        if (oneInTenChance()) {
            const nextEvent = getRandomEvent(usedEvents);
            if (nextEvent && !gameOver) {
                setCurrentEvent(nextEvent);
                setUsedEvents((prev) => [...prev, nextEvent.id]);
                setIsModalOpen(true);
            }
        }
    }, [agriculture, infrastructure, internalSecurity, international, budget, publicOpinion]);



    const soundFiles = [
        "/sound-effects/malecrowd-1.mp3",
        "/sound-effects/malecrowd-2.mp3",
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

    // Statlar güncellendiğinde oyunun bitip bitmediğini kontrol eden useEffect
    useEffect(() => {
        const isGameOver = checkGameOver(publicOpinion, internalSecurity, international, budget, infrastructure, agriculture);
        if (isGameOver) {
            setGameOver(true);
            if (publicOpinion <= 1) {
                setDeathStat("publicOpinion");
                setGameOverReason("Halkın sana olan güvenini ve desteğini kaybettin. İlk fırsatta erken seçimle görevinden alındın. Yönetimin sona erdi!");
            }
            else if (internalSecurity <= 1) {
                setDeathStat("internalSecurity");
                setGameOverReason("Aldığın yanlış kararlar yüzünden halkın güvenliğini sağlayamadın ve ülkeyi kaosa sürükledin. Yönetimin sona erdi!");
            }
            else if (international <= 1) {
                setDeathStat("international");
                setGameOverReason("Dış politikada yaptığın hatalar ülkeyi dış politikada yalnızlaştırdı. Uluslararası arenada söz hakkını kaybettin. Yönetimin sona erdi!");
            }
            else if (budget <= 1) {
                setDeathStat("budget");
                setGameOverReason("Kontrolsüz harcamaların ve hatalı yönetimin ülkeyi felakete sürükledi. Devletin hazinesini tamamen tükettin. Yönetimin sona erdi!");
            }
            else if (infrastructure <= 1) {
                setDeathStat("infrastructure");
                setGameOverReason("Altyapı sorunlarına kayıtsız kalman, ülkeyi çöküşe sürükledi. Yollar, köprüler, şehirler harabeye döndü. İhmalin bedeli ağır oldu. Yönetimin sona erdi!");
            }
            else if (agriculture <= 1) {
                setDeathStat("agriculture");
                setGameOverReason("Üretimi ihmal ettiğin için ülkende gıda krizine sebep oldun. Halkın en temel ihtiyaçlarını dahi karşılayamadın. Yönetimin sona erdi!");
            }
        }
    }, [publicOpinion, internalSecurity, international, budget, infrastructure, agriculture, score]);

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

        if (answer.listID) {
            setSelectedListIDs(answer.listID); // Add new listID to the array
            handleSelectedOptionModalOpen(); // Open the selected option modal
        }

        setIsVisible(false);

        // Get a random next question that hasn't been used
        const nextQuestion = getRandomQuestion(usedQuestions);
        if (!gameOver && nextQuestion) {

            setScore((prev) => prev + 1);

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
        setScore(0);
        setDeathStat(null);

        resetSelectedListIDs(); // Clear the filteredElements in ListElements
    };

    // Oyun bittiyse oyunun son ekranını göster
    if (gameOver) {
        return (
            <div className="flex flex-col gap-3 xl:w-[72%] w-full justify-center items-center rounded-md relative">
                <StatUpdater
                    agriculture={agriculture}
                    infrastructure={infrastructure}
                    internalSecurity={internalSecurity}
                    international={international}
                    currency={budget}
                    publicSupport={publicOpinion}
                    score={score}
                    deathLayerStat={deathStat}
                />
                <div className="question-container visible text-center bg-white sm:p-2 p-2 rounded-lg border-black border-[3px] w-full flex flex-col justify-start items-center">

                    <div className="flex justify-start items-center font-aldrich md:text-base sm:text-sm min-h-[95px] flex-col w-[90%] text-xs gap-2">
                        <h1 className="bg-primary text-white py-1 px-2 rounded-md ">{gameOverReason}</h1>
                        <p className="bg-primary text-white py-1 px-2 rounded-md ">Yönetiminde Geçen Gün : <span>{usedQuestions.length - 1}</span> </p>
                    </div>
                    <div className="flex flex-col items-center mt-2 gap-2 justify-center">
                        {deathStat && (
                            <Image
                                src={`/images/${deathStat}.webp`}
                                width={1820}
                                height={1024}
                                alt="Oyun Bitti"
                                className="w-full lg:h-[22rem] rounded-lg"
                            />
                        )}
                    </div>
                    <Button className="w-44 h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#555555] active:scale-100 active:bg-black md:text-sm text-xs mt-5" onClick={restartGame}>
                        Tekrar Oyna
                    </Button>
                </div>
            </div>
        )
    };

    if (allQuestions.length === usedQuestions.length) {
        return (
            <div className="flex flex-col gap-3 xl:w-[72%] w-full justify-center items-center rounded-md relative">
                <StatUpdater
                    agriculture={agriculture}
                    infrastructure={infrastructure}
                    internalSecurity={internalSecurity}
                    international={international}
                    currency={budget}
                    publicSupport={publicOpinion}
                    score={score}
                    deathLayerStat={null}
                />
                <div className="text-center bg-white sm:p-2 p-2 rounded-lg relative border-black border-[3px] flex flex-col justify-start items-center w-full gap-3">
                    <h1 className=" bg-primary text-white py-1 px-2 rounded-md w-[90%] text-sm sm:text-base">Başardın! Ülkemizin içinde bulunduğu durumlar ne kadar zor olsa da doğru kararları vererek finale ulaştın.
                        Gazi Mustafa Kemal Atatürk'ün de dediği gibi :<br />
                        "Umutsuz durumlar yoktur umutsuz insanlar vardır, ben hiçbir zaman umudumu yitirmedim."
                    </h1>
                    <div className="question-container visible flex flex-col items-center mt-2 gap-2 justify-center">
                        <Image src={ataturk} alt="Oyun Bitti" className="w-full lg:h-[22rem] rounded-lg" />
                    </div>

                    <Button className="w-44 h-auto transform transition duration-300 ease-in-out hover:scale-105hover:bg-[#555555] active:scale-100 active:bg-black md:text-sm text-xs mt-5" onClick={restartGame}>
                        Tekrar Oyna
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3 xl:w-[72%] w-full justify-center items-center rounded-md relative">

            {isModalOpen && currentEvent && (
                <EventModal event={currentEvent} onClose={closeModal} />
            )}


            <StatUpdater
                agriculture={agriculture}
                infrastructure={infrastructure}
                internalSecurity={internalSecurity}
                international={international}
                currency={budget}
                publicSupport={publicOpinion}
                score={score}
                deathLayerStat={null}
            />

            {/* Question display */}
            {currentQuestion ? (
                <div className="text-center bg-white sm:p-2 p-2 rounded-lg relative border-black border-[3px] flex flex-col justify-start items-center w-full">

                    {currentQuestion?.link ? (
                        <Button
                            className={`question-container absolute top-1 right-1 rounded-full ${isVisible ? 'visible' : ''} sm:w-10 sm:h-10 w-6 h-6 p-2`}
                            onClick={() => window.open(currentQuestion.link, '_blank')}
                            style={{ cursor: 'pointer' }}
                            aria-label="Open link"
                            title="İlgili Haber"
                        >
                            <FiAlertCircle className="w-7 h-7" />
                        </Button>
                    ) : null}

                    <div className={`question-container ${isVisible ? 'visible' : ''}  flex justify-start items-center font-aldrich md:text-base sm:text-sm min-h-[95px] flex-col w-[90%] text-xs`}>
                        <ReactTyped
                            strings={[currentQuestion.question]}
                            typeSpeed={10}
                            showCursor={false}
                            loop={false}
                            className=" bg-primary text-white py-1 px-2 rounded-md w-[90%]"
                        />
                    </div>

                    {currentQuestion.photo && currentQuestion.title && (
                        <div className={`question-container ${isVisible ? 'visible' : ''} flex flex-col items-center mt-2 gap-2 justify-center`}>
                            <Image
                                width={1820} height={1024}
                                src={
                                    currentQuestion.photo instanceof File
                                        ? URL.createObjectURL(currentQuestion.photo)
                                        : typeof currentQuestion.photo === 'object' && 'src' in currentQuestion.photo
                                            ? currentQuestion.photo.src
                                            : currentQuestion.photo
                                }
                                alt={currentQuestion.title}
                                className="w-full lg:h-[22rem] rounded-lg"
                            />
                            <p className="font-medium md:text-xl text-sm bg-primary text-white px-2 rounded-lg">{currentQuestion.title}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center bg-white rounded-lg">All questions answered!</div>
            )}

            {/* Answer buttons */}
            {currentQuestion && (
                <div className=" flex xl:flex-row flex-col justify-center rounded-lg bg-white border-black border-[3px] w-full xl:gap-5 gap-2 p-2.5 items-center ">
                    <Button
                        className="xl:w-[90%] w-full h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#555555] active:scale-100 active:bg-black md:text-sm text-xs"
                        onClick={() => answerQuestion("left")}
                    >
                        <ReactTyped
                            strings={[currentQuestion.answers[0].text]}
                            typeSpeed={40}
                            showCursor={false}
                            loop={false}
                        />
                    </Button>

                    <Button
                        className="xl:w-[90%] w-full h-auto transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#555555] active:scale-100 active:bg-black md:text-sm text-xs"
                        onClick={() => answerQuestion("right")}
                    >
                        <ReactTyped
                            strings={[currentQuestion.answers[1].text]}
                            typeSpeed={40}
                            showCursor={false}
                            loop={false}
                        />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default GameStats;

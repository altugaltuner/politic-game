"use client";
import { useEffect, useState } from "react";
import StatUpdater from "./StatUpdater";
import { allQuestions, getRandomQuestionByLevel, updateStats, checkGameOver } from "./functions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ataturk from "../../../public/images/ataturk.webp";
import { ReactTyped } from "react-typed";
import { events } from "../../database/events";
import { EventModal } from "./eventModal";
import { useTheme } from "@/contexts/ThemeContext";
import { useVolume } from "@/contexts/VolumeContext";
import LevelChangePage from "./LevelChangePage";

type GameStatsProps = {
    setSelectedListIDs: (newListID: string) => void;
    resetSelectedListIDs: () => void;
    handleSelectedOptionModalOpen: () => void;
    lastingEffects: Effects[]; // Birden fazla etki içeren dizi
    setLastingEffects: React.Dispatch<
        React.SetStateAction<
            {
                type: string;
                value: number;
                stat: string;
            }[]>>
};

interface Effects {
    stat: string;
    value: number;
    agriculturalProduction?: number;
    infrastructureAndEnvironment?: number;
    internalSecurity?: number;
    publicSupport?: number;
    budget?: number;
    internationalRelations?: number;
}

// Component for Game Stats
export const GameStats: React.FC<GameStatsProps> = ({ setSelectedListIDs, resetSelectedListIDs, handleSelectedOptionModalOpen, lastingEffects, setLastingEffects, }) => {
    const [agriculture, setAgriculture] = useState<number>(50);
    const [infrastructure, setInfrastructure] = useState<number>(50);
    const [internalSecurity, setInternalSecurity] = useState<number>(50);
    const [international, setInternational] = useState<number>(50);
    const [budget, setBudget] = useState<number>(50);
    const [publicOpinion, setPublicOpinion] = useState<number>(50);
    const [isVisible, setIsVisible] = useState(true);
    const { isDarkMode } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [isLevelChangeVisible, setIsLevelChangeVisible] = useState(true);

    const handleLevelUp = () => {
        setIsLevelChangeVisible(true);
        setTimeout(() => {
            console.log("Level değişimi gizlendi");
            setIsLevelChangeVisible(false);
        }, 4000); // 4 saniye sonra gizle
    };

    useEffect(() => {
        // Tüm soruların fotoğraflarını önceden yükleyin
        const preloadImages = () => {
            allQuestions.forEach((question) => {
                if (typeof question.photo === "string") {
                    const img = new window.Image();
                    img.src = question.photo;
                }
            });
        };
        preloadImages();
    }, []);



    const sounds = [
        "/sound-effects/breaking-news1.wav",
        "/sound-effects/breaking-news2.wav",
        "/sound-effects/important-news.wav",
    ];
    const { volume } = useVolume();

    const playdeathSound = () => {
        const audio = new Audio("/sound-effects/defeat.wav");
        audio.volume = volume;
        audio.play();
    }

    const playVictorySound = () => {
        const audio = new Audio("/sound-effects/victory.wav");
        audio.volume = volume;
        audio.onerror = () => console.error("Failed to load victory sound");
        audio.play();
    }

    const metalButtonSound = () => {
        const audio = new Audio("/sound-effects/button-metal.wav");
        audio.volume = volume;
        audio.onerror = () => console.error("Failed to load metal sound");
        audio.play();
    }

    const playRandomBreakingNewsSound = () => {
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        // console.log("Çalınan ses:", randomSound);
        const audio = new Audio(randomSound);
        audio.volume = volume;
        audio.play();
    };

    useEffect(() => {
        console.log("lastingEffects", lastingEffects);
    }, [lastingEffects]);

    const getRandomEventIndex = () => {
        return Math.floor(Math.random() * events.length);
    };

    const [currentEvent, setCurrentEvent] = useState(events[getRandomEventIndex()]);
    const [usedEvents, setUsedEvents] = useState<number[]>([]);

    useEffect(() => {
        if (isModalOpen) {
            playRandomBreakingNewsSound();
        }
    }, [isModalOpen]);

    // Set the first question as fixed
    const [usedQuestions, setUsedQuestions] = useState<number[]>([allQuestions[0].id]);
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
    const [gameOver, setGameOver] = useState(false);
    const [gameOverReason, setGameOverReason] = useState("");
    const [deathStat, setDeathStat] = useState<string | null>(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (!currentQuestion) return; // Soru yoksa çalıştırma

        console.log("New question triggered lasting effects:", lastingEffects);

        lastingEffects.forEach((effect) => {
            switch (effect.stat) {
                case "agriculturalProduction":
                    setAgriculture((prev) => prev + effect.value);
                    break;
                case "infrastructureAndEnvironment":
                    setInfrastructure((prev) => prev + effect.value);
                    break;
                case "internalSecurity":
                    setInternalSecurity((prev) => prev + effect.value);
                    break;
                case "publicSupport":
                    setPublicOpinion((prev) => prev + effect.value);
                    break;
                case "budget":
                    setBudget((prev) => prev + effect.value);
                    break;
                case "internationalRelations":
                    setInternational((prev) => prev + effect.value);
                    break;
                default:
                    console.warn(`Unknown stat: ${effect.stat}`);
            }
        });
    }, [currentQuestion]); // Soru değiştiğinde lastingEffects yeniden uygulanır

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

    useEffect(() => {
        const calculateLevel = () => Math.floor(score / 10) + 1;

        const newLevel = calculateLevel();
        if (newLevel !== currentLevel) {
            setCurrentLevel(newLevel); // Yeni seviyeyi ayarla
            handleLevelUp(); // Level atlama animasyonunu başlat
        }
    }, [score, currentLevel]); // Hem score hem de currentLevel'ı izleyin


    const oneInTenChance = () => {
        const boolean = Math.random() < 0.30;
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
    }, [currentQuestion]);

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
                setGameOverReason("Dış politikada yaptığın hatalar ülkeyi yalnızlaştırdı. Uluslararası arenada söz hakkını kaybettin. Yönetimin sona erdi!");
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

    useEffect(() => {
        console.log("currentLevel", currentLevel);
    }, [currentLevel]);




    // Function to handle answer selection
    const answerQuestion = (direction: "left" | "right") => {
        metalButtonSound();

        const answer =
            direction === "left"
                ? currentQuestion.answers[0]
                : currentQuestion.answers[1];

        updateStats(answer.effect, {
            setAgriculture,
            setInfrastructure,
            setInternalSecurity,
            setInternational,
            setPublicOpinion,
            setBudget
        });

        if (answer.listID) {
            setSelectedListIDs(answer.listID); // Add new listID to the array
            handleSelectedOptionModalOpen(); // Open the selected option modal
        }

        setIsVisible(false);

        // Get a random next question that hasn't been used
        const nextQuestion = getRandomQuestionByLevel(usedQuestions, currentLevel);
        if (!gameOver && nextQuestion) {
            setScore((prev) => prev + 1);

            setTimeout(() => {
                setCurrentQuestion(nextQuestion);
                setUsedQuestions((prev) => [...prev, nextQuestion.id]);
                setIsVisible(true);
            }, 500);

            setTimeout(() => {

            }, 1000); // 1 saniye bekleyin
        }
    };

    const restartGame = () => {
        setAgriculture(50);
        setInfrastructure(50);
        setInternalSecurity(50);
        setInternational(50);
        setBudget(50);
        setPublicOpinion(50);
        setUsedQuestions([allQuestions[0].id]);
        setCurrentQuestion(allQuestions[0]);
        setGameOver(false);
        setGameOverReason("");
        setScore(0);
        setDeathStat(null);
        metalButtonSound();
        setLastingEffects([]);
        resetSelectedListIDs(); // Clear the filteredElements in ListElements
    };

    useEffect(() => {
        if (gameOver) {
            playdeathSound();
        }
    }, [gameOver]);

    if (usedQuestions.length === 30) {
        playVictorySound();
    }

    // Oyun bittiyse oyunun son ekranını göster
    if (gameOver) {
        return (
            <div className="flex flex-col gap-3 xl:w-[70%] w-full justify-center items-center rounded-md relative">
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

                    <div className="flex justify-start items-center md:text-base sm:text-sm min-h-[75px] flex-col w-[90%] text-xs gap-2">
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

                </div>
                <div className={`${isDarkMode ? ' bg-[rgb(17,17,17)]  border-white' : 'bg-white border-black'} flex lg:flex-row flex-col justify-center rounded-lg  border-[3px] w-full xl:gap-5 sm:gap-2 gap-1 sm:p-2.5 p-1 items-center `}>
                    <Button className="w-44 h-auto transform transition duration-300 ease-in-out hover:bg-[#555555] active:bg-black md:text-sm text-xs" onClick={restartGame}>
                        Tekrar Oyna
                    </Button>
                </div>
            </div>
        )
    };

    if (usedQuestions.length === 30) {
        return (
            <div className="flex flex-col gap-3 xl:w-[70%] w-full justify-center items-center rounded-md relative">
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

                <div className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)]' : 'border-black bg-white'} text-center sm:p-2 p-1 rounded-lg relative border-[3px] flex flex-col justify-start items-center w-full`}>
                    <h1 className={`${isDarkMode ? ' bg-white text-black' : 'text-white bg-black'} bg-primary py-1 px-2 rounded-md w-[90%] text-sm sm:text-base`}>Başardın! Ülkemizin içinde bulunduğu durumlar ne kadar zor olsa da doğru kararları vererek finale ulaştın.
                        Gazi Mustafa Kemal Atatürkün de dediği gibi :<br />
                        &quot;Umutsuz durumlar yoktur umutsuz insanlar vardır, ben hiçbir zaman umudumu yitirmedim.&quot;
                    </h1>
                    <div className="question-container visible flex flex-col items-center mt-2 gap-2 justify-center">
                        <Image src={ataturk} alt="Oyun Bitti" className="w-full lg:h-[22rem] rounded-lg" />
                    </div>
                </div>
                <div className={`${isDarkMode ? ' bg-[rgb(17,17,17)]  border-white' : 'bg-white border-black'} flex lg:flex-row flex-col justify-center rounded-lg  border-[3px] w-full xl:gap-5 sm:gap-2 gap-1 sm:p-2.5 p-1 items-center`}>
                    <Button className="w-44 h-auto transform transition duration-300 ease-in-out hover:bg-[#555555] active:bg-black md:text-sm text-xs" onClick={restartGame}>
                        Tekrar Oyna
                    </Button>
                </div>
            </div>
        )
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col sm:gap-3 gap-1 xl:w-[70%] w-full justify-center items-center rounded-md relative">

            {isModalOpen && currentEvent && (
                <EventModal event={currentEvent} onClose={closeModal} />
            )}

            {
                isLevelChangeVisible && (
                    <LevelChangePage
                        level={currentLevel}
                        onComplete={() => setIsLevelChangeVisible(false)} />
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
                <div className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)]' : 'border-black bg-white'} text-center sm:p-2 p-1 rounded-lg relative border-[3px] flex flex-col justify-start items-center w-full`}>

                    <div className={`question-container ${isVisible ? 'visible' : ''}  flex justify-start items-center font-aldrich md:text-base text-sm min-h-[75px] flex-col w-[90%]`}>
                        <ReactTyped
                            strings={[currentQuestion.question]}
                            typeSpeed={10}
                            showCursor={false}
                            loop={false}
                            className={`${isDarkMode ? ' bg-white text-black' : 'text-white bg-black'} bg-primary py-1 px-2 rounded-md w-full text-sm`}
                        />
                    </div>

                    {currentQuestion.photo && currentQuestion.title && (
                        <div className={`question-container ${isVisible ? 'visible' : ''} flex flex-col items-center mt-2 gap-2 justify-center`}>
                            <Image
                                priority
                                width={1820} height={1024}
                                src={
                                    currentQuestion.photo instanceof File
                                        ? URL.createObjectURL(currentQuestion.photo)
                                        : typeof currentQuestion.photo === 'object' && 'src' in currentQuestion.photo
                                            ? currentQuestion.photo.src
                                            : currentQuestion.photo
                                }
                                alt={currentQuestion.title}
                                className="lg:w-full sm:w-[70%] w-[90%] lg:h-[22rem] rounded-lg"
                            />
                            <p className={`${isDarkMode ? ' bg-white text-black' : 'text-white bg-black'} font-medium md:text-xl text-sm bg-primary  px-2 rounded-lg`}>{currentQuestion.title}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center bg-white rounded-lg">All questions answered!</div>
            )}

            {/* Answer buttons */}
            {currentQuestion && (
                <div className={`${isDarkMode ? ' bg-[rgb(17,17,17)]  border-white' : 'bg-white border-black'} flex lg:flex-row flex-col justify-center rounded-lg  border-[3px] w-full xl:gap-5 sm:gap-2 gap-1 sm:p-2.5 p-1 items-center lg:min-h-16 min-h-24 `}>
                    <Button
                        className={`${isDarkMode ? ' bg-white  border-black text-black' : 'hover:bg-[#555555] active:bg-black'} xl:w-[90%] w-full h-auto transform transition duration-300 ease-in-out  md:text-sm text-xs min-h-[44px]`}
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
                        className={`${isDarkMode ? ' bg-white  border-black text-black' : 'hover:bg-[#555555] active:bg-black'} xl:w-[90%] w-full h-auto transform transition duration-300 ease-in-out  md:text-sm text-xs min-h-[44px]`}
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

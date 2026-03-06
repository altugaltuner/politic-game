"use client";
import { useEffect, useState } from "react";
import StatUpdater from "./StatUpdater";
import { getRandomQuestionByLevel, updateStats, checkGameOver, allQuestionsByLanguage } from "./functions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ataturk from "../../../public/images/ataturk.webp";
import { ReactTyped } from "react-typed";
import { events } from "../../database/events";
import { EventModal } from "./eventModal";
import { useTheme } from "@/contexts/ThemeContext";
import { useVolume } from "@/contexts/VolumeContext";
import LevelChangePage from "./LevelChangePage";
import { useLanguage } from "@/contexts/LanguageContext";
import { gameOverMessages, playAgain, daysInOffice, victoryMessage } from "../exportedTexts/translatedTexts";
import { playDefeatSound, playMetalButtonSound, playRandomBreakingNewsSound, playVictorySoundEffect } from "@/lib/soundEffects";
import type { GameStatsProps } from "../types/types";

export const GameStats: React.FC<GameStatsProps> = ({ level, setLevel, onEventShown, lastingEffects, setLastingEffects, agriculture, setAgriculture, infrastructure, setInfrastructure, internalSecurity, setInternalSecurity, international, setInternational, budget, setBudget, publicOpinion, setPublicOpinion, score, setScore }) => {

    const [isVisible, setIsVisible] = useState(true);
    const { isDarkMode } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLevelChangeVisible, setIsLevelChangeVisible] = useState(true);
    const { language } = useLanguage();
    const [allQuestions, setAllQuestions] = useState(allQuestionsByLanguage[language]);
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
    const [currentLevel, setCurrentLevel] = useState(level);

    let currentQuestionPhotoSrc: string | undefined;

    if (currentQuestion?.photo instanceof File) {
        currentQuestionPhotoSrc = URL.createObjectURL(currentQuestion.photo);
    } else if (
        currentQuestion?.photo &&
        typeof currentQuestion.photo === "object" &&
        "src" in currentQuestion.photo
    ) {
        currentQuestionPhotoSrc = currentQuestion.photo.src;
    } else if (typeof currentQuestion?.photo === "string") {
        currentQuestionPhotoSrc = currentQuestion.photo;
    } else {
        currentQuestionPhotoSrc = undefined;
    }

    useEffect(() => {
        const currentQuestionId = currentQuestion?.id;
        const updatedQuestions = allQuestionsByLanguage[language];

        setAllQuestions(updatedQuestions);

        if (currentQuestionId) {
            const matchingQuestion = updatedQuestions.find(question => question.id === currentQuestionId);
            if (matchingQuestion) {
                setCurrentQuestion(matchingQuestion);
            } else {
                setCurrentQuestion(updatedQuestions[0]);
            }
        } else {
            setCurrentQuestion(updatedQuestions[0]);
        }
    }, [language, currentQuestion?.id]);

    useEffect(() => {
        if (currentLevel !== level) {
            setLevel(currentLevel);
        }
    }, [level, currentLevel]);

    const handleLevelUp = () => {
        setIsLevelChangeVisible(true);
        setTimeout(() => {
            setIsLevelChangeVisible(false);
        }, 4000);
    };

    const { volume } = useVolume();

    const getRandomEventIndex = () => {
        return Math.floor(Math.random() * events.length);
    };

    const [currentEvent, setCurrentEvent] = useState(events[getRandomEventIndex()]);
    const [usedEvents, setUsedEvents] = useState<number[]>([]);

    useEffect(() => {
        if (isModalOpen) {
            playRandomBreakingNewsSound(volume);
        }
    }, [isModalOpen, volume]);

    const [usedQuestions, setUsedQuestions] = useState<number[]>([allQuestions[0].id]);

    const [gameOver, setGameOver] = useState(false);
    const [gameOverReason, setGameOverReason] = useState("");
    const [deathStat, setDeathStat] = useState<string | null>(null);
    const [deathImageSrc, setDeathImageSrc] = useState("/images/logo.webp");


    useEffect(() => {
        if (!currentQuestion) return;

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
    }, [currentQuestion]);

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
            setCurrentLevel(newLevel);
            handleLevelUp();
        }
    }, [level, score]);


    const eventChance = () => {
        const boolean = Math.random() < 0.2;
        return boolean;
    };

    useEffect(() => {
        if (eventChance()) {
            const nextEvent = getRandomEvent(usedEvents);
            if (nextEvent && !gameOver) {
                setCurrentEvent(nextEvent);
                setUsedEvents((prev) => [...prev, nextEvent.id]);
                onEventShown?.(nextEvent.id);
                setIsModalOpen(true);
            }
        }
    }, [currentQuestion]);

    useEffect(() => {
        const isGameOver = checkGameOver(publicOpinion, internalSecurity, international, budget, infrastructure, agriculture);
        let reason = "";
        if (isGameOver) {
            setGameOver(true);
            if (publicOpinion <= 1) {
                setDeathStat("publicOpinion");
                reason = gameOverMessages[language].publicOpinion;
                setGameOverReason(reason);
            }
            else if (internalSecurity <= 1) {
                setDeathStat("internalSecurity");
                reason = gameOverMessages[language].internalSecurity;
                setGameOverReason(reason);
            }
            else if (international <= 1) {
                setDeathStat("international");
                reason = gameOverMessages[language].international;
                setGameOverReason(reason);
            }
            else if (budget <= 1) {
                setDeathStat("budget");
                reason = gameOverMessages[language].budget;
                setGameOverReason(reason);
            }
            else if (infrastructure <= 1) {
                setDeathStat("infrastructure");
                reason = gameOverMessages[language].infrastructure;
                setGameOverReason(reason);
            }
            else if (agriculture <= 1) {
                setDeathStat("agriculture");
                reason = gameOverMessages[language].agriculture;
                setGameOverReason(reason);
            }
        }
    }, [publicOpinion, internalSecurity, international, budget, infrastructure, agriculture, score]);

    useEffect(() => {
        if (deathStat) {
            setDeathImageSrc(`/images/${deathStat}.webp`);
        }
    }, [deathStat]);

    const answerQuestion = (direction: "left" | "right") => {
        playMetalButtonSound(volume);

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

        setIsVisible(false);
        const nextQuestion = getRandomQuestionByLevel(usedQuestions, currentLevel, language);

        if (!gameOver && nextQuestion) {
            setCurrentQuestion(nextQuestion);
            setUsedQuestions((prev) => [...prev, nextQuestion.id]);
            setScore((prev) => prev + 1);
            requestAnimationFrame(() => {
                setIsVisible(true);
            });
        }
    };

    const restartGame = async () => {
        const newScore = (level - 1) * 10;
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
        setScore(newScore);
        setDeathStat(null);
        playMetalButtonSound(volume);
        setLastingEffects([]);
        playMetalButtonSound(volume);
    };

    useEffect(() => {
        if (gameOver) {
            playDefeatSound(volume);
        }
    }, [gameOver, volume]);

    if (usedQuestions.length === 30) {
        playVictorySoundEffect(volume);
    }

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

                    <div className="flex justify-start items-center md:text-base sm:text-sm min-h-[75px] flex-col w-[90%] text-xs gap-2">
                        <h1 className="bg-black text-white py-1 px-2 rounded-md ">{gameOverReason}</h1>
                        <p className="bg-black text-white py-1 px-2 rounded-md ">{daysInOffice[language]} : <span>{usedQuestions.length - 1}</span> </p>
                    </div>
                    <div className="flex flex-col items-center mt-2 gap-2 justify-center">
                        {deathStat && (
                            <Image
                                src={deathImageSrc}
                                width={768}
                                height={432}
                                alt="Oyun Bitti"
                                className="w-full lg:h-[22rem] rounded-lg"
                                onError={() => setDeathImageSrc("/images/logo.webp")}
                            />
                        )}
                    </div>

                </div>
                <div className={`${isDarkMode ? ' bg-primary  border-white' : 'bg-white border-black'} flex lg:flex-row flex-col justify-center rounded-lg  border-[3px] w-full xl:gap-5 sm:gap-2 gap-1 sm:p-2.5 p-1 items-center `}>
                    <Button className="w-44 h-auto transform transition duration-300 ease-in-out hover:bg-black active:bg-black text-md" onClick={restartGame}>
                        {playAgain[language]}
                    </Button>
                </div>
            </div>
        )
    };

    if (usedQuestions.length === 30) {
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

                <div className={` ${isDarkMode ? 'border-white bg-primary' : 'border-black bg-white'} text-center sm:p-2 p-1 rounded-lg relative border-[3px] flex flex-col justify-start items-center w-full`}>
                    <h1 className={`${isDarkMode ? ' bg-white text-black' : 'text-white bg-primary'} bg-primary py-1 px-2 rounded-md w-[90%] text-md`}>{victoryMessage[language]}
                    </h1>
                    <div className="question-container visible flex flex-col items-center mt-2 gap-2 justify-center">
                        <Image src={ataturk} width={768} height={432} alt="Oyun Bitti" className="w-[60%] lg:h-[22rem] rounded-lg" />
                    </div>
                </div>
                <div className={`${isDarkMode ? ' bg-[rgb(17,17,17)]  border-white' : 'bg-white border-black'} flex lg:flex-row flex-col justify-center rounded-lg  border-[3px] w-full xl:gap-5 sm:gap-2 gap-1 sm:p-2.5 p-1 items-center`}>
                    <Button className="w-44 h-auto transform transition duration-300 ease-in-out hover:bg-[#555555] active:bg-black text-md" onClick={restartGame}>
                        {playAgain[language]}
                    </Button>
                </div>
            </div>
        )
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col sm:gap-3 gap-1 xl:w-[72%] w-full justify-center items-center rounded-md relative">

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

            {currentQuestion ? (
                <div className={` ${isDarkMode ? 'border-white bg-primary' : 'border-black bg-white'}  text-center sm:p-2 p-1 rounded-lg relative border-[3px] border-black flex flex-col justify-start items-center w-full`}>

                    <div className={`question-container ${isVisible ? 'visible' : ''}  flex justify-start items-center font-aldrich md:text-base text-sm min-h-[75px] flex-col w-[90%]`}>
                        <ReactTyped
                            strings={[currentQuestion.question]}
                            typeSpeed={10}
                            showCursor={false}
                            loop={false}
                            className={`${isDarkMode ? ' bg-white text-black' : 'text-white bg-primary'}  py-1 px-2 rounded-md w-full md:text-lg text-base sm:min-h-[50px]`}
                        />
                    </div>

                    {currentQuestion.photo && currentQuestion.title && (
                        <div className="question-container visible flex flex-col items-center mt-2 gap-2 justify-center w-[65%]">
                            <Image
                                width={768} height={432}
                                src={currentQuestionPhotoSrc ?? "/images/fallback.webp"}
                                alt={currentQuestion?.title ?? "Question image"}
                            />
                            <p className={`${isDarkMode ? ' bg-white text-black' : 'text-white bg-primary'} font-medium md:text-xl text-sm bg-primary  px-2 rounded-lg`}>{currentQuestion.title}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center bg-white rounded-lg">All questions answered!</div>
            )}

            {currentQuestion && (
                <div className={`${isDarkMode ? ' bg-primary  border-white' : 'bg-white border-black'} flex lg:flex-row flex-col justify-center rounded-lg  border-[3px] w-full xl:gap-5 sm:gap-2 gap-1 sm:p-2.5 p-1 items-center lg:min-h-16 min-h-24 `}>
                    <Button
                        className={`${isDarkMode ? ' bg-white  border-black text-black' : 'hover:bg-black active:bg-black bg-primary '} xl:w-[90%] w-full h-auto transform transition duration-300 ease-in-out  text-md min-h-[44px]`}
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
                        className={`${isDarkMode ? ' bg-white  border-black text-black' : 'hover:bg-black active:bg-black bg-primary '} xl:w-[90%] w-full h-auto transform transition duration-300 ease-in-out text-md min-h-[44px]`}
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
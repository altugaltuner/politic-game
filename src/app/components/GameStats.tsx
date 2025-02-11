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
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/firebase";

type GameStatsProps = {
    agriculture: number;
    infrastructure: number;
    internalSecurity: number;
    international: number;
    budget: number;
    publicOpinion: number;
    level: number;
    score: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    setAgriculture: React.Dispatch<React.SetStateAction<number>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setInfrastructure: React.Dispatch<React.SetStateAction<number>>;
    setInternalSecurity: React.Dispatch<React.SetStateAction<number>>;
    setInternational: React.Dispatch<React.SetStateAction<number>>;
    setBudget: React.Dispatch<React.SetStateAction<number>>;
    setPublicOpinion: React.Dispatch<React.SetStateAction<number>>;
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
export const GameStats: React.FC<GameStatsProps> = ({ setSelectedListIDs, level, setLevel, resetSelectedListIDs, handleSelectedOptionModalOpen, lastingEffects, setLastingEffects, agriculture, setAgriculture, infrastructure, setInfrastructure, internalSecurity, setInternalSecurity, international, setInternational, budget, setBudget, publicOpinion, setPublicOpinion, score, setScore }) => {

    const [isVisible, setIsVisible] = useState(true);
    const { isDarkMode } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLevelChangeVisible, setIsLevelChangeVisible] = useState(true);
    const { language } = useLanguage(); // Dil bilgisi
    const [allQuestions, setAllQuestions] = useState(allQuestionsByLanguage[language]); // Dil bazlı sorular
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
    const [currentLevel, setCurrentLevel] = useState(level);

    useEffect(() => {
        const currentQuestionId = currentQuestion?.id; // Mevcut sorunun ID'sini alın
        const updatedQuestions = allQuestionsByLanguage[language]; // Yeni dildeki tüm soruları alın

        setAllQuestions(updatedQuestions); // Soruları güncelle

        if (currentQuestionId) {
            // Mevcut ID ile eşleşen soruyu bulun
            const matchingQuestion = updatedQuestions.find(question => question.id === currentQuestionId);
            if (matchingQuestion) {
                setCurrentQuestion(matchingQuestion); // Eşleşen soruyu ayarla
            } else {
                // Eğer eşleşen soru yoksa, ilk soruyu varsayılan olarak ayarla
                setCurrentQuestion(updatedQuestions[0]);
            }
        } else {
            setCurrentQuestion(updatedQuestions[0]); // ID yoksa ilk soruyu ayarla
        }
    }, [language]);

    // console.log("level dbden gelen", level);

    useEffect(() => {
        if (currentLevel !== level) {
            //console.log(`Updating current level to match db level: ${level}`);
            setLevel(currentLevel);
        }
    }, [level, currentLevel]);

    const updateLevelInDatabase = async () => {
        if (auth.currentUser) {
            const userDocRef = doc(db, "users", auth.currentUser.uid);
            try {
                await updateDoc(userDocRef, { level: currentLevel });
                //console.log("Level successfully updated in Firebase:", currentLevel);
            } catch (error) {
                console.error("Error updating level in Firebase:", error);
            }
        }
    };

    useEffect(() => {
        updateLevelInDatabase();
    }, [currentLevel]);

    const handleLevelUp = () => {
        setIsLevelChangeVisible(true);
        setTimeout(() => {

            setIsLevelChangeVisible(false);
        }, 4000);
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

    useEffect(() => {
        const updateScoreInDatabase = async () => {
            if (auth.currentUser && score !== undefined) {
                const userDocRef = doc(db, "users", auth.currentUser.uid);
                try {
                    await updateDoc(userDocRef, { score });
                    //console.log("Score successfully updated in Firebase:", score);
                } catch (error) {
                    console.error("Error updating score in Firebase:", error);
                }
            }
        };

        updateScoreInDatabase();
    }, [score]); // Sadece "score" değiştiğinde çalışır

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
        const audio = new Audio(randomSound);
        audio.volume = volume;
        audio.play();
    };

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

    const [gameOver, setGameOver] = useState(false);
    const [gameOverReason, setGameOverReason] = useState("");
    const [deathStat, setDeathStat] = useState<string | null>(null);


    useEffect(() => {
        if (!currentQuestion) return; // Soru yoksa çalıştırma

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
    // useEffect(() => {
    //     console.log("currentLevel", currentLevel);
    // }, [usedQuestions]);

    // useEffect(() => {
    //     console.log("level", level);
    // }, [usedQuestions]);

    useEffect(() => {
        const calculateLevel = () => Math.floor(score / 10) + 1;

        const newLevel = calculateLevel();
        if (newLevel !== currentLevel) {
            //console.log(`Score-based level change to ${newLevel}`);
            //newlevel 2 oldu burada, ilk önce bu
            setCurrentLevel(newLevel);
            handleLevelUp();
        }
    }, [level, score]);


    const oneInTenChance = () => {
        const boolean = Math.random() < 0.80;
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

    const gameOverMessages = {
        en: {
            publicOpinion: "You lost the trust and support of the people. You were removed from office in the first opportunity for early elections. Your administration has ended!",
            internalSecurity: "Your poor decisions failed to ensure the people's safety, plunging the country into chaos. Your administration has ended!",
            international: "Your foreign policy mistakes isolated the country, leaving it voiceless on the global stage. Your administration has ended!",
            budget: "Your uncontrolled spending and mismanagement led the country to disaster. The state treasury is completely depleted. Your administration has ended!",
            infrastructure: "Neglecting infrastructure issues has driven the country to collapse. Roads, bridges, and cities are in ruins. The cost of neglect was too high. Your administration has ended!",
            agriculture: "Your neglect of production caused a food crisis in the country. You couldn't even meet the basic needs of your people. Your administration has ended!",
        },
        tr: {
            publicOpinion: "Halkın sana olan güvenini ve desteğini kaybettin. İlk fırsatta erken seçimle görevinden alındın. Yönetimin sona erdi!",
            internalSecurity: "Aldığın yanlış kararlar yüzünden halkın güvenliğini sağlayamadın ve ülkeyi kaosa sürükledin. Yönetimin sona erdi!",
            international: "Dış politikada yaptığın hatalar ülkeyi yalnızlaştırdı. Uluslararası arenada söz hakkını kaybettin. Yönetimin sona erdi!",
            budget: "Kontrolsüz harcamaların ve hatalı yönetimin ülkeyi felakete sürükledi. Devletin hazinesini tamamen tükettin. Yönetimin sona erdi!",
            infrastructure: "Altyapı sorunlarına kayıtsız kalman, ülkeyi çöküşe sürükledi. Yollar, köprüler, şehirler harabeye döndü. İhmalin bedeli ağır oldu. Yönetimin sona erdi!",
            agriculture: "Üretimi ihmal ettiğin için ülkende gıda krizine sebep oldun. Halkın en temel ihtiyaçlarını dahi karşılayamadın. Yönetimin sona erdi!",
        },
        de: {
            publicOpinion: "Du hast das Vertrauen und die Unterstützung des Volkes verloren. Bei der ersten Gelegenheit wurde ein vorzeitiger Wahltag angesetzt und du wurdest aus deinem Amt entfernt. Deine Amtszeit ist beendet!",
            internalSecurity: "Aufgrund deiner falschen Entscheidungen konntest du die Sicherheit der Bevölkerung nicht gewährleisten und hast das Land ins Chaos gestürzt. Deine Amtszeit ist beendet!",
            international: "Deine Fehler in der Außenpolitik haben das Land isoliert und seine Stimme auf der internationalen Bühne verstummen lassen. Deine Amtszeit ist beendet!",
            budget: "Deine unkontrollierten Ausgaben und dein schlechtes Management haben das Land in eine Katastrophe geführt. Die Staatskasse ist vollständig aufgebraucht. Deine Amtszeit ist beendet!",
            infrastructure: "Deine Gleichgültigkeit gegenüber Infrastrukturproblemen hat das Land in den Ruin getrieben. Straßen, Brücken und Städte liegen in Trümmern. Die Kosten für deine Nachlässigkeit waren zu hoch. Deine Amtszeit ist beendet!",
            agriculture: "Deine Vernachlässigung der Produktion hat in deinem Land eine Nahrungsmittelkrise verursacht. Du konntest nicht einmal die Grundbedürfnisse der Bevölkerung decken. Deine Amtszeit ist beendet!",
        },
        es: {
            publicOpinion: "Has perdido la confianza y el apoyo del pueblo. En la primera oportunidad, se convocaron elecciones anticipadas y fuiste destituido de tu cargo. ¡Tu administración ha terminado!",
            internalSecurity: "Tus malas decisiones no lograron garantizar la seguridad del pueblo y sumieron al país en el caos. ¡Tu administración ha terminado!",
            international: "Tus errores en política exterior aislaron al país y le quitaron su voz en el escenario internacional. ¡Tu administración ha terminado!",
            budget: "Tus gastos descontrolados y tu mala gestión llevaron al país al desastre. El tesoro del estado está completamente agotado. ¡Tu administración ha terminado!",
            infrastructure: "Tu indiferencia hacia los problemas de infraestructura llevó al país al colapso. Carreteras, puentes y ciudades están en ruinas. El costo de tu negligencia fue demasiado alto. ¡Tu administración ha terminado!",
            agriculture: "Tu negligencia en la producción causó una crisis alimentaria en el país. No pudiste satisfacer ni las necesidades más básicas del pueblo. ¡Tu administración ha terminado!",
        },
        fr: {
            publicOpinion: "Vous avez perdu la confiance et le soutien du peuple. Lors de la première opportunité, des élections anticipées ont été organisées et vous avez été destitué de votre poste. Votre administration est terminée !",
            internalSecurity: "Vos mauvaises décisions n'ont pas réussi à garantir la sécurité du peuple, plongeant le pays dans le chaos. Votre administration est terminée !",
            international: "Vos erreurs en politique étrangère ont isolé le pays, lui retirant toute influence sur la scène internationale. Votre administration est terminée !",
            budget: "Vos dépenses incontrôlées et votre mauvaise gestion ont conduit le pays au désastre. Le trésor de l'État est complètement épuisé. Votre administration est terminée !",
            infrastructure: "Votre indifférence aux problèmes d'infrastructure a conduit le pays à l'effondrement. Les routes, les ponts et les villes sont en ruines. Le coût de votre négligence a été trop élevé. Votre administration est terminée !",
            agriculture: "Votre négligence de la production a causé une crise alimentaire dans le pays. Vous n'avez même pas pu répondre aux besoins fondamentaux du peuple. Votre administration est terminée !",
        },
        pt: {
            publicOpinion: "Você perdeu a confiança e o apoio do povo. Na primeira oportunidade, foram convocadas eleições antecipadas e você foi destituído do cargo. Sua administração chegou ao fim!",
            internalSecurity: "Suas decisões erradas não garantiram a segurança do povo, mergulhando o país no caos. Sua administração chegou ao fim!",
            international: "Seus erros na política externa isolaram o país, tirando sua voz no cenário internacional. Sua administração chegou ao fim!",
            budget: "Seus gastos descontrolados e má gestão levaram o país ao desastre. O tesouro do estado está completamente esgotado. Sua administração chegou ao fim!",
            infrastructure: "Sua negligência com os problemas de infraestrutura levou o país ao colapso. Estradas, pontes e cidades estão em ruínas. O custo da sua negligência foi alto demais. Sua administração chegou ao fim!",
            agriculture: "Sua negligência na produção causou uma crise alimentar no país. Você não conseguiu atender nem às necessidades básicas do povo. Sua administração chegou ao fim!",
        },
        ru: {
            publicOpinion: "Вы потеряли доверие и поддержку народа. При первой возможности были объявлены досрочные выборы, и вас отстранили от должности. Ваше правление завершилось!",
            internalSecurity: "Ваши ошибочные решения не смогли обеспечить безопасность народа, погрузив страну в хаос. Ваше правление завершилось!",
            international: "Ваши ошибки во внешней политике изолировали страну, лишив её голоса на международной арене. Ваше правление завершилось!",
            budget: "Ваши неконтролируемые расходы и плохое управление привели страну к катастрофе. Государственная казна полностью исчерпана. Ваше правление завершилось!",
            infrastructure: "Ваше равнодушие к проблемам инфраструктуры привело страну к краху. Дороги, мосты и города превратились в руины. Цена вашей халатности оказалась слишком высокой. Ваше правление завершилось!",
            agriculture: "Ваше пренебрежение к сельскому хозяйству вызвало продовольственный кризис в стране. Вы не смогли удовлетворить даже базовые потребности народа. Ваше правление завершилось!",
        },
        zh: {
            publicOpinion: "你失去了人民的信任和支持。在第一次机会中，提前选举被召集，你被罢免了职务。你的统治结束了！",
            internalSecurity: "你的错误决策未能保障人民的安全，将国家推向了混乱。你的统治结束了！",
            international: "你在外交政策上的错误使国家被孤立，失去了在国际舞台上的话语权。你的统治结束了！",
            budget: "你的不受控制的开支和糟糕的管理将国家带入灾难。国家财政完全耗尽。你的统治结束了！",
            infrastructure: "你对基础设施问题的漠视使国家陷入崩溃。道路、桥梁和城市变成了废墟。你的疏忽代价太高。你的统治结束了！",
            agriculture: "你对农业生产的忽视导致了国家的粮食危机。你甚至无法满足人民的基本需求。你的统治结束了！",
        },
    };

    const playAgain = {
        en: "Play Again",
        tr: "Tekrar Oyna",
        de: "Nochmal spielen",
        es: "Jugar de nuevo",
        fr: "Rejouer",
        pt: "Jogar novamente",
        ru: "Играть снова",
        zh: "再玩一次",
    }

    const yonetimdeGecenGun = {
        en: "Days in Office",
        tr: "Yönetimde Geçen Gün",
        de: "Tage im Amt",
        es: "Días en el cargo",
        fr: "Jours au pouvoir",
        pt: "Dias no cargo",
        ru: "Дней на посту",
        zh: "在职天数",
    }

    const victoryMessage = {
        en: "Congratulations! You have successfully completed the task. You are the one!",
        tr: "Tebrikler! Görevi başarıyla tamamladınız. Siz bir numarasınız!",
        de: "Herzlichen Glückwunsch! Sie haben die Aufgabe erfolgreich abgeschlossen. Sie sind der Beste!",
        es: "¡Felicidades! Has completado con éxito la tarea. ¡Eres el mejor!",
        fr: "Félicitations ! Vous avez réussi la tâche avec succès. Vous êtes le meilleur !",
        pt: "Parabéns! Você completou a tarefa com sucesso. Você é o melhor!",
        ru: "Поздравляем! Вы успешно выполнили задание. Вы лучший!",
        zh: "恭喜！您已成功完成任务。您是最棒的！",
    };

    // Statlar güncellendiğinde oyunun bitip bitmediğini kontrol eden useEffect
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
        const nextQuestion = getRandomQuestionByLevel(usedQuestions, currentLevel, language);

        if (nextQuestion) {
            setCurrentQuestion(nextQuestion);
        }
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
        metalButtonSound();
        setLastingEffects([]);
        resetSelectedListIDs(); // Clear the filteredElements in ListElements

        // Firebase'de skor güncellemesi
        if (auth.currentUser) {
            const userDocRef = doc(db, "users", auth.currentUser.uid);
            try {
                await updateDoc(userDocRef, { score: newScore }); // Firebase'e yaz
                //console.log("Score updated in Firebase:", newScore);
            } catch (error) {
                console.error("Error updating score in Firebase:", error);
            }
        }

        //firebasede level güncellemesi

        if (auth.currentUser) {
            const userDocRef = doc(db, "users", auth.currentUser.uid);
            try {
                await updateDoc(userDocRef, { level: currentLevel }); // Firebase'e yaz
                //console.log("Level updated in Firebase:", currentLevel);
            } catch (error) {
                console.error("Error updating level in Firebase:", error);
            }
        }



        metalButtonSound();
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
                        <h1 className="bg-primary text-white py-1 px-2 rounded-md ">{gameOverReason}</h1>
                        <p className="bg-primary text-white py-1 px-2 rounded-md ">{yonetimdeGecenGun[language]} : <span>{usedQuestions.length - 1}</span> </p>
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
                    <Button className="w-44 h-auto transform transition duration-300 ease-in-out hover:bg-[#555555] active:bg-black text-md" onClick={restartGame}>
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

                <div className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)]' : 'border-black bg-white'} text-center sm:p-2 p-1 rounded-lg relative border-[3px] flex flex-col justify-start items-center w-full`}>
                    <h1 className={`${isDarkMode ? ' bg-white text-black' : 'text-white bg-black'} bg-primary py-1 px-2 rounded-md w-[90%] text-md`}>{victoryMessage[language]}
                    </h1>
                    <div className="question-container visible flex flex-col items-center mt-2 gap-2 justify-center">
                        <Image src={ataturk} alt="Oyun Bitti" className="w-full lg:h-[22rem] rounded-lg" />
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

            {/* Question display */}
            {currentQuestion ? (
                <div className={` ${isDarkMode ? 'border-white bg-[#0b1d2f]' : 'border-black bg-white'} text-center sm:p-2 p-1 rounded-lg relative border-[3px] border-[#0b1d2f] flex flex-col justify-start items-center w-full`}>

                    <div className={`question-container ${isVisible ? 'visible' : ''}  flex justify-start items-center font-aldrich md:text-base text-sm min-h-[75px] flex-col w-[90%]`}>
                        <ReactTyped
                            strings={[currentQuestion.question]}
                            typeSpeed={10}
                            showCursor={false}
                            loop={false}
                            className={`${isDarkMode ? ' bg-white text-[#0b1d2f]' : 'text-white bg-[#0b1d2f]'} bg-primary py-1 px-2 rounded-md w-full md:text-lg text-base sm:min-h-[50px] min-h-[170px]`}
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
                            <p className={`${isDarkMode ? ' bg-white text-[#0b1d2f]' : 'text-white bg-[#0b1d2f]'} font-medium md:text-xl text-sm bg-primary  px-2 rounded-lg`}>{currentQuestion.title}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center bg-white rounded-lg">All questions answered!</div>
            )}

            {/* Answer buttons */}
            {currentQuestion && (
                <div className={`${isDarkMode ? ' bg-[rgb(17,17,17)]  border-white' : 'bg-white border-[#0b1d2f]'} flex lg:flex-row flex-col justify-center rounded-lg  border-[3px] w-full xl:gap-5 sm:gap-2 gap-1 sm:p-2.5 p-1 items-center lg:min-h-16 min-h-24 `}>
                    <Button
                        className={`${isDarkMode ? ' bg-white  border-[#0b1d2f] text-[#0b1d2f]' : 'hover:bg-[#06111c] active:bg-black bg-[#0b1d2f] '} xl:w-[90%] w-full h-auto transform transition duration-300 ease-in-out  text-md min-h-[44px]`}
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
                        className={`${isDarkMode ? ' bg-white  border-[#0b1d2f] text-[#0b1d2f]' : 'hover:bg-[#06111c] active:bg-black bg-[#0b1d2f] '} xl:w-[90%] w-full h-auto transform transition duration-300 ease-in-out text-md min-h-[44px]`}
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

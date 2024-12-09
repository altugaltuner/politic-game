"use client";

import { useState, useEffect } from "react";
import GameStats from "../components/GameStats";
import ListElements from "../components/ListElements";
import SettingsArea from "../components/SettingsArea";
import SettingsModal from "../components/SettingsModal";
import SelectedOptionModal from "../components/selectedOptionModal";
import { useTheme } from '@/contexts/ThemeContext';
import { useVolume } from "@/contexts/VolumeContext";
import { elements } from "@/database/elements";
import InventoryModal from "../components/InventoryModal";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/firebase";
import LoadingSpinner from "../components/LoadingSpinner";

type Effects = {
    type: string;
    stat: string;
    value: number;
    agriculturalProduction?: number;
    infrastructureAndEnvironment?: number;
    internalSecurity?: number;
    publicSupport?: number;
    budget?: number;
    internationalRelations?: number;
    [key: string]: number | string | undefined;
};

export default function GamePage() {
    const { volume } = useVolume();
    const [modalOpen, setModalOpen] = useState(false);
    const [openInventoryModal, setOpenInventoryModal] = useState(false);
    const [selectedOptionModalOpen, setSelectedOptionModalOpen] = useState(false);
    const { isDarkMode } = useTheme();
    const handleSelectedOptionModalOpen = () => {
        setSelectedOptionModalOpen(true);
    }
    const [lastingEffects, setLastingEffects] = useState<Effects[]>([]);
    const [agriculture, setAgriculture] = useState<number>(50);
    const [infrastructure, setInfrastructure] = useState<number>(50);
    const [internalSecurity, setInternalSecurity] = useState<number>(50);
    const [international, setInternational] = useState<number>(50);
    const [budget, setBudget] = useState<number>(50);
    const [publicOpinion, setPublicOpinion] = useState<number>(50);
    const [level, setLevel] = useState<number>(1);
    const [score, setScore] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const userDocRef = doc(db, "users", auth.currentUser.uid);
                try {
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        console.log("User data:", userData);
                        setLevel(userData.level ?? 1); // Varsayılan olarak 1
                        setScore(userData.score ?? 0); // Varsayılan olarak 0
                    } else {
                        console.log("User data not found.");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                } finally {
                    setLoading(false); // Veriler yüklendi
                    console.log("User data:", auth.currentUser);
                }
            } else {
                setLoading(false); // Kullanıcı oturum açmamışsa
            }
        };

        fetchUserData();
    }, []);

    const handleBonusEffect = (effect: { type: string; value: number }) => {
        const fiftyEffect = effect.value * 50;
        switch (effect.type) {
            case "agriculture":
                setAgriculture((prev) => prev + fiftyEffect);
                break;
            case "budget":
                setBudget((prev) => prev + fiftyEffect);
                break;
            case "infrastructure":
                setInfrastructure((prev) => prev + fiftyEffect);
                break;
            case "security":
                setInternalSecurity((prev) => prev + fiftyEffect);
                break;
            case "international":
                setInternational((prev) => prev + fiftyEffect);
                break;
            case "public":
                setPublicOpinion((prev) => prev + fiftyEffect);
                break;
            default:
                break;
        }
    }
    const initializeUserBonuses = async (uid: string) => {
        const userDocRef = doc(db, "users", uid);

        // Kullanıcı bonuslarını kontrol et
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
            // Eğer bonuslar yoksa, varsayılan bonusları oluştur
            await setDoc(userDocRef, {
                bonusAgricultural: 1,
                bonusBudget: 1,
                bonusInfrastructure: 1,
                bonusSecurity: 1,
                bonusInternational: 1,
                bonusPublic: 1,
            });
        } else {
            // console.log("User bonuses already exist");
        }
    };
    const [selectedListIDs, setSelectedListIDs] = useState<string[]>([]);

    const fetchUserBonuses = async (uid: string) => {
        const userDocRef = doc(db, "users", uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            //console.log("User bonuses:", userDoc.data());
            return userDoc.data();
        } else {
            //console.log("No user bonuses found");
            return null;
        }
    };

    const updateUserBonus = async (uid: string, bonusType: string, amount: number) => {
        const userDocRef = doc(db, "users", uid);

        // Belirli bir bonusu güncelle
        await updateDoc(userDocRef, {
            [bonusType]: amount,
        });
        console.log(`${bonusType} updated to ${amount}`);
    };

    const playTickSound = () => {
        const audio = new Audio("/sound-effects/button-metal.wav");
        audio.volume = volume;
        audio.onerror = () => console.error("Failed to load victory sound");
        audio.play();
    }

    const setModalOpenFunc = () => {
        setModalOpen(false);
        playTickSound();
    }

    const handleOpenModal = () => {
        setModalOpen(true);
        playTickSound();
    }

    const handleOpenInventoryModal = () => {
        setOpenInventoryModal(true);
        playTickSound();
    }

    const handleSetSelectedListID = (newListID: string) => {
        setSelectedListIDs((prevListIDs) =>
            prevListIDs.includes(newListID) ? prevListIDs : [newListID, ...prevListIDs]
        );

        // Yeni lastingEffect ekleme
        const selectedElement = elements.find((el) => el.listID === newListID);
        if (selectedElement && selectedElement.lastingEffect) {
            setLastingEffects((prev) => [
                ...prev,
                { ...selectedElement.lastingEffect, stat: selectedElement.lastingEffect.stat, type: selectedElement.lastingEffect.type || '' }
            ]);
        }
    };

    // Function to reset selectedListIDs
    const resetSelectedListIDs = () => setSelectedListIDs([]);


    if (loading) {
        return <LoadingSpinner />; // Veriler yüklenene kadar yüklenme animasyonu göster
    }

    return (
        <div className={` ${isDarkMode ? 'bg-black bg-opacity-90' : ''} sm:p-2 p-1 flex xl:flex-row flex-col 2xl:gap-5 gap-1 sm:gap-3 w-full items-start justify-center xl:h-[100vh] h-auto`}>

            <GameStats
                setSelectedListIDs={handleSetSelectedListID}
                resetSelectedListIDs={resetSelectedListIDs}
                handleSelectedOptionModalOpen={handleSelectedOptionModalOpen}
                lastingEffects={lastingEffects}
                setLastingEffects={setLastingEffects}
                agriculture={agriculture}
                infrastructure={infrastructure}
                internalSecurity={internalSecurity}
                international={international}
                budget={budget}
                publicOpinion={publicOpinion}
                setAgriculture={setAgriculture}
                setBudget={setBudget}
                setInfrastructure={setInfrastructure}
                setInternalSecurity={setInternalSecurity}
                setInternational={setInternational}
                setPublicOpinion={setPublicOpinion}
                level={level ?? 1}
                setLevel={setLevel}
                score={score}
                setScore={setScore}
            />

            <div className="flex flex-col sm:gap-2 gap-1 xl:w-[30%] w-full">

                <SettingsArea handleOpenModal={handleOpenModal} modalOpen={modalOpen} handleOpenInventoryModal={handleOpenInventoryModal} />

                <ListElements selectedListIDs={selectedListIDs} />

                <SettingsModal modalOpen={modalOpen} setModalOpenFunc={setModalOpenFunc} />

                <SelectedOptionModal selectedListIDs={selectedListIDs} selectedOptionModalOpen={selectedOptionModalOpen} setSelectedOptionModalOpen={setSelectedOptionModalOpen} />

                <InventoryModal
                    openInventoryModal={openInventoryModal}
                    setOpenInventoryModal={setOpenInventoryModal}
                    updateUserBonus={updateUserBonus}
                    fetchUserBonuses={fetchUserBonuses}
                    initializeUserBonuses={initializeUserBonuses}
                    handleBonusEffect={handleBonusEffect}
                />

            </div>
        </div>
    );
}

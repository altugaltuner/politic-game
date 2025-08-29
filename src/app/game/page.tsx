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
import LoadingSpinner from "../components/LoadingSpinner";
import { PageEffects } from "../types/types";

export default function GamePage() {
    const { volume } = useVolume();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOptionModalOpen, setSelectedOptionModalOpen] = useState(false);
    const { isDarkMode } = useTheme();
    const handleSelectedOptionModalOpen = () => {
        setSelectedOptionModalOpen(true);
    }
    const [lastingEffects, setLastingEffects] = useState<PageEffects[]>([]);
    const [agriculture, setAgriculture] = useState<number>(50);
    const [infrastructure, setInfrastructure] = useState<number>(50);
    const [internalSecurity, setInternalSecurity] = useState<number>(50);
    const [international, setInternational] = useState<number>(50);
    const [budget, setBudget] = useState<number>(50);
    const [publicOpinion, setPublicOpinion] = useState<number>(50);
    const [level, setLevel] = useState<number>(1);
    const [score, setScore] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [selectedListIDs, setSelectedListIDs] = useState<string[]>([]);

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

    const handleSetSelectedListID = (newListID: string) => {
        setSelectedListIDs((prevListIDs) =>
            prevListIDs.includes(newListID) ? prevListIDs : [newListID, ...prevListIDs]
        );

        const selectedElement = elements.find((el) => el.listID === newListID);
        if (selectedElement && selectedElement.lastingEffect) {
            setLastingEffects((prev) => [
                ...prev,
                { ...selectedElement.lastingEffect, stat: selectedElement.lastingEffect.stat, type: selectedElement.lastingEffect.type || '' }
            ]);
        }
    };
    const resetSelectedListIDs = () => setSelectedListIDs([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100); 

        return () => clearTimeout(timer);
    }, []);


    if (loading) {
        return <LoadingSpinner />;
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
                <SettingsArea handleOpenModal={handleOpenModal} modalOpen={modalOpen} />
                <ListElements selectedListIDs={selectedListIDs} />
                <SettingsModal modalOpen={modalOpen} setModalOpenFunc={setModalOpenFunc} />
                <SelectedOptionModal selectedListIDs={selectedListIDs} selectedOptionModalOpen={selectedOptionModalOpen} setSelectedOptionModalOpen={setSelectedOptionModalOpen} />
            </div>
        </div>
    );
}
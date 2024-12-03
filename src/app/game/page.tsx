"use client";

import { useState } from "react";
import GameStats from "../components/GameStats";
import ListElements from "../components/ListElements";
import SettingsArea from "../components/SettingsArea";
import SettingsModal from "../components/SettingsModal";
import SelectedOptionModal from "../components/selectedOptionModal";
import { useTheme } from '@/contexts/ThemeContext';
import { useVolume } from "@/contexts/VolumeContext";
import { elements } from "@/database/elements";

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
    const [selectedOptionModalOpen, setSelectedOptionModalOpen] = useState(false);
    const { isDarkMode } = useTheme();
    const handleSelectedOptionModalOpen = () => {
        setSelectedOptionModalOpen(true);
    }
    const [lastingEffects, setLastingEffects] = useState<Effects[]>([]);

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

    const [selectedListIDs, setSelectedListIDs] = useState<string[]>([]);

    const handleSetSelectedListID = (newListID: string) => {
        setSelectedListIDs((prevListIDs) =>
            prevListIDs.includes(newListID) ? prevListIDs : [newListID, ...prevListIDs]
        );

        // Yeni lastingEffect ekleme
        const selectedElement = elements.find((el) => el.listID === newListID);
        if (selectedElement && selectedElement.lastingEffect) {
            setLastingEffects((prev) => [
                ...prev,
                { ...selectedElement.lastingEffect, stat: selectedElement.lastingEffect.stat }
            ]);
        }
    };



    // Function to reset selectedListIDs
    const resetSelectedListIDs = () => setSelectedListIDs([]);

    return (
        <div className={` ${isDarkMode ? 'bg-black bg-opacity-90' : ''} sm:p-2 p-1 flex xl:flex-row flex-col 2xl:gap-5 gap-1 sm:gap-3 w-full items-start justify-center xl:h-[100vh] h-auto`}>
            <GameStats setSelectedListIDs={handleSetSelectedListID} resetSelectedListIDs={resetSelectedListIDs} handleSelectedOptionModalOpen={handleSelectedOptionModalOpen}
                lastingEffects={lastingEffects} />
            <div className="flex flex-col sm:gap-2 gap-1 xl:w-[25%] w-full">
                <SettingsArea handleOpenModal={handleOpenModal} modalOpen={modalOpen} />
                <ListElements selectedListIDs={selectedListIDs} />
                <SettingsModal modalOpen={modalOpen} setModalOpenFunc={setModalOpenFunc} setModalOpen={function (): void {
                    throw new Error("Function not implemented.");
                }} />
                <SelectedOptionModal selectedListIDs={selectedListIDs} selectedOptionModalOpen={selectedOptionModalOpen} setSelectedOptionModalOpen={setSelectedOptionModalOpen} /> {/* Ensure correct usage */}
            </div>
        </div>
    );
}

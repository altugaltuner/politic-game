"use client";

import { useState } from "react";
import GameStats from "../components/GameStats";
import ListElements from "../components/ListElements";
import SettingsArea from "../components/SettingsArea";
import SettingsModal from "../components/SettingsModal";
import SelectedOptionModal from "../components/selectedOptionModal";

export default function GamePage() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOptionModalOpen, setSelectedOptionModalOpen] = useState(false);

    const handleSelectedOptionModalOpen = () => {
        setSelectedOptionModalOpen(true);
    }

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const [selectedListIDs, setSelectedListIDs] = useState<string[]>([]);


    const handleSetSelectedListID = (newListID: string) => {
        setSelectedListIDs((prevListIDs) =>
            prevListIDs.includes(newListID) ? prevListIDs : [newListID, ...prevListIDs,]
        );
    };

    // Function to reset selectedListIDs
    const resetSelectedListIDs = () => setSelectedListIDs([]);

    return (
        <div className="p-2 flex xl:flex-row flex-col 2xl:gap-5 gap-3 w-full items-start justify-center">
            <GameStats setSelectedListIDs={handleSetSelectedListID} resetSelectedListIDs={resetSelectedListIDs} handleSelectedOptionModalOpen={handleSelectedOptionModalOpen} />
            <div className="flex flex-col gap-3 xl:w-[25%] w-full">
                <SettingsArea handleOpenModal={handleOpenModal} modalOpen={modalOpen} />
                <ListElements selectedListIDs={selectedListIDs} />
                <SettingsModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <SelectedOptionModal selectedListIDs={selectedListIDs} selectedOptionModalOpen={selectedOptionModalOpen} setSelectedOptionModalOpen={setSelectedOptionModalOpen} /> {/* Ensure correct usage */}
            </div>
        </div>
    );
}

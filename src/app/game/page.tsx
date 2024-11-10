"use client";

import { useState } from "react";
import GameStats from "../components/GameStats";
import ListElements from "../components/ListElements";

export default function HomePage() {

    const [selectedListIDs, setSelectedListIDs] = useState<string[]>([]);


    const handleSetSelectedListID = (newListID: string) => {
        setSelectedListIDs((prevListIDs) =>
            prevListIDs.includes(newListID) ? prevListIDs : [newListID, ...prevListIDs,]
        );
    };

    // Function to reset selectedListIDs
    const resetSelectedListIDs = () => setSelectedListIDs([]);

    return (
        <div className="container mx-auto p-2 flex gap-5 w-full items-start">
            <GameStats setSelectedListIDs={handleSetSelectedListID} resetSelectedListIDs={resetSelectedListIDs} />
            <ListElements selectedListIDs={selectedListIDs} />
        </div>
    );
}

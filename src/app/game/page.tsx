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

    return (
        <div className="container mx-auto p-2 flex gap-5 w-full items-start">
            <GameStats setSelectedListIDs={handleSetSelectedListID} />
            <ListElements selectedListIDs={selectedListIDs} />
        </div>
    );
}

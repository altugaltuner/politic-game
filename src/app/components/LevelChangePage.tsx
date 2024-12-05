"use client";
import React, { useEffect, useState } from "react";
import LevelOneImage from "../../../public/symbols/athena-symbol.webp"
import LevelTwoImage from "../../../public/symbols/athlete-standing.webp";
import LevelThreeImage from "../../../public/symbols/bowl-of-hygeia.webp";
import LevelFourImage from "../../../public/symbols/demeter-wheat.webp";
import LevelFiveImage from "../../../public/symbols/dionisos-grape.webp";
import LevelSixImage from "../../../public/symbols/goat-head.webp";
import LevelSevenImage from "../../../public/symbols/hephaestus-symbol.webp";
import LevelEightImage from "../../../public/symbols/law-icon.webp";
import LevelNineImage from "../../../public/symbols/medicine-symbol.webp";
import LevelTenImage from "../../../public/symbols/peace-pigeon-symbol.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const LevelChangePage = ({
    onComplete,
    level,
}: {
    onComplete: () => void;
    level: number;
}) => {
    const [animationClass, setAnimationClass] = useState("translate-x-[-100%]"); // Başlangıç konumu

    const { language } = useLanguage();

    const leveltext = {
        tr: "SEVİYE",
        en: "LEVEL",
        fr: "NIVEAU",
        de: "NIVEAU",
        ru: "УРОВЕНЬ",
        zh: "水平",
        es: "NIVEL",
        pt: "NÍVEL",
    };

    const Levels = [
        { id: 1, name: "level1", image: LevelOneImage },
        { id: 2, name: "level2", image: LevelTwoImage },
        { id: 3, name: "level3", image: LevelThreeImage },
        { id: 4, name: "level4", image: LevelFourImage },
        { id: 5, name: "level5", image: LevelFiveImage },
        { id: 6, name: "level6", image: LevelSixImage },
        { id: 7, name: "level7", image: LevelSevenImage },
        { id: 8, name: "level8", image: LevelEightImage },
        { id: 9, name: "level9", image: LevelNineImage },
        { id: 10, name: "level10", image: LevelTenImage },
    ];

    const currentLevel = Levels.find((l) => l.id === level);

    useEffect(() => {
        const startAnimation = async () => {
            setAnimationClass("translate-x-0"); // Ortaya gelir
            await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 saniye kalır

            setAnimationClass("translate-x-full"); // Sağdan çıkar
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Animasyon süresi

            console.log("Animation completed, hiding LevelChangePage");
            onComplete(); // Bildirim yapılır
        };

        startAnimation();
    }, [level, onComplete]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-1000 bg-black bg-opacity-70 ease-in-out z-50 ${animationClass}`}
        >
            {currentLevel && (
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5 w-[50%] h-[50%]">
                    <h1 className="text-black text-7xl font-bold text-center">{leveltext[language]} {currentLevel.id}</h1>
                </div>
            )}
        </div>
    );
};

export default LevelChangePage;

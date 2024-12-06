"use client";

import React, { useState, useEffect } from 'react';
import { elements } from "../../database/elements.js";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { useVolume } from "@/contexts/VolumeContext";
import { useLanguage } from "@/contexts/LanguageContext";

type Element = {
    id: number;
    title: { [language: string]: string };
    photo: StaticImageData;
    description: { [language: string]: string };
    listID: string;
    lastingEffect?: LastingEffect;
};

type LastingEffect = {
    stat: string;
    value: number;
};

interface SelectedOptionModalProps {
    selectedListIDs: string[];
    selectedOptionModalOpen: boolean;
    setSelectedOptionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const SelectedOptionModal: React.FC<SelectedOptionModalProps> = ({ selectedOptionModalOpen, selectedListIDs, setSelectedOptionModalOpen }) => {
    const { language } = useLanguage();
    const [selectedElement, setSelectedElement] = useState<Element | null>(null);
    const { volume } = useVolume();
    const playNewspaperSound = () => {

        const audio = new Audio("/sound-effects/newspaper.wav");
        audio.volume = volume;
        audio.play();
    };

    const statNames: { [key: string]: string } = {
        infrastructureAndEnvironment: "Infrastructure",
        agriculturalProduction: "Agriculture",
        internalSecurity: "Security",
        publicSupport: "Public Support",
        budget: "Budget",
        internationalRelations: "International Relations",
    };

    useEffect(() => {
        if (selectedOptionModalOpen) {
            playNewspaperSound();
        }
    }, [selectedOptionModalOpen]);

    useEffect(() => {
        if (selectedListIDs.length > 0) {
            const selectedElement = elements.find(element => element.listID === selectedListIDs[0]);
            setSelectedElement(selectedElement || null);
        }
    }, [selectedListIDs, setSelectedOptionModalOpen]);

    if (!selectedOptionModalOpen || !selectedElement) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col bg-white p-5 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px] border-black text-center">
                <div className="flex flex-col gap-3 p-2 border-[2px] rounded-xl border-black bg-white w-[100%]">
                    <h2 className="text-xl font-bold mb-4 text-primary">{selectedElement.title[language]}</h2>
                    <Image
                        width={1820} height={1024}
                        src={selectedElement.photo.src}
                        alt="event-photo"
                        className="w-full rounded-lg"
                    />
                    <p className="text-gray-700 md:text-sm text-xs">{selectedElement.description[language]}</p>
                    {selectedElement.lastingEffect && (
                        <div className="text-gray-700">
                            <h3 className="font-semibold">Lasting Effect:</h3>

                            <p>{statNames[selectedElement.lastingEffect.stat] || selectedElement.lastingEffect.stat}</p>
                            <p> {selectedElement.lastingEffect.value}</p>
                        </div>
                    )}
                </div>
                <Button onClick={() => setSelectedOptionModalOpen(false)}>Kapat</Button>
            </div>
        </div>
    );
};

export default SelectedOptionModal;

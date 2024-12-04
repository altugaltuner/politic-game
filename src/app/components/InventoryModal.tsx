"use client";

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import React, { useState } from 'react';
import Image from 'next/image';
import agricultureBonus from '/public/bonuses/agricultureBonus.webp';
import budgetBonus from '/public/bonuses/golds-icon.webp';
import infrastructureBonus from '/public/bonuses/infrastructureBonus.webp';
import internalSecBonus from '/public/bonuses/internalSecBonus.webp';
import internationalBonus from '/public/bonuses/internationalBonus.webp';
import publicBonus from '/public/bonuses/publicBonus.webp';
import dice from "/public/bonuses/dice-icon.webp";

interface InventoryModalProps {
    modalOpen: boolean;
    openInventoryModal: boolean;
    setOpenInventoryModal: React.Dispatch<React.SetStateAction<boolean>>;
    setBonusBudget: React.Dispatch<React.SetStateAction<number>>;
    setBonusPublic: React.Dispatch<React.SetStateAction<number>>;
    setBonusInternational: React.Dispatch<React.SetStateAction<number>>;
    setBonusInfrastructure: React.Dispatch<React.SetStateAction<number>>;
    setBonusSecurity: React.Dispatch<React.SetStateAction<number>>;
    setBonusAgricultural: React.Dispatch<React.SetStateAction<number>>;
    bonusBudget: number;
    bonusPublic: number;
    bonusInternational: number;
    bonusInfrastructure: number;
    bonusSecurity: number;
    bonusAgricultural: number;
    handleBonusEffect: (effect: { type: string; value: number }) => void;
}


const InventoryModal = ({ setBonusSecurity, setBonusInfrastructure, setBonusInternational, setBonusPublic, setBonusBudget, modalOpen, openInventoryModal, setOpenInventoryModal, setBonusAgricultural, bonusBudget, bonusPublic, bonusInternational, bonusInfrastructure, bonusSecurity, bonusAgricultural, handleBonusEffect, }: InventoryModalProps) => {

    const { language, setLanguage } = useLanguage(); // Dil context'ini kullan
    const { isDarkMode, toggleTheme } = useTheme();
    const [diceLeft, setDiceLeft] = useState(6);

    const close = {
        en: 'Close',
        tr: 'Kapat',
        de: 'Schließen',
        es: 'Cerrar',
        fr: 'Fermer',
        pt: 'Fechar',
        ru: 'Закрыть',
        zh: '关',
    };

    const handleUseBonus = (bonusType: string) => {
        switch (bonusType) {
            case "agriculture":
                if (bonusAgricultural > 0) {
                    setBonusAgricultural((prev) => prev - 1);
                    handleBonusEffect({ type: "agriculture", value: 1 });
                }
                break;
            case "budget":
                if (bonusBudget > 0) {
                    setBonusBudget((prev) => prev - 1);
                    handleBonusEffect({ type: "budget", value: 1 });
                }
                break;
            case "infrastructure":
                if (bonusInfrastructure > 0) {
                    setBonusInfrastructure((prev) => prev - 1);
                    handleBonusEffect({ type: "infrastructure", value: 1 });
                }
                break;
            case "security":
                if (bonusSecurity > 0) {
                    setBonusSecurity((prev) => prev - 1);
                    handleBonusEffect({ type: "security", value: 1 });
                }
                break;
            case "international":
                if (bonusInternational > 0) {
                    setBonusInternational((prev) => prev - 1);
                    handleBonusEffect({ type: "international", value: 1 });
                }
                break;
            case "public":
                if (bonusPublic > 0) {
                    setBonusPublic((prev) => prev - 1);
                    handleBonusEffect({ type: "public", value: 1 });
                }
                break;
            default:
                break;
        }
    };

    const rollDice = () => {
        const diceNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Rolled dice:", diceNumber);
        setDiceLeft((prev) => prev - 1);
        if (diceNumber === 6) {
            const stats = [
                setBonusAgricultural,
                setBonusBudget,
                setBonusInfrastructure,
                setBonusSecurity,
                setBonusInternational,
                setBonusPublic,
            ];
            // Rastgele bir stat seç ve 1 artır
            const randomStat = stats[Math.floor(Math.random() * stats.length)];
            randomStat((prev) => prev + 1);
            console.log("Stat increased!");
        } else {
            console.log("No stat increased.");
        }
    };


    if (!openInventoryModal) return null;
    return (
        <div onClick={() => setOpenInventoryModal(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
            <div onClick={(e) => e.stopPropagation()} className={`relative flex flex-col ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white border-black text-black'} sm:p-5 p-3 rounded-lg min:w-[60%]  items-center gap-4 border-[5px] text-center `}>
                <div className='absolute top-2 right-2'>
                    <p>Dice Countdown : 55</p>
                </div>
                <h1 className='text-3xl font-bold'>Bonuses</h1>
                <div className='flex gap-3 w-full justify-center'>
                    <div className='flex flex-col gap-2'>
                        <Image width={200} height={200} className=' sm:w-9 lg:w-24 w-5 sm:h-9 lg:h-24 h-5' src={agricultureBonus} alt={'agricultureBonus'} />
                        <p>Boost <br /> Agriculture</p>
                        <p className='font-medium text-xl'>{bonusAgricultural}</p>
                        <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => handleUseBonus("agriculture")} >Use</Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image className=' sm:w-9 lg:w-24 w-5 sm:h-9 lg:h-24 h-5' width={200} height={200} src={budgetBonus} alt={'budgetBonus'} />
                        <p>Boost <br /> Budget</p>
                        <p className='font-medium text-xl'>{bonusBudget}</p>
                        <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => handleUseBonus("budget")}>Use</Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image className=' sm:w-9 lg:w-24 w-5 sm:h-9 lg:h-24 h-5' width={200} height={200} src={infrastructureBonus} alt={'infrastructureBonus'} />
                        <p>Boost <br /> Structure</p>
                        <p className='font-medium text-xl'>{bonusInfrastructure}</p>
                        <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => handleUseBonus("infrastructure")}>Use</Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image className=' sm:w-9 lg:w-24 w-5 sm:h-9 lg:h-24 h-5' width={200} height={200} src={internalSecBonus} alt={'internalSecBonus'} />
                        <p>Boost <br /> Security</p>
                        <p className='font-medium text-xl'>{bonusSecurity}</p>
                        <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => handleUseBonus("security")}>Use</Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image className=' sm:w-9 lg:w-24 w-5 sm:h-9 lg:h-24 h-5' width={200} height={200} src={internationalBonus} alt={'internationalBonus'} />
                        <p>Boost <br /> Politics</p>
                        <p className='font-medium text-xl'>{bonusInternational}</p>
                        <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => handleUseBonus("international")}>Use</Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Image className=' sm:w-9 lg:w-24 w-5 sm:h-9 lg:h-24 h-5' width={200} height={200} src={publicBonus} alt={'publicBonus'} />
                        <p>Boost <br /> Support</p>
                        <p className='font-medium text-xl'>{bonusPublic}</p>
                        <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => handleUseBonus("public")}>Use</Button>
                    </div>

                </div>
                <div className='flex flex-row gap-3 w-full justify-center items-center'>
                    <Button
                        className={`${diceLeft === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={rollDice}
                        disabled={diceLeft === 0}
                    >
                        <p>Roll Dice for: {diceLeft}</p>
                        <Image className=' sm:w-9 lg:w-8 w-5 sm:h-9 lg:h-8 h-5' width={200} height={200} src={dice} alt={'dice'} />
                    </Button>
                    <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => setOpenInventoryModal(false)}>{close[language]}</Button>
                </div>
            </div>
        </div>
    )
}

export default InventoryModal
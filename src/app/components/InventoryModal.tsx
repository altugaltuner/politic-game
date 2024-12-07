"use client";

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import agricultureBonus from '/public/bonuses/agricultureBonus.webp';
import budgetBonus from '/public/bonuses/golds-icon.webp';
import infrastructureBonus from '/public/bonuses/infrastructureBonus.webp';
import internalSecBonus from '/public/bonuses/internalSecBonus.webp';
import internationalBonus from '/public/bonuses/internationalBonus.webp';
import publicBonus from '/public/bonuses/publicBonus.webp';
import dice from "/public/bonuses/dice-icon.webp";
import { auth } from '@/firebase';

interface InventoryModalProps {

    openInventoryModal: boolean;
    setOpenInventoryModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleBonusEffect: (effect: { type: string; value: number }) => void;
    fetchUserBonuses: (uid: string) => Promise<any>;
    updateUserBonus: (uid: string, bonusType: string, updatedValue: number) => void;
    initializeUserBonuses: (uid: string) => void;
}

type BonusType = 'bonusAgricultural' | 'bonusBudget' | 'bonusInfrastructure' | 'bonusSecurity' | 'bonusInternational' | 'bonusPublic';

interface Bonuses {
    bonusAgricultural: number;
    bonusBudget: number;
    bonusInfrastructure: number;
    bonusSecurity: number;
    bonusInternational: number;
    bonusPublic: number;
}

const InventoryModal = ({ openInventoryModal,
    setOpenInventoryModal,
    fetchUserBonuses,
    updateUserBonus,
    handleBonusEffect,
    initializeUserBonuses }: InventoryModalProps) => {

    const { language } = useLanguage(); // Dil context'ini kullan
    const { isDarkMode } = useTheme();
    const [diceLeft, setDiceLeft] = useState(6);
    console.log(language);
    const user = auth.currentUser;

    const [bonuses, setBonuses] = useState<Bonuses>({
        bonusAgricultural: 0,
        bonusBudget: 0,
        bonusInfrastructure: 0,
        bonusSecurity: 0,
        bonusInternational: 0,
        bonusPublic: 0,
    });

    const bonusIcons = {
        bonusAgricultural: agricultureBonus,
        bonusBudget: budgetBonus,
        bonusInfrastructure: infrastructureBonus,
        bonusSecurity: internalSecBonus,
        bonusInternational: internationalBonus,
        bonusPublic: publicBonus,
    };



    // Firebase'den bonusları çek
    useEffect(() => {
        if (user) {
            fetchUserBonuses(user.uid).then((userBonuses) => {
                if (userBonuses) {
                    setBonuses(userBonuses);
                }
            });
        }
    }, [user]);

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

    const DiceCountdown = {
        en: 'Dice Countdown : ',
        tr: 'Zar Sayacı : ',
        de: 'Würfel Countdown : ',
        es: 'Contador de Dados : ',
        fr: 'Compte à rebours des dés : ',
        pt: 'Contagem regressiva de dados : ',
        ru: 'Обратный отсчет кубиков : ',
        zh: '骰子倒计时 : ',
    };

    const handleUseBonus = async (bonusType: BonusType) => {
        if (user && bonuses[bonusType] > 0) {
            const updatedValue = bonuses[bonusType] - 1;

            // Firebase'deki bonusu güncelle
            await updateUserBonus(user.uid, bonusType, updatedValue);

            // Local state'i güncelle
            setBonuses((prev) => ({
                ...prev,
                [bonusType]: updatedValue,
            }));
            console.log("bonusType:", bonusType);
            console.log("bonusesText[bonusType]:", bonusesText[bonusType as BonusType]);
            // Bonus etkisini uygula
            handleBonusEffect({ type: bonusType, value: 1 });
        }
    };

    if (user) {
        initializeUserBonuses(user.uid);
    }

    const bonusesText = {
        bonusAgricultural: {
            en: "Boost Agriculture",
            tr: "Tarımı Artır",
            de: "Landwirtschaft steigern",
            es: "Impulsar la agricultura",
            fr: "Augmenter l'agriculture",
            pt: "Aumentar a agricultura",
            ru: "Увеличить сельское хозяйство",
            zh: "增加农业",
        },
        bonusBudget: {
            en: "Boost Budget",
            tr: "Bütçeyi Artır",
            de: "Budget steigern",
            es: "Impulsar el presupuesto",
            fr: "Augmenter le budget",
            pt: "Aumentar o orçamento",
            ru: "Увеличить бюджет",
            zh: "增加预算",
        },
        bonusInfrastructure: {
            en: "Boost Infrastructure",
            tr: "Altyapıyı Artır",
            de: "Infrastruktur steigern",
            es: "Impulsar la infraestructura",
            fr: "Augmenter l'infrastructure",
            pt: "Aumentar a infraestrutura",
            ru: "Увеличить инфраструктуру",
            zh: "增加基础设施",
        },
        bonusSecurity: {
            en: "Boost Security",
            tr: "Güvenliği Artır",
            de: "Sicherheit steigern",
            es: "Impulsar la seguridad",
            fr: "Augmenter la sécurité",
            pt: "Aumentar a segurança",
            ru: "Увеличить безопасность",
            zh: "增加安全",
        },
        bonusInternational: {
            en: "Boost  Relations",
            tr: "Politikayı Artır",
            de: "Beziehungen steigern",
            es: "Impulsar las relaciones",
            fr: "Augmenter les relations",
            pt: "Aumentar as relações",
            ru: "Увеличить отношения",
            zh: "增加关系",
        },
        bonusPublic: {
            en: "Boost Support",
            tr: "Destek Artır",
            de: "Unterstützung steigern",
            es: "Impulsar el apoyo",
            fr: "Augmenter le soutien",
            pt: "Aumentar o suporte",
            ru: "Увеличить поддержку",
            zh: "增加支持",
        },
    }

    const rollDice = async () => {
        if (user) {
            const bonusTypes = Object.keys(bonuses) as Array<keyof Bonuses>;
            const randomBonus = bonusTypes[Math.floor(Math.random() * bonusTypes.length)];

            const updatedValue = bonuses[randomBonus] + 1;

            // Firebase ve local state'i güncelle
            await updateUserBonus(user.uid, randomBonus, updatedValue);
            setBonuses((prev) => ({
                ...prev,
                [randomBonus]: updatedValue,
            }));

            setDiceLeft((prev) => prev - 1);
        }
    };

    if (!openInventoryModal) return null;

    const validBonusTypes = Object.keys(bonusesText);

    return (
        <div onClick={() => setOpenInventoryModal(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
            <div onClick={(e) => e.stopPropagation()} className={`relative flex flex-col ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white border-black text-black'} sm:p-5 p-3 rounded-lg w-[80%]  items-center gap-4 border-[5px] text-center `}>
                <div className='absolute top-2 right-2'>
                    <p>{DiceCountdown[language]} 550NOT DI</p>
                </div>
                <h1 className='text-3xl font-bold'>Bonuses</h1>
                <div className='flex gap-3 w-full justify-center'>
                    {Object.keys(bonuses).filter((bonusType) => validBonusTypes.includes(bonusType)).map((bonusType) => (

                        <div key={bonusType} className="flex flex-col gap-2 w-[16%] justify-between items-center">
                            <Image
                                width={200}
                                height={200}
                                className="sm:w-9 lg:w-24 w-5 sm:h-9 lg:h-24 h-5"
                                src={bonusIcons[bonusType as BonusType]}
                                alt={bonusType}
                            />
                            <p className="break-after-avoid w-24">
                                {bonusesText[bonusType as BonusType]?.[language] || "No text available"}
                            </p>
                            <p className="font-medium text-xl">{bonuses[bonusType as keyof typeof bonuses]}</p>
                            <Button
                                className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''
                                    }`}
                                onClick={() => handleUseBonus(bonusType as keyof typeof bonuses)}
                            >
                                Use
                            </Button>
                        </div>
                    ))}

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
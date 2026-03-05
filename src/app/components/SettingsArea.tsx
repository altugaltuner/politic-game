import React, { useState } from 'react';
import { Settings, CircleUserRound } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { myProfile, president } from '../exportedTexts/translatedTexts';

interface SettingsAreaProps {
    handleOpenModal: () => void;
    modalOpen: boolean;
}

const SettingsArea: React.FC<SettingsAreaProps> = ({ handleOpenModal, modalOpen }) => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();

    const [loading,] = useState<boolean>(true); // Yüklenme durumu

    if (loading) {
        return <div>Loading...</div>; // Yüklenme sırasında gösterilecek mesaj
    }

    return (
        <div className={` ${isDarkMode ? 'border-white bg-black text-white' : 'border-black bg-white text-black'} text-start relative border-[3px] xl:order-1 order-2  rounded-lg sm:p-3 p-2 min-h-[150px]  w-full`}>
            <h2 className="text-xl font-semibold sm:mb-4 mb-2">{myProfile[language]}</h2>
            <div className='flex gap-2'>
                <CircleUserRound size={75} />
                <div className='flex flex-col text-start'>
                    <p className='text-base'>{president[language]}</p>
                </div>
            </div>
            <button className={`${modalOpen ? 'visible' : ''} absolute top-2 right-2 cursor-pointer`} onClick={handleOpenModal} aria-label="Open settings">
                <Settings size={48} />
            </button>
        </div>
    )
}

export default SettingsArea
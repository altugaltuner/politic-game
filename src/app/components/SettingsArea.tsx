import React from 'react';
import { Settings, CircleUserRound } from "lucide-react";
import { useUser } from "@/contexts/usernameContext";
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Box } from 'lucide-react';
interface SettingsAreaProps {
    handleOpenModal: () => void;
    modalOpen: boolean;
    handleOpenInventoryModal: () => void;
}

const SettingsArea: React.FC<SettingsAreaProps> = ({ handleOpenModal, modalOpen, handleOpenInventoryModal }) => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();
    const { username } = useUser();

    const profilim = {
        en: 'My Profile',
        tr: 'Profilim',
        de: 'Mein Profil',
        es: 'Mi perfil',
        fr: 'Mon profil',
        pt: 'Meu perfil',
        ru: 'Мой профиль',
        zh: '我的个人资料',
    };

    const cumhurbaskanı = {
        en: 'President',
        tr: 'Cumhurbaşkanı',
        de: 'Präsident',
        es: 'Presidente',
        fr: 'Président',
        pt: 'Presidente',
        ru: 'Президент',
        zh: '总统',
    };

    return (
        <div className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)] text-white' : 'border-black bg-white text-black'} text-start relative border-[3px] xl:order-1 order-2  rounded-lg sm:p-3 p-2 min-h-[150px]  w-full`}>
            <h2 className="text-xl font-semibold sm:mb-4 mb-2">{profilim[language]}</h2>
            <div className='flex gap-2'>
                <CircleUserRound size={75} />
                <div className='flex flex-col text-start'>
                    <p className='text-base'>{username || "Guest"}</p>
                    <p className='text-base'>{cumhurbaskanı[language]}</p>
                </div>
            </div>
            <button className={`${modalOpen ? 'visible' : ''} absolute top-2 right-2 cursor-pointer`} onClick={handleOpenModal} aria-label="Open settings">
                <Settings size={48} />
            </button>
            <button className={`${modalOpen ? 'visible' : ''} absolute top-2 right-12 cursor-pointer`} onClick={handleOpenInventoryModal} aria-label="Open settings">
                <Box size={48} />
            </button>
        </div>
    )
}

export default SettingsArea
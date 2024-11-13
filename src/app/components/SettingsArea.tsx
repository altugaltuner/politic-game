import React from 'react';
import { Settings, CircleUserRound } from "lucide-react";
import { useUser } from "@/contexts/usernameContext";
import { useTheme } from '@/contexts/ThemeContext';
interface SettingsAreaProps {
    handleOpenModal: () => void;
    modalOpen: boolean;
}

const SettingsArea: React.FC<SettingsAreaProps> = ({ handleOpenModal, modalOpen }) => {

    const { isDarkMode } = useTheme();
    const { username } = useUser();

    return (
        <div className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)] text-white' : 'border-black bg-white text-black'} text-start relative border-[3px] xl:order-1 order-2  rounded-lg p-3 min-h-[172px]  w-full`}>
            <h2 className="text-xl font-semibold mb-4">Profilim</h2>
            <div className='flex gap-2'>
                <CircleUserRound size={75} />
                <div className='flex flex-col text-start'>
                    <p className='text-base'>{username}</p>
                    <p className='text-xs'>Cumhurbaşkanı</p>
                </div>
            </div>
            <button className={`${modalOpen ? 'visible' : ''} absolute top-2 right-2 cursor-pointer`} onClick={handleOpenModal} aria-label="Open settings">
                <Settings size={32} />
            </button>
        </div>
    )
}

export default SettingsArea
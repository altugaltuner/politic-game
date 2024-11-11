import React from 'react';
import { Settings, CircleUserRound } from "lucide-react";

interface SettingsAreaProps {
    handleOpenModal: () => void;
    modalOpen: boolean;
}

const SettingsArea: React.FC<SettingsAreaProps> = ({ handleOpenModal, modalOpen }) => {

    return (
        <div className="text-start relative border-[3px] xl:order-1 order-2 border-black rounded-lg p-3 min-h-[172px] bg-white w-full">
            <h2 className="text-xl font-semibold mb-4">Profilim</h2>
            <div className='flex gap-2'>
                <CircleUserRound size={75} />
                <div className='flex flex-col text-start'>
                    <p className='text-base'>Misafir Oyuncu</p>
                    <p className='text-xs'>Cumhurbaşkanı</p>
                </div>
                {/* <Settings size={32} />
                <ToggleLeft size={32} /> */}
            </div>
            <button className={`${modalOpen ? 'visible' : ''} absolute top-2 right-2 cursor-pointer`} onClick={handleOpenModal} aria-label="Open settings">
                <Settings size={32} />
            </button>
        </div>
    )
}

export default SettingsArea
import React from 'react';
import { Button } from "@/components/ui/button";
import { ToggleLeft, Volume2, VolumeX, Music } from "lucide-react";

interface SettingsModalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ modalOpen, setModalOpen }) => {
    if (!modalOpen) return null;
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
            <div className='flex flex-col bg-white p-5 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px] border-black text-center'>
                <h1>Ayarlar</h1>
                <div className='flex gap-6 w-full justify-center'>
                    <div className='flex gap-1 flex-col items-center border-[2px] rounded-lg border-black p-2'>
                        <p>Mod</p>
                        <ToggleLeft size={32} className="cursor-pointer" />
                    </div>
                    <div className='flex gap-1 flex-col items-center border-[2px] rounded-lg border-black p-2'>
                        <p>Sesler</p>
                        <Volume2 size={32} className="cursor-pointer" />
                    </div>
                    <div className='flex gap-1 flex-col items-center border-[2px] rounded-lg border-black p-2'>
                        <p>Müzik</p>
                        <Music size={32} className="cursor-pointer" />
                    </div>
                </div>
                <Button className='' onClick={() => setModalOpen(false)}>Kapat</Button>
            </div>
        </div>
    );
};

export default SettingsModal
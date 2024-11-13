import React from 'react';
import { Button } from "@/components/ui/button";
import { ToggleLeft, Volume2, Music } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useVolume } from '../../contexts/VolumeContext';
interface SettingsModalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setModalOpenFunc: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ modalOpen, setModalOpenFunc }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { volume, setVolume } = useVolume(); // Global volume state'i alın

    if (!modalOpen) return null;

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };



    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
            <div className={`flex flex-col ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white border-black text-black'} p-5 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px]  text-center`}>
                <h1>Ayarlar</h1>
                <div className='flex gap-6 w-full justify-center'>
                    <div className={`flex gap-1 flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white text-black border-black'} p-2`}>
                        <p>Mod</p>
                        <ToggleLeft size={32} className="cursor-pointer" onClick={toggleTheme} />
                        <p className='w-[70%]'>{isDarkMode ? "Gece Modu" : "Gündüz Modu"}</p>
                    </div>
                    <div className={`flex gap-1 flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white text-black border-black'} p-2`}>
                        <p>Sesler</p>
                        <Volume2 size={32} className="cursor-pointer" />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-24 mt-2"
                        />
                        <p>{Math.round(volume * 100)}%</p>
                    </div>
                    <div className={`flex gap-1 flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white text-black border-black'} p-2`}>
                        <p>Müzik</p>
                        <Music size={32} className="cursor-pointer" />
                    </div>
                </div>
                <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => setModalOpenFunc()}>Kapat</Button>
            </div>
        </div>
    );
};

export default SettingsModal
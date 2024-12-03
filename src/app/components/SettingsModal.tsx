"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ToggleLeft, ToggleRight, Volume2, Volume1, Music, VolumeOff } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useVolume } from '../../contexts/VolumeContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface SettingsModalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setModalOpenFunc: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ modalOpen, setModalOpenFunc }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { volume, setVolume } = useVolume(); // Global volume state'i alın
    const [dropdownOpen, setDropdownOpen] = useState(false);
    if (!modalOpen) return null;

    const { language, setLanguage } = useLanguage(); // Dil context'ini kullan

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    const languages = [
        { value: 'en', label: 'English' },
        { value: 'tr', label: 'Türkçe' },
        { value: 'de', label: 'Deutsch' },
        { value: 'es', label: 'Español' },
        { value: 'fr', label: 'Français' },
        { value: 'pt', label: 'Português' },
        { value: 'ru', label: 'Русский' },
        { value: 'zh', label: '中文 (Chinese)' },
    ];

    const getVolumeIcon = () => {
        if (volume === 0) {
            return <VolumeOff size={32} />;
        } else if (volume < 0.5) {
            return <Volume1 size={32} />;
        } else {
            return <Volume2 size={32} />;
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
            <div className={`flex flex-col ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white border-black text-black'} sm:p-5 p-3 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px]  text-center`}>
                <h1 className='font-semibold text-2xl'>Ayarlar</h1>
                <div className='flex sm:gap-6 gap-1 w-full justify-center'>
                    <div className={`flex gap-1 cursor-pointer min-w-[100px] flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white text-black border-black'} p-2`} onClick={toggleTheme} >
                        <p>Mod</p>
                        {isDarkMode ? <ToggleRight size={40} className="cursor-pointer" /> : <ToggleLeft size={40} className="cursor-pointer" />}

                        <p className='w-[100%]'>{isDarkMode ? "Gece Modu" : "Gündüz Modu"}</p>
                    </div>
                    <div className={`flex gap-1 flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white text-black border-black'} p-2`}>
                        <p>Sesler</p>
                        {getVolumeIcon()}
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-16 mt-2 cursor-pointer"
                        />

                        <p>{Math.round(volume * 100)}%</p>
                    </div>
                    <div className={`flex gap-1 flex-col cursor-not-allowed  items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-[rgb(105,105,105)] text-black border-black'} p-2`}>
                        <p>Müzik</p>
                        <Music size={32} />
                    </div>
                </div>
                <div className='w-full'>
                    <p className='mb-2'>Select Language</p>
                    <div className="relative">
                        <button
                            className="p-2 border rounded w-full text-left"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {languages.find((lang) => lang.value === language)?.label || 'Select Language'}
                        </button>
                        {dropdownOpen && (
                            <div
                                className={`absolute top-12 left-0 w-full max-h-40 overflow-y-scroll rounded-lg shadow-lg border z-10 ${isDarkMode ? 'bg-[rgba(0,0,0,0.8)] text-white' : 'bg-[rgba(255,255,255,1)] text-black'
                                    }`}
                            >
                                {languages.map((lang) => (
                                    <div
                                        key={lang.value}
                                        className="p-2 hover:bg-neutral-300 cursor-pointer"
                                        onClick={() => {
                                            setLanguage(lang.value as 'en' | 'tr'); // Dil değiştir
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {lang.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => setModalOpenFunc()}>Kapat</Button>
            </div>
        </div>
    );
};

export default SettingsModal
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Volume2, Volume1, Music, VolumeOff } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useVolume } from '../../contexts/VolumeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { SettingsModalProps } from '../types/types';
import { header, voice, music, selectLanguage, languages, close, resetGame, reset } from '../exportedTexts/translatedTexts';

const SettingsModal: React.FC<SettingsModalProps> = ({ modalOpen, setModalOpenFunc }) => {
    const { isDarkMode, } = useTheme();
    const { volume, setVolume } = useVolume();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    if (!modalOpen) return null;

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number.parseFloat(e.target.value);
        setVolume(newVolume);
    };

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
        <div onClick={() => setModalOpenFunc()} className='fixed inset-0 flex items-center justify-center bg-primary bg-opacity-50 z-50 '>
            <div onClick={(e) => e.stopPropagation()} className={`flex flex-col ${isDarkMode ? 'bg-black text-white border-white' : 'bg-white border-black text-black'} sm:p-5 p-3 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px]  text-center`}>
                <h1 className='font-semibold text-2xl'>{header[language]}</h1>
                <div className='flex sm:gap-6 gap-1 w-full justify-center'>
                    <div className={`flex gap-1 flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-black text-white border-white' : 'bg-white text-black border-black'} p-2`}>
                        <p>{voice[language]}</p>
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
                    <div className={`flex gap-1 flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-black text-white border-white' : 'bg-white text-black border-black'} p-2`}>
                        <p>{music[language]}</p>
                        <Music size={32} />
                    </div>
                </div>
                <div className='w-full flex gap-5 justify-center items-end'>

                    <div className="relative">
                        <p className='mb-2'>{selectLanguage[language]}</p>
                        <button
                            className="p-2 border rounded w-[200px] text-left"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {languages.find((lang) => lang.value === language)?.label || 'Select Language'}
                        </button>
                        {dropdownOpen && (
                            <div
                                className={`absolute top-16 left-0 w-[200px] max-h-40 overflow-y-scroll rounded-lg shadow-lg border z-10 ${isDarkMode ? 'bg-black text-white' : 'bg-[rgba(255,255,255,1)] text-black'
                                    }`}
                            >
                                {languages.map((lang) => (
                                    <div
                                        key={lang.value}
                                        className="p-2 hover:bg-neutral-300 cursor-pointer"
                                        onClick={() => {
                                            setLanguage(lang.value as 'en' | 'tr');
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {lang.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='h-full flex flex-col gap-2'>
                        <p>{resetGame[language]}</p>
                        <Button disabled>{reset[language]}</Button>
                    </div>

                </div>
                <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : 'bg-black'}`} onClick={() => setModalOpenFunc()}>{close[language]}</Button>
            </div>
        </div>
    );
};

export default SettingsModal
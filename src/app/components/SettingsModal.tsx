"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ToggleLeft, ToggleRight, Volume2, Volume1, Music, VolumeOff } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useVolume } from '../../contexts/VolumeContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface SettingsModalProps {
    modalOpen: boolean;
    setModalOpenFunc: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ modalOpen, setModalOpenFunc }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { volume, setVolume } = useVolume(); // Global volume state'i alın
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { language, setLanguage } = useLanguage(); // Dil context'ini kullan

    if (!modalOpen) return null;

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

    const header = {
        en: 'Settings',
        tr: 'Ayarlar',
        de: 'Einstellungen',
        es: 'Configuraciones',
        fr: 'Paramètres',
        pt: 'Configurações',
        ru: 'Настройки',
        zh: '设置',
    };

    const modes = {
        en: 'Mode',
        tr: 'Mod',
        de: 'Modus',
        es: 'Modo',
        fr: 'Mode',
        pt: 'Modo',
        ru: 'Режим',
        zh: '模式',
    };

    const voice = {
        en: 'Voice',
        tr: 'Ses',
        de: 'Stimme',
        es: 'Voz',
        fr: 'Voix',
        pt: 'Voz',
        ru: 'Голос',
        zh: '声音',
    };

    const music = {
        en: 'Music',
        tr: 'Müzik',
        de: 'Musik',
        es: 'Música',
        fr: 'Musique',
        pt: 'Música',
        ru: 'Музыка',
        zh: '音乐',
    };

    const selectLanguage = {
        en: 'Select Language',
        tr: 'Dil Seçin',
        de: 'Sprache auswählen',
        es: 'Seleccionar idioma',
        fr: 'Sélectionner la langue',
        pt: 'Selecione o idioma',
        ru: 'Выберите язык',
        zh: '选择语言',
    };

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

    const getVolumeIcon = () => {
        if (volume === 0) {
            return <VolumeOff size={32} />;
        } else if (volume < 0.5) {
            return <Volume1 size={32} />;
        } else {
            return <Volume2 size={32} />;
        }
    };

    const resetGame = {
        en: 'Reset Game',
        tr: 'Oyunu Sıfırla',
        de: 'Spiel zurücksetzen',
        es: 'Restablecer juego',
        fr: 'Réinitialiser le jeu',
        pt: 'Redefinir jogo',
        ru: 'Сбросить игру',
        zh: '重置游戏',
    }
    const reset = {
        en: 'Reset',
        tr: 'Sıfırla',
        de: 'Zurücksetzen',
        es: 'Reiniciar',
        fr: 'Réinitialiser',
        pt: 'Redefinir',
        ru: 'Сбросить',
        zh: '重置',
    }

    return (
        <div onClick={() => setModalOpenFunc()} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
            <div onClick={(e) => e.stopPropagation()} className={`flex flex-col ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white border-black text-black'} sm:p-5 p-3 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px]  text-center`}>
                <h1 className='font-semibold text-2xl'>{header[language]}</h1>
                <div className='flex sm:gap-6 gap-1 w-full justify-center'>
                    <div className={`flex gap-1 cursor-pointer min-w-[100px] flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white text-black border-black'} p-2`} onClick={toggleTheme} >
                        <p>{modes[language]}</p>
                        {isDarkMode ? <ToggleRight size={40} className="cursor-pointer" /> : <ToggleLeft size={40} className="cursor-pointer" />}
                    </div>
                    <div className={`flex gap-1 flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white text-black border-black'} p-2`}>
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
                    <div className={`flex gap-1 flex-col items-center border-[2px] rounded-lg ${isDarkMode ? 'bg-[rgb(17,17,17)] text-white border-white' : 'bg-white text-black border-black'} p-2`}>
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
                                className={`absolute top-16 left-0 w-[200px] max-h-40 overflow-y-scroll rounded-lg shadow-lg border z-10 ${isDarkMode ? 'bg-[rgba(0,0,0,0.8)] text-white' : 'bg-[rgba(255,255,255,1)] text-black'
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
                    <div className='h-full flex flex-col gap-2'>
                        <p>{resetGame[language]}</p>
                        <Button>{reset[language]}</Button>
                    </div>

                </div>
                <Button className={`${isDarkMode ? 'bg-white text-black border-white hover:bg-neutral-400' : ''}`} onClick={() => setModalOpenFunc()}>{close[language]}</Button>
            </div>
        </div>
    );
};

export default SettingsModal
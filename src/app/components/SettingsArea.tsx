import React, { useEffect, useState } from 'react';
import { Settings, CircleUserRound, Box } from "lucide-react";
import { useUser } from "@/contexts/usernameContext";
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";

interface SettingsAreaProps {
    handleOpenModal: () => void;
    modalOpen: boolean;
    handleOpenInventoryModal: () => void;
}

const SettingsArea: React.FC<SettingsAreaProps> = ({ handleOpenModal, modalOpen, handleOpenInventoryModal }) => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();
    const [username, setUsername] = useState<string | null>(null); // Kullanıcı adını tutan state
    const [loading, setLoading] = useState<boolean>(true); // Yüklenme durumu


    const fetchUserData = async (uid: string) => {
        try {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("User data:", docSnap.data());
                return docSnap.data(); // Kullanıcı verisini döndürür
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };


    // Bileşen yüklendiğinde kullanıcı verisini çekmek için useEffect
    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            fetchUserData(user.uid)
                .then((userData) => {
                    setUsername(userData?.username || "Guest"); // Kullanıcı adı varsa set et, yoksa "Guest"
                })
                .finally(() => {
                    setLoading(false); // Yüklenme durumu tamamlandı
                });
        } else {
            setLoading(false); // Kullanıcı yoksa yüklenme durumu tamamlandı
        }
    }, []);

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

    if (loading) {
        return <div>Loading...</div>; // Yüklenme sırasında gösterilecek mesaj
    }

    return (
        <div className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)] text-white' : 'border-black bg-white text-black'} text-start relative border-[3px] xl:order-1 order-2  rounded-lg sm:p-3 p-2 min-h-[150px]  w-full`}>
            <h2 className="text-xl font-semibold sm:mb-4 mb-2">{profilim[language]}</h2>
            <div className='flex gap-2'>
                <CircleUserRound size={75} />
                <div className='flex flex-col text-start'>
                    <p className='text-base'>{username}</p>
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
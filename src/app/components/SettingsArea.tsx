import React, { useEffect, useState } from 'react';
import { Settings, CircleUserRound } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";

interface SettingsAreaProps {
    handleOpenModal: () => void;
    modalOpen: boolean;
}

const SettingsArea: React.FC<SettingsAreaProps> = ({ handleOpenModal, modalOpen }) => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();
    const [username, setUsername] = useState<string>(""); // Kullanıcı adı

    const [loading, setLoading] = useState<boolean>(true); // Yüklenme durumu


    const fetchUserData = async (uid: string) => {
        try {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                //console.log("User data:", docSnap.data());
                return docSnap.data(); // Kullanıcı verisini döndürür
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userData = await fetchUserData(user.uid);
                setUsername(userData?.username || "Guest");
            } else {
                setUsername("Guest");
            }
            setLoading(false); // Yüklenme durumu tamamlandı
        });

        return () => unsubscribe(); // Aboneliği temizle
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
        <div className={` ${isDarkMode ? 'border-white bg-[#0b1d2f] text-white' : 'border-[#0b1d2f] bg-white text-[#0b1d2f]'} text-start relative border-[3px] xl:order-1 order-2  rounded-lg sm:p-3 p-2 min-h-[150px]  w-full`}>
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
            {/* <button className={`${modalOpen ? 'visible' : ''} absolute top-2 right-12 cursor-pointer`} onClick={handleOpenInventoryModal} aria-label="Open settings">
                <Box size={48} />
            </button> */}
        </div>
    )
}

export default SettingsArea
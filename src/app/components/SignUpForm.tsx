import React, { useState } from 'react';
import { auth, db } from "@/firebase"; // Firebase auth'ı import edin
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { doc, setDoc } from "firebase/firestore";

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setError] = useState('');
    const [, setSuccess] = useState(false);
    const router = useRouter();
    const { language } = useLanguage();
    const [username, setUsername] = useState(''); // Kullanıcı ismi için state

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Firestore'a kullanıcı ismini kaydet
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: user.email,
                level: 1,
                createdAt: new Date(),
                score: 0,
            });
            setSuccess(true);
            setEmail('');
            setPassword('');
            //console.log("User signed up successfully");
            router.push('/game');
        } catch (err) {
            setError((err as Error).message);
            console.error("Error during sign-up:", err);
        }
        finally {
            setEmail('');
            setPassword('');
        }
    };

    const handleSound = () => {
        const audio = new Audio("/sound-effects/button-metal.wav");
        audio.play();
    }
    const emailHeader = {
        en: 'Email',
        tr: 'E-Posta',
        de: 'E-Mail',
        es: 'Correo electrónico',
        fr: 'Email',
        pt: 'O email',
        ru: 'Электронная почта',
        zh: '电子邮件',
    };
    const passwordHeader = {
        en: 'Password',
        tr: 'Şifre',
        de: 'Passwort',
        es: 'Contraseña',
        fr: 'Mot de passe',
        pt: 'Senha',
        ru: 'Пароль',
        zh: '密码',
    };
    const signUpHeader = {
        en: 'Sign Up',
        tr: 'Kayıt Ol',
        de: 'Anmelden',
        es: 'Regístrate',
        fr: 'S\'inscrire',
        pt: 'Inscrever-se',
        ru: 'Регистрация',
        zh: '注册',
    };

    return (
        <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-center items-center bg-white sm:p-3 p-1 rounded-3xl border-[5px] border-black">
            <form
                className="flex sm:flex-row flex-col gap-3 justify-center sm:items-end items-center w-full"
                onSubmit={handleSignUp}
            >
                <div className="flex flex-col gap-2 sm:gap-0 sm:w-[35%] w-full items-center justify-center">
                    <label htmlFor="username" className="text-lg font-semibold mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="h-10 border-2 border-black rounded-lg pl-2 sm:w-[80%] w-full"
                        placeholder="Enter your username"
                    />
                    <label
                        htmlFor="email"
                        className="text-lg font-semibold mb-1"
                    >
                        {emailHeader[language]}
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-10 border-2 border-black rounded-lg pl-2 sm:w-[80%] w-full"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:gap-0 sm:w-[35%] w-full items-center justify-center">
                    <label
                        htmlFor="password"
                        className="text-lg font-semibold mb-1"
                    >
                        {passwordHeader[language]}
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-10 border-2 border-black rounded-lg pl-2 sm:w-[80%] w-full"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex flex-col gap-3 sm:w-[25%] w-full justify-center items-center">
                    <button
                        type="submit"
                        className="h-10 w-24 md:w-40 p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
                        onClick={handleSound}
                    >
                        {signUpHeader[language]}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;

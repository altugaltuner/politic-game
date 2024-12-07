import React, { useState } from 'react';
import { auth } from "@/firebase"; // Firebase auth'ı import edin
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { language } = useLanguage();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            // Firebase ile kullanıcı giriş işlemi
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in successfully");
            router.push('/game'); // Başarılı giriş sonrası yönlendirme
        } catch (err) {
            setError((err as Error).message);
            console.error("Error during sign-in:", err);
        }
    };

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

    const signInHeader = {
        en: 'Sign In',
        tr: 'Giriş Yap',
        de: 'Einloggen',
        es: 'Iniciar sesión',
        fr: 'Se connecter',
        pt: 'Entrar',
        ru: 'Войти',
        zh: '登录',
    };

    return (
        <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-center items-center bg-white sm:p-3 p-1 rounded-3xl border-[5px] border-black">
            <form
                className="flex sm:flex-row flex-col gap-3 justify-center sm:items-end items-center w-full"
                onSubmit={handleSignIn}
            >
                <div className="flex flex-col gap-2 sm:gap-0 sm:w-[35%] w-full items-center justify-center">
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
                    >
                        {signInHeader[language]}
                    </button>
                </div>
            </form>
            {error && (
                <p className="text-red-500 mt-2">
                    {error}
                </p>
            )}
        </div>
    );
};

export default SignInForm;

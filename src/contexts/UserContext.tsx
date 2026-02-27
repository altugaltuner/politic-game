"use client";
<<<<<<< HEAD

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
// import { auth, db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
=======
import React, { createContext, useState, useContext, ReactNode } from 'react';
>>>>>>> 68287370593facc3815c1be4983db4e083c474d3

interface User {
    id: string;
    email: string;
    username: string;
    level: number;
}

interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

<<<<<<< HEAD
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    //         if (currentUser) {
    //             // Firebase Firestore'dan kullanıcı bilgilerini al
    //             const docRef = doc(db, "users", currentUser.uid);
    //             const docSnap = await getDoc(docRef);

    //             if (docSnap.exists()) {
    //                 const userData = docSnap.data();
    //                 setUser({
    //                     id: currentUser.uid,
    //                     email: userData.email,
    //                     username: userData.username,
    //                     level: userData.level,
    //                 });
    //             } else {
    //                 console.error("No such user document!");
    //             }
    //         } else {
    //             setUser(null);
    //         }
    //     });

    //     return () => unsubscribe();
    // }, []);

=======
>>>>>>> 68287370593facc3815c1be4983db4e083c474d3
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
// VolumeContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VolumeContextType {
    volume: number;
    setVolume: (volume: number) => void;
}

const VolumeContext = createContext<VolumeContextType | undefined>(undefined);

export const VolumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [volume, setVolume] = useState(0.8); // Varsayılan ses seviyesi %80

    return (
        <VolumeContext.Provider value={{ volume, setVolume }}>
            {children}
        </VolumeContext.Provider>
    );
};

// useVolume hook'u doğrudan bileşenlerde veya başka bir hook'ta çağırılmalıdır.
export const useVolume = (): VolumeContextType => {
    const context = useContext(VolumeContext);
    if (!context) {
        throw new Error('useVolume must be used within a VolumeProvider');
    }
    return context;
};

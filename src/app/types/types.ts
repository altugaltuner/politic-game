import { StaticImageData } from "next/image";

export type SetFunctions = {
    setAgriculture: React.Dispatch<React.SetStateAction<number>>;
    setInfrastructure: React.Dispatch<React.SetStateAction<number>>;
    setInternalSecurity: React.Dispatch<React.SetStateAction<number>>;
    setInternational: React.Dispatch<React.SetStateAction<number>>;
    setBudget: React.Dispatch<React.SetStateAction<number>>;
    setPublicOpinion: React.Dispatch<React.SetStateAction<number>>;
};

export type Question = {
    photo: string | File | StaticImageData;
    title: string;
    id: number;
    question: string;
    link?: string;
    level: number;
    answers: {
        listID?: string | null;
        text: string;
        effect: {
            publicSupport?: number;
            budget?: number;
            internalSecurity?: number;
            agriculturalProduction?: number;
            infrastructureAndEnvironment?: number;
            internationalRelations?: number;
            [key: string]: number | undefined;
        };
    }[];
};

export type Props = {
    agriculture: number;
    infrastructure: number;
    internalSecurity: number;
    international: number;
    currency: number;
    publicSupport: number;
    score: number;
    deathLayerStat: string | null;
};

export type Element = {
    id: number;
    title: { [language: string]: string };
    photo: StaticImageData;
    description: { [language: string]: string };
    listID: string;
    lastingEffect?: LastingEffect;
};

export type LastingEffect = {
    stat: string;
    value: number;
};

export interface SelectedOptionModalProps {
    selectedListIDs: string[];
    selectedOptionModalOpen: boolean;
    setSelectedOptionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SettingsModalProps {
    modalOpen: boolean;
    setModalOpenFunc: () => void;
}

export interface SettingsAreaProps {
    handleOpenModal: () => void;
    modalOpen: boolean;
}

export type PageEffects = {
    type: string;
    stat: string;
    value: number;
    agriculturalProduction?: number;
    infrastructureAndEnvironment?: number;
    internalSecurity?: number;
    publicSupport?: number;
    budget?: number;
    internationalRelations?: number;
    [key: string]: number | string | undefined;
};

export type Effects = {
    internalSecurity?: number;
    publicSupport?: number;
    infrastructureAndEnvironment?: number;
    [key: string]: number | undefined;
};

export type Event = {
    id: number;
    title: {
        tr: string;
        en: string;
        fr: string;
        de: string;
        zh: string;
        es: string;
        pt: string;
        ru: string;
    };
    description: {
        tr: string;
        en: string;
        fr: string;
        de: string;
        zh: string;
        es: string;
        pt: string;
        ru: string;
    };
    photo: {
        src: string;
    };
    effects: Effects;
};

export type KeyLabels = {
    internalSecurity: string;
    publicSupport: string;
    infrastructureAndEnvironment: string;
    internationalRelations: string;
    budget: string;
    agriculturalProduction: string;
    [key: string]: string;
};

export type GameStatsProps = {
    agriculture: number;
    infrastructure: number;
    internalSecurity: number;
    international: number;
    budget: number;
    publicOpinion: number;
    level: number;
    score: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    setAgriculture: React.Dispatch<React.SetStateAction<number>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setInfrastructure: React.Dispatch<React.SetStateAction<number>>;
    setInternalSecurity: React.Dispatch<React.SetStateAction<number>>;
    setInternational: React.Dispatch<React.SetStateAction<number>>;
    setBudget: React.Dispatch<React.SetStateAction<number>>;
    setPublicOpinion: React.Dispatch<React.SetStateAction<number>>;
    onEventShown?: (eventId: number) => void;
    lastingEffects: LastingEffects[];
    setLastingEffects: React.Dispatch<
        React.SetStateAction<
            {
                type: string;
                value: number;
                stat: string;
            }[]>>
};

interface LastingEffects {
    stat: string;
    value: number;
    agriculturalProduction?: number;
    infrastructureAndEnvironment?: number;
    internalSecurity?: number;
    publicSupport?: number;
    budget?: number;
    internationalRelations?: number;
}

export type ListElementsProps = {
    selectedListIDs: string[];
    shownEventIDs?: number[];
};

export type ListElementsKeyLabels = {
    internalSecurity: string;
    publicSupport: string;
    infrastructureAndEnvironment: string;
    internationalRelations: string;
    budget: string;
    agriculturalProduction: string;
    [key: string]: string;
};
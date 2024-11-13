// components/functions.ts
import { StaticImageData } from "next/image";
import { adaletQuestions } from "../../database/adalet";
import { aileQuestions } from "../../database/aile";
import { calismaQuestions } from "../../database/calisma";
import { cevreQuestions } from "../../database/cevre";
import { disisleriQuestions } from "../../database/disisleri";
import { egitimQuestions } from "../../database/egitim";
import { enerjiQuestions } from "../../database/enerji";
import { genclikQuestions } from "../../database/genclik";
import { hazineQuestions } from "../../database/hazine";
import { icisleriQuestions } from "../../database/icisleri";
import { saglikQuestions } from "../../database/saglik";
import { sanayiQuestions } from "../../database/sanayi";
import { savunmaQuestions } from "../../database/savunma";
import { tarimQuestions } from "../../database/tarim";
import { ticaretQuestions } from "../../database/ticaret";
import { ulastirmaQuestions } from "../../database/ulastirma";

type SetFunctions = {
    setAgriculture: React.Dispatch<React.SetStateAction<number>>;
    setInfrastructure: React.Dispatch<React.SetStateAction<number>>;
    setInternalSecurity: React.Dispatch<React.SetStateAction<number>>;
    setInternational: React.Dispatch<React.SetStateAction<number>>;
    setBudget: React.Dispatch<React.SetStateAction<number>>;
    setPublicOpinion: React.Dispatch<React.SetStateAction<number>>;
};

type Question = {
    photo: string | File | StaticImageData;
    title: string;
    id: number;
    question: string;
    link?: string;
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

const convertPhotoToString = (questions: Question[]): Question[] => {
    return questions.map(question => ({
        ...question,
        photo: (typeof question.photo === 'object' && 'src' in question.photo)
            ? question.photo.src // StaticImageData'yı string'e dönüştürüyoruz
            : question.photo
    }));
};


export const allQuestions: Question[] = [
    ...convertPhotoToString(adaletQuestions),
    ...convertPhotoToString(aileQuestions),
    ...convertPhotoToString(calismaQuestions),
    ...convertPhotoToString(cevreQuestions),
    ...convertPhotoToString(disisleriQuestions),
    ...convertPhotoToString(egitimQuestions),
    ...convertPhotoToString(enerjiQuestions),
    ...convertPhotoToString(genclikQuestions),
    ...convertPhotoToString(hazineQuestions),
    ...convertPhotoToString(icisleriQuestions),
    ...convertPhotoToString(saglikQuestions),
    ...convertPhotoToString(sanayiQuestions),
    ...convertPhotoToString(savunmaQuestions),
    ...convertPhotoToString(tarimQuestions),
    ...convertPhotoToString(ticaretQuestions),
    ...convertPhotoToString(ulastirmaQuestions),
].filter((question): question is Question => 'id' in question && question.id !== undefined);


// Function to select a random question
export const getRandomQuestion = (usedQuestions: number[]) => {
    const availableQuestions = allQuestions.filter(
        (q) => q.id !== undefined && !usedQuestions.includes(q.id)
    );

    if (availableQuestions.length === 0) {
        return null; // No questions left
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
};

// Function to update stats based on the selected answer's effects

export const updateStats = (
    effect: {
        publicSupport?: number;
        budget?: number;
        internalSecurity?: number;
        agriculturalProduction?: number;
        infrastructureAndEnvironment?: number;
        internationalRelations?: number;
        [key: string]: number | undefined;
    },
    setFunctions: SetFunctions
) => {
    if (typeof effect.publicSupport === "number") {
        setFunctions.setPublicOpinion((prev) => Math.min(100, Math.max(0, prev + (effect.publicSupport ?? 0))));
    }
    if (typeof effect.internalSecurity === "number") {
        setFunctions.setInternalSecurity((prev) => Math.min(100, Math.max(0, prev + (effect.internalSecurity ?? 0))));
    }
    if (typeof effect.internationalRelations === "number") {
        setFunctions.setInternational((prev) => Math.min(100, Math.max(0, prev + (effect.internationalRelations ?? 0))));
    }
    if (typeof effect.budget === "number") {
        setFunctions.setBudget((prev) => Math.min(100, Math.max(0, prev + (effect.budget ?? 0))));
    }
    if (typeof effect.infrastructureAndEnvironment === "number") {
        setFunctions.setInfrastructure((prev) => Math.min(100, Math.max(0, prev + (effect.infrastructureAndEnvironment ?? 0))));
    }
    if (typeof effect.agriculturalProduction === "number") {
        setFunctions.setAgriculture((prev) => Math.min(100, Math.max(0, prev + (effect.agriculturalProduction ?? 0))));
    }
};

export const checkGameOver = (
    publicSupport: number,
    internalSecurity: number,
    internationalRelations: number,
    budget: number,
    infrastructureAndEnvironment: number,
    agriculturalProduction: number
) => {
    return (
        publicSupport <= 1 ||
        internalSecurity <= 1 ||
        internationalRelations <= 1 ||
        budget <= 1 ||
        infrastructureAndEnvironment <= 1 ||
        agriculturalProduction <= 1
    );
};
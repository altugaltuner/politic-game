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
import { nonMinisters } from "../../database/nonMinister.js";
import { turizmQuestions } from "../../database/turizm";

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

const convertPhotoToString = (questions: Question[]): Question[] => {
    return questions.map(question => ({
        ...question,
        photo: (typeof question.photo === 'object' && 'src' in question.photo)
            ? question.photo.src // StaticImageData'yı string'e dönüştürüyoruz
            : question.photo
    }));
};

export const allQuestionsByLanguage: Record<string, Question[]> = {
    en: [
        ...convertPhotoToString(adaletQuestions.en),
        ...convertPhotoToString(aileQuestions.en),
        ...convertPhotoToString(calismaQuestions.en),
        ...convertPhotoToString(cevreQuestions.en),
        ...convertPhotoToString(disisleriQuestions.en),
        ...convertPhotoToString(egitimQuestions.en),
        ...convertPhotoToString(enerjiQuestions.en),
        ...convertPhotoToString(genclikQuestions.en),
        ...convertPhotoToString(hazineQuestions.en),
        ...convertPhotoToString(icisleriQuestions.en),
        ...convertPhotoToString(saglikQuestions.en),
        ...convertPhotoToString(sanayiQuestions.en),
        ...convertPhotoToString(savunmaQuestions.en),
        ...convertPhotoToString(tarimQuestions.en),
        ...convertPhotoToString(ticaretQuestions.en),
        ...convertPhotoToString(ulastirmaQuestions.en),
        ...convertPhotoToString(turizmQuestions.en),
        ...convertPhotoToString(nonMinisters.en),
    ],
    tr: [
        ...convertPhotoToString(adaletQuestions.tr),
        ...convertPhotoToString(aileQuestions.tr),
        ...convertPhotoToString(calismaQuestions.tr),
        ...convertPhotoToString(cevreQuestions.tr),
        ...convertPhotoToString(disisleriQuestions.tr),
        ...convertPhotoToString(egitimQuestions.tr),
        ...convertPhotoToString(enerjiQuestions.tr),
        ...convertPhotoToString(genclikQuestions.tr),
        ...convertPhotoToString(hazineQuestions.tr),
        ...convertPhotoToString(icisleriQuestions.tr),
        ...convertPhotoToString(saglikQuestions.tr),
        ...convertPhotoToString(sanayiQuestions.tr),
        ...convertPhotoToString(savunmaQuestions.tr),
        ...convertPhotoToString(tarimQuestions.tr),
        ...convertPhotoToString(ticaretQuestions.tr),
        ...convertPhotoToString(ulastirmaQuestions.tr),
        ...convertPhotoToString(turizmQuestions.tr),
        ...convertPhotoToString(nonMinisters.tr),
    ],
    de: [
        ...convertPhotoToString(adaletQuestions.de),
        ...convertPhotoToString(aileQuestions.de),
        ...convertPhotoToString(calismaQuestions.de),
        ...convertPhotoToString(cevreQuestions.de),
        ...convertPhotoToString(disisleriQuestions.de),
        ...convertPhotoToString(egitimQuestions.de),
        ...convertPhotoToString(enerjiQuestions.de),
        ...convertPhotoToString(genclikQuestions.de),
        ...convertPhotoToString(hazineQuestions.de),
        ...convertPhotoToString(icisleriQuestions.de),
        ...convertPhotoToString(saglikQuestions.de),
        ...convertPhotoToString(sanayiQuestions.de),
        ...convertPhotoToString(savunmaQuestions.de),
        ...convertPhotoToString(tarimQuestions.de),
        ...convertPhotoToString(ticaretQuestions.de),
        ...convertPhotoToString(ulastirmaQuestions.de),
        ...convertPhotoToString(turizmQuestions.de),
        ...convertPhotoToString(nonMinisters.de),
    ],
    fr: [
        ...convertPhotoToString(adaletQuestions.fr),
        ...convertPhotoToString(aileQuestions.fr),
        ...convertPhotoToString(calismaQuestions.fr),
        ...convertPhotoToString(cevreQuestions.fr),
        ...convertPhotoToString(disisleriQuestions.fr),
        ...convertPhotoToString(egitimQuestions.fr),
        ...convertPhotoToString(enerjiQuestions.fr),
        ...convertPhotoToString(genclikQuestions.fr),
        ...convertPhotoToString(hazineQuestions.fr),
        ...convertPhotoToString(icisleriQuestions.fr),
        ...convertPhotoToString(saglikQuestions.fr),
        ...convertPhotoToString(sanayiQuestions.fr),
        ...convertPhotoToString(savunmaQuestions.fr),
        ...convertPhotoToString(tarimQuestions.fr),
        ...convertPhotoToString(ticaretQuestions.fr),
        ...convertPhotoToString(ulastirmaQuestions.fr),
        ...convertPhotoToString(turizmQuestions.fr),
        ...convertPhotoToString(nonMinisters.fr),
    ],
    pt: [
        ...convertPhotoToString(adaletQuestions.pt),
        ...convertPhotoToString(aileQuestions.pt),
        ...convertPhotoToString(calismaQuestions.pt),
        ...convertPhotoToString(cevreQuestions.pt),
        ...convertPhotoToString(disisleriQuestions.pt),
        ...convertPhotoToString(egitimQuestions.pt),
        ...convertPhotoToString(enerjiQuestions.pt),
        ...convertPhotoToString(genclikQuestions.pt),
        ...convertPhotoToString(hazineQuestions.pt),
        ...convertPhotoToString(icisleriQuestions.pt),
        ...convertPhotoToString(saglikQuestions.pt),
        ...convertPhotoToString(sanayiQuestions.pt),
        ...convertPhotoToString(savunmaQuestions.pt),
        ...convertPhotoToString(tarimQuestions.pt),
        ...convertPhotoToString(ticaretQuestions.pt),
        ...convertPhotoToString(ulastirmaQuestions.pt),
        ...convertPhotoToString(turizmQuestions.pt),
        ...convertPhotoToString(nonMinisters.pt),
    ],
    zh: [
        ...convertPhotoToString(adaletQuestions.zh),
        ...convertPhotoToString(aileQuestions.zh),
        ...convertPhotoToString(calismaQuestions.zh),
        ...convertPhotoToString(cevreQuestions.zh),
        ...convertPhotoToString(disisleriQuestions.zh),
        ...convertPhotoToString(egitimQuestions.zh),
        ...convertPhotoToString(enerjiQuestions.zh),
        ...convertPhotoToString(genclikQuestions.zh),
        ...convertPhotoToString(hazineQuestions.zh),
        ...convertPhotoToString(icisleriQuestions.zh),
        ...convertPhotoToString(saglikQuestions.zh),
        ...convertPhotoToString(sanayiQuestions.zh),
        ...convertPhotoToString(savunmaQuestions.zh),
        ...convertPhotoToString(tarimQuestions.zh),
        ...convertPhotoToString(ticaretQuestions.zh),
        ...convertPhotoToString(ulastirmaQuestions.zh),
        ...convertPhotoToString(turizmQuestions.zh),
        ...convertPhotoToString(nonMinisters.zh),
    ],
    es: [
        ...convertPhotoToString(adaletQuestions.es),
        ...convertPhotoToString(aileQuestions.es),
        ...convertPhotoToString(calismaQuestions.es),
        ...convertPhotoToString(cevreQuestions.es),
        ...convertPhotoToString(disisleriQuestions.es),
        ...convertPhotoToString(egitimQuestions.es),
        ...convertPhotoToString(enerjiQuestions.es),
        ...convertPhotoToString(genclikQuestions.es),
        ...convertPhotoToString(hazineQuestions.es),
        ...convertPhotoToString(icisleriQuestions.es),
        ...convertPhotoToString(saglikQuestions.es),
        ...convertPhotoToString(sanayiQuestions.es),
        ...convertPhotoToString(savunmaQuestions.es),
        ...convertPhotoToString(tarimQuestions.es),
        ...convertPhotoToString(ticaretQuestions.es),
        ...convertPhotoToString(ulastirmaQuestions.es),
        ...convertPhotoToString(turizmQuestions.es),
        ...convertPhotoToString(nonMinisters.es),
    ],
    ru: [
        ...convertPhotoToString(adaletQuestions.ru),
        ...convertPhotoToString(aileQuestions.ru),
        ...convertPhotoToString(calismaQuestions.ru),
        ...convertPhotoToString(cevreQuestions.ru),
        ...convertPhotoToString(disisleriQuestions.ru),
        ...convertPhotoToString(egitimQuestions.ru),
        ...convertPhotoToString(enerjiQuestions.ru),
        ...convertPhotoToString(genclikQuestions.ru),
        ...convertPhotoToString(hazineQuestions.ru),
        ...convertPhotoToString(icisleriQuestions.ru),
        ...convertPhotoToString(saglikQuestions.ru),
        ...convertPhotoToString(sanayiQuestions.ru),
        ...convertPhotoToString(savunmaQuestions.ru),
        ...convertPhotoToString(tarimQuestions.ru),
        ...convertPhotoToString(ticaretQuestions.ru),
        ...convertPhotoToString(ulastirmaQuestions.ru),
        ...convertPhotoToString(turizmQuestions.ru),
        ...convertPhotoToString(nonMinisters.ru),
    ],
};

export const getRandomQuestionByLevel = (usedQuestions: number[], currentLevel: number, language: string) => {
    const availableQuestions = allQuestionsByLanguage[language].filter(
        (q) =>
            q.id !== undefined &&
            !usedQuestions.includes(q.id) &&
            q.level === currentLevel
    );

    if (availableQuestions.length === 0) {
        return null; // Bu seviyede daha fazla soru yok
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
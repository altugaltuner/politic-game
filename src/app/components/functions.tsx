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
import { Question, SetFunctions } from "../types/types";

const convertPhotoToString = (questions: Question[]): Question[] => {
    return questions.map(question => ({
        ...question,
        photo: (typeof question.photo === 'object' && 'src' in question.photo)
            ? question.photo.src
            : question.photo
    }));
};

const SUPPORTED_LANGUAGES = ["en", "tr", "de", "fr", "pt", "zh", "es", "ru"] as const;

type QuestionsByLanguageSource = Record<string, Question[]>;

const QUESTION_SOURCES: QuestionsByLanguageSource[] = [
    adaletQuestions,
    aileQuestions,
    calismaQuestions,
    cevreQuestions,
    disisleriQuestions,
    egitimQuestions,
    enerjiQuestions,
    genclikQuestions,
    hazineQuestions,
    icisleriQuestions,
    saglikQuestions,
    sanayiQuestions,
    savunmaQuestions,
    tarimQuestions,
    ticaretQuestions,
    ulastirmaQuestions,
    turizmQuestions,
    nonMinisters,
];

const buildQuestionsByLanguage = (): Record<string, Question[]> => {
    const result: Record<string, Question[]> = {};

    SUPPORTED_LANGUAGES.forEach((language) => {
        result[language] = QUESTION_SOURCES.flatMap((source) =>
            convertPhotoToString(source[language] ?? [])
        );
    });

    return result;
};

export const allQuestionsByLanguage: Record<string, Question[]> = buildQuestionsByLanguage();

export const getRandomQuestionByLevel = (usedQuestions: number[], currentLevel: number, language: string) => {
    const questionsForLanguage = allQuestionsByLanguage[language] ?? allQuestionsByLanguage.en;

    const availableQuestions = questionsForLanguage.filter(
        (q) =>
            q.id !== undefined &&
            !usedQuestions.includes(q.id) &&
            q.level === currentLevel
    );

    if (availableQuestions.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
};


type EffectKey =
    | "publicSupport"
    | "internalSecurity"
    | "internationalRelations"
    | "budget"
    | "infrastructureAndEnvironment"
    | "agriculturalProduction";

type SetterKey =
    | "setPublicOpinion"
    | "setInternalSecurity"
    | "setInternational"
    | "setBudget"
    | "setInfrastructure"
    | "setAgriculture";

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const EFFECT_TO_SETTER: Array<{ effectKey: EffectKey; setterKey: SetterKey }> = [
    { effectKey: "publicSupport", setterKey: "setPublicOpinion" },
    { effectKey: "internalSecurity", setterKey: "setInternalSecurity" },
    { effectKey: "internationalRelations", setterKey: "setInternational" },
    { effectKey: "budget", setterKey: "setBudget" },
    { effectKey: "infrastructureAndEnvironment", setterKey: "setInfrastructure" },
    { effectKey: "agriculturalProduction", setterKey: "setAgriculture" },
];

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
    EFFECT_TO_SETTER.forEach(({ effectKey, setterKey }) => {
        const delta = effect[effectKey];
        if (typeof delta !== "number") return;

        const setter = setFunctions[setterKey];
        setter((prev) => clamp(prev + delta));
    });
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
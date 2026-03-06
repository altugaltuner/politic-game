import { justiceQuestions } from "../../database/adalet";
import { familyQuestions } from "../../database/aile";
import { workQuestions } from "../../database/calisma";
import { envQuestions } from "../../database/cevre";
import { foreignQuestions } from "../../database/disisleri";
import { eduQuestions } from "../../database/egitim";
import { energyQuestions } from "../../database/enerji";
import { youthQuestions } from "../../database/genclik";
import { treasureQuestions } from "../../database/hazine";
import { internalQuestions } from "../../database/icisleri";
import { healthQuestions } from "../../database/saglik";
import { industryQuestions } from "../../database/sanayi";
import { defenseQuestions } from "../../database/savunma";
import { farmQuestions } from "../../database/tarim";
import { tradeQuestions } from "../../database/ticaret";
import { transportQuestions } from "../../database/ulastirma";
import { nonMinisters } from "../../database/nonMinister.js";
import { tourismQuestions } from "../../database/turizm";
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
    justiceQuestions,
    familyQuestions,
    workQuestions,
    envQuestions,
    foreignQuestions,
    eduQuestions,
    energyQuestions,
    youthQuestions,
    treasureQuestions,
    internalQuestions,
    healthQuestions,
    industryQuestions,
    defenseQuestions,
    farmQuestions,
    tradeQuestions,
    transportQuestions,
    tourismQuestions,
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
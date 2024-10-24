// components/functions.ts
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
import { tarimQuestions } from "../../database/tarim";
import { ticaretQuestions } from "../../database/ticaret";
import { ulastirmaQuestions } from "../../database/ulastirma";
import { ministers } from "@/database/ministers";
import { parameters } from "../../database/parameters";
// Add imports for other question categories as needed...

type SetFunctions = {
    setAgriculture: React.Dispatch<React.SetStateAction<number>>;
    setEducation: React.Dispatch<React.SetStateAction<number>>;
    setInfrastructure: React.Dispatch<React.SetStateAction<number>>;
    setInternalSecurity: React.Dispatch<React.SetStateAction<number>>;
    setInternational: React.Dispatch<React.SetStateAction<number>>;
    setBudget: React.Dispatch<React.SetStateAction<number>>;
    setPublicSupport: React.Dispatch<React.SetStateAction<number>>;
};

type Question = {
    photo: any;
    title: any;
    ministerId: string;
    id: number;
    question: string;
    answers: {
        text: string;
        effect: {
            publicSupport?: number;
            budget?: number;
            internalSecurity?: number;
            educationQuality?: number;
            agriculturalProduction?: number;
            infrastructureAndEnvironment?: number;
            internationalRelations?: number;

            [key: string]: number | undefined;
        };
    }[];
};

export const allQuestions: Question[] = [
    ...adaletQuestions,
    ...aileQuestions,
    ...calismaQuestions,
    ...cevreQuestions,
    ...disisleriQuestions,
    ...egitimQuestions,
    ...enerjiQuestions,
    ...genclikQuestions,
    ...hazineQuestions,
    ...icisleriQuestions,
    ...saglikQuestions,
    ...sanayiQuestions,
    ...tarimQuestions,
    ...ticaretQuestions,
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
        educationQuality?: number;
        agriculturalProduction?: number;
        infrastructureAndEnvironment?: number;
        internationalRelations?: number;
        [key: string]: number | undefined;
    },
    setFunctions: SetFunctions
) => {
    if (typeof effect.publicSupport === "number") {
        setFunctions.setPublicSupport((prev) => Math.max(0, prev + (effect.publicSupport ?? 0)));
    }
    if (typeof effect.internalSecurity === "number") {
        setFunctions.setInternalSecurity((prev) => Math.max(0, prev + (effect.internalSecurity ?? 0)));
    }
    if (typeof effect.internationalRelations === "number") {
        setFunctions.setInternational((prev) => Math.max(0, prev + (effect.internationalRelations ?? 0)));
    }
    if (typeof effect.budget === "number") {
        setFunctions.setBudget((prev) => Math.max(0, prev + (effect.budget ?? 0)));
    }
    if (typeof effect.educationQuality === "number") {
        setFunctions.setEducation((prev) => Math.max(0, prev + (effect.educationQuality ?? 0)));
    }
    if (typeof effect.infrastructureAndEnvironment === "number") {
        setFunctions.setInfrastructure((prev) => Math.max(0, prev + (effect.infrastructureAndEnvironment ?? 0)));
    }
    if (typeof effect.agriculturalProduction === "number") {
        setFunctions.setAgriculture((prev) => Math.max(0, prev + (effect.agriculturalProduction ?? 0)));
    }
};

// Function to check if the game is over
export const checkGameOver = (publicSupport: number, internalSecurity: number, internationalRelations: number, budget: number, educationQuality: number, infrastructureAndEnvironment: number, agriculturalProduction: number) => {
    if (publicSupport <= 1 || internalSecurity <= 1 || internationalRelations <= 1 || budget <= 1 || educationQuality <= 1 || infrastructureAndEnvironment <= 1 || agriculturalProduction <= 1) {
        return (
            <div>
                <h1>Game Over</h1>
                <p>You have lost the public support!</p>
            </div>
        );
    }
    return null;
};
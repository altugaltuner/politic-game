"use client";

import { useState, useEffect } from "react";
import GameStats from "../components/GameStats";
import { useTheme } from '@/contexts/ThemeContext';
import { elements } from "@/database/elements";
import { events } from "@/database/events";
import LoadingSpinner from "../components/LoadingSpinner";
import { PageEffects } from "../types/types";
import { allQuestionsByLanguage } from "../components/functions";
import { useLanguage } from "@/contexts/LanguageContext";
import ListElements from "../components/ListElements";

export default function GamePage() {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();
    const [lastingEffects, setLastingEffects] = useState<PageEffects[]>([]);
    const [agriculture, setAgriculture] = useState<number>(50);
    const [infrastructure, setInfrastructure] = useState<number>(50);
    const [internalSecurity, setInternalSecurity] = useState<number>(50);
    const [international, setInternational] = useState<number>(50);
    const [budget, setBudget] = useState<number>(50);
    const [publicOpinion, setPublicOpinion] = useState<number>(50);
    const [level, setLevel] = useState<number>(1);
    const [score, setScore] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [shownEventIDs, setShownEventIDs] = useState<number[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const questionUrls = new Set<string>();
        const auxiliaryUrls = new Set<string>();

        (allQuestionsByLanguage[language] || []).forEach((question) => {
            if (typeof question.photo === "string") {
                questionUrls.add(question.photo);
            } else if (typeof question.photo === "object" && question.photo && "src" in question.photo) {
                questionUrls.add(question.photo.src);
            }
        });

        events.forEach((event) => {
            if (typeof event.photo === "string") {
                auxiliaryUrls.add(event.photo);
            } else if (typeof event.photo === "object" && event.photo && "src" in event.photo) {
                auxiliaryUrls.add(event.photo.src);
            }
        });

        elements.forEach((element) => {
            if (typeof element.photo === "string") {
                auxiliaryUrls.add(element.photo);
            } else if (typeof element.photo === "object" && element.photo && "src" in element.photo) {
                auxiliaryUrls.add(element.photo.src);
            }
        });

        const allUrls = Array.from(questionUrls).concat(Array.from(auxiliaryUrls));
        let cancelled = false;
        let cursor = 0;
        const concurrency = 36;

        const preloadNext = () => {
            if (cancelled || cursor >= allUrls.length) return;
            const url = allUrls[cursor];
            cursor += 1;
            const img = new globalThis.Image();
            img.decoding = "async";
            img.onload = preloadNext;
            img.onerror = preloadNext;
            img.src = url;
        };
        for (let i = 0; i < Math.min(concurrency, allUrls.length); i += 1) {
            preloadNext();
        }
        return () => {
            cancelled = true;
        };
    }, [language]);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className={` ${isDarkMode ? 'bg-primary bg-opacity-90' : ''} sm:p-2 p-1 flex xl:flex-row flex-col 2xl:gap-5 gap-1 sm:gap-3 w-full items-start justify-center xl:h-[100vh] h-auto`}>
            <GameStats
                lastingEffects={lastingEffects}
                setLastingEffects={setLastingEffects}
                agriculture={agriculture}
                infrastructure={infrastructure}
                internalSecurity={internalSecurity}
                international={international}
                budget={budget}
                publicOpinion={publicOpinion}
                setAgriculture={setAgriculture}
                setBudget={setBudget}
                setInfrastructure={setInfrastructure}
                setInternalSecurity={setInternalSecurity}
                setInternational={setInternational}
                setPublicOpinion={setPublicOpinion}
                level={level ?? 1}
                setLevel={setLevel}
                score={score}
                setScore={setScore}
                onEventShown={(eventId) => {
                    setShownEventIDs((prev) => (prev.includes(eventId) ? prev : [eventId, ...prev]));
                }}
            />

            <div className="flex flex-col sm:gap-2 gap-1 xl:w-[30%] w-full">
                <ListElements selectedListIDs={[]} shownEventIDs={shownEventIDs} />
            </div>
        </div>
    );
}
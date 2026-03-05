import React, { useLayoutEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { elements } from "../../database/elements.js";
import { events } from "../../database/events";
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { newsName, noNewsYet, statNames, lastingEffectText } from '../exportedTexts/translatedTexts';
import { ListElementsProps } from '../types/types';

const ListElements: React.FC<ListElementsProps> = ({ selectedListIDs, shownEventIDs = [] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { isDarkMode } = useTheme();
    const filteredElements = selectedListIDs
        ? selectedListIDs.flatMap(id => elements.filter(element => element.listID === id))
        : [];
    const filteredEvents = shownEventIDs
        ? shownEventIDs.flatMap(id => events.filter(event => event.id === id))
        : [];

    const combinedItems = [
        ...filteredEvents.map((event) => ({ type: "event" as const, data: event })),
        ...filteredElements.map((element) => ({ type: "element" as const, data: element })),
    ];

    const { language } = useLanguage();
    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [selectedListIDs, shownEventIDs]);

    return (
        <div ref={scrollRef} className={` ${isDarkMode ? 'border-white bg-primary text-white' : 'border-black bg-white text-black'} text-center border-[3px] xl:order-2 order-1  rounded-lg sm:p-2 p-1 w-[100%] max-h-[900px] `}>
            <h2 className="md:text-xl text-lg font-semibold md:mb-4 mb-2">{newsName[language]}</h2>
            <ScrollArea className="w-full rounded-md md:p-2 p-0 max-h-[780px] overflow-y-auto xl:flex xl:flex-row xl:gap-5">
                {combinedItems.length > 0 ? (
                    combinedItems.map((item) => (
                        <div key={`${item.type}-${item.data.id}`} className={` ${isDarkMode ? 'border-white bg-primary' : 'border-black bg-white'} flex flex-col gap-2 p-2 border-[2px] rounded-xl  mb-3 w-[100%]`}>
                            <h3 className="text-base font-bold">{item.data.title[language]}</h3>
                            <Image
                                width={1820}
                                height={1024}
                                src={item.data.photo.src}
                                alt={item.type === "event" ? "event-photo" : "list-photo"}
                                className="w-full rounded-lg"
                            />
                            <p className={` ${isDarkMode ? 'text-white' : 'text-gray-700'}  md:text-sm text-xs`} >{item.data.description[language]}</p>

                            {item.type === "element" && item.data.lastingEffect && (
                                <div>
                                    <h2>{lastingEffectText[language]}</h2>
                                    <p>{statNames[language]?.[item.data.lastingEffect.stat] || item.data.lastingEffect.stat}</p>
                                    <p>{item.data.lastingEffect.value}</p>
                                </div>
                            )}

                            {item.type === "event" && (
                                <div>
                                    <h2>{lastingEffectText[language]}</h2>
                                    {Object.entries(item.data.effects).map(([key, value]) => (
                                        <p key={`${item.data.id}-${key}`}>
                                            {(statNames[language]?.[key] || key)}: {value}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>{noNewsYet[language]}</p>
                )}
            </ScrollArea>
        </div>
    );
};

export default ListElements;
import React, { useLayoutEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { elements } from "../../database/elements.js";
import { useTheme } from '@/contexts/ThemeContext';

type ListElementsProps = {
    selectedListIDs: string[];
};

const ListElements: React.FC<ListElementsProps> = ({ selectedListIDs }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { isDarkMode } = useTheme();
    // Filter and arrange elements based on selectedListIDs, ensuring newest appears at the top
    const filteredElements = selectedListIDs
        ? selectedListIDs.flatMap(id => elements.filter(element => element.listID === id))
        : [];

    // Scroll to the top when selectedListID changes
    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [selectedListIDs]);

    return (
        <div ref={scrollRef} className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)] text-white' : 'border-black bg-white text-black'} text-center border-[3px] xl:order-2 order-1  rounded-lg sm:p-2 p-1 w-[100%] max-h-[900px] `}>
            <h2 className="md:text-xl text-lg font-semibold md:mb-4 mb-2">Ulus Gazetesi</h2>
            {/* <p>Toplam Etkiler : </p> */}
            <ScrollArea className="w-full rounded-md md:p-2 p-0 max-h-[615px] overflow-y-auto xl:flex xl:flex-row xl:gap-5">
                {filteredElements.length > 0 ? (
                    filteredElements.map(element => (
                        <div key={element.id} className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)]' : 'border-black bg-white'} flex flex-col gap-2 p-2 border-[2px] rounded-xl  mb-3 w-[100%]`}>
                            <h3 className="text-base font-bold">{element.title}</h3>
                            <Image
                                width={1820} height={1024}
                                src={element.photo.src}
                                alt="victoryImg"
                                className="w-full rounded-lg"
                            />
                            <p className={` ${isDarkMode ? 'text-white' : 'text-gray-700'}  md:text-sm text-xs`} >{element.description}</p>
                        </div>
                    ))
                ) : (
                    <p>Henüz bir haber yok...</p>
                )}

            </ScrollArea>
        </div>
    );
};

export default ListElements;

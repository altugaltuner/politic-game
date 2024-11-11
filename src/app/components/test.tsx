import React, { useLayoutEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { elements } from "../../database/elements.js";

type ListElementsProps = {
    selectedListIDs: string[];
};

const ListElements: React.FC<ListElementsProps> = ({ selectedListIDs }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Get the latest selected element based on the last selectedListID
    const latestElement = selectedListIDs.length > 0
        ? elements.find(element => element.listID === selectedListIDs[selectedListIDs.length - 1])
        : null;

    // Scroll to the top when selectedListID changes
    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [selectedListIDs]);

    return (
        <div ref={scrollRef} className="text-center border-[3px] xl:order-2 order-1 border-black rounded-lg sm:p-3 p-2 w-[100%] max-h-[900px] bg-white">
            <h2 className="md:text-xl text-lg font-semibold md:mb-4 mb-2">Millet Postası</h2>
            <ScrollArea className="w-full rounded-md md:p-2 p-0 max-h-[615px] overflow-y-auto xl:flex xl:flex-row xl:gap-5">
                {latestElement ? (
                    <div key={latestElement.id} className="flex flex-col gap-2 p-2 border-[2px] rounded-xl border-black bg-white mb-3 w-[100%]">
                        <h3 className="text-base font-bold">{latestElement.title}</h3>
                        <Image
                            width={1820}
                            height={1024}
                            src={latestElement.photo.src}
                            alt={latestElement.title}
                            className="w-full rounded-lg"
                        />
                        <p className="text-gray-700 md:text-sm text-xs">{latestElement.description}</p>
                    </div>
                ) : (
                    <p>Henüz bir haber yok...</p>
                )}
            </ScrollArea>
        </div>
    );
};

export default ListElements;

import React, { useLayoutEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { elements } from "../../database/elements.js";

type ListElementsProps = {
    selectedListIDs: string[];
};

const ListElements: React.FC<ListElementsProps> = ({ selectedListIDs }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

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
        <div ref={scrollRef} className=" text-center border-[3px] border-black rounded-lg p-3 w-[22%] max-h-[900px] bg-white">
            <h2 className="text-xl font-semibold mb-4">Millet Gazetesi</h2>
            {/* <p>Toplam Etkiler : </p> */}
            <ScrollArea className=" w-full rounded-md p-2 max-h-[800px] overflow-y-auto">
                {filteredElements.map(element => (
                    <div key={element.id} className="flex flex-col gap-2 p-2 border-[2px] rounded-xl border-black bg-white mb-3">
                        <h3 className="text-base font-bold">{element.title}</h3>
                        <Image
                            width={1820} height={1024}
                            src={element.photo.src}
                            alt="victoryImg"
                            className="w-full h-28 rounded-lg"
                        />
                        <p className="text-gray-700 text-sm">{element.description}</p>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
};

export default ListElements;

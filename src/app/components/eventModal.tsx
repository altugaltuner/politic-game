import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useLanguage } from "@/contexts/LanguageContext";
import { Event, KeyLabels } from "../types/types";
import { keyLabels, close, effect } from "../exportedTexts/translatedTexts";

export const EventModal = ({ event, onClose }: { event: Event, onClose: (parameters: object) => void }) => {
    const { language } = useLanguage();
    const labels = keyLabels[language] || keyLabels.en;

    if (!event) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col bg-white md:p-5 p-2 rounded-lg w-[90%] max-w-lg items-center gap-3 border-[5px] border-black text-center">
                <h2 className="text-xl font-bold mb-4 text-black">{event.title[language]}</h2>
                <Image src={event.photo.src} alt="event-photo" width={1820} height={1024} className="max-w-80 rounded-lg w-[75%]" />
                <p className="text-gray-700">{event.description[language]}</p>

                <div className="mb-4 text-gray-700">
                    <h3 className="font-semibold">{effect[language]}</h3>
                    <ul>
                        {Object.entries(event.effects).map(([key, value]) => (
                            <li key={key}>
                                {(labels as KeyLabels)[key] || key}: {value}
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    onClick={() => onClose(event.effects)}
                    className=" text-white px-4 py-2 rounded-lg transition bg-black"
                >
                    {close[language]}
                </Button>
            </div>
        </div>
    );
};
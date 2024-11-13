import { Button } from "@/components/ui/button";
import Image from 'next/image';

type Effects = {
    internalSecurity?: number;
    publicSupport?: number;
    infrastructureAndEnvironment?: number;
    [key: string]: number | undefined; // Allow other keys
};

type KeyLabels = {
    internalSecurity: string;
    publicSupport: string;
    infrastructureAndEnvironment: string;
    [key: string]: string; // Allow other keys
};

type Event = {
    id: number;
    title: string;
    description: string;
    photo: {
        src: string;
    };
    effects: Effects;
};

export const EventModal = ({ event, onClose }: { event: Event, onClose: (parameters: object) => void }) => {

    // Define custom labels for specific keys
    const keyLabels: KeyLabels = {
        internalSecurity: "Güvenlik",
        publicSupport: "Destek",
        infrastructureAndEnvironment: "Altyapı",
        internationalRelations: "Politika",
        budget: "Bütçe",
        agriculturalProduction: "Tarım",
    };

    if (!event) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col bg-white p-5 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px] border-black text-center">
                <h2 className="text-xl font-bold mb-4 text-primary">{event.title}</h2>
                <Image src={event.photo.src} alt="event-photo" width={1820} height={1024} />
                <p className="text-gray-700">{event.description}</p>
                {/* Render each effect in the effects object */}
                <div className="mb-4 text-gray-700">
                    <h3 className="font-semibold">Etkisi:</h3>
                    <ul>
                        {Object.entries(event.effects).map(([key, value]) => (
                            <li key={key}>
                                {keyLabels[key] || key}: {value}
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    onClick={() => onClose(event.effects)} // Pass the effects as parameters
                    className=" text-white px-4 py-2 rounded-lg ransition"
                >
                    Kapat
                </Button>
            </div>
        </div>
    );
};

import { Button } from "@/components/ui/button";

export const EventModal = ({ event, onClose }: { event: any, onClose: () => void }) => {
    if (!event) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col bg-white p-5 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px] border-black text-center">
                <h2 className="text-xl font-bold mb-4 text-primary">{event.title}</h2>
                <img src={event.photo.src} alt="event-photo" />
                <p className="text-gray-700">{event.description}</p>
                <p className="mb-4 text-gray-700">Etkisi : {event.effects}</p>
                <Button
                    onClick={onClose}
                    className=" text-white px-4 py-2 rounded-lg ransition"
                >
                    Kapat
                </Button>
            </div>
        </div>
    );
};

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useLanguage } from "@/contexts/LanguageContext";

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

    const { language } = useLanguage();

    const keyLabels: { [language: string]: KeyLabels } = {
        tr: {
            internalSecurity: "Güvenlik",
            publicSupport: "Destek",
            infrastructureAndEnvironment: "Altyapı",
            internationalRelations: "Politika",
            budget: "Bütçe",
            agriculturalProduction: "Tarım",
        },
        en: {
            internalSecurity: "Security",
            publicSupport: "Support",
            infrastructureAndEnvironment: "Infrastructure",
            internationalRelations: "Policy",
            budget: "Budget",
            agriculturalProduction: "Agriculture",
        },
        fr: {
            internalSecurity: "Sécurité",
            publicSupport: "Soutien",
            infrastructureAndEnvironment: "Infrastructure",
            internationalRelations: "Politique",
            budget: "Budget",
            agriculturalProduction: "Agriculture",
        },
        de: {
            internalSecurity: "Sicherheit",
            publicSupport: "Unterstützung",
            infrastructureAndEnvironment: "Infrastruktur",
            internationalRelations: "Politik",
            budget: "Haushalt",
            agriculturalProduction: "Landwirtschaft",
        },
        es: {
            internalSecurity: "Seguridad",
            publicSupport: "Apoyo",
            infrastructureAndEnvironment: "Infraestructura",
            internationalRelations: "Política",
            budget: "Presupuesto",
            agriculturalProduction: "Agricultura",
        },
        pt: {
            internalSecurity: "Segurança",
            publicSupport: "Apoio",
            infrastructureAndEnvironment: "Infraestrutura",
            internationalRelations: "Política",
            budget: "Orçamento",
            agriculturalProduction: "Agricultura",
        },
        ru: {
            internalSecurity: "Безопасность",
            publicSupport: "Поддержка",
            infrastructureAndEnvironment: "Инфраструктура",
            internationalRelations: "Политика",
            budget: "Бюджет",
            agriculturalProduction: "Сельское хозяйство",
        },
        zh: {
            internalSecurity: "安全",
            publicSupport: "支持",
            infrastructureAndEnvironment: "基础设施",
            internationalRelations: "政策",
            budget: "预算",
            agriculturalProduction: "农业",
        },
    };

    const close = {
        tr: "Kapat",
        en: "Close",
        fr: "Fermer",
        de: "Schließen",
        es: "Cerrar",
        pt: "Fechar",
        ru: "Закрыть",
        zh: "关闭",
    }

    const effect = {
        tr: "Etkisi:",
        en: "Effect:",
        fr: "Effet:",
        de: "Wirkung:",
        es: "Efecto:",
        pt: "Efeito:",
        ru: "Эффект:",
        zh: "效果:",
    };

    const labels = keyLabels[language] || keyLabels.en;

    if (!event) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col bg-white p-5 rounded-lg w-[90%] max-w-lg items-center gap-4 border-[5px] border-black text-center">
                <h2 className="text-xl font-bold mb-4 text-primary">{event.title}</h2>
                <Image src={event.photo.src} alt="event-photo" width={1820} height={1024} />
                <p className="text-gray-700">{event.description}</p>
                {/* Render each effect in the effects object */}
                <div className="mb-4 text-gray-700">
                    <h3 className="font-semibold">{effect[language]}</h3>
                    <ul>
                        {Object.entries(event.effects).map(([key, value]) => (
                            <li key={key}>
                                {labels[key] || key}: {value}
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    onClick={() => onClose(event.effects)} // Pass the effects as parameters
                    className=" text-white px-4 py-2 rounded-lg ransition"
                >
                    {close[language]}
                </Button>
            </div>
        </div>
    );
};

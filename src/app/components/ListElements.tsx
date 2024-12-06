import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { elements } from "../../database/elements.js";
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

type ListElementsProps = {
    selectedListIDs: string[];
};

type KeyLabels = {
    internalSecurity: string;
    publicSupport: string;
    infrastructureAndEnvironment: string;
    internationalRelations: string;
    budget: string;
    agriculturalProduction: string;
    [key: string]: string; // Allow other keys
};

const ListElements: React.FC<ListElementsProps> = ({ selectedListIDs }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { isDarkMode } = useTheme();
    // Filter and arrange elements based on selectedListIDs, ensuring newest appears at the top
    const filteredElements = selectedListIDs
        ? selectedListIDs.flatMap(id => elements.filter(element => element.listID === id))
        : [];
    const { language } = useLanguage();
    // Scroll to the top when selectedListID changes
    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [selectedListIDs]);

    const gazeteAdı = {
        en: 'National Newspaper',
        tr: 'Ulus Gazetesi',
        de: 'Nationale Zeitung',
        es: 'Periódico Nacional',
        fr: 'Journal National',
        pt: 'Jornal Nacional',
        ru: 'Национальная газета',
        zh: '全国报纸',
    };

    const noNewsYet = {
        en: 'No news yet...',
        tr: 'Henüz bir haber yok...',
        de: 'Noch keine Nachrichten...',
        es: '¡Todavía no hay noticias...',
        fr: 'Pas encore de nouvelles...',
        pt: 'Ainda sem notícias...',
        ru: 'Пока нет новостей...',
        zh: '还没有新闻...',
    };

    const statNames: { [language: string]: KeyLabels } = {
        en: {
            infrastructureAndEnvironment: "Infrastructure",
            agriculturalProduction: "Agriculture",
            internalSecurity: "Security",
            publicSupport: "Support",
            budget: "Budget",
            internationalRelations: "Politics",
        },
        tr: {
            infrastructureAndEnvironment: "Altyapı",
            agriculturalProduction: "Tarım",
            internalSecurity: "Güvenlik",
            publicSupport: "Destek",
            budget: "Bütçe",
            internationalRelations: "Politika",
        },
        de: {
            infrastructureAndEnvironment: "Infrastruktur",
            agriculturalProduction: "Landwirtschaft",
            internalSecurity: "Sicherheit",
            publicSupport: "Unterstützung",
            budget: "Budget",
            internationalRelations: "Politik",
        },
        es: {
            infrastructureAndEnvironment: "Infraestructura",
            agriculturalProduction: "Agricultura",
            internalSecurity: "Seguridad",
            publicSupport: "Apoyo",
            budget: "Presupuesto",
            internationalRelations: "Política",
        },
        fr: {
            infrastructureAndEnvironment: "Infrastructure",
            agriculturalProduction: "Agriculture",
            internalSecurity: "Sécurité",
            publicSupport: "Soutien",
            budget: "Budget",
            internationalRelations: "Politique",
        },
        pt: {
            infrastructureAndEnvironment: "Infraestrutura",
            agriculturalProduction: "Agricultura",
            internalSecurity: "Segurança",
            publicSupport: "Apoio",
            budget: "Orçamento",
            internationalRelations: "Política",
        },
        ru: {
            infrastructureAndEnvironment: "Инфраструктура",
            agriculturalProduction: "Сельское хозяйство",
            internalSecurity: "Безопасность",
            publicSupport: "Поддержка",
            budget: "Бюджет",
            internationalRelations: "Политика",
        },
        zh: {
            infrastructureAndEnvironment: "基础设施",
            agriculturalProduction: "农业",
            internalSecurity: "安全",
            publicSupport: "支持",
            budget: "预算",
            internationalRelations: "政治",
        },
    };


    useEffect(() => {
        console.log("Filtered Elements: ", filteredElements);
    }, [filteredElements]);

    const lastingEffectText = {
        en: 'Lasting Effect',
        tr: 'Kalıcı Etki',
        de: 'Langfristige Wirkung',
        es: 'Efecto Duradero',
        fr: 'Effet Durable',
        pt: 'Efeito Duradouro',
        ru: 'Долгосрочный эффект',
        zh: '持久效果',
    };

    return (
        <div ref={scrollRef} className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)] text-white' : 'border-black bg-white text-black'} text-center border-[3px] xl:order-2 order-1  rounded-lg sm:p-2 p-1 w-[100%] max-h-[900px] `}>
            <h2 className="md:text-xl text-lg font-semibold md:mb-4 mb-2">{gazeteAdı[language]}</h2>
            {/* <p>Toplam Etkiler : </p> */}
            <ScrollArea className="w-full rounded-md md:p-2 p-0 max-h-[615px] overflow-y-auto xl:flex xl:flex-row xl:gap-5">
                {filteredElements.length > 0 ? (
                    filteredElements.map(element => (
                        <div key={element.id} className={` ${isDarkMode ? 'border-white bg-[rgb(17,17,17)]' : 'border-black bg-white'} flex flex-col gap-2 p-2 border-[2px] rounded-xl  mb-3 w-[100%]`}>
                            <h3 className="text-base font-bold">{element.title[language]}</h3>
                            <Image
                                width={1820} height={1024}
                                src={element.photo.src}
                                alt="victoryImg"
                                className="w-full rounded-lg"
                            />
                            <p className={` ${isDarkMode ? 'text-white' : 'text-gray-700'}  md:text-sm text-xs`} >{element.description[language]}</p>
                            {/* buraya gelecek lang */}
                            <div>
                                <h2>{lastingEffectText[language]}</h2>
                                <p>{statNames[language]?.[element.lastingEffect.stat] || element.lastingEffect.stat}</p>
                                <p> {element.lastingEffect.value}</p>
                            </div>

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

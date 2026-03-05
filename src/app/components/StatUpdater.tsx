import { animated, useSpring } from "@react-spring/web";
import agricultureIcon from "../../../public/stats-logo/agriculture.webp";
import infrastructureIcon from "../../../public/stats-logo/infrastructure-icon.webp";
import internalSecurityIcon from "../../../public/stats-logo/internal-security-icon.webp";
import internationalIcon from "../../../public/stats-logo/international.webp";
import currencyIcon from "../../../public/stats-logo/money.webp";
import publicSupportIcon from "../../../public/stats-logo/public-icon.webp";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Props } from "../types/types";
import { statNames2 } from "../exportedTexts/translatedTexts";
import { createStatCards, type StatKey } from "./config";

const StatUpdater: React.FC<Props> = ({
    agriculture,
    infrastructure,
    internalSecurity,
    international,
    currency,
    publicSupport,
    score,
    deathLayerStat,
}) => {

    const DEFAULT_COLOR = "#000000";
    const [statColors, setStatColors] = useState<Record<StatKey, string>>({
        agriculture: DEFAULT_COLOR,
        infrastructure: DEFAULT_COLOR,
        internalSecurity: DEFAULT_COLOR,
        international: DEFAULT_COLOR,
        currency: DEFAULT_COLOR,
        publicSupport: DEFAULT_COLOR,
    });

    const handleColorChange = (stat: StatKey, value: number, prevValue: number) => {
        const newColor = value > prevValue ? "#4caf50" : "#d2190b";

        setStatColors((prev) => ({ ...prev, [stat]: newColor }));

        setTimeout(() => {
            setStatColors((prev) => ({ ...prev, [stat]: DEFAULT_COLOR }));
        }, 1000);
    };

    const [prevValues, setPrevValues] = useState<Record<StatKey, number>>({
        agriculture,
        infrastructure,
        internalSecurity,
        international,
        currency,
        publicSupport,
    });

    useEffect(() => {
        const currentValues: Record<StatKey, number> = {
            agriculture,
            infrastructure,
            internalSecurity,
            international,
            currency,
            publicSupport,
        };

        (Object.keys(currentValues) as StatKey[]).forEach((key) => {
            if (prevValues[key] !== currentValues[key]) {
                handleColorChange(key, currentValues[key], prevValues[key]);
            }
        });

        setPrevValues(currentValues);
    }, [
        agriculture,
        infrastructure,
        internalSecurity,
        international,
        currency,
        publicSupport,
    ]);

    const getBarStyle = (value: number, color: string) => ({
        height: `${value}%`,
        backgroundColor: color,
        transition: "background-color 0.5s ease, height 1s ease",
    });

    const config = { duration: 1000 };

    const animatedAgriculture = useSpring({ number: agriculture, config });
    const animatedInfrastructure = useSpring({ number: infrastructure, config });
    const animatedInternalSecurity = useSpring({ number: internalSecurity, config });
    const animatedInternational = useSpring({ number: international, config });
    const animatedCurrency = useSpring({ number: currency, config });
    const animatedPublicSupport = useSpring({ number: publicSupport, config });
    const animatedScore = useSpring({ number: score, config });

    const { isDarkMode } = useTheme();
    const { language } = useLanguage();

    const statCards = createStatCards({
        values: {
            agriculture,
            infrastructure,
            internalSecurity,
            international,
            currency,
            publicSupport,
        },
        animatedValues: {
            agriculture: animatedAgriculture,
            infrastructure: animatedInfrastructure,
            internalSecurity: animatedInternalSecurity,
            international: animatedInternational,
            currency: animatedCurrency,
            publicSupport: animatedPublicSupport,
        },
        statColors,
        icons: {
            agriculture: { icon: agricultureIcon, iconAlt: "Agriculture", iconSize: 60 },
            infrastructure: { icon: infrastructureIcon, iconAlt: "Infrastructure", iconSize: 70 },
            internalSecurity: { icon: internalSecurityIcon, iconAlt: "internalSecurity", iconSize: 65 },
            international: { icon: internationalIcon, iconAlt: "international", iconSize: 60 },
            currency: { icon: currencyIcon, iconAlt: "Currency", iconSize: 45 },
            publicSupport: { icon: publicSupportIcon, iconAlt: "Public Opinion", iconSize: 65 },
        },
    });

    

    return (

        <div className={` ${isDarkMode ? 'bg-black border-white' : 'bg-white border-black'} flex w-full xl:gap-2 gap-1 md:rounded-t-lg justify-between sm:p-2 p-[2px]  border-[3px] md:rounded-xl rounded`}>
            {statCards.map((card) => (
                <div
                    key={card.key}
                    className={` ${isDarkMode ? " text-white border-white " + card.darkCardBgClass : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[130px] h-[55px]`}
                >
                    <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames2[card.labelKey][language]}</span>
                    <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[#A0A0A0] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                        <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">
                            {card.animatedValue.number.to((n: number) => n.toFixed(0))}
                        </animated.p>
                        {deathLayerStat === card.deathKey && (
                            <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                        )}
                        <div className={`absolute bottom-0 left-0 w-full ${card.key === 'publicSupport' ? 'z-0' : ''}`} style={getBarStyle(card.value, card.color)} />
                        <Image
                            src={card.icon}
                            alt={card.iconAlt}
                            width={card.iconSize}
                            height={card.iconSize}
                            className={`${card.value < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `}
                        />
                    </div>
                </div>
            ))}

            <div className={` ${isDarkMode ? ' text-white bg-black border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[130px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames2.rule[language]}</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-black w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <div className="absolute bottom-0 left-0 w-full" />
                    <animated.p className="z-10 md:w-[120px] md:h-[55px] w-8 h-8 flex items-center justify-center text-white lg:text-2xl md:text-base text-sm">{animatedScore.number.to(n => `${(n).toFixed(0)} / 100`)}</animated.p>
                </div>
            </div>
        </div>
    );
};

export default StatUpdater;

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


type Props = {
    agriculture: number;
    infrastructure: number;
    internalSecurity: number;
    international: number;
    currency: number;
    publicSupport: number;
    score: number;
    deathLayerStat: string | null; // Sıfırlanan stat
};

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
    // Renk yönetimi için state'ler
    const [agricultureColor, setAgricultureColor] = useState("#000000");
    const [infrastructureColor, setInfrastructureColor] = useState("#000000");
    const [internalSecurityColor, setInternalSecurityColor] = useState("#000000");
    const [internationalColor, setInternationalColor] = useState("#000000");
    const [currencyColor, setCurrencyColor] = useState("#000000");
    const [publicSupportColor, setPublicSupportColor] = useState("#000000");



    // Renk geçişi fonksiyonu
    const handleColorChange = (stat: string, value: number, prevValue: number) => {
        const newColor = value > prevValue ? "#4caf50" : "#d2190b"; // Artış: yeşil, düşüş: kırmızı
        const resetColor = "#000000"; // Varsayılan siyah renk

        switch (stat) {
            case "agriculture":
                setAgricultureColor(newColor);
                setTimeout(() => setAgricultureColor(resetColor), 1000); // 1 saniye sonra siyaha dön
                break;
            case "infrastructure":
                setInfrastructureColor(newColor);
                setTimeout(() => setInfrastructureColor(resetColor), 1000);
                break;
            case "internalSecurity":
                setInternalSecurityColor(newColor);
                setTimeout(() => setInternalSecurityColor(resetColor), 1000);
                break;
            case "international":
                setInternationalColor(newColor);
                setTimeout(() => setInternationalColor(resetColor), 1000);
                break;
            case "currency":
                setCurrencyColor(newColor);
                setTimeout(() => setCurrencyColor(resetColor), 1000);
                break;
            case "publicSupport":
                setPublicSupportColor(newColor);
                setTimeout(() => setPublicSupportColor(resetColor), 1000);
                break;
        }
    };

    const [prevValues, setPrevValues] = useState({
        agriculture,
        infrastructure,
        internalSecurity,
        international,
        currency,
        publicSupport,
    });

    useEffect(() => {
        if (prevValues.agriculture !== agriculture) {
            handleColorChange("agriculture", agriculture, prevValues.agriculture);
        }
        if (prevValues.infrastructure !== infrastructure) {
            handleColorChange("infrastructure", infrastructure, prevValues.infrastructure);
        }
        if (prevValues.internalSecurity !== internalSecurity) {
            handleColorChange("internalSecurity", internalSecurity, prevValues.internalSecurity);
        }
        if (prevValues.international !== international) {
            handleColorChange("international", international, prevValues.international);
        }
        if (prevValues.currency !== currency) {
            handleColorChange("currency", currency, prevValues.currency);
        }
        if (prevValues.publicSupport !== publicSupport) {
            handleColorChange("publicSupport", publicSupport, prevValues.publicSupport);
        }

        // Güncel değerleri sakla
        setPrevValues({
            agriculture,
            infrastructure,
            internalSecurity,
            international,
            currency,
            publicSupport,
        });
    }, [
        agriculture,
        infrastructure,
        internalSecurity,
        international,
        currency,
        publicSupport,
    ]);

    // Stat barı için stil fonksiyonu
    const getBarStyle = (value: number, color: string) => ({
        height: `${value}%`,
        backgroundColor: color,
        transition: "background-color 0.5s ease, height 1s ease",
    });

    const animatedAgriculture = useSpring({ number: agriculture, config: { duration: 1000 } });
    const animatedInfrastructure = useSpring({ number: infrastructure, config: { duration: 1000 } });
    const animatedInternalSecurity = useSpring({ number: internalSecurity, config: { duration: 1000 } });
    const animatedInternational = useSpring({ number: international, config: { duration: 1000 } });
    const animatedCurrency = useSpring({ number: currency, config: { duration: 1000 } });
    const animatedPublicSupport = useSpring({ number: publicSupport, config: { duration: 1000 } });
    const animatedScore = useSpring({ number: score, config: { duration: 1000 } });
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();

    const statNames = {
        agriculture: {
            en: "Agriculture",
            tr: "Tarım",
            de: "Landwirtschaft",
            es: "Agricultura",
            fr: "Agriculture",
            pt: "Agricultura",
            ru: "Сельское хозяйство",
            zh: "农业",
        },
        infrastructure: {
            en: "Infrastructure",
            tr: "Altyapı",
            de: "Infrastruktur",
            es: "Infraestructura",
            fr: "Infrastructure",
            pt: "Infraestrutura",
            ru: "Инфраструктура",
            zh: "基础设施",
        },
        internalSecurity: {
            en: " Security",
            tr: " Güvenlik",
            de: "Sicherheit",
            es: "Seguridad",
            fr: "Sécurité",
            pt: "Segurança",
            ru: "Безопасность",
            zh: "内部安全",
        },
        international: {
            en: "Politics",
            tr: "Politika",
            de: "Politik",
            es: "Política",
            fr: "Politique",
            pt: "Política",
            ru: "Политика",
            zh: "政治",
        },
        budget: {
            en: "Budget",
            tr: "Bütçe",
            de: "Haushalt",
            es: "Presupuesto",
            fr: "Budget",
            pt: "Orçamento",
            ru: "Бюджет",
            zh: "预算",
        },
        publicSupport: {
            en: "Support",
            tr: "Destek",
            de: "Unterstützung",
            es: "Apoyo",
            fr: "Soutien",
            pt: "Apoio",
            ru: "Поддержка",
            zh: "支持",
        },
        rule: {
            en: "Rule",
            tr: "Yönetim",
            de: "Regel",
            es: "Regla",
            fr: "Règle",
            pt: "Regra",
            ru: "Правило",
            zh: "规则",
        },
    };

    return (
        <div className={` ${isDarkMode ? 'bg-[rgb(17,17,17)] border-white' : 'bg-white border-black'} flex w-full xl:gap-2 gap-1 md:rounded-t-lg justify-between sm:p-2 p-[2px]  border-[3px] md:rounded-xl rounded`}>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>

                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames.agriculture[language]}</span>

                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>


                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedAgriculture.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "agriculture" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(agriculture, agricultureColor)}
                    />
                    <Image src={agricultureIcon} alt="Agriculture" width={60} height={60} className={`${agriculture < 1 ? 'hidden' : ''} z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames.infrastructure[language]}</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>

                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedInfrastructure.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "infrastructure" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(infrastructure, infrastructureColor)}
                    />
                    <Image src={infrastructureIcon} alt="Infrastructure" width={70} height={70} className={`${infrastructure < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames.internalSecurity[language]}</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedInternalSecurity.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "internalSecurity" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(internalSecurity, internalSecurityColor)}
                    />
                    <Image src={internalSecurityIcon} alt="internalSecurity" width={65} height={65} className={`${internalSecurity < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames.international[language]}</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedInternational.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "international" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(international, internationalColor)}
                    />
                    <Image src={internationalIcon} alt="international" width={60} height={60} className={`${international < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames.budget[language]}</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedCurrency.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "budget" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(currency, currencyColor)}
                    />
                    <Image src={currencyIcon} alt="Currency" width={45} height={45} className={`${currency < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames.publicSupport[language]}</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedPublicSupport.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "publicOpinion" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full z-0"
                        style={getBarStyle(publicSupport, publicSupportColor)}
                    />
                    <Image src={publicSupportIcon} alt="Public Opinion" width={65} height={65} className={`${publicSupport < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>{statNames.rule[language]}</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <div className="absolute bottom-0 left-0 w-full" />
                    <animated.p className="z-10 md:w-[110px] md:h-[55px] w-8 h-8 flex items-center justify-center text-white lg:text-2xl md:text-base text-sm">{animatedScore.number.to(n => `${(n + 1).toFixed(0)} / 100`)}</animated.p>
                </div>
            </div>
        </div>
    );
};

export default StatUpdater;

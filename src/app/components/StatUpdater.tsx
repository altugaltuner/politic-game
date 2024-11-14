import { animated, useSpring } from "@react-spring/web";
import agricultureIcon from "../../../public/stats-logo/agriculture.webp";
import infrastructureIcon from "../../../public/stats-logo/infrastructure-icon.webp";
import internalSecurityIcon from "../../../public/stats-logo/internal-security-icon.webp";
import internationalIcon from "../../../public/stats-logo/international.webp";
import currencyIcon from "../../../public/stats-logo/money.webp";
import publicSupportIcon from "../../../public/stats-logo/public-icon.webp";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

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

    const statColors = {
        agriculture: "#000000", // #4caf50 Tarım için yeşil
        infrastructure: "#000000", // #ff9800 Altyapı için turuncu
        internalSecurity: "#000000", // #f44336 İç güvenlik için kırmızı
        international: "#000000", // #9c27b0 Uluslararası ilişkiler için mor
        currency: "#000000", // #27a2b7 Bütçe için mavi
        publicSupport: "#000000", // #3f51b5 Halk desteği için koyu mavi
    }

    const getBarStyle = (value: number, color: string) => ({
        height: `${value}%`,
        backgroundColor: color,
        transition: "height 1s ease",
    });

    const animatedAgriculture = useSpring({ number: agriculture, config: { duration: 1000 } });
    const animatedInfrastructure = useSpring({ number: infrastructure, config: { duration: 1000 } });
    const animatedInternalSecurity = useSpring({ number: internalSecurity, config: { duration: 1000 } });
    const animatedInternational = useSpring({ number: international, config: { duration: 1000 } });
    const animatedCurrency = useSpring({ number: currency, config: { duration: 1000 } });
    const animatedPublicSupport = useSpring({ number: publicSupport, config: { duration: 1000 } });
    const animatedScore = useSpring({ number: score, config: { duration: 1000 } });
    const { isDarkMode } = useTheme();

    return (
        <div className={` ${isDarkMode ? 'bg-[rgb(17,17,17)] border-white' : 'bg-white border-black'} flex w-full xl:gap-2 gap-1 md:rounded-t-lg justify-between p-2  border-[3px] md:rounded-xl rounded`}>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>

                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>Tarım</span>

                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>


                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedAgriculture.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "agriculture" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(agriculture, statColors.agriculture)}
                    />
                    <Image src={agricultureIcon} alt="Agriculture" width={60} height={60} className={`${agriculture < 1 ? 'hidden' : ''} z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>Altyapı</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>

                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedInfrastructure.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "infrastructure" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(infrastructure, statColors.infrastructure)}
                    />
                    <Image src={infrastructureIcon} alt="Infrastructure" width={70} height={70} className={`${infrastructure < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>Güvenlik</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedInternalSecurity.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "internalSecurity" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(internalSecurity, statColors.internalSecurity)}
                    />
                    <Image src={internalSecurityIcon} alt="internalSecurity" width={65} height={65} className={`${internalSecurity < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>Politika</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedInternational.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "international" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(international, statColors.international)}
                    />
                    <Image src={internationalIcon} alt="international" width={60} height={60} className={`${international < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>Bütçe</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedCurrency.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "budget" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(currency, statColors.currency)}
                    />
                    <Image src={currencyIcon} alt="Currency" width={45} height={45} className={`${currency < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>Destek</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <animated.p className="md:block hidden absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded border-[1px] white lg:text-base md:text-sm">{animatedPublicSupport.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "publicOpinion" && (
                        <Image src="/stats-logo/skull.webp" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full z-0"
                        style={getBarStyle(publicSupport, statColors.publicSupport)}
                    />
                    <Image src={publicSupportIcon} alt="Public Opinion" width={65} height={65} className={`${publicSupport < 1 ? 'hidden' : ''}  z-10 lg:w-[55px] lg:h-[55px] w-7 h-7 `} />
                </div>
            </div>

            <div className={` ${isDarkMode ? ' text-white bg-[rgb(17,17,17)] border-white' : ' text-black bg-[#eaeaea] border-black'} flex flex-col items-center justify-between md:p-2 md:border-solid border-hidden md:border-[2px] md:rounded-xl w-[13%] text-center  md:h-[146px] h-[55px]`}>
                <span className={`${isDarkMode ? ' text-white' : ' text-black'}  md:text-xs xl:text-sm md:block hidden`}>Yönetim</span>
                <div className={`${isDarkMode ? ' border-white' : ' border-black '} flex bg-[rgb(150,150,150)] w-full h-20 relative md:border-[2px] overflow-hidden md:mt-2 md:rounded justify-center items-center   border-[1px] rounded-sm`}>
                    <div className="absolute bottom-0 left-0 w-full" />
                    <animated.p className="z-10 md:w-[110px] md:h-[55px] w-8 h-8 flex items-center justify-center text-white lg:text-2xl md:text-base text-sm">{animatedScore.number.to(n => `${n.toFixed(0)} / 30`)}</animated.p>
                </div>
            </div>
        </div>
    );
};

export default StatUpdater;

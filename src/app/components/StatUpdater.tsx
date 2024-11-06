import { animated, useSpring } from "@react-spring/web";
import agricultureIcon from "../../../public/stats-logo/agriculture.png";
import infrastructureIcon from "../../../public/stats-logo/infrastructure-icon.png";
import internalSecurityIcon from "../../../public/stats-logo/internal-security-icon.png";
import internationalIcon from "../../../public/stats-logo/international.png";
import currencyIcon from "../../../public/stats-logo/money.png";
import publicSupportIcon from "../../../public/stats-logo/public-icon.png";
import Image from "next/image";

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

    return (
        <div className="flex w-full md:gap-2 gap-2 sm:rounded-t-lg justify-center p-2 border-black bg-white border-[2px] sm:rounded-xl rounded lg:w-[1060px]">

            <div className="flex flex-col items-center justify-between sm:p-2 border-black border-[1px] sm:rounded-xl w-[15%] text-center bg-[rgb(220,255,222)] sm:h-[150px] h-[80px]">
                <span className="md:text-sm sm:text-xs sm:block hidden">Tarım</span>
                <div className="flex w-full h-20 relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-[rgb(150,150,150)] border-black border-[1px]">
                    <animated.p className="absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded">{animatedAgriculture.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "agriculture" && (
                        <Image src="/stats-logo/skull.png" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(agriculture, statColors.agriculture)}
                    />
                    <Image src={agricultureIcon} alt="Agriculture" width={60} height={60} className="z-10 sm:w-[55px] sm:h-[55px] w-8 h-8" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-between sm:p-2 border-black border-[1px] sm:rounded-xl w-[15%] text-center bg-[rgb(255,243,224)] sm:h-[150px] h-[80px]">
                <span className="md:text-sm sm:text-xs sm:block hidden">Altyapı</span>
                <div className="flex w-full h-20 sm:border-[1px] border-black relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-[rgb(150,150,150)]">

                    <animated.p className="absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded">{animatedInfrastructure.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "infrastructure" && (
                        <Image src="/stats-logo/skull.png" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(infrastructure, statColors.infrastructure)}
                    />
                    <Image src={infrastructureIcon} alt="Infrastructure" width={70} height={70} className="z-10 sm:w-[55px] sm:h-[55px] w-8 h-8" />
                </div>
            </div>

            <div className=" flex flex-col items-center justify-between sm:p-2 border-black border-[1px] sm:rounded-xl w-[15%] text-center bg-[#ffe3e0] sm:h-[150px] h-[80px]">
                <span className="md:text-sm sm:text-xs sm:block hidden">İç Güvenlik</span>
                <div className="flex w-full h-20 sm:border-[1px] border-black relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-[rgb(150,150,150)]">
                    <animated.p className="absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded">{animatedInternalSecurity.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "internalSecurity" && (
                        <Image src="/stats-logo/skull.png" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(internalSecurity, statColors.internalSecurity)}
                    />
                    <Image src={internalSecurityIcon} alt="internalSecurity" width={65} height={65} className="z-10 sm:w-[55px] sm:h-[55px] w-8 h-8" />
                </div>
            </div>

            <div className=" flex flex-col items-center justify-between sm:p-2 border-black border-[1px] sm:rounded-xl w-[15%] text-center bg-[#faddff] sm:h-[150px] h-[80px]">
                <span className="md:text-sm sm:text-xs sm:block hidden">Dış Politika</span>
                <div className="flex w-full h-20 sm:border-[1px] border-black relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-[rgb(150,150,150)]">
                    <animated.p className="absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded">{animatedInternational.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "international" && (
                        <Image src="/stats-logo/skull.png" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(international, statColors.international)}
                    />
                    <Image src={internationalIcon} alt="international" width={60} height={60} className="z-10 sm:w-[55px] sm:h-[55px] w-8 h-8" />
                </div>
            </div>

            <div className=" flex flex-col items-center justify-between sm:p-2 border-black border-[1px] sm:rounded-xl w-[15%] text-center bg-[#d5f9ff] sm:h-[150px] h-[80px]">
                <span className="md:text-sm sm:text-xs sm:block hidden">Bütçe</span>
                <div className="flex w-full h-20 sm:border-[1px] border-black relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-[rgb(150,150,150)]">
                    <animated.p className="absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded">{animatedCurrency.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "budget" && (
                        <Image src="/stats-logo/skull.png" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(currency, statColors.currency)}
                    />
                    <Image src={currencyIcon} alt="Currency" width={45} height={45} className="z-10 sm:w-[55px] sm:h-[55px] w-8 h-8" />
                </div>
            </div>

            <div className=" flex flex-col items-center justify-between sm:p-2 border-black border-[1px] sm:rounded-xl w-[15%] text-center bg-[#d9dfff] sm:h-[150px] h-[80px]">
                <span className="md:text-sm sm:text-xs sm:block hidden">Halk Desteği</span>
                <div className="flex w-full h-20 sm:border-[1px] border-black relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-[rgb(150,150,150)]">
                    <animated.p className="absolute z-10 bottom-0 right-0 text-white bg-black p-[2px] rounded">{animatedPublicSupport.number.to(n => n.toFixed(0))}</animated.p>
                    {deathLayerStat === "publicOpinion" && (
                        <Image src="/stats-logo/skull.png" alt="skull" width={100} height={100} className="absolute z-50" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full z-0"
                        style={getBarStyle(publicSupport, statColors.publicSupport)}
                    />
                    <Image src={publicSupportIcon} alt="Public Opinion" width={65} height={65} className="z-10 sm:w-[55px] sm:h-[55px] w-8 h-8" />
                </div>
            </div>

            <div className=" flex flex-col items-center justify-between sm:p-2 border-black border-[1px] sm:rounded-xl w-[15%] text-center bg-[rgb(255,243,224)] sm:h-[150px] h-[80px]">
                <span className="md:text-sm sm:text-xs sm:block hidden">Gün Sayısı</span>
                <div className="flex w-full h-20 sm:border-[1px] border-black relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-black">
                    <div className="absolute bottom-0 left-0 w-full" />
                    <animated.p className="z-50 sm:w-[55px] sm:h-[55px] w-8 h-8 flex items-center justify-center text-white text-4xl">{animatedScore.number.to(n => n.toFixed(0))}</animated.p>
                </div>
            </div>
        </div>
    );
};

export default StatUpdater;

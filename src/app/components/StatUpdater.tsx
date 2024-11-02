import agricultureIcon from "../../../public/stats-logo/agriculture-icon-removebg-preview.png";
import infrastructureIcon from "../../../public/stats-logo/infrastructure-icon.png";
import internalSecurityIcon from "../../../public/stats-logo/internal-security-icon.png";
import internationalIcon from "../../../public/stats-logo/international-icon.png";
import currencyIcon from "../../../public/stats-logo/lira-png-removebg-preview.png";
import publicSupportIcon from "../../../public/stats-logo/public-icon.png";
import Image from "next/image";

import React from "react";

type Props = {
    agriculture: number;
    infrastructure: number;
    internalSecurity: number;
    international: number;
    currency: number;
    publicSupport: number;
    score: number;
};

const StatUpdater: React.FC<Props> = ({
    agriculture,
    infrastructure,
    internalSecurity,
    international,
    currency,
    publicSupport,
    score
}) => {

    const statColors = {
        agriculture: "#4caf50", // Tarım için yeşil
        infrastructure: "#ff9800", // Altyapı için turuncu
        internalSecurity: "#f44336", // İç güvenlik için kırmızı
        international: "#9c27b0", // Uluslararası ilişkiler için mor
        currency: "#27a2b7", // Bütçe için mavi
        publicSupport: "#3f51b5", // Halk desteği için koyu mavi
    }

    const getBarStyle = (value: number, color: string) => ({
        height: `${value}%`,
        backgroundColor: color,
        transition: "height 1s ease",
    });

    return (
        <div className="flex w-full md:gap-7 gap-2 sm:rounded-t-lg justify-center p-2 border-gray-400 bg-white border-[1px] sm:rounded-xl rounded lg:w-[1060px]">

            <div className="relative flex flex-col items-center justify-between sm:p-2 border-gray-400 border-[1px] sm:rounded-xl md:w-[13%] w-[15%] text-center bg-[rgb(220,255,222)] sm:h-auto h-[80px]">
                <span className="md:text-base sm:text-xs sm:block hidden">Tarım</span>
                <div className="flex w-full h-20 relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-white">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(agriculture, statColors.agriculture)}
                    />
                    <Image src={agricultureIcon} alt="Agriculture" width={60} height={60} className="z-50 sm:w-[60px] sm:h-[60px] w-8 h-8" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between sm:p-2 border-gray-400 border-[1px] sm:rounded-xl md:w-[13%] w-[15%] text-center bg-[rgb(255,243,224)] sm:h-auto h-[80px]">
                <span className="md:text-base sm:text-xs sm:block hidden">Altyapı</span>
                <div className="flex w-full h-20 sm:border-[1px] border-gray-400 relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-white">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(infrastructure, statColors.infrastructure)}
                    />
                    <Image src={infrastructureIcon} alt="Infrastructure" width={70} height={70} className="z-50 sm:w-[60px] sm:h-[60px] w-8 h-8" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between sm:p-2 border-gray-400 border-[1px] sm:rounded-xl md:w-[13%] w-[15%] text-center bg-[#ffe3e0] sm:h-auto h-[80px]">
                <span className="md:text-base sm:text-xs sm:block hidden">İç Güvenlik</span>
                <div className="flex w-full h-20 sm:border-[1px] border-gray-400 relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-white">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(internalSecurity, statColors.internalSecurity)}
                    />
                    <Image src={internalSecurityIcon} alt="internalSecurity" width={65} height={65} className="z-50 sm:w-[60px] sm:h-[60px] w-8 h-8" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between sm:p-2 border-gray-400 border-[1px] sm:rounded-xl md:w-[13%] w-[15%] text-center bg-[#faddff] sm:h-auto h-[80px]">
                <span className="md:text-base sm:text-xs sm:block hidden">Dış Politika</span>
                <div className="flex w-full h-20 sm:border-[1px] border-gray-400 relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-white">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(international, statColors.international)}
                    />
                    <Image src={internationalIcon} alt="international" width={60} height={60} className="z-50 sm:w-[60px] sm:h-[60px] w-8 h-8" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between sm:p-2 border-gray-400 border-[1px] sm:rounded-xl md:w-[13%] w-[15%] text-center bg-[#d5f9ff] sm:h-auto h-[80px]">
                <span className="md:text-base sm:text-xs sm:block hidden">Bütçe</span>
                <div className="flex w-full h-20 sm:border-[1px] border-gray-400 relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-white">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(currency, statColors.currency)}
                    />
                    <Image src={currencyIcon} alt="Currency" width={45} height={45} className="z-50 sm:w-[60px] sm:h-[60px] w-8 h-8" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between sm:p-2 border-gray-400 border-[1px] sm:rounded-xl md:w-[13%] w-[15%] text-center bg-[#d9dfff] sm:h-auto h-[80px] ">
                <span className="md:text-base sm:text-xs sm:block hidden">Halk Desteği</span>
                <div className="flex w-full h-20 sm:border-[1px] border-gray-400 relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-white">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(publicSupport, statColors.publicSupport)}
                    />
                    <Image src={publicSupportIcon} alt="Public Opinion" width={65} height={65} className="z-50 sm:w-[60px] sm:h-[60px] w-8 h-8" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between sm:p-2 border-gray-400 border-[1px] sm:rounded-xl md:w-[13%] w-[15%] text-center bg-[rgb(255,243,224)] sm:h-auto h-[80px]">
                <span className="md:text-base sm:text-xs sm:block hidden">Yönetilen Gün</span>
                <div className="flex w-full h-20 sm:border-[1px] border-gray-400 relative overflow-hidden sm:mt-2 sm:rounded justify-center items-center bg-white">
                    <div className="absolute bottom-0 left-0 w-full" />
                    <span className="z-50 sm:w-[60px] sm:h-[60px] w-8 h-8 flex items-center justify-center">{score}</span>
                </div>
            </div>

        </div>
    );
};

export default StatUpdater;

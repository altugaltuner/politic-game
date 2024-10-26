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
};

const StatUpdater: React.FC<Props> = ({
    agriculture,
    infrastructure,
    internalSecurity,
    international,
    currency,
    publicSupport,
}) => {

    const statColors = {
        agriculture: "#4caf50", // Tarım için yeşil
        infrastructure: "#ff9800", // Altyapı için turuncu
        internalSecurity: "#f44336", // İç güvenlik için kırmızı
        international: "#9c27b0", // Uluslararası ilişkiler için mor
        currency: "#ffc107", // Bütçe için sarı
        publicSupport: "#3f51b5", // Halk desteği için koyu mavi
    }

    const getBarStyle = (value: number, color: string) => ({
        height: `${value}%`,
        backgroundColor: color,
        transition: "height 0.5s ease",
    });

    return (
        <div className="flex gap-7 rounded-t-lg justify-center p-4 border-gray-400 border-[1px] rounded-xl">

            <div className="relative flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Tarım</span>
                <div className="flex w-full h-20 border-[1px] border-gray-400 relative overflow-hidden mt-2 rounded justify-center items-center">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(agriculture, statColors.agriculture)}
                    />
                    <Image src={agricultureIcon} alt="Agriculture" width={60} height={60} className="z-50" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Altyapı</span>
                <div className="flex w-full h-20 border-[1px] border-gray-400 relative overflow-hidden mt-2 rounded justify-center items-center">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(infrastructure, statColors.infrastructure)}
                    />
                    <Image src={infrastructureIcon} alt="Infrastructure" width={70} height={70} className="z-50" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>İç Güvenlik</span>
                <div className="flex w-full h-20 border-[1px] border-gray-400 relative overflow-hidden mt-2 rounded justify-center items-center">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(internalSecurity, statColors.internalSecurity)}
                    />
                    <Image src={internalSecurityIcon} alt="internalSecurity" width={65} height={65} className="z-50" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Uluslararası İlişkiler</span>
                <div className="flex w-full h-20 border-[1px] border-gray-400 relative overflow-hidden mt-2 rounded justify-center items-center">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(international, statColors.international)}
                    />
                    <Image src={internationalIcon} alt="international" width={60} height={60} className="z-50" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Bütçe</span>
                <div className="flex w-full h-20 border-[1px] border-gray-400 relative overflow-hidden mt-2 rounded justify-center items-center">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(currency, statColors.currency)}
                    />
                    <Image src={currencyIcon} alt="Currency" width={45} height={45} className="z-50" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Halkın Desteği</span>
                <div className="flex w-full h-20 border-[1px] border-gray-400 relative overflow-hidden mt-2 rounded justify-center items-center">
                    <div className="absolute bottom-0 left-0 w-full"
                        style={getBarStyle(publicSupport, statColors.publicSupport)}
                    />
                    <Image src={publicSupportIcon} alt="Public Opinion" width={65} height={65} className="z-50" />
                </div>
            </div>
        </div>
    );
};

export default StatUpdater;

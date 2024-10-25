import agricultureIcon from "../../../public/stats-logo/agriculture-icon-removebg-preview.png";
import educationIcon from "../../../public/stats-logo/education-icon.png";
import infrastructureIcon from "../../../public/stats-logo/infrastructure-icon.png";
import internalSecurityIcon from "../../../public/stats-logo/internal-security-icon.png";
import internationalIcon from "../../../public/stats-logo/international-icon.png";
import currencyIcon from "../../../public/stats-logo/lira-png-removebg-preview.png";
import publicSupportIcon from "../../../public/stats-logo/public-icon.png";
import Image from "next/image";

import React from "react";

type Props = {
    agriculture: number;
    education: number;
    infrastructure: number;
    internalSecurity: number;
    international: number;
    currency: number;
    publicSupport: number;
};

const StatUpdater: React.FC<Props> = ({
    agriculture,
    education,
    infrastructure,
    internalSecurity,
    international,
    currency,
    publicSupport,
}) => {

    const statColors = {
        agriculture: "#4caf50", // Tarım için yeşil
        education: "#2196f3", // Eğitim için mavi
        infrastructure: "#ff9800", // Altyapı için turuncu
        internalSecurity: "#f44336", // İç güvenlik için kırmızı
        international: "#9c27b0", // Uluslararası ilişkiler için mor
        currency: "#ffc107", // Bütçe için sarı
        publicSupport: "#3f51b5", // Halk desteği için koyu mavi
    }

    const getBarStyle = (value: number, color: string) => ({
        width: `${value}%`,
        backgroundColor: color,
        transition: "width 0.5s ease",
    });

    return (
        <div className="flex justify-around bg-[var(--secondary-color)] p-2.5 rounded-t-lg">
            <div className="relative flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">

                <span>Tarım</span>
                <div className="w-full h-2 rounded">
                    <div className="absolute h-full top-0 left-0" style={getBarStyle(agriculture, statColors.agriculture)}></div>
                </div>
                <Image src={agricultureIcon} alt="Agriculture" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Eğitim</span>
                <div>{education}</div>
                <Image src={educationIcon} alt="Education" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Altyapı</span>
                <div>{infrastructure}</div>
                <Image src={infrastructureIcon} alt="Infrastructure" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>İç Güvenlik</span>
                <div>{internalSecurity}</div>
                <Image src={internalSecurityIcon} alt="Internal Security" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Uluslararası İlişkiler</span>
                <div>{international}</div>
                <Image src={internationalIcon} alt="International" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Bütçe</span>
                <div>{currency}</div>
                <Image src={currencyIcon} alt="Currency" width={35} height={50} />
            </div>
            <div className="flex flex-col items-center justify-between p-2 border-gray-400 border-[1px] rounded-xl w-[13%] text-center">
                <span>Halkın Desteği</span>
                <div>{publicSupport}</div>
                <Image src={publicSupportIcon} alt="Public Opinion" width={50} height={50} />
            </div>
        </div>
    );
};

export default StatUpdater;

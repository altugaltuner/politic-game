import ulastirmaBakani from "../../public/ministers/ulastirma-bakani.png";

export const ulastirmaQuestions = [
    {
        id: 90,
        question: "Sayın Cumhurbaşkanım, büyük şehirlerde trafik sorunu giderek artıyor. Şehir içi ulaşım altyapısını iyileştirmemiz gerekiyor.",
        answers: [
            {
                text: "Metro projelerine yatırım yapın",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    infrastructureAndEnvironment: +25,
                    internalSecurity: +15,
                }
            },
            {
                text: "Mevcut yolları iyileştirin.",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: +15,
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
        link: "https://www.youtube.com/watch?v=AkHkTCZMPlU"
    },
    {
        id: 92,
        question: "Sayın Cumhurbaşkanım, hızlı tren projeleri ülke genelinde büyük ilgi görüyor. Hızlı tren hatlarını genişletelim mi, yoksa bu bütçeyi karayolu projelerine mi ayıralım?",
        answers: [
            {
                text: "Hızlı tren hatlarını genişletin, şehirler arası ulaşımı hızlandırın.",
                effect: {
                    publicSupport: +25,
                    budget: -30,
                    infrastructureAndEnvironment: +30,
                }
            },
            {
                text: "Karayolu projelerine bütçe ayırın, ulaşımı karadan çözün.",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
        link: "https://www.tcdd.gov.tr/projeler"
    },
    {
        id: 94,
        question: "Sayın Cumhurbaşkanım, ülkemizde internet altyapısı yetersiz. Fiber internet altyapısına mı yatırım yapalım, yoksa mevcut altyapıyı mı iyileştirelim?",
        answers: [
            {
                text: "Fiber internet altyapısına yatırım yapın.",
                effect: {
                    publicSupport: +20,
                    budget: -25,
                    infrastructureAndEnvironment: +30,
                }
            },
            {
                text: "Mevcut internet altyapısını iyileştirin.",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +15,
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
        link: "https://www.ekonomim.com/sektorler/teknoloji/en-yavas-internette-iki-yildir-oecd-lideriyiz-haberi-763792#:~:text=T%C3%BCrkiye%2C%20son%20iki%20y%C4%B1ld%C4%B1r%20Ekonomik,te%2030%2C2%20mbps%20oldu."
    }
];
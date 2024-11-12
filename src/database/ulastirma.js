import ulastirmaBakani from "../../public/ministers/ulasim-bakani.webp";

export const ulastirmaQuestions = [
    {
        id: 90,
        question: "Sayın Cumhurbaşkanım, büyük şehirlerde trafik sorunu giderek artıyor. Şehir içi ulaşım altyapısını iyileştirmemiz gerekiyor.",
        answers: [
            {
                text: "Metrolara yatırım yapın",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    infrastructureAndEnvironment: +25,
                    internalSecurity: +15,
                }
            },
            {
                text: "Mevcut karayollarını iyileştirin",
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
        question: "Sayın Cumhurbaşkanım, hızlı tren projeleri ülke genelinde büyük ilgi görüyor. Ancak karayollarındaki ücretli geçişlerden şikayetler alıyoruz",
        answers: [
            {
                text: "Hızlı tren hatlarını genişletin",
                effect: {
                    publicSupport: +25,
                    budget: -30,
                    infrastructureAndEnvironment: +30,
                },
                listID: "ulastirma1",
            },
            {
                text: "Karayolu geçiş ücretlerinde indirime gidin",
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
        question: "Sayın Cumhurbaşkanım, ülkemizde internet altyapısı yetersiz",
        answers: [
            {
                text: "Fiber altyapıyı geliştirin",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +30,
                }
            },
            {
                text: "Telekom firmalarına devredin",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                },
                listID: "ulastirma2",
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
        link: "https://www.ekonomim.com/sektorler/teknoloji/en-yavas-internette-iki-yildir-oecd-lideriyiz-haberi-763792#:~:text=T%C3%BCrkiye%2C%20son%20iki%20y%C4%B1ld%C4%B1r%20Ekonomik,te%2030%2C2%20mbps%20oldu."
    }
];
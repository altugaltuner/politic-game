import ulastirmaBakani from "../../public/ministers/ulasim-bakani.webp";

export const ulastirmaQuestions = [
    {
        id: 90,
        question: "Büyük şehirlerde trafik sorunu giderek artıyor. Şehir içi ulaşım altyapısını iyileştirmemiz gerekiyor.",
        answers: [
            {
                text: "Metrolara yatırım yapın",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +25,
                    internalSecurity: +10,
                }
            },
            {
                text: "Mevcut karayollarını iyileştirin",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: +10,
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
    {
        id: 92,
        question: "Hızlı tren projeleri ülke genelinde büyük ilgi görüyor. Ancak karayollarındaki ücretli geçişlerden şikayetler alıyoruz",
        answers: [
            {
                text: "Hızlı tren hatlarını genişletin",
                effect: {
                    publicSupport: +20,
                    budget: -30,
                    infrastructureAndEnvironment: +15,
                },
                listID: "ulastirma1",
            },
            {
                text: "Karayolu geçiş ücretlerinde indirime gidin",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: 0,
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
    {
        id: 94,
        question: "Sayın Cumhurbaşkanım, ülkemizde internet altyapısı yetersiz. Gençler internet hızının yavaşlığından şikayetçi.",
        answers: [
            {
                text: "Fiber altyapıyı geliştirin",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Telekom firmalarına devredin",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    infrastructureAndEnvironment: 0,
                },
                listID: "ulastirma2",
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
    {
        id: 95,
        question: "Sayın Cumhurbaşkanım, Ankara İstanbul arası tren hattında 2 yük treni çarpıştı. Taşınan kimyasallar çevreye yayılırken 12 kişi ağır yaralı durumda. Ne yapmalıyız?",
        answers: [
            {
                text: "Önce yaralıları kurtarın",
                effect: {
                    publicSupport: +20,
                    infrastructureAndEnvironment: -30,
                }
            },
            {
                text: "Önce kimyasalları temizleyin ve rayları kontrol edin",
                effect: {
                    publicSupport: -20,
                    infrastructureAndEnvironment: +10,

                },
                listID: "ulastirma2",
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
];
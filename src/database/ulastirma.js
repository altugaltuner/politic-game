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
    },

    {
        id: 91,
        question: "Sayın Cumhurbaşkanım, kırsal bölgelerde ulaşım altyapısı yetersiz. Yeni yollar mı inşa edelim yoksa mevcut yolları mı onaralım?",
        answers: [
            {
                text: "Yeni yollar inşa edin, kırsal bölgeleri birbirine bağlayın.",
                effect: {
                    publicSupport: +15,
                    budget: -25,
                    infrastructureAndEnvironment: +20,
                    internalSecurity: +10,
                }
            },
            {
                text: "Mevcut yolları onarın, maliyetleri düşük tutalım.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: +5,
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
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
    },
    {
        id: 93,
        question: "Sayın Cumhurbaşkanım, limanlarımızda kapasite sorunları yaşanıyor. Yeni limanlar mı inşa edelim, yoksa mevcut limanları mı genişletelim?",
        answers: [
            {
                text: "Yeni limanlar inşa edin, deniz ticaretini geliştirelim.",
                effect: {
                    publicSupport: +15,
                    budget: -30,
                    infrastructureAndEnvironment: +25,
                }
            },
            {
                text: "Mevcut limanları genişletin, daha düşük maliyetle kapasiteyi artırın.",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +15,
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
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
    }
];
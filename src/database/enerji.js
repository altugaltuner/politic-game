import enerjiBakani from "../../public/ministers/enerji-bakani.png";

export const enerjiQuestions = [
    {
        id: 130,
        question: "Sayın Cumhurbaşkanım, fosil yakıtlara bağımlılığımız devam ediyor, ancak yenilenebilir enerjiye yatırım yaparsak uzun vadede daha sürdürülebilir bir enerji politikası izleyebiliriz. Ne yapalım?",
        answers: [
            {
                text: "Yenilenebilir enerjiye yatırım yapın.",
                effect: {

                    budget: -10,
                    infrastructureAndEnvironment: +25,
                    internationalRelations: +10,
                }
            },
            {
                text: "Fosil yakıtlara odaklanın.",
                effect: {

                    budget: +10,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: -10
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 131,
        question: "Sayın Cumhurbaşkanım, yerli enerji kaynaklarını keşfetmek için geniş çaplı arama çalışmaları başlatabiliriz. Ancak bu, ciddi bir maliyet getirebilir. Ne yapalım?",
        answers: [
            {
                text: "Yerli enerji aramalarına başlayın.",
                effect: {
                    budget: -25,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: +5,
                }
            },
            {
                text: "Erteleyin, şu an maliyet çok yüksek.",
                effect: {
                    budget: +25,
                    infrastructureAndEnvironment: -10,
                    internationalRelations: -10
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 132,
        question: "Sayın Cumhurbaşkanım, enerji tüketimi hızla artıyor. Enerji tasarrufu için halkı bilinçlendirme kampanyaları başlatalım mı, yoksa enerji arzını artırmak için yeni enerji santralleri mi inşa edelim?",
        answers: [
            {
                text: "Enerji tasarrufu kampanyası başlatın.",
                effect: {
                    publicSupport: +10,
                    budget: +20,
                    infrastructureAndEnvironment: +15,
                    internationalRelations: +15,
                }
            },
            {
                text: "Yeni enerji santralleri inşa edin.",
                effect: {
                    publicSupport: -10,
                    budget: -20,
                    infrastructureAndEnvironment: -15,
                    internationalRelations: -15
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 133,
        question: "Sayın Cumhurbaşkanım, komşu ülkelerle doğal gaz anlaşmaları yapabiliriz, bu enerji açığımızı kapatabilir. Ancak bu, yerli enerji sektörünü olumsuz etkileyebilir. Ne yapalım?",
        answers: [
            {
                text: "Doğal gaz anlaşmalarını imzalayın.",
                effect: {
                    publicSupport: +10,
                    budget: +15,
                    internationalRelations: +20,
                    infrastructureAndEnvironment: -10,
                }
            },
            {
                text: "Yerli enerji sektörüne öncelik verin.",
                effect: {
                    publicSupport: +10,
                    budget: +15,
                    internationalRelations: -20,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 134,
        question: "Sayın Cumhurbaşkanım, nükleer enerji santrali kurma fırsatımız var. Bu, uzun vadede enerji ihtiyacımızı karşılayabilir, ancak çevresel ve uluslararası alanda büyük tepki çekebilir. Ne yapalım?",
        answers: [
            {
                text: "Nükleer enerji santrali kurun.",
                effect: {
                    publicSupport: -25,
                    budget: -25,
                    infrastructureAndEnvironment: +40,
                    internationalRelations: -15,
                }
            },
            {
                text: "Nükleer enerjiye karşı çıkın.",
                effect: {
                    publicSupport: +25,
                    budget: +25,
                    infrastructureAndEnvironment: -40,
                    internationalRelations: +15,
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    }
];
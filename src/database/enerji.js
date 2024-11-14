import enerjiBakani from "../../public/ministers/enerji-bakani.webp";

export const enerjiQuestions = [
    {
        id: 131,
        question: "Yerli enerji kaynaklarını keşfetmek için geniş çaplı arama çalışmaları başlatabiliriz. Ancak bu, ciddi bir maliyet getirebilir.",
        answers: [
            {
                text: "Yerli enerji aramalarına başlayın",
                effect: {
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: -15,
                },
                listID: "enerji1",
            },
            {
                text: "Erteleyin, şimdilik maliyet çok yüksek",
                effect: {
                    budget: +15,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: +15
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 132,
        question: "Enerji tüketimi hızla artıyor. tasarrufu için halkı bilinçlendirme kampanyaları başlatabilir ya da yeni enerji santralleri inşa edebiliriz?",
        answers: [
            {
                text: "Kampanyayı başlatın.",
                effect: {
                    budget: +20,
                    infrastructureAndEnvironment: -15,
                    internationalRelations: +10,
                }
            },
            {
                text: "Yeni enerji santralleri kurun.",
                effect: {
                    budget: -20,
                    infrastructureAndEnvironment: +15,
                    internationalRelations: -10,
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 133,
        question: "Komşu ülkelerle doğal gaz anlaşmaları yapabiliriz, bu enerji açığımızı kapatabilir. Ancak bu, yerli enerji sektörünü olumsuz etkileyebilir.",
        answers: [
            {
                text: "Bu anlaşma yüzyılın fırsatı.",
                effect: {
                    publicSupport: +10,
                    budget: +15,
                    internationalRelations: +20,
                    infrastructureAndEnvironment: -10,
                },
                listID: "enerji2",
            },
            {
                text: "Yerli üreticileri koruyun.",
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
        question: "Nükleer enerji santrali kurma fırsatımız var. Bu, uzun vadede enerji ihtiyacımızı karşılayabilir, ancak çevresel ve uluslararası alanda büyük tepki çekebilir.",
        answers: [
            {
                text: "Santrali kurmaya başlayın",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: -10
                },
                listID: "enerji3",
            },
            {
                text: "Yeşil enerjiye yatırım yapın",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    }
];
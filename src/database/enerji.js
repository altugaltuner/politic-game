import enerjiBakani from "../../public/ministers/enerji-bakani.webp";
// 2 soru var
export const enerjiQuestions = [
    {
        id: 60,
        question: "Yerli enerji kaynaklarını keşfetmek için geniş çaplı arama çalışmaları başlatabiliriz. Ancak bu, ciddi bir maliyet getirebilir.",
        answers: [
            {
                text: "Yerli enerji aramalarına başlayın",
                effect: {
                    budget: -15,
                    infrastructureAndEnvironment: +15,
                },
                listID: "enerji1",
            },
            {
                text: "Erteleyin, şimdilik maliyet çok yüksek",
                effect: {
                    budget: +20,
                    infrastructureAndEnvironment: -20,
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
        level: 1,
    },
    {
        id: 61,
        question: "Nükleer enerji santrali kurma fırsatımız var. Bu, uzun vadede enerji ihtiyacımızı karşılayabilir, ancak çevresel ve uluslararası alanda büyük tepki çekebilir.",
        answers: [
            {
                text: "Santrali kuracağız",
                effect: {
                    budget: -15,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: -10,
                    agriculturalProduction: -5,
                },
                listID: "enerji3",
            },
            {
                text: "Çevreci kaynaklara yatırım yapacağız",
                effect: {
                    budget: -5,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: +5,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
        level: 2,
    },
];
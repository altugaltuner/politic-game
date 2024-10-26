import enerjiBakani from "../../public/ministers/enerji-bakani.png";

export const enerjiQuestions = [
    {
        id: 130,
        question: "Sayın Cumhurbaşkanım, fosil yakıtlara bağımlılığımız devam ediyor, ancak yenilenebilir enerjiye yatırım yaparsak uzun vadede daha sürdürülebilir bir enerji politikası izleyebiliriz.",
        answers: [
            {
                text: "Yenilenebilir enerjiye yatırım yapın.",
                effect: {
                    budget: -10,
                    agriculture: +20,
                    infrastructureAndEnvironment: +25,
                    internationalRelations: +10,
                }
            },
            {
                text: "Fosil yakıtlardan devam edeceğiz.",
                effect: {
                    budget: +10,
                    agriculture: -20,
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
        question: "Sayın Cumhurbaşkanım, yerli enerji kaynaklarını keşfetmek için geniş çaplı arama çalışmaları başlatabiliriz. Ancak bu, ciddi bir maliyet getirebilir.",
        answers: [
            {
                text: "Yerli enerji aramalarına başlayın.",
                effect: {
                    budget: -25,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: -15,
                }
            },
            {
                text: "Erteleyin, şu an maliyet çok yüksek.",
                effect: {
                    budget: +25,
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
        question: "Sayın Cumhurbaşkanım, komşu ülkelerle doğal gaz anlaşmaları yapabiliriz, bu enerji açığımızı kapatabilir. Ancak bu, yerli enerji sektörünü olumsuz etkileyebilir.",
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
                text: "Nükleer enerji santrali kuracağız.",
                effect: {
                    publicSupport: -25,
                    budget: -25,
                    infrastructureAndEnvironment: +40,
                    internationalRelations: -15,
                }
            },
            {
                text: "Tepki görecek durumumuz yok.",
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
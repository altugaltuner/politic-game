import enerjiBakani from "../../public/ministers/enerji-bakani.png";

export const enerjiQuestions = [
    {
        id: 131,
        question: "Yerli enerji kaynaklarını keşfetmek için geniş çaplı arama çalışmaları başlatabiliriz. Ancak bu, ciddi bir maliyet getirebilir.",
        answers: [
            {
                text: "Yerli enerji aramalarına başlayın",
                effect: {
                    budget: -25,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: -15,
                },
                listID: "enerji1",
            },
            {
                text: "Erteleyin, şu an maliyet çok yüksek",
                effect: {
                    budget: +25,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: +15
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
        link: "https://www.youtube.com/watch?v=eLU0BmTuZPg"
    },
    {
        id: 132,
        question: "Enerji tüketimi hızla artıyor. tasarrufu için halkı bilinçlendirme kampanyaları başlatabilir ya da yeni enerji santralleri inşa edebiliriz?",
        answers: [
            {
                text: "Kampanyayı derhal başlatın.",
                effect: {
                    publicSupport: +10,
                    budget: +20,
                    infrastructureAndEnvironment: +15,
                    internationalRelations: +15,
                }
            },
            {
                text: "Yeni enerji santrallerini önceliklendirin.",
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
        link: "https://www.yirmidort.tv/ekonomi/bakan-bayraktar-enerjiden-yillik-720-milyon-lira-tasarruf-saglayacagiz-189415"
    },
    {
        id: 133,
        question: "Komşu ülkelerle doğal gaz anlaşmaları yapabiliriz, bu enerji açığımızı kapatabilir. Ancak bu, yerli enerji sektörünü olumsuz etkileyebilir.",
        answers: [
            {
                text: "Bu anlaşma yüzyılımızın fırsatı.",
                effect: {
                    publicSupport: +10,
                    budget: +15,
                    internationalRelations: +20,
                    infrastructureAndEnvironment: -10,
                },
                listID: "enerji2",
            },
            {
                text: "Yerli üreticilerimizi koruyacağız.",
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
        link: "https://www.botas.gov.tr/Icerik/botastan-romanyaya-dogal-gaz/841"
    },
    {
        id: 134,
        question: "Nükleer enerji santrali kurma fırsatımız var. Bu, uzun vadede enerji ihtiyacımızı karşılayabilir, ancak çevresel ve uluslararası alanda büyük tepki çekebilir.",
        answers: [
            {
                text: "Firmalarla görüşün, santrali kurmaya başlayın",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: -10
                },
                listID: "enerji3",
            },
            {
                text: "Yenilenebilir enerji geleceğimiz",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
        link: "https://yesilgazete.org/halk-nukleeri-de-fuarini-da-istemiyor-nukleer-fuar-zirvasindan-vazgecin/"
    }
];
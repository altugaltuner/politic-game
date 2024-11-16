import ulastirmaBakani from "../../public/ministers/ulasim-bakani.webp";
// 2 soru var
export const ulastirmaQuestions = [
    {
        id: 150,
        question: "Hızlı tren projeleri ülke genelinde büyük ilgi görüyor. Ancak karayollarındaki ücretli geçişlerden şikayetler alıyoruz",
        answers: [
            {
                text: "Hızlı tren hatlarını genişletin",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +15,
                },
                listID: "ulastirma1",
            },
            {
                text: "Karayolu geçiş ücretlerinde indirime gidin",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: -15,
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
    {
        id: 151,
        question: "Sayın Cumhurbaşkanım, ülkemizde internet altyapısı yetersiz. Gençler internet hızının yavaşlığından şikayetçi.",
        answers: [
            {
                text: "Fiber altyapıyı yatırımları yapılsın",
                effect: {
                    publicSupport: +15,
                    budget: +10,
                    infrastructureAndEnvironment: +15,
                }
            },
            {
                text: "Yurt dışından internet altyapısı satın alınsın",
                effect: {
                    internationalRelations: +15,
                    budget: -15,
                    infrastructureAndEnvironment: +5,
                },
                listID: "ulastirma2",
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
];
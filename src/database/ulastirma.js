import ulastirmaBakani from "../../public/ministers/ulasim-bakani.webp";
// 4 soru var
export const ulastirmaQuestions = [
    {
        id: 150,
        question: "Hızlı tren projeleri ülke genelinde büyük ilgi görüyor. Ancak karayollarındaki ücretli geçişlerden şikayetler alıyoruz",
        answers: [
            {
                text: "Hızlı tren hatlarını genişletin",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                },
                listID: "ulastirma1",
            },
            {
                text: "Karayolu geçiş ücretlerinde indirime gidin",
                effect: {
                    publicSupport: +10,
                    budget: -5,
                    infrastructureAndEnvironment: -10,
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
                text: "Fiber altyapı yatırımları yapılsın",
                effect: {
                    publicSupport: +15,
                    budget: -15,
                    infrastructureAndEnvironment: +15,
                }
            },
            {
                text: "Yurt dışından internet altyapısı satın alınsın",
                effect: {
                    internationalRelations: +5,
                    budget: -10,
                    infrastructureAndEnvironment: +5,
                },
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
    {
        id: 152,
        question: "İstanbula yeni bir havaalanı projemiz mevcut. Fakat şirket, devletten yolcu garantisi istiyor.",
        answers: [
            {
                text: "Garanti sağlansın, havalimanına başlansın",
                effect: {
                    publicSupport: -10,
                    budget: -15,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Bunun garantisini veremeyiz",
                effect: {
                    budget: +15,
                    infrastructureAndEnvironment: -10,
                },
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
    {
        id: 153,
        question: "Sayın Cumhurbaşkanım, köprü ve tünel projeleri vatandaşlara büyük kolaylık sağladı, ancak yap-işlet-devret modeliyle yapılan bu projeler yüksek geçiş ücretleri nedeniyle eleştiriliyor.",
        answers: [
            {
                text: "Geçiş ücretlerinde indirime gideceğiz",
                effect: {
                    publicSupport: +10,
                    budget: -5,
                    infrastructureAndEnvironment: -10,
                }
            },
            {
                text: "Alternatif yollar inşa edeceğiz",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +10,
                },
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },
];
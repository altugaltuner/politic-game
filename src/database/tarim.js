import tarimBakani from "../../public/ministers/tarim-bakani.webp";

export const tarimQuestions = [
    {
        id: 70,
        question: "Son yıllarda kuraklık artıyor ve tarımsal üretim ciddi şekilde düşüyor. Tarıma büyük bir teşvik ve su kaynaklarına yatırım yapmamız gerek.",
        answers: [
            {
                text: "Yeni barajlar inşa edilmeli",
                effect: {
                    agriculturalProduction: +10,
                    budget: -15,
                }
            },
            {
                text: "Başka önceliklerimiz var, erteleyin",
                effect: {
                    agriculturalProduction: -25,
                    budget: +20,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },
    {
        id: 72,
        question: "Tarımsal üretim ithalata bağımlı hale geliyor.Bunun önüne geçmeliyiz",
        answers: [
            {
                text: "Çiftçiye vergi indirimi yapın",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    agriculturalProduction: +10,
                    internationalRelations: +10,
                },
            },
            {
                text: "İthal ürünlerden ek vergi alın",
                effect: {
                    publicSupport: +10,
                    budget: +5,
                    agriculturalProduction: -10,
                    internationalRelations: -10,
                },
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },
    {
        id: 73,
        question: "Orman yangınları her yıl artıyor ve ciddi kayıplar yaşanıyor. Nasıl önüne geçebiliriz ?",
        answers: [
            {
                text: "Yangın helikopterleri alacağız",
                effect: {
                    budget: -10,
                    agriculturalProduction: +20,
                }
            },
            {
                text: "Yeşil alanlardaki denetimleri artırın",
                effect: {

                    budget: +10,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },
    {
        id: 74,
        question: "Sayın Cumhurbaşkanım, tarımda genç iş gücü eksikliği yaşanıyor. Kırsal nüfus şehirlere göç ediyor.",
        answers: [
            {
                text: "Tarıma teşvik projeleri başlatın",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    agriculturalProduction: +20,
                }
            },
            {
                text: "Açığı göçmen işçilerle doldurun",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    agriculturalProduction: +10,
                },
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },
    {
        id: 75,
        question: "Organik tarım ve sürdürülebilir üretim yöntemlerine geçiş yapmak istiyoruz. Bunun için sizden onay bekliyoruz",
        answers: [
            {
                text: "Kademeli geçişe başlayın",
                effect: {
                    budget: -20,
                    agriculturalProduction: +10,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Mevcut sistemle devam edin",
                effect: {
                    budget: +20,
                    agriculturalProduction: -10,
                    infrastructureAndEnvironment: -20,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    }
];
import tarimBakani from "../../public/ministers/tarim-bakani.webp";
// 5 soru var
export const tarimQuestions = [
    {
        id: 130,
        question: "Son yıllarda kuraklık artıyor ve tarımsal üretim ciddi şekilde düşüyor. Tarıma büyük bir teşvik ve su kaynaklarına yatırım yapmamız gerek.",
        answers: [
            {
                text: "Yeni barajlar inşa edilmeli",
                effect: {
                    agriculturalProduction: +15,
                    budget: -10,
                }
            },
            {
                text: "Başka önceliklerimiz var, erteleyin",
                effect: {
                    agriculturalProduction: -15,
                    budget: +15,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },
    {
        id: 131,
        question: "Tarımsal üretim ithalata bağımlı hale geliyor. Bunun önüne geçmeliyiz",
        answers: [
            {
                text: "Çiftçiye vergi indirimi yapılacak",
                effect: {
                    publicSupport: +5,
                    budget: -10,
                    agriculturalProduction: +10,
                    internationalRelations: +10,
                },
            },
            {
                text: "Tarım ürünlerine gümrük vergisi artırılacak",
                effect: {
                    publicSupport: -15,
                    budget: +20,
                    agriculturalProduction: -15,
                    internationalRelations: -10,
                },
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },
    {
        id: 132,
        question: "Orman yangınları her yıl artıyor ve ciddi kayıplar yaşanıyor. Nasıl bir önlem almalıyız?",
        answers: [
            {
                text: "Yeni yangın helikopterleri alacağız",
                effect: {
                    budget: -20,
                    agriculturalProduction: +15,
                }
            },
            {
                text: "Yeşil alanlardaki denetimi artıracağız",
                effect: {
                    budget: +15,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },
    {
        id: 133,
        question: "Sayın Cumhurbaşkanım, tarımda genç iş gücü eksikliği yaşanıyor. Kırsal nüfus şehirlere göç ediyor.",
        answers: [
            {
                text: "Tarıma teşvik projeleri başlatın",
                effect: {
                    publicSupport: +10,
                    agriculturalProduction: +15,
                }
            },
            {
                text: "Açığı göçmen işçilerle doldurun",
                effect: {
                    publicSupport: -20,
                    agriculturalProduction: +10,
                    internationalRelations: +10,
                },
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },
    {
        id: 134,
        question: "Organik tarım ve sürdürülebilir üretim yöntemlerine geçiş yapmak istiyoruz. Bunun için sizden onay bekliyoruz",
        answers: [
            {
                text: "Kademeli geçişe başlayın",
                effect: {
                    budget: -15,
                    agriculturalProduction: +15,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Mevcut sistemle devam edin",
                effect: {
                    budget: +15,
                    agriculturalProduction: -10,
                    infrastructureAndEnvironment: -5,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    }
];
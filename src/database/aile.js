import aileBakanı from "../../public/ministers/aile-bakani.png";

export const aileQuestions = [
    {
        id: 10,
        question: "Efendim, Yaşlı bakım evleri dolup taşıyor. Yeni bakım evleri yapmamız gerekiyor. Ancak aynı zamanda, köprü inşaatımız da devam ediyor.",
        answers: [
            {
                text: "Bakım evleri yapın.",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: -20

                }
            },
            {
                text: "Köprü inşaatına devam edin.",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    infrastructureAndEnvironment: +20
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 11,
        question: "Düşük gelirli ailelere doğrudan nakit yardımı yapmayı öneriyorum. Ancak bu, kamu bütçesini zorlayabilir ve altyapı yatırımlarını azaltabilir.",
        answers: [
            {
                text: "Ailelere nakit yardımı yapın.",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    internalSecurity: +20,
                    infrastructureAndEnvironment: -20
                }
            },
            {
                text: "Bütçeyi altyapı projelerine ayıralım.",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    infrastructureAndEnvironment: +20
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 13,
        question: "Çocuk işçiliğiyle mücadelede yeni düzenlemeler gerekiyor, ancak bu iş gücü maliyetlerini artırabilir ve tarım üretimini düşürebilir.",
        answers: [
            {
                text: "Çocuk işçiliğini bitireceğiz.",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    agriculturalProduction: -20,
                }
            },
            {
                text: "Tarımı önceliklendirin.",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    agriculturalProduction: +20,
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
];
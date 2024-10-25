import aileBakanı from "../../public/ministers/aile-bakani.png";

export const aileQuestions = [
    {
        id: 10,
        question: "Sayın Cumhurbaşkanım, yaşlı bakım evleri dolup taşıyor. Yaşlılarımız için yeni bakım evleri yapmamız gerekiyor. Ancak aynı zamanda, çocuk koruma hizmetlerine de bütçe ayırmamız lazım. Ne yapalım?",
        answers: [
            {
                text: "Yaşlı bakım evleri yapın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    educationQuality: -10
                }
            },
            {
                text: "Çocuk koruma hizmetlerine bütçe ayırın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    educationQuality: +10
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 11,
        question: "Sayın Cumhurbaşkanım, düşük gelirli ailelere doğrudan nakit yardımı yapmayı öneriyorum. Ancak bu, kamu bütçesini zorlayabilir ve altyapı yatırımlarını azaltabilir. Ne yapalım?",
        answers: [
            {
                text: "Ailelere nakit yardımı yapın.",
                effect: {
                    publicSupport: +20,
                    budget: -25,
                    internalSecurity: +5,
                    infrastructureAndEnvironment: -10
                }
            },
            {
                text: "Bütçeyi altyapı projelerine ayıralım.",
                effect: {
                    publicSupport: -20,
                    budget: -15,
                    infrastructureAndEnvironment: +10
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 12,
        question: "Sayın Cumhurbaşkanım, aile içi şiddet vakaları giderek artıyor. Kadın ve çocukların korunması için sığınma evleri açmamız gerekiyor. Ancak, aynı bütçeyle engelli bireyler için de destek hizmetleri artırılabilir. Hangisini önceliklendirelim?",
        answers: [
            {
                text: "Kadın ve çocuklar için sığınma evleri açın.",
                effect: {
                    publicSupport: +15,
                    budget: -10,
                    internalSecurity: +10,
                }
            },
            {
                text: "Engelli bireyler için destek hizmetlerini artırın.",
                effect: {
                    publicSupport: +5,
                    budget: -5,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 13,
        question: "Sayın Cumhurbaşkanım, çocuk işçiliğiyle mücadelede yeni düzenlemeler yapmamız gerekiyor, ancak bu düzenlemeler iş gücü maliyetlerini artırabilir ve tarım üretimini düşürebilir. Ne yapalım?",
        answers: [
            {
                text: "Çocuk işçiliğine karşı düzenlemeleri yapın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    agriculturalProduction: -10,
                    educationQuality: +15
                }
            },
            {
                text: "Tarım sektörünü koruyalım.",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    agriculturalProduction: +10,
                    educationQuality: -15
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 14,
        question: "Sayın Cumhurbaşkanım, genç aileler için daha fazla kreş ve çocuk bakım merkezi açmamız gerekiyor. Ancak aynı bütçeyle, düşük gelirli aileler için gıda yardımı programını da genişletebiliriz. Ne yapalım?",
        answers: [
            {
                text: "Kreş ve çocuk bakım merkezleri açın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    educationQuality: +5
                }
            },
            {
                text: "Düşük gelirli ailelere destek olun.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    internalSecurity: +10,
                    educationQuality: -5
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    }
];
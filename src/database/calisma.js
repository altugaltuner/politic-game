import calismaBakani from "../../public/ministers/calisma-bakani.png";

export const calismaQuestions = [
    {
        id: 20,
        question: "Sayın Cumhurbaşkanım, işsizlik oranı artıyor ve gençler iş bulmakta zorlanıyor. Gençlere iş bulma programları başlatalım mı, yoksa işverenlere vergi indirimleri yaparak işe alımlarını teşvik edelim mi?",
        answers: [
            {
                text: "Genç işsizliği önleyelim.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    educationQuality: +15
                }
            },
            {
                text: "İşverenlere vergi indirimleri yapın.",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    educationQuality: -15,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 21,
        question: "Sayın Cumhurbaşkanım, işçilerin maaşlarının düşük olduğunu söylüyorlar. Asgari ücreti artırmamız gerekir, ancak bu, işverenler üzerinde mali baskı oluşturabilir. Ne yapalım?",
        answers: [
            {
                text: "Asgari ücreti artırın.",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    internalSecurity: +10,
                    agriculturalProduction: -10,
                }
            },
            {
                text: "Asgari ücreti aynı bırakın, işverenleri mali olarak zorlamayalım.",
                effect: {
                    publicSupport: -20,
                    budget: +10,
                    internalSecurity: -10,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 22,
        question: "Sayın Cumhurbaşkanım, iş kazaları artıyor. İş güvenliği önlemlerini artırmamız gerekir, ancak bu, işverenler için ekstra maliyet getirebilir. Ne yapalım?",
        answers: [
            {
                text: "İş güvenliği önlemlerini artırın, işçilerin sağlığını koruyalım.",
                effect: {
                    publicSupport: +5,
                    budget: -10,
                    internalSecurity: +10,
                    internationalRelations: +10
                }
            },
            {
                text: "Mevcut önlemler yeterli, işverenlerin mali yükünü artırmayalım.",
                effect: {
                    publicSupport: -5,
                    budget: +10,
                    internalSecurity: -10,
                    internationalRelations: -10
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 23,
        question: "Sayın Cumhurbaşkanım, kırsal kesimdeki iş gücü azalıyor ve bu, tarımsal üretimi olumsuz etkiliyor. Kırsal kesimde iş fırsatları yaratmak için tarım teşvikleri mi verelim, yoksa bu işçileri sanayi sektörüne mi yönlendirelim?",
        answers: [
            {
                text: "Tarım teşvikleri verin.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    agriculturalProduction: +20,
                }
            },
            {
                text: "Sanayi üretimini artırın.",
                effect: {
                    publicSupport: -5,
                    budget: -10,
                    agriculturalProduction: -15,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 24,
        question: "Sayın Cumhurbaşkanım, sosyal güvenlik bütçesi hızla azalıyor ve gelecekte emeklilik maaşlarını ödeyemez hale gelebiliriz. Sosyal güvenlik reformu yaparak maaşları düşürelim mi, yoksa vergileri artırarak bütçeyi dengeleyelim mi?",
        answers: [
            {
                text: "Sosyal güvenlik reformu yapın ve maaşları düşürün.",
                effect: {
                    publicSupport: -10,
                    budget: +15,
                    internalSecurity: -15,
                }
            },
            {
                text: "Vergileri artırın, sosyal güvenliği koruyalım.",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    internalSecurity: +15,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    }
];
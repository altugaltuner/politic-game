import disisleriBakani from "../../public/ministers/disisleri-bakani.png";

export const disisleriQuestions = [
    {
        id: 40,
        question: "Sayın Cumhurbaşkanım, komşu ülkelerle ticaret anlaşmalarını genişletme fırsatımız var. Ancak bu, bazı stratejik sektörlerde yerli üreticileri zor durumda bırakabilir. Ne yapalım?",
        answers: [
            {
                text: "Ticaret anlaşmalarını imzalayın.",
                effect: {
                    internationalRelations: +20,
                    agriculturalProduction: -10,
                }
            },
            {
                text: "Yerel üreticileri koruyun.",
                effect: {
                    internationalRelations: -20,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 41,
        question: "Sayın Cumhurbaşkanım, uluslararası bir örgüte katılmamız gündemde. Bu, ülkemizin uluslararası arenadaki gücünü artıracak, ancak bazı ulusal bağımsızlık kararlarını sınırlayabilir.",
        answers: [
            {
                text: "Uluslararası örgüte katılın.",
                effect: {
                    internationalRelations: +25,  // Uluslararası arenada güçlü bir pozisyon kazanılır
                    internalSecurity: -15,  // Ulusal bağımsızlık kısıtlamaları iç güvenlik üzerinde etkili olabilir
                }
            },
            {
                text: "Ulusal bağımsızlık daha önemli, katılmayın.",
                effect: {
                    internationalRelations: -25,  // Uluslararası arenada zayıf bir duruş olarak algılanır
                    internalSecurity: +15,  // Ulusal bağımsızlık korunur, iç güvenlik artar
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 42,
        question: "Sayın Cumhurbaşkanım, müttefik ülkeler savunma harcamalarımızı artırmamızı istiyor. Ancak bu, bütçemizi zorlayabilir ve sosyal harcamalardan kesintiler yapılmasına neden olabilir. Ne yapalım?",
        answers: [
            {
                text: "Savunma harcamalarını artırın.",
                effect: {
                    internationalRelations: +20,
                    budget: -20,
                }
            },
            {
                text: "Sosyal harcamaları koruyun.",
                effect: {
                    internationalRelations: -20,
                    budget: +20,
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 44,
        question: "Sayın Cumhurbaşkanım, mülteciler konusunda uluslararası bir kriz yaşanıyor. Mültecileri kabul edelim mi, yoksa sınırlarımızı koruyalım mı?",
        answers: [
            {
                text: "Mültecileri kabul edin.",
                effect: {
                    publicSupport: -40,  // Halkın bir kısmı insani sorumluluk nedeniyle memnun olur
                    internationalRelations: +20,  // Uluslararası toplumda olumlu algı oluşur
                    budget: -40,  // Mültecilerin kabulü bütçeyi zorlayabilir
                    internalSecurity: -30,  // İç güvenlik konusunda riskler artabilir
                }
            },
            {
                text: "Sınırları koruyun.",
                effect: {
                    publicSupport: +20,  // Halkın bir kısmı bu kararı olumsuz karşılayabilir
                    internationalRelations: -20,  // Uluslararası toplumda tepki yaratabilir
                    budget: +40,
                    internalSecurity: +30,  // İç güvenlik korunur ve güçlenir
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    }
];
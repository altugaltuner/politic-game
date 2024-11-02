import disisleriBakani from "../../public/ministers/disisleri-bakani.png";

export const disisleriQuestions = [
    {
        id: 40,
        question: "Sayın Cumhurbaşkanım, komşu ülkelerle ticaret anlaşmalarını genişletme fırsatımız var. Ancak bu, bazı stratejik sektörlerde yerli üreticileri zor durumda bırakabilir.",
        answers: [
            {
                text: "Ticaret anlaşmalarını imzalayın.",
                effect: {
                    budget: -20,
                    internationalRelations: +20,
                    agriculturalProduction: -10,
                }
            },
            {
                text: "Yerel üreticileri koruyun.",
                effect: {
                    budget: +20,
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
        question: "Uluslararası bir örgüte katılmamız gündemde. Bu, ülkemizin uluslararası arenadaki gücünü artıracak, ancak bazı ulusal bağımsızlık kararlarını sınırlayabilir.",
        answers: [
            {
                text: "Uluslararası örgüte katılın.",
                effect: {
                    internationalRelations: +20,
                    internalSecurity: -10,
                }
            },
            {
                text: "Ulusal bağımsızlık daha önemli, katılmayın.",
                effect: {
                    internationalRelations: -20,
                    internalSecurity: +10,
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 42,
        question: "Müttefik ülkeler savunma harcamalarımızı artırmamızı istiyor. Ancak bu, bütçemizi zorlayabilir ve sosyal harcamalardan kesintiler yapılmasına neden olabilir.",
        answers: [
            {
                text: "Savunma harcamalarını artırın.",
                effect: {
                    internationalRelations: +20,
                    internalSecurity: +20,
                    budget: -20,
                }
            },
            {
                text: "Sosyal harcamaları koruyun.",
                effect: {
                    internationalRelations: -20,
                    internalSecurity: -20,
                    budget: +20,
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 44,
        question: "Sayın Cumhurbaşkanım, mülteciler konusunda uluslararası bir kriz yaşanıyor. Mültecileri kabul edelim mi?",
        answers: [
            {
                text: "Onlar bizim kardeşimiz.",
                effect: {
                    publicSupport: -30,
                    internationalRelations: +20,
                    budget: -30,
                    internalSecurity: -30,
                }
            },
            {
                text: "Sınırları koruyun.",
                effect: {
                    publicSupport: +30,
                    internationalRelations: -20,
                    budget: +30,
                    internalSecurity: +30,
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
        link: "https://www.youtube.com/watch?v=AgA6HrJcjzA"
    }
];
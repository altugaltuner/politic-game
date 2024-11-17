import disisleriBakani from "../../public/ministers/disisleri-bakani.webp";
// 4 soru var
export const disisleriQuestions = [
    {
        id: 40,
        question: "Komşu ülkelerle ticaret anlaşmalarını genişletme fırsatımız var. Ancak bazı stratejik sektörlerde yerli üreticiler zorlanabilir.",
        answers: [
            {
                text: "Anlaşmayı imzalayın",
                effect: {

                    internationalRelations: +10,
                    agriculturalProduction: -10,
                },
                listID: "disisleri1",
            },
            {
                text: "Anlaşmayı askıya alın",
                effect: {
                    internationalRelations: -15,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 41,
        question: "Uluslararası PAME örgütüne katılım sağlayabiliriz, bu ülkemizin uluslarası arenada gücünü artıracak ama ulusal bağımsızlık kararlarımızı sınırlayabilir.",
        answers: [
            {
                text: "Katılma kararı alınmıştır",
                effect: {
                    internationalRelations: +10,
                    internalSecurity: -15,
                }
            },
            {
                text: "Katılım sürecini erteleyelim",
                effect: {
                    internationalRelations: -15,
                    internalSecurity: +10,
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 42,
        question: "Mülteciler konusunda uluslararası bir kriz yaşanıyor. Yüzbinlerce Afgan ve Suriyeli sınırlarımıza dayanmış durumda...",
        answers: [
            {
                text: "Sınır kapılarını açın",
                effect: {
                    publicSupport: -20,
                    internationalRelations: +10,
                    internalSecurity: -15,
                },
                listID: "disisleri3",
            },
            {
                text: "Sınırları koruyun",
                effect: {
                    publicSupport: +15,
                    internationalRelations: -25,
                    internalSecurity: +10,
                },
                listID: "disisleri4",
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    }
];
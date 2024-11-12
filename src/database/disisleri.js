import disisleriBakani from "../../public/ministers/disisleri-bakani.webp";

export const disisleriQuestions = [
    {
        id: 40,
        question: "Komşu ülkelerle ticaret anlaşmalarını genişletme fırsatımız var. Ancak bazı stratejik sektörlerde yerli üreticiler zorlanabilir.",
        answers: [
            {
                text: "Anlaşmayı imzalayın",
                effect: {
                    budget: -20,
                    internationalRelations: +20,
                    agriculturalProduction: -10,
                },
                listID: "disisleri1",
            },
            {
                text: "Anlaşmayı askıya alın",
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
        question: "Uluslararası bir örgüte katılmamız gündemde, ülkemizin gücünü artıracak ama ulusal bağımsızlık kararlarımızı sınırlayabilir. Öneriniz nedir?",
        answers: [
            {
                text: "Örgüte katılım sağlayalım",
                effect: {
                    internationalRelations: +20,
                    internalSecurity: -10,
                }
            },
            {
                text: "Başka alternatifler bulun",
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
        question: "Müttefik ülkeler savunma harcamalarımızı artırmamızı istiyor. Bu, sosyal harcamalardan kesinti yapmamızı gerektirebilir. Hangi yolu seçmeliyiz?",
        answers: [
            {
                text: "Savunma harcamalarını artırın",
                effect: {
                    internationalRelations: +20,
                    internalSecurity: +20,
                    budget: -20,
                },
                listID: "disisleri2",
            },
            {
                text: "Sosyal projelere yatırım yapın",
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
        question: "Sayın Cumhurbaşkanım, mülteciler konusunda uluslararası bir kriz yaşanıyor. Yüzbinlerce Afgan ve Suriyeli sınırlarımıza dayanmış durumda...",
        answers: [
            {
                text: "Sınır kapılarını açın",
                effect: {
                    publicSupport: -30,
                    internationalRelations: +20,
                    budget: -30,
                    internalSecurity: -30,
                },
                listID: "disisleri3",
            },
            {
                text: "Sınırları koruyun",
                effect: {
                    publicSupport: +30,
                    internationalRelations: -20,
                    budget: +30,
                    internalSecurity: +30,
                },
                listID: "disisleri4",
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
        link: "https://www.youtube.com/watch?v=AgA6HrJcjzA"
    }
];
import disisleriBakani from "../../public/ministers/disisleri-bakani.png";

export const disisleriQuestions = [
    {
        id: 40,
        question: "Komşu ülkelerle ticaret anlaşmalarını genişletme fırsatımız var. Ancak bazı stratejik sektörlerde yerli üreticiler zorlanabilir.",
        answers: [
            {
                text: "Ticaret anlaşmalarını imzalayın, bu fırsat önemli",
                effect: {
                    budget: -20,
                    internationalRelations: +20,
                    agriculturalProduction: -10,
                },
                listID: "disisleri1",
            },
            {
                text: "Yerel üreticilerimizi koruyacağız, anlaşmayı bekletin",
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
                text: "Uluslararası arenada yerimizi alacağız",
                effect: {
                    internationalRelations: +20,
                    internalSecurity: -10,
                }
            },
            {
                text: "İçişlerimize müdahale etmelerine müsaade etmeyeceğiz",
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
                text: "Savunmamız güçlü olmalı, harcamaları artırın",
                effect: {
                    internationalRelations: +20,
                    internalSecurity: +20,
                    budget: -20,
                },
                listID: "disisleri2",
            },
            {
                text: "Sosyal harcamalara yatırım yapın",
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
        question: "Sayın Cumhurbaşkanım, mülteciler konusunda uluslararası bir kriz yaşanıyor. Yüzbinlerce afgan ve suriyeli sınırlarımıza dayanmış durumda...",
        answers: [
            {
                text: "Onlar bizim din kardeşimizdir, kapıları açın",
                effect: {
                    publicSupport: -30,
                    internationalRelations: +20,
                    budget: -30,
                    internalSecurity: -30,
                },
                listID: "disisleri3",
            },
            {
                text: "Ülke sınırlarını koruyun",
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
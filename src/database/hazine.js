import hazineBakani from "../../public/ministers/hazine-bakani.webp";
// 2 soru var
export const hazineQuestions = [
    {
        id: 80,
        question: "Enflasyon hızla yükseliyor ve halkın alım gücü düşüyor. Merkezi faiz oranını artırarak enflasyonu düşürebiliriz, ancak bu, ekonomik büyümeyi yavaşlatacaktır.",
        answers: [
            {
                text: "Ekonomistler ile görüşülmeli",
                effect: {
                    publicSupport: +10,
                    budget: +5,
                    infrastructureAndEnvironment: +10,
                },
            },
            {
                text: "Faizi düşürüp büyümeyi sürdüreceğiz",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    infrastructureAndEnvironment: +5,
                },
                listID: "hazine1",
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 81,
        question: "Erken emeklilik konusu hala gündemde. Yaş haddinden emekli olamayan milyonlarca insan çözüm bekliyor. Ancak bu, bütçeye ciddi bir yük getirebilir.",
        answers: [
            {
                text: "Yasayı geçirin",
                effect: {
                    publicSupport: +15,
                    budget: -15,
                },
            },
            {
                text: "Askıya alın",
                effect: {
                    publicSupport: -15,
                    budget: +15,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 82,
        question: "Tarkisistan ile görüşmelerimiz doğrultusunda bize olan dış borcunun 63 milyon dolar olduğunu tespit ettik. Bu konuda ne gibi bir aksiyon düşünmektesiniz?",
        answers: [
            {
                text: "Borçlarını sileceğiz",
                effect: {
                    publicSupport: -10,
                    budget: -10,
                    internationalRelations: +15,
                },
            },
            {
                text: "Borcu tahsil edeceğiz",
                effect: {
                    publicSupport: +10,
                    budget: +15,
                    internationalRelations: -15,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 83,
        question: "Vergi borcu milyon dolarları bulmuş 5 şirket tespit ettim. ",
        answers: [
            {
                text: "Borcunu sileceğiz",
                effect: {
                    publicSupport: -10,
                    budget: -10,
                    internationalRelations: +15,
                },
            },
            {
                text: "Borcu tahsil edeceğiz",
                effect: {
                    publicSupport: +10,
                    budget: +15,
                    internationalRelations: -15,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
];
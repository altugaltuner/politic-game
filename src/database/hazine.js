import hazineBakani from "../../public/ministers/hazine-bakani.webp";

export const hazineQuestions = [
    {
        id: 110,
        question: "Enflasyon hızla yükseliyor ve halkın alım gücü düşüyor. Merkezi faiz oranını artırarak enflasyonu düşürebiliriz, ancak bu, ekonomik büyümeyi yavaşlatacaktır.",
        answers: [
            {
                text: "Ekonomistler ile toplantı ayarlayın",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    infrastructureAndEnvironment: +10,
                },
            },
            {
                text: "Faiz sebep, enflasyon neticedir!",
                effect: {
                    publicSupport: -35,
                    budget: -20,
                    infrastructureAndEnvironment: -10,
                },
                listID: "hazine1",
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 111,
        question: "Erken emeklilik konusu hala gündemde. Yaş haddinden emekli olamayan milyonlarca insan çözüm bekliyor. Ancak bu, bütçeye ciddi bir yük getirebilir.",
        answers: [
            {
                text: "Yasayı geçirin.",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    internalSecurity: +10,
                },
            },
            {
                text: "Askıya alın",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
];
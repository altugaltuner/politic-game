import hazineBakani from "../../public/ministers/hazine-bakani.webp";

export const hazineQuestions = [
    {
        id: 110,
        question: "Enflasyon hızla yükseliyor ve halkın alım gücü düşüyor. Merkezi faiz oranını artırarak enflasyonu düşürebiliriz, ancak bu, ekonomik büyümeyi yavaşlatacaktır.",
        answers: [
            {
                text: "Ekonomistler ile görüşülmeli",
                effect: {
                    publicSupport: +10,
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                },
            },
            {
                text: "Faizi düşürüp büyümeyi sürdüreceğiz",
                effect: {
                    publicSupport: -15,
                    budget: -15,
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
                    budget: -15,
                },
            },
            {
                text: "Askıya alın",
                effect: {
                    publicSupport: -10,
                    budget: +15,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
];
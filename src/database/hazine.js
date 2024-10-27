import hazineBakani from "../../public/ministers/hazine-bakani.png";

export const hazineQuestions = [
    {
        id: 110,
        question: "Enflasyon hızla yükseliyor ve halkın alım gücü düşüyor. Merkezi faiz oranını artırarak enflasyonu düşürebiliriz, ancak bu, ekonomik büyümeyi yavaşlatacaktır.",
        answers: [
            {
                text: "Faiz oranlarını artırın, enflasyonu düşürelim.",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Faiz oranlarını artırmayın, büyümeyi destekleyelim.",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    infrastructureAndEnvironment: -10,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 111,
        question: "EYT konusu hala gündemde. Yaş haddinden emekli olamayan milyonlarca insan çözüm bekliyor. Ancak bu, bütçeye ciddi bir yük getirebilir.",
        answers: [
            {
                text: "İnsanlar hak ettikleri emekliliği almalı.",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    internalSecurity: +10,
                }
            },
            {
                text: "Bu yasa şu an mali olarak sürdürülemez.",
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
    {
        id: 112,
        question: "Sayın Cumhurbaşkanım, ülkemizde kamu borcu artıyor. Borcu azaltmak için vergileri artırabiliriz, ancak bu halk arasında rahatsızlık yaratabilir.",
        answers: [
            {
                text: "Vergileri artırın, kamu borcunu azaltalım.",
                effect: {
                    publicSupport: -20,
                    budget: +20,
                }
            },
            {
                text: "Zaten yeterince artırdık.",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
];
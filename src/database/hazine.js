import hazineBakani from "../../public/ministers/hazine-bakani.webp";

export const hazineQuestions = [
    {
        id: 110,
        question: "Enflasyon hızla yükseliyor ve halkın alım gücü düşüyor. Merkezi faiz oranını artırarak enflasyonu düşürebiliriz, ancak bu, ekonomik büyümeyi yavaşlatacaktır.",
        answers: [
            {
                text: "Ekonomistleri toplayın, bunun tartışılması gerek",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    infrastructureAndEnvironment: +10,
                },
            },
            {
                text: "Faiz sebep, enflasyon neticedir!",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    infrastructureAndEnvironment: -10,
                },
                listID: "hazine1",
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
        link: "https://www.youtube.com/watch?v=NdNtitt401M"
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
                },
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
        link: "https://www.aa.com.tr/tr/gundem/cumhurbaskani-erdogan-eyt-duzenlemesini-acikladi/2774692"
    },
];
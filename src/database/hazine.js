import hazineBakani from "../../public/ministers/hazine-bakani.png";

export const hazineQuestions = [
    {
        id: 110,
        question: "Sayın Cumhurbaşkanım, enflasyon hızla yükseliyor ve halkın alım gücü düşüyor. Merkezi faiz oranını artırarak enflasyonu düşürebiliriz, ancak bu, ekonomik büyümeyi yavaşlatacaktır. Ne yapalım?",
        answers: [
            {
                text: "Faiz oranlarını artırın, enflasyonu düşürelim.",
                effect: {
                    publicSupport: +30,  // Faiz artışı halk arasında hoş karşılanmayabilir
                    budget: +30,  // Enflasyon kontrol altına alınır, mali istikrar sağlanır
                    infrastructureAndEnvironment: -20,  // Ekonomik büyüme yavaşlar, altyapı yatırımları azalır
                }
            },
            {
                text: "Faiz oranlarını artırmayın, büyümeyi destekleyelim.",
                effect: {
                    publicSupport: -30,
                    budget: -20,
                    infrastructureAndEnvironment: -20,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 111,
        question: "Sosyal Güvenlik Uzmanı: 'Sayın Cumhurbaşkanım, EYT konusu hala gündemde. Yaş haddinden emekli olamayan milyonlarca insan çözüm bekliyor. Ancak bu, bütçeye ciddi bir yük getirebilir.'",
        answers: [
            {
                text: "EYT yasasını hemen çıkaralım. İnsanlar hak ettikleri emekliliği almalı.",
                effect: {
                    publicSupport: +10,  // Halkın büyük kısmı memnun olur
                    budget: -20,  // Bütçe zorlanır
                }
            },
            {
                text: "Bu yasa şu an mali olarak sürdürülemez. Erteleyelim.",
                effect: {
                    publicSupport: -10,  // Halkın bir kesimi hayal kırıklığına uğrar
                    budget: +20,  // Bütçe rahatlar
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 112,
        question: "Sayın Cumhurbaşkanım, ülkemizde kamu borcu artıyor. Borcu azaltmak için vergileri artırabiliriz, ancak bu halk arasında rahatsızlık yaratabilir. Ne yapalım?",
        answers: [
            {
                text: "Vergileri artırın, kamu borcunu azaltalım.",
                effect: {
                    publicSupport: -20,
                    budget: +25,
                }
            },
            {
                text: "Vergileri artırmayın.",
                effect: {
                    publicSupport: +20,
                    budget: -25,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 113,
        question: "Sayın Cumhurbaşkanım, ekonomik büyümeyi desteklemek için büyük altyapı projelerine yatırım yapmayı düşünüyoruz. Ancak bu, kısa vadede bütçeyi zorlayabilir. Ne yapalım?",
        answers: [
            {
                text: "Altyapı projelerine yatırım yapın.",
                effect: {

                    budget: -20,
                    infrastructureAndEnvironment: +25,
                    internationalRelations: +10,
                }
            },
            {
                text: "Altyapı projelerini erteleyin.",
                effect: {

                    budget: +10,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: -10,
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
];
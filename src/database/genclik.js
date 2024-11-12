import genclikBakani from "../../public/ministers/genclik-bakani.webp";

export const genclikQuestions = [
    {
        id: 120,
        question: "Gençlerin spor yapma olanakları kısıtlı. Belediyelerden çok fazla talep ve şikayet alıyoruz. Ancak ilçe yollarının bakımı da bekliyor",
        answers: [
            {
                text: "Tesis yapımına başlayın",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +20,
                },
                listID: "genclik1",
            },
            {
                text: "Önce yolları onarın",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
    {
        id: 123,
        question: "Gençlerin sporcu olma hayalleri düşük. Yeterince teşvik olmadığından şikayet ediyorlar",
        answers: [
            {
                text: "Okullarda spor faaliyetlerini artırın",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "Profesyonel sporculara ek imkanlar sağlayın",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                },
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
];
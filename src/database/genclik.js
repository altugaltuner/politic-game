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
                    infrastructureAndEnvironment: +15,
                },
                listID: "genclik1",
            },
            {
                text: "Önce yolları onarın",
                effect: {
                    publicSupport: +15,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
];
import genclikBakani from "../../public/ministers/genclik-bakani.webp";
// 1 soru var
export const genclikQuestions = [
    {
        id: 70,
        question: "Gençlerin spor yapma olanakları kısıtlı. Belediyelerden çok fazla talep ve şikayet alıyoruz. Ancak ilçe yollarının bakımı da bekliyor",
        answers: [
            {
                text: "Tesis yapımına başlayın",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                },
                listID: "genclik1",
            },
            {
                text: "Önce yolları onarın",
                effect: {
                    publicSupport: +10,
                    budget: -5,
                    infrastructureAndEnvironment: +5,
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
        level: 2,
    },
];
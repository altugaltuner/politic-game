import genclikBakani from "../../public/ministers/genclik-bakani.png";

export const genclikQuestions = [
    {
        id: 120,
        question: "Sayın Cumhurbaşkanım, gençlerin spor yapma olanakları kısıtlı. Yeni spor tesisleri inşa edelim mi, yoksa mevcut tesisleri onarıp bakım yaparak mı devam edelim?",
        answers: [
            {
                text: "Yeni spor tesisleri inşa edin.",
                effect: {
                    publicSupport: +15,
                    budget: -15,
                    infrastructureAndEnvironment: +15,
                }
            },
            {
                text: "Mevcut tesisleri onarın.",
                effect: {
                    publicSupport: -10,
                    budget: +15,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
    {
        id: 123,
        question: "Sayın Cumhurbaşkanım, gençlerin sporcu olma hayalleri düşük. Spora teşvik için kampanyalar mı başlatalım yoksa sadece profesyonel sporculara mı odaklanalım ?",
        answers: [
            {
                text: "Gençleri spora yönlendirmeliyiz.",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "Profesyonel sporculara odaklanın, kaynakları verimli kullanın.",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
];
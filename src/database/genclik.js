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
                    educationQuality: +25,
                    infrastructureAndEnvironment: +15,
                }
            },
            {
                text: "Mevcut tesisleri onarın.",
                effect: {
                    publicSupport: -10,
                    budget: +15,
                    educationQuality: +5,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
    {
        id: 123,
        question: "Sayın Cumhurbaşkanım, ülkemizde gençlerin sporcu olma hayalleri düşük. Gençleri spora teşvik etmek için kampanyalar mı başlatalım, yoksa sadece profesyonel sporculara odaklanalım mı?",
        answers: [
            {
                text: "Gençleri spora teşvik edecek geniş çaplı kampanyalar başlatın.",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                    educationQuality: +25,
                }
            },
            {
                text: "Sadece profesyonel sporculara odaklanın, kaynakları verimli kullanın.",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                    educationQuality: -20,
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
];
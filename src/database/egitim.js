import egitimBakani from "../../public/ministers/egitim-bakani.png";

export const egitimQuestions = [
    {
        id: 53,
        question: "Sayın Cumhurbaşkanım, kırsal kesimdeki okullar fiziki açıdan çok kötü durumda. Yeni okullar inşa edebiliriz.",
        answers: [
            {
                text: "Derhal beton dökmeye başlayın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    internalSecurity: +10,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Mevcut okulları onarsanız yeterli.",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    internalSecurity: -10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    },
    {
        id: 54,
        question: "Sayın Cumhurbaşkanım, Türkiye’de özel okullarla devlet okulları arasındaki eğitim farkı giderek açılıyor. Öneriniz nedir?",
        answers: [
            {
                text: "Devlet okullarına iyileştirme gerek.",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                }
            },
            {
                text: "Özel okullara yatırım yapacağız.",
                effect: {
                    publicSupport: -10,
                    budget: -20,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    },
    {
        id: 55,
        question: "Sayın Cumhurbaşkanım, mesleki eğitime olan ilgi azaldı. Gençleri akademik mi yoksa mesleki eğitime mi yönlendirmeliyiz?",
        answers: [
            {
                text: "Mesleki eğitim için teşvik programları başlatın.",
                effect: {
                    budget: -10,
                    agriculture: +15,
                    infrastructure: +10,
                    international: -15,
                }
            },
            {
                text: "Akademik eğitimi destekleyin.",
                effect: {
                    budget: -10,
                    agriculturalProduction: -15,
                    international: +15,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    }
];
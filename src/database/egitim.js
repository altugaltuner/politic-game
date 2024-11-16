import egitimBakani from "../../public/ministers/egitim-bakani.webp";

export const egitimQuestions = [
    {
        id: 53,
        question: "Kırsal kesimdeki okulların fiziki durumu çok kötü. Yeni okulların inşası gündemde...",
        answers: [
            {
                text: "Köy okulları inşa edin",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +15,
                }
            },
            {
                text: "Köydeki nüfusu şehre taşıyın",
                effect: {
                    publicSupport: -10,
                    budget: +15,
                    internalSecurity: -15,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    },
    {
        id: 54,
        question: "Mesleki eğitime olan ilgi azaldı. Gençleri akademik eğitime mi yoksa mesleki eğitime mi yönlendirelim?",
        answers: [
            {
                text: "Mesleki eğitime yönlendirin",
                effect: {
                    agriculturalProduction: +15,
                    infrastructureAndEnvironment: -15,
                },
                listID: "egitim1",
            },
            {
                text: "Akademik eğitimi destekleyin",
                effect: {
                    agriculturalProduction: -15,
                    infrastructureAndEnvironment: +15,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    }
];
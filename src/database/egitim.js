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
                    internalSecurity: +10,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Köydeki nüfusu şehre taşıyın",
                effect: {
                    publicSupport: -25,
                    budget: +10,
                    internalSecurity: -10,
                    infrastructureAndEnvironment: -10,
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
                    budget: +10,
                    agriculturalProduction: +15,
                    internationalRelations: -15,
                },
                listID: "egitim1",
            },
            {
                text: "Akademik eğitimi destekleyin",
                effect: {
                    budget: -10,
                    agriculturalProduction: -15,
                    internationalRelations: +15,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    }
];
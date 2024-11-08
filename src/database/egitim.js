import egitimBakani from "../../public/ministers/egitim-bakani.png";

export const egitimQuestions = [
    {
        id: 53,
        question: "Sayın Cumhurbaşkanım, kırsal kesimdeki okulların fiziki durumu çok kötü. Yeni okulların inşaası gündemde...",
        answers: [
            {
                text: "Derhal inşaata başlayın, eğitim şart",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    internalSecurity: +10,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Köy okullarını kapatın, şehirdekiler kafi",
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
        link: "https://10haber.net/gundem/koy-okullari-kapatildi-servisler-kaldirildi-cocuklar-nasil-okuyacak-517307/"
    },
    {
        id: 54,
        question: "Türkiye’de özel okullarla devlet okulları arasındaki eğitim farkı açılıyor. Çözüm öneriniz nedir?",
        answers: [
            {
                text: "Devlet okullarını iyileştirmemiz gerek",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                }
            },
            {
                text: "Özel okullara yatırımı artıracağız",
                effect: {
                    publicSupport: -10,
                    budget: -20,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
        link: "https://dergipark.org.tr/tr/pub/iuhayefd/issue/8801/110031"
    },
    {
        id: 55,
        question: "Mesleki eğitime olan ilgi azaldı. Gençleri akademik eğitime mi yoksa mesleki eğitime mi yönlendirelim?",
        answers: [
            {
                text: "Mesleki eğitimi teşvik edeceğiz",
                effect: {
                    budget: -10,
                    agriculture: +15,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: -15,
                }
            },
            {
                text: "Akademik eğitimi destekleyin, ilim önemli",
                effect: {
                    budget: -10,
                    agriculturalProduction: -15,
                    internationalRelations: +15,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
        link: "https://www.milliyet.com.tr/egitim/mesleki-egitimde-2025-reformlari-7223945"
    }
];
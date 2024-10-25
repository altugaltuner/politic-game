import egitimBakani from "../../public/ministers/egitim-bakani.png";

export const egitimQuestions = [
    {
        id: 51,
        question: "Sayın Cumhurbaşkanım, okullarımızdaki teknolojik altyapı yetersiz. Tüm okullara tablet ve bilgisayar sağlayalım mı, yoksa mevcut bütçeyi öğretmenlerin eğitimine mi harcayalım?",
        answers: [
            {
                text: "Okullara tablet ve bilgisayar sağlayın.",
                effect: {
                    publicSupport: +15,
                    budget: -25,
                    educationQuality: +10,
                }
            },
            {
                text: "Eğitim kalitesini artırın.",
                effect: {
                    publicSupport: +10,
                    educationQuality: +10,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    },
    {
        id: 52,
        question: "Sayın Cumhurbaşkanım, eğitim sistemi sınav odaklı hale geldi ve bu durum öğrenciler üzerinde büyük bir baskı yaratıyor. Sınav sisteminde köklü değişiklikler yapalım mı, yoksa mevcut sistemi mi koruyalım?",
        answers: [
            {
                text: "Sınav sistemini değiştirin.",
                effect: {
                    publicSupport: +20,  // Öğrenciler ve aileler büyük memnuniyet duyar
                    budget: -15,  // Eğitim reformu bütçeyi etkileyebilir
                    educationQuality: +25,  // Öğrencilerin yaratıcılık ve düşünme becerileri gelişir
                    internalSecurity: +15,  // Eğitim kaynaklı stres azalır, sosyal huzur artar
                }
            },
            {
                text: "Mevcut sınav sistemini koruyun.",
                effect: {
                    publicSupport: -10,  // Halkın bir kısmı bu kararı olumsuz karşılar
                    budget: +20,  // Bütçeye doğrudan etkisi olmaz
                    educationQuality: -5,  // Öğrenciler üzerindeki baskı devam eder
                    internalSecurity: -5  // İç güvenlik üzerinde etkisi olmaz
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    },
    {
        id: 53,
        question: "Sayın Cumhurbaşkanım, kırsal kesimdeki okullar fiziki açıdan çok kötü durumda. Yeni okullar mı inşa edelim yoksa mevcut okulları onaralım mı?",
        answers: [
            {
                text: "Kırsal bölgelere yeni okullar inşa edin.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    educationQuality: -10,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Mevcut okulları onarın.",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    educationQuality: +10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    },
    {
        id: 54,
        question: "Sayın Cumhurbaşkanım, Türkiye’de özel okullarla devlet okulları arasındaki eğitim farkı giderek açılıyor. Özel okullara mı yatırım yapalım, yoksa devlet okullarını mı iyileştirelim?",
        answers: [
            {
                text: "Devlet okullarını iyileştirin.",
                effect: {
                    publicSupport: +20,  // Halk eğitimde eşitlik çabasını destekler
                    budget: -10,  // Devlet okullarını iyileştirmek maliyetlidir
                    educationQuality: +20,  // Daha fazla öğrenci kaliteli eğitim alır
                }
            },
            {
                text: "Özel okullara yatırım yapın.",
                effect: {
                    publicSupport: -20,  // Özel okullara giden aileler memnun olur
                    budget: -20,  // Özel okullara yapılan yatırımlar daha az maliyetlidir
                    educationQuality: +10,  // Özel okullar sayesinde eğitim kalitesi yükselir
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    },
    {
        id: 55,
        question: "Sayın Cumhurbaşkanım, mesleki eğitime olan ilgi azaldı. Gençleri mesleki eğitime yönlendirmek için teşvik programları başlatalım mı, yoksa akademik eğitimi mi destekleyelim?",
        answers: [
            {
                text: "Mesleki eğitim için teşvik programları başlatın.",
                effect: {
                    budget: -10,  // Teşvik programları maliyetlidir
                    educationQuality: -10,  // Mesleki eğitim ile iş gücü daha kalifiye hale gelir
                    agriculturalProduction: +15,  // Mesleki eğitim tarımsal üretimi de olumlu etkileyebilir
                }
            },
            {
                text: "Akademik eğitimi destekleyin.",
                effect: {
                    budget: -10,  // Akademik eğitim desteği de bütçeyi etkileyebilir
                    educationQuality: +15,  // Akademik başarı uzun vadede artar
                    agriculturalProduction: -15  // Tarım sektörüne doğrudan etkisi olmaz
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    }
];
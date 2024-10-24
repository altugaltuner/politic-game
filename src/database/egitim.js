import egitimBakani from "../../public/ministers/egitim.png";

export const egitimQuestions = [
    {
        id: 50,
        question: "Milli Eğitim Bakanı: 'Sayın Cumhurbaşkanım, mevcut eğitim sistemi öğrencilerin günümüzün teknolojik ve bilimsel ihtiyaçlarına yeterince cevap veremiyor. Büyük bir eğitim reformu yapmayı öneriyorum, ancak bu uzun vadeli bir süreç.'",
        answers: [
            {
                text: "Eğitim reformuna hemen başlayın, teknolojiye daha fazla yatırım yapın.",
                effect: {
                    educationQuality: +20,  // Uzun vadede eğitim kalitesi artar
                    futureWorkforce: +15,   // Gelecekteki nesiller daha iyi yetişir
                    immediateCosts: -20,    // Kısa vadede maliyetler yüksek olur
                    shortTermResults: -5    // Sonuçlar hemen alınamaz
                }
            },
            {
                text: "Şu anda ekonomi kötü, eğitimi olduğu gibi devam ettirelim.",
                effect: {
                    educationQuality: -10,  // Eğitim kalitesi geriler
                    futureWorkforce: -15,   // Uzun vadede iş gücünde nitelik sorunu ortaya çıkar
                    immediateCosts: +20,    // Kısa vadede maliyet düşer
                    shortTermResults: +5    // Hemen bir sorun görülmez
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    },
    {
        id: 51,
        question: "Sayın Cumhurbaşkanım, okullarımızdaki teknolojik altyapı yetersiz. Tüm okullara tablet ve bilgisayar sağlayalım mı, yoksa mevcut bütçeyi öğretmenlerin eğitimine mi harcayalım?",
        answers: [
            {
                text: "Okullara tablet ve bilgisayar sağlayın, teknolojik altyapıyı güçlendirin.",
                effect: {
                    publicSupport: +15,  // Öğrenciler ve aileler memnun olur
                    budget: -25,  // Teknolojik altyapı yatırımları maliyetlidir
                    educationQuality: +20,  // Teknoloji sayesinde eğitim kalitesi artar
                    infrastructureAndEnvironment: +10,  // Okulların teknolojik altyapısı gelişir
                }
            },
            {
                text: "Öğretmenlerin eğitimine yatırım yapın, eğitim kalitesini artırın.",
                effect: {
                    publicSupport: +10,  // Halk uzun vadeli eğitmen yatırımlarını olumlu karşılar
                    budget: -15,  // Eğitim programlarının maliyeti daha düşük olabilir
                    educationQuality: +15,  // Eğitimcilerin niteliği sayesinde eğitim kalitesi artar
                    infrastructureAndEnvironment: 0  // Altyapıya doğrudan etkisi olmaz
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
                text: "Sınav sistemini değiştirin, öğrenci odaklı bir sisteme geçin.",
                effect: {
                    publicSupport: +20,  // Öğrenciler ve aileler büyük memnuniyet duyar
                    budget: -15,  // Eğitim reformu bütçeyi etkileyebilir
                    educationQuality: +15,  // Öğrencilerin yaratıcılık ve düşünme becerileri gelişir
                    internalSecurity: +5,  // Eğitim kaynaklı stres azalır, sosyal huzur artar
                }
            },
            {
                text: "Mevcut sınav sistemini koruyun, değişiklik yapmayın.",
                effect: {
                    publicSupport: -10,  // Halkın bir kısmı bu kararı olumsuz karşılar
                    budget: 0,  // Bütçeye doğrudan etkisi olmaz
                    educationQuality: -5,  // Öğrenciler üzerindeki baskı devam eder
                    internalSecurity: 0  // İç güvenlik üzerinde etkisi olmaz
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
                text: "Kırsal bölgelere yeni okullar inşa edin, eğitime erişimi artırın.",
                effect: {
                    publicSupport: +15,  // Kırsal kesimdeki aileler bu karardan memnun olur
                    budget: -20,  // Yeni okullar inşası maliyetlidir
                    educationQuality: +10,  // Yeni okullar sayesinde eğitim kalitesi artar
                    infrastructureAndEnvironment: +20,  // Kırsal bölgelerde altyapı gelişir
                }
            },
            {
                text: "Mevcut okulları onarın, bütçeyi daha verimli kullanın.",
                effect: {
                    publicSupport: +10,  // Halk onarım projelerinden memnun olur
                    budget: -10,  // Onarım yeni inşalardan daha az maliyetlidir
                    educationQuality: +5,  // Okulların iyileştirilmesi eğitim kalitesini artırır
                    infrastructureAndEnvironment: +10,  // Okul binalarının onarımı altyapıyı geliştirir
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
                text: "Devlet okullarını iyileştirin, eğitimde fırsat eşitliğini sağlayın.",
                effect: {
                    publicSupport: +20,  // Halk eğitimde eşitlik çabasını destekler
                    budget: -20,  // Devlet okullarını iyileştirmek maliyetlidir
                    educationQuality: +20,  // Daha fazla öğrenci kaliteli eğitim alır
                    internalSecurity: +5,  // Eğitimde eşitlik sosyal huzuru artırır
                }
            },
            {
                text: "Özel okullara yatırım yapın, eğitimde kaliteyi artırın.",
                effect: {
                    publicSupport: +5,  // Özel okullara giden aileler memnun olur
                    budget: -10,  // Özel okullara yapılan yatırımlar daha az maliyetlidir
                    educationQuality: +15,  // Özel okullar sayesinde eğitim kalitesi yükselir
                    internalSecurity: -5,  // Eğitimde eşitsizlikler toplumsal huzursuzluk yaratabilir
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
                text: "Mesleki eğitim için teşvik programları başlatın, gençlerin iş gücüne katılımını artırın.",
                effect: {
                    publicSupport: +10,  // Gençler ve iş gücü piyasası memnun olur
                    budget: -15,  // Teşvik programları maliyetlidir
                    educationQuality: +10,  // Mesleki eğitim ile iş gücü daha kalifiye hale gelir
                    agriculturalProduction: +5,  // Mesleki eğitim tarımsal üretimi de olumlu etkileyebilir
                }
            },
            {
                text: "Akademik eğitimi destekleyin, üniversiteye giriş oranlarını artırın.",
                effect: {
                    publicSupport: +5,  // Akademik eğitime değer veren aileler memnun olur
                    budget: -10,  // Akademik eğitim desteği de bütçeyi etkileyebilir
                    educationQuality: +5,  // Akademik başarı uzun vadede artar
                    agriculturalProduction: 0  // Tarım sektörüne doğrudan etkisi olmaz
                }
            }
        ],
        title: "Milli Eğitim Bakanı",
        photo: egitimBakani,
    }
];
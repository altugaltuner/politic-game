import disisleriBakani from "../../public/ministers/disisleri.png";

export const disisleriQuestions = [
    {
        id: 40,
        question: "Sayın Cumhurbaşkanım, komşu ülkelerle ticaret anlaşmalarını genişletme fırsatımız var. Ancak bu, bazı stratejik sektörlerde yerli üreticileri zor durumda bırakabilir. Ne yapalım?",
        answers: [
            {
                text: "Ticaret anlaşmalarını imzalayın, ekonomimizi büyütelim.",
                effect: {
                    publicSupport: +10,  // Halk ekonomik büyüme beklentisiyle memnun olur
                    budget: +15,  // Ticaret anlaşmaları bütçeye olumlu katkı sağlar
                    internationalRelations: +20,  // Komşu ülkelerle ilişkiler güçlenir
                    agriculturalProduction: -10,  // Yerli üreticiler ticaret anlaşmalarından zarar görebilir
                }
            },
            {
                text: "Yerel üreticileri koruyun, ticaret anlaşmalarını erteleyin.",
                effect: {
                    publicSupport: +5,  // Yerli üreticiler ve halk memnun olur
                    budget: 0,  // Bütçe üzerindeki etkisi sınırlı
                    internationalRelations: -15,  // Komşu ülkelerle ilişkiler zayıflayabilir
                    agriculturalProduction: +10,  // Yerel üretim korunur ve gelişir
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 41,
        question: "Sayın Cumhurbaşkanım, uluslararası bir örgüte katılmamız gündemde. Bu, ülkemizin uluslararası arenadaki gücünü artıracak, ancak bazı ulusal bağımsızlık kararlarını sınırlayabilir.",
        answers: [
            {
                text: "Uluslararası örgüte katılın, ülkemizin gücünü artırın.",
                effect: {
                    publicSupport: +10,  // Halk uluslararası prestijin artmasından memnun olur
                    internationalRelations: +25,  // Uluslararası arenada güçlü bir pozisyon kazanılır
                    internalSecurity: -5,  // Ulusal bağımsızlık kısıtlamaları iç güvenlik üzerinde etkili olabilir
                    budget: -10,  // Katılımın maliyeti yüksek olabilir
                }
            },
            {
                text: "Ulusal bağımsızlık daha önemli, katılmayın.",
                effect: {
                    publicSupport: +5,  // Bağımsızlık yanlısı halk memnun olur
                    internationalRelations: -20,  // Uluslararası arenada zayıf bir duruş olarak algılanır
                    internalSecurity: +10,  // Ulusal bağımsızlık korunur, iç güvenlik artar
                    budget: 0,  // Bütçeye doğrudan etkisi olmaz
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 42,
        question: "Sayın Cumhurbaşkanım, müttefik ülkeler savunma harcamalarımızı artırmamızı istiyor. Ancak bu, bütçemizi zorlayabilir ve sosyal harcamalardan kesintiler yapılmasına neden olabilir. Ne yapalım?",
        answers: [
            {
                text: "Savunma harcamalarını artırın, müttefiklerle ilişkileri güçlendirin.",
                effect: {
                    publicSupport: +5,  // Güvenlik yanlısı halk memnun olur
                    internationalRelations: +20,  // Müttefiklerle ilişkiler güçlenir
                    budget: -20,  // Savunma harcamaları bütçeye ağır yük getirir
                    publicSupport: -10,  // Sosyal harcamaların kesilmesi halk arasında rahatsızlık yaratır
                }
            },
            {
                text: "Savunma harcamalarını aynı seviyede tutun, sosyal harcamaları koruyun.",
                effect: {
                    publicSupport: +10,  // Sosyal harcamaların korunması halkı memnun eder
                    internationalRelations: -15,  // Müttefik ülkeler ilişkilerde rahatsızlık duyar
                    budget: 0,  // Bütçeye doğrudan etkisi olmaz
                    internalSecurity: +5,  // İç güvenlik sosyal harcamalarla artar
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 43,
        question: "Sayın Cumhurbaşkanım, stratejik bir enerji kaynağı üzerinde komşu ülkelerle anlaşmazlık yaşıyoruz. Bu enerji kaynağını savunalım mı, yoksa diplomatik çözüme mi yönelelim?",
        answers: [
            {
                text: "Enerji kaynağını savunun, ulusal çıkarlarımızı koruyalım.",
                effect: {
                    publicSupport: +15,  // Halk ulusal çıkarların savunulmasından memnun olur
                    internationalRelations: -20,  // Komşu ülkelerle ilişkiler kötüleşir
                    budget: -15,  // Savunma ve enerji kaynağına yapılan yatırımlar maliyetlidir
                    internalSecurity: +10,  // Ulusal güvenlik artar
                }
            },
            {
                text: "Diplomatik çözüme yönelin, barışı sağlayalım.",
                effect: {
                    publicSupport: +10,  // Halk barışçıl çözümü olumlu karşılar
                    internationalRelations: +25,  // Komşu ülkelerle ilişkiler iyileşir
                    budget: 0,  // Diplomatik çözümler daha az maliyetlidir
                    internalSecurity: -5,  // Ulusal güvenlik konusunda endişeler artabilir
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    },
    {
        id: 44,
        question: "Sayın Cumhurbaşkanım, mülteciler konusunda uluslararası bir kriz yaşanıyor. Mültecileri kabul edelim mi, yoksa sınırlarımızı koruyalım mı?",
        answers: [
            {
                text: "Mültecileri kabul edin, insani sorumluluğumuzu yerine getirelim.",
                effect: {
                    publicSupport: +10,  // Halkın bir kısmı insani sorumluluk nedeniyle memnun olur
                    internationalRelations: +20,  // Uluslararası toplumda olumlu algı oluşur
                    budget: -20,  // Mültecilerin kabulü bütçeyi zorlayabilir
                    internalSecurity: -10,  // İç güvenlik konusunda riskler artabilir
                }
            },
            {
                text: "Sınırları koruyun, mültecileri kabul etmeyin.",
                effect: {
                    publicSupport: -10,  // Halkın bir kısmı bu kararı olumsuz karşılayabilir
                    internationalRelations: -15,  // Uluslararası toplumda tepki yaratabilir
                    budget: 0,  // Bütçeye doğrudan etkisi olmaz
                    internalSecurity: +15,  // İç güvenlik korunur ve güçlenir
                }
            }
        ],
        title: "Dışişleri Bakanı",
        photo: disisleriBakani,
    }
];
import calismaBakani from "../../public/ministers/calisma.png";

export const calismaQuestions = [
    {
        id: 20,
        question: "Sayın Cumhurbaşkanım, işsizlik oranı artıyor ve gençler iş bulmakta zorlanıyor. Gençlere iş bulma programları başlatalım mı, yoksa işverenlere vergi indirimleri yaparak işe alımlarını teşvik edelim mi?",
        answers: [
            {
                text: "Gençlere iş bulma programları başlatın, genç işsizliği önleyelim.",
                effect: {
                    publicSupport: +15,  // Gençler ve aileleri memnun olur
                    budget: -20,  // Programların maliyeti yüksek olabilir
                    internalSecurity: +5,  // İşsizliğin azalması güvenliği artırır
                    educationQuality: +5  // Gençler iş gücü piyasasına daha iyi hazırlanır
                }
            },
            {
                text: "İşverenlere vergi indirimleri yapın, işe alımları teşvik edelim.",
                effect: {
                    publicSupport: +10,  // İş dünyası memnun olur
                    budget: -15,  // Vergi indirimleri bütçeyi etkiler
                    internalSecurity: +5,  // İşsizlik azaldığı için güvenlik artar
                    agriculturalProduction: +5  // İş gücü artışı tarımsal üretimi de artırır
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 21,
        question: "Sayın Cumhurbaşkanım, işçilerin maaşlarının düşük olduğunu söylüyorlar. Asgari ücreti artırmamız gerekir, ancak bu, işverenler üzerinde mali baskı oluşturabilir. Ne yapalım?",
        answers: [
            {
                text: "Asgari ücreti artırın, işçilerin refahını sağlayalım.",
                effect: {
                    publicSupport: +20,  // İşçiler ve aileleri büyük memnuniyet duyar
                    budget: 0,  // Asgari ücret artışı bütçeyi direkt etkilemez
                    internalSecurity: +10,  // Gelir artışıyla birlikte toplumsal huzur artar
                    agriculturalProduction: -10,  // İş gücü maliyetleri artabilir, tarımsal üretim olumsuz etkilenir
                }
            },
            {
                text: "Asgari ücreti aynı bırakın, işverenleri mali olarak zorlamayalım.",
                effect: {
                    publicSupport: -10,  // İşçiler memnuniyetsiz olur
                    budget: 0,  // Bütçeye doğrudan etkisi olmaz
                    internalSecurity: -5,  // Toplumsal huzursuzluk artar
                    agriculturalProduction: +5,  // İş gücü maliyeti değişmediği için tarımsal üretim korunur
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 22,
        question: "Sayın Cumhurbaşkanım, iş kazaları artıyor. İş güvenliği önlemlerini artırmamız gerekir, ancak bu, işverenler için ekstra maliyet getirebilir. Ne yapalım?",
        answers: [
            {
                text: "İş güvenliği önlemlerini artırın, işçilerin sağlığını koruyalım.",
                effect: {
                    publicSupport: +15,  // İşçiler güvenli ortamlarda çalışmaktan memnun olur
                    budget: -10,  // İş güvenliği önlemlerinin maliyeti
                    internalSecurity: +10,  // İş kazalarının azalması güvenlik sağlar
                    internationalRelations: +5  // Uluslararası alanda olumlu bir imaj oluşur
                }
            },
            {
                text: "Mevcut önlemler yeterli, işverenlerin mali yükünü artırmayalım.",
                effect: {
                    publicSupport: -5,  // İşçiler memnuniyetsiz olur
                    budget: 0,  // Bütçeye doğrudan etkisi olmaz
                    internalSecurity: -10,  // İş kazaları ve güvenlik sorunları devam eder
                    internationalRelations: 0  // Uluslararası ilişkilerde etkisi olmaz
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 23,
        question: "Sayın Cumhurbaşkanım, kırsal kesimdeki iş gücü azalıyor ve bu, tarımsal üretimi olumsuz etkiliyor. Kırsal kesimde iş fırsatları yaratmak için tarım teşvikleri mi verelim, yoksa bu işçileri sanayi sektörüne mi yönlendirelim?",
        answers: [
            {
                text: "Tarım teşvikleri verin, kırsal kesimde iş gücünü artırın.",
                effect: {
                    publicSupport: +10,  // Kırsal kesim ve tarım sektörü memnun olur
                    budget: -15,  // Teşvikler bütçeyi zorlar
                    agriculturalProduction: +20,  // Tarımsal üretim canlanır
                    internalSecurity: +5  // Kırsal bölgelerde güvenlik ve refah artar
                }
            },
            {
                text: "İşçileri sanayi sektörüne yönlendirin, sanayi üretimini artırın.",
                effect: {
                    publicSupport: -5,  // Kırsal kesim iş gücü kaybeder, memnuniyetsiz olur
                    budget: 0,  // Yönlendirme maliyeti düşük
                    agriculturalProduction: -15,  // Tarımsal üretim düşer
                    internalSecurity: +10  // Sanayi sektöründe güvenlik ve istikrar artar
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 24,
        question: "Sayın Cumhurbaşkanım, sosyal güvenlik bütçesi hızla azalıyor ve gelecekte emeklilik maaşlarını ödeyemez hale gelebiliriz. Sosyal güvenlik reformu yaparak maaşları düşürelim mi, yoksa vergileri artırarak bütçeyi dengeleyelim mi?",
        answers: [
            {
                text: "Sosyal güvenlik reformu yapın ve maaşları düşürün.",
                effect: {
                    publicSupport: -20,  // Emekliler ve çalışanlar memnuniyetsiz olur
                    budget: +15,  // Bütçe dengesi sağlanır
                    internalSecurity: -10,  // Toplumda huzursuzluk ve protestolar artabilir
                    educationQuality: 0  // Eğitim sistemine etkisi olmaz
                }
            },
            {
                text: "Vergileri artırın, sosyal güvenliği koruyalım.",
                effect: {
                    publicSupport: -10,  // Vergi artışları halk arasında rahatsızlık yaratır
                    budget: +20,  // Bütçe dengesi daha sağlam olur
                    internalSecurity: -5,  // Halkın tepkisiyle güvenlik sorunları artabilir
                    educationQuality: 0  // Eğitim sistemine etkisi olmaz
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    }
];
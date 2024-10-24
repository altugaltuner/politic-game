import icisleriBakani from "../../public/ministers/icisleri.png";

export const icisleriQuestions = [
    {
        id: 100,
        question: "İçişleri Bakanı: 'Sayın Cumhurbaşkanım, ülkedeki Suriyeli mülteci sayısı toplumsal tansiyonu artırıyor. Bazı kesimler, mültecilerin geri gönderilmesini istiyor. Ne yapalım?'",
        answers: [
            {
                text: "Mültecileri aşamalı olarak geri gönderme süreci başlatılsın.",
                effect: {
                    society: +10,  // Toplumun bir kısmı rahatlar
                    governmentSupport: +15, // Hükümete olan destek artar
                    internationalRelations: -10, // Uluslararası tepki alınabilir
                    economy: -5  // Ekonomik katkı sağlayan iş gücü kaybedilebilir
                }
            },
            {
                text: "Mülteciler ülkemizde kalsın, entegrasyon projeleri başlatalım.",
                effect: {
                    society: -5,  // Kısa vadede huzursuzluk artabilir
                    economy: +10, // İş gücü katkısı sağlanabilir
                    integration: +20, // Uzun vadede entegrasyon sağlanabilir
                    governmentSupport: -5 // Hükümete olan destek azalabilir
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 101,
        question: "Afet Yönetim Başkanı: 'Sayın Cumhurbaşkanım, Türkiye deprem riski taşıyan bir ülke. Şehirlerin altyapılarını güçlendirmek ve yeni kentsel dönüşüm projeleri başlatmak acil durumda, ancak bu büyük maliyet gerektiriyor.'",
        answers: [
            {
                text: "Kentsel dönüşüm projelerine büyük kaynak aktarın, altyapıyı güçlendirin.",
                effect: {
                    safety: +30,  // Uzun vadede deprem riskine karşı güvenlik sağlanır
                    futureLosses: -25,  // Olası kayıplar azalır
                    budget: -20,  // Kısa vadede bütçe zorlanır
                    otherProjects: -15  // Diğer projeler aksayabilir
                }
            },
            {
                text: "Şu an kaynaklarımız kısıtlı. Küçük iyileştirmelerle durumu idare edelim.",
                effect: {
                    safety: -10,  // Güvenlik riski devam eder
                    futureLosses: +20,  // Olası depremde ağır kayıplar olabilir
                    budget: +15,  // Kısa vadede bütçe korunur
                    otherProjects: +10  // Diğer projeler aksamadan devam eder
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 102,
        question: "Sayın Cumhurbaşkanım, şehirlerdeki suç oranları artıyor. Suçla mücadelede polis sayısını mı artırmalıyız, yoksa suç önleme projelerine mi yatırım yapmalıyız?",
        answers: [
            {
                text: "Polis sayısını artırın, güvenliği sağlamak öncelikli.",
                effect: {
                    publicSupport: +10,  // Halk daha fazla güvenlikten memnun olur
                    internalSecurity: +20,  // Suç oranları düşer, güvenlik artar
                    budget: -15,  // Polis sayısının artması bütçeyi zorlar
                    educationQuality: 0  // Eğitim sistemine etkisi olmaz
                }
            },
            {
                text: "Suç önleme projelerine yatırım yapın, uzun vadede güvenliği artırın.",
                effect: {
                    publicSupport: +5,  // Halk projelerin uzun vadeli etkilerini olumlu karşılar
                    internalSecurity: +10,  // Suç oranları yavaşça düşer
                    budget: -10,  // Projeler maliyetlidir, fakat daha düşük maliyetlidir
                    educationQuality: +5,  // Eğitim projeleri gençlerin suça bulaşmasını engelleyebilir
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 103,
        question: "Sayın Cumhurbaşkanım, sınır bölgelerimizde kaçakçılık ve insan kaçakçılığı faaliyetleri artıyor. Daha fazla sınır güvenliği mi sağlayalım, yoksa bu sorunu diplomatik yollarla mı çözmeye çalışalım?",
        answers: [
            {
                text: "Sınır güvenliğini artırın, sorunu yerinde çözün.",
                effect: {
                    publicSupport: +10,  // Halk güvenliğin artmasından memnun olur
                    internalSecurity: +20,  // Kaçakçılık ve insan kaçakçılığı azalır
                    internationalRelations: -10,  // Komşu ülkelerle ilişkiler gerginleşebilir
                    budget: -15,  // Sınır güvenliği artırmanın maliyeti yüksek olur
                }
            },
            {
                text: "Diplomatik yollarla çözmeye çalışın, komşu ülkelerle iş birliğini artırın.",
                effect: {
                    publicSupport: +5,  // Halk barışçıl çözüm girişimlerini destekler
                    internalSecurity: +5,  // Uzun vadede güvenlik artar, fakat yavaş olur
                    internationalRelations: +15,  // Komşu ülkelerle ilişkiler iyileşir
                    budget: 0  // Diplomatik çözüm maliyeti düşüktür
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 104,
        question: "Sayın Cumhurbaşkanım, bazı şehirlerdeki protestolar şiddete dönüşüyor. Polis müdahalesini sertleştirmeli mi yoksa diyalog yoluyla çözüm mü aramalıyız?",
        answers: [
            {
                text: "Polis müdahalesini sertleştirin, düzeni sağlayın.",
                effect: {
                    publicSupport: -10,  // Halkın bir kısmı polis şiddetinden rahatsız olabilir
                    internalSecurity: +15,  // Kısa vadede düzen sağlanır
                    internationalRelations: -10,  // Uluslararası toplumda tepki doğabilir
                    publicSupport: +5,  // Düzeni sağlamak isteyen halkın bir kısmı memnun olur
                }
            },
            {
                text: "Diyalog yoluyla çözüm arayın, toplumla iletişim kurun.",
                effect: {
                    publicSupport: +15,  // Halkın büyük bir kısmı barışçıl çözümü destekler
                    internalSecurity: +5,  // Şiddet azalır, fakat kısa vadede yavaş bir çözüm olabilir
                    internationalRelations: +5,  // Uluslararası alanda olumlu karşılanır
                    budget: 0  // Diyalog yoluyla çözüm maliyetsizdir
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 105,
        question: "Sayın Cumhurbaşkanım, büyük şehirlerde trafik sorunları giderek artıyor. Trafik polisi sayısını mı artıralım, yoksa şehir içi toplu taşıma projelerine mi yatırım yapalım?",
        answers: [
            {
                text: "Trafik polisi sayısını artırın, düzeni sağlayın.",
                effect: {
                    publicSupport: +5,  // Halk kısa vadeli çözümü destekler
                    internalSecurity: +10,  // Trafik düzeni ve güvenliği artar
                    budget: -10,  // Polis sayısını artırmak maliyetlidir
                    infrastructureAndEnvironment: 0  // Altyapı üzerinde etkisi olmaz
                }
            },
            {
                text: "Toplu taşıma projelerine yatırım yapın, uzun vadeli çözüm sağlayın.",
                effect: {
                    publicSupport: +15,  // Halk toplu taşıma projelerini destekler
                    internalSecurity: +5,  // Toplu taşıma ile trafik güvenliği uzun vadede artar
                    budget: -20,  // Toplu taşıma projeleri maliyetlidir
                    infrastructureAndEnvironment: +20,  // Şehir içi altyapı ve çevre gelişir
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 106,
        question: "Sayın Cumhurbaşkanım, bazı kırsal bölgelerde devletin varlığı zayıf hissediliyor ve halkın kamu hizmetlerine erişimi zor. Devlet varlığını artırmak için daha fazla kamu binası mı yapalım, yoksa mobil hizmetler mi sunalım?",
        answers: [
            {
                text: "Kırsal bölgelere kamu binaları yapın, devletin varlığını güçlendirin.",
                effect: {
                    publicSupport: +15,  // Halk devletin görünürlüğünün artmasından memnun olur
                    budget: -25,  // Yeni binaların inşası maliyetlidir
                    internalSecurity: +10,  // Devletin varlığı güvenliği artırır
                    infrastructureAndEnvironment: +10,  // Kırsal altyapı gelişir
                }
            },
            {
                text: "Mobil hizmetler sunun, esnek ve daha az maliyetli bir çözüm sağlayın.",
                effect: {
                    publicSupport: +10,  // Halk hizmete erişim kolaylığını olumlu karşılar
                    budget: -10,  // Mobil hizmetler daha düşük maliyetlidir
                    internalSecurity: +5,  // Devlet hizmetlerine erişimin artması güvenliği güçlendirir
                    infrastructureAndEnvironment: 0  // Altyapı üzerinde doğrudan etkisi yoktur
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    }
];
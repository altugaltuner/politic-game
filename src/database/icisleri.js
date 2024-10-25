import icisleriBakani from "../../public/ministers/icisleri-bakani.png";

export const icisleriQuestions = [
    {
        id: 100,
        question: "İçişleri Bakanı: 'Sayın Cumhurbaşkanım, ülkedeki Suriyeli mülteci sayısı toplumsal tansiyonu artırıyor. Bazı kesimler, mültecilerin geri gönderilmesini istiyor. Ne yapalım?'",
        answers: [
            {
                text: "Mültecileri aşamalı olarak geri gönderme süreci başlatılsın.",
                effect: {
                    publicSupport: +30,
                    budget: +30,
                    internationalRelations: -30,
                    internalSecurity: +20
                }
            },
            {
                text: "Mülteciler ülkemizde kalsın, entegrasyon projeleri başlatalım.",
                effect: {
                    publicSupport: -30,
                    budget: -30,
                    internationalRelations: +30,
                    internalSecurity: -20
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
                text: "Kentsel dönüşüm projelerine kaynak aktarın.",
                effect: {
                    budget: -20,
                    internalSecurity: +20,
                    infrastructureAndEnvironment: +30
                }
            },
            {
                text: "Şu an kaynaklarımız kısıtlı.",
                effect: {
                    budget: +20,
                    internalSecurity: -20,
                    infrastructureAndEnvironment: -20
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
                    publicSupport: +30,
                    budget: -20,
                    internationalRelations: -30,
                    internalSecurity: +20
                }
            },
            {
                text: "Diplomatik yollarla çözmeye çalışın, komşu ülkelerle iş birliğini artırın.",
                effect: {
                    publicSupport: -30,
                    budget: +30,
                    internationalRelations: +30,
                    internalSecurity: -20
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
                }
            },
            {
                text: "Diyalog yoluyla çözüm arayın, toplumla iletişim kurun.",
                effect: {
                    publicSupport: +10,
                    internalSecurity: -15,
                    internationalRelations: +10,
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
                    infrastructureAndEnvironment: -20  // Altyapı üzerinde etkisi olmaz
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
];
import icisleriBakani from "../../public/ministers/icisleri-bakani.png";

export const icisleriQuestions = [
    {
        id: 100,
        question: "Sayın Cumhurbaşkanım, ülkedeki Suriyeli mülteci sayısı toplumsal tansiyonu artırıyor. Bazı kesimler, mültecilerin geri gönderilmesini istiyor.",
        answers: [
            {
                text: "Mültecileri geri gönderme süreci başlatılsın",
                effect: {
                    publicSupport: +30,
                    budget: +30,
                    internationalRelations: -30,
                    internalSecurity: +30
                }
            },
            {
                text: "Entegrasyon projesi başlatılsın",
                effect: {
                    publicSupport: -30,
                    budget: -30,
                    internationalRelations: +30,
                    internalSecurity: -30
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 101,
        question: "Türkiye deprem riski taşıyan bir ülke. Şehirlerin altyapılarını güçlendirmek ve yeni kentsel dönüşüm projeleri başlatmak acil durumda, ancak bu büyük maliyet gerektiriyor.",
        answers: [
            {
                text: "Kentsel dönüşüm projelerine kaynak aktarın",
                effect: {
                    budget: -30,
                    internalSecurity: +30,
                    infrastructureAndEnvironment: +30
                }
            },
            {
                text: "Şu an kaynaklarımız kısıtlı",
                effect: {
                    budget: +30,
                    internalSecurity: -30,
                    infrastructureAndEnvironment: -30
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 103,
        question: "Sınır bölgelerimizde kaçakçılık ve insan kaçakçılığı faaliyetleri artıyor. Bu sorunu nasıl çözebiliriz?",
        answers: [
            {
                text: "Sınır güvenliğini artırın, sorunu yerinde çözün",
                effect: {
                    publicSupport: +30,
                    budget: -20,
                    internationalRelations: -30,
                    internalSecurity: +20
                }
            },
            {
                text: "Komşu ülkelerle işbirliği yapın",
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
        question: "Sayın Cumhurbaşkanım, bazı şehirlerdeki protestolar şiddete dönüşüyor.Önerileriniz nelerdir?",
        answers: [
            {
                text: "Polis müdahalesini sertleştirin, düzeni sağlayın.",
                effect: {
                    publicSupport: -10,
                    internalSecurity: +15,
                    internationalRelations: -10,
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
        question: "Sayın Cumhurbaşkanım, büyük şehirlerde trafik sorunları giderek artıyor.",
        answers: [
            {
                text: "Trafik polisi sayısını artırın",
                effect: {
                    publicSupport: +5,
                    internalSecurity: +10,
                    budget: -10,
                    infrastructureAndEnvironment: -20
                }
            },
            {
                text: "Toplu taşıma projelerine yatırım yapın.",
                effect: {
                    publicSupport: +15,  // Halk toplu taşıma projelerini destekler
                    internalSecurity: +20,  // Toplu taşıma ile trafik güvenliği uzun vadede artar
                    budget: -30,  // Toplu taşıma projeleri maliyetlidir
                    infrastructureAndEnvironment: +20,  // Şehir içi altyapı ve çevre gelişir
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
];
import icisleriBakani from "../../public/ministers/icisleri-bakani.webp";

export const icisleriQuestions = [
    {
        id: 100,
        question: "Ülkedeki Suriyeli mülteci sayısı toplumsal tansiyonu artırıyor. Bazı kesimler, mültecilerin geri gönderilmesini istiyor.",
        answers: [
            {
                text: "Kademeli olarak göndermeye başlayın",
                effect: {
                    publicSupport: -20,
                    budget: -10,
                    internationalRelations: +10,
                    internalSecurity: -20
                }
            },
            {
                text: "Entegrasyon projesini başlatın",
                effect: {
                    publicSupport: -30,
                    budget: -30,
                    internationalRelations: +30,
                    internalSecurity: -30
                },
                listID: "icisleri1",
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 101,
        question: "Türkiye deprem riski taşıyan bir ülke. Şehirlerin altyapılarını güçlendirmek ve yeni kentsel dönüşüm projeleri başlatmak acil durumda, ne yapmalıyız?",
        answers: [
            {
                text: "Kentsel dönüşümü başlatın",
                effect: {
                    budget: -20,
                    internalSecurity: +20,
                    infrastructureAndEnvironment: +20
                }
            },
            {
                text: "Kaynak yetersiz, erteleyin",
                effect: {
                    budget: +20,
                    internalSecurity: -20,
                    infrastructureAndEnvironment: -20
                },
                listID: "icisleri2",
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
                text: "Sınır güvenliğini artırın",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    internationalRelations: -20,
                    internalSecurity: +20
                }
            },
            {
                text: "Komşu ülkeyle toplantı ayarlayın",
                effect: {
                    publicSupport: -20,
                    budget: +10,
                    internationalRelations: +20,
                    internalSecurity: -10
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 105,
        question: "Büyük şehirlerde trafik sorunları giderek artıyor. Halk bu durumdan çok rahatsız",
        answers: [
            {
                text: "Yeni yollar yapın",
                effect: {
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                    publicSupport: +10,
                }
            },
            {
                text: "Toplu taşımaya teşvik edin",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: 0,
                    publicSupport: -10,
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
    {
        id: 105,
        question: "Cumhurbaşkanım, ülkede terör örgütleri faaliyetlerini artırıyor. Büyük şehirler çok büyük risk altında!",
        answers: [
            {
                text: "Uluslararası işbirliğine başvuracağız",
                effect: {
                    internalSecurity: -20,
                    internationalRelations: +20,
                    budget: +10,
                }
            },
            {
                text: "Askeri operasyona başlayın",
                effect: {
                    internalSecurity: +10,
                    internationalRelations: -20,
                    budget: -20,
                },
                listID: "icisleri3",
            },
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
    },
];
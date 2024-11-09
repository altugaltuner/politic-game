import icisleriBakani from "../../public/ministers/icisleri-bakani.png";

export const icisleriQuestions = [
    {
        id: 100,
        question: "Sayın Cumhurbaşkanım, ülkedeki Suriyeli mülteci sayısı toplumsal tansiyonu artırıyor. Bazı kesimler, mültecilerin geri gönderilmesini istiyor.",
        answers: [
            {
                text: "Kademeli olarak gönderme söylemlerini yayın",
                effect: {
                    publicSupport: -20,
                    budget: -10,
                    internationalRelations: +10,
                    internalSecurity: -20
                }
            },
            {
                text: "Entegrasyon projesi başlatılsın",
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
        link: "https://www.meb.gov.tr/suriyeli-cocuklarin-turk-egitim-sistemine-entegrasyonunun-desteklenmesi-projesi/haber/12824/tr"
    },
    {
        id: 101,
        question: "Türkiye deprem riski taşıyan bir ülke. Şehirlerin altyapılarını güçlendirmek ve yeni kentsel dönüşüm projeleri başlatmak acil durumda, ne yapmalıyız?",
        answers: [
            {
                text: "Kentsel dönüşüm projelerine kaynak aktarın",
                effect: {
                    budget: -20,
                    internalSecurity: +20,
                    infrastructureAndEnvironment: +20
                }
            },
            {
                text: "Şu an kaynaklarımız kısıtlı,erteleyin",
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
        link: "https://www.youtube.com/watch?v=97Bm8nFEtg8"
    },
    {
        id: 103,
        question: "Sınır bölgelerimizde kaçakçılık ve insan kaçakçılığı faaliyetleri artıyor. Bu sorunu nasıl çözebiliriz?",
        answers: [
            {
                text: "Sınır güvenliğini artırın, sorunu yerinde çözün",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    internationalRelations: -20,
                    internalSecurity: +20
                }
            },
            {
                text: "Gizli bir operasyonla elebaşılarını yakalayacağız",
                effect: {
                    publicSupport: -20,
                    budget: +10,
                    internationalRelations: +20,
                    internalSecurity: -20
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
        link: "https://www.youtube.com/watch?v=j757MUWN3uk"
    },
    {
        id: 104,
        question: "Bazı şehirlerdeki sokak köpekleri hakkında çıkarılacak yasa için protestolar şiddete dönüşüyor. Önerileriniz nelerdir?",
        answers: [
            {
                text: "Polis müdahalesini sertleştirin, düzeni sağlayın",
                effect: {
                    publicSupport: -10,
                    internalSecurity: +10,
                    internationalRelations: -10,
                },
            },
            {
                text: "Diyalog yoluyla çözüm bulacağız",
                effect: {
                    publicSupport: +10,
                    internalSecurity: +10,
                    internationalRelations: +10,
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
        link: "https://www.gazeteduvar.com.tr/hayvanlari-oldurme-teklifine-tepki-kopekleri-bu-hale-biz-getirdik-haber-1698821"
    },
    {
        id: 105,
        question: "Sayın Cumhurbaşkanım, büyük şehirlerde trafik sorunları giderek artıyor.",
        answers: [
            {
                text: "Yeni altyapı projeleriyle trafiği rahatlatmalıyız",
                effect: {
                    internalSecurity: +10,
                    budget: -10,
                    infrastructureAndEnvironment: -20
                }
            },
            {
                text: "Toplu taşıma kullanımını özendirin",
                effect: {
                    internalSecurity: +20,
                    budget: -30,
                    infrastructureAndEnvironment: +20,
                }
            }
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
        link: "https://www.bbc.com/turkce/articles/c51j7xw5n3po"
    },
    {
        id: 105,
        question: "Cumhurbaşkanım, ülkede terör örgütleri faaliyetlerini artırıyor. Büyük şehirler çok büyük risk altında!",
        answers: [
            {
                text: "Uluslararası bir işbirliğine ihtiyacımız var",
                effect: {
                    internalSecurity: -20,
                    internationalRelations: +20,
                    budget: -30,
                }
            },
            {
                text: "Derhal operasyona başlayın. Göz açtırmayacağız",
                effect: {
                    internalSecurity: +10,
                    internationalRelations: -20,
                    budget: -10,
                },
                listID: "icisleri3",
            },
        ],
        title: "İçişleri Bakanı",
        photo: icisleriBakani,
        link: "https://tr.wikipedia.org/wiki/2022_%C4%B0stanbul_sald%C4%B1r%C4%B1s%C4%B1"
    },
];
import hazineBakani from "../../public/ministers/hazine.png";

export const hazineQuestions = [
    {
        id: 110,
        question: "Sayın Cumhurbaşkanım, enflasyon hızla yükseliyor ve halkın alım gücü düşüyor. Merkezi faiz oranını artırarak enflasyonu düşürebiliriz, ancak bu, ekonomik büyümeyi yavaşlatacaktır. Ne yapalım?",
        answers: [
            {
                text: "Düşürelim",
                effect: {
                    inflation: +10, // enflasyon yükselir
                    economy: +5, // ekonomik büyüme artar
                    society: -10 // halkın memnuniyeti düşer
                }
            },
            {
                text: "Artıralım",
                effect: {
                    inflation: -15, // enflasyon düşer
                    economy: -5, // ekonomik büyüme yavaşlar
                    society: +5 // halkın memnuniyeti artar
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 111,
        question: "Sosyal Güvenlik Uzmanı: 'Sayın Cumhurbaşkanım, EYT konusu hala gündemde. Yaş haddinden emekli olamayan milyonlarca insan çözüm bekliyor. Ancak bu, bütçeye ciddi bir yük getirebilir.'",
        answers: [
            {
                text: "EYT yasasını hemen çıkaralım. İnsanlar hak ettikleri emekliliği almalı.",
                effect: {
                    publicSupport: +20,  // Halkın büyük kısmı memnun olur
                    governmentSupport: +15, // Hükümete olan destek artar
                    budget: -30, // Devlet bütçesi ciddi bir yük altına girer
                    longTermEconomy: -20 // Uzun vadeli mali dengeler bozulabilir
                }
            },
            {
                text: "Bu yasa şu an mali olarak sürdürülemez. Erteleyelim.",
                effect: {
                    publicSupport: -10,  // Halkın bir kesimi hayal kırıklığına uğrar
                    governmentSupport: -10, // Hükümete olan destek azalır
                    budget: +20, // Devlet bütçesi korunur
                    longTermEconomy: +10 // Uzun vadeli mali dengeler korunur
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 112,
        question: "Sayın Cumhurbaşkanım, ülkemizde kamu borcu artıyor. Borcu azaltmak için vergileri artırabiliriz, ancak bu halk arasında rahatsızlık yaratabilir. Ne yapalım?",
        answers: [
            {
                text: "Vergileri artırın, kamu borcunu azaltalım.",
                effect: {
                    publicSupport: -15,  // Vergi artışı halk arasında hoş karşılanmaz
                    budget: +25,  // Vergi artışı bütçeyi rahatlatır, borç azalır
                    internalSecurity: -5,  // Ekonomik rahatsızlık güvenliği olumsuz etkileyebilir
                    internationalRelations: +5,  // Ekonomik istikrar uluslararası alanda olumlu karşılanır
                }
            },
            {
                text: "Vergileri artırmayın, bütçeyi farklı yollarla dengeleyelim.",
                effect: {
                    publicSupport: +10,  // Halk vergilerin artırılmamasından memnun olur
                    budget: -10,  // Borcun azalması zorlaşır
                    internalSecurity: 0,  // İç güvenliğe doğrudan etkisi olmaz
                    internationalRelations: 0,  // Uluslararası ilişkilerde etkisi sınırlı olur
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 113,
        question: "Sayın Cumhurbaşkanım, ekonomik büyümeyi desteklemek için büyük altyapı projelerine yatırım yapmayı düşünüyoruz. Ancak bu, kısa vadede bütçeyi zorlayabilir. Ne yapalım?",
        answers: [
            {
                text: "Altyapı projelerine yatırım yapın, uzun vadede büyümeyi destekleyelim.",
                effect: {
                    publicSupport: +15,  // Halk yatırımlardan memnun olur
                    budget: -20,  // Kısa vadede bütçe zorlanır
                    infrastructureAndEnvironment: +25,  // Altyapı projeleri çevre ve altyapıyı geliştirir
                    internationalRelations: +10,  // Uluslararası yatırımcılar ülkeye ilgi gösterebilir
                }
            },
            {
                text: "Altyapı projelerini erteleyin, bütçeyi koruyalım.",
                effect: {
                    publicSupport: -5,  // Halk yatırımların ertelenmesinden memnun olmayabilir
                    budget: +10,  // Bütçe korunur
                    infrastructureAndEnvironment: -10,  // Altyapı eksiklikleri devam eder
                    internationalRelations: 0,  // Uluslararası ilişkilerde etkisi olmaz
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 114,
        question: "Sayın Cumhurbaşkanım, enflasyon hızla yükseliyor. Merkez Bankası faiz oranlarını artırarak enflasyonu kontrol edebiliriz, ancak bu ekonomik büyümeyi yavaşlatabilir.",
        answers: [
            {
                text: "Faiz oranlarını artırın, enflasyonu düşürelim.",
                effect: {
                    publicSupport: -10,  // Faiz artışı halk arasında hoş karşılanmayabilir
                    budget: +15,  // Enflasyon kontrol altına alınır, mali istikrar sağlanır
                    internalSecurity: 0,  // Güvenlik üzerinde doğrudan etkisi olmaz
                    internationalRelations: +10,  // Ekonomik istikrar uluslararası alanda olumlu karşılanır
                }
            },
            {
                text: "Faiz oranlarını artırmayın, büyümeyi destekleyelim.",
                effect: {
                    publicSupport: +5,  // Halk faiz artışının olmamasından memnun olabilir
                    budget: -10,  // Enflasyon kontrolsüz kalabilir, bütçeyi zorlayabilir
                    internalSecurity: -5,  // Ekonomik sıkıntılar güvenliği olumsuz etkileyebilir
                    internationalRelations: -5,  // Enflasyon uluslararası ilişkilerde negatif bir izlenim yaratabilir
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 115,
        question: "Sayın Cumhurbaşkanım, bazı kamu hizmetlerinde büyük açıklar var ve bu hizmetlerin özelleştirilmesi gündemde. Özelleştirme yoluna mı gidelim, yoksa kamu kontrolünü koruyalım mı?",
        answers: [
            {
                text: "Hizmetleri özelleştirin, bütçeyi rahatlatın ve verimliliği artırın.",
                effect: {
                    publicSupport: -5,  // Özelleştirme halk arasında tepki yaratabilir
                    budget: +20,  // Bütçe rahatlar, açıklar kapanır
                    infrastructureAndEnvironment: +10,  // Özelleştirme hizmet kalitesini artırabilir
                    internationalRelations: +5,  // Uluslararası yatırımcılar için olumlu bir adım
                }
            },
            {
                text: "Kamu kontrolünü koruyun, stratejik hizmetleri devlete bırakın.",
                effect: {
                    publicSupport: +10,  // Halkın büyük kısmı bu kararı olumlu karşılar
                    budget: -15,  // Kamu kontrolü bütçeyi zorlayabilir
                    infrastructureAndEnvironment: 0,  // Altyapı ve çevre üzerinde etkisi olmaz
                    internationalRelations: 0,  // Uluslararası ilişkiler üzerinde doğrudan etkisi olmaz
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    },
    {
        id: 116,
        question: "Sayın Cumhurbaşkanım, işsizlik fonunda biriken kaynakları ekonomiyi canlandırmak için kullanmayı öneriyorum. Ancak bu, işsizler için güvenlik ağını zayıflatabilir. Ne yapalım?",
        answers: [
            {
                text: "İşsizlik fonunu kullanın, ekonomiyi canlandırın.",
                effect: {
                    publicSupport: +5,  // Kısa vadede ekonomik canlanma halkı memnun eder
                    budget: +15,  // Bütçeye katkı sağlar, ekonomi canlanır
                    internalSecurity: +5,  // Ekonomik canlanma güvenliği olumlu etkiler
                    publicSupport: -10,  // İşsizler ve dar gelirli halk arasında tepki yaratabilir
                }
            },
            {
                text: "İşsizlik fonuna dokunmayın, güvenlik ağını koruyalım.",
                effect: {
                    publicSupport: +10,  // İşsizler ve dar gelirli halk memnun olur
                    budget: 0,  // Bütçeye etkisi olmaz
                    internalSecurity: 0,  // Güvenlik üzerinde doğrudan etkisi olmaz
                    publicSupport: +5,  // Güvenlik ağının korunması halkı memnun eder
                }
            }
        ],
        title: "Hazine ve Maliye Bakanı",
        photo: hazineBakani,
    }
];
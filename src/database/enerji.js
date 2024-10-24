import enerjiBakani from "../../public/ministers/enerji.png";

export const enerjiQuestions = [
    {
        id: 130,
        question: "Sayın Cumhurbaşkanım, fosil yakıtlara bağımlılığımız devam ediyor, ancak yenilenebilir enerjiye yatırım yaparsak uzun vadede daha sürdürülebilir bir enerji politikası izleyebiliriz. Ne yapalım?",
        answers: [
            {
                text: "Yenilenebilir enerjiye yatırım yapın, sürdürülebilirlik önemli.",
                effect: {
                    publicSupport: +15,  // Halk çevre dostu politikadan memnun olur
                    budget: -20,  // Yenilenebilir enerji projeleri maliyetlidir
                    infrastructureAndEnvironment: +25,  // Çevresel sürdürülebilirlik sağlanır
                    internationalRelations: +10,  // Çevreci politikalar uluslararası alanda olumlu karşılanır
                }
            },
            {
                text: "Fosil yakıtlara odaklanın, enerji güvenliğini sağlayalım.",
                effect: {
                    publicSupport: +5,  // Kısa vadede enerji sorununun çözümü halkı memnun eder
                    budget: -10,  // Fosil yakıt yatırımları maliyetli olabilir
                    infrastructureAndEnvironment: -20,  // Çevresel sorunlar artabilir
                    internationalRelations: 0  // Uluslararası ilişkilerde etkisi olmaz
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 131,
        question: "Sayın Cumhurbaşkanım, yerli enerji kaynaklarını keşfetmek için geniş çaplı arama çalışmaları başlatabiliriz. Ancak bu, ciddi bir maliyet getirebilir. Ne yapalım?",
        answers: [
            {
                text: "Yerli enerji aramalarına başlayın, enerji bağımsızlığını artırın.",
                effect: {
                    publicSupport: +10,  // Halk enerji bağımsızlığı fikrini destekler
                    budget: -25,  // Geniş çaplı arama çalışmaları maliyetlidir
                    infrastructureAndEnvironment: +10,  // Yerli kaynak kullanımı çevreyi olumlu etkileyebilir
                    internationalRelations: +5,  // Uluslararası arenada enerji bağımsızlığı olumlu karşılanır
                }
            },
            {
                text: "Bu çalışmaları erteleyin, şu an maliyet çok yüksek.",
                effect: {
                    publicSupport: -5,  // Halk enerji konusunda endişe duyabilir
                    budget: +10,  // Bütçe tasarrufu sağlanır
                    infrastructureAndEnvironment: 0,  // Çevreye doğrudan etkisi olmaz
                    internationalRelations: 0  // Uluslararası ilişkilerde etkisi olmaz
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 132,
        question: "Sayın Cumhurbaşkanım, enerji tüketimi hızla artıyor. Enerji tasarrufu için halkı bilinçlendirme kampanyaları başlatalım mı, yoksa enerji arzını artırmak için yeni enerji santralleri mi inşa edelim?",
        answers: [
            {
                text: "Enerji tasarrufu kampanyası başlatın, halkı bilinçlendirelim.",
                effect: {
                    publicSupport: +10,  // Halk tasarruf politikalarını destekler
                    budget: -10,  // Kampanyalar maliyetli olabilir
                    infrastructureAndEnvironment: +15,  // Enerji tasarrufu çevreye olumlu etki yapar
                    internationalRelations: +5,  // Uluslararası arenada çevreci politika olumlu karşılanır
                }
            },
            {
                text: "Yeni enerji santralleri inşa edin, enerji arzını artırın.",
                effect: {
                    publicSupport: +5,  // Kısa vadede enerji sorununun çözümü halkı memnun eder
                    budget: -20,  // Santrallerin inşası maliyetlidir
                    infrastructureAndEnvironment: -10,  // Yeni santraller çevreye zarar verebilir
                    internationalRelations: 0  // Uluslararası ilişkilerde etkisi olmaz
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 133,
        question: "Sayın Cumhurbaşkanım, komşu ülkelerle doğal gaz anlaşmaları yapabiliriz, bu enerji açığımızı kapatabilir. Ancak bu, yerli enerji sektörünü olumsuz etkileyebilir. Ne yapalım?",
        answers: [
            {
                text: "Doğal gaz anlaşmalarını imzalayın, enerji açığını kapatalım.",
                effect: {
                    publicSupport: +10,  // Halk enerji arzının artmasından memnun olur
                    budget: +15,  // Doğal gaz ithalatı ekonomiye katkı sağlar
                    internationalRelations: +20,  // Komşu ülkelerle ilişkiler güçlenir
                    infrastructureAndEnvironment: -10,  // Doğal gaz kullanımı çevresel sorunlar yaratabilir
                }
            },
            {
                text: "Yerli enerji sektörüne öncelik verin, doğal gaz anlaşmalarını bekletin.",
                effect: {
                    publicSupport: -5,  // Halk kısa vadede enerji sorunlarından rahatsız olabilir
                    budget: -10,  // Yerli enerji sektörü için daha fazla yatırım gerekebilir
                    internationalRelations: -10,  // Komşu ülkelerle ilişkiler olumsuz etkilenebilir
                    infrastructureAndEnvironment: +10,  // Yerli enerji üretimi çevresel sürdürülebilirliği artırabilir
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    },
    {
        id: 134,
        question: "Sayın Cumhurbaşkanım, nükleer enerji santrali kurma fırsatımız var. Bu, uzun vadede enerji ihtiyacımızı karşılayabilir, ancak çevresel ve uluslararası alanda büyük tepki çekebilir. Ne yapalım?",
        answers: [
            {
                text: "Nükleer enerji santrali kurun, enerji ihtiyacımızı karşılayalım.",
                effect: {
                    publicSupport: +5,  // Halkın bir kısmı uzun vadeli çözümü destekler
                    budget: -30,  // Nükleer santrallerin maliyeti çok yüksektir
                    infrastructureAndEnvironment: -20,  // Çevresel ve güvenlik endişeleri artar
                    internationalRelations: -15,  // Uluslararası arenada tepki çekebilir
                }
            },
            {
                text: "Nükleer enerjiye karşı çıkın, çevresel riskleri göze almayın.",
                effect: {
                    publicSupport: +15,  // Halk çevreyi koruma politikalarından memnun olur
                    budget: 0,  // Nükleer santrale yatırım yapılmaz, bütçe etkilenmez
                    infrastructureAndEnvironment: +20,  // Çevre korunur, sürdürülebilirlik artar
                    internationalRelations: +10,  // Uluslararası arenada olumlu karşılanır
                }
            }
        ],
        title: "Enerji ve Tabii Kaynaklar Bakanı",
        photo: enerjiBakani,
    }
];
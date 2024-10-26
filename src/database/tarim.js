import tarimBakani from "../../public/ministers/tarim-bakani.png";

export const tarimQuestions = [
    {
        id: 70,
        question: "Sayın Cumhurbaşkanım, son yıllarda kuraklık artıyor ve tarımsal üretim ciddi şekilde düşüyor. Tarıma büyük bir teşvik ve su kaynaklarına yatırım yapmamız gerek.",
        answers: [
            {
                text: "Yeni sulama projeleri gerekiyor.",
                effect: {
                    agriculturalProduction: +25,  // Tarımsal üretim canlanır
                    budget: -15,  // Büyük bütçe ayrılması gerekir

                }
            },
            {
                text: "Şu an başka önceliklerimiz var,erteleyin.",
                effect: {
                    agriculturalProduction: +25,  // Tarımsal üretim canlanır
                    budget: -15,  // Büyük bütçe ayrılması gerekir
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
    },

    // {
    //     id: 71,
    //     question: "Sayın Cumhurbaşkanım, kuraklık nedeniyle su kaynakları azalıyor ve tarımsal üretim tehlikeye giriyor. Yeni sulama projelerine mi yatırım yapalım, yoksa çiftçilere su tasarrufu eğitimi mi verelim?",
    //     answers: [
    //         {
    //             text: "Yeni sulama projelerine yatırım yapın, su kaynaklarını daha verimli kullanalım.",
    //             effect: {
    //                 publicSupport: +15,  // Çiftçiler ve tarımla uğraşan halk memnun olur
    //                 budget: -25,  // Sulama projeleri maliyetlidir
    //                 agriculturalProduction: +20,  // Tarımsal verimlilik artar
    //                 infrastructureAndEnvironment: +10,  // Altyapı ve çevre sürdürülebilir hale gelir
    //             }
    //         },
    //         {
    //             text: "Çiftçilere su tasarrufu eğitimi verin, daha az maliyetli bir çözüm sağlayalım.",
    //             effect: {
    //                 publicSupport: +10,  // Halk eğitim projelerini olumlu karşılar
    //                 budget: -10,  // Eğitim programlarının maliyeti daha düşüktür
    //                 agriculturalProduction: +10,  // Su tasarrufu ile verimlilik artar
    //                 infrastructureAndEnvironment: +5,  // Çevresel sürdürülebilirlik artar
    //             }
    //         }
    //     ],
    //     title: "Milli Savunma Bakanı",
    //     photo: tarimBakani,
    // },
    // {
    //     id: 72,
    //     question: "Sayın Cumhurbaşkanım, tarımsal üretim ithalata bağımlı hale geliyor. Yerli üretimi artırmak için teşvikler mi verelim, yoksa ithalat vergilerini mi artırarak yerli üretimi destekleyelim?",
    //     answers: [
    //         {
    //             text: "Yerli üretimi artırmak için çiftçilere teşvik verin.",
    //             effect: {
    //                 publicSupport: +20,  // Çiftçiler ve yerli üreticiler memnun olur
    //                 budget: -20,  // Teşvikler bütçeyi zorlayabilir
    //                 agriculturalProduction: +25,  // Yerli üretim artar
    //                 internationalRelations: +5,  // Uluslararası ilişkilerde yerli üretimin artması olumlu karşılanır
    //             }
    //         },
    //         {
    //             text: "İthalat vergilerini artırın, yerli üreticiyi koruyun.",
    //             effect: {
    //                 publicSupport: +10,  // Yerli üreticiler memnun olur
    //                 budget: +5,  // Vergi artışı bütçeye katkı sağlar
    //                 agriculturalProduction: +15,  // Yerli üretim ithalatın azalmasıyla artar
    //                 internationalRelations: -10,  // İthalat vergileri uluslararası alanda tepki çekebilir
    //             }
    //         }
    //     ],
    //     title: "Milli Savunma Bakanı",
    //     photo: tarimBakani,
    // },
    // {
    //     id: 73,
    //     question: "Sayın Cumhurbaşkanım, orman yangınları her yıl artıyor ve ciddi kayıplar yaşanıyor. Yangınlarla mücadele için hava araçları mı alalım, yoksa orman köylülerine yangın eğitimi mi verelim?",
    //     answers: [
    //         {
    //             text: "Hava araçları alın, yangınlarla hızlı ve etkili mücadele edelim.",
    //             effect: {
    //                 publicSupport: +15,  // Halk yangınlarla mücadele kapasitesinin artmasından memnun olur
    //                 budget: -30,  // Hava araçlarının maliyeti yüksektir
    //                 infrastructureAndEnvironment: +20,  // Ormanların korunması çevreyi olumlu etkiler
    //                 internalSecurity: +10,  // Yangın riskinin azalması güvenliği artırır
    //             }
    //         },
    //         {
    //             text: "Orman köylülerine yangın eğitimi verin, maliyeti düşük bir çözüm sağlayalım.",
    //             effect: {
    //                 publicSupport: +10,  // Halk eğitim projelerini destekler
    //                 budget: -10,  // Eğitim maliyeti daha düşüktür
    //                 infrastructureAndEnvironment: +10,  // Yangın önleme eğitimi ormanların korunmasını sağlar
    //                 internalSecurity: +5,  // Yangın riskine karşı hazırlıklı olmak güvenliği artırır
    //             }
    //         }
    //     ],
    //     title: "Milli Savunma Bakanı",
    //     photo: tarimBakani,
    // },
    // {
    //     id: 74,
    //     question: "Sayın Cumhurbaşkanım, tarımda genç iş gücü eksikliği yaşanıyor. Gençleri tarıma teşvik etmek için projeler mi başlatalım, yoksa tarım iş gücü açığını göçmen işçilerle mi dolduralım?",
    //     answers: [
    //         {
    //             text: "Gençleri tarıma teşvik edecek projeler başlatın.",
    //             effect: {
    //                 publicSupport: +20,  // Gençler ve aileleri memnun olur
    //                 budget: -15,  // Teşvik projeleri maliyetli olabilir
    //                 agriculturalProduction: +20,  // Gençlerin tarıma katılımı üretimi artırır
    //                 internalSecurity: +10,  // Genç işsizliği azalır, sosyal huzur artar
    //             }
    //         },
    //         {
    //             text: "Tarım iş gücü açığını göçmen işçilerle doldurun.",
    //             effect: {
    //                 publicSupport: -10,  // Halkın bir kısmı bu karara tepki gösterebilir
    //                 budget: 0,  // Göçmen işçilerin maliyeti daha düşüktür
    //                 agriculturalProduction: +15,  // İş gücü açığı giderildiği için üretim artar
    //                 internalSecurity: -5,  // Göçmen işçilerin artışı toplumsal huzursuzluk yaratabilir
    //             }
    //         }
    //     ],
    //     title: "Milli Savunma Bakanı",
    //     photo: tarimBakani,
    // },
    // {
    //     id: 75,
    //     question: "Sayın Cumhurbaşkanım, organik tarım ve sürdürülebilir üretim yöntemlerine geçiş yapmak istiyoruz. Bu, uzun vadede daha iyi sonuçlar verebilir, ancak kısa vadede üretimi düşürebilir. Ne yapalım?",
    //     answers: [
    //         {
    //             text: "Organik tarım ve sürdürülebilir üretime geçiş yapın.",
    //             effect: {
    //                 publicSupport: +20,  // Halk sağlıklı ve sürdürülebilir tarımı destekler
    //                 budget: -20,  // Organik tarıma geçiş maliyetlidir
    //                 agriculturalProduction: +10,  // Uzun vadede tarımsal üretim sürdürülebilir hale gelir
    //                 infrastructureAndEnvironment: +25,  // Çevre ve doğal kaynaklar korunur
    //             }
    //         },
    //         {
    //             text: "Mevcut tarım yöntemlerine devam edin, üretim hızını koruyalım.",
    //             effect: {
    //                 publicSupport: +5,  // Halkın bir kısmı bu kararı olumlu karşılar
    //                 budget: 0,  // Mevcut yöntemlerin sürdürülmesi bütçeye doğrudan etki yapmaz
    //                 agriculturalProduction: +15,  // Kısa vadede üretim artar
    //                 infrastructureAndEnvironment: -10,  // Mevcut yöntemler çevreye zarar verebilir
    //             }
    //         }
    //     ],
    //     title: "Milli Savunma Bakanı",
    //     photo: tarimBakani,
    // }
];
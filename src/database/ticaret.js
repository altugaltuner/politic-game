import ticaretBakani from "../../public/ministers/ticaret-bakani.png";

export const ticaretQuestions = [
    {
        id: 80,
        question: "Sayın Cumhurbaşkanım, ihracatımız son dönemde artıyor ancak rekabet edebilmemiz için ihracat yapan şirketlere daha fazla teşvik vermemiz gerekiyor.",
        answers: [
            {
                text: "İhracat teşviklerini artırın, rekabet gücünü artırın.",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    internationalRelations: +20,
                }
            },
            {
                text: "Bütçeyi koruyun, mevcut teşviklerle devam edin.",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    internationalRelations: -20,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },

    // {
    //     id: 81,
    //     question: "Sayın Cumhurbaşkanım, yerel esnaf büyük perakende zincirleri tarafından zor durumda bırakılıyor. Perakende zincirlerinin büyümesini kısıtlayan düzenlemeler mi getirelim, yoksa serbest piyasayı mı destekleyelim?",
    //     answers: [
    //         {
    //             text: "Perakende zincirlerine kısıtlamalar getirin, yerel esnafı koruyun.",
    //             effect: {
    //                 publicSupport: +15,  // Yerel esnaf ve küçük işletmeler memnun olur
    //                 budget: 0,  // Bütçe üzerinde doğrudan etkisi olmaz
    //                 economy: -10,  // Büyük zincirlerin faaliyetlerinin kısıtlanması büyümeyi yavaşlatabilir
    //                 internalSecurity: +5,  // Yerel iş gücü ve istihdam korunur
    //             }
    //         },
    //         {
    //             text: "Serbest piyasayı destekleyin, büyük zincirlerin büyümesini engellemeyin.",
    //             effect: {
    //                 publicSupport: -10,  // Yerel esnaf zor durumda kalabilir
    //                 budget: 0,  // Bütçe üzerinde doğrudan etkisi olmaz
    //                 economy: +15,  // Serbest piyasa büyümeye devam eder
    //                 internalSecurity: -5,  // Küçük esnafın kapanması işsizlik yaratabilir
    //             }
    //         }
    //     ],
    //     title: "Ticaret Bakanı",
    //     photo: ticaretBakani,
    // },
    // {
    //     id: 82,
    //     question: "Sayın Cumhurbaşkanım, ülkemizde dijital ticaret hızla büyüyor, ancak küçük işletmeler dijital dönüşüme ayak uyduramıyor. Küçük işletmelere dijital dönüşüm desteği mi verelim, yoksa büyük e-ticaret şirketlerine mi odaklanalım?",
    //     answers: [
    //         {
    //             text: "Küçük işletmelere dijital dönüşüm desteği verin, rekabet edebilirliklerini artırın.",
    //             effect: {
    //                 publicSupport: +15,  // Küçük işletmeler ve girişimciler memnun olur
    //                 budget: -15,  // Dijital dönüşüm desteği maliyetlidir
    //                 economy: +10,  // Küçük işletmelerin güçlenmesi ekonomiye katkı sağlar
    //                 internationalRelations: +5,  // Küresel ticarette rekabet gücü artar
    //             }
    //         },
    //         {
    //             text: "Büyük e-ticaret şirketlerine odaklanın, büyümeyi hızlandırın.",
    //             effect: {
    //                 publicSupport: +5,  // Büyük e-ticaret şirketleri memnun olur
    //                 budget: -10,  // Büyük şirketlere destek maliyetlidir
    //                 economy: +15,  // Büyük şirketlerin büyümesi ekonomiyi hızlandırır
    //                 internationalRelations: +10,  // Uluslararası ticaret ilişkileri gelişir
    //             }
    //         }
    //     ],
    //     title: "Ticaret Bakanı",
    //     photo: ticaretBakani,
    // },
    // {
    //     id: 83,
    //     question: "Sayın Cumhurbaşkanım, gıda fiyatlarındaki dalgalanmalar ve spekülasyonlar artıyor. Gıda fiyatlarını kontrol altına almak için düzenlemeler yapalım mı, yoksa serbest piyasa koşullarına mı bırakalım?",
    //     answers: [
    //         {
    //             text: "Gıda fiyatlarını kontrol altına alın, spekülasyonları engelleyin.",
    //             effect: {
    //                 publicSupport: +20,  // Halk gıda fiyatlarının düşmesinden memnun olur
    //                 budget: -10,  // Fiyat kontrolleri için ek düzenlemeler maliyetli olabilir
    //                 economy: -5,  // Serbest piyasa koşulları bozulabilir
    //                 internalSecurity: +10,  // Gıda fiyatlarındaki istikrar sosyal huzuru artırır
    //             }
    //         },
    //         {
    //             text: "Serbest piyasa koşullarına bırakın, piyasanın kendi dengesini bulmasını sağlayın.",
    //             effect: {
    //                 publicSupport: -10,  // Halk gıda fiyatlarının yüksekliğinden şikayetçi olabilir
    //                 budget: 0,  // Bütçe üzerinde doğrudan etkisi olmaz
    //                 economy: +10,  // Serbest piyasa uzun vadede denge sağlar
    //                 internalSecurity: -5,  // Yüksek fiyatlar nedeniyle sosyal huzursuzluk artabilir
    //             }
    //         }
    //     ],
    //     title: "Ticaret Bakanı",
    //     photo: ticaretBakani,
    // },
    // {
    //     id: 84,
    //     question: "Sayın Cumhurbaşkanım, dış ticaret açığımız giderek artıyor. İthalatı kısıtlayan vergiler mi getirelim, yoksa ihracatçı şirketlere daha fazla destek mi sağlayalım?",
    //     answers: [
    //         {
    //             text: "İthalata kısıtlayıcı vergiler getirin, yerli üretimi teşvik edin.",
    //             effect: {
    //                 publicSupport: +10,  // Halk ithalatın azalmasından memnun olabilir
    //                 budget: +5,  // Vergi artışı bütçeye katkı sağlar
    //                 economy: +10,  // Yerli üretim teşvik edilir ve büyüme sağlar
    //                 internationalRelations: -10,  // İthalat kısıtlamaları uluslararası alanda tepki çekebilir
    //             }
    //         },
    //         {
    //             text: "İhracatçı şirketlere daha fazla destek sağlayın, ihracatı artırın.",
    //             effect: {
    //                 publicSupport: +5,  // İhracatçı şirketler ve iş dünyası memnun olur
    //                 budget: -15,  // İhracatçı destekleri bütçeyi zorlayabilir
    //                 economy: +20,  // İhracatın artması ekonomik büyümeyi hızlandırır
    //                 internationalRelations: +10,  // İhracat artışı uluslararası ticaret ilişkilerini iyileştirir
    //             }
    //         }
    //     ],
    //     title: "Ticaret Bakanı",
    //     photo: ticaretBakani,
    // }
];
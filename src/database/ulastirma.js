import ulastirmaBakani from "../../public/ministers/ulastirma-bakani.png";

export const ulastirmaQuestions = [
    {
        id: 90,
        question: "Sayın Cumhurbaşkanım, büyük şehirlerde trafik sorunu giderek artıyor. Şehir içi ulaşım altyapısını genişletmek için metro projelerine mi yatırım yapalım, yoksa mevcut yolları mı iyileştirelim?",
        answers: [
            {
                text: "Metro projelerine yatırım yapın, uzun vadede trafik sorununu çözün.",
                effect: {
                    publicSupport: +20,  // Halk toplu taşımanın geliştirilmesinden memnun olur
                    budget: -10,  // Metro projeleri maliyetlidir
                    infrastructureAndEnvironment: +25,  // Altyapı ve çevre olumlu yönde etkilenir
                    internalSecurity: +5,  // Toplu taşıma hizmetlerinin gelişmesi güvenliği artırır
                }
            },
            {
                text: "Mevcut yolları iyileştirin, daha kısa vadede çözüm sağlayın.",
                effect: {
                    publicSupport: +10,  // Kısa vadede yolların iyileştirilmesi halkı memnun eder
                    budget: -15,  // Yol iyileştirme projeleri daha az maliyetlidir
                    infrastructureAndEnvironment: +10,  // Mevcut yolların iyileştirilmesi altyapıyı geliştirir
                    internalSecurity: +5,  // Trafik güvenliği artar
                }
            }
        ],
        title: "Ulaştırma Bakanı",
        photo: ulastirmaBakani,
    },

    // {
    //     id: 91,
    //     question: "Sayın Cumhurbaşkanım, kırsal bölgelerde ulaşım altyapısı yetersiz. Yeni yollar mı inşa edelim yoksa mevcut yolları mı onaralım?",
    //     answers: [
    //         {
    //             text: "Yeni yollar inşa edin, kırsal bölgeleri birbirine bağlayın.",
    //             effect: {
    //                 publicSupport: +15,  // Kırsal kesimde yaşayan halk yeni yolların yapılmasından memnun olur
    //                 budget: -25,  // Yeni yol inşaatları maliyetlidir
    //                 infrastructureAndEnvironment: +20,  // Altyapı gelişir ve ulaşım kolaylaşır
    //                 internalSecurity: +10,  // Kırsal alanlara daha hızlı erişim sağlanır
    //             }
    //         },
    //         {
    //             text: "Mevcut yolları onarın, maliyetleri düşük tutalım.",
    //             effect: {
    //                 publicSupport: +10,  // Kırsal kesimde yaşayan halk mevcut yolların iyileştirilmesinden memnun olur
    //                 budget: -10,  // Yol onarım çalışmaları daha düşük maliyetlidir
    //                 infrastructureAndEnvironment: +10,  // Mevcut yolların iyileştirilmesi altyapıyı geliştirir
    //                 internalSecurity: +5,  // Kırsal bölgelerde güvenlik artar
    //             }
    //         }
    //     ],
    //     title: "Ulaştırma Bakanı",
    //     photo: ulastirmaBakani,
    // },
    // {
    //     id: 92,
    //     question: "Sayın Cumhurbaşkanım, hızlı tren projeleri ülke genelinde büyük ilgi görüyor. Hızlı tren hatlarını genişletelim mi, yoksa bu bütçeyi karayolu projelerine mi ayıralım?",
    //     answers: [
    //         {
    //             text: "Hızlı tren hatlarını genişletin, şehirler arası ulaşımı hızlandırın.",
    //             effect: {
    //                 publicSupport: +25,  // Halk hızlı tren projelerini destekler
    //                 budget: -30,  // Hızlı tren projeleri oldukça maliyetlidir
    //                 infrastructureAndEnvironment: +30,  // Altyapı ve çevre olumlu yönde etkilenir
    //                 economy: +15,  // Şehirler arası ticaret ve ulaşım hızlanır
    //             }
    //         },
    //         {
    //             text: "Karayolu projelerine bütçe ayırın, ulaşımı karadan çözün.",
    //             effect: {
    //                 publicSupport: +10,  // Karayolu projeleri kısa vadede halkı memnun eder
    //                 budget: -15,  // Karayolu projeleri daha az maliyetlidir
    //                 infrastructureAndEnvironment: +10,  // Karayolu altyapısı gelişir
    //                 economy: +10,  // Ulaşımın gelişmesi ticareti hızlandırır
    //             }
    //         }
    //     ],
    //     title: "Ulaştırma Bakanı",
    //     photo: ulastirmaBakani,
    // },
    // {
    //     id: 93,
    //     question: "Sayın Cumhurbaşkanım, limanlarımızda kapasite sorunları yaşanıyor. Yeni limanlar mı inşa edelim, yoksa mevcut limanları mı genişletelim?",
    //     answers: [
    //         {
    //             text: "Yeni limanlar inşa edin, deniz ticaretini geliştirelim.",
    //             effect: {
    //                 publicSupport: +15,  // Halk deniz ticaretinin gelişmesinden memnun olur
    //                 budget: -30,  // Yeni limanların inşası maliyetlidir
    //                 infrastructureAndEnvironment: +25,  // Deniz ticareti altyapısı güçlenir
    //                 economy: +20,  // Deniz ticareti artar, ekonomi büyür
    //             }
    //         },
    //         {
    //             text: "Mevcut limanları genişletin, daha düşük maliyetle kapasiteyi artırın.",
    //             effect: {
    //                 publicSupport: +10,  // Limanlardaki kapasite artışı halkı memnun eder
    //                 budget: -15,  // Mevcut limanların genişletilmesi daha az maliyetlidir
    //                 infrastructureAndEnvironment: +15,  // Deniz ticaretine yönelik altyapı gelişir
    //                 economy: +15,  // Ticaretin gelişmesi ekonomik büyümeyi sağlar
    //             }
    //         }
    //     ],
    //     title: "Ulaştırma Bakanı",
    //     photo: ulastirmaBakani,
    // },
    // {
    //     id: 94,
    //     question: "Sayın Cumhurbaşkanım, ülkemizde internet altyapısı yetersiz. Fiber internet altyapısına mı yatırım yapalım, yoksa mevcut altyapıyı mı iyileştirelim?",
    //     answers: [
    //         {
    //             text: "Fiber internet altyapısına yatırım yapın, dijitalleşmeyi hızlandırın.",
    //             effect: {
    //                 publicSupport: +20,  // Halk hızlı internet erişiminden memnun olur
    //                 budget: -25,  // Fiber internet altyapısı maliyetlidir
    //                 infrastructureAndEnvironment: +30,  // Dijital altyapı güçlenir
    //                 economy: +15,  // Hızlı internet ticaret ve iş dünyasını olumlu etkiler
    //             }
    //         },
    //         {
    //             text: "Mevcut internet altyapısını iyileştirin, daha düşük maliyetle çözüm sağlayın.",
    //             effect: {
    //                 publicSupport: +10,  // Halk internet altyapısının iyileştirilmesinden memnun olur
    //                 budget: -15,  // Altyapı iyileştirme projeleri daha az maliyetlidir
    //                 infrastructureAndEnvironment: +15,  // Mevcut altyapının iyileştirilmesi dijitalleşmeyi hızlandırır
    //                 economy: +10,  // İnternet altyapısının iyileştirilmesi ticareti ve iş dünyasını olumlu etkiler
    //             }
    //         }
    //     ],
    //     title: "Ulaştırma Bakanı",
    //     photo: ulastirmaBakani,
    // }
];
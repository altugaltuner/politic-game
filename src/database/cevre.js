import cevreBakani from "../../public/ministers/cevre-sehir-bakani.webp";
// 7 soru var
export const cevreQuestions = [
    {
        id: 30,
        question: "Şehirleşme hızla artıyor ve yeşil alanlar azalıyor. Şehirlerdeki nüfus artışı ve şehirleşme hakkında ne düşünüyorsunuz?",
        answers: [
            {
                text: "Şehirleşmeye devam edilmeli",
                effect: {
                    publicSupport: -5,
                    agriculturalProduction: -15,
                    budget: -15,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: -10,
                }
            },
            {
                text: "Yeşil alanlar korunmalı",
                effect: {
                    publicSupport: +5,
                    budget: +15,
                    agriculturalProduction: +10,
                    infrastructureAndEnvironment: -15,
                    internalSecurity: +5,
                },
                listID: "cevre1",
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 31,
        question: "Şehirlerdeki altyapı eskimiş durumda. Altyapının yenilenmesi gerekiyor. Ancak yeni çevre projeleri de gündemde. Öneriniz nedir?",
        answers: [
            {
                text: "Önce şehir sorunları çözülmeli",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    infrastructureAndEnvironment: +10,
                },
            },
            {
                text: "Önce çevre projeleri hayata geçirilmeli",
                effect: {
                    publicSupport: +5,
                    budget: -10,
                    infrastructureAndEnvironment: -15,
                    agriculturalProduction: +5,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 32,
        question: "Bazı bölgelerde hava kirliliği kritik seviyelerde. Hava kirliliğiyle mücadele için ciddi önlemler alabiliriz...",
        answers: [
            {
                text: "Temiz hava sahaları açın",
                effect: {
                    infrastructureAndEnvironment: -10,
                    agriculturalProduction: +10,
                }
            },
            {
                text: "Ekonomik büyüme sürdürülmeli",
                effect: {
                    infrastructureAndEnvironment: +10,
                    agriculturalProduction: -10,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 33,
        question: "Şehirlerde enerji tüketimi hızla artıyor. Yenilenebilir enerji projelerine yatırım yapabiliriz. Ya da mevcut enerji altyapısını genişletebiliriz.",
        answers: [
            {
                text: "Mevcut altyapıyı güçlendirin",
                effect: {
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: -10
                }
            },
            {
                text: "Çevre dostu projelere yatırım yapın",
                effect: {
                    budget: 0,
                    infrastructureAndEnvironment: +5,
                    internationalRelations: +10,
                },
                listID: "cevre2",
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 34,
        question: "Turizm kıyılarda hızla gelişiyor, ancak yoğun turist akımı sebebiyle deniz ekosistemi tehdit altında. ",
        answers: [
            {
                text: "Turizmi destekleyeceğiz",
                effect: {
                    budget: +15,
                    agriculturalProduction: -15,
                    internationalRelations: +10,
                },
                listID: "cevre3",
            },
            {
                text: "Kıyıları koruma altına alacağız",
                effect: {
                    budget: -15,
                    agriculturalProduction: +10,
                    internationalRelations: -15,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 35,
        question: "Sanayi tesisleri doğaya ciddi zararlar veriyor. Özellikle bazı firmaların kuralları hiçe saydıkları tespit edildi.",
        answers: [
            {
                text: "Kural tanımayan firmalara el konulsun",
                effect: {
                    budget: +20,
                    infrastructureAndEnvironment: -25,
                }
            },
            {
                text: "İhlalleri yapanlara ağır cezalar verilsin",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: -10,
                    agriculturalProduction: +5,
                },
                listID: "cevre3",
            },
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 36,
        question: "Bir maden şirketi ormanlık alanda izinsiz kazı çalışmaları yaparken yakalandı. Bunun için de ormanlık alanda çok sayıda ağaç kesilmiş.",
        answers: [
            {
                text: "Devlet şirkete el koymalıdır",
                effect: {
                    publicSupport: -10,
                    infrastructureAndEnvironment: -20,
                    agriculturalProduction: -10,
                    budget: +20,
                },
                listID: "",
            },
            {
                text: "Çıkarılan madenlere el koyulsun ve ağaçlandırma başlasın",
                effect: {
                    agriculturalProduction: +10,
                    budget: +10,
                    publicSupport: +5,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
];

// Tüm statların toplamlarını tutacak bir obje
const totalStats = {};

// Döngü ile tüm sorular ve cevaplar üzerinde gez
cevreQuestions.forEach((question) => {
    question.answers.forEach((answer) => {
        for (const [key, value] of Object.entries(answer.effect)) {
            if (totalStats[key] === undefined) {
                totalStats[key] = 0; // İlk kez görüyorsak sıfırla başlat
            }
            totalStats[key] += value; // Değeri ekle
        }
    });
});

// // Toplam sonuçları terminale yazdır
// console.log("Statların toplam değerleri:");
// for (const [stat, total] of Object.entries(totalStats)) {
//     console.log(`${stat}: ${total}`);
// }
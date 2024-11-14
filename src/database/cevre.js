import cevreBakani from "../../public/ministers/cevre-sehir-bakani.webp";

export const cevreQuestions = [
    {
        id: 30,
        question: "Şehirleşme hızla artıyor ve yeşil alanlar azalıyor. Şehirlerdeki nüfus artışı ve şehirleşme hakkında ne düşünüyorsunuz?",
        answers: [
            {
                text: "Şehirleşmeye devam...",
                effect: {
                    publicSupport: -20,
                    agriculturalProduction: -25,
                    budget: -20,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: -10,
                }
            },
            {
                text: "Yeşil alanları arttırın",
                effect: {
                    publicSupport: +20,
                    budget: +10,
                    agriculturalProduction: +10,
                    infrastructureAndEnvironment: -10,
                    internalSecurity: +10,
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
                text: "Önce şehir sorunlarını çözün",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                },
            },
            {
                text: "Bütçeyi çevre projelerine aktarın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
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
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: -20,
                    agriculturalProduction: +15,
                }
            },
            {
                text: "Ekonomik büyüme devam etmeli",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                    agriculturalProduction: -15,
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
                text: "Yenilenebilir enerjiye geleceğimiz",
                effect: {
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: +10,
                },
                listID: "cevre2",
            },
            {
                text: "Mevcut altyapıyı güçlendirin.",
                effect: {
                    budget: -10,
                    infrastructureAndEnvironment: +5,
                    internationalRelations: -10
                }
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
                    publicSupport: +15,
                    budget: +10,
                    agriculturalProduction: -10,
                    internationalRelations: +15,
                },
                listID: "cevre3",
            },
            {
                text: "Kıyıları koruma altına alacağız",
                effect: {
                    publicSupport: -15,
                    budget: -10,
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
                text: "İhlalleri yapanlara ağır cezalar verilsin",
                effect: {
                    budget: +20,
                    infrastructureAndEnvironment: -10,
                },
                listID: "cevre3",
            },
            {
                text: "Kural tanımayan firmalar kapatılsın",
                effect: {

                    budget: -20,
                    infrastructureAndEnvironment: -30,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 36,
        question: "Bir maden şirketi ormanlık alanda izinsiz kazı çalışmaları yaparken yakalandı. Bunun için de ormanlık alanda çok sayıda ağaç kesilmiş.",
        answers: [
            {
                text: "Şirkete devlet el koysun",
                effect: {
                    infrastructureAndEnvironment: -20,
                    agriculturalProduction: -25,
                },
                listID: "",
            },
            {
                text: "Çıkarılan madenlere el koyulsun ve ağaçlandırma başlasın",
                effect: {
                    infrastructureAndEnvironment: -10,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 37,
        question: "Akdenizde ve Ege kıyılarında çıkan orman yangınlarında çok sayıda ormanlık alan yok oldu. Yangınların sebebi olarak sıcaklar ve bazı kundakçılar tespit edildi. Şimdiki hamlemiz ne olmalı ?",
        answers: [
            {
                text: "Turistik bölgeler için imar planları hazırlansın.",
                effect: {
                    agriculturalProduction: -30,
                    publicSupport: -10,
                    budget: +30,
                },
                listID: "",
            },
            {
                text: "Yeniden ağaçlandırma çalışmalarına başlansın",
                effect: {
                    publicSupport: +10,
                    agriculturalProduction: +10,
                    budget: -15,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
];
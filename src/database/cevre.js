import cevreBakani from "../../public/ministers/cevre-sehir-bakani.webp";

export const cevreQuestions = [
    {
        id: 30,
        question: "Şehirleşme hızla artıyor ve yeşil alanlar azalıyor. Şehirlerdeki nüfus artışı ve şehirleşme hakkında ne düşünüyorsunuz?",
        answers: [
            {
                text: "Şehirleşmeye devam edilmeli",
                effect: {
                    publicSupport: -20,
                    agriculturalProduction: -25,
                    budget: -20,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: -10,
                }
            },
            {
                text: "Yeşil alanlar korunmalı",
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
                text: "Önce şehir sorunları çözülmeli",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                },
            },
            {
                text: "Önce çevre projeleri hayata geçirilmeli",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                    agriculturalProduction: +10,
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
                    agriculturalProduction: +15,
                }
            },
            {
                text: "Ekonomik büyüme sürdürülmeli",
                effect: {
                    infrastructureAndEnvironment: +15,
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
                text: "Çevre dostu projelere yatırım yapın.",
                effect: {
                    budget: 0,
                    infrastructureAndEnvironment: +5,
                    internationalRelations: +15,
                },
                listID: "cevre2",
            },
            {
                text: "Mevcut altyapıyı güçlendirin.",
                effect: {
                    budget: -10,
                    infrastructureAndEnvironment: +15,
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
                    budget: +15,
                    agriculturalProduction: -10,
                    internationalRelations: +15,
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
                text: "İhlalleri yapanlara ağır cezalar verilsin",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: -10,
                    agriculturalProduction: +5,
                },
                listID: "cevre3",
            },
            {
                text: "Kural tanımayan firmalar kapatılsın",
                effect: {

                    budget: -15,
                    infrastructureAndEnvironment: -20,
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
                text: "Devlet şirkete el koymalıdır",
                effect: {
                    publicSupport: -10,
                    infrastructureAndEnvironment: -10,
                    agriculturalProduction: -20,
                    budget: +20,
                },
                listID: "",
            },
            {
                text: "Çıkarılan madenlere el koyulsun ve ağaçlandırma başlasın",
                effect: {
                    agriculturalProduction: +15,
                    budget: +10,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
];
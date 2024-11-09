import cevreBakani from "../../public/ministers/cevre-sehir-bakani.png";

export const cevreQuestions = [
    {
        id: 30,
        question: "Şehirleşme hızla artıyor ve yeşil alanlar azalıyor. Şehirlerdeki nüfus artışı ve şehirleşme hakkında ne düşünüyorsunuz?",
        answers: [
            {
                text: "Şehirleşmeyi hızlandırmalıyız.",
                effect: {
                    publicSupport: -20,
                    agriculturalProduction: -20,
                    budget: -20,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: -10,
                }
            },
            {
                text: "Yeşil alanları koruyacağız, halkımız nefes alacak",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    agriculturalProduction: +20,
                    infrastructureAndEnvironment: -10,
                    internalSecurity: +10,
                },
                listID: "cevre1",
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
        link: "https://tr.wikipedia.org/wiki/Gezi_Park%C4%B1_olaylar%C4%B1"
    },
    {
        id: 31,
        question: "Sayın Cumhurbaşkanım, şehirlerdeki altyapı eskimiş durumda. Altyapının yenilenmesi gerekiyor. Ancak yeni çevre projeleri de gündemde. Öneriniz nedir?",
        answers: [
            {
                text: "Şehir sorunlarını hemen çözün",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                },
                listID: "cevre2",
            },
            {
                text: "Bütçeyi çevre projelerine aktarın.",
                effect: {
                    publicSupport: -10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
        link: "https://www.youtube.com/watch?v=HyMRdv-RycM"
    },
    {
        id: 32,
        question: "Bazı bölgelerde hava kirliliği kritik seviyelerde. Hava kirliliğiyle mücadele için ciddi önlemler alabiliriz...",
        answers: [
            {
                text: "Temiz hava için mücadelemiz sürecek",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: -20,
                    agriculturalProduction: +15,
                }
            },
            {
                text: "Sanayiye yatırım, ekonomik büyüme devam etmeli",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    infrastructureAndEnvironment: +20,
                    agriculturalProduction: -15,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
        link: "https://www.temizhavahakki.org/kararapor2022/"
    },
    {
        id: 33,
        question: "Sayın Cumhurbaşkanım, şehirlerde enerji tüketimi hızla artıyor. Yenilenebilir enerji projelerine yatırım yapabiliriz. Ya da mevcut enerji altyapısını genişletebiliriz.",
        answers: [
            {
                text: "Yenilenebilir enerjiye geleceğimiz",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +15,
                    internationalRelations: +10,
                },
                listID: "cevre3",
            },
            {
                text: "Mevcut altyapıyı güçlendirmek daha mantıklı.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: -10
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
        link: "https://enerji.gov.tr/"
    },
    {
        id: 34,
        question: "Turizm kıyılarda hızla gelişiyor, ancak yoğun turist akımı sebebiyle deniz ekosistemi tehdit altında. ",
        answers: [
            {
                text: "Turizmi destekleyeceğiz, ekonomiye katkısı yadsınamaz",
                effect: {
                    publicSupport: +15,
                    budget: +10,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: +15,
                },
                listID: "cevre4",
            },
            {
                text: "Kıyıları koruma altına alacağız, çevremiz önceliğimiz",
                effect: {
                    publicSupport: -15,
                    budget: -10,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: -15,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
        link: "https://www.turizm.gov.tr/"
    }
];
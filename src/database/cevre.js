import cevreBakani from "../../public/ministers/cevre-bakani.png";

export const cevreQuestions = [
    {
        id: 30,
        question: "Şehirleşme hızla artıyor ve yeşil alanlar azalıyor. Yeni konut projelerine mi odaklanalım, yoksa yeşil alanları mı koruyalım?",
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
                text: "Bir Gezi Parkı daha istemiyorum.",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    agriculturalProduction: +20,
                    infrastructureAndEnvironment: -10,
                    internalSecurity: +10,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 31,
        question: "Sayın Cumhurbaşkanım, şehirlerdeki altyapı eskimiş durumda. Altyapının yenilenmesi gerekiyor. Ancak yeni çevre projeleri de gündemde. Öneriniz nedir?",
        answers: [
            {
                text: "Şehirlerdeki sorunları çözün.",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                }
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
    },
    {
        id: 32,
        question: "Bazı bölgelerde hava kirliliği kritik seviyelerde. Hava kirliliğiyle mücadele için ciddi önlemler almalıyız. Ya da bu bütçeyi sanayiye yatırıp büyümeyi destekleyebiliriz?",
        answers: [
            {
                text: "Temiz bir atmosfer daha önemli.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: -20,
                    agriculturalProduction: +15,
                }
            },
            {
                text: "Sanayi yatırımlarına öncelik verin.",
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
    },
    {
        id: 33,
        question: "Sayın Cumhurbaşkanım, şehirlerde enerji tüketimi hızla artıyor. Yenilenebilir enerji projelerine yatırım yapabiliriz. Ya da mevcut enerji altyapısını genişletebiliriz.",
        answers: [
            {
                text: "Yenilenebilir enerjiye yatırım yapın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +15,
                    internationalRelations: +10,
                }
            },
            {
                text: "Mevcut altyapıyı güçlendirin.",
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
    },
    {
        id: 34,
        question: "Turizm kıyılarda hızla gelişiyor, ancak deniz ekosistemi tehdit altında. Turizme devam mı edelim yoksa kıyıları koruma altına mı alalım?",
        answers: [
            {
                text: "Turizme öncelik vermeliyiz.",
                effect: {
                    publicSupport: +15,
                    budget: +10,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: +15,
                }
            },
            {
                text: "Kıyı bölgelerini koruma altına alın.",
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
    }
];
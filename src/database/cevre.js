import cevreBakani from "../../public/ministers/cevre-bakani.png";

export const cevreQuestions = [
    {
        id: 30,
        question: "Sayın Cumhurbaşkanım, şehirleşme hızla artıyor ve yeşil alanlar azalıyor. Yeni konut projelerine mi odaklanalım, yoksa şehirlerdeki yeşil alanları korumaya mı öncelik verelim?",
        answers: [
            {
                text: "Şehirleşmeyi hızlandırın.",
                effect: {
                    publicSupport: +5,
                    budget: -15,
                    infrastructureAndEnvironment: -10,
                    internalSecurity: -15,
                }
            },
            {
                text: "Yeşil alanları koruyun.",
                effect: {
                    publicSupport: +15,
                    budget: +15,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: +15
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 31,
        question: "Sayın Cumhurbaşkanım, şehirlerdeki altyapı eskimiş durumda ve sürekli sorunlar yaşanıyor. Altyapıyı yenileyelim mi, yoksa bu bütçeyi yeni çevre projelerine mi aktaralım?",
        answers: [
            {
                text: "Altyapıyı yenileyin, şehirlerdeki sorunları çözün.",
                effect: {
                    publicSupport: +10,  // Halk hizmet kalitesinin artmasından memnun olur
                    budget: -20,  // Altyapı yenileme maliyetlidir
                    infrastructureAndEnvironment: +20,  // Altyapı gelişimi çevreyi olumlu etkiler
                    internalSecurity: +5,  // Altyapı sorunlarının azalması güvenliği artırır
                }
            },
            {
                text: "Bütçeyi çevre projelerine aktarın.",
                effect: {
                    publicSupport: -10,  // Şehirdeki halk altyapı sorunlarının devam etmesinden memnun olmaz
                    budget: -10,  // Çevre projeleri daha az maliyetli
                    infrastructureAndEnvironment: +10,  // Çevresel projeler doğrudan çevreye olumlu etki yapar
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 32,
        question: "Sayın Cumhurbaşkanım, bazı bölgelerde hava kirliliği kritik seviyelere ulaştı. Hava kirliliğiyle mücadele için ciddi önlemler mi alalım, yoksa bu bütçeyi sanayiye mi yatırıp büyümeyi destekleyelim?",
        answers: [
            {
                text: "Hava kirliliğiyle mücadele için önlem alın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +20,
                    agriculturalProduction: +15,
                }
            },
            {
                text: "Sanayi yatırımlarına öncelik verin.",
                effect: {
                    publicSupport: -10,
                    budget: -10,
                    infrastructureAndEnvironment: -20,
                    agriculturalProduction: -15,
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 33,
        question: "Sayın Cumhurbaşkanım, şehirlerde enerji tüketimi hızla artıyor. Yenilenebilir enerji projelerine mi yatırım yapalım, yoksa mevcut enerji altyapısını genişletmeye mi odaklanalım?",
        answers: [
            {
                text: "Yenilenebilir enerji projelerine yatırım yapın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +25,
                    internationalRelations: +10,
                }
            },
            {
                text: "Mevcut enerji altyapısını genişletin.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: -25,
                    internationalRelations: -10
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    },
    {
        id: 34,
        question: "Sayın Cumhurbaşkanım, kıyı bölgelerinde turizm hızla gelişiyor ancak bu durum deniz ekosistemini tehdit ediyor. Turizm yatırımlarına mı devam edelim, yoksa kıyı bölgelerini koruma altına alalım?",
        answers: [
            {
                text: "Turizm yatırımlarına devam edin.",
                effect: {
                    publicSupport: +15,
                    budget: +10,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: +15,
                }
            },
            {
                text: "Kıyı bölgelerini koruma altına alın, ekosistemi koruyalım.",
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
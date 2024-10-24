import cevreBakani from "../../public/ministers/cevre.png";

export const cevreQuestions = [
    {
        id: 30,
        question: "Sayın Cumhurbaşkanım, şehirleşme hızla artıyor ve yeşil alanlar azalıyor. Yeni konut projelerine mi odaklanalım, yoksa şehirlerdeki yeşil alanları korumaya mı öncelik verelim?",
        answers: [
            {
                text: "Konut projelerine odaklanın, şehirleşmeyi hızlandırın.",
                effect: {
                    publicSupport: +10,  // Halk konut ihtiyacının karşılanmasından memnun olur
                    budget: -15,  // Yeni projelerin maliyeti olur
                    infrastructureAndEnvironment: -20,  // Yeşil alanlar azalır, çevresel zarar artar
                    internalSecurity: +5,  // Şehirleşmenin artması iç güvenliği artırır
                }
            },
            {
                text: "Yeşil alanları koruyun, çevresel sürdürülebilirliği sağlayın.",
                effect: {
                    publicSupport: +5,  // Çevre bilinci yüksek halk memnun olur
                    budget: -10,  // Yeşil alanların korunması maliyetlidir
                    infrastructureAndEnvironment: +20,  // Çevresel sürdürülebilirlik sağlanır
                    internalSecurity: 0  // İç güvenlik etkilenmez
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
                    infrastructureAndEnvironment: +10,  // Altyapı gelişimi çevreyi olumlu etkiler
                    internalSecurity: +5,  // Altyapı sorunlarının azalması güvenliği artırır
                }
            },
            {
                text: "Altyapıyı bekletin, bütçeyi çevre projelerine aktarın.",
                effect: {
                    publicSupport: -5,  // Şehirdeki halk altyapı sorunlarının devam etmesinden memnun olmaz
                    budget: -10,  // Çevre projeleri daha az maliyetli
                    infrastructureAndEnvironment: +15,  // Çevresel projeler doğrudan çevreye olumlu etki yapar
                    internalSecurity: 0  // Güvenlik durumu değişmez
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
                text: "Hava kirliliğiyle mücadele için sıkı önlemler alın.",
                effect: {
                    publicSupport: +15,  // Halk sağlık ve çevre bilincinden memnun olur
                    budget: -15,  // Kirlilikle mücadele yüksek maliyet gerektirir
                    infrastructureAndEnvironment: +20,  // Çevresel gelişim olumlu yönde ilerler
                    agriculturalProduction: +5,  // Temiz hava tarımsal üretimi artırabilir
                }
            },
            {
                text: "Sanayi yatırımlarına öncelik verin, büyümeyi destekleyin.",
                effect: {
                    publicSupport: +10,  // Sanayi sektöründeki halk memnun olur
                    budget: -10,  // Sanayi yatırımları da bütçeyi etkiler
                    infrastructureAndEnvironment: -20,  // Hava kirliliği ve çevresel sorunlar artar
                    agriculturalProduction: -5,  // Kötü hava kalitesi tarımsal üretimi olumsuz etkiler
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
                text: "Yenilenebilir enerji projelerine yatırım yapın, sürdürülebilir bir gelecek sağlayalım.",
                effect: {
                    publicSupport: +20,  // Halk yenilenebilir enerjiye olumlu bakar
                    budget: -20,  // Yenilenebilir enerji projeleri maliyetli olabilir
                    infrastructureAndEnvironment: +25,  // Çevresel sürdürülebilirlik sağlanır
                    internationalRelations: +10,  // Uluslararası arenada olumlu bir izlenim yaratılır
                }
            },
            {
                text: "Mevcut enerji altyapısını genişletin, enerji sorununu hızlıca çözelim.",
                effect: {
                    publicSupport: +10,  // Kısa vadede enerji sorunlarının çözümü halkı memnun eder
                    budget: -15,  // Altyapı genişletme maliyetlidir
                    infrastructureAndEnvironment: -10,  // Mevcut enerji sistemleri çevreye zarar verebilir
                    internationalRelations: 0  // Uluslararası ilişkilerde etkisi olmaz
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
                text: "Turizm yatırımlarına devam edin, ekonomiyi büyütelim.",
                effect: {
                    publicSupport: +15,  // Turizm sektöründeki insanlar memnun olur
                    budget: +10,  // Turizm yatırımları ekonomiyi canlandırır
                    infrastructureAndEnvironment: -20,  // Kıyı ekosistemleri zarar görür
                    internationalRelations: +5,  // Turizmin gelişimi uluslararası ilişkileri iyileştirir
                }
            },
            {
                text: "Kıyı bölgelerini koruma altına alın, ekosistemi koruyalım.",
                effect: {
                    publicSupport: +10,  // Çevre bilinci olan halk memnun olur
                    budget: -10,  // Koruma önlemleri maliyetlidir
                    infrastructureAndEnvironment: +20,  // Kıyı ekosistemleri korunur
                    internationalRelations: +5,  // Uluslararası çevre koruma girişimleriyle ilişkiler iyileşir
                }
            }
        ],
        title: "Çevre ve Şehircilik Bakanı",
        photo: cevreBakani,
    }
];
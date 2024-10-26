import saglikBakani from "../../public/ministers/saglik-bakani.png";

export const saglikQuestions = [
    {
        id: 140,
        question: "Sayın Cumhurbaşkanım, şehir hastanelerindeki hasta yoğunluğu artıyor ve sağlık hizmetleri yavaşlıyor. Yeni hastaneler mi inşa edelim, yoksa mevcut hastanelerin kapasitesini mi artırmaya çalışalım?",
        answers: [
            {
                text: "Yeni hastaneler inşa edin, sağlık hizmetlerini genişletelim.",
                effect: {
                    publicSupport: +15,  // Halk yeni hastanelerden memnun olur
                    budget: -25,  // Yeni hastane inşası maliyetlidir
                    infrastructureAndEnvironment: +10,  // Yeni sağlık altyapıları gelişir
                }
            },
            {
                text: "Mevcut hastanelerin kapasitesini artırın, maliyeti düşük tutalım.",
                effect: {
                    publicSupport: +10,  // Halk sağlık hizmetlerinin iyileştirilmesinden memnun olur
                    budget: -10,  // Kapasite artırımı yeni inşaattan daha az maliyetlidir
                    infrastructureAndEnvironment: +5,  // Mevcut altyapının iyileştirilmesi sağlanır
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 142,
        question: "Sayın Cumhurbaşkanım, doktorlar ve hemşireler yetersiz çalışma koşullarından şikayet ediyor. Sağlık çalışanlarına maaş artışı mı yapalım, yoksa yeni sağlık personeli mi alalım?",
        answers: [
            {
                text: "Sağlık çalışanlarının maaşlarını artırın, çalışma koşullarını iyileştirin.",
                effect: {
                    publicSupport: +10,  // Sağlık çalışanları ve aileleri memnun olur
                    budget: -20,  // Maaş artışları bütçeyi zorlayabilir
                    internalSecurity: +5,  // Sağlık çalışanlarının memnuniyeti sosyal huzuru artırır
                }
            },
            {
                text: "Yeni sağlık personeli alın, iş yükünü hafifletin.",
                effect: {
                    publicSupport: +5,  // Halk sağlık hizmetlerinin hızlanmasından memnun olur
                    budget: -15,  // Yeni personel alımları bütçeyi etkiler
                    internalSecurity: +5,  // Sağlık sektöründe iş yükünün azalması sosyal huzuru artırır
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 144,
        question: "Sayın Cumhurbaşkanım, Türkiye’de psikolojik sağlık sorunları giderek artıyor. Psikolojik destek hizmetlerini mi yaygınlaştıralım, yoksa bu sorunu okullarda rehberlik hizmetleriyle mi çözmeye çalışalım?",
        answers: [
            {
                text: "Psikolojik destek hizmetlerini yaygınlaştırın, toplum sağlığını güçlendirelim.",
                effect: {
                    internalSecurity: +10,  // Toplumsal huzur artar, sosyal problemler azalır
                    budget: -10,  // Psikolojik destek hizmetlerinin genişletilmesi maliyetlidir
                }
            },
            {
                text: "Okullarda rehberlik hizmetlerini genişletin, genç nesilleri destekleyelim.",
                effect: {
                    internalSecurity: -10,
                    budget: -10,  // Rehberlik hizmetlerinin genişletilmesi maliyetlidir
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    }
];
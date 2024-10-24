import saglikBakani from "../../public/ministers/saglik.png";

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
                    healthCare: +20,  // Sağlık hizmetleri hızlanır ve daha iyi hale gelir
                    infrastructureAndEnvironment: +10,  // Yeni sağlık altyapıları gelişir
                }
            },
            {
                text: "Mevcut hastanelerin kapasitesini artırın, maliyeti düşük tutalım.",
                effect: {
                    publicSupport: +10,  // Halk sağlık hizmetlerinin iyileştirilmesinden memnun olur
                    budget: -10,  // Kapasite artırımı yeni inşaattan daha az maliyetlidir
                    healthCare: +15,  // Hizmetler iyileştirilir, hastanelerdeki yoğunluk azalır
                    infrastructureAndEnvironment: +5,  // Mevcut altyapının iyileştirilmesi sağlanır
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 141,
        question: "Sayın Cumhurbaşkanım, obezite oranları ve kötü beslenme alışkanlıkları artıyor. Sağlıklı yaşam programları mı başlatalım, yoksa okul yemeklerini mi iyileştirelim?",
        answers: [
            {
                text: "Sağlıklı yaşam programları başlatın, toplum genelinde farkındalık artırılsın.",
                effect: {
                    publicSupport: +15,  // Halk sağlıklı yaşam projelerine olumlu bakar
                    budget: -10,  // Programların yürütülmesi maliyetlidir
                    healthCare: +20,  // Obezite oranı azalır, halkın sağlığı iyileşir
                    educationQuality: +5,  // Sağlıklı alışkanlıklar eğitim sistemini de olumlu etkiler
                }
            },
            {
                text: "Okul yemeklerini iyileştirin, çocuklardan başlayarak sağlıklı beslenme alışkanlığı kazandıralım.",
                effect: {
                    publicSupport: +10,  // Aileler ve öğrenciler memnun olur
                    budget: -15,  // Okul yemeklerinin iyileştirilmesi maliyetlidir
                    healthCare: +15,  // Sağlıklı beslenme çocukların genel sağlığını artırır
                    educationQuality: +10,  // Okullarda sağlıklı beslenme öğrencilerin performansını artırır
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
                    healthCare: +15,  // Sağlık çalışanlarının motivasyonu artar, hizmet kalitesi iyileşir
                    internalSecurity: +5,  // Sağlık çalışanlarının memnuniyeti sosyal huzuru artırır
                }
            },
            {
                text: "Yeni sağlık personeli alın, iş yükünü hafifletin.",
                effect: {
                    publicSupport: +5,  // Halk sağlık hizmetlerinin hızlanmasından memnun olur
                    budget: -15,  // Yeni personel alımları bütçeyi etkiler
                    healthCare: +20,  // Daha fazla personel ile sağlık hizmetleri hızlanır
                    internalSecurity: +5,  // Sağlık sektöründe iş yükünün azalması sosyal huzuru artırır
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 143,
        question: "Sayın Cumhurbaşkanım, kırsal kesimdeki sağlık hizmetleri yetersiz. Mobil sağlık hizmetleri mi başlatalım, yoksa kırsal bölgelere yeni sağlık merkezleri mi inşa edelim?",
        answers: [
            {
                text: "Mobil sağlık hizmetleri başlatın, hızlı ve maliyeti düşük çözüm sağlayalım.",
                effect: {
                    publicSupport: +15,  // Halk mobil sağlık hizmetlerinden memnun olur
                    budget: -10,  // Mobil hizmetler yeni inşaattan daha az maliyetlidir
                    healthCare: +10,  // Kırsal kesimde sağlık hizmetlerine erişim artar
                    infrastructureAndEnvironment: 0,  // Altyapıya doğrudan etkisi olmaz
                }
            },
            {
                text: "Kırsal bölgelere yeni sağlık merkezleri inşa edin.",
                effect: {
                    publicSupport: +20,  // Kırsal kesimdeki halk çok memnun olur
                    budget: -25,  // Yeni sağlık merkezleri inşası maliyetlidir
                    healthCare: +20,  // Yeni merkezlerle sağlık hizmetlerine erişim artar
                    infrastructureAndEnvironment: +15,  // Kırsal altyapı gelişir
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
                    publicSupport: +15,  // Psikolojik sağlık sorunları olan bireyler ve aileleri memnun olur
                    budget: -15,  // Psikolojik destek hizmetleri maliyetlidir
                    healthCare: +20,  // Ruh sağlığı hizmetlerine erişim artar
                    internalSecurity: +10,  // Toplumsal huzur artar, sosyal problemler azalır
                }
            },
            {
                text: "Okullarda rehberlik hizmetlerini genişletin, genç nesilleri destekleyelim.",
                effect: {
                    publicSupport: +10,  // Aileler ve gençler memnun olur
                    budget: -10,  // Rehberlik hizmetlerinin genişletilmesi de maliyetlidir
                    healthCare: +10,  // Gençlerin ruh sağlığı hizmetlerine erişimi artar
                    educationQuality: +10,  // Rehberlik hizmetleri eğitim kalitesine olumlu katkı sağlar
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    }
];
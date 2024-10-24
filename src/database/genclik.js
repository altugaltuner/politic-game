import genclikBakani from "../../public/ministers/genclik.png";

export const genclikQuestions = [
    {
        id: 120,
        question: "Sayın Cumhurbaşkanım, gençlerin spor yapma olanakları kısıtlı. Yeni spor tesisleri inşa edelim mi, yoksa mevcut tesisleri onarıp bakım yaparak mı devam edelim?",
        answers: [
            {
                text: "Yeni spor tesisleri inşa edin, gençler için daha fazla alan sağlansın.",
                effect: {
                    publicSupport: +15,  // Gençler ve aileleri memnun olur
                    budget: -25,  // Yeni tesislerin maliyeti yüksek olabilir
                    internalSecurity: +5,  // Gençler için sağlıklı alanlar güvenliği artırır
                    infrastructureAndEnvironment: +10,  // Yeni tesisler altyapıyı geliştirir
                }
            },
            {
                text: "Mevcut tesisleri onarın, bütçeyi koruyalım.",
                effect: {
                    publicSupport: +5,  // Halkın bir kısmı memnun olur
                    budget: -10,  // Onarım maliyeti yeni inşaattan daha düşük olur
                    internalSecurity: +3,  // Mevcut tesislerin onarılması güvenliği artırır
                    infrastructureAndEnvironment: +5,  // Mevcut tesislerin onarımı altyapıyı güçlendirir
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
    {
        id: 121,
        question: "Sayın Cumhurbaşkanım, gençler arasında teknoloji bağımlılığı artıyor. Dijital detoks programları mı başlatalım, yoksa teknolojiye yönlendiren eğitim projelerine mi yatırım yapalım?",
        answers: [
            {
                text: "Dijital detoks programları başlatın, gençleri teknoloji bağımlılığından uzaklaştırın.",
                effect: {
                    publicSupport: +10,  // Aileler bu kararı destekler
                    budget: -10,  // Programların maliyeti olur
                    internalSecurity: +5,  // Gençlerin sağlıklı alışkanlıklar edinmesi güvenliği artırır
                    educationQuality: +5,  // Gençler eğitimlerine daha fazla odaklanabilir
                }
            },
            {
                text: "Teknolojiye yönlendiren eğitim projelerine yatırım yapın, gençlerin teknoloji bilgilerini artırın.",
                effect: {
                    publicSupport: +15,  // Teknoloji meraklısı gençler memnun olur
                    budget: -20,  // Eğitim projelerinin maliyeti yüksek olabilir
                    internalSecurity: +3,  // Gençler için sağlanan projeler dolaylı olarak güvenliği artırır
                    educationQuality: +15,  // Gençler teknoloji alanında daha bilgili hale gelir
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
    {
        id: 122,
        question: "Sayın Cumhurbaşkanım, ulusal spor müsabakalarına katılacak sporcuların desteğe ihtiyacı var. Sponsorluklar mı bulalım, yoksa devlet desteği sağlayarak sporcuları mı destekleyelim?",
        answers: [
            {
                text: "Sponsorluklar bulun, sporcuları bu şekilde destekleyelim.",
                effect: {
                    publicSupport: +10,  // Spor camiası memnun olur
                    budget: 0,  // Sponsorluklar devlet bütçesini etkilemez
                    internationalRelations: +5,  // Sporcuların başarısı uluslararası alanda olumlu karşılanır
                    infrastructureAndEnvironment: 0,  // Altyapıya doğrudan etkisi olmaz
                }
            },
            {
                text: "Devlet desteği sağlayın, sporcularımıza doğrudan yardım edin.",
                effect: {
                    publicSupport: +15,  // Halk devletin desteğini olumlu karşılar
                    budget: -15,  // Devlet desteği bütçeyi etkiler
                    internationalRelations: +10,  // Sporcular uluslararası alanda başarı sağlayabilir
                    infrastructureAndEnvironment: 0,  // Altyapıya etkisi olmaz
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
    {
        id: 123,
        question: "Sayın Cumhurbaşkanım, ülkemizde gençlerin sporcu olma hayalleri düşük. Gençleri spora teşvik etmek için kampanyalar mı başlatalım, yoksa sadece profesyonel sporculara odaklanalım mı?",
        answers: [
            {
                text: "Gençleri spora teşvik edecek geniş çaplı kampanyalar başlatın.",
                effect: {
                    publicSupport: +20,  // Gençler ve aileleri memnun olur
                    budget: -15,  // Kampanyaların maliyeti olur
                    internalSecurity: +10,  // Gençlerin spora yönelmesi güvenliği artırır
                    educationQuality: +5,  // Spor, gençlerin genel gelişimine katkı sağlar
                }
            },
            {
                text: "Sadece profesyonel sporculara odaklanın, kaynakları verimli kullanın.",
                effect: {
                    publicSupport: +5,  // Profesyonel sporcular ve destekçileri memnun olur
                    budget: -5,  // Daha az maliyetli olur
                    internalSecurity: +3,  // Profesyonel sporcuların desteği dolaylı olarak güvenliği artırır
                    educationQuality: 0,  // Eğitim sistemine etkisi olmaz
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    },
    {
        id: 124,
        question: "Sayın Cumhurbaşkanım, gençlik merkezlerinin sayısını artırabiliriz ancak bu maliyeti artıracaktır. Gençlik merkezlerini mi artırmalı yoksa mevcut merkezlerin kalitesini mi yükseltmeliyiz?",
        answers: [
            {
                text: "Yeni gençlik merkezleri inşa edin, gençlerin sosyal aktivitelerine destek verin.",
                effect: {
                    publicSupport: +20,  // Gençler ve aileler memnun olur
                    budget: -25,  // Yeni merkezlerin inşası maliyetlidir
                    internalSecurity: +10,  // Gençlerin sosyal alanlara yönelmesi güvenliği artırır
                    infrastructureAndEnvironment: +10,  // Yeni binalar altyapıyı geliştirir
                }
            },
            {
                text: "Mevcut gençlik merkezlerinin kalitesini artırın, daha düşük maliyetle çözüm sağlayın.",
                effect: {
                    publicSupport: +10,  // Gençler ve aileler memnun olur
                    budget: -10,  // Mevcut merkezlerin iyileştirilmesi daha az maliyetlidir
                    internalSecurity: +5,  // Gençlerin mevcut alanlarda daha kaliteli vakit geçirmesi güvenliği artırır
                    infrastructureAndEnvironment: +5,  // Mevcut binaların kalitesini artırmak altyapıyı geliştirir
                }
            }
        ],
        title: "Gençlik ve Spor Bakanı",
        photo: genclikBakani,
    }
];
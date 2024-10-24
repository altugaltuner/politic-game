import savunmaBakani from "../../public/ministers/savunma.png";

export const savunmaQuestions = [
    {
        id: 60,
        question: "Sayın Cumhurbaşkanım, sınır güvenliği konusunda yeni bir savunma sistemi geliştirmeyi düşünüyoruz. Bu sistem maliyetli olabilir, ancak uzun vadede sınır güvenliğini artırır. Ne yapalım?",
        answers: [
            {
                text: "Yeni savunma sistemine yatırım yapın, sınır güvenliğini artırın.",
                effect: {
                    publicSupport: +10,  // Halk güvenliğin artmasından memnun olur
                    budget: -25,  // Yeni sistemin maliyeti yüksek
                    internalSecurity: +20,  // Sınır güvenliği güçlenir
                    internationalRelations: +5,  // Komşu ülkeler arasında güven tazelenir
                }
            },
            {
                text: "Bu projeyi erteleyin, şu an kaynakları başka alanlarda kullanalım.",
                effect: {
                    publicSupport: -5,  // Halkın bir kısmı güvenlik eksikliğinden rahatsız olabilir
                    budget: +10,  // Bütçe rahatlar
                    internalSecurity: -10,  // Sınır güvenliği konusunda zayıflık hissedilebilir
                    internationalRelations: 0  // Uluslararası ilişkilerde etkisi olmaz
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
    {
        id: 61,
        question: "Sayın Cumhurbaşkanım, askerlik süresinin uzunluğu konusunda halktan şikayetler geliyor. Askerlik süresini kısaltalım mı, yoksa profesyonel orduya geçiş mi yapalım?",
        answers: [
            {
                text: "Askerlik süresini kısaltın, gençlerin memnuniyetini artırın.",
                effect: {
                    publicSupport: +20,  // Gençler ve aileleri memnun olur
                    budget: -10,  // Kısalan süre ile eğitim maliyetleri düşebilir
                    internalSecurity: -5,  // Ordu kapasitesi kısa vadede azalabilir
                    internationalRelations: 0  // Uluslararası ilişkilerde etkisi olmaz
                }
            },
            {
                text: "Profesyonel orduya geçiş yapın, askerlik süresini kademeli olarak azaltın.",
                effect: {
                    publicSupport: +10,  // Profesyonel ordu fikri halk tarafından desteklenir
                    budget: -15,  // Profesyonel ordu daha maliyetli olabilir
                    internalSecurity: +10,  // Ordu kapasitesi profesyonellikle güçlenir
                    internationalRelations: +5,  // Uluslararası alanda olumlu karşılanır
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
    {
        id: 62,
        question: "Sayın Cumhurbaşkanım, yerli savunma sanayii projelerini hızlandırmak istiyoruz. Bu, uzun vadede askeri gücümüzü artırır, ancak kısa vadede bütçeyi zorlayabilir. Ne yapalım?",
        answers: [
            {
                text: "Yerli savunma sanayiine yatırım yapın, askeri gücümüzü artırın.",
                effect: {
                    publicSupport: +15,  // Halk yerli üretimi destekler
                    budget: -30,  // Savunma sanayiine yatırım maliyetlidir
                    internalSecurity: +20,  // Ordu kapasitesi ve askeri güç artar
                    internationalRelations: +10,  // Uluslararası arenada daha güçlü bir duruş sergilenir
                }
            },
            {
                text: "Savunma sanayiini yavaşlatın, bütçeyi koruyalım.",
                effect: {
                    publicSupport: -10,  // Halk bu kararı olumsuz karşılayabilir
                    budget: +15,  // Bütçe rahatlar
                    internalSecurity: -10,  // Ordu kapasitesi ve yerli üretim azalır
                    internationalRelations: -5,  // Uluslararası alanda zayıflık algısı oluşabilir
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
    {
        id: 63,
        question: "Sayın Cumhurbaşkanım, uluslararası barış gücü operasyonlarına katılmamız gündemde. Bu, uluslararası arenada itibar kazandırabilir, ancak maliyeti yüksek olabilir ve asker kaybı riski bulunuyor. Ne yapalım?",
        answers: [
            {
                text: "Barış gücü operasyonlarına katılın, uluslararası itibarımızı artırın.",
                effect: {
                    publicSupport: +10,  // Halkın bir kısmı uluslararası katkıyı olumlu karşılar
                    budget: -20,  // Operasyonların maliyeti yüksek olabilir
                    internalSecurity: +5,  // Askeri iş birliği güvenliği artırır
                    internationalRelations: +20,  // Uluslararası alanda itibar kazanılır
                }
            },
            {
                text: "Barış gücü operasyonlarına katılmayın, askerlerimizi riske atmayın.",
                effect: {
                    publicSupport: +5,  // Halk askerlerin korunmasını olumlu karşılar
                    budget: 0,  // Bütçeye etkisi olmaz
                    internalSecurity: 0,  // Güvenliğe doğrudan etkisi olmaz
                    internationalRelations: -10,  // Uluslararası alanda katkı eksikliği olumsuz karşılanabilir
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
    {
        id: 64,
        question: "Sayın Cumhurbaşkanım, siber güvenlik tehditleri artıyor. Siber güvenlik birimi kurmayı öneriyorum. Ancak bu, mevcut askeri bütçeden kesinti yapmayı gerektirebilir. Ne yapalım?",
        answers: [
            {
                text: "Siber güvenlik birimi kurun, yeni tehditlere karşı hazırlıklı olalım.",
                effect: {
                    publicSupport: +15,  // Halk yeni güvenlik önlemlerini olumlu karşılar
                    budget: -15,  // Yeni birimin kurulması maliyetlidir
                    internalSecurity: +25,  // Siber güvenlik tehditlerine karşı savunma güçlenir
                    internationalRelations: +10,  // Uluslararası arenada siber güvenlik alanında güçlü bir duruş sergilenir
                }
            },
            {
                text: "Siber güvenlik birimini kurmayın, mevcut askeri yatırımları koruyun.",
                effect: {
                    publicSupport: -5,  // Halkın bir kısmı güvenlik konusunda endişe duyabilir
                    budget: 0,  // Mevcut bütçeye etkisi olmaz
                    internalSecurity: -10,  // Siber güvenlik tehditleri karşısında zayıflık oluşabilir
                    internationalRelations: 0  // Uluslararası ilişkiler üzerinde doğrudan etkisi olmaz
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    }
];
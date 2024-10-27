import savunmaBakani from "../../public/ministers/savunma-bakani.png";

export const savunmaQuestions = [
    {
        id: 61,
        question: "Sayın Cumhurbaşkanım, askerlik süresinin uzunluğu konusunda halktan şikayetler geliyor. Askerlik süresini kısaltalım mı, yoksa profesyonel orduya geçiş mi yapalım?",
        answers: [
            {
                text: "Askerlik süresini kısaltın.",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    internalSecurity: -20,
                    internationalRelations: -20
                }
            },
            {
                text: "Profesyonel orduya geçiş yapın.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    internalSecurity: +20,
                    internationalRelations: +20,
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
                    budget: -20,
                    internalSecurity: +20,
                    internationalRelations: +10,
                }
            },
            {
                text: "Savunma sanayiini yavaşlatın, bütçeyi koruyalım.",
                effect: {
                    budget: +20,
                    internalSecurity: -20,
                    internationalRelations: -10,
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
                    publicSupport: +20,
                    budget: -10,
                    internalSecurity: +20,
                    internationalRelations: +10,
                }
            },
            {
                text: "Siber güvenlik birimini kurmayın, mevcut askeri yatırımları koruyun.",
                effect: {
                    publicSupport: -20,
                    budget: +10,
                    internalSecurity: -20,
                    internationalRelations: -10,
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    }
];
import calismaBakani from "../../public/ministers/calisma-bakani.png";

export const calismaQuestions = [
    {
        id: 20,
        question: "İşsizlik oranı artıyor ve gençler iş bulmakta zorlanıyor. İş bulma programları mı başlatalım yoksa işverenlere vergi indirimleri mi yapalım?",
        answers: [
            {
                text: "Genç işsizliği önlemeliyiz.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    internalSecurity: +5,
                }
            },
            {
                text: "İşverenlere canımızdır.",
                effect: {
                    publicSupport: -20,
                    budget: +20,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 21,
        question: "Sayın Cumhurbaşkanım, çalışan maaşları çok düşük. Asgari ücreti artırmamız gerekir, ancak bu, işverenler üzerinde mali baskı oluşturabilir. Ne yapmalıyız?",
        answers: [
            {
                text: "Asgari ücrete zam yapalım.",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    internalSecurity: +10,
                    agriculturalProduction: -10,
                }
            },
            {
                text: "İşverenleri zorlamaya gerek yok henüz.",
                effect: {
                    publicSupport: -20,
                    budget: +10,
                    internalSecurity: -10,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 23,
        question: "Kırsaldaki iş gücü azalıyor ve üretim etkileniyor. Tarım teşvikleri verelim mi yoksa işçileri sanayiye mi yönlendirelim?",
        answers: [
            {
                text: "Tarım teşvikleri verin.",
                effect: {
                    budget: -10,
                    agriculturalProduction: +20,
                    infrastructure: -20,
                }
            },
            {
                text: "Sanayi üretimini artırın.",
                effect: {
                    budget: -10,
                    agriculturalProduction: -20,
                    infrastructure: +20
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 24,
        question: "Sosyal güvenlik bütçesi azalıyor, emekli maaşları riskte. Maaşları düşürmek için reform mu yapalım yoksa vergileri artırarak bütçeyi mi dengeleyelim?",
        answers: [
            {
                text: "Reformu yapın ve maaşları düşürün.",
                effect: {
                    publicSupport: -10,
                    budget: +15,
                    internalSecurity: -15,
                }
            },
            {
                text: "Vergileri artırın, sosyal güvenlik korunmalı.",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    internalSecurity: +15,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    }
];
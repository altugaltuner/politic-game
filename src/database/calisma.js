import calismaBakani from "../../public/ministers/calisma-bakani.webp";
//3 soru var
export const calismaQuestions = [
    {
        id: 20,
        question: "İşsizlik oranları artıyor ve gençler iş bulmakta zorlanıyor. Ülkenin parlak beyinleri yurtdışına gitmek için birbirleriyle yarışıyor.",
        answers: [
            {
                text: "iş bulma programları başlatın",
                effect: {
                    publicSupport: +10,
                    infrastructureAndEnvironment: +5,
                }
            },
            {
                text: "İşverenlere vergi indirimi yapın",
                effect: {
                    publicSupport: -15,
                    infrastructureAndEnvironment: +5,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 21,
        question: "Cumhurbaşkanım, çalışan maaşları çok düşük. Halk asgari ücret zammı bekliyor ancak bu, işverenler üzerinde mali baskı oluşturabilir.",
        answers: [
            {
                text: "20% lik zam yapın",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    internalSecurity: -10,
                    agriculturalProduction: +10,
                }
            },
            {
                text: "50% lik zam yapın",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    agriculturalProduction: -10,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
    {
        id: 22,
        question: "Şehirleşme hızlanıyor. Kırsaldaki iş gücü azalıyor ve tarım sektörü zayıflıyor. Halk sizden bir aksiyon bekliyor",
        answers: [
            {
                text: "Tarımı destekleyin",
                effect: {
                    agriculturalProduction: +10,
                    infrastructureAndEnvironment: -10,
                },
                listID: "calisma1",
            },
            {
                text: "Sanayii üretime odaklanın",
                effect: {
                    agriculturalProduction: -10,
                    infrastructureAndEnvironment: +10,
                },
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
    },
];
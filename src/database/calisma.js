import calismaBakani from "../../public/ministers/calisma-bakani.webp";

export const calismaQuestions = [
    {
        id: 20,
        question: "İşsizlik oranları artıyor ve gençler iş bulmakta zorlanıyor. Ülkenin parlak beyinleri yurtdışına gitmek için birbirleriyle yarışıyor.",
        answers: [
            {
                text: "iş bulma programları başlatın",
                effect: {
                    publicSupport: +20,
                    budget: +10,
                    internalSecurity: +10,
                }
            },
            {
                text: "İşverenlere vergi indirimi yapın",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
        link: "https://www.pigenclikdernegi.org/tr/kurumsal-haberler/turkiyede-issizlik-orani-temmuzda-yillik-bazda-yuzde-134-oldu/"
    },
    {
        id: 21,
        question: "Cumhurbaşkanım, çalışan maaşları çok düşük. Halk asgari ücret zammı bekliyor ancak bu, işverenler üzerinde mali baskı oluşturabilir.",
        answers: [
            {
                text: "50% lik zam yapın",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    internalSecurity: +10,
                    agriculturalProduction: -10,
                }
            },
            {
                text: "20% lik zam yapın",
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
        link: "https://tr.wikipedia.org/wiki/T%C3%BCrkiye%27de_asgari_%C3%BCcret"
    },
    {
        id: 23,
        question: "Şehirleşme hızlanıyor. Kırsaldaki iş gücü azalıyor ve tarım sektörü zayıflıyor. Halk sizden bir aksiyon bekliyor",
        answers: [
            {
                text: "Tarımı destekleyin",
                effect: {
                    budget: -10,
                    agriculturalProduction: +20,
                    infrastructureAndEnvironment: -20,
                },
                listID: "calisma1",
            },
            {
                text: "Sanayi üretimine odaklanın",
                effect: {
                    budget: -10,
                    agriculturalProduction: -20,
                    infrastructureAndEnvironment: +20
                },
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
        link: "https://data.tuik.gov.tr/Bulten/Index?p=Ic-Goc-Istatistikleri-2021-45869"
    },
];
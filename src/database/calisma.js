import calismaBakani from "../../public/ministers/calisma-bakani.png";

export const calismaQuestions = [
    {
        id: 20,
        question: "İşsizlik oranı artıyor ve gençler iş bulmakta zorlanıyor. Ne yapmalıyız?",
        answers: [
            {
                text: "Devlet destekli iş bulma programları başlatın.",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    internalSecurity: +10,
                }
            },
            {
                text: "işverenlere vergi indirimleri yapacağız.",
                effect: {
                    publicSupport: -20,
                    budget: +20,
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
        question: "Çalışan maaşları çok düşük. Asgari ücreti artırmamız gerekir, ancak bu, işverenler üzerinde mali baskı oluşturabilir. Ne yapmalıyız?",
        answers: [
            {
                text: "Çalışanları refaha kavuşturacağız.",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    internalSecurity: +10,
                    agriculturalProduction: -10,
                }
            },
            {
                text: "İşverenler zor günlerden geçiyor.",
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
        question: "Şehirleşme günden güne hızlanıyor. Kırsaldaki iş gücü azalıyor ve tarım sektörü zayıflıyor. Halk sizden bir aksiyon bekliyor.",
        answers: [
            {
                text: "Tarım teşvikleri verip köylüyü koruyun.",
                effect: {
                    budget: -10,
                    agriculturalProduction: +20,
                    infrastructureAndEnvironment: -20,
                }
            },
            {
                text: "Popülasyonu sanayi üretimine yönlendirin.",
                effect: {
                    budget: -10,
                    agriculturalProduction: -20,
                    infrastructureAndEnvironment: +20
                }
            }
        ],
        title: "Çalışma ve Sosyal Güvenlik Bakanı",
        photo: calismaBakani,
        link: "https://data.tuik.gov.tr/Bulten/Index?p=Ic-Goc-Istatistikleri-2021-45869"
    },
];
import saglikBakani from "../../public/ministers/saglik-bakani.webp";

export const saglikQuestions = [
    {
        id: 140,
        question: "Şehir hastanelerindeki hasta yoğunluğu artıyor ve sağlık hizmetleri yavaşlıyor.",
        answers: [
            {
                text: "Mevcut kapasiteyi artırın",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Yeni hastaneler inşa edin",
                effect: {
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                }
            },
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 144,
        question: "Ülkemizde psikolojik sağlık sorunları giderek artıyor. Bunun önüne geçmeliyiz yoksa toplum sağlığımız büyük risk altında",
        answers: [
            {
                text: "Konserler düzenleyin",
                effect: {
                    publicSupport: +10,
                    internalSecurity: 0,
                    budget: -15,
                }
            },
            {
                text: "Psikolojik destek hizmetleri verin",
                effect: {
                    publicSupport: +20,
                    internalSecurity: +10,
                    budget: 0,
                }
            },
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 140,
        question: "Bazı hastanelerin yenidoğan ünitelerinde aşırı bir doluluk yaşanıyor. İnceleme yapalım mı?",
        answers: [
            {
                text: "Hastane yetkilileriyle konuşun",
                effect: {
                    budget: +10,
                    internalSecurity: -25,
                    publicSupport: 0,
                }
            },
            {
                text: "Denetim yapın",
                effect: {
                    budget: -10,
                    internalSecurity: +20,
                    publicSupport: +30,
                },
                listID: "saglik1",
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
];
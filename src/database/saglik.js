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
                    infrastructureAndEnvironment: +5,
                }
            },
            {
                text: "Yeni hastaneler inşa edin",
                effect: {
                    budget: -15,
                    infrastructureAndEnvironment: +15,
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
                text: "Konserler düzenleyip halkı neşelendirin",
                effect: {
                    publicSupport: +5,
                    internalSecurity: 0,
                    budget: -15,
                }
            },
            {
                text: "Psikolojik destek hizmetleri sağlayalım",
                effect: {
                    publicSupport: +15,
                    internalSecurity: +5,
                    budget: -10,
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
                text: "Hastane müdürüyle konuşun",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -15,
                }
            },
            {
                text: "Gizli bir denetim yapılsın",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +15,
                },
                listID: "saglik1",
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
];
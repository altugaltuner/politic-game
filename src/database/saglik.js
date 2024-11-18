import saglikBakani from "../../public/ministers/saglik-bakani.webp";
// 3 soru var
export const saglikQuestions = [
    {
        id: 100,
        question: "Şehir hastanelerindeki hasta yoğunluğu artıyor ve sağlık hizmetleri yavaşlıyor.",
        answers: [
            {
                text: "Mevcut kapasiteyi artırılsın",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: +5,
                }
            },
            {
                text: "Yeni hastaneler inşa edilsin",
                effect: {
                    budget: -15,
                    infrastructureAndEnvironment: +10,
                }
            },
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 101,
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
                text: "Psikolojik destek hizmetleri sağlayın",
                effect: {
                    publicSupport: +10,
                    internalSecurity: +5,
                    budget: -10,
                }
            },
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 102,
        question: "Bazı hastanelerin yenidoğan ünitelerinde aşırı bir doluluk yaşanıyor. İnceleme yapalım mı?",
        answers: [
            {
                text: "Hastane müdürüyle irtibata geçin",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -15,
                }
            },
            {
                text: "Gizli bir denetim yapılsın",
                effect: {
                    internalSecurity: +15,
                    publicSupport: +15,
                },
                listID: "saglik1",
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
];
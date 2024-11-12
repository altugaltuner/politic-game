import saglikBakani from "../../public/ministers/saglik-bakani.webp";

export const saglikQuestions = [
    {
        id: 140,
        question: "Sayın Cumhurbaşkanım, şehir hastanelerindeki hasta yoğunluğu artıyor ve sağlık hizmetleri yavaşlıyor.",
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
                    infrastructureAndEnvironment: +30,
                }
            },
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
        link: "https://dergipark.org.tr/tr/download/article-file/1284209"
    },
    {
        id: 144,
        question: "Sayın Cumhurbaşkanım, Türkiye’de psikolojik sağlık sorunları giderek artıyor. Bunun önüne geçmeliyiz yoksa toplum sağlığımız büyük risk altında",
        answers: [
            {
                text: "Konserler düzenleyin",
                effect: {
                    publicSupport: +10,
                    internalSecurity: 0,
                    budget: -25,
                }
            },
            {
                text: "Psikolojik destek hizmetleri verin",
                effect: {
                    publicSupport: +20,
                    internalSecurity: +10,
                    budget: -10,
                }
            },
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
        link: "https://www.gazeteduvar.com.tr/ipsostan-ruh-sagligi-raporu-turkiye-ikinci-sirada-haber-1675866"
    },
    {
        id: 140,
        question: "Bazı hastanelerin yenidoğan ünitelerinde aşırı bir doluluk yaşanıyor. İnceleme yapalım mı?",
        answers: [
            {
                text: "Hastane yetkilileriyle konuşun",
                effect: {
                    budget: +10,
                    internalSecurity: -15,
                    publicSupport: 0,
                }
            },
            {
                text: "Denetim yapın",
                effect: {
                    budget: -20,
                    internalSecurity: +20,
                    publicSupport: +30,
                },
                listID: "saglik1",
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
        link: "https://www.sozcu.com.tr/yenidogan-cetesi-onerisi-akp-ve-mhp-oylariyla-reddetti-p96878"
    },
];
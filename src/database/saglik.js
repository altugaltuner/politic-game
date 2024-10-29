import saglikBakani from "../../public/ministers/saglik-bakani.png";

export const saglikQuestions = [
    {
        id: 140,
        question: "Sayın Cumhurbaşkanım, şehir hastanelerindeki hasta yoğunluğu artıyor ve sağlık hizmetleri yavaşlıyor.",
        answers: [
            {
                text: "Mevcut hastane kapasitelerini artırın.",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Yeni hastaneler inşa edin.",
                effect: {
                    budget: -20,
                    infrastructureAndEnvironment: +30,
                }
            },
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 144,
        question: "Sayın Cumhurbaşkanım, Türkiye’de psikolojik sağlık sorunları giderek artıyor.",
        answers: [
            {
                text: "Daha fazla ilaç ithal edin.",
                effect: {
                    publicSupport: -20,
                    internalSecurity: -10,
                    budget: -20,
                }
            },
            {
                text: "Psikolojik destek hizmetlerini yaygınlaştırın",
                effect: {
                    publicSupport: +20,
                    internalSecurity: +10,
                    budget: -10,
                }
            },
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 140,
        question: "Günahsız bebekleri öldürerek SGK'yı toplamda 1 milyar TL'nin üzerinde dolandırmışlar. Mecliste bunun araştırılma önergesi verilmiş. Ne yapmalıyız?",
        answers: [
            {
                text: "Hayır oyu vermelerini tembihle.",
                effect: {
                    budget: -20,
                    infrastructureAndEnvironment: +30,
                }
            },
            {
                text: "Derhal araştırılsın.",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
];
import saglikBakani from "../../public/ministers/saglik-bakani.webp";

export const saglikQuestions = [
    {
        id: 140,
        question: "Sayın Cumhurbaşkanım, şehir hastanelerindeki hasta yoğunluğu artıyor ve sağlık hizmetleri yavaşlıyor.",
        answers: [
            {
                text: "Mevcut hastane kapasitelerini artırmalıyız",
                effect: {
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Yeni hastanelerin inşasına başlansın",
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
                text: "Daha fazla ilaç ithal etmeliyiz",
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
        link: "https://www.gazeteduvar.com.tr/ipsostan-ruh-sagligi-raporu-turkiye-ikinci-sirada-haber-1675866"
    },
    {
        id: 140,
        question: "Günahsız bebekleri öldürerek SGK'yı toplamda 1 milyar TL'nin üzerinde dolandırmışlar. Mecliste bunun araştırılma önergesi verilmiş. Ne yapmalıyız?",
        answers: [
            {
                text: "Elebaşı doktorları yargı önüne çıkarın",
                effect: {
                    budget: +10,
                    internalSecurity: +10,
                    publicSupport: +10,
                }
            },
            {
                text: "Bu rezillik daha eskiye dayanıyor, araştırılsın",
                effect: {
                    budget: -20,
                    internalSecurity: +30,
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
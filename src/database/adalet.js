import adaletBakanı from "../../public/ministers/adalet-bakani.png";
import mainPic from "../../public/ministers/main.png";

export const adaletQuestions = [
    {
        id: 1,
        question: "Türkiye Simülasyonu başlıyor. Hazır Mısın ?",
        answers: [
            {
                text: "Hadi Başlayalım",
                effect: {
                }
            },
            {
                text: "Yolla Gelsin!",
                effect: {
                }
            }
        ],
        title: "Altuğ",
        photo: mainPic,
    },
    {
        id: 2,
        question: "Kara para aklayan sosyal medya ünlüleri yakalandı ve aylardır içeride tutuluyorlar. Bazılarının güzellik merkezleri varmış. Ancak hakim daha dün serbest bıraktı!",
        answers: [
            {
                text: "Doğru karar, adli makamlardan kimsenin şüphesi olmasın!",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                }
            },
            {
                text: "Yoksa birileri rüşvet mi aldı? Derhal araştırın!",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://www.youtube.com/watch?v=0lpHLEIkT8E"
    },
    {
        id: 3,
        question: "İstanbul Sözleşmesi ülke gündemine oturdu. Bazı kesimler kadınları korumak adına bu sözleşmeyi desteklerken, bazıları ise aile yapısını bozduğunu iddia ediyor.",
        answers: [
            {
                text: "Biz Osmanlı torunuyuz. Elin gavurunun sözleşmesinden bize ne?",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                    budget: -20,
                }
            },
            {
                text: "Kadınlarımızın haklarını korumak adına bu sözleşmeyi destekleyeceğiz!",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                    budget: +20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://www.bbc.com/turkce/haberler-turkiye-56465013"
    },
    {
        id: 4,
        question: "İstanbul,Ankara gibi büyük şehirlerde suç oranları artıyor. Halk güvenliğinden endişe ediyor.",
        answers: [
            {
                text: "Polis teşkilatını güçlendirin ve suçlulara sert cezalar verin.",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                    budget: -20,
                }
            },
            {
                text: "Sosyal projeler üzerine çalışın ve suç oranlarını düşürün.",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                    budget: +20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://www.numbeo.com/crime/in/Istanbul"
    },
    {
        id: 5,
        question: "Sayın Cumhurbaşkanım, hapishaneler dolup taşıyor ve cezaevi şartları giderek kötüleşiyor.",
        answers: [
            {
                text: "En iyi bildiğimiz şeyi yapalım. İNŞAAT!",
                effect: {
                    internalSecurity: +20,
                    budget: -20,
                    publicSupport: +20,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Şu an bütçemiz kaldırmaz. Hem o kadar suçlu yoktur.",
                effect: {
                    internalSecurity: +20,
                    budget: +20,
                    publicSupport: -20,
                    infrastructureAndEnvironment: -20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://tr.euronews.com/2023/05/28/turkiye-avrupada-nufusa-gore-cezaevlerindeki-mahpus-oraninda-ilk-sirada"
    },

];
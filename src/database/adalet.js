import adaletBakanı from "../../public/ministers/adalet-bakani.webp";
import altug from "../../public/ministers/altug.webp";

export const adaletQuestions = [
    {
        id: 1,
        question: "Son seçimlerde %51 ile sen seçildin! Bu sorumluluğu üstlenmeye hazır mısın?",
        answers: [
            {
                text: "Hazırız, milletimize hizmet için buradayız",
                effect: {
                }
            },
            {
                text: "Bu ülke için elimizden geleni yapacağız",
                effect: {
                }
            }
        ],
        title: "Kreatör",
        photo: altug,
    },
    {
        id: 2,
        question: "Sayın Cumhurbaşkanım. Kara para aklayan sosyal medya ünlülerinin serbest bırakılacağı gündemde. Düşünceniz nedir?",
        answers: [
            {
                text: "Yargının kararına saygı duyacağız",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                },
                listID: "adalet1",
            },
            {
                text: "Hukuksuzluk mevcut olabilir",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://www.youtube.com/watch?v=0lpHLEIkT8E"
    },
    {
        id: 3,
        question: "İstanbul Sözleşmesi konusunda tartışmalar devam ediyor. Ne düşünüyorsunuz?",
        answers: [
            {
                text: "Ailevi hassasiyetlerimizi korumalıyız",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                    budget: +20,
                },
            },
            {
                text: "Kadın haklarını korumak önceliğimiz",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                    budget: -20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://www.bbc.com/turkce/haberler-turkiye-56465013"
    },
    {
        id: 4,
        question: "İstanbul ve Ankara’da suç oranları arttı, halk güvenlikten endişeli...",
        answers: [
            {
                text: "Polis ekipleri güçlendirilecek",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                    budget: -20,
                }
            },
            {
                text: "Sosyal projelerle suç oranlarını düşüreceğiz",
                effect: {
                    internalSecurity: -10,
                    publicSupport: -10,
                    budget: -10,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://www.numbeo.com/crime/in/Istanbul"
    },
    {
        id: 5,
        question: "Sayın Cumhurbaşkanım, cezaevleri dolup taşıyor, yeni yatırımlar planlıyor musunuz ?",
        answers: [
            {
                text: "İnşaat projeleriyle kapasiteyi artıracağız",
                effect: {
                    internalSecurity: +10,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Bütçemizi ve halkın vergilerini korumalıyız",
                effect: {
                    internalSecurity: -20,
                    budget: +20,
                    infrastructureAndEnvironment: -20,
                },
                listID: "adalet2",
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://tr.euronews.com/2023/05/28/turkiye-avrupada-nufusa-gore-cezaevlerindeki-mahpus-oraninda-ilk-sirada"
    },
];
import adaletBakanı from "../../public/ministers/adalet-bakani.png";
import altug from "../../public/ministers/altug.png";

export const adaletQuestions = [
    {
        id: 1,
        question: "Son seçimlerde %51 ile sen seçildin! Yönetmeye hazır mısın?",
        answers: [
            {
                text: "Hazırız, milletimize hizmet için buradayız",
                effect: {
                }
            },
            {
                text: "Her şey milletimizin emrinde, birlikte başaracağız",
                effect: {
                }
            }
        ],
        title: "Altuğ",
        photo: altug,
    },
    {
        id: 2,
        question: "Kara para aklayan sosyal medya ünlüleri serbest bırakıldı. Düşünceniz nedir?",
        answers: [
            {
                text: "Yargının kararına saygı duyarız; hukuk işler",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                },
            },
            {
                text: "Hukuksuzluk mevcut olabilir, gereken inceleme yapılacak",
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
                text: "Aile yapımızı koruyacağız, hassasiyetimiz yüksek",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                    budget: +20,
                }
            },
            {
                text: "Kadınlarımızın haklarını korumak önceliğimizdir",
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
                text: "Polis güçlendirilecek, suçlulara en ağır ceza verilecek",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                    budget: -20,
                }
            },
            {
                text: "Sosyal projelerle gençleri suça yönelmekten uzaklaştıracağız",
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
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        link: "https://tr.euronews.com/2023/05/28/turkiye-avrupada-nufusa-gore-cezaevlerindeki-mahpus-oraninda-ilk-sirada"
    },
];
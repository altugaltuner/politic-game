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
        question: "Kara para aklayan sosyal medya ünlülerinin serbest bırakılacağı gündemde. Düşünceniz nedir?",
        answers: [
            {
                text: "Yargı kararına saygı duyacağız",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                },
                listID: "adalet1",
            },
            {
                text: "Araştırmaya devam edin",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
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
                text: "Sosyal projeler geliştireceğiz",
                effect: {
                    internalSecurity: -10,
                    publicSupport: -10,
                    budget: -10,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
    },
    {
        id: 5,
        question: "Sayın Cumhurbaşkanım, cezaevleri dolup taşıyor. Gündeminizde yeni yatırımlar yer alıyor mu ?",
        answers: [
            {
                text: "Kapasiteyi artırmalıyız",
                effect: {
                    internalSecurity: +10,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Bütçemizi korumalıyız",
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
    },
];
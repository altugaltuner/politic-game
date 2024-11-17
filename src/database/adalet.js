import adaletBakanı from "../../public/ministers/adalet-bakani.webp";
import altug from "../../public/ministers/altug.webp";
//4 soru var
export const adaletQuestions = [
    {
        id: 1,
        question: "Son seçimleri %51 ile sen kazandın! Bu sorumluluğu üstlenmeye hazır mısın?",
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
        question: "İstanbul Sözleşmesi konusunda tartışmalar devam ediyor. Ne düşünüyorsunuz?",
        answers: [
            {
                text: "Sözleşmeden çekileceğiz",
                effect: {
                    internationalRelations: -15,
                },
            },
            {
                text: "Sözleşmeyi imzalayacağız",
                effect: {
                    internationalRelations: +10,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
    },
    {
        id: 3,
        question: "İstanbul ve Ankara’da suç oranları arttı, halk güvenlikten endişeli...",
        answers: [

            {
                text: "Her bölgeye yeni karakollar açılacak",
                effect: {
                    internalSecurity: +10,
                    infrastructureAndEnvironment: +10,
                    budget: -15,
                }
            },
            {
                text: "Polis ekipleri güçlendirilecek",
                effect: {
                    internalSecurity: +10,
                    infrastructureAndEnvironment: -15,
                    budget: -10,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
    },
    {
        id: 4,
        question: "Sayın Cumhurbaşkanım, cezaevleri dolup taşıyor. Önerileriniz var mıdır?",
        answers: [
            {
                text: "Cezaevlerindeki tutukluların sayısı azaltılacak",
                effect: {
                    internalSecurity: -15,
                    budget: +10,
                    infrastructureAndEnvironment: -10,
                },
                listID: "adalet2",
            },
            {
                text: "Yeni cezaevleri inşa edilecek",
                effect: {
                    internalSecurity: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
    },
    {
        id: 4,
        question: "Sayın Cumhurbaşkanım, ülkemizde gerçekleşen olaylar toplumu sarsıyor. İnsanların adalete olan güvenini arttırmak için ne yapmalıyız?",
        answers: [
            {
                text: "En büyük Adalet Sarayını inşa edeceğiz",
                effect: {
                    internalSecurity: -10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                },
                listID: "adalet2",
            },
            {
                text: "Her ilde adli denetimleri arttıracağız",
                effect: {
                    internalSecurity: +10,
                    budget: +5,
                    infrastructureAndEnvironment: -10,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
    },
];
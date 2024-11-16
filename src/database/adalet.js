import adaletBakanı from "../../public/ministers/adalet-bakani.webp";
import altug from "../../public/ministers/altug.webp";

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
        id: 3,
        question: "İstanbul Sözleşmesi konusunda tartışmalar devam ediyor. Ne düşünüyorsunuz?",
        answers: [
            {
                text: "Sözleşmeden çekileceğiz",
                effect: {
                    internationalRelations: -10,
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
        id: 4,
        question: "İstanbul ve Ankara’da suç oranları arttı, halk güvenlikten endişeli...",
        answers: [
            {
                text: "Polis ekipleri güçlendirilecek",
                effect: {
                    internalSecurity: +10,
                    infrastructureAndEnvironment: -10,
                    budget: -10,
                }
            },
            {
                text: "Her bölgeye yeni karakollar açılacak",
                effect: {
                    internalSecurity: +20,
                    infrastructureAndEnvironment: +20,
                    budget: -15,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
    },
    {
        id: 5,
        question: "Sayın Cumhurbaşkanım, cezaevleri dolup taşıyor. Önerileriniz var mıdır?",
        answers: [
            {
                text: "Yeni cezaevleri inşa edilecek",
                effect: {
                    internalSecurity: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +15,
                }
            },
            {
                text: "Cezaevlerindeki tutukluların sayısı azaltılacak",
                effect: {
                    internalSecurity: -15,
                    budget: +10,
                    infrastructureAndEnvironment: -10,
                },
                listID: "adalet2",
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
    },
];
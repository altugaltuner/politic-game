import adaletBakanı from "../../public/ministers/adalet-bakani.webp";
import altug from "../../public/ministers/altug.webp";
//4 soru var
export const adaletQuestions = [
    {
        id: 1,
        question: "Son seçimleri %51 ile kazanarak cumhurbaşkanı oldun! Bu sorumluluğu üstlenmeye hazır mısın?",
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
        title: "Altuğ",
        photo: altug,
        level: 1,
    },
    {
        id: 2,
        question: "İstanbul ve Ankara’da suç oranları arttı, halk güvenlikten endişeli...",
        answers: [
            {
                text: "Her bölgeye yeni karakollar açılacak",
                effect: {
                    internalSecurity: +5,
                    infrastructureAndEnvironment: +5,
                    budget: -10,
                }
            },
            {
                text: "Polis ekipleri güçlendirilecek",
                effect: {
                    internalSecurity: +10,
                    infrastructureAndEnvironment: -15,
                    budget: -5,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı,
        level: 1,
    },
    {
        id: 3,
        question: "Sayın Cumhurbaşkanım, cezaevleri dolup taşıyor. Önerileriniz var mıdır?",
        answers: [
            {
                text: "Cezaevlerindeki tutukluların sayısı azaltılacak",
                effect: {
                    internalSecurity: -10,
                    budget: +15,
                    infrastructureAndEnvironment: -20,
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
        level: 2,
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
        level: 2,
    },
];
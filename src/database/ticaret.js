import ticaretBakani from "../../public/ministers/ticaret-bakani.webp";
// 3 soru var
export const ticaretQuestions = [
    {
        id: 140,
        question: "Ülkemizde dijital ticaret hızla büyüyor, ancak küçük işletmeler dijital dönüşüme ayak uyduramıyor. Hangisine destek verilip hangisinden feragat edilmeli?",
        answers: [
            {
                text: "Küçük işletmelere destek verilecek",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    internationalRelations: -10,
                }
            },
            {
                text: "Büyük şirketlerin önü açılacak",
                effect: {
                    publicSupport: -15,
                    budget: +10,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
    {
        id: 141,
        question: "Sınır ticareti bazı bölgelerde ekonomik canlanmaya yol açtı. Ancak bu durum güvenlik sorunlarına ve kaçakçılık faaliyetlerine neden olabilir.",
        answers: [
            {
                text: "Sınır ticaretini destekleyin",
                effect: {
                    internalSecurity: -10,
                    budget: +15,
                    internationalRelations: +10,
                }
            },
            {
                text: "Sınır ticaretini kısıtlayın",
                effect: {
                    internalSecurity: +10,
                    budget: -10,
                    internationalRelations: -15,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
    {
        id: 142,
        question: "Sayın Cumhurbaşkanım, uluslararası şirketler yatırım yapmak istiyor. Ancak bu, yerli üreticilerin pazar payını daraltabilir.",
        answers: [
            {
                text: "Yabancı yatırımları kabul edeceğiz",
                effect: {
                    internationalRelations: +10,
                    budget: +15,
                    agriculturalProduction: -10,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Yerli üreticileri düşünmek zorundayız",
                effect: {
                    agriculturalProduction: +10,
                    internationalRelations: -10,
                    budget: -10,
                    infrastructureAndEnvironment: -15,
                    publicSupport: +10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
];
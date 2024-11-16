import ticaretBakani from "../../public/ministers/ticaret-bakani.webp";

export const ticaretQuestions = [
    {
        id: 82,
        question: "Ülkemizde dijital ticaret hızla büyüyor, ancak küçük işletmeler dijital dönüşüme ayak uyduramıyor.",
        answers: [
            {
                text: "Küçük işletmelere destek verilecek.",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    internationalRelations: 0,
                }
            },
            {
                text: "Büyük e-ticaret şirketleri desteklenecek.",
                effect: {
                    publicSupport: 0,
                    budget: +15,
                    internationalRelations: +15,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
];
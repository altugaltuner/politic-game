import ticaretBakani from "../../public/ministers/ticaret-bakani.webp";
// 1 soru var
export const ticaretQuestions = [
    {
        id: 140,
        question: "Ülkemizde dijital ticaret hızla büyüyor, ancak küçük işletmeler dijital dönüşüme ayak uyduramıyor. Hangisine destek verilip hangisinden feragat edilmeli?",
        answers: [
            {
                text: "Küçük işletmelere destek verilecek.",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    internationalRelations: -10,
                }
            },
            {
                text: "Büyük şirketlerin önü açılacak.",
                effect: {
                    publicSupport: -15,
                    budget: +15,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
];
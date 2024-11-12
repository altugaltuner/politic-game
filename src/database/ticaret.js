import ticaretBakani from "../../public/ministers/ticaret-bakani.webp";

export const ticaretQuestions = [
    {
        id: 81,
        question: "Sayın Cumhurbaşkanım, büyük perakende zincirleri dolar kurunu bahane ederek ekstra zamlar yapıyor.",
        answers: [
            {
                text: "Marketlere ceza yazın",
                effect: {
                    budget: +15,
                },
                listID: "ticaret1",
            },
            {
                text: "Ürün fiyatlarını TL'ye endeksleyin",
                effect: {
                    publicSupport: -20,
                    budget: 0,
                    internalSecurity: 0,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
    {
        id: 82,
        question: "Ülkemizde dijital ticaret hızla büyüyor, ancak küçük işletmeler dijital dönüşüme ayak uyduramıyor.",
        answers: [
            {
                text: "Küçük işletmelere destek verin.",
                effect: {
                    publicSupport: +15,
                    budget: -10,
                    internationalRelations: 0,
                }
            },
            {
                text: "Büyük e-ticaret şirketlerine odaklanın.",
                effect: {
                    publicSupport: -15,
                    budget: -20,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
    {
        id: 83,
        question: "Gıda fiyatlarındaki dalgalanmalar ve spekülasyonlar artıyor.",
        answers: [
            {
                text: "Fiyatları kontrol altına alın",
                effect: {
                    publicSupport: +10,
                    budget: +10,
                    internalSecurity: +10,
                }
            },
            {
                text: "Serbest piyasa koşullarına bırakın",
                effect: {
                    publicSupport: -10,
                    budget: -10,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
];
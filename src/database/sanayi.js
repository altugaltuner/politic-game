import sanayiBakani from "../../public/ministers/sanayi-bakani.png";

export const sanayiQuestions = [
    {
        id: 150,
        question: "Sayın Cumhurbaşkanım, sanayimizin teknoloji altyapısı zayıf. Teknoloji yatırımlarını artırabiliriz.",
        answers: [
            {
                text: "Yatırımları artırın",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: +10,
                }
            },
            {
                text: "Geleneksel üretim yöntemlerine odaklanın",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    infrastructureAndEnvironment: -20,
                    internationalRelations: -10
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },

    {
        id: 151,
        question: "Sayın Cumhurbaşkanım, yerli otomobil üretimi projesi büyük ilgi görüyor. Projeyi hızlandıralım mı, yoksa başka sanayi alanlarına mı öncelik verelim?",
        answers: [
            {
                text: "Yerli otomobil projesini hızlandırın",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +25,
                    internationalRelations: +10,
                }
            },
            {
                text: "Başka sanayi alanlarına öncelik verin",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: +5,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
        link: "https://tr.wikipedia.org/wiki/Togg"
    },
    {
        id: 152,
        question: "Sayın Cumhurbaşkanım, Türkiye'nin dijital dönüşüm süreci hızlanıyor. Bu süreçte hangi alanlara yatırım yapmalıyız?",
        answers: [
            {
                text: "Teknoloji startup'larına destek sağlayın",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +10,
                    internationalRelations: -10,
                }
            },
            {
                text: "Kaynakları büyük sanayi şirketlerine ayırın",
                effect: {
                    publicSupport: -20,
                    budget: -10,
                    infrastructureAndEnvironment: +20,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
        link: "https://bilisimvadisi.com.tr/"
    },
];
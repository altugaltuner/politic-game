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
    },
    {
        id: 153,
        question: "Sayın Cumhurbaşkanım, çevre dostu sanayi projelerine geçiş yapmayı öneriyorum. Ancak bu projeler maliyetli olabilir ve sanayi üretimini yavaşlatabilir. Ne yapalım?",
        answers: [
            {
                text: "Çevre dostu sanayi projelerine geçiş yapın",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Mevcut sanayi projelerine devam edin",
                effect: {
                    publicSupport: +5,
                    budget: -10,
                    infrastructureAndEnvironment: -10,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },
    {
        id: 154,
        question: "Sayın Cumhurbaşkanım, sanayide enerji verimliliği düşüyor. Yenilenebilir enerji kaynaklarına mı yatırım yapalım, yoksa mevcut enerji altyapısını mı güçlendirelim?",
        answers: [
            {
                text: "Yenilenebilir kaynaklara yatırım yapın",
                effect: {
                    publicSupport: +20,
                    budget: -25,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Kısa vadeli çözümler düşünün",
                effect: {
                    publicSupport: +5,
                    budget: -15,
                    infrastructureAndEnvironment: -20,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    }
];
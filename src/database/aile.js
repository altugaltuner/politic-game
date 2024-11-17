import aileBakanı from "../../public/ministers/aile-bakani.webp";
//2 soru var
export const aileQuestions = [
    {
        id: 10,
        question: "Düşük gelirli ailelere doğrudan sosyal yardımı yapmayı öneriyorum. Ancak bu, kamu bütçesini zorlayabilir ve altyapı yatırımlarını azaltabilir.",
        answers: [
            {
                text: "Yardımı yapacağız",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                },
            },
            {
                text: "Şimdilik ertelemek zorundayız",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                },
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 11,
        question: "Suriyeden gelen mülteciler kaçak ve sigortasız çalıştırılıyor, tarım sektöründe ucuz işgücü olarak kullanılıyor.",
        answers: [
            {
                text: "Mültecileri ülkemizde istihdam edeceğiz",
                effect: {
                    publicSupport: -20,
                    agriculturalProduction: +10,
                },
                listID: "aile1",
            },
            {
                text: "Kaçak işçiliği bitireceğiz",
                effect: {
                    publicSupport: +15,
                    agriculturalProduction: -10,
                },
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
];
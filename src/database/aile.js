import aileBakanı from "../../public/ministers/aile-bakani.png";

export const aileQuestions = [
    {
        id: 11,
        question: "Düşük gelirli ailelere doğrudan sosyal yardımı yapmayı öneriyorum. Ancak bu, kamu bütçesini zorlayabilir ve altyapı yatırımlarını azaltabilir.",
        answers: [
            {
                text: "Yardımı yapacağız, diyanetin bütçesinden kısarız.",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    internalSecurity: +10,
                    infrastructureAndEnvironment: -20
                }
            },
            {
                text: "Daha yeni vergiler türetemedik, beklesinler.",
                effect: {
                    publicSupport: -20,
                    budget: +20,
                    infrastructureAndEnvironment: +20,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 13,
        question: "Suriyeden gelen mülteciler çocuk yaşta çalıştırılıyor ve tarım sektöründe ucuz işgücü olarak kullanılıyor.",
        answers: [
            {
                text: "Çocuk işçiliğini bitireceğiz. Denetim şart!",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    agriculturalProduction: -10,
                }
            },
            {
                text: "Vatana faydaları var işte, daha ne istiyorsun?",
                effect: {
                    publicSupport: -20,
                    budget: +10,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
        link: "https://dergipark.org.tr/tr/download/article-file/3223060"
    },
];
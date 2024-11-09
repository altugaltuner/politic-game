import aileBakanı from "../../public/ministers/aile-bakani.png";

export const aileQuestions = [
    {
        id: 11,
        question: "Düşük gelirli ailelere doğrudan sosyal yardımı yapmayı öneriyorum. Ancak bu, kamu bütçesini zorlayabilir ve altyapı yatırımlarını azaltabilir.",
        answers: [
            {
                text: "Yardımı yapacağız,halkımızı ezdirmeyeceğiz",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    internalSecurity: +10,
                    infrastructureAndEnvironment: -20
                },
            },
            {
                text: "Şu an bütçemiz yok, ertelemek zorundayız",
                effect: {
                    publicSupport: -20,
                    budget: +20,
                    infrastructureAndEnvironment: +20,
                    internalSecurity: -10,
                },
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
    },
    {
        id: 13,
        question: "Sayın Cumhurbaşkanım, Suriyeden gelen mülteciler kaçak ve sigortasız çalıştırılıyor, tarım sektöründe ucuz işgücü olarak kullanılıyor.",
        answers: [
            {
                text: "Kaçak işçiliği bitireceğiz!",
                effect: {
                    publicSupport: +20,
                    budget: -10,
                    agriculturalProduction: -10,
                },
            },
            {
                text: "Tarıma katkıları var, şimdilik devam etsinler",
                effect: {
                    publicSupport: -30,
                    budget: +10,
                    agriculturalProduction: +10,
                },
                listID: "aile1",
            }
        ],
        title: "Aile ve Sosyal Hizmetler Bakanı",
        photo: aileBakanı,
        link: "https://dergipark.org.tr/tr/download/article-file/3223060"
    },
];
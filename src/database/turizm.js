import turizmBakani from "../../public/ministers/turizm-bakani.webp";
//1 soru var
export const turizmQuestions = [
    {
        id: 160,
        question: "Sayın Cumhurbaşkanım, Akdenizde orman yangınlarından ötürü deniz kıyısnda hektarlarca ormanlık alan yok oldu. Bu alanlar için ne yapmalıyız? ",
        answers: [
            {
                text: "İmara açın",
                effect: {
                    publicSupport: -15,
                    infrastructureAndEnvironment: +15,
                    agriculturalProduction: -15,
                }
            },
            {
                text: "Ağaçlandırma çalışması başlatın",
                effect: {
                    publicSupport: +10,
                    agriculturalProduction: +15,
                    infrastructureAndEnvironment: -15,
                }
            }
        ],
        title: "Kültür ve Turizm Bakanı",
        photo: turizmBakani,
    },
];
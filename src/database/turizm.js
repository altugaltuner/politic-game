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
                    agriculturalProduction: +10,
                    infrastructureAndEnvironment: -15,
                }
            }
        ],
        title: "Kültür ve Turizm Bakanı",
        photo: turizmBakani,
    },
    {
        id: 161,
        question: "Pandemiden dolayı zarar gören turizm sektörünü bu yaz canlandırmak için tarihi eserlerin restorasyonu konusunda büyük bir talep var. Ancak buna ayırdığımız bütçemiz yetersiz",
        answers: [
            {
                text: "Tarım bütçesinden kesinti yapın",
                effect: {
                    internationalRelations: +15,
                    agriculturalProduction: -15,
                }
            },
            {
                text: "Emekli maaşlarından kesinti yapın",
                effect: {
                    internationalRelations: +15,
                    publicSupport: -15,
                }
            }
        ],
        title: "Kültür ve Turizm Bakanı",
        photo: turizmBakani,
    },
    {
        id: 162,
        question: "Yabancı turistler ülkemizde yaşanan dil bariyerinden dolayı sorunlar yaşıyor. Yerel esnaf ve turizm çalışanları için dil eğitimi talepleri var.",
        answers: [
            {
                text: "Dil kursları düzenleyin",
                effect: {
                    internationalRelations: +15,
                    publicSupport: +10,
                    budget: -5,
                }
            },
            {
                text: "Teknolojik çeviri cihazları dağıtın",
                effect: {
                    internationalRelations: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +5,
                }
            }
        ],
        title: "Kültür ve Turizm Bakanı",
        photo: turizmBakani,
    },
    {
        id: 162,
        question: "Yabancı turistler ülkemizde yaşanan dil bariyerinden dolayı sorunlar yaşıyor. Yerel esnaf ve turizm çalışanları için dil eğitimi talepleri var.",
        answers: [
            {
                text: "Dil kursları düzenleyin",
                effect: {
                    internationalRelations: +15,
                    publicSupport: +10,
                    budget: -5,
                }
            },
            {
                text: "Teknolojik çeviri cihazları dağıtın",
                effect: {
                    internationalRelations: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +5,
                }
            }
        ],
        title: "Kültür ve Turizm Bakanı",
        photo: turizmBakani,
    },
];
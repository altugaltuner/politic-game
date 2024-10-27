import ticaretBakani from "../../public/ministers/ticaret-bakani.png";

export const ticaretQuestions = [
    {
        id: 80,
        question: "Sayın Cumhurbaşkanım, ihracatımız son dönemde artıyor ancak rekabet edebilmemiz için ihracat yapan şirketlere daha fazla teşvik vermemiz gerekiyor.",
        answers: [
            {
                text: "İhracat teşviklerini artırın, rekabet gücünü artırın.",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    internationalRelations: +20,
                }
            },
            {
                text: "Bütçeyi koruyun, mevcut teşviklerle devam edin.",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    internationalRelations: -20,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },

    {
        id: 81,
        question: "Sayın Cumhurbaşkanım, yerel esnaf büyük perakende zincirleri tarafından zor durumda bırakılıyor.",
        answers: [
            {
                text: "Yerel esnafı koruyacağız",
                effect: {
                    publicSupport: +10,
                    budget: +20,
                    internalSecurity: +10,
                }
            },
            {
                text: "Büyük zincirlerin büyümesini engellemeyin",
                effect: {
                    publicSupport: -10,
                    budget: -20,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
    {
        id: 82,
        question: "Sayın Cumhurbaşkanım, ülkemizde dijital ticaret hızla büyüyor, ancak küçük işletmeler dijital dönüşüme ayak uyduramıyor.",
        answers: [
            {
                text: "Küçük işletmelere dijital dönüşüm desteği verin.",
                effect: {
                    publicSupport: +15,
                    budget: -15,
                    internationalRelations: +5,
                }
            },
            {
                text: "Büyük e-ticaret şirketlerine odaklanın.",
                effect: {
                    publicSupport: -15,
                    budget: -10,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
    {
        id: 83,
        question: "Sayın Cumhurbaşkanım, gıda fiyatlarındaki dalgalanmalar ve spekülasyonlar artıyor.",
        answers: [
            {
                text: "Gıda fiyatlarını kontrol altına alın",
                effect: {
                    publicSupport: +20,
                    budget: +10,
                    internalSecurity: +10,
                }
            },
            {
                text: "Serbest piyasa koşullarına bırakın",
                effect: {
                    publicSupport: -20,
                    budget: -10,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    },
    {
        id: 84,
        question: "Dış ticaret açığımız giderek artıyor. İthalatı kısıtlayan vergiler mi getirelim, yoksa ihracatçı şirketlere daha fazla destek mi sağlayalım?",
        answers: [
            {
                text: "Yerli üretimi teşvik edeceğiz",
                effect: {
                    publicSupport: +10,
                    budget: +15,
                    internationalRelations: -10,
                }
            },
            {
                text: "İhracatçı şirketlere daha fazla destek sağlayın",
                effect: {
                    publicSupport: +5,
                    budget: -15,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
    }
];
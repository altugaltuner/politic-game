import ticaretBakani from "../../public/ministers/ticaret-bakani.webp";

export const ticaretQuestions = [
    {
        id: 81,
        question: "Sayın Cumhurbaşkanım, büyük perakende zincirleri doları bahane ederek ekstra zamlar yapıyor.",
        answers: [
            {
                text: "Marketlere ağır cezalar yazmalıyız",
                effect: {
                    publicSupport: +10,
                    budget: +10,
                    internalSecurity: +10,
                },
                listID: "ticaret1",
            },
            {
                text: "Ürün fiyatlarını tl endeksli hale getireceğiz",
                effect: {
                    publicSupport: -10,
                    budget: -10,
                    internalSecurity: -10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
        link: "https://www.bloomberght.com/rekabet-kurumu-zincir-marketlere-ceza-yagdirdi-2291000"
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
        link: "https://www.tarimdunyasi.net/2024/08/08/gida-fiyatlari-neden-dusmuyor/"
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
                text: "İhracatçı şirketlere destek vermeliyiz",
                effect: {
                    publicSupport: +5,
                    budget: -15,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Ticaret Bakanı",
        photo: ticaretBakani,
        link: "https://www.bloomberght.com/dokuz-ayin-en-yuksek-dis-ticaret-acigi-2353873"
    }
];
import sanayiBakani from "../../public/ministers/sanayi-bakani.webp";

export const sanayiQuestions = [
    {
        id: 150,
        question: "Sanayimizin teknoloji altyapısı zayıf. Teknoloji yatırımlarını arttırmayı öneriyorum",
        answers: [
            {
                text: "Onay veriyorum",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Teknoloji şirketlerinin inisiyatifine bırakın",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    infrastructureAndEnvironment: -20,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },

    {
        id: 151,
        question: "Yerli otomobil üretimi projesi büyük ilgi görüyor. Nasıl bir politika izlemeliyiz?",
        answers: [
            {
                text: "Bir an önce satışa çıkarın",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    infrastructureAndEnvironment: +10,
                },
                listID: "sanayi1",
            },
            {
                text: "Eksiklerine odaklanın ve geliştirmeye devam edin",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
        link: "https://tr.wikipedia.org/wiki/Togg"
    },
    {
        id: 152,
        question: "Türkiye'nin dijital dönüşüm süreci hızlanıyor. Bu süreçte hangi alanlara yatırım yapmalıyız?",
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
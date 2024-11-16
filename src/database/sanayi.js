import sanayiBakani from "../../public/ministers/sanayi-bakani.webp";
// 3 soru var
export const sanayiQuestions = [
    {
        id: 110,
        question: "Sanayimizin teknoloji altyapısı zayıf. Teknoloji yatırımlarını arttırmayı öneriyorum",
        answers: [
            {
                text: "Onay veriyorum",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +15,
                }
            },
            {
                text: "Dev teknoloji şirketlerinin inisiyatifine bırakın",
                effect: {
                    publicSupport: -15,
                    budget: +10,
                    infrastructureAndEnvironment: +5,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },
    {
        id: 111,
        question: "Yerli otomobil üretimi projesi büyük ilgi görüyor. Nasıl bir politika izlemeliyiz?",
        answers: [
            {
                text: "Bir an önce satışa çıkarılsın",
                effect: {
                    publicSupport: -10,
                    budget: +20,
                    infrastructureAndEnvironment: +5,
                },
                listID: "sanayi1",
            },
            {
                text: "Eksiklerine odaklanılsın ve geliştirmeye devam edilsin",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    infrastructureAndEnvironment: +15,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },
    {
        id: 112,
        question: "Türkiye'nin dijital dönüşüm süreci hızlanıyor. Bu süreçte hangi alanlara yatırım yapmalıyız?",
        answers: [
            {
                text: "Teknoloji startuplarına",
                effect: {
                    publicSupport: +15,
                    budget: -10,
                    infrastructureAndEnvironment: +10,
                },
                listID: "sanayi2",
            },
            {
                text: "Büyük sanayi şirketlerine",
                effect: {
                    publicSupport: +5,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                }
            }
        ],
        title: "Sanayi ve Teknoloji Bakanı",
        photo: sanayiBakani,
    },
];
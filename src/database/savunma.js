import savunmaBakani from "../../public/ministers/savunma-bakani.webp";

export const savunmaQuestions = [
    {
        id: 60,
        question: "Yerli savunma sanayi projelerini hızlandırmak istiyoruz. Bu, uzun vadede askeri gücümüzü artırır, ancak kısa vadede bütçeyi zorlayabilir.",
        answers: [
            {
                text: "Yatırımları yapacağız",
                effect: {
                    budget: -20,
                    internalSecurity: +20,
                    internationalRelations: -10,
                }
            },
            {
                text: "Bütçemiz bunu kaldırmaz",
                effect: {
                    budget: +20,
                    internalSecurity: -20,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
    {
        id: 61,
        question: "Bugün öğlen saat 13.30'da PlazarInn AVM'de bombalı bir eylem gerçekleştirileceği ihbarı var. Emniyet Genel Müdürlüğü'nden gelen bilgilere göre, ihbarın ciddi olduğu düşünülüyor.",
        answers: [
            {
                text: "Diğerleri gibi bu da bir aldatmaca olabilir",
                effect: {
                    budget: -20,
                    internalSecurity: -35,
                    internationalRelations: -10,
                },
                listID: "savunma1",
            },
            {
                text: "Güvenlik güçlerini bölgeye yönlendirin",
                effect: {
                    budget: -10,
                    internalSecurity: +10,
                    internationalRelations: +10,
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
];
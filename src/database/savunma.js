import savunmaBakani from "../../public/ministers/savunma-bakani.webp";
// 2 soru var
export const savunmaQuestions = [
    {
        id: 120,
        question: "Yerli savunma sanayi projelerini hızlandırmak istiyoruz. Bu, uzun vadede askeri gücümüzü artırır, ancak kısa vadede bütçeyi zorlayabilir.",
        answers: [
            {
                text: "Yatırımlar yapılacak",
                effect: {
                    budget: -15,
                    internalSecurity: +10,
                }
            },
            {
                text: "Bütçemiz bunu kaldırmaz",
                effect: {
                    budget: +15,
                    internalSecurity: -20,
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
    {
        id: 121,
        question: "İsimsiz bir ihbara göre bugün öğlen saat 13.30'da PlazarInn AVM'de bombalı bir eylem gerçekleştirilecekmiş. Aksiyon almalı mıyız ?",
        answers: [
            {
                text: "Diğerleri gibi bu da bir aldatmaca olabilir",
                effect: {
                    budget: -15,
                    internalSecurity: -20,
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
                },
                listID: "savunma2",
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
];
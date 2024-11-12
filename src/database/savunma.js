import savunmaBakani from "../../public/ministers/savunma-bakani.webp";

export const savunmaQuestions = [
    {
        id: 62,
        question: "Yerli savunma sanayi projelerini hızlandırmak istiyoruz. Bu, uzun vadede askeri gücümüzü artırır, ancak kısa vadede bütçeyi zorlayabilir. Ne yapalım?",
        answers: [
            {
                text: "Yatırımları yapmalıyız",
                effect: {
                    budget: -20,
                    internalSecurity: +20,
                    internationalRelations: +10,
                }
            },
            {
                text: "Bütçemiz bunu kaldırmaz",
                effect: {
                    budget: +20,
                    internalSecurity: -20,
                    internationalRelations: -10,
                }
            }
        ],
        title: "Milli Savunma Bakanı",
        photo: savunmaBakani,
    },
];
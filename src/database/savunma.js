import savunmaBakani from "../../public/ministers/savunma-bakani.png";

export const savunmaQuestions = [
    {
        id: 62,
        question: "Sayın Cumhurbaşkanım, yerli savunma sanayii projelerini hızlandırmak istiyoruz. Bu, uzun vadede askeri gücümüzü artırır, ancak kısa vadede bütçeyi zorlayabilir. Ne yapalım?",
        answers: [
            {
                text: "Yerli savunma sanayisine yatırım yapın, askeri gücümüzü artırın.",
                effect: {
                    budget: -20,
                    internalSecurity: +20,
                    internationalRelations: +10,
                }
            },
            {
                text: "Savunma sanayisini yavaşlatın, bütçeyi koruyalım.",
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
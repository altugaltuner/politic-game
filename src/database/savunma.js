import savunmaBakani from "../../public/ministers/savunma-bakani.png";

export const savunmaQuestions = [
    {
        id: 62,
        question: "Sayın Cumhurbaşkanım, yerli savunma sanayi projelerini hızlandırmak istiyoruz. Bu, uzun vadede askeri gücümüzü artırır, ancak kısa vadede bütçeyi zorlayabilir. Ne yapalım?",
        answers: [
            {
                text: "Yatırımları yapmamız elzemdir",
                effect: {
                    budget: -20,
                    internalSecurity: +20,
                    internationalRelations: +10,
                }
            },
            {
                text: "Bütçemiz şu durumda bunu kaldıramaz",
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
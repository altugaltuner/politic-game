// import developer from "../../public/non-ministers/developer.webp";
// import elonMusk from "../../public/non-ministers/elon-musk.webp";
// import emekli from "../../public/non-ministers/emekli.webp";
// import genelkurmay from "../../public/non-ministers/genelkurmay.webp";
// import putin from "../../public/non-ministers/putin.webp";
// import reporter from "../../public/non-ministers/reporter.webp";
// import trump from "../../public/non-ministers/trump.webp";
// import tuik from "../../public/non-ministers/TUIK.webp";
import nebati from "../../public/non-ministers/nureddin-nebati.webp";
//import rtukBaskan from "../../public/non-ministers/rtuk-baskani.webp";

// 1 soru var
export const nonMinisters = [
    // {
    //     id: 551,
    //     question: "Dün akşam yayınlanan dizideki bazı sahnelerden ötürü diziyi yayından kaldırmak istiyoruz. ",
    //     answers: [
    //         {
    //             text: "Yerinde bir karar",
    //             effect: {
    //                 publicSupport: -20,
    //             }
    //         },
    //         {
    //             text: "Özgürlükler kısıtlanmamalı",
    //             effect: {
    //                 publicSupport: +10,
    //             },
    //         }
    //     ],
    //     title: "RTÜK Başkanı",
    //     photo: rtukBaskan,
    // },
    {
        id: 552,
        question: "Sayın Cumhurbaşkanım, ekonomi yönetimi konusunda kendime çok güveniyorum. Bakana danışmanlık yapmamı ister miydiniz?",
        answers: [
            {
                text: "Tabi ki isterim. Yardımın dokunabilir.",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                }
            },
            {
                text: "Hayır, teşekkürler.",
                effect: {
                    publicSupport: +15,
                    budget: 0,
                },
            }
        ],
        title: "Eski Ekonmi Bakanı",
        photo: nebati,
    },
];
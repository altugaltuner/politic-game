// import developer from "../../public/non-ministers/developer.webp";
// import elonMusk from "../../public/non-ministers/elon-musk.webp";
// import emekli from "../../public/non-ministers/emekli.webp";
// import genelkurmay from "../../public/non-ministers/genelkurmay.webp";
// import putin from "../../public/non-ministers/putin.webp";
// import reporter from "../../public/non-ministers/reporter.webp";
// import trump from "../../public/non-ministers/trump.webp";
// import tuik from "../../public/non-ministers/TUIK.webp";
import nebati from "../../public/non-ministers/nureddin-nebati.webp";
import rtukBaskan from "../../public/non-ministers/rtuk-baskani.webp";
export const nonMinisters = [
    {
        id: 551,
        question: "Dün akşam yayınlanan dizideki bazı sahneler aile yapısını bozduğu için diziyi yayından kaldırmak istiyoruz. ",
        answers: [
            {
                text: "Yerinde bir karar",
                effect: {
                    publicSupport: -20,
                }
            },
            {
                text: "Önce psiko-sosyal etkilerini araştırmalıyız",
                effect: {
                    publicSupport: +10,
                },
            }
        ],
        title: "RTÜK Başkanı",
        photo: rtukBaskan,
    },
    {
        id: 552,
        question: "Sayın Cumhurbaşkanım, ekonomi yönetimi konusunda kendime çok güveniyorum. Bakanla birlikte çalışmamızı ister misiniz?",
        answers: [
            {
                text: "Tabi ki isterim. Yardımın dokunabilir.",
                effect: {
                    publicSupport: -20,
                    budget: -25,
                }
            },
            {
                text: "Hayır, teşekkürler.",
                effect: {
                    publicSupport: +10,
                    budget: 0,
                },
            }
        ],
        title: "Eski Ekonmi Bakanı",
        photo: nebati,
    },
];
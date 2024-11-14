import developer from "../../public/non-ministers/developer.webp";
import elonMusk from "../../public/non-ministers/elon-musk.webp";
import emekli from "../../public/non-ministers/emekli.webp";
import genelkurmay from "../../public/non-ministers/genelkurmay.webp";
import putin from "../../public/non-ministers/putin.webp";
import reporter from "../../public/non-ministers/reporter.webp";
import rtukBaskan from "../../public/non-ministers/rtuk-baskani.webp";
import trump from "../../public/non-ministers/trump.webp";
import tuik from "../../public/non-ministers/TUIK.webp";
import nebati from "../../public/non-ministers/nureddin-nebati.webp";

export const nonMinisters = [
    {
        id: 550,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    publicSupport: +10,
                    budget: -15,
                    infrastructureAndEnvironment: +20,
                },
                listID: "",
            },
            {
                text: "",
                effect: {
                    publicSupport: -10,
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                }
            }
        ],
        title: "",
        photo: developer,

    },
    {
        id: 551,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                },
            }
        ],
        title: "",
        photo: elonMusk,
    },
    {
        id: 551,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                },
            }
        ],
        title: "",
        photo: emekli,
    },
    {
        id: 551,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                },
            }
        ],
        title: "",
        photo: genelkurmay,
    },
    {
        id: 551,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                },
            }
        ],
        title: "",
        photo: putin,
    },
    {
        id: 551,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                },
            }
        ],
        title: "",
        photo: reporter,
    },
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
        id: 551,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                },
            }
        ],
        title: "",
        photo: trump,
    },
    {
        id: 551,
        question: "",
        answers: [
            {
                text: "",
                effect: {
                    publicSupport: +20,
                    budget: -15,
                }
            },
            {
                text: "",
                effect: {
                    publicSupport: -25,
                    budget: +25,
                },
            }
        ],
        title: "",
        photo: tuik,
    },
    {
        id: 551,
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
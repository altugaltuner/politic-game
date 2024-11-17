// import developer from "../../public/non-ministers/developer.webp";
import elonMusk from "../../public/non-ministers/elon-musk.webp";
import emekli from "../../public/non-ministers/emekli.webp";
// import genelkurmay from "../../public/non-ministers/genelkurmay.webp";
import putin from "../../public/non-ministers/putin.webp";
// import reporter from "../../public/non-ministers/reporter.webp";
import trump from "../../public/non-ministers/trump.webp";
// import tuik from "../../public/non-ministers/TUIK.webp";
import nebati from "../../public/non-ministers/nureddin-nebati.webp";
//import rtukBaskan from "../../public/non-ministers/rtuk-baskani.webp";

// 1 soru var
export const nonMinisters = [
    {
        id: 550,
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
                    publicSupport: +5,
                    budget: 0,
                },
            }
        ],
        title: "Eski Ekonmi Bakanı",
        photo: nebati,
    },
    {
        id: 551,
        question: "Sayın Başkan, ülkenize global internet özelinde altyapı kurmak istiyorum. Ancak bu yatırım için bir şartım var. Tüm vatandaşların kullanıcı verileri sadece benim erişimimde olacak.",
        answers: [
            {
                text: "Bu kabul edilemez",
                effect: {
                    budget: -10,
                    internalSecurity: +15,
                    internationalRelations: -10,
                    infrastructureAndEnvironment: -10,
                }
            },
            {
                text: "Anlaştık. Altyapıyı kurabilirsin.",
                effect: {
                    budget: +10,
                    internalSecurity: -15,
                    internationalRelations: +10,
                    infrastructureAndEnvironment: +10,
                },
            }
        ],
        title: "Elon Musk",
        photo: elonMusk,
    },
    {
        id: 552,
        question: "Cumhurbaşkanım, zor günlerden geçiyoruz. Emekli maaşımız yetmiyor, yardım istiyoruz.",
        answers: [
            {
                text: "Hepimiz zor günlerden geçiyoruz.",
                effect: {
                    budget: +10,
                    publicSupport: -10,
                }
            },
            {
                text: "Emeklimizi ezdirmeyiz.",
                effect: {
                    budget: -10,
                    publicSupport: +10,
                },
            }
        ],
        title: "Emekli",
        photo: emekli,
    },
    {
        id: 553,
        question: "Ülkelerimiz arasındaki ticaret hacmini artırmak için yapacağımız bu anlaşma için bir araya gelmemiz iyi oldu. Seninle büyük işler başarabiliriz.",
        answers: [
            {
                text: "Kesinlikle, işbirliğimiz uzun soluklu olacak.",
                effect: {
                    budget: +10,
                    internationalRelations: +10,
                }
            },
            {
                text: "Tabii ki, müttefik olarak birlikte daha güçlüyüz.",
                effect: {
                    budget: +10,
                    internationalRelations: +10,
                },
            }
        ],
        title: "Trump",
        photo: trump,
    },
    {
        id: 553,
        question: "S400 füzelerini satın alma konusunda kararlı mısınız? Çünkü bu durum sizin ABD ile ilişkilerinizi olumsuz etkileyebilir.",
        answers: [
            {
                text: "Evet, kararımız kesindir.",
                effect: {
                    budget: -15,
                    internationalRelations: +15,
                    internalSecurity: +15,
                }
            },
            {
                text: "Biraz daha düşüneceğiz.",
                effect: {
                    budget: +10,
                    internationalRelations: 0,
                    internalSecurity: -10,
                },
            }
        ],
        title: "Putin",
        photo: putin,
    },
];
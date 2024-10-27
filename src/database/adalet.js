import adaletBakanı from "../../public/ministers/adalet-bakani.png";
import mainPic from "../../public/ministers/main.png";

export const adaletQuestions = [
    {
        id: 1,
        question: "Türkiye Simülasyonu başlıyor. Hazır Mısın ?",
        answers: [
            {
                text: "Hadi Başlayalım",
                effect: {
                }
            },
            {
                text: "Yolla Gelsin!",
                effect: {
                }
            }
        ],
        title: "Kreatör",
        photo: mainPic
    },
    {
        id: 2,
        question: "Sayın Cumhurbaşkanım, uyuşturucu ve kara para aklama suçluları yakalanıyor ancak serbest bırakılıyor. Daha etkili bir mücadele için ne yapmalıyız?",
        answers: [
            {
                text: "Ağır cezalar getirin.",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                }
            },
            {
                text: "Suçlularla işbirliğine gidin.",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı
    },
    {
        id: 3,
        question: "Ülkedeki kadınlar eski eşlerinden, sevgililerinden veya yakınlarından korunamıyor ve kadın cinayetleri artıyor. Nasıl bir adım atmalıyız?",
        answers: [
            {
                text: "Kadın koruma yasalarını güçlendirin.",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                    budget: -20,
                }
            },
            {
                text: "Mevcut yasalarla devam edin.",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                    budget: +20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı
    },
    {
        id: 4,
        question: "Bazı bölgelerde suç oranları artıyor. Daha fazla yargı mensubu atayıp bu bölgelerde güvenliği artırabiliriz, ancak bu adım bütçemize ek yük getirebilir.",
        answers: [
            {
                text: "Daha fazla yargı mensubu atayın.",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +20,
                    budget: -20,
                }
            },
            {
                text: "Şimdilik takip etmemiz yeterli.",
                effect: {
                    internalSecurity: -20,
                    publicSupport: -20,
                    budget: +20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı
    },
    {
        id: 5,
        question: "Sayın Cumhurbaşkanım, hapishaneler dolup taşıyor ve cezaevi şartları giderek kötüleşiyor.",
        answers: [
            {
                text: "Yeni cezaevleri inşa edin",
                effect: {
                    internalSecurity: +20,
                    budget: -20,
                    publicSupport: +20,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Alternatif cezalar üzerine çalışın",
                effect: {
                    internalSecurity: +20,
                    budget: +20,
                    publicSupport: -20,
                    infrastructureAndEnvironment: -20,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı
    },

];
import adaletBakanı from "../../public/ministers/adalet.png";

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
                text: "Hadi Başlayalım",
                effect: {
                }
            }
        ],
        title: "Altuğ",
        photo: adaletBakanı
    },
    {
        id: 2,
        question: "Sayın Cumhurbaşkanım, uyuşturucu ve para aklama suçlarına karışan insanlar yakalanıyor, ancak kısa süre sonra serbest bırakılıyor. Bu suçlarla daha etkin mücadele etmemiz gerekiyor. Ne yapalım?",
        answers: [
            {
                text: "Ağır cezalar getirin.",
                effect: {
                    internalSecurity: +10,
                    publicSupport: +10,
                    budget: -10,
                }
            },
            {
                text: "Mevcut yasalarla devam edin.",
                effect: {
                    internalSecurity: -10,
                    publicSupport: -10,
                    budget: +10,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı
    },
    {
        id: 3,
        question: "Sayın Cumhurbaşkanım, kadınlar eski eşlerinden, sevgililerinden veya diğer yakınlarından korunamıyor ve kadın cinayetleri artıyor. Kadınların korunması için ne yapalım?",
        answers: [
            {
                text: "Kadın koruma yasalarını güçlendirin.",
                effect: {
                    internalSecurity: +10,
                    publicSupport: +10,
                    budget: -15,
                }
            },
            {
                text: "Mevcut yasalarla devam edin.",
                effect: {
                    internalSecurity: -10,
                    publicSupport: -10,
                    budget: +15,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı
    },
    {
        id: 4,
        question: "Sayın Cumhurbaşkanım, bazı bölgelerde suç oranları artıyor. Daha fazla yargı mensubu atayıp bu bölgelerde güvenliği artırabiliriz, ancak bu adım bütçemize ek yük getirebilir.",
        answers: [
            {
                text: "Daha fazla yargı mensubu atayın ve güvenliği artırın.",
                effect: {
                    internalSecurity: +20,
                    publicSupport: +5,
                    budget: -15,
                }
            },
            {
                text: "Bütçeyi korumak için şu anda yargı mensubu atamayın.",
                effect: {
                    internalSecurity: -10,
                    publicSupport: -10,
                    budget: +10,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı
    },
    {
        id: 5,
        question: "Sayın Cumhurbaşkanım, hapishaneler dolup taşıyor ve cezaevi şartları giderek kötüleşiyor. Yeni cezaevleri inşa edelim mi?",
        answers: [
            {
                text: "Yeni cezaevleri inşa edin, mahkumların şartları iyileştirilmeli.",
                effect: {
                    internalSecurity: +10,
                    budget: -10,
                    publicSupport: +5,
                }
            },
            {
                text: "Cezaevleri yerine alternatif cezalar üzerine çalışın.",
                effect: {
                    internalSecurity: +5,
                    budget: -10,
                    publicSupport: 0,
                }
            }
        ],
        title: "Adalet Bakanı",
        photo: adaletBakanı
    },

];
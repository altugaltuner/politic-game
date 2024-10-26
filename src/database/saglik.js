import saglikBakani from "../../public/ministers/saglik-bakani.png";

export const saglikQuestions = [
    {
        id: 140,
        question: "Sayın Cumhurbaşkanım, şehir hastanelerindeki hasta yoğunluğu artıyor ve sağlık hizmetleri yavaşlıyor.",
        answers: [
            {
                text: "Yeni hastaneler inşa edin.",
                effect: {
                    publicSupport: +15,
                    budget: -30,
                    infrastructureAndEnvironment: +30,
                }
            },
            {
                text: "Mevcut hastane kapasitelerini artırın.",
                effect: {
                    publicSupport: +10,
                    budget: +20,
                    infrastructureAndEnvironment: +15,
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 142,
        question: "Sayın Cumhurbaşkanım, doktorlar ve hemşireler yetersiz çalışma koşullarından şikayet ediyor.",
        answers: [
            {
                text: "Çalışanların koşullarını iyileştirin",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    internalSecurity: +5,
                }
            },
            {
                text: "Yeni sağlık personelleri alın",
                effect: {
                    publicSupport: +5,
                    budget: -15,
                    internalSecurity: +5,
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    },
    {
        id: 144,
        question: "Sayın Cumhurbaşkanım, Türkiye’de psikolojik sağlık sorunları giderek artıyor.",
        answers: [
            {
                text: "Psikolojik destek hizmetlerini yaygınlaştırın",
                effect: {
                    publicSupport: +30,
                    internalSecurity: +10,  // Toplumsal huzur artar, sosyal problemler azalır
                    budget: -10,  // Psikolojik destek hizmetlerinin genişletilmesi maliyetlidir
                }
            },
            {
                text: "Daha fazla ilaç ithal edin.",
                effect: {
                    publicSupport: -10,  // Halk yerli ürünleri tercih eder
                    internalSecurity: -10,
                    budget: -30,  // Rehberlik hizmetlerinin genişletilmesi maliyetlidir
                }
            }
        ],
        title: "Sağlık Bakanı",
        photo: saglikBakani,
    }
];
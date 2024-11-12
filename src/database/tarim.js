import tarimBakani from "../../public/ministers/tarim-bakani.webp";

export const tarimQuestions = [
    {
        id: 70,
        question: "Son yıllarda kuraklık artıyor ve tarımsal üretim ciddi şekilde düşüyor. Tarıma büyük bir teşvik ve su kaynaklarına yatırım yapmamız gerek.",
        answers: [
            {
                text: "Yeni barajlar inşa edilmeli",
                effect: {
                    agriculturalProduction: +10,
                    budget: -15,
                }
            },
            {
                text: "Başka önceliklerimiz var, erteleyin",
                effect: {
                    agriculturalProduction: -10,
                    budget: +15,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
        link: "https://www.bbc.com/turkce/articles/c0j8n48qwe8o#:~:text=2023'te%20d%C3%BCnyan%C4%B1n%20yakla%C5%9F%C4%B1k%20y%C3%BCzde,ne%20kadar%20h%C4%B1zland%C4%B1%C4%9F%C4%B1n%C4%B1%20ortaya%20koyuyor."
    },
    {
        id: 72,
        question: "Tarımsal üretim ithalata bağımlı hale geliyor.Bunun önüne geçmeliyiz",
        answers: [
            {
                text: "Çiftçiye vergi indirimi yapın",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    agriculturalProduction: +25,
                    internationalRelations: +10,
                },
            },
            {
                text: "İthal ürünlerden ek vergi alın",
                effect: {
                    publicSupport: +10,
                    budget: +5,
                    agriculturalProduction: +15,
                    internationalRelations: -10,
                },
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
        link: "https://www.birgun.net/haber/turkiye-tarimda-neden-ithalata-bagimli-hale-geldi-259690"
    },
    {
        id: 73,
        question: "Orman yangınları her yıl artıyor ve ciddi kayıplar yaşanıyor. Nasıl önüne geçebiliriz ?",
        answers: [
            {
                text: "Yangın helikopterleri alacağız",
                effect: {

                    budget: -10,
                    agriculturalProduction: +20,
                }
            },
            {
                text: "Yeşil alanlardaki denetimleri artırın",
                effect: {

                    budget: +10,
                    agriculturalProduction: +10,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
        link: "https://www.aa.com.tr/tr/gundem/turkiyede-orman-yanginlari-gecen-yila-gore-yuzde-78-artti/3307498"
    },
    {
        id: 74,
        question: "Sayın Cumhurbaşkanım, tarımda genç iş gücü eksikliği yaşanıyor.",
        answers: [
            {
                text: "Tarıma teşvik projeleri başlatın",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    agriculturalProduction: +10,
                }
            },
            {
                text: "Açığı göçmen işçilerle doldurun",
                effect: {
                    publicSupport: -20,
                    budget: -20,
                    agriculturalProduction: +25,
                },
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
        link: "https://www.anadoluizlenimleri.com/gencler-neden-tarimsal-uretime-katilmak-istemiyor"
    },
    {
        id: 75,
        question: "Sayın Cumhurbaşkanım, organik tarım ve sürdürülebilir üretim yöntemlerine geçiş yapmak istiyoruz.",
        answers: [
            {
                text: "Kademeli geçişe başlayın",
                effect: {
                    budget: -20,
                    agriculturalProduction: +10,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Mevcut sistemle devam edin",
                effect: {
                    budget: +20,
                    agriculturalProduction: -10,
                    infrastructureAndEnvironment: -20,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
        link: "https://dergipark.org.tr/tr/download/article-file/253316"
    }
];
import tarimBakani from "../../public/ministers/tarim-bakani.webp";

export const tarimQuestions = [
    {
        id: 70,
        question: "Sayın Cumhurbaşkanım, son yıllarda kuraklık artıyor ve tarımsal üretim ciddi şekilde düşüyor. Tarıma büyük bir teşvik ve su kaynaklarına yatırım yapmamız gerek.",
        answers: [
            {
                text: "Yeni sulama projeleri geliştireceğiz",
                effect: {
                    agriculturalProduction: +10,
                    budget: -15,
                }
            },
            {
                text: "Şu an başka önceliklerimiz var, erteleyin",
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
        id: 71,
        question: "Sayın Cumhurbaşkanım, kuraklık nedeniyle su kaynakları azalıyor ve tarımsal üretim tehlikeye giriyor.",
        answers: [
            {
                text: "Barajların doluluk oranı raporları nerede ?",
                effect: {
                    publicSupport: +15,
                    budget: -25,
                    agriculturalProduction: +20,
                    infrastructureAndEnvironment: +10,
                }
            },
            {
                text: "Çiftçilere su tasarrufu eğitimi verilebilir",
                effect: {
                    publicSupport: +10,
                    budget: -10,
                    agriculturalProduction: -20,
                    infrastructureAndEnvironment: +5,
                }
            }
        ],
        title: "Tarım Bakanı",
        photo: tarimBakani,
        link: "https://www.greenpeace.org/turkey/blog/yagislar-azaliyor-kuraklik-tehdidi-artiyor/"
    },
    {
        id: 72,
        question: "Sayın Cumhurbaşkanım, tarımsal üretim ithalata bağımlı hale geliyor.Bunun önüne geçmeliyiz",
        answers: [
            {
                text: "Çiftçilere vergi indirimleri yapılsın",
                effect: {
                    publicSupport: +10,
                    budget: -20,
                    agriculturalProduction: +25,
                    internationalRelations: +10,
                },
            },
            {
                text: "İthal ürünlerden ek vergi alacağız",
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
        question: "Sayın Cumhurbaşkanım, orman yangınları her yıl artıyor ve ciddi kayıplar yaşanıyor.",
        answers: [
            {
                text: "Yeni yangın söndürme sistemleri satın almalıyız",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    infrastructureAndEnvironment: +20,
                    internalSecurity: +10,
                    agriculturalProduction: +20,
                }
            },
            {
                text: "Yeşil alanlardaki denetimleri artırın",
                effect: {
                    publicSupport: -20,
                    budget: +10,
                    infrastructureAndEnvironment: +10,
                    internalSecurity: +5,
                    agriculturalProduction: -20,
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
                text: "Gençleri tarıma teşvik edecek projeler başlatın",
                effect: {
                    publicSupport: +20,
                    budget: +20,
                    agriculturalProduction: +20,
                    internalSecurity: +10,
                }
            },
            {
                text: "İş gücü açığını göçmen işçilerle dolduracağız",
                effect: {
                    publicSupport: -10,
                    budget: -20,
                    agriculturalProduction: +15,
                    internalSecurity: -5,
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
                text: "Kademeli olarak bu mümkündür",
                effect: {
                    publicSupport: +20,
                    budget: -20,
                    agriculturalProduction: +10,
                    infrastructureAndEnvironment: +20,
                }
            },
            {
                text: "Mevcut tarım yöntemleri gayet yeterlidir",
                effect: {
                    publicSupport: +5,
                    budget: +10,
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
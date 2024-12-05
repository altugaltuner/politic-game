import developer from "../../public/non-ministers/developer.webp";
import elonMusk from "../../public/non-ministers/elon-musk.webp";
import emekli from "../../public/non-ministers/emekli.webp";
import genelkurmay from "../../public/non-ministers/genelkurmay.webp";
import putin from "../../public/non-ministers/putin.webp";
// import reporter from "../../public/non-ministers/reporter.webp";
import trump from "../../public/non-ministers/trump.webp";
// import tuik from "../../public/non-ministers/TUIK.webp";
import nebati from "../../public/non-ministers/nureddin-nebati.webp";
import rtukBaskan from "../../public/non-ministers/rtuk-baskani.webp";
import liamNeeson from "../../public/non-ministers/liam-neeson.webp";
import chiefAdvisor from "../../public/non-ministers/chief-advisor.webp";
import czechElci from "../../public/non-ministers/cek-buyukelci.webp";
import islamicLeader from "../../public/non-ministers/islamic-cult-leader.webp";
import vasilLevski from "../../public/non-ministers/vasil-levski.webp";

export const nonMinisters = {
    tr: [
        {
            id: 550,
            question: "Sayın Cumhurbaşkanım, ekonomi yönetimi konusunda kendime çok güveniyorum. Bakana danışmanlık yapmamı ister miydiniz?",
            answers: [
                {
                    text: "Tabi ki isterim. Yardımın dokunabilir",
                    effect: {
                        publicSupport: -20,
                        budget: -25,
                    }
                },
                {
                    text: "Hayır, teşekkürler",
                    effect: {
                        publicSupport: +5,
                        budget: 0,
                    },
                }
            ],
            title: "Eski Ekonomi Bakanı",
            photo: nebati,
            level: 1,
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
                    text: "Anlaştık. Altyapıyı kurabilirsin",
                    effect: {
                        budget: +10,
                        internalSecurity: -20,
                        internationalRelations: +10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 552,
            question: "Cumhurbaşkanım, zor günlerden geçiyoruz. Emekli maaşımız yetmiyor, yardım istiyoruz.",
            answers: [
                {
                    text: "Hepimiz zor günlerden geçiyoruz",
                    effect: {
                        budget: +10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Emeklimizi ezdirmeyiz",
                    effect: {
                        budget: -10,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Emekli Vatandaş",
            photo: emekli,
            level: 2,
        },
        {
            id: 553,
            question: "Ülkelerimiz arasındaki ticaret hacmini artırmak için yapacağımız bu anlaşma için bir araya gelmemiz iyi oldu. Seninle büyük işler başarabiliriz.",
            answers: [
                {
                    text: "Kesinlikle, işbirliğimiz uzun soluklu olacak",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Tabii ki, müttefik olarak daha güçlüyüz",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "Donald Trump",
            photo: trump,
            level: 1,
        },
        {
            id: 554,
            question: "S400 füzelerini satın alma konusunda kararlı mısınız? Bizden yana bir problem yoktur ancak bu ticaret sizin ABD ile ilişkilerinizi olumsuz etkileyebilir.",
            answers: [
                {
                    text: "Evet, kararımız kesindir",
                    effect: {
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: +15,
                    },
                    listID: "S400",
                },
                {
                    text: "Biraz daha düşüneceğiz",
                    effect: {
                        budget: +10,
                        internationalRelations: 0,
                        internalSecurity: -20,
                    },
                }
            ],
            title: "Vladimir Putin",
            photo: putin,
            level: 1,
        },
        {
            id: 555,
            question: "Sayın Cumhurbaşkanı, ülkenizdeki internet sansürü konusunda biraz daha esnek olmanızı rica ediyorum. Bu durum yatırımcılarımızı olumsuz etkiliyor.",
            answers: [
                {
                    text: "Halkımızın güvenliği için bu önlemleri alacağız",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Biraz daha esnek olabiliriz",
                    effect: {
                        budget: +20,
                        publicSupport: 0,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "PixelMind CEO'su",
            photo: developer,
            level: 2,
        },
        {
            id: 556,
            question: "Merhabalar. İstanbul'da bir film çekimi yapmak istiyoruz. Özellikle Kapalıçarşı'da bir sahne çekmek istiyoruz. Bu hem İstanbul'un tanıtımı için iyi olacak hem de filmimizi ilgi çekici kılacak.",
            answers: [
                {
                    text: "Tabi ki, buyrun başlayın",
                    effect: {
                        budget: +20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                    listID: "liamNeeson",
                },
                {
                    text: "Buna onay vermeyeceğim",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: +20,
                    },
                }
            ],
            title: "Liam Neeson",
            photo: liamNeeson,
            level: 2,
        },
        {
            id: 557,
            question: "Sayın Cumhurbaşkanı, komşu ülke Nordovia sınırımıza yakın bir bölgede askeri tatbikatlar düzenliyor. Bu duruma nasıl bir tepki vereceğiz?",
            answers: [
                {
                    text: "Sınırda asker sayısını artırın",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Görmezden geleceğiz",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Genelkurmay Başkanı",
            photo: genelkurmay,
            level: 2,
        },
        {
            id: 558,
            question: "Cumhurbaşkanım, ana muhalefet parti lideri mecliste arkanızdan ileri geri konuştu, size hırsız dedi.",
            answers: [
                {
                    text: "Hakaret davası açacağım.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Fikir özgürlüğüne saygı duyacağım.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Cumhurbaşkanı Baş Danışmanı",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 559,
            question: "Ülkenizdeki mülteciler ve ekonominiz yüzünden endişelerimiz var. Bazı öğrencileriniz buradaki okullara kabul aldı fakat vize vermeyeceğiz.",
            answers: [
                {
                    text: "Ülkenize yaptırım uygulayacağım.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Prag konsolosluğumuzu kapatıyoruz.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Prag Büyükelçisi",
            photo: czechElci,
            level: 2,
        },
        {
            id: 560,
            question: "Cumhurbaşkanım, birlikte çalıştığınız eski Başbakan Relani, sizi hakkınızda bildiklerini açıklamakla tehdit ediyor.",
            answers: [
                {
                    text: "Hakkımda ne biliyorsa açıklasın",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "El altından biraz para yedirin",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Cumhurbaşkanı Baş Danışmanı",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 561,
            question: "Başkan merhaba. İlimizde faaliyet gösteren bazı kafirleri cezalandırmak istiyoruz. Bize karışmamanızı tavsiye ederim.",
            answers: [
                {
                    text: "Burası hukuk devleti, haddini bil",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Orası senden sorumlu, gereğini yap",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Yenfel Tarikat Lideri Ahmad",
            photo: islamicLeader,
            level: 2,
        },
        {
            id: 562,
            question: "Yenfel Tarikatı ülkemizin önemli idari birimlerine sızmış durumda. Birçok bakanlıkta ve idari makamlarda nüfuzları artıyor...",
            answers: [
                {
                    text: "Birkaçına sembolik ceza verin",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Dokunursak başımıza iş açarlar",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Cumhurbaşkanı Baş Danışmanı",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 563,
            question: "Başkan, boş ver F35 almayı, onların modası geçti artık. Sana son teknoloji robot askerlerimiz satayım. Ne dersin?",
            answers: [
                {
                    text: "Tamam, alalım bakalım.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "İhtiyacımız yok, teşekkürler.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 564,
            question: "Her yönetimin arkasında, onu sonuna kadar savunacak bir basın organına ihtiyacı vardır başkan. Eğer bize arka çıkarsan bunu senin için yapabiliriz.",
            answers: [
                {
                    text: "Basın özgürlüğünden taviz veremem",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Tamam, çalışmalarına başla",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "KERPAL TV Yöneticisi",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Başkanım, meclisteki toplantılar ve ülkenin yükünü çekmek bize zor geliyor. Maaş arttırımı istiyoruz.",
            answers: [
                {
                    text: "Zammı yapacağım",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Buna bütçe ayıramam",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Meclis Milletvekilleri",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: "Başkent dışındaki dağ evinizin korunması adına özel harekat birimlerini bölgede konuşlandırmayı tavsiye ediyorum. İzninizi bekliyorum",
            answers: [
                {
                    text: "Ekipleri derhal görevlendirin",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Bir dağ evi için bu gereksiz",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Cumhurbaşkanı Baş Danışmanı",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 567,
            question: "Uzun uzun düşündükten sonra haksız olduğumu farkettim. Sizin adınıza partinizde görev almak istiyorum. Kabul eder misiniz?",
            answers: [
                {
                    text: "Tabi ki, herkese kapımız açık",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Partide boş yerimiz yok",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Eski Muhalif Lider Vasil Levski",
            photo: vasilLevski,
            level: 2,
        },
        {
            id: 568,
            question: "Kocacığım, şu meşhur Köfteci Vertuna son zamanlarda muhalif bir ses olmaya başladı. Ne yapmalıyız?",
            answers: [
                {
                    text: "Kaçak et iddiasıyla devlet zimmetine geçirelim.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "İyi bir rüşvet teklif edelim",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Eşiniz Dora",
            photo: chiefAdvisor, //değiştir
            level: 2,
        },
        {
            id: 569,
            question: "Ülkenin en popüler dizilerinden biri olan 'Yasak Aşk' dizisini kaldırmak istiyorum. Bu dizi, aile yapımızı olumsuz etkiliyor.",
            answers: [
                {
                    text: "Diziyi kaldırın",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Yayında kalsın",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "TV Denetleme Kurulu Başkanı",
            photo: rtukBaskan, //değiştir
            level: 2,
        },
    ],
    en: [
        {
            id: 550,
            question: "Mr. President, I am very confident in my economic management skills. Would you like me to advise the minister?",
            answers: [
                {
                    text: "Of course",
                    effect: {
                        publicSupport: -20,
                        budget: -25,
                    }
                },
                {
                    text: "No, thank you",
                    effect: {
                        publicSupport: +5,
                        budget: 0,
                    },
                }
            ],
            title: "Former Minister of Economy",
            photo: nebati,
            level: 1,
        },
        {
            id: 551,
            question: "Mr. President, I propose a global internet infrastructure, but with one condition: exclusive access to the user data of all citizens.",
            answers: [
                {
                    text: "This is unacceptable",
                    effect: {
                        budget: -10,
                        internalSecurity: +15,
                        internationalRelations: -10,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Agreed",
                    effect: {
                        budget: +10,
                        internalSecurity: -20,
                        internationalRelations: +10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 552,
            question: "Mr. President, we are going through tough times. Our pension is not enough. We urgently need help.",
            answers: [
                {
                    text: "I will increase pensions",
                    effect: {
                        budget: +10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "You will have to endure",
                    effect: {
                        budget: -10,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Retired Citizen",
            photo: emekli,
            level: 2,
        },
        {
            id: 553,
            question: "It is good that we have met for this agreement to increase trade volume between our countries.",
            answers: [
                {
                    text: "I agree with you",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "I am unsure about this agreement",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "Donald Trump",
            photo: trump,
            level: 1,
        },
        {
            id: 554,
            question: "Are you determined to purchase the S400 missiles? There is no issue on our part, but it could harm your relations with the United States.",
            answers: [
                {
                    text: "Yes, our decision is final",
                    effect: {
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: +15,
                    },
                    listID: "S400",
                },
                {
                    text: "We will think about it a bit more",
                    effect: {
                        budget: +10,
                        internationalRelations: 0,
                        internalSecurity: -20,
                    },
                }
            ],
            title: "Vladimir Putin",
            photo: putin,
            level: 1,
        },
        {
            id: 555,
            question: "Mr. President, I urge you to ease internet censorship as it negatively affects our investors.",
            answers: [
                {
                    text: "We cannot do that",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "We will consider it",
                    effect: {
                        budget: +20,
                        publicSupport: 0,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "CEO of PixelMind",
            photo: developer,
            level: 2,
        },
        {
            id: 556,
            question: "We would like to film in Istanbul, especially in the Grand Bazaar. It will promote the city and make our movie more captivating.",
            answers: [
                {
                    text: "Go ahead, start",
                    effect: {
                        budget: +20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                    listID: "liamNeeson",
                },
                {
                    text: "I will not approve this",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: +20,
                    },
                }
            ],
            title: "Liam Neeson",
            photo: liamNeeson,
            level: 2,
        },
        {
            id: 557,
            question: "Mr. President, our neighboring country Nordovia is conducting military drills near our border as if it were a show of force. Should we respond?",
            answers: [
                {
                    text: "Increase the number of soldiers at the border",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Ignore this incident",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chief of General Staff",
            photo: genelkurmay,
            level: 2,
        },
        {
            id: 558,
            question: "Mr. President, the leader of the main opposition party spoke badly about you in the parliament and called you a thief.",
            answers: [
                {
                    text: "I will file a defamation lawsuit",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "I will respect freedom of speech",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chief Advisor to the President",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 559,
            question: "We are concerned about the refugees in your country and your economy. Some of your students have been accepted into schools here, but we will not issue visas.",
            answers: [
                {
                    text: "I will impose sanctions on your country.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "We are closing our consulate in Prague.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ambassador to Prague",
            photo: czechElci,
            level: 2,
        },
        {
            id: 560,
            question: "Mr. President, former Prime Minister Relani, with whom you worked, is threatening to reveal what he knows about you",
            answers: [
                {
                    text: "Let him reveal whatever he knows about me.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Bribe him discreetly.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chief Advisor to the President",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 561,
            question: "Hello, Mr. President. We want to punish some heretics operating in our region. I advise you not to interfere.",
            answers: [
                {
                    text: "This is a state governed by law, know your limits.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "That’s your responsibility, handle it.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ahmad, Leader of the Yenfel Sect",
            photo: islamicLeader,
            level: 2,
        },
        {
            id: 562,
            question: "The Yenfel Sect has infiltrated key administrative units of our country. Their influence is growing in many ministries and administrative offices...",
            answers: [
                {
                    text: "Give a few of them symbolic punishments.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "If we touch them, we’ll invite trouble.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chief Advisor to the President",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 563,
            question: "Mr. President, forget about buying the F-35s; they’re outdated now. Let me sell you our state-of-the-art robot soldiers. What do you say?",
            answers: [
                {
                    text: "Alright, let’s buy them.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "We don’t need them, thank you.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 564,
            question: "Every administration needs a media outlet to defend it to the very end, Mr. President. If you support us, we can do this for you.",
            answers: [
                {
                    text: "I cannot compromise on press freedom.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Alright, start your work.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "KERPAL TV Executive",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Mr. President, attending parliamentary meetings and bearing the country’s burden is becoming difficult for us. We want a salary increase.",
            answers: [
                {
                    text: "I will approve the raise.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "We cannot allocate a budget for this.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Members of Parliament",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Mr. President, attending parliamentary meetings and bearing the country’s burden is becoming difficult for us. We want a salary increase.",
            answers: [
                {
                    text: "I will approve the raise.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "We cannot allocate a budget for this.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Members of Parliament",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: " I recommend deploying special operations units in the area to secure your mountain lodge outside the capital. Awaiting your approval.",
            answers: [
                {
                    text: "Deploy the teams immediately.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "This is unnecessary for a mountain lodge.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chief Advisor to the President",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 567,
            question: "After much thought, I realized I was wrong. I want to serve in your party on your behalf. Would you accept me?",
            answers: [
                {
                    text: "Of course, our doors are open to everyone.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "We don’t have any vacancies in the party.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Former Opposition Leader Vasil Levski",
            photo: vasilLevski,
            level: 2,
        },
        {
            id: 568,
            question: "My dear husband, the famous Köfteci Vertuna has recently started to become a dissident voice. What should we do?",
            answers: [
                {
                    text: "Confiscate it under the pretext of illegal meat.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Offer a good bribe.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Your Wife Dora",
            photo: chiefAdvisor, //değiştir
            level: 2,
        },
        {
            id: 569,
            question: "I want to cancel the series 'Forbidden Love,' one of the most popular shows in the country. This series negatively affects our family structure.",
            answers: [
                {
                    text: "Cancel the show.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Let it stay on air.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Head of the TV Regulatory Authority",
            photo: rtukBaskan, //değiştir
            level: 2,
        },
    ],
    de: [
        {
            id: 550,
            question: "Herr Präsident, ich bin sehr zuversichtlich in meine Fähigkeiten im Bereich des Wirtschaftens. Möchten Sie, dass ich den Minister berate?",
            answers: [
                {
                    text: "Selbstverständlich",
                    effect: {
                        publicSupport: -20,
                        budget: -25,
                    }
                },
                {
                    text: "Nein, danke",
                    effect: {
                        publicSupport: +5,
                        budget: 0,
                    },
                }
            ],
            title: "Ehemaliger Wirtschaftsminister",
            photo: nebati,
            level: 1,
        },
        {
            id: 551,
            question: "Herr Präsident, ich schlage eine globale Internetinfrastruktur vor, jedoch mit einer Bedingung: exklusiver Zugriff auf die Nutzerdaten aller Bürger.",
            answers: [
                {
                    text: "Das ist inakzeptabel",
                    effect: {
                        budget: -10,
                        internalSecurity: +15,
                        internationalRelations: -10,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Einverstanden",
                    effect: {
                        budget: +10,
                        internalSecurity: -20,
                        internationalRelations: +10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 552,
            question: "Herr Präsident, wir erleben schwierige Zeiten. Unsere Rente reicht nicht aus. Wir benötigen dringend Hilfe.",
            answers: [
                {
                    text: "Ich werde die Renten erhöhen",
                    effect: {
                        budget: +10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Sie müssen durchhalten",
                    effect: {
                        budget: -10,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Rentner",
            photo: emekli,
            level: 2,
        },
        {
            id: 553,
            question: "Es ist gut, dass wir uns für dieses Abkommen getroffen haben, um das Handelsvolumen zwischen unseren Ländern zu erhöhen.",
            answers: [
                {
                    text: "Ich stimme Ihnen zu",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Ich bin mir bei diesem Abkommen nicht sicher",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "Donald Trump",
            photo: trump,
            level: 1,
        },
        {
            id: 554,
            question: "Sind Sie entschlossen, die S-400-Raketen zu kaufen? Es gibt kein Problem von unserer Seite, aber dies könnte Ihre Beziehungen zu den Vereinigten Staaten beeinträchtigen.",
            answers: [
                {
                    text: "Ja, unsere Entscheidung steht fest",
                    effect: {
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: +15,
                    },
                    listID: "S400",
                },
                {
                    text: "Wir werden noch einmal darüber nachdenken",
                    effect: {
                        budget: +10,
                        internationalRelations: 0,
                        internalSecurity: -20,
                    },
                }
            ],
            title: "Wladimir Putin",
            photo: putin,
            level: 1,
        },
        {
            id: 555,
            question: "Herr Präsident, ich fordere Sie auf, die Internetzensur zu lockern, da sie unsere Investoren negativ beeinflusst.",
            answers: [
                {
                    text: "Das können wir nicht tun",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Wir werden es in Betracht ziehen",
                    effect: {
                        budget: +20,
                        publicSupport: 0,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "CEO von PixelMind",
            photo: developer,
            level: 2,
        },
        {
            id: 556,
            question: "Wir würden gerne in Istanbul, insbesondere im Großen Basar, filmen. Das wird die Stadt fördern und unseren Film ansprechender machen.",
            answers: [
                {
                    text: "Nur zu, starten Sie",
                    effect: {
                        budget: +20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                    listID: "liamNeeson",
                },
                {
                    text: "Das werde ich nicht genehmigen",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: +20,
                    },
                }
            ],
            title: "Liam Neeson",
            photo: liamNeeson,
            level: 2,
        },
        {
            id: 557,
            question: "Herr Präsident, unser Nachbarland Nordovien führt militärische Übungen an unserer Grenze durch, als wäre es eine Machtdemonstration. Sollen wir darauf reagieren?",
            answers: [
                {
                    text: "Erhöhen Sie die Anzahl der Soldaten an der Grenze.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Ignorieren Sie es.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Generalstabschef",
            photo: genelkurmay,
            level: 2,
        },
        { //yeni
            id: 558,
            question: "Herr Präsident, der Vorsitzende der größten Oppositionspartei hat im Parlament schlecht über Sie gesprochen und Sie einen Dieb genannt.",
            answers: [
                {
                    text: "Ich werde eine Verleumdungsklage einreichen",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Ich werde die Meinungsfreiheit respektieren",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chefberater des Präsidenten",
            photo: chiefAdvisor,
            level: 2,
        },
        { //yeni
            id: 559,
            question: "Wir sind besorgt über die Flüchtlinge in Ihrem Land und Ihre Wirtschaft. Einige Ihrer Studenten wurden an Schulen hier angenommen, aber wir werden keine Visa ausstellen.",
            answers: [
                {
                    text: "Ich werde Sanktionen gegen Ihr Land verhängen.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Wir schließen unser Konsulat in Prag.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Botschafter in Prag",
            photo: czechElci,
            level: 2,
        },
        { //yeni
            id: 560,
            question: "Herr Präsident, der ehemalige Premierminister Relani, mit dem Sie zusammengearbeitet haben, droht, alles über Sie preiszugeben.",
            answers: [
                {
                    text: "Lassen Sie ihn sagen, was er über mich weiß.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Bestechen Sie ihn diskret.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chefberater des Präsidenten",
            photo: chiefAdvisor,
            level: 2,
        },
        { //yeni
            id: 561,
            question: "Hallo, Herr Präsident. Wir möchten einige Ketzer, die in unserer Region aktiv sind, bestrafen. Ich rate Ihnen, sich nicht einzumischen.",
            answers: [
                {
                    text: "Dies ist ein Rechtsstaat, kenne deine Grenzen.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Das ist deine Verantwortung, kümmere dich darum.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ahmad, Führer der Yenfel-Sekte",
            photo: islamicLeader,
            level: 2,
        },
        {
            id: 562,
            question: "Die Yenfel-Sekte hat wichtige Verwaltungseinheiten unseres Landes unterwandert. Ihr Einfluss wächst in vielen Ministerien und Verwaltungsämtern...",
            answers: [
                {
                    text: "Geben Sie einigen von ihnen symbolische Strafen.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Wenn wir sie anfassen, bringen wir uns in Schwierigkeiten.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chefberater des Präsidenten",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 563,
            question: "Herr Präsident, vergessen Sie den Kauf der F-35, die sind jetzt veraltet. Lassen Sie mich Ihnen unsere hochmodernen Robotersoldaten verkaufen. Was sagen Sie?",
            answers: [
                {
                    text: " In Ordnung, kaufen wir sie.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Wir brauchen sie nicht, danke.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 564,
            question: "Jede Regierung braucht ein Medienorgan, das sie bis zum Ende verteidigt, Herr Präsident. Wenn Sie uns unterstützen, können wir das für Sie tun.",
            answers: [
                {
                    text: "Ich kann keine Kompromisse bei der Pressefreiheit eingehen.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "In Ordnung, beginnen Sie mit Ihrer Arbeit.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "KERPAL-TV-Manager",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Herr Präsident, die Teilnahme an den Parlamentssitzungen und das Tragen der Last des Landes fällt uns schwer. Wir möchten eine Gehaltserhöhung.",
            answers: [
                {
                    text: "Ich werde die Erhöhung genehmigen.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Dafür können wir kein Budget bereitstellen.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Abgeordnete des Parlaments",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Herr Präsident, die Teilnahme an den Parlamentssitzungen und das Tragen der Last des Landes fällt uns schwer. Wir möchten eine Gehaltserhöhung.",
            answers: [
                {
                    text: "Ich werde die Erhöhung genehmigen.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Dafür können wir kein Budget bereitstellen.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Abgeordnete des Parlaments",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: " Ich empfehle, Spezialeinsatzkräfte in der Umgebung einzusetzen, um Ihr Berghaus außerhalb der Hauptstadt zu sichern. Warte auf Ihre Genehmigung.",
            answers: [
                {
                    text: "Entsenden Sie die Teams sofort.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Das ist für ein Berghaus unnötig.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chefberater des Präsidenten",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 567,
            question: "Nach langem Überlegen habe ich erkannt, dass ich im Unrecht war. Ich möchte in Ihrer Partei in Ihrem Namen tätig sein. Würden Sie mich aufnehmen?",
            answers: [
                {
                    text: "Natürlich, unsere Türen stehen allen offen.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Wir haben keine freien Plätze in der Partei.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ehemaliger Oppositionsführer Vasil Levski",
            photo: vasilLevski,
            level: 2,
        },
        {
            id: 568,
            question: "Mein lieber Ehemann, der berühmte Köfteci Vertuna wird in letzter Zeit zu einer oppositionellen Stimme. Was sollen wir tun?",
            answers: [
                {
                    text: "Beschlagnahmen Sie ihn unter dem Vorwand von illegalem Fleisch.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Bieten Sie ein gutes Bestechungsgeld an.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ihre Frau Dora",
            photo: chiefAdvisor, //değiştir
            level: 2,
        },
        {
            id: 569,
            question: "Ich möchte die Serie 'Verbotene Liebe', eine der beliebtesten Shows des Landes, absetzen. Diese Serie wirkt sich negativ auf unsere Familienstruktur aus.",
            answers: [
                {
                    text: "Setzen Sie die Serie ab.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Lassen Sie sie weiterhin ausgestrahlt werden.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Vorsitzender der TV-Aufsichtsbehörde",
            photo: rtukBaskan,
            level: 2,
        },
    ],
    fr: [
        {
            id: 550,
            question: "Monsieur le Président, je suis très confiant dans mes compétences en gestion économique. Souhaitez-vous que je conseille le ministre ?",
            answers: [
                {
                    text: "Bien sûr",
                    effect: {
                        publicSupport: -20,
                        budget: -25,
                    }
                },
                {
                    text: "Non, merci",
                    effect: {
                        publicSupport: +5,
                        budget: 0,
                    },
                }
            ],
            title: "Ancien Ministre de l'Économie",
            photo: nebati,
            level: 1,
        },
        {
            id: 551,
            question: "Monsieur le Président, je propose une infrastructure internet mondiale, mais à une condition : un accès exclusif aux données des citoyens.",
            answers: [
                {
                    text: "C'est inacceptable",
                    effect: {
                        budget: -10,
                        internalSecurity: +15,
                        internationalRelations: -10,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "D'accord",
                    effect: {
                        budget: +10,
                        internalSecurity: -20,
                        internationalRelations: +10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 552,
            question: "Monsieur le Président, nous traversons une période difficile. Notre pension n'est pas suffisante. Nous avons besoin d'aide de toute urgence.",
            answers: [
                {
                    text: "J'augmenterai les pensions",
                    effect: {
                        budget: +10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Vous devrez résister",
                    effect: {
                        budget: -10,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Citoyen Retraité",
            photo: emekli,
            level: 2,
        },
        {
            id: 553,
            question: "C'est bien que nous nous soyons réunis pour cet accord visant à augmenter le volume commercial entre nos pays.",
            answers: [
                {
                    text: "Je suis d'accord avec vous",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Je ne suis pas sûr de cet accord",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "Donald Trump",
            photo: trump,
            level: 1,
        },
        {
            id: 554,
            question: "Êtes-vous décidé à acheter les missiles S400 ? Ce n'est pas un problème de notre côté, mais cela pourrait nuire à vos relations avec les États-Unis.",
            answers: [
                {
                    text: "Oui, notre décision est définitive",
                    effect: {
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: +15,
                    },
                    listID: "S400",
                },
                {
                    text: "Nous y réfléchirons encore un peu",
                    effect: {
                        budget: +10,
                        internationalRelations: 0,
                        internalSecurity: -20,
                    },
                }
            ],
            title: "Vladimir Poutine",
            photo: putin,
            level: 1,
        },
        {
            id: 555,
            question: "Monsieur le Président, je vous exhorte à alléger la censure sur internet car cela nuit à nos investisseurs.",
            answers: [
                {
                    text: "Nous ne pouvons pas faire cela",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Nous y réfléchirons",
                    effect: {
                        budget: +20,
                        publicSupport: 0,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "PDG de PixelMind",
            photo: developer,
            level: 2,
        },
        {
            id: 556,
            question: "Nous aimerions filmer à Istanbul, en particulier au Grand Bazar. Cela fera la promotion de la ville et rendra notre film plus captivant.",
            answers: [
                {
                    text: "Allez-y, commencez",
                    effect: {
                        budget: +20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                    listID: "liamNeeson",
                },
                {
                    text: "Je n'approuverai pas cela",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: +20,
                    },
                }
            ],
            title: "Liam Neeson",
            photo: liamNeeson,
            level: 2,
        },
        {
            id: 557,
            question: "Monsieur le Président, notre pays voisin, Nordovie, effectue des exercices militaires près de notre frontière comme s'il s'agissait d'une démonstration de force. Devons-nous réagir ?",
            answers: [
                {
                    text: "Augmentez le nombre de soldats à la frontière.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Ignorez cela.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chef d'État-Major Général",
            photo: genelkurmay,
            level: 2,
        },
        { //yeni
            id: 558,
            question: "Monsieur le Président, le chef du principal parti d'opposition a mal parlé de vous au Parlement et vous a traité de voleur.",
            answers: [
                {
                    text: "Je vais intenter un procès pour diffamation",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Je respecterai la liberté d'expression",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Conseiller principal du Président",
            photo: chiefAdvisor,
            level: 2,
        },
        { //yeni
            id: 559,
            question: "Nous sommes préoccupés par les réfugiés dans votre pays et votre économie. Certains de vos étudiants ont été acceptés dans des écoles ici, mais nous ne délivrerons pas de visas.",
            answers: [
                {
                    text: "J’imposerai des sanctions à votre pays.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Nous fermons notre consulat à Prague.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ambassadeur à Prague",
            photo: czechElci,
            level: 2,
        },
        {
            id: 560,
            question: "Monsieur le Président, l'ancien Premier ministre Relani, avec qui vous avez travaillé, menace de révéler ce qu'il sait sur vous.",
            answers: [
                {
                    text: "Qu'il révèle tout ce qu'il sait sur moi.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Offrez-lui un pot-de-vin discrètement.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Conseiller principal du Président",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 561,
            question: "Bonjour, Monsieur le Président. Nous souhaitons punir certains hérétiques opérant dans notre région. Je vous conseille de ne pas intervenir.",
            answers: [
                {
                    text: "Nous sommes dans un État de droit, connais tes limites.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "C’est ta responsabilité, fais le nécessaire.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ahmad, Chef de la Secte Yenfel",
            photo: islamicLeader,
            level: 2,
        },
        {
            id: 562,
            question: "La secte Yenfel a infiltré des unités administratives clés de notre pays. Leur influence s’accroît dans de nombreux ministères et bureaux administratifs...",
            answers: [
                {
                    text: "Infligez-leur des sanctions symboliques.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Si nous intervenons, cela nous causera des ennuis.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Conseiller principal du Président",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 563,
            question: "Monsieur le Président, oubliez d’acheter les F-35, ils sont dépassés maintenant. Permettez-moi de vous vendre nos soldats robots de dernière technologie. Qu’en dites-vous ?",
            answers: [
                {
                    text: "D’accord, achetons-les.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Nous n’en avons pas besoin, merci.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 564,
            question: "Chaque administration a besoin d’un organe de presse pour la défendre jusqu’au bout, Monsieur le Président. Si vous nous soutenez, nous pouvons le faire pour vous.",
            answers: [
                {
                    text: "Je ne peux pas transiger sur la liberté de la presse.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "D’accord, commencez votre travail.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Directeur de KERPAL TV",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Monsieur le Président, assister aux réunions parlementaires et porter le fardeau du pays devient difficile pour nous. Nous voulons une augmentation de salaire.",
            answers: [
                {
                    text: "J’approuverai l’augmentation.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Nous ne pouvons pas allouer de budget à cela.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Membres du Parlement",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Monsieur le Président, assister aux réunions parlementaires et porter le fardeau du pays devient difficile pour nous. Nous voulons une augmentation de salaire.",
            answers: [
                {
                    text: "J’approuverai l’augmentation.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Nous ne pouvons pas allouer de budget à cela.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Membres du Parlement",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: "Je recommande de déployer des unités des opérations spéciales dans la région pour sécuriser votre chalet de montagne en dehors de la capitale. J’attends votre autorisation.",
            answers: [
                {
                    text: "Déployez les équipes immédiatement.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "C’est inutile pour un chalet de montagne.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Conseiller principal du Président",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 567,
            question: "Après mûre réflexion, j’ai réalisé que j’avais tort. Je souhaite servir dans votre parti en votre nom. M’accepteriez-vous ?",
            answers: [
                {
                    text: "Bien sûr, nos portes sont ouvertes à tous.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Nous n’avons pas de poste vacant dans le parti.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ancien leader de l’opposition Vasil Levski",
            photo: vasilLevski,
            level: 2,
        },
        {
            id: 568,
            question: "Mon cher mari, le célèbre Köfteci Vertuna est récemment devenu une voix dissidente. Que devrions-nous faire ?",
            answers: [
                {
                    text: "Confisquez-le sous le prétexte de viande illégale.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Proposez un bon pot-de-vin.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Votre épouse Dora",
            photo: chiefAdvisor, //değiştir
            level: 2,
        },
        {
            id: 569,
            question: "Je veux supprimer la série 'Amour Interdit', l'une des émissions les plus populaires du pays. Cette série affecte négativement notre structure familiale.",
            answers: [
                {
                    text: "Supprimez la série.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Laissez-la rester à l’antenne.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Président de l’Autorité de Régulation de la Télévision",
            photo: rtukBaskan, //değiştir
            level: 2,
        },
    ],
    pt: [
        {
            id: 550,
            question: "Senhor Presidente, estou muito confiante em minhas habilidades de gestão econômica. Gostaria que eu aconselhasse o ministro?",
            answers: [
                {
                    text: "Claro que sim",
                    effect: {
                        publicSupport: -20,
                        budget: -25,
                    }
                },
                {
                    text: "Não, obrigado",
                    effect: {
                        publicSupport: +5,
                        budget: 0,
                    },
                }
            ],
            title: "Ex-Ministro da Economia",
            photo: nebati,
            level: 1,
        },
        {
            id: 551,
            question: "Senhor Presidente, proponho uma infraestrutura global de internet, mas com uma condição: acesso exclusivo aos dados de todos os cidadãos.",
            answers: [
                {
                    text: "Isso é inaceitável",
                    effect: {
                        budget: -10,
                        internalSecurity: +15,
                        internationalRelations: -10,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "De acordo",
                    effect: {
                        budget: +10,
                        internalSecurity: -20,
                        internationalRelations: +10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 552,
            question: "Senhor Presidente, estamos passando por tempos difíceis. Nossa aposentadoria não é suficiente. Precisamos de ajuda urgentemente.",
            answers: [
                {
                    text: "Aumentarei as aposentadorias",
                    effect: {
                        budget: +10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Vocês terão que aguentar",
                    effect: {
                        budget: -10,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Cidadão Aposentado",
            photo: emekli,
            level: 2,
        },
        {
            id: 553,
            question: "É bom que nos reunimos para este acordo para aumentar o volume comercial entre nossos países.",
            answers: [
                {
                    text: "Concordo com você",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Não estou certo sobre este acordo",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "Donald Trump",
            photo: trump,
            level: 1,
        },
        {
            id: 554,
            question: "Você está decidido a comprar os mísseis S400? Não há problema da nossa parte, mas isso pode prejudicar suas relações com os Estados Unidos.",
            answers: [
                {
                    text: "Sim, nossa decisão é final",
                    effect: {
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: +15,
                    },
                    listID: "S400",
                },
                {
                    text: "Vamos pensar um pouco mais",
                    effect: {
                        budget: +10,
                        internationalRelations: 0,
                        internalSecurity: -20,
                    },
                }
            ],
            title: "Vladimir Putin",
            photo: putin,
            level: 1,
        },
        {
            id: 555,
            question: "Senhor Presidente, peço que alivie a censura na internet, pois isso afeta negativamente nossos investidores.",
            answers: [
                {
                    text: "Não podemos fazer isso",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Vamos considerar",
                    effect: {
                        budget: +20,
                        publicSupport: 0,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "CEO da PixelMind",
            photo: developer,
            level: 2,
        },
        {
            id: 556,
            question: "Gostaríamos de filmar em Istambul, especialmente no Grande Bazar. Isso promoverá a cidade e tornará nosso filme mais cativante.",
            answers: [
                {
                    text: "Vão em frente, comecem",
                    effect: {
                        budget: +20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                    listID: "liamNeeson",
                },
                {
                    text: "Não aprovarei isso",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: +20,
                    },
                }
            ],
            title: "Liam Neeson",
            photo: liamNeeson,
            level: 2,
        },
        {
            id: 557,
            question: "Senhor Presidente, nosso país vizinho, Nordóvia, está realizando exercícios militares perto da nossa fronteira como se fosse uma demonstração de força. Devemos responder?",
            answers: [
                {
                    text: "Aumente o número de soldados na fronteira.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Ignore isso.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chefe do Estado-Maior General",
            photo: genelkurmay,
            level: 2,
        },
        { //yeni
            id: 558,
            question: "Senhor Presidente, o líder do principal partido de oposição falou mal de você no parlamento e chamou você de ladrão.",
            answers: [
                {
                    text: "Vou abrir um processo por difamação",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Vou respeitar a liberdade de expressão",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Conselheiro-Chefe do Presidente",
            photo: chiefAdvisor,
            level: 2,
        },
        { //yeni
            id: 559,
            question: "Estamos preocupados com os refugiados no seu país e com a sua economia. Alguns dos seus estudantes foram aceitos em escolas aqui, mas não emitiremos vistos.",
            answers: [
                {
                    text: "Vou impor sanções ao seu país.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Estamos fechando nosso consulado em Praga.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Embaixador em Praga",
            photo: czechElci,
            level: 2,
        },
        {
            id: 560,
            question: "Senhor Presidente, o ex-primeiro-ministro Relani, com quem trabalhou, está ameaçando revelar o que sabe sobre você.",
            answers: [
                {
                    text: "Que ele revele o que sabe sobre mim.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Suborne-o discretamente.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Conselheiro-Chefe do Presidente",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 561,
            question: "Olá, Senhor Presidente. Queremos punir alguns hereges que operam em nossa região. Aconselho que não interfira.",
            answers: [
                {
                    text: "Este é um estado de direito, saiba seus limites.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Isso é sua responsabilidade, lide com isso.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ahmad, Líder da Seita Yenfel",
            photo: islamicLeader,
            level: 2,
        },
        {
            id: 562,
            question: "A seita Yenfel infiltrou-se em unidades administrativas-chave do nosso país. Sua influência está crescendo em muitos ministérios e escritórios administrativos...",
            answers: [
                {
                    text: "Dê punições simbólicas a alguns deles.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Se nos envolvermos, teremos problemas.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Conselheiro-Chefe do Presidente",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 563,
            question: "Senhor Presidente, esqueça de comprar os F-35; eles estão ultrapassados agora. Deixe-me vender nossos soldados robôs de última geração. O que me diz?",
            answers: [
                {
                    text: "Certo, vamos comprá-los.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Não precisamos deles, obrigado.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 564,
            question: "Toda administração precisa de um veículo de mídia para defendê-la até o fim, Senhor Presidente. Se nos apoiar, podemos fazer isso por você.",
            answers: [
                {
                    text: "Não posso comprometer a liberdade de imprensa.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Certo, comece seu trabalho.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Diretor da KERPAL TV",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Senhor Presidente, participar das reuniões parlamentares e carregar o peso do país está se tornando difícil para nós. Queremos um aumento salarial.",
            answers: [
                {
                    text: "Vou aprovar o aumento.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Não podemos alocar orçamento para isso.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Membros do Parlamento",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: "Recomendo o envio de unidades de operações especiais na região para proteger sua casa de campo nas montanhas, fora da capital. Aguardando sua aprovação.",
            answers: [
                {
                    text: "Envie as equipes imediatamente.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Isso é desnecessário para uma casa de campo.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Conselheiro-Chefe do Presidente",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 567,
            question: "Após muito refletir, percebi que estava errado. Quero servir em seu partido em seu nome. Você me aceitaria?",
            answers: [
                {
                    text: "Claro, nossas portas estão abertas a todos.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Não temos vagas no partido.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ex-Líder da Oposição Vasil Levski",
            photo: vasilLevski,
            level: 2,
        },
        {
            id: 568,
            question: "Meu querido marido, o famoso Köfteci Vertuna recentemente começou a se tornar uma voz dissidente. O que devemos fazer?",
            answers: [
                {
                    text: "Confisque sob o pretexto de carne ilegal.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Ofereça um bom suborno.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Sua Esposa Dora",
            photo: chiefAdvisor, //değiştir
            level: 2,
        },
        {
            id: 569,
            question: "Quero cancelar a série 'Amor Proibido', uma das mais populares do país. Esta série afeta negativamente nossa estrutura familiar.",
            answers: [
                {
                    text: "Cancele o programa.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Deixe continuar no ar.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Chefe da Autoridade Reguladora de TV",
            photo: rtukBaskan, //değiştir
            level: 2,
        },
    ],
    zh: [
        {
            id: 550,
            question: "总统先生，我对自己的经济管理能力非常有信心。您愿意让我为部长提供建议吗？",
            answers: [
                {
                    text: "当然",
                    effect: {
                        publicSupport: -20,
                        budget: -25,
                    }
                },
                {
                    text: "不，谢谢",
                    effect: {
                        publicSupport: +5,
                        budget: 0,
                    },
                }
            ],
            title: "前经济部长",
            photo: nebati,
            level: 1,
        },
        {
            id: 551,
            question: "总统先生，我提议建立全球互联网基础设施，但有一个条件：获得所有公民用户数据的独家访问权限。",
            answers: [
                {
                    text: "这不可接受",
                    effect: {
                        budget: -10,
                        internalSecurity: +15,
                        internationalRelations: -10,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "同意",
                    effect: {
                        budget: +10,
                        internalSecurity: -20,
                        internationalRelations: +10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "埃隆·马斯克",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 552,
            question: "总统先生，我们正经历艰难时期。我们的养老金不足。我们迫切需要帮助。",
            answers: [
                {
                    text: "我会提高养老金",
                    effect: {
                        budget: +10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "你们必须坚持",
                    effect: {
                        budget: -10,
                        publicSupport: +10,
                    },
                }
            ],
            title: "退休公民",
            photo: emekli,
            level: 2,
        },
        {
            id: 553,
            question: "很高兴我们为了增加两国贸易额达成协议。",
            answers: [
                {
                    text: "我同意您的看法",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "我对这项协议不确定",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "唐纳德·特朗普",
            photo: trump,
            level: 1,
        },
        {
            id: 554,
            question: "您决定购买S400导弹了吗？我们这边没问题，但这可能会损害您与美国的关系。",
            answers: [
                {
                    text: "是的，我们的决定是最终的",
                    effect: {
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: +15,
                    },
                    listID: "S400",
                },
                {
                    text: "我们会再考虑一下",
                    effect: {
                        budget: +10,
                        internationalRelations: 0,
                        internalSecurity: -20,
                    },
                }
            ],
            title: "弗拉基米尔·普京",
            photo: putin,
            level: 1,
        },
        {
            id: 555,
            question: "总统先生，我敦促您缓解互联网审查，因为这会对我们的投资者产生负面影响。",
            answers: [
                {
                    text: "我们不能这么做",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "我们会考虑",
                    effect: {
                        budget: +20,
                        publicSupport: 0,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "PixelMind首席执行官",
            photo: developer,
            level: 2,
        },
        {
            id: 556,
            question: "我们希望在伊斯坦布尔拍摄，特别是在大巴扎。这将推广这座城市并使我们的电影更具吸引力。",
            answers: [
                {
                    text: "开始吧",
                    effect: {
                        budget: +20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                    listID: "liamNeeson",
                },
                {
                    text: "我不会批准",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: +20,
                    },
                }
            ],
            title: "连姆·尼森",
            photo: liamNeeson,
            level: 2,
        },
        {
            id: 557,
            question: "总统先生，我们的邻国诺尔多维亚正在我们边境附近进行军事演习，好像是在炫耀武力。我们应该回应吗？",
            answers: [
                {
                    text: "增加边境的士兵数量。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "无视它。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "总参谋长",
            photo: genelkurmay,
            level: 2,
        },
        { //yeni
            id: 558,
            question: "总统先生，主要反对党领袖在议会中说您坏话，称您为小偷。",
            answers: [
                {
                    text: "我会提起诽谤诉讼。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "我会尊重言论自由。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "总统首席顾问",
            photo: chiefAdvisor,
            level: 2,
        },
        { //yeni
            id: 559,
            question: "我们对贵国的难民和经济感到担忧。一些贵国的学生已被本地学校录取，但我们不会发放签证。",
            answers: [
                {
                    text: "我将对贵国实施制裁。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "我们正在关闭布拉格领事馆。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "驻布拉格大使",
            photo: czechElci,
            level: 2,
        },
        {
            id: 560,
            question: "总统先生，与您合作过的前总理雷拉尼威胁要透露他知道的关于您的事情。",
            answers: [
                {
                    text: "让他透露他知道的事情吧。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "暗中贿赂他。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "总统首席顾问",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 561,
            question: "总统先生，您好。我们想惩罚在我们地区活动的一些异教徒。我建议您不要干涉。",
            answers: [
                {
                    text: "这里是法治国家，知道你的界限。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "这是你的责任，处理好它。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Yenfel教派领袖阿赫迈德",
            photo: islamicLeader,
            level: 2,
        },
        {
            id: 562,
            question: "Yenfel教派已经渗透到我们国家的关键行政单位。他们在许多部门和行政办公室的影响力正在增加",
            answers: [
                {
                    text: "对其中一些人施以象征性的惩罚。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "如果我们动手，我们会惹上麻烦。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "总统首席顾问",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 563,
            question: "总统先生，别再考虑买F-35了，它们已经过时了。让我卖给您我们最先进的机器人士兵吧。您怎么看？",
            answers: [
                {
                    text: "好的，买下吧。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "我们不需要，谢谢。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "埃隆·马斯克",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 564,
            question: "每个政府都需要一个媒体机构来为其辩护到底，总统先生。如果您支持我们，我们可以为您做到。",
            answers: [
                {
                    text: "我不能牺牲新闻自由。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "好的，开始你的工作吧。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "KERPAL电视台主管",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "总统先生，参加议会会议和承担国家重担对我们来说变得越来越困难。我们想要加薪。",
            answers: [
                {
                    text: "我会批准加薪。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "我们无法为此分配预算。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "议会议员",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: "总统先生，参加议会会议和承担国家重担对我们来说变得越来越困难。我们想要加薪。",
            answers: [
                {
                    text: "我会批准加薪。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "我们无法为此分配预算。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "议会议员",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: "我建议部署特种行动部队以保护您在首都外的山间别墅。等待您的批准。",
            answers: [
                {
                    text: "立即部署团队。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "对于一间山间别墅来说这是不必要的。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "总统首席顾问",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 567,
            question: "经过深思熟虑，我意识到我错了。我想代表您在您的政党中任职。您会接受我吗？",
            answers: [
                {
                    text: "当然，我们的大门向所有人敞开。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "我们党内没有空缺职位。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "前反对派领导人瓦西尔·列夫斯基",
            photo: vasilLevski,
            level: 2,
        },
        {
            id: 568,
            question: "亲爱的丈夫，著名的Köfteci Vertuna最近开始成为一个反对的声音。我们该怎么办？",
            answers: [
                {
                    text: "以非法肉类为借口没收。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "提供一笔丰厚的贿赂。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "您的妻子多拉",
            photo: chiefAdvisor, //değiştir
            level: 2,
        },
        {
            id: 569,
            question: "我想取消全国最受欢迎的电视剧之一《禁忌之爱》。这部剧对我们的家庭结构产生了负面影响。",
            answers: [
                {
                    text: "取消这部剧。",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "让它继续播出。",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "电视监管局局长",
            photo: rtukBaskan, //değiştir
            level: 2,
        },
    ],
    es: [
        {
            id: 550,
            question: "Señor Presidente, tengo plena confianza en mis habilidades de gestión económica. ¿Le gustaría que aconseje al ministro?",
            answers: [
                {
                    text: "Por supuesto",
                    effect: {
                        publicSupport: -20,
                        budget: -25,
                    }
                },
                {
                    text: "No, gracias",
                    effect: {
                        publicSupport: +5,
                        budget: 0,
                    },
                }
            ],
            title: "Ex Ministro de Economía",
            photo: nebati,
            level: 1,
        },
        {
            id: 551,
            question: "Señor Presidente, propongo una infraestructura de comercio digital, pero con una condición: acceso exclusivo a los datos de usuario de todos los ciudadanos.",
            answers: [
                {
                    text: "Esto es inaceptable",
                    effect: {
                        budget: -10,
                        internalSecurity: +15,
                        internationalRelations: -10,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "De acuerdo",
                    effect: {
                        budget: +10,
                        internalSecurity: -20,
                        internationalRelations: +10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 552,
            question: "Señor Presidente, estamos pasando por tiempos difíciles. Nuestra pensión no es suficiente. Necesitamos desesperadamente ayuda.",
            answers: [
                {
                    text: "Aumentaré las pensiones",
                    effect: {
                        budget: +10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Debes soportarlo",
                    effect: {
                        budget: -10,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Ciudadano Jubilado",
            photo: emekli,
            level: 2,
        },
        {
            id: 553,
            question: "Es bueno que nos hayamos reunido para este acuerdo para aumentar el volumen comercial entre nuestros países.",
            answers: [
                {
                    text: "Estoy de acuerdo contigo",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "No estoy seguro de este acuerdo",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "Donald Trump",
            photo: trump,
            level: 1,
        },
        {
            id: 554,
            question: "¿Estás decidido a comprar los misiles S400? No hay problema en nuestro lado, pero podría perjudicar tus relaciones con los Estados Unidos.",
            answers: [
                {
                    text: "Sí, nuestra decisión es final",
                    effect: {
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: +15,
                    },
                    listID: "S400",
                },
                {
                    text: "Lo pensaremos un poco más",
                    effect: {
                        budget: +10,
                        internationalRelations: 0,
                        internalSecurity: -20,
                    },
                }
            ],
            title: "Vladimir Putin",
            photo: putin,
            level: 1,
        },
        {
            id: 555,
            question: "Señor Presidente, le insto a que alivie la censura en Internet, ya que afecta negativamente a nuestros inversores.",
            answers: [
                {
                    text: "No podemos hacer eso",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Lo consideraremos",
                    effect: {
                        budget: +20,
                        publicSupport: 0,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "CEO de PixelMind",
            photo: developer,
            level: 2,
        },
        {
            id: 556,
            question: "Nos gustaría filmar en Estambul, especialmente en el Gran Bazar. Promocionará la ciudad y hará que nuestra película sea más cautivadora.",
            answers: [
                {
                    text: "Adelante y comienza",
                    effect: {
                        budget: +20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                    listID: "liamNeeson",
                },
                {
                    text: "No aprobaré esto",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: +20,
                    },
                }
            ],
            title: "Liam Neeson",
            photo: liamNeeson,
            level: 2,
        },
        {
            id: 557,
            question: "Nos gustaría filmar en Estambul, especialmente en el Gran Bazar. Promocionará la ciudad y hará que nuestra película sea más cautivadora.",
            answers: [
                {
                    text: "Aumente el número de soldados en la frontera.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Ignórelo.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Jefe del Estado Mayor",
            photo: genelkurmay,
            level: 2,
        },
        {
            id: 558,
            question: "Señor Presidente, el líder del principal partido de oposición habló mal de usted en el parlamento y lo llamó ladrón.",
            answers: [
                {
                    text: "Presentaré una demanda por difamación.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Respetaré la libertad de expresión.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Asesor Principal del Presidente",
            photo: chiefAdvisor,
            level: 2,
        },
        { //yeni
            id: 559,
            question: "Estamos preocupados por los refugiados en su país y su economía. Algunos de sus estudiantes han sido aceptados en escuelas aquí, pero no emitiremos visas.",
            answers: [
                {
                    text: "Impondré sanciones a su país.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Estamos cerrando nuestro consulado en Praga.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Embajador en Praga",
            photo: czechElci,
            level: 2,
        },
        {
            id: 560,
            question: "Señor Presidente, el ex primer ministro Relani, con quien trabajó, está amenazando con revelar lo que sabe sobre usted.",
            answers: [
                {
                    text: "Que revele lo que sabe sobre mí.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Sobórnelo discretamente.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Asesor Principal del Presidente",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 561,
            question: "Hola, Señor Presidente. Queremos castigar a algunos herejes que operan en nuestra región. Le aconsejo que no interfiera.",
            answers: [
                {
                    text: "Este es un estado de derecho, conoce tus límites.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Eso es tu responsabilidad, haz lo necesario.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ahmad, Líder de la Secta Yenfel",
            photo: islamicLeader,
            level: 2,
        },
        {
            id: 562,
            question: "La secta Yenfel ha infiltrado unidades administrativas clave de nuestro país. Su influencia está creciendo en muchos ministerios y oficinas administrativas...",
            answers: [
                {
                    text: "Impón castigos simbólicos a algunos de ellos.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Si los tocamos, tendremos problemas.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Asesor Principal del Presidente",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 563,
            question: "Señor Presidente, olvídese de comprar los F-35, ya están pasados de moda. Déjeme venderle nuestros soldados robot de última tecnología. ¿Qué dice?",
            answers: [
                {
                    text: "Está bien, comprémoslos.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "No los necesitamos, gracias.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Elon Musk",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 564,
            question: "Toda administración necesita un medio de comunicación que la defienda hasta el final, Señor Presidente. Si nos respalda, podemos hacer esto por usted.",
            answers: [
                {
                    text: "No puedo comprometer la libertad de prensa.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "De acuerdo, empieza con tu trabajo.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Director de KERPAL TV",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Señor Presidente, asistir a las reuniones parlamentarias y soportar la carga del país se está volviendo difícil para nosotros. Queremos un aumento salarial.",
            answers: [
                {
                    text: "Aprobaré el aumento.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "No podemos asignar presupuesto para esto.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Miembros del Parlamento",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: "Recomiendo desplegar unidades de operaciones especiales en la zona para proteger su cabaña de montaña fuera de la capital. Espero su aprobación.",
            answers: [
                {
                    text: "Despliegue los equipos inmediatamente.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Esto es innecesario para una cabaña de montaña.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Asesor Principal del Presidente",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 567,
            question: "Después de mucho reflexionar, me di cuenta de que estaba equivocado. Quiero servir en su partido en su nombre. ¿Me aceptaría?",
            answers: [
                {
                    text: "Por supuesto, nuestras puertas están abiertas para todos.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "No tenemos vacantes en el partido.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Exlíder de la oposición Vasil Levski",
            photo: vasilLevski,
            level: 2,
        },
        {
            id: 568,
            question: "Mi querido esposo, el famoso Köfteci Vertuna ha comenzado recientemente a convertirse en una voz disidente. ¿Qué deberíamos hacer?",
            answers: [
                {
                    text: "Confiscarlo bajo el pretexto de carne ilegal.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Ofrecer un buen soborno.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Tu Esposa Dora",
            photo: chiefAdvisor, //değiştir
            level: 2,
        },
        {
            id: 569,
            question: "Quiero cancelar la serie 'Amor Prohibido', una de las más populares del país. Esta serie afecta negativamente nuestra estructura familiar.",
            answers: [
                {
                    text: "Cancela la serie.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Déjala en el aire.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Presidente de la Autoridad Reguladora de TV",
            photo: rtukBaskan, //değiştir
            level: 2,
        },
    ],
    ru: [
        {
            id: 550,
            question: "Господин Президент, я очень уверен в своих экономических управленческих навыках. Хотели бы вы, чтобы я консультировал министра?",
            answers: [
                {
                    text: "Конечно",
                    effect: {
                        publicSupport: -20,
                        budget: -25,
                    }
                },
                {
                    text: "Нет, спасибо",
                    effect: {
                        publicSupport: +5,
                        budget: 0,
                    },
                }
            ],
            title: "Бывший министр экономики",
            photo: nebati,
            level: 1,
        },
        {
            id: 551,
            question: "Господин Президент, я предлагаю глобальную интернет-инфраструктуру, но с одним условием: эксклюзивный доступ ко всем пользовательским данным граждан.",
            answers: [
                {
                    text: "Это неприемлемо",
                    effect: {
                        budget: -10,
                        internalSecurity: +15,
                        internationalRelations: -10,
                        infrastructureAndEnvironment: -10,
                    }
                },
                {
                    text: "Согласен",
                    effect: {
                        budget: +10,
                        internalSecurity: -20,
                        internationalRelations: +10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Илон Маск",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 552,
            question: "Господин Президент, мы переживаем трудные времена. Нашей пенсии недостаточно. Нам срочно нужна помощь.",
            answers: [
                {
                    text: "Я увеличу пенсии",
                    effect: {
                        budget: +10,
                        publicSupport: -10,
                    }
                },
                {
                    text: "Вам придется потерпеть",
                    effect: {
                        budget: -10,
                        publicSupport: +10,
                    },
                }
            ],
            title: "Пенсионер",
            photo: emekli,
            level: 2,
        },
        {
            id: 553,
            question: "Хорошо, что мы собрались для этого соглашения, чтобы увеличить объем торговли между нашими странами.",
            answers: [
                {
                    text: "Я согласен с вами",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Я не уверен в этом соглашении",
                    effect: {
                        budget: +10,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "Дональд Трамп",
            photo: trump,
            level: 1,
        },
        {
            id: 554,
            question: "Вы твердо решили приобрести ракеты С-400? С нашей стороны проблем нет, но это может повредить вашим отношениям с США.",
            answers: [
                {
                    text: "Да, наше решение окончательно",
                    effect: {
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: +15,
                    },
                    listID: "S400",
                },
                {
                    text: "Мы подумаем еще немного",
                    effect: {
                        budget: +10,
                        internationalRelations: 0,
                        internalSecurity: -20,
                    },
                }
            ],
            title: "Владимир Путин",
            photo: putin,
            level: 1,
        },
        {
            id: 555,
            question: "Господин Президент, я настоятельно рекомендую ослабить интернет-цензуру, так как это негативно влияет на наших инвесторов.",
            answers: [
                {
                    text: "Мы не можем этого сделать",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Мы рассмотрим это",
                    effect: {
                        budget: +20,
                        publicSupport: 0,
                        internationalRelations: +10,
                    },
                }
            ],
            title: "Генеральный директор PixelMind",
            photo: developer,
            level: 2,
        },
        {
            id: 556,
            question: "Мы хотели бы снимать в Стамбуле, особенно в Гранд-базаре. Это будет способствовать продвижению города и сделает наш фильм более привлекательным.",
            answers: [
                {
                    text: "Давайте, начинайте",
                    effect: {
                        budget: +20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                    listID: "liamNeeson",
                },
                {
                    text: "Я этого не одобрю",
                    effect: {
                        budget: -10,
                        publicSupport: -10,
                        internationalRelations: +20,
                    },
                }
            ],
            title: "Лиам Нисон",
            photo: liamNeeson,
            level: 2,
        },
        {
            id: 557,
            question: "Господин Президент, наша соседняя страна Нордовия проводит военные учения у нашей границы, словно демонстрируя свою силу. Нам стоит ответить?",
            answers: [
                {
                    text: "Увеличьте число солдат на границе.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Игнорируйте это.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Начальник Генерального штаба",
            photo: genelkurmay,
            level: 2,
        },
        {
            id: 558,
            question: "Господин Президент, лидер главной оппозиционной партии плохо говорил о вас в парламенте и назвал вас вором.",
            answers: [
                {
                    text: "Я подам иск о клевете.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Я буду уважать свободу слова.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Главный советник президента",
            photo: chiefAdvisor,
            level: 2,
        },
        { //yeni
            id: 559,
            question: "Мы обеспокоены беженцами в вашей стране и вашей экономикой. Некоторые из ваших студентов были приняты в наши школы, но мы не будем выдавать визы.",
            answers: [
                {
                    text: "Я введу санкции против вашей страны.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Мы закрываем наше консульство в Праге.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Посол в Праге",
            photo: czechElci,
            level: 2,
        },
        {
            id: 560,
            question: "Господин Президент, бывший премьер-министр Релани, с которым вы работали, угрожает раскрыть, что он знает о вас.",
            answers: [
                {
                    text: "Пусть раскрывает, что знает.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Подкупите его тайно.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Главный советник президента",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 561,
            question: "Здравствуйте, господин Президент. Мы хотим наказать некоторых еретиков, действующих в нашем регионе. Советую вам не вмешиваться.",
            answers: [
                {
                    text: "Это правовое государство, знай свои границы.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Это твоя ответственность, разбирайся.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ахмад, лидер секты Енфель",
            photo: islamicLeader,
            level: 2,
        },
        {
            id: 562,
            question: "Секта Енфель проникла в ключевые административные подразделения нашей страны. Их влияние растет во многих министерствах и административных учреждениях",
            answers: [
                {
                    text: "Дайте нескольким из них символические наказания.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Если мы вмешаемся, у нас будут проблемы.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Главный советник президента",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 563,
            question: "Господин Президент, забудьте о покупке F-35, они уже устарели. Позвольте мне продать вам наших новейших роботизированных солдат. Что скажете?",
            answers: [
                {
                    text: "Хорошо, давайте купим.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Нам они не нужны, спасибо.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Илон Маск",
            photo: elonMusk,
            level: 2,
        },
        {
            id: 564,
            question: "Каждому правительству нужен медиа-орган, который будет защищать его до самого конца, господин Президент. Если вы нас поддержите, мы сделаем это для вас.",
            answers: [
                {
                    text: "Я не могу поступиться свободой прессы.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Хорошо, начинайте работу.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Руководитель KERPAL TV",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 565,
            question: "Господин Президент, участие в заседаниях парламента и несение бремени страны становится для нас затруднительным. Мы хотим повышения зарплаты.",
            answers: [
                {
                    text: "Я одобрю повышение.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Мы не можем выделить на это бюджет.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Члены парламента",
            photo: elonMusk, // burayı değiş
            level: 2,
        },
        {
            id: 566,
            question: "Я рекомендую разместить подразделения специального назначения в районе, чтобы обеспечить безопасность вашего горного дома за пределами столицы. Жду вашего одобрения.",
            answers: [
                {
                    text: "Немедленно разверните команды.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Это излишне для горного дома.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Главный советник президента",
            photo: chiefAdvisor,
            level: 2,
        },
        {
            id: 567,
            question: "После долгих размышлений я понял, что был неправ. Я хочу работать в вашей партии от вашего имени. Вы примете меня?",
            answers: [
                {
                    text: "Конечно, наши двери открыты для всех.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "В партии нет свободных мест.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Бывший лидер оппозиции Васил Левски",
            photo: vasilLevski,
            level: 2,
        },
        {
            id: 568,
            question: "Дорогой муж, знаменитый Кёфтеджи Вертун в последнее время стал оппозиционным голосом. Что нам делать?",
            answers: [
                {
                    text: "Конфискуйте под предлогом незаконного мяса.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Предложите хорошую взятку.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Ваша жена Дора",
            photo: chiefAdvisor, //değiştir
            level: 2,
        },
        {
            id: 569,
            question: "Я хочу снять с эфира сериал «Запретная любовь», один из самых популярных в стране. Этот сериал негативно влияет на нашу семейную структуру.",
            answers: [
                {
                    text: "Снимите сериал с эфира.",
                    effect: {
                        budget: -20,
                        publicSupport: +10,
                        internationalRelations: -20,
                    },
                },
                {
                    text: "Пусть он останется в эфире.",
                    effect: {
                        budget: +20,
                        publicSupport: -10,
                        internationalRelations: -10,
                    },
                }
            ],
            title: "Глава Управления по регулированию телевидения",
            photo: rtukBaskan, //değiştir
            level: 2,
        },
    ],
};
import developer from "../../public/non-ministers/developer.webp";
import elonMusk from "../../public/non-ministers/elon-musk.webp";
import emekli from "../../public/non-ministers/emekli.webp";
import genelkurmay from "../../public/non-ministers/genelkurmay.webp";
import putin from "../../public/non-ministers/putin.webp";
// import reporter from "../../public/non-ministers/reporter.webp";
import trump from "../../public/non-ministers/trump.webp";
// import tuik from "../../public/non-ministers/TUIK.webp";
import nebati from "../../public/non-ministers/nureddin-nebati.webp";
//import rtukBaskan from "../../public/non-ministers/rtuk-baskani.webp";
import liamNeeson from "../../public/non-ministers/liam-neeson.webp";

// 1 soru var
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
    ],
};
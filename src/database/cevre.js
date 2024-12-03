import cevreBakani from "../../public/ministers/cevre-sehir-bakani.webp";
// 7 soru var
export const cevreQuestions = {
    tr: [
        {
            id: 30,
            question: "Şehirleşme hızla artıyor ve yeşil alanlar azalıyor. Şehirlerdeki nüfus artışı ve şehirleşme hakkında ne düşünüyorsunuz?",
            answers: [
                {
                    text: "Şehirleşme devam etmeli",
                    effect: {
                        publicSupport: -5,
                        agriculturalProduction: -15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Yeşil alanlar korunmalı",
                    effect: {
                        publicSupport: +5,
                        budget: +15,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                        internalSecurity: +5,
                    },
                    listID: "cevre1",
                }
            ],
            title: "Çevre ve Şehircilik Bakanı",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 31,
            question: "Şehirlerdeki altyapı eskimiş durumda. Altyapının yenilenmesi gerekiyor. Ancak yeni çevre projeleri de gündemde. Öneriniz nedir?",
            answers: [
                {
                    text: "Önce şehir sorunları çözülmeli",
                    effect: {
                        publicSupport: +10,
                        budget: -20,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Önce çevre projeleri uygulanmalı",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        agriculturalProduction: +5,
                    }
                }
            ],
            title: "Çevre ve Şehircilik Bakanı",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 32,
            question: "Bazı bölgelerde hava kirliliği kritik seviyelerde. Hava kirliliğiyle mücadele için ciddi önlemler alabiliriz...",
            answers: [
                {
                    text: "Temiz hava sahaları açın",
                    effect: {
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Ekonomik büyüme sürdürülmeli",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Çevre ve Şehircilik Bakanı",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 33,
            question: "Şehirlerde enerji tüketimi hızla artıyor. Yenilenebilir enerji projelerine yatırım yapabiliriz. Ya da mevcut enerji altyapısını genişletebiliriz.",
            answers: [
                {
                    text: "Mevcut altyapıyı güçlendirin",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -10
                    }
                },
                {
                    text: "Çevre dostu projelere yatırım yapın",
                    effect: {
                        budget: 0,
                        infrastructureAndEnvironment: +5,
                        internationalRelations: +10,
                    },
                    listID: "cevre2",
                }
            ],
            title: "Çevre ve Şehircilik Bakanı",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 34,
            question: "Turizm kıyılarda hızla gelişiyor, ancak yoğun turist akımı sebebiyle deniz ekosistemi tehdit altında. ",
            answers: [
                {
                    text: "Turizmi destekleyeceğiz",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -20,
                        internationalRelations: +10,
                    },
                    listID: "cevre3",
                },
                {
                    text: "Kıyıları koruma altına alacağız",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                        internationalRelations: -20,
                    }
                }
            ],
            title: "Çevre ve Şehircilik Bakanı",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 35,
            question: "Sanayi tesisleri doğaya ciddi zararlar veriyor. Özellikle bazı firmaların kuralları hiçe saydıkları tespit edildi.",
            answers: [
                {
                    text: "Kural tanımayan firmalara el konulsun",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                    }
                },
                {
                    text: "İhlalleri yapanlara ağır cezalar verilsin",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +5,
                    },
                    listID: "cevre3",
                },
            ],
            title: "Çevre ve Şehircilik Bakanı",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 36,
            question: "Bir yabancı ortaklı maden şirketi ormanlık alanda izinsiz kazı çalışmaları yaparken yakalandı. Bunun için de ormanlık alanda çok sayıda ağaç kesilmiş.",
            answers: [
                {
                    text: "Devlet şirkete el koymalıdır",
                    effect: {
                        publicSupport: -10,
                        infrastructureAndEnvironment: -20,
                        agriculturalProduction: -10,
                        budget: +20,
                        internationalRelations: -25,
                    },
                    listID: "",
                },
                {
                    text: "Çıkarılan madenlere el koyulsun ve ağaçlandırma başlasın",
                    effect: {
                        agriculturalProduction: +10,
                        budget: +10,
                        publicSupport: +5,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Çevre ve Şehircilik Bakanı",
            photo: cevreBakani,
            level: 1,
        },
    ],
    en: [
        {
            id: 30,
            question: "Urbanization is rising, green spaces shrinking. What are your thoughts on city population growth and urbanization?",
            answers: [
                {
                    text: "Urbanization should continue",
                    effect: {
                        publicSupport: -5,
                        agriculturalProduction: -15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Green spaces must be preserved",
                    effect: {
                        publicSupport: +5,
                        budget: +15,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                        internalSecurity: +5,
                    },
                    listID: "cevre1",
                }
            ],
            title: "Minister of Urbanization",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 31,
            question: "City infrastructure is outdated and needs renewal, but environmental projects are also planned. What is your suggestion?",
            answers: [
                {
                    text: "Solve infrastructure problems",
                    effect: {
                        publicSupport: +10,
                        budget: -20,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Invest in environmental projects",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        agriculturalProduction: +5,
                    }
                }
            ],
            title: "Minister of Urbanization",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 32,
            question: "In some regions, air pollution is at critical levels. We can take serious measures to combat air pollution...",
            answers: [
                {
                    text: "Establish clean air zones",
                    effect: {
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Increase fines for polluters",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Minister of Urbanization",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 33,
            question: "City energy use is rising. Should we invest in renewable energy projects or expand current infrastructure?",
            answers: [
                {
                    text: "Invest in existing infrastructure",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -10
                    }
                },
                {
                    text: "Invest in environment projects",
                    effect: {
                        budget: 0,
                        infrastructureAndEnvironment: +5,
                        internationalRelations: +10,
                    },
                    listID: "cevre2",
                }
            ],
            title: "Minister of Urbanization",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 34,
            question: "Tourism is rapidly developing along the coasts, but the marine ecosystem is under threat due to heavy tourist influx.",
            answers: [
                {
                    text: "Support tourism",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -20,
                        internationalRelations: +10,
                    },
                    listID: "cevre3",
                },
                {
                    text: "Protect the coasts",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                        internationalRelations: -20,
                    }
                }
            ],
            title: "Minister of Urbanization",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 35,
            question: "Industrial facilities harm nature, with some companies blatantly ignoring regulations.",
            answers: [
                {
                    text: "Seize those companies",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                    }
                },
                {
                    text: "Impose heavy penalties",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +5,
                    },
                    listID: "cevre3",
                },
            ],
            title: "Minister of Urbanization",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 36,
            question: "A foreign mining company was caught illegally excavating in a forest, cutting down numerous trees.",
            answers: [
                {
                    text: "Seize the company",
                    effect: {
                        publicSupport: -10,
                        infrastructureAndEnvironment: -20,
                        agriculturalProduction: -10,
                        budget: +20,
                        internationalRelations: -25,
                    },
                    listID: "",
                },
                {
                    text: "Initiate reforestation",
                    effect: {
                        agriculturalProduction: +10,
                        budget: +10,
                        publicSupport: +5,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Minister of Urbanization",
            photo: cevreBakani,
            level: 1,
        },
    ],
    de: [
        {
            id: 30,
            question: "Die Urbanisierung nimmt zu, die Grünflächen schrumpfen. Was denken Sie über das Bevölkerungswachstum in den Städten und die Urbanisierung?",
            answers: [
                {
                    text: "Die Urbanisierung sollte fortgesetzt werden",
                    effect: {
                        publicSupport: -5,
                        agriculturalProduction: -15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Grünflächen müssen erhalten bleiben",
                    effect: {
                        publicSupport: +5,
                        budget: +15,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                        internalSecurity: +5,
                    },
                    listID: "cevre1",
                }
            ],
            title: "Minister für Urbanisierung",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 31,
            question: "Die städtische Infrastruktur ist veraltet und muss erneuert werden, aber auch Umweltprojekte sind geplant. Was schlagen Sie vor?",
            answers: [
                {
                    text: "Infrastrukturprobleme lösen",
                    effect: {
                        publicSupport: +10,
                        budget: -20,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "In Umweltprojekte investieren",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        agriculturalProduction: +5,
                    }
                }
            ],
            title: "Minister für Urbanisierung",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 32,
            question: "In einigen Regionen ist die Luftverschmutzung auf kritischem Niveau. Wir können ernsthafte Maßnahmen ergreifen, um die Luftverschmutzung zu bekämpfen...",
            answers: [
                {
                    text: "Saubere Luftzonen einrichten",
                    effect: {
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Strafgelder für Verschmutzer erhöhen",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Minister für Urbanisierung",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 33,
            question: "Der Energieverbrauch der Städte steigt. Sollten wir in erneuerbare Energieprojekte investieren oder die bestehende Infrastruktur ausbauen?",
            answers: [
                {
                    text: "In bestehende Infrastruktur investieren",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -10
                    }
                },
                {
                    text: "In Umweltprojekte investieren",
                    effect: {
                        budget: 0,
                        infrastructureAndEnvironment: +5,
                        internationalRelations: +10,
                    },
                    listID: "cevre2",
                }
            ],
            title: "Minister für Urbanisierung",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 34,
            question: "Der Tourismus entwickelt sich entlang der Küsten rasant, aber das Meeresökosystem ist durch den starken Touristenandrang bedroht.",
            answers: [
                {
                    text: "Den Tourismus unterstützen",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -20,
                        internationalRelations: +10,
                    },
                    listID: "cevre3",
                },
                {
                    text: "Die Küsten schützen",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                        internationalRelations: -20,
                    }
                }
            ],
            title: "Minister für Urbanisierung",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 35,
            question: "Industrielle Anlagen schaden der Natur, einige Unternehmen ignorieren die Vorschriften offen.",
            answers: [
                {
                    text: "Diese Unternehmen beschlagnahmen",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                    }
                },
                {
                    text: "Hohe Strafen verhängen",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +5,
                    },
                    listID: "cevre3",
                },
            ],
            title: "Minister für Urbanisierung",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 36,
            question: "Ein ausländisches Bergbauunternehmen wurde beim illegalen Abbau in einem Wald erwischt, dabei wurden zahlreiche Bäume gefällt.",
            answers: [
                {
                    text: "Das Unternehmen beschlagnahmen",
                    effect: {
                        publicSupport: -10,
                        infrastructureAndEnvironment: -20,
                        agriculturalProduction: -10,
                        budget: +20,
                        internationalRelations: -25,
                    },
                    listID: "",
                },
                {
                    text: "Aufforstung einleiten",
                    effect: {
                        agriculturalProduction: +10,
                        budget: +10,
                        publicSupport: +5,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Minister für Urbanisierung",
            photo: cevreBakani,
            level: 1,
        },
    ],
    fr: [
        {
            id: 30,
            question: "L'urbanisation augmente, les espaces verts diminuent. Que pensez-vous de la croissance de la population urbaine et de l'urbanisation?",
            answers: [
                {
                    text: "L'urbanisation doit se poursuivre",
                    effect: {
                        publicSupport: -5,
                        agriculturalProduction: -15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Les espaces verts doivent être préservés",
                    effect: {
                        publicSupport: +5,
                        budget: +15,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                        internalSecurity: +5,
                    },
                    listID: "cevre1",
                }
            ],
            title: "Ministre de l'Urbanisme",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 31,
            question: "Les infrastructures urbaines sont obsolètes et doivent être renouvelées, mais des projets environnementaux sont également prévus. Quelle est votre suggestion ?",
            answers: [
                {
                    text: "Résoudre les problèmes d'infrastructure",
                    effect: {
                        publicSupport: +10,
                        budget: -20,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Investir dans des projets environnementaux",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        agriculturalProduction: +5,
                    }
                }
            ],
            title: "Ministre de l'Urbanisme",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 32,
            question: "Dans certaines régions, la pollution de l'air atteint des niveaux critiques. Nous pouvons prendre des mesures sérieuses pour lutter contre la pollution de l'air...",
            answers: [
                {
                    text: "Créer des zones d'air pur",
                    effect: {
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Augmenter les amendes pour les pollueurs",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Ministre de l'Urbanisme",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 33,
            question: "La consommation d'énergie urbaine augmente. Devons-nous investir dans des projets d'énergie renouvelable ou développer les infrastructures actuelles?",
            answers: [
                {
                    text: "Investir dans les infrastructures existantes",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -10
                    }
                },
                {
                    text: "Investir dans des projets environnementaux",
                    effect: {
                        budget: 0,
                        infrastructureAndEnvironment: +5,
                        internationalRelations: +10,
                    },
                    listID: "cevre2",
                }
            ],
            title: "Ministre de l'Urbanisme",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 34,
            question: "Le tourisme se développe rapidement le long des côtes, mais l'écosystème marin est menacé par l'afflux massif de touristes.",
            answers: [
                {
                    text: "Soutenir le tourisme",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -20,
                        internationalRelations: +10,
                    },
                    listID: "cevre3",
                },
                {
                    text: "Protéger les côtes",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                        internationalRelations: -20,
                    }
                }
            ],
            title: "Ministre de l'Urbanisme",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 35,
            question: "Les installations industrielles nuisent à la nature, certaines entreprises ignorant délibérément les réglementations.",
            answers: [
                {
                    text: "Saisir ces entreprises",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                    }
                },
                {
                    text: "Imposer de lourdes amendes",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +5,
                    },
                    listID: "cevre3",
                },
            ],
            title: "Ministre de l'Urbanisme",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 36,
            question: "Une société minière étrangère a été surprise en train de creuser illégalement dans une forêt, abattant de nombreux arbres.",
            answers: [
                {
                    text: "Saisir l'entreprise",
                    effect: {
                        publicSupport: -10,
                        infrastructureAndEnvironment: -20,
                        agriculturalProduction: -10,
                        budget: +20,
                        internationalRelations: -25,
                    },
                    listID: "",
                },
                {
                    text: "Lancer une reforestation",
                    effect: {
                        agriculturalProduction: +10,
                        budget: +10,
                        publicSupport: +5,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministre de l'Urbanisme",
            photo: cevreBakani,
            level: 1,
        },
    ],
    pt: [
        {
            id: 30,
            question: "A urbanização está aumentando, os espaços verdes estão diminuindo. O que você pensa sobre o crescimento populacional nas cidades e a urbanização?",
            answers: [
                {
                    text: "A urbanização deve continuar",
                    effect: {
                        publicSupport: -5,
                        agriculturalProduction: -15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Os espaços verdes devem ser preservados",
                    effect: {
                        publicSupport: +5,
                        budget: +15,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                        internalSecurity: +5,
                    },
                    listID: "cevre1",
                }
            ],
            title: "Ministro da Urbanização",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 31,
            question: "A infraestrutura das cidades está desatualizada e precisa ser renovada, mas também há projetos ambientais planejados. Qual é sua sugestão?",
            answers: [
                {
                    text: "Resolver problemas de infraestrutura",
                    effect: {
                        publicSupport: +10,
                        budget: -20,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Investir em projetos ambientais",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        agriculturalProduction: +5,
                    }
                }
            ],
            title: "Ministro da Urbanização",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 32,
            question: "Em algumas regiões, a poluição do ar está em níveis críticos. Podemos tomar medidas sérias para combatê-la...",
            answers: [
                {
                    text: "Estabelecer zonas de ar limpo",
                    effect: {
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Aumentar as multas para os poluidores",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Ministro da Urbanização",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 33,
            question: "O uso de energia nas cidades está aumentando. Devemos investir em projetos de energia renovável ou expandir a infraestrutura atual?",
            answers: [
                {
                    text: "Investir na infraestrutura existente",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -10
                    }
                },
                {
                    text: "Investir em projetos ambientais",
                    effect: {
                        budget: 0,
                        infrastructureAndEnvironment: +5,
                        internationalRelations: +10,
                    },
                    listID: "cevre2",
                }
            ],
            title: "Ministro da Urbanização",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 34,
            question: "O turismo está se desenvolvendo rapidamente ao longo das costas, mas o ecossistema marinho está ameaçado devido ao grande fluxo de turistas.",
            answers: [
                {
                    text: "Apoiar o turismo",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -20,
                        internationalRelations: +10,
                    },
                    listID: "cevre3",
                },
                {
                    text: "Proteger as costas",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                        internationalRelations: -20,
                    }
                }
            ],
            title: "Ministro da Urbanização",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 35,
            question: "Instalações industriais prejudicam a natureza, com algumas empresas ignorando descaradamente as regulamentações.",
            answers: [
                {
                    text: "Confiscar essas empresas",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                    }
                },
                {
                    text: "Impor multas pesadas",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +5,
                    },
                    listID: "cevre3",
                },
            ],
            title: "Ministro da Urbanização",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 36,
            question: "Uma empresa estrangeira de mineração foi flagrada escavando ilegalmente em uma floresta, derrubando inúmeras árvores.",
            answers: [
                {
                    text: "Confiscar a empresa",
                    effect: {
                        publicSupport: -10,
                        infrastructureAndEnvironment: -20,
                        agriculturalProduction: -10,
                        budget: +20,
                        internationalRelations: -25,
                    },
                    listID: "",
                },
                {
                    text: "Iniciar reflorestamento",
                    effect: {
                        agriculturalProduction: +10,
                        budget: +10,
                        publicSupport: +5,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministro da Urbanização",
            photo: cevreBakani,
            level: 1,
        },
    ],
    zh: [
        {
            id: 30,
            question: "城市化不断发展，绿地减少。您对城市人口增长和城市化有何看法？",
            answers: [
                {
                    text: "城市化应继续",
                    effect: {
                        publicSupport: -5,
                        agriculturalProduction: -15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        internalSecurity: -10,
                    }
                },
                {
                    text: "必须保护绿地",
                    effect: {
                        publicSupport: +5,
                        budget: +15,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                        internalSecurity: +5,
                    },
                    listID: "cevre1",
                }
            ],
            title: "城市化部长",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 31,
            question: "城市基础设施过时需要更新，但也计划进行环保项目。您有什么建议？",
            answers: [
                {
                    text: "解决基础设施问题",
                    effect: {
                        publicSupport: +10,
                        budget: -20,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "投资环保项目",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        agriculturalProduction: +5,
                    }
                }
            ],
            title: "城市化部长",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 32,
            question: "一些地区的空气污染达到临界水平。我们可以采取严厉措施应对空气污染……",
            answers: [
                {
                    text: "建立清洁空气区",
                    effect: {
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "加重对污染者的罚款",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "城市化部长",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 33,
            question: "城市能源使用量上升。我们应该投资于可再生能源项目还是扩展现有基础设施？",
            answers: [
                {
                    text: "投资现有基础设施",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -10
                    }
                },
                {
                    text: "投资环保项目",
                    effect: {
                        budget: 0,
                        infrastructureAndEnvironment: +5,
                        internationalRelations: +10,
                    },
                    listID: "cevre2",
                }
            ],
            title: "城市化部长",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 34,
            question: "沿海地区旅游业快速发展，但由于大量游客涌入，海洋生态系统面临威胁。",
            answers: [
                {
                    text: "支持旅游业",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -20,
                        internationalRelations: +10,
                    },
                    listID: "cevre3",
                },
                {
                    text: "保护海岸",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                        internationalRelations: -20,
                    }
                }
            ],
            title: "城市化部长",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 35,
            question: "工业设施破坏自然，一些公司公然无视规定。",
            answers: [
                {
                    text: "没收这些公司",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                    }
                },
                {
                    text: "施加重罚",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +5,
                    },
                    listID: "cevre3",
                },
            ],
            title: "城市化部长",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 36,
            question: "一家外国采矿公司在森林中非法开采，砍伐了大量树木。",
            answers: [
                {
                    text: "没收公司",
                    effect: {
                        publicSupport: -10,
                        infrastructureAndEnvironment: -20,
                        agriculturalProduction: -10,
                        budget: +20,
                        internationalRelations: -25,
                    },
                    listID: "",
                },
                {
                    text: "启动重新造林",
                    effect: {
                        agriculturalProduction: +10,
                        budget: +10,
                        publicSupport: +5,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "城市化部长",
            photo: cevreBakani,
            level: 1,
        },
    ],
    es: [
        {
            id: 30,
            question: "La urbanización está en aumento, los espacios verdes están disminuyendo. ¿Qué opinas sobre el crecimiento de la población urbana y la urbanización?",
            answers: [
                {
                    text: "La urbanización debe continuar",
                    effect: {
                        publicSupport: -5,
                        agriculturalProduction: -15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Se deben preservar los espacios verdes",
                    effect: {
                        publicSupport: +5,
                        budget: +15,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                        internalSecurity: +5,
                    },
                    listID: "cevre1",
                }
            ],
            title: "Ministro de Urbanización",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 31,
            question: "La infraestructura de la ciudad está obsoleta y necesita renovación, pero también se planean proyectos ambientales. ¿Cuál es tu sugerencia?",
            answers: [
                {
                    text: "Resolver problemas de infraestructura",
                    effect: {
                        publicSupport: +10,
                        budget: -20,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Invertir en proyectos ambientales",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        agriculturalProduction: +5,
                    }
                }
            ],
            title: "Ministro de Urbanización",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 32,
            question: "En algunas regiones, la contaminación del aire está en niveles críticos. Podemos tomar medidas serias para combatir la contaminación del aire...",
            answers: [
                {
                    text: "Establecer zonas de aire limpio",
                    effect: {
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Aumentar las multas a los contaminadores",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Ministro de Urbanización",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 33,
            question: "El uso de energía en la ciudad está aumentando. ¿Deberíamos invertir en proyectos de energía renovable o expandir la infraestructura actual?",
            answers: [
                {
                    text: "Invertir en la infraestructura existente",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -10
                    }
                },
                {
                    text: "Invertir en proyectos ambientales",
                    effect: {
                        budget: 0,
                        infrastructureAndEnvironment: +5,
                        internationalRelations: +10,
                    },
                    listID: "cevre2",
                }
            ],
            title: "Ministro de Urbanización",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 34,
            question: "El turismo se está desarrollando rápidamente a lo largo de las costas, pero el ecosistema marino está amenazado debido a la gran afluencia de turistas.",
            answers: [
                {
                    text: "Apoyar el turismo",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -20,
                        internationalRelations: +10,
                    },
                    listID: "cevre3",
                },
                {
                    text: "Proteger las costas",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                        internationalRelations: -20,
                    }
                }
            ],
            title: "Ministro de Urbanización",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 35,
            question: "Las instalaciones industriales dañan la naturaleza, y algunas empresas ignoran flagrantemente las regulaciones.",
            answers: [
                {
                    text: "Confiscar esas empresas",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                    }
                },
                {
                    text: "Imponer sanciones severas",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +5,
                    },
                    listID: "cevre3",
                },
            ],
            title: "Ministro de Urbanización",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 36,
            question: "Una empresa minera extranjera fue sorprendida excavando ilegalmente en un bosque, talando numerosos árboles.",
            answers: [
                {
                    text: "Confiscar la empresa",
                    effect: {
                        publicSupport: -10,
                        infrastructureAndEnvironment: -20,
                        agriculturalProduction: -10,
                        budget: +20,
                        internationalRelations: -25,
                    },
                    listID: "",
                },
                {
                    text: "Iniciar reforestación",
                    effect: {
                        agriculturalProduction: +10,
                        budget: +10,
                        publicSupport: +5,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministro de Urbanización",
            photo: cevreBakani,
            level: 1,
        },
    ],
    ru: [
        {
            id: 30,
            question: "Урбанизация растет, зеленые зоны сокращаются. Каковы ваши мысли о росте населения городов и урбанизации?",
            answers: [
                {
                    text: "Урбанизация должна продолжаться",
                    effect: {
                        publicSupport: -5,
                        agriculturalProduction: -15,
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        internalSecurity: -10,
                    }
                },
                {
                    text: "Зеленые зоны должны быть сохранены",
                    effect: {
                        publicSupport: +5,
                        budget: +15,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                        internalSecurity: +5,
                    },
                    listID: "cevre1",
                }
            ],
            title: "Министр урбанизации",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 31,
            question: "Городская инфраструктура устарела и нуждается в обновлении, но также запланированы экологические проекты. Каково ваше предложение?",
            answers: [
                {
                    text: "Решить проблемы инфраструктуры",
                    effect: {
                        publicSupport: +10,
                        budget: -20,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Инвестировать в экологические проекты",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        agriculturalProduction: +5,
                    }
                }
            ],
            title: "Министр урбанизации",
            photo: cevreBakani,
            level: 1,
        },
        {
            id: 32,
            question: "В некоторых регионах уровень загрязнения воздуха критический. Мы можем принять серьезные меры для борьбы с загрязнением воздуха...",
            answers: [
                {
                    text: "Создать зоны чистого воздуха",
                    effect: {
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Увеличить штрафы для загрязнителей",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Министр урбанизации",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 33,
            question: "Потребление энергии в городах растет. Следует ли нам инвестировать в проекты возобновляемой энергии или расширять существующую инфраструктуру?",
            answers: [
                {
                    text: "Инвестировать в существующую инфраструктуру",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -10
                    }
                },
                {
                    text: "Инвестировать в экологические проекты",
                    effect: {
                        budget: 0,
                        infrastructureAndEnvironment: +5,
                        internationalRelations: +10,
                    },
                    listID: "cevre2",
                }
            ],
            title: "Министр урбанизации",
            photo: cevreBakani,
            level: 2,
        },
        {
            id: 34,
            question: "Туризм быстро развивается вдоль побережья, но морская экосистема находится под угрозой из-за наплыва туристов.",
            answers: [
                {
                    text: "Поддерживать туризм",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -20,
                        internationalRelations: +10,
                    },
                    listID: "cevre3",
                },
                {
                    text: "Защищать побережье",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                        internationalRelations: -20,
                    }
                }
            ],
            title: "Министр урбанизации",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 35,
            question: "Промышленные объекты наносят ущерб природе, некоторые компании откровенно игнорируют правила.",
            answers: [
                {
                    text: "Конфисковать эти компании",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                    }
                },
                {
                    text: "Наложить крупные штрафы",
                    effect: {
                        budget: +10,
                        infrastructureAndEnvironment: -10,
                        agriculturalProduction: +5,
                    },
                    listID: "cevre3",
                },
            ],
            title: "Министр урбанизации",
            photo: cevreBakani,
            level: 3,
        },
        {
            id: 36,
            question: "Иностранная горнодобывающая компания была поймана на незаконных раскопках в лесу, вырубив множество деревьев.",
            answers: [
                {
                    text: "Конфисковать компанию",
                    effect: {
                        publicSupport: -10,
                        infrastructureAndEnvironment: -20,
                        agriculturalProduction: -10,
                        budget: +20,
                        internationalRelations: -25,
                    },
                    listID: "",
                },
                {
                    text: "Начать лесовосстановление",
                    effect: {
                        agriculturalProduction: +10,
                        budget: +10,
                        publicSupport: +5,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Министр урбанизации",
            photo: cevreBakani,
            level: 1,
        },
    ],
};
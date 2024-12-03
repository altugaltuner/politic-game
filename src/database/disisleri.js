import disisleriBakani from "../../public/ministers/disisleri-bakani.webp";
// 4 soru var
export const disisleriQuestions = {
    tr: [
        {
            id: 40,
            question: "Komşu ülkelerle ticaret anlaşmalarını genişletme fırsatımız var. Ancak bazı stratejik sektörlerde yerli üreticiler zorlanabilir.",
            answers: [
                {
                    text: "Anlaşmayı imzalayın",
                    effect: {

                        internationalRelations: +10,
                        agriculturalProduction: -10,
                    },
                    listID: "disisleri1",
                },
                {
                    text: "Anlaşmayı askıya alın",
                    effect: {
                        internationalRelations: -15,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Dışişleri Bakanı",
            photo: disisleriBakani,
            level: 1,
        },
        {
            id: 41,
            question: "Uluslararası PAME örgütüne katılım sağlayabiliriz, bu ülkemizin uluslarası arenada gücünü artıracak ama ulusal bağımsızlık kararlarımızı sınırlayabilir.",
            answers: [
                {
                    text: "Katılma kararı alınmıştır",
                    effect: {
                        internationalRelations: +10,
                        internalSecurity: -15,
                    }
                },
                {
                    text: "Katılım sürecini erteleyelim",
                    effect: {
                        internationalRelations: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Dışişleri Bakanı",
            photo: disisleriBakani,
            level: 2,
        },
        {
            id: 42,
            question: "Mülteciler konusunda uluslararası bir kriz yaşanıyor. Yüzbinlercesi sınırlarımıza dayanmış durumda...",
            answers: [
                {
                    text: "Sınır kapılarını açın",
                    effect: {
                        publicSupport: -20,
                        internationalRelations: +10,
                        internalSecurity: -15,
                    },
                    listID: "disisleri3",
                },
                {
                    text: "Sınırları koruyun",
                    effect: {
                        publicSupport: +15,
                        internationalRelations: -25,
                        internalSecurity: +10,
                    },
                    listID: "disisleri4",
                }
            ],
            title: "Dışişleri Bakanı",
            photo: disisleriBakani,
            level: 2,
        }
    ],
    en: [
        {
            id: 40,
            question: "We can expand trade deals with neighbors, but local producers in key sectors might face challenges.",
            answers: [
                {
                    text: "Sign the agreement",
                    effect: {

                        internationalRelations: +10,
                        agriculturalProduction: -10,
                    },
                    listID: "disisleri1",
                },
                {
                    text: "Suspend the agreement",
                    effect: {
                        internationalRelations: -15,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Minister of Foreign Affairs",
            photo: disisleriBakani,
            level: 1,
        },
        {
            id: 41,
            question: "Joining the PAME organization boosts global influence but may limit our national independence in decision-making...",
            answers: [
                {
                    text: "We will join",
                    effect: {
                        internationalRelations: +10,
                        internalSecurity: -15,
                    }
                },
                {
                    text: "We won't join",
                    effect: {
                        internationalRelations: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Minister of Foreign Affairs",
            photo: disisleriBakani,
            level: 2,
        },
        {
            id: 42,
            question: "There is an international crisis regarding refugees. Hundreds of thousands have reached our borders...",
            answers: [
                {
                    text: "Open the border gates",
                    effect: {
                        publicSupport: -20,
                        internationalRelations: +10,
                        internalSecurity: -15,
                    },
                    listID: "disisleri3",
                },
                {
                    text: "Protect the borders",
                    effect: {
                        publicSupport: +15,
                        internationalRelations: -25,
                        internalSecurity: +10,
                    },
                    listID: "disisleri4",
                }
            ],
            title: "Minister of Foreign Affairs",
            photo: disisleriBakani,
            level: 2,
        }
    ],
    de: [
        {
            id: 40,
            question: "Wir können Handelsabkommen mit Nachbarn ausweiten, aber lokale Produzenten in wichtigen Sektoren könnten Herausforderungen haben.",
            answers: [
                {
                    text: "Das Abkommen unterzeichnen",
                    effect: {

                        internationalRelations: +10,
                        agriculturalProduction: -10,
                    },
                    listID: "disisleri1",
                },
                {
                    text: "Das Abkommen aussetzen",
                    effect: {
                        internationalRelations: -15,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Außenminister",
            photo: disisleriBakani,
            level: 1,
        },
        {
            id: 41,
            question: "Der Beitritt zur PAME-Organisation erhöht den globalen Einfluss, könnte jedoch die nationale Unabhängigkeit bei der Entscheidungsfindung einschränken...",
            answers: [
                {
                    text: "Wir treten bei",
                    effect: {
                        internationalRelations: +10,
                        internalSecurity: -15,
                    }
                },
                {
                    text: "Wir treten nicht bei",
                    effect: {
                        internationalRelations: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Außenminister",
            photo: disisleriBakani,
            level: 2,
        },
        {
            id: 42,
            question: "Es gibt eine internationale Krise im Zusammenhang mit Flüchtlingen. Hunderttausende haben unsere Grenzen erreicht...",
            answers: [
                {
                    text: "Die Grenztore öffnen",
                    effect: {
                        publicSupport: -20,
                        internationalRelations: +10,
                        internalSecurity: -15,
                    },
                    listID: "disisleri3",
                },
                {
                    text: "Die Grenzen schützen",
                    effect: {
                        publicSupport: +15,
                        internationalRelations: -25,
                        internalSecurity: +10,
                    },
                    listID: "disisleri4",
                }
            ],
            title: "Außenminister",
            photo: disisleriBakani,
            level: 2,
        }
    ],
    fr: [
        {
            id: 40,
            question: "Nous pouvons élargir les accords commerciaux avec nos voisins, mais les producteurs locaux dans des secteurs clés pourraient rencontrer des difficultés.",
            answers: [
                {
                    text: "Signer l'accord",
                    effect: {

                        internationalRelations: +10,
                        agriculturalProduction: -10,
                    },
                    listID: "disisleri1",
                },
                {
                    text: "Suspendre l'accord",
                    effect: {
                        internationalRelations: -15,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministre des Affaires Étrangères",
            photo: disisleriBakani,
            level: 1,
        },
        {
            id: 41,
            question: "Rejoindre l'organisation PAME renforce l'influence mondiale, mais peut limiter notre indépendance nationale dans la prise de décision...",
            answers: [
                {
                    text: "Nous allons rejoindre",
                    effect: {
                        internationalRelations: +10,
                        internalSecurity: -15,
                    }
                },
                {
                    text: "Nous ne rejoindrons pas",
                    effect: {
                        internationalRelations: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministre des Affaires Étrangères",
            photo: disisleriBakani,
            level: 2,
        },
        {
            id: 42,
            question: "Il y a une crise internationale concernant les réfugiés. Des centaines de milliers sont arrivés à nos frontières...",
            answers: [
                {
                    text: "Ouvrir les portes des frontières",
                    effect: {
                        publicSupport: -20,
                        internationalRelations: +10,
                        internalSecurity: -15,
                    },
                    listID: "disisleri3",
                },
                {
                    text: "Protéger les frontières",
                    effect: {
                        publicSupport: +15,
                        internationalRelations: -25,
                        internalSecurity: +10,
                    },
                    listID: "disisleri4",
                }
            ],
            title: "Ministre des Affaires Étrangères",
            photo: disisleriBakani,
            level: 2,
        }
    ],
    pt: [
        {
            id: 40,
            question: "Podemos expandir acordos comerciais com os vizinhos, mas os produtores locais em setores-chave podem enfrentar desafios.",
            answers: [
                {
                    text: "Assinar o acordo",
                    effect: {

                        internationalRelations: +10,
                        agriculturalProduction: -10,
                    },
                    listID: "disisleri1",
                },
                {
                    text: "Suspender o acordo",
                    effect: {
                        internationalRelations: -15,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministro das Relações Exteriores",
            photo: disisleriBakani,
            level: 1,
        },
        {
            id: 41,
            question: "Ingressar na organização PAME aumenta a influência global, mas pode limitar nossa independência nacional nas tomadas de decisão...",
            answers: [
                {
                    text: "Vamos aderir",
                    effect: {
                        internationalRelations: +10,
                        internalSecurity: -15,
                    }
                },
                {
                    text: "Não vamos aderir",
                    effect: {
                        internationalRelations: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro das Relações Exteriores",
            photo: disisleriBakani,
            level: 2,
        },
        {
            id: 42,
            question: "Há uma crise internacional relacionada aos refugiados. Centenas de milhares chegaram às nossas fronteiras...",
            answers: [
                {
                    text: "Abrir os portões fronteiriços",
                    effect: {
                        publicSupport: -20,
                        internationalRelations: +10,
                        internalSecurity: -15,
                    },
                    listID: "disisleri3",
                },
                {
                    text: "Proteger as fronteiras",
                    effect: {
                        publicSupport: +15,
                        internationalRelations: -25,
                        internalSecurity: +10,
                    },
                    listID: "disisleri4",
                }
            ],
            title: "Ministro das Relações Exteriores",
            photo: disisleriBakani,
            level: 2,
        }
    ],
    zh: [
        {
            id: 40,
            question: "我们可以扩大与邻国的贸易协议，但关键行业的本地生产者可能面临挑战。",
            answers: [
                {
                    text: "签署协议",
                    effect: {

                        internationalRelations: +10,
                        agriculturalProduction: -10,
                    },
                    listID: "disisleri1",
                },
                {
                    text: "暂停协议",
                    effect: {
                        internationalRelations: -15,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "外交部长",
            photo: disisleriBakani,
            level: 1,
        },
        {
            id: 41,
            question: "加入PAME组织可以提高全球影响力，但可能限制我们在决策中的国家独立性……",
            answers: [
                {
                    text: "我们将加入",
                    effect: {
                        internationalRelations: +10,
                        internalSecurity: -15,
                    }
                },
                {
                    text: "我们不会加入",
                    effect: {
                        internationalRelations: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "外交部长",
            photo: disisleriBakani,
            level: 2,
        },
        {
            id: 42,
            question: "关于难民问题出现了国际危机。数十万人已经到达我们的边境……",
            answers: [
                {
                    text: "打开边境大门",
                    effect: {
                        publicSupport: -20,
                        internationalRelations: +10,
                        internalSecurity: -15,
                    },
                    listID: "disisleri3",
                },
                {
                    text: "保护边境",
                    effect: {
                        publicSupport: +15,
                        internationalRelations: -25,
                        internalSecurity: +10,
                    },
                    listID: "disisleri4",
                }
            ],
            title: "外交部长",
            photo: disisleriBakani,
            level: 2,
        }
    ],
    es: [
        {
            id: 40,
            question: "Podemos ampliar los acuerdos comerciales con los vecinos, pero los productores locales en sectores clave podrían enfrentar desafíos.",
            answers: [
                {
                    text: "Firmar el acuerdo",
                    effect: {

                        internationalRelations: +10,
                        agriculturalProduction: -10,
                    },
                    listID: "disisleri1",
                },
                {
                    text: "Suspender el acuerdo",
                    effect: {
                        internationalRelations: -15,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministro de Relaciones Exteriores",
            photo: disisleriBakani,
            level: 1,
        },
        {
            id: 41,
            question: "Unirse a la organización PAME aumenta nuestra influencia global, pero puede limitar nuestra independencia nacional en la toma de decisiones...",
            answers: [
                {
                    text: "Nos uniremos",
                    effect: {
                        internationalRelations: +10,
                        internalSecurity: -15,
                    }
                },
                {
                    text: "No nos uniremos",
                    effect: {
                        internationalRelations: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro de Relaciones Exteriores",
            photo: disisleriBakani,
            level: 2,
        },
        {
            id: 42,
            question: "Hay una crisis internacional relacionada con los refugiados. Cientos de miles han llegado a nuestras fronteras...",
            answers: [
                {
                    text: "Abrir las puertas fronterizas",
                    effect: {
                        publicSupport: -20,
                        internationalRelations: +10,
                        internalSecurity: -15,
                    },
                    listID: "disisleri3",
                },
                {
                    text: "Proteger las fronteras",
                    effect: {
                        publicSupport: +15,
                        internationalRelations: -25,
                        internalSecurity: +10,
                    },
                    listID: "disisleri4",
                }
            ],
            title: "Ministro de Relaciones Exteriores",
            photo: disisleriBakani,
            level: 2,
        }
    ],
    ru: [
        {
            id: 40,
            question: "Мы можем расширить торговые соглашения с соседями, но местные производители в ключевых секторах могут столкнуться с трудностями.",
            answers: [
                {
                    text: "Подписать соглашение",
                    effect: {

                        internationalRelations: +10,
                        agriculturalProduction: -10,
                    },
                    listID: "disisleri1",
                },
                {
                    text: "Приостановить соглашение",
                    effect: {
                        internationalRelations: -15,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Министр иностранных дел",
            photo: disisleriBakani,
            level: 1,
        },
        {
            id: 41,
            question: "Присоединение к организации PAME повышает глобальное влияние, но может ограничить нашу национальную независимость в принятии решений...",
            answers: [
                {
                    text: "Мы присоединимся",
                    effect: {
                        internationalRelations: +10,
                        internalSecurity: -15,
                    }
                },
                {
                    text: "Мы не присоединимся",
                    effect: {
                        internationalRelations: -15,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Министр иностранных дел",
            photo: disisleriBakani,
            level: 2,
        },
        {
            id: 42,
            question: "Существует международный кризис, связанный с беженцами. Сотни тысяч прибыли к нашим границам...",
            answers: [
                {
                    text: "Открыть пограничные ворота",
                    effect: {
                        publicSupport: -20,
                        internationalRelations: +10,
                        internalSecurity: -15,
                    },
                    listID: "disisleri3",
                },
                {
                    text: "Защитить границы",
                    effect: {
                        publicSupport: +15,
                        internationalRelations: -25,
                        internalSecurity: +10,
                    },
                    listID: "disisleri4",
                }
            ],
            title: "Министр иностранных дел",
            photo: disisleriBakani,
            level: 2,
        }
    ],
};
import savunmaBakani from "../../public/ministers/savunma-bakani.webp";
// 2 soru var
export const savunmaQuestions = {
    tr: [
        {
            id: 120,
            question: "Yerli savunma sanayi projelerini hızlandırmak istiyoruz. Bu, uzun vadede askeri gücümüzü artırır, ancak kısa vadede bütçeyi zorlayabilir.",
            answers: [
                {
                    text: "Yatırımlar yapılacak",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                },
                {
                    text: "Bütçemiz bunu kaldırmaz",
                    effect: {
                        budget: +15,
                        internalSecurity: -20,
                    }
                }
            ],
            title: "Milli Savunma Bakanı",
            photo: savunmaBakani,
            level: 1,
        },
        {
            id: 121,
            question: "İsimsiz bir ihbara göre bugün öğlen saat 13.30'da PlazarInn AVM'de bombalı bir eylem gerçekleştirilecekmiş. Aksiyon almalı mıyız ?",
            answers: [
                {
                    text: "Diğerleri gibi bu da bir aldatmaca olabilir",
                    effect: {
                        budget: -15,
                        internalSecurity: -20,
                        internationalRelations: -10,
                    },
                    listID: "savunma1",
                },
                {
                    text: "Güvenlik güçlerini bölgeye yönlendirin",
                    effect: {
                        budget: -10,
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                    listID: "savunma2",
                }
            ],
            title: "Milli Savunma Bakanı",
            photo: savunmaBakani,
            level: 2,
        },
    ],
    en: [
        {
            id: 120,
            question: "Our goal is to advance national defense projects, strengthening military power in the long term but putting pressure on the budget in the short term.",
            answers: [
                {
                    text: "Initiate the projects",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                },
                {
                    text: "Our budget is not sufficient",
                    effect: {
                        budget: +15,
                        internalSecurity: -20,
                    }
                }
            ],
            title: "Minister of National Defense",
            photo: savunmaBakani,
            level: 1,
        },
        {
            id: 121,
            question: "According to an anonymous report, a bomb attack is expected at the PlazarInn mall at 1:30 PM today. Should we take action?",
            answers: [
                {
                    text: "This is a hoax",
                    effect: {
                        budget: -15,
                        internalSecurity: -20,
                        internationalRelations: -10,
                    },
                    listID: "savunma1",
                },
                {
                    text: "Direct security forces",
                    effect: {
                        budget: -10,
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                    listID: "savunma2",
                }
            ],
            title: "Minister of National Defense",
            photo: savunmaBakani,
            level: 2,
        },
    ],
    de: [
        {
            id: 120,
            question: "Unser Ziel ist es, nationale Verteidigungsprojekte zu fördern, um die militärische Stärke langfristig zu stärken, jedoch das Budget kurzfristig zu belasten.",
            answers: [
                {
                    text: "Die Projekte starten",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                },
                {
                    text: "Unser Budget reicht nicht aus",
                    effect: {
                        budget: +15,
                        internalSecurity: -20,
                    }
                }
            ],
            title: "Verteidigungsminister",
            photo: savunmaBakani,
            level: 1,
        },
        {
            id: 121,
            question: "Einer anonymen Beschwerde zufolge wird heute um 13:30 Uhr ein Bombenanschlag im Einkaufszentrum PlazarInn erwartet. Sollten wir Maßnahmen ergreifen?",
            answers: [
                {
                    text: "Das ist ein Scherz",
                    effect: {
                        budget: -15,
                        internalSecurity: -20,
                        internationalRelations: -10,
                    },
                    listID: "savunma1",
                },
                {
                    text: "Die Sicherheitskräfte anweisen",
                    effect: {
                        budget: -10,
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                    listID: "savunma2",
                }
            ],
            title: "Verteidigungsminister",
            photo: savunmaBakani,
            level: 2,
        },
    ],
    fr: [
        {
            id: 120,
            question: "Notre objectif est de promouvoir des projets de défense nationaux, renforçant le pouvoir militaire à long terme, mais mettant le budget sous pression à court terme.",
            answers: [
                {
                    text: "Lancer les projets",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                },
                {
                    text: "Notre budget est insuffisant",
                    effect: {
                        budget: +15,
                        internalSecurity: -20,
                    }
                }
            ],
            title: "Ministre de la Défense Nationale",
            photo: savunmaBakani,
            level: 1,
        },
        {
            id: 121,
            question: "Selon une dénonciation anonyme, une attaque à la bombe est attendue aujourd'hui à 13h30 au centre commercial PlazarInn. Devons-nous prendre des mesures ?",
            answers: [
                {
                    text: "C'est une blague",
                    effect: {
                        budget: -15,
                        internalSecurity: -20,
                        internationalRelations: -10,
                    },
                    listID: "savunma1",
                },
                {
                    text: "Diriger les forces de sécurité",
                    effect: {
                        budget: -10,
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                    listID: "savunma2",
                }
            ],
            title: "Ministre de la Défense Nationale",
            photo: savunmaBakani,
            level: 2,
        },
    ],
    pt: [
        {
            id: 120,
            question: "Nosso objetivo é impulsionar projetos de defesa nacionais, fortalecendo o poder militar a longo prazo, mas pressionando o orçamento a curto prazo.",
            answers: [
                {
                    text: "Iniciar os projetos",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                },
                {
                    text: "Nosso orçamento não é suficiente",
                    effect: {
                        budget: +15,
                        internalSecurity: -20,
                    }
                }
            ],
            title: "Ministro da Defesa Nacional",
            photo: savunmaBakani,
            level: 1,
        },
        {
            id: 121,
            question: "De acordo com uma denúncia anônima, espera-se um ataque com bomba no shopping PlazarInn às 13:30 de hoje. Devemos tomar medidas?",
            answers: [
                {
                    text: "Isso é uma brincadeira",
                    effect: {
                        budget: -15,
                        internalSecurity: -20,
                        internationalRelations: -10,
                    },
                    listID: "savunma1",
                },
                {
                    text: "Direcionar as forças de segurança",
                    effect: {
                        budget: -10,
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                    listID: "savunma2",
                }
            ],
            title: "Ministro da Defesa Nacional",
            photo: savunmaBakani,
            level: 2,
        },
    ],
    zh: [
        {
            id: 120,
            question: "我们的目标是推进国防项目，长期内增强军事力量，但短期内会对预算造成压力。",
            answers: [
                {
                    text: "启动项目",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                },
                {
                    text: "我们的预算不足",
                    effect: {
                        budget: +15,
                        internalSecurity: -20,
                    }
                }
            ],
            title: "国防部长",
            photo: savunmaBakani,
            level: 1,
        },
        {
            id: 121,
            question: "根据匿名举报，今天下午13:30将在PlazarInn购物中心发生炸弹袭击。我们是否应该采取措施？",
            answers: [
                {
                    text: "这是个玩笑",
                    effect: {
                        budget: -15,
                        internalSecurity: -20,
                        internationalRelations: -10,
                    },
                    listID: "savunma1",
                },
                {
                    text: "指挥安全部队",
                    effect: {
                        budget: -10,
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                    listID: "savunma2",
                }
            ],
            title: "国防部长",
            photo: savunmaBakani,
            level: 2,
        },
    ],
    es: [
        {
            id: 120,
            question: "Queremos impulsar los proyectos de defensa nacional, mejorando el poder militar a largo plazo pero tensando el presupuesto a corto plazo.",
            answers: [
                {
                    text: "Iniciar los proyectos",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                },
                {
                    text: "Iniciar los proyectos",
                    effect: {
                        budget: +15,
                        internalSecurity: -20,
                    }
                }
            ],
            title: "Ministro de Defensa Nacional",
            photo: savunmaBakani,
            level: 1,
        },
        {
            id: 121,
            question: "Según una denuncia anónima, se espera un ataque con bomba en el centro comercial PlazarInn a la 1:30 PM de hoy. ¿Deberíamos tomar medidas?",
            answers: [
                {
                    text: "Esto es una broma",
                    effect: {
                        budget: -15,
                        internalSecurity: -20,
                        internationalRelations: -10,
                    },
                    listID: "savunma1",
                },
                {
                    text: "Dirigir a las fuerzas de seguridad",
                    effect: {
                        budget: -10,
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                    listID: "savunma2",
                }
            ],
            title: "Ministro de Defensa Nacional",
            photo: savunmaBakani,
            level: 2,
        },
    ],
    ru: [
        {
            id: 120,
            question: "Наша цель - продвигать национальные оборонные проекты, укрепляя военную мощь в долгосрочной перспективе, но оказывая давление на бюджет в краткосрочной.",
            answers: [
                {
                    text: "Начать проекты",
                    effect: {
                        budget: -15,
                        internalSecurity: +10,
                    }
                },
                {
                    text: "Нашего бюджета недостаточно",
                    effect: {
                        budget: +15,
                        internalSecurity: -20,
                    }
                }
            ],
            title: "Министр национальной обороны",
            photo: savunmaBakani,
            level: 1,
        },
        {
            id: 121,
            question: "Согласно анонимному сообщению, ожидается бомбовая атака в торговом центре PlazarInn сегодня в 13:30. Следует ли нам принять меры?",
            answers: [
                {
                    text: "Это шутка",
                    effect: {
                        budget: -15,
                        internalSecurity: -20,
                        internationalRelations: -10,
                    },
                    listID: "savunma1",
                },
                {
                    text: "Направить силы безопасности",
                    effect: {
                        budget: -10,
                        internalSecurity: +10,
                        internationalRelations: +10,
                    },
                    listID: "savunma2",
                }
            ],
            title: "Министр национальной обороны",
            photo: savunmaBakani,
            level: 2,
        },
    ],
};
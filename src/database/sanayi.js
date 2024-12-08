import sanayiBakani from "../../public/ministers/sanayi-bakani.webp";
// 4 soru var
export const sanayiQuestions = {
    tr: [
        {
            id: 110,
            question: "Sanayimizin teknoloji altyapısı zayıf. Teknoloji yatırımlarını arttırmayı öneriyorum",
            answers: [
                {
                    text: "Onay veriyorum",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Dev teknoloji şirketlerinin inisiyatifine bırakın",
                    effect: {
                        publicSupport: -15,
                        budget: +5,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Sanayi ve Teknoloji Bakanı",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 111,
            question: "Yerli otomobil üretimi projesi büyük ilgi görüyor. Nasıl bir politika izlemeliyiz?",
            answers: [
                {
                    text: "Bir an önce satışa çıkarılsın",
                    effect: {
                        publicSupport: -10,
                        budget: +20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi1",
                },
                {
                    text: "Eksiklerine odaklanılsın ve geliştirmeye devam edilsin",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Sanayi ve Teknoloji Bakanı",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 112,
            question: "Türkiye'nin dijital dönüşüm süreci hızlanıyor. Bu süreçte hangi alanlara yatırım yapmalıyız?",
            answers: [
                {
                    text: "Teknoloji startuplarına",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi2",
                },
                {
                    text: "Büyük sanayi şirketlerine",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Sanayi ve Teknoloji Bakanı",
            photo: sanayiBakani,
            level: 1,
        },
        {
            id: 113,
            question: "Aylardır komşusunu bombalayan Folkistan, Türkiye'den silah talep ediyor. Burada nasıl bir politika izlemeliyiz?",
            answers: [
                {
                    text: "Ticaret devam etmeli",
                    effect: {
                        publicSupport: -10,
                        budget: +25,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Ambargo koyulmalı",
                    effect: {
                        publicSupport: +15,
                        budget: -25,
                        infrastructureAndEnvironment: -10,
                        internationalRelations: +15,
                    }
                }
            ],
            title: "Sanayi ve Teknoloji Bakanı",
            photo: sanayiBakani,
            level: 1,
        },
    ],
    en: [
        {
            id: 110,
            question: "The technological infrastructure of our industry is weak. I propose increasing investments in technology.",
            answers: [
                {
                    text: "I approve",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Leave it to the initiative of big tech companies",
                    effect: {
                        publicSupport: -15,
                        budget: +5,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Minister of Industry and Technology",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 111,
            question: "The national car production project is receiving great interest. What kind of policy should we follow?",
            answers: [
                {
                    text: "Put it on sale",
                    effect: {
                        publicSupport: -10,
                        budget: +20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi1",
                },
                {
                    text: "Continue developing it",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Minister of Industry and Technology",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 112,
            question: "Turkey's digital transformation process is accelerating. In this process, which areas should we invest in?",
            answers: [
                {
                    text: "Tech startups",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi2",
                },
                {
                    text: "Large industrial companies",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Minister of Industry and Technology",
            photo: sanayiBakani,
            level: 1,
        },
        {
            id: 113,
            question: "Folkistan, which has been bombing its neighbor for months, is requesting weapons from Turkey. What policy should we follow here?",
            answers: [
                {
                    text: "Trade should continue",
                    effect: {
                        publicSupport: -10,
                        budget: +25,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "An embargo should be imposed",
                    effect: {
                        publicSupport: +15,
                        budget: -25,
                        infrastructureAndEnvironment: -10,
                        internationalRelations: +15,
                    }
                }
            ],
            title: "Minister of Industry and Technology",
            photo: industryMinister,
            level: 1,
        }

    ],
    de: [
        {
            id: 110,
            question: "Die technologische Infrastruktur unserer Industrie ist schwach. Ich schlage vor, die Investitionen in Technologie zu erhöhen.",
            answers: [
                {
                    text: "Ich stimme zu",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Nicht für jetzt",
                    effect: {
                        publicSupport: -15,
                        budget: +5,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Industrie und Technologieminister",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 111,
            question: "Das Projekt zur Produktion nationaler Autos stößt auf großes Interesse. Welche Politik sollten wir verfolgen?",
            answers: [
                {
                    text: "Zum Verkauf freigeben",
                    effect: {
                        publicSupport: -10,
                        budget: +20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi1",
                },
                {
                    text: "Weiterentwickeln",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Industrie und Technologieminister",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 112,
            question: "Der digitale Transformationsprozess der Türkei beschleunigt sich. In welchen Bereichen sollten wir in diesem Prozess investieren?",
            answers: [
                {
                    text: "Technologische Start-ups",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi2",
                },
                {
                    text: "Große Industrieunternehmen",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Industrie und Technologieminister",
            photo: sanayiBakani,
            level: 1,
        },
        {
            id: 113,
            question: "Folkistan, das seinen Nachbarn seit Monaten bombardiert, fordert Waffen von der Türkei. Welche Politik sollten wir hier verfolgen?",
            answers: [
                {
                    text: "Der Handel sollte fortgesetzt werden",
                    effect: {
                        publicSupport: -10,
                        budget: +25,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Ein Embargo sollte verhängt werden",
                    effect: {
                        publicSupport: +15,
                        budget: -25,
                        infrastructureAndEnvironment: -10,
                        internationalRelations: +15,
                    }
                }
            ],
            title: "Minister für Industrie und Technologie",
            photo: industryMinister,
            level: 1,
        }

    ],
    fr: [
        {
            id: 110,
            question: "L'infrastructure technologique de notre industrie est faible. Je propose d'augmenter les investissements dans la technologie.",
            answers: [
                {
                    text: "J'approuve",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Pas pour le moment",
                    effect: {
                        publicSupport: -15,
                        budget: +5,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministre de l'Industrie et de la Technologie",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 111,
            question: "Le projet de production de voitures nationales suscite un grand intérêt. Quelle politique devrions-nous suivre ?",
            answers: [
                {
                    text: "Le mettre en vente",
                    effect: {
                        publicSupport: -10,
                        budget: +20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi1",
                },
                {
                    text: "Continuer à le développer",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministre de l'Industrie et de la Technologie",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 112,
            question: "Le processus de transformation numérique de la Turquie s'accélère. Dans ce processus, dans quels domaines devrions-nous investir ?",
            answers: [
                {
                    text: "Startups technologiques",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi2",
                },
                {
                    text: "Grandes entreprises industrielles",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministre de l'Industrie et de la Technologie",
            photo: sanayiBakani,
            level: 1,
        },
        {
            id: 113,
            question: "Folkistan, qui bombarde son voisin depuis des mois, demande des armes à la Turquie. Quelle politique devrions-nous adopter ici ?",
            answers: [
                {
                    text: "Le commerce doit continuer",
                    effect: {
                        publicSupport: -10,
                        budget: +25,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Un embargo doit être imposé",
                    effect: {
                        publicSupport: +15,
                        budget: -25,
                        infrastructureAndEnvironment: -10,
                        internationalRelations: +15,
                    }
                }
            ],
            title: "Ministre de l'Industrie et de la Technologie",
            photo: industryMinister,
            level: 1,
        }

    ],
    pt: [
        {
            id: 110,
            question: "A infraestrutura tecnológica de nossa indústria é fraca. Proponho aumentar os investimentos em tecnologia.",
            answers: [
                {
                    text: "Aprovo",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Não por enquanto",
                    effect: {
                        publicSupport: -15,
                        budget: +5,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministro da Indústria e Tecnologia",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 111,
            question: "O projeto de produção de carros nacionais está recebendo grande interesse. Que tipo de política devemos seguir?",
            answers: [
                {
                    text: "Colocá-lo à venda",
                    effect: {
                        publicSupport: -10,
                        budget: +20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi1",
                },
                {
                    text: "Continuar desenvolvendo",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministro da Indústria e Tecnologia",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 112,
            question: "O processo de transformação digital da Turquia está acelerando. Nesse processo, em que áreas devemos investir?",
            answers: [
                {
                    text: "Startups tecnológicas",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi2",
                },
                {
                    text: "Grandes empresas industriais",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministro da Indústria e Tecnologia",
            photo: sanayiBakani,
            level: 1,
        },
        {
            id: 113,
            question: "Folkistan, que está bombardeando seu vizinho há meses, está solicitando armas à Turquia. Qual política devemos seguir aqui?",
            answers: [
                {
                    text: "O comércio deve continuar",
                    effect: {
                        publicSupport: -10,
                        budget: +25,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Um embargo deve ser imposto",
                    effect: {
                        publicSupport: +15,
                        budget: -25,
                        infrastructureAndEnvironment: -10,
                        internationalRelations: +15,
                    }
                }
            ],
            title: "Ministro da Indústria e Tecnologia",
            photo: industryMinister,
            level: 1,
        }

    ],
    zh: [
        {
            id: 110,
            question: "我们的工业技术基础设施薄弱。我提议增加对技术的投资。",
            answers: [
                {
                    text: "批准",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "暂时不",
                    effect: {
                        publicSupport: -15,
                        budget: +5,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "工业与技术部长",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 111,
            question: "国产汽车生产项目引起了极大关注。我们应该采取什么样的政策？",
            answers: [
                {
                    text: "开始销售",
                    effect: {
                        publicSupport: -10,
                        budget: +20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi1",
                },
                {
                    text: "继续开发",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "工业与技术部长",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 112,
            question: "土耳其的数字化转型进程正在加速。在此过程中，我们应该在哪些领域投资？",
            answers: [
                {
                    text: "技术初创公司",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi2",
                },
                {
                    text: "大型工业企业",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "工业与技术部长",
            photo: sanayiBakani,
            level: 1,
        },
        {
            id: 113,
            question: "福克斯坦已经连续数月轰炸其邻国，现在请求从土耳其获得武器。我们应该采取什么政策？",
            answers: [
                {
                    text: "贸易应继续",
                    effect: {
                        publicSupport: -10,
                        budget: +25,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "应施加禁运",
                    effect: {
                        publicSupport: +15,
                        budget: -25,
                        infrastructureAndEnvironment: -10,
                        internationalRelations: +15,
                    }
                }
            ],
            title: "工业与技术部长",
            photo: industryMinister,
            level: 1,
        }

    ],
    es: [
        {
            id: 110,
            question: "La infraestructura tecnológica de nuestra industria es débil. Propongo aumentar las inversiones en tecnología",
            answers: [
                {
                    text: "Apruebo",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "No ahora",
                    effect: {
                        publicSupport: -15,
                        budget: +5,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministro de Industria y Tecnología",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 111,
            question: "El proyecto de producción de automóviles nacionales está recibiendo un gran interés. ¿Qué tipo de política debemos seguir?",
            answers: [
                {
                    text: "Poner a la venta",
                    effect: {
                        publicSupport: -10,
                        budget: +20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi1",
                },
                {
                    text: "Continuar desarrollando",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministro de Industria y Tecnología",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 112,
            question: "El proceso de transformación digital de Turquía se está acelerando. En este proceso, ¿en qué áreas deberíamos invertir?",
            answers: [
                {
                    text: "Startups tecnológicas",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi2",
                },
                {
                    text: "Grandes empresas industriales",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministro da Indústria e Tecnologia",
            photo: sanayiBakani,
            level: 1,
        },
        {
            id: 113,
            question: "Folkistan, que lleva meses bombardeando a su vecino, está solicitando armas a Turquía. ¿Qué política deberíamos seguir aquí?",
            answers: [
                {
                    text: "El comercio debe continuar",
                    effect: {
                        publicSupport: -10,
                        budget: +25,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Se debe imponer un embargo",
                    effect: {
                        publicSupport: +15,
                        budget: -25,
                        infrastructureAndEnvironment: -10,
                        internationalRelations: +15,
                    }
                }
            ],
            title: "Ministro de Industria y Tecnología",
            photo: industryMinister,
            level: 1,
        }

    ],
    ru: [
        {
            id: 110,
            question: "Технологическая инфраструктура нашей промышленности слаба. Я предлагаю увеличить инвестиции в технологии.",
            answers: [
                {
                    text: "Одобряю",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Не сейчас",
                    effect: {
                        publicSupport: -15,
                        budget: +5,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Министр промышленности и технологий",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 111,
            question: "Проект производства национальных автомобилей вызывает большой интерес. Какую политику нам следует выбрать?",
            answers: [
                {
                    text: "Вывести на продажу",
                    effect: {
                        publicSupport: -10,
                        budget: +20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi1",
                },
                {
                    text: "Продолжить разработку",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Министр промышленности и технологий",
            photo: sanayiBakani,
            level: 2,
        },
        {
            id: 112,
            question: "Процесс цифровой трансформации Турции ускоряется. В какие области нам следует инвестировать в этом процессе?",
            answers: [
                {
                    text: "Технологические стартапы",
                    effect: {
                        publicSupport: +10,
                        budget: -5,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "sanayi2",
                },
                {
                    text: "Крупные промышленные компании",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Министр промышленности и технологий",
            photo: sanayiBakani,
            level: 1,
        },
        {
            id: 113,
            question: "Фолкистан, который уже несколько месяцев бомбит своего соседа, запрашивает оружие у Турции. Какую политику нам следует провести в этом случае?",
            answers: [
                {
                    text: "Торговля должна продолжаться",
                    effect: {
                        publicSupport: -10,
                        budget: +25,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Следует ввести эмбарго",
                    effect: {
                        publicSupport: +15,
                        budget: -25,
                        infrastructureAndEnvironment: -10,
                        internationalRelations: +15,
                    }
                }
            ],
            title: "Министр промышленности и технологий",
            photo: industryMinister,
            level: 1,
        }

    ],
}
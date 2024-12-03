import hazineBakani from "../../public/ministers/hazine-bakani.webp";
// 4 soru var
export const hazineQuestions = {
    tr: [
        {
            id: 80,
            question: "Enflasyon hızla yükseliyor ve halkın alım gücü düşüyor. Merkezi faiz oranını artırarak enflasyonu düşürebiliriz, ancak bu, ekonomik büyümeyi yavaşlatacaktır.",
            answers: [
                {
                    text: "Ekonomistler ile görüşülmeli",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Faizi düşürüp büyümeyi sürdüreceğiz",
                    effect: {
                        publicSupport: -20,
                        budget: -20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "hazine1",
                }
            ],
            title: "Hazine ve Maliye Bakanı",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 81,
            question: "Erken emeklilik konusu hala gündemde. Yaş haddinden emekli olamayan milyonlarca insan çözüm bekliyor. Ancak bu, bütçeye ciddi bir yük getirebilir.",
            answers: [
                {
                    text: "Yasayı geçirin",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        internalSecurity: +10,
                    },
                },
                {
                    text: "Askıya alın",
                    effect: {
                        publicSupport: -15,
                        budget: +15,
                        internalSecurity: -10,
                    }
                }
            ],
            title: "Hazine ve Maliye Bakanı",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 82,
            question: "Tarkisistan ile görüşmelerimiz doğrultusunda bize olan dış borcunun 63 milyon dolar olduğunu tespit ettik. Bu konuda ne gibi bir aksiyon düşünmektesiniz?",
            answers: [
                {
                    text: "Borçlarını sileceğiz",
                    effect: {
                        publicSupport: -10,
                        budget: -10,
                        internationalRelations: +15,
                    },
                },
                {
                    text: "Borcu tahsil edeceğiz",
                    effect: {
                        publicSupport: +10,
                        budget: +15,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Hazine ve Maliye Bakanı",
            photo: hazineBakani,
            level: 2,
        },
        {
            id: 83,
            question: "Sayın Cumhurbaşkanım, vergi borcu milyon dolarları bulmuş 5 şirket tespit ettik. ",
            answers: [
                {
                    text: "Borçlarını sileceğiz",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                    },
                },
                {
                    text: "Borçlarını tahsil edeceğiz",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                    }
                }
            ],
            title: "Hazine ve Maliye Bakanı",
            photo: hazineBakani,
            level: 2,
        },
    ],
    en: [
        {
            id: 80,
            question: "Inflation is rising, reducing purchasing power. Increasing the central interest rate could curb inflation but will slow economic growth.",
            answers: [
                {
                    text: "Consult economists",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Lower the interest rate",
                    effect: {
                        publicSupport: -20,
                        budget: -20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "hazine1",
                }
            ],
            title: "Minister of Treasury",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 81,
            question: "Early retirement remains a hot topic. Millions await a solution, but this could seriously strain the budget.",
            answers: [
                {
                    text: "Approve the law",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        internalSecurity: +10,
                    },
                },
                {
                    text: "Suspend it",
                    effect: {
                        publicSupport: -15,
                        budget: +15,
                        internalSecurity: -10,
                    }
                }
            ],
            title: "Minister of Treasury",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 82,
            question: "Our neighbor, Tarkisistan, owes us $63 million in external debt. What action do you plan to take?",
            answers: [
                {
                    text: "Forgive the debt",
                    effect: {
                        publicSupport: -10,
                        budget: -10,
                        internationalRelations: +15,
                    },
                },
                {
                    text: "Collect the debt",
                    effect: {
                        publicSupport: +10,
                        budget: +15,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Minister of Treasury",
            photo: hazineBakani,
            level: 2,
        },
        {
            id: 83,
            question: "Mr. President, we have identified 5 companies with tax debts amounting to millions of dollars.",
            answers: [
                {
                    text: "Forgive the debt",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                    },
                },
                {
                    text: "Collect the debt",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                    }
                }
            ],
            title: "Minister of Treasury",
            photo: hazineBakani,
            level: 2,
        },
    ],
    de: [
        {
            id: 80,
            question: "Die Inflation steigt und verringert die Kaufkraft. Eine Erhöhung des Leitzinses könnte die Inflation bremsen, aber das Wirtschaftswachstum verlangsamen.",
            answers: [
                {
                    text: "Ökonomen konsultieren",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Den Zinssatz senken",
                    effect: {
                        publicSupport: -20,
                        budget: -20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "hazine1",
                }
            ],
            title: "Finanzminister",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 81,
            question: "Die vorzeitige Pensionierung ist weiterhin ein heißes Thema. Millionen erwarten eine Lösung, doch dies könnte das Budget stark belasten.",
            answers: [
                {
                    text: "Das Gesetz verabschieden",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        internalSecurity: +10,
                    },
                },
                {
                    text: "Es aussetzen",
                    effect: {
                        publicSupport: -15,
                        budget: +15,
                        internalSecurity: -10,
                    }
                }
            ],
            title: "Finanzminister",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 82,
            question: "Unser Nachbar Tarkisistan schuldet uns 63 Millionen Dollar an Auslandsschulden. Welche Maßnahmen planen Sie diesbezüglich?",
            answers: [
                {
                    text: "Die Schulden erlassen",
                    effect: {
                        publicSupport: -10,
                        budget: -10,
                        internationalRelations: +15,
                    },
                },
                {
                    text: "Die Schulden einfordern",
                    effect: {
                        publicSupport: +10,
                        budget: +15,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Finanzminister",
            photo: hazineBakani,
            level: 2,
        },
        {
            id: 83,
            question: "Herr Präsident, wir haben 5 Unternehmen identifiziert, die Steuerschulden in Millionenhöhe haben.",
            answers: [
                {
                    text: "Die Schulden erlassen",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                    },
                },
                {
                    text: "Die Schulden einfordern",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                    }
                }
            ],
            title: "Finanzminister",
            photo: hazineBakani,
            level: 2,
        },
    ],
    fr: [
        {
            id: 80,
            question: "L'inflation augmente, réduisant le pouvoir d'achat. Augmenter le taux d'intérêt central peut freiner l'inflation, mais ralentira la croissance économique.",
            answers: [
                {
                    text: "Consulter des économistes",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Réduire le taux d'intérêt",
                    effect: {
                        publicSupport: -20,
                        budget: -20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "hazine1",
                }
            ],
            title: "Ministre des Finances",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 81,
            question: "La retraite anticipée reste un sujet brûlant. Des millions de personnes attendent une solution, mais cela pourrait mettre sérieusement à mal le budget.",
            answers: [
                {
                    text: "Approuver la loi",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        internalSecurity: +10,
                    },
                },
                {
                    text: "La suspendre",
                    effect: {
                        publicSupport: -15,
                        budget: +15,
                        internalSecurity: -10,
                    }
                }
            ],
            title: "Ministre des Finance",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 82,
            question: "Notre voisin, Tarkisistan, nous doit 63 millions de dollars de dette extérieure. Quelle action prévoyez-vous de prendre à ce sujet ?",
            answers: [
                {
                    text: "Annuler la dette",
                    effect: {
                        publicSupport: -10,
                        budget: -10,
                        internationalRelations: +15,
                    },
                },
                {
                    text: "Recouvrer la dette",
                    effect: {
                        publicSupport: +10,
                        budget: +15,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministre des Finances",
            photo: hazineBakani,
            level: 2,
        },
        {
            id: 83,
            question: "Monsieur le Président, nous avons identifié 5 entreprises ayant des dettes fiscales s'élevant à des millions de dollars.",
            answers: [
                {
                    text: "Annuler la dette",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                    },
                },
                {
                    text: "Recouvrer la dette",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                    }
                }
            ],
            title: "Ministre des Finances",
            photo: hazineBakani,
            level: 2,
        },
    ],
    pt: [
        {
            id: 80,
            question: "A inflação está aumentando, reduzindo o poder de compra. Aumentar a taxa de juros central pode conter a inflação, mas desacelerará o crescimento econômico.",
            answers: [
                {
                    text: "Consultar economistas",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Reduzir a taxa de juros",
                    effect: {
                        publicSupport: -20,
                        budget: -20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "hazine1",
                }
            ],
            title: "Ministro da Fazenda",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 81,
            question: "A aposentadoria antecipada continua sendo um tema quente. Milhões esperam uma solução, mas isso pode tensionar seriamente o orçamento.",
            answers: [
                {
                    text: "Aprovar a lei",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        internalSecurity: +10,
                    },
                },
                {
                    text: "Suspender por enquanto",
                    effect: {
                        publicSupport: -15,
                        budget: +15,
                        internalSecurity: -10,
                    }
                }
            ],
            title: "Ministro da Fazenda",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 82,
            question: "Nosso vizinho, Tarkisistão, nos deve $63 milhões em dívida externa. Que ação planeja tomar a respeito?",
            answers: [
                {
                    text: "Perdoar a dívida",
                    effect: {
                        publicSupport: -10,
                        budget: -10,
                        internationalRelations: +15,
                    },
                },
                {
                    text: "Cobrar a dívida",
                    effect: {
                        publicSupport: +10,
                        budget: +15,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministro da Fazenda",
            photo: hazineBakani,
            level: 2,
        },
        {
            id: 83,
            question: "Senhor Presidente, identificamos 5 empresas com dívidas fiscais que somam milhões de dólares.",
            answers: [
                {
                    text: "Perdoar a dívida",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                    },
                },
                {
                    text: "Cobrar a dívida",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                    }
                }
            ],
            title: "Ministro da Fazenda",
            photo: hazineBakani,
            level: 2,
        },
    ],
    zh: [
        {
            id: 80,
            question: "通货膨胀正在上升，削弱了购买力。提高央行利率可以抑制通胀，但会减缓经济增长。",
            answers: [
                {
                    text: "与经济学家协商",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "降低利率",
                    effect: {
                        publicSupport: -20,
                        budget: -20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "hazine1",
                }
            ],
            title: "财政部长",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 81,
            question: "提前退休仍然是一个热点问题。数百万人期待解决方案，但这可能会严重影响预算。",
            answers: [
                {
                    text: "通过法案",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        internalSecurity: +10,
                    },
                },
                {
                    text: "暂停议案",
                    effect: {
                        publicSupport: -15,
                        budget: +15,
                        internalSecurity: -10,
                    }
                }
            ],
            title: "财政部长",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 82,
            question: "我们的邻国塔克西斯坦欠我们6300万美元的外债。您打算如何处理？",
            answers: [
                {
                    text: "免除债务",
                    effect: {
                        publicSupport: -10,
                        budget: -10,
                        internationalRelations: +15,
                    },
                },
                {
                    text: "追讨债务",
                    effect: {
                        publicSupport: +10,
                        budget: +15,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "财政部长",
            photo: hazineBakani,
            level: 2,
        },
        {
            id: 83,
            question: "总统先生，我们发现5家公司欠下数百万美元的税款。",
            answers: [
                {
                    text: "免除债务",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                    },
                },
                {
                    text: "追讨债务",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                    }
                }
            ],
            title: "财政部长",
            photo: hazineBakani,
            level: 2,
        },
    ],
    es: [
        {
            id: 80,
            question: "La inflación está aumentando, reduciendo el poder adquisitivo. Aumentar la tasa de interés central puede frenar la inflación, pero ralentizará el crecimiento económico.",
            answers: [
                {
                    text: "Consultar con economistas",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Disminuir la tasa de interés",
                    effect: {
                        publicSupport: -20,
                        budget: -20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "hazine1",
                }
            ],
            title: "Ministro de Hacienda",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 81,
            question: "La jubilación anticipada sigue siendo un tema candente. Millones esperan una solución, pero podría tensar mucho el presupuesto.",
            answers: [
                {
                    text: "Aprobar la ley",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        internalSecurity: +10,
                    },
                },
                {
                    text: "Suspenderla",
                    effect: {
                        publicSupport: -15,
                        budget: +15,
                        internalSecurity: -10,
                    }
                }
            ],
            title: "Ministro de Hacienda",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 82,
            question: "Nuestro vecino, Tarkisistán, nos debe $63 millones en deuda externa. ¿Qué acción planea tomar sobre este asunto?",
            answers: [
                {
                    text: "Condonar la deuda",
                    effect: {
                        publicSupport: -10,
                        budget: -10,
                        internationalRelations: +15,
                    },
                },
                {
                    text: "Recuperar la deuda",
                    effect: {
                        publicSupport: +10,
                        budget: +15,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministro de Hacienda",
            photo: hazineBakani,
            level: 2,
        },
        {
            id: 83,
            question: "Señor Presidente, hemos identificado 5 empresas con deudas fiscales por valor de millones de dólares.",
            answers: [
                {
                    text: "Condona la deuda",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                    },
                },
                {
                    text: "Recupera la deuda",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                    }
                }
            ],
            title: "Ministro de Hacienda",
            photo: hazineBakani,
            level: 2,
        },
    ],
    ru: [
        {
            id: 80,
            question: "Инфляция растет, снижая покупательную способность. Повышение центральной процентной ставки может сдержать инфляцию, но замедлит экономический рост.",
            answers: [
                {
                    text: "Проконсультироваться с экономистами",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                        infrastructureAndEnvironment: +10,
                    },
                },
                {
                    text: "Снизить процентную ставку",
                    effect: {
                        publicSupport: -20,
                        budget: -20,
                        infrastructureAndEnvironment: +5,
                    },
                    listID: "hazine1",
                }
            ],
            title: "Министр финансов",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 81,
            question: "Ранний выход на пенсию остается горячей темой. Миллионы ждут решения, но это может серьезно напрячь бюджет.",
            answers: [
                {
                    text: "Принять закон",
                    effect: {
                        publicSupport: +15,
                        budget: -15,
                        internalSecurity: +10,
                    },
                },
                {
                    text: "Приостановить его",
                    effect: {
                        publicSupport: -15,
                        budget: +15,
                        internalSecurity: -10,
                    }
                }
            ],
            title: "Министр финансов",
            photo: hazineBakani,
            level: 1,
        },
        {
            id: 82,
            question: "Наш сосед, Таркисистан, должен нам $63 миллиона внешнего долга. Какие действия вы планируете предпринять по этому поводу?",
            answers: [
                {
                    text: "Списать долг",
                    effect: {
                        publicSupport: -10,
                        budget: -10,
                        internationalRelations: +15,
                    },
                },
                {
                    text: "Взыскать долг",
                    effect: {
                        publicSupport: +10,
                        budget: +15,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Министр финансов",
            photo: hazineBakani,
            level: 2,
        },
        {
            id: 83,
            question: "Господин Президент, мы выявили 5 компаний с налоговыми долгами на миллионы долларов.",
            answers: [
                {
                    text: "Списать долг",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                    },
                },
                {
                    text: "Взыскать долг",
                    effect: {
                        publicSupport: +10,
                        budget: +10,
                    }
                }
            ],
            title: "Министр финансов",
            photo: hazineBakani,
            level: 2,
        },
    ],
};
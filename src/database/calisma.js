import calismaBakani from "../../public/ministers/calisma-bakani.webp";
//3 soru var
export const calismaQuestions = {
    tr: [
        {
            id: 20,
            question: "İşsizlik oranları artıyor ve gençler iş bulmakta zorlanıyor. Ülkenin parlak beyinleri yurt dışına gitmek için yarışıyor.",
            answers: [
                {
                    text: "İşe yerleştirme programları başlatın",
                    effect: {
                        publicSupport: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "İşverenler için vergi indirimleri sağlayın",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Çalışma ve Sosyal Güvenlik Bakanı",
            photo: calismaBakani,
            level: 1,
        },
        {
            id: 21,
            question: "Sayın Başkan, çalışan maaşları çok düşük. Halk, asgari ücretin artırılmasını bekliyor, ancak bu işverenler üzerinde mali baskı yaratabilir.",
            answers: [
                {
                    text: "20% lik zam yapın",
                    effect: {
                        publicSupport: -25,
                        budget: +20,
                        internalSecurity: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "50% lik zam yapın",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Çalışma ve Sosyal Güvenlik Bakanı",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 22,
            question: "Kentleşme hızlanıyor. Kırsal iş gücü azalıyor ve tarım sektörü zayıflıyor. Halk sizden bir aksiyon bekliyor.",
            answers: [
                {
                    text: "Tarımı destekleyin",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Sanayii üretime odaklanın",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Çalışma ve Sosyal Güvenlik Bakanı",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 23,
            question: "Üretimi arttırmak ve kalkınmayı hızlandırmak adına emeklilik yaşını 78'e çıkarmak istiyoruz. Görüşleriniz nelerdir?",
            answers: [
                {
                    text: "Destekliyorum. Emeklilik yaşını yükseltelim",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Çok tepki çekeriz. İptal edin.",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Çalışma ve Sosyal Güvenlik Bakanı",
            photo: calismaBakani,
            level: 2,
        },
    ],
    en: [
        {
            id: 20,
            question: "Unemployment is rising and young people struggle to find jobs as the nation's brightest compete to go abroad.",
            answers: [
                {
                    text: "Initiate job placement programs",
                    effect: {
                        publicSupport: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Provide tax reductions for employers",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Minister of Labor",
            photo: calismaBakani,
            level: 1,
        },
        {
            id: 21,
            question: "Employee salaries are low. The public is expecting a minimum wage increase, but this could place financial pressure on employers.",
            answers: [
                {
                    text: "Implement a 20% raise",
                    effect: {
                        publicSupport: -25,
                        budget: +20,
                        internalSecurity: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Implement a 50% raise",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Minister of Labor",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 22,
            question: "Urbanization accelerates, rural workforce shrinks, agriculture weakens. The public expects action from you.",
            answers: [
                {
                    text: "Support agriculture",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Support industrialization",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Minister of Labor",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 23,
            question: "To increase production and accelerate development, we want to raise the retirement age to 78. What are your thoughts?",
            answers: [
                {
                    text: "I support it. Let's raise it.",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "We would face a lot of backlash. Cancel it.",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Minister of Labor",
            photo: calismaBakani,
            level: 2,
        },
    ],
    de: [
        {
            id: 20,
            question: "Die Arbeitslosigkeit steigt und junge Menschen haben Schwierigkeiten, Arbeit zu finden, während die klügsten des Landes ins Ausland wollen.",
            answers: [
                {
                    text: "Programme zur Arbeitsvermittlung einleiten",
                    effect: {
                        publicSupport: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Steuererleichterungen für Arbeitgeber anbieten",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Arbeitsminister",
            photo: calismaBakani,
            level: 1,
        },
        {
            id: 21,
            question: "Die Gehälter der Arbeitnehmer sind niedrig. Die Öffentlichkeit erwartet eine Erhöhung des Mindestlohns, was jedoch die Arbeitgeber finanziell belasten könnte.",
            answers: [
                {
                    text: "Eine Erhöhung von 20 % umsetzen",
                    effect: {
                        publicSupport: -25,
                        budget: +20,
                        internalSecurity: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Eine Erhöhung von 50 % umsetzen",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Arbeitsminister",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 22,
            question: "Die Urbanisierung beschleunigt sich, die ländliche Arbeitskraft nimmt ab, die Landwirtschaft schwächt sich. Die Öffentlichkeit erwartet Maßnahmen von Ihnen.",
            answers: [
                {
                    text: "Die Landwirtschaft unterstützen",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Die Industrialisierung unterstützen",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Arbeitsminister",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 23,
            question: "Um die Produktion zu steigern und die Entwicklung zu beschleunigen, wollen wir das Rentenalter auf 78 erhöhen. Was sind Ihre Gedanken?",
            answers: [
                {
                    text: "Ich unterstütze es. Lass uns es erhöhen.",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Wir würden mit viel Gegenwind konfrontiert. Sag es ab.",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Arbeitsminister",
            photo: calismaBakani,
            level: 2,
        },
    ],
    fr: [
        {
            id: 20,
            question: "Le chômage augmente et les jeunes ont du mal à trouver un emploi tandis que les meilleurs esprits de la nation cherchent à partir à l'étranger.",
            answers: [
                {
                    text: "Lancer des programmes de placement",
                    effect: {
                        publicSupport: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Offrir des réductions fiscales aux employeurs",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministre du Travail",
            photo: calismaBakani,
            level: 1,
        },
        {
            id: 21,
            question: "Les salaires des employés sont bas. Le public attend une augmentation du salaire minimum, mais cela pourrait exercer une pression financière sur les employeurs.",
            answers: [
                {
                    text: "Appliquer une augmentation de 20 %",
                    effect: {
                        publicSupport: -25,
                        budget: +20,
                        internalSecurity: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Appliquer une augmentation de 50 %",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Ministre du Travail",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 22,
            question: "L'urbanisation s'accélère, la main-d'œuvre rurale diminue, l'agriculture s'affaiblit. Le public attend de vous des actions.",
            answers: [
                {
                    text: "Soutenir l'agriculture",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Soutenir l'industrialisation",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministre du Travail",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 23,
            question: "Pour augmenter la production et accélérer le développement, nous voulons porter l'âge de la retraite à 78 ans. Qu'en pensez-vous ?",
            answers: [
                {
                    text: "Je soutiens. Augmentons-le.",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Nous ferions face à beaucoup de réactions négatives. Annulez-le.",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministre du Travail",
            photo: calismaBakani,
            level: 2,
        },
    ],
    pt: [
        {
            id: 20,
            question: "O desemprego está aumentando e os jovens têm dificuldades para encontrar emprego enquanto os mais brilhantes competem para ir ao exterior.",
            answers: [
                {
                    text: "Iniciar programas de colocação no mercado de trabalho",
                    effect: {
                        publicSupport: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Oferecer redução de impostos para empregadores",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministro do Trabalho",
            photo: calismaBakani,
            level: 1,
        },
        {
            id: 21,
            question: "Os salários dos trabalhadores são baixos. O público espera um aumento no salário mínimo, mas isso pode pressionar financeiramente os empregadores.",
            answers: [
                {
                    text: "Implementar um aumento de 20%",
                    effect: {
                        publicSupport: -25,
                        budget: +20,
                        internalSecurity: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Implementar um aumento de 50%",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Ministro do Trabalho",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 22,
            question: "A urbanização está acelerando, a força de trabalho rural está diminuindo e a agricultura está enfraquecendo. O público espera ação de sua parte.",
            answers: [
                {
                    text: "Apoiar a agricultura",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Apoiar a industrialização",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministro do Trabalho",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 23,
            question: "Para aumentar a produção e acelerar o desenvolvimento, queremos aumentar a idade de aposentadoria para 78 anos. Quais são seus pensamentos?",
            answers: [
                {
                    text: "Eu apoio. Vamos aumentar.",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Enfrentaríamos muita reação negativa. Cancele.",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministro do Trabalho",
            photo: calismaBakani,
            level: 2,
        },
    ],
    zh: [
        {
            id: 20,
            question: "失业率上升，年轻人难以找到工作，全国最优秀的人才竞争出国。",
            answers: [
                {
                    text: "启动就业安置计划",
                    effect: {
                        publicSupport: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "为雇主提供税收减免",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "劳动部长",
            photo: calismaBakani,
            level: 1,
        },
        {
            id: 21,
            question: "员工薪资较低。公众期待提高最低工资，但这可能会对雇主造成财务压力。",
            answers: [
                {
                    text: "实施20%的加薪",
                    effect: {
                        publicSupport: -25,
                        budget: +20,
                        internalSecurity: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "实施50%的加薪",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "劳动部长",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 22,
            question: "城市化加速，农村劳动力减少，农业减弱。公众期待您采取行动。",
            answers: [
                {
                    text: "支持农业",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "支持工业化",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "劳动部长",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 23,
            question: "为了增加生产和加速发展，我们想将退休年龄提高到78岁。您有什么想法？",
            answers: [
                {
                    text: "我支持。让我们提高。",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "我们将面临很多负面反应。取消。",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "劳动部长",
            photo: calismaBakani,
            level: 2,
        },
    ],
    es: [
        {
            id: 20,
            question: "El desempleo está aumentando y los jóvenes tienen dificultades para encontrar trabajo mientras las mentes más brillantes del país compiten por irse al extranjero.",
            answers: [
                {
                    text: "Iniciar programas de colocación laboral",
                    effect: {
                        publicSupport: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Ofrecer reducciones de impuestos a los empleadores",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministro de Trabajo",
            photo: calismaBakani,
            level: 1,
        },
        {
            id: 21,
            question: "Los salarios de los empleados son bajos. El público espera un aumento del salario mínimo, pero esto podría ejercer presión financiera sobre los empleadores.",
            answers: [
                {
                    text: "Implementar un aumento del 20%",
                    effect: {
                        publicSupport: -25,
                        budget: +20,
                        internalSecurity: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Implementar un aumento del 50%",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Ministro de Trabajo",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 22,
            question: "La urbanización se acelera, la fuerza laboral rural disminuye y la agricultura se debilita. El público espera acciones de su parte.",
            answers: [
                {
                    text: "Apoyar la agricultura",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Apoyar la industrialización",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministro de Trabajo",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 23,
            question: "Para aumentar la producción y acelerar el desarrollo, queremos elevar la edad de jubilación a 78 años. ¿Cuáles son tus pensamientos?",
            answers: [
                {
                    text: "Lo apoyo. Vamos a elevarlo.",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Enfrentaríamos muchas reacciones negativas. Cancelarlo.",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Ministro de Trabajo",
            photo: calismaBakani,
            level: 2,
        },
    ],
    ru: [
        {
            id: 20,
            question: "Безработица растет, и молодежи трудно найти работу, поскольку лучшие умы страны стремятся уехать за границу.",
            answers: [
                {
                    text: "Начать программы трудоустройства",
                    effect: {
                        publicSupport: +10,
                        infrastructureAndEnvironment: +5,
                    }
                },
                {
                    text: "Предоставить налоговые льготы для работодателей",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Министр труда",
            photo: calismaBakani,
            level: 1,
        },
        {
            id: 21,
            question: "Зарплаты сотрудников низкие. Общественность ожидает повышения минимальной заработной платы, но это может оказать финансовое давление на работодателей",
            answers: [
                {
                    text: "Внедрить повышение на 20%",
                    effect: {
                        publicSupport: -25,
                        budget: +20,
                        internalSecurity: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Внедрить повышение на 50%",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        agriculturalProduction: -10,
                    }
                }
            ],
            title: "Министр труда",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 22,
            question: "Ускоряется урбанизация, сокращается сельская рабочая сила, ослабляется сельское хозяйство. Общественность ожидает действий от вас.",
            answers: [
                {
                    text: "Поддерживать сельское хозяйство",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Поддерживать индустриализацию",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Министр труда",
            photo: calismaBakani,
            level: 2,
        },
        {
            id: 23,
            question: "Для увеличения производства и ускорения развития мы хотим повысить пенсионный возраст до 78 лет. Каковы ваши мысли?",
            answers: [
                {
                    text: "Я поддерживаю это. Давайте повысим его.",
                    effect: {
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -10,
                    },
                    listID: "calisma1",
                },
                {
                    text: "Мы столкнемся с множеством негативных реакций. Отмените это.",
                    effect: {
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    },
                }
            ],
            title: "Министр труда",
            photo: calismaBakani,
            level: 2,
        },
    ],
};
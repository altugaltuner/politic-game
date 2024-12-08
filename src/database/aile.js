import aileBakanı from "../../public/ministers/aile-bakani.webp";
//3 soru var
export const aileQuestions = {
    tr: [
        {
            id: 10,
            question: "Düşük gelirli ailelere doğrudan sosyal yardımı yapmayı öneriyorum. Ancak bu, kamu bütçesini zorlayabilir ve altyapı yatırımlarını azaltabilir.",
            answers: [
                {
                    text: "Yardım sağlanacak",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                    },
                },
                {
                    text: "Erteliyoruz",
                    effect: {
                        publicSupport: -10,
                        budget: +10,
                    },
                }
            ],
            title: "Aile ve Sosyal Hizmetler Bakanı",
            photo: aileBakanı,
            level: 1,
        },
        {
            id: 11,
            question: "Komşu ülkelerden gelen mülteciler kaçak ve sigortasız çalıştırılıyor, tarım sektöründe ucuz işgücü olarak kullanılıyor.",
            answers: [
                {
                    text: "Mültecileri ülkemizde istihdam edeceğiz",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +10,
                    },
                    listID: "aile1",
                },
                {
                    text: "Yasa dışı çalışmaya son vereceğiz",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: -10,
                    },
                }
            ],
            title: "Aile ve Sosyal Hizmetler Bakanı",
            photo: aileBakanı,
            level: 2,
        },
        {
            id: 12,
            question: "Başkanım, ailevi değerlerimizi korumak için cinsel içerikli sitelere erişim engeli getirmemiz gerekiyor.",
            answers: [
                {
                    text: "Engeli getirelim",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        budget: -10,
                    },
                },
                {
                    text: "Erişim serbest bırakılacak",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        budget: +10,

                    },
                }
            ],
            title: "Aile ve Sosyal Hizmetler Bakanı",
            photo: aileBakanı,
            level: 2,
        },
    ],
    en: [
        {
            id: 10,
            question: "Let's offer direct aid to low-income families but it may strain the budget and cut infrastructure investments.",
            answers: [
                {
                    text: "Provide direct assistance",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                    },
                },
                {
                    text: "Postpone it for now",
                    effect: {
                        publicSupport: -10,
                        budget: +10,
                    },
                }
            ],
            title: "Minister of Family",
            photo: aileBakanı,
            level: 1,
        },
        {
            id: 11,
            question: "Refugees from neighboring countries are illegally employed in agriculture without insurance, used as cheap labor.",
            answers: [
                {
                    text: "Employ refugees in our country",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +10,
                    },
                    listID: "aile1",
                },
                {
                    text: "Start deporting refugees",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: -10,
                    },
                }
            ],
            title: "Minister of Family",
            photo: aileBakanı,
            level: 2,
        },
        {
            id: 12,
            question: "Mr. President, we need to impose access restrictions on adult content websites to protect our family values.",
            answers: [
                {
                    text: "Implement the restriction",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        budget: -10,
                    },
                },
                {
                    text: "Access will remain unrestricted",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        budget: +10,
                    },
                }
            ],
            title: "Minister of Family and Social Services",
            photo: aileBakanı,
            level: 2,
        }

    ],
    de: [
        {
            id: 10,
            question: "Lassen Sie uns Familien mit niedrigem Einkommen direkte Hilfe leisten, aber dies könnte das Budget belasten und Investitionen in die Infrastruktur einschränken.",
            answers: [
                {
                    text: "Direkte Unterstützung leisten",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                    },
                },
                {
                    text: "Vorerst verschieben",
                    effect: {
                        publicSupport: -10,
                        budget: +10,
                    },
                }
            ],
            title: "Familienminister",
            photo: aileBakanı,
            level: 1,
        },
        {
            id: 11,
            question: "Flüchtlinge aus Nachbarländern arbeiten illegal in der Landwirtschaft ohne Versicherung, sie werden als billige Arbeitskräfte eingesetzt.",
            answers: [
                {
                    text: "Flüchtlinge in unserem Land beschäftigen",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +10,
                    },
                    listID: "aile1",
                },
                {
                    text: "Abschiebung der Flüchtlinge einleiten",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: -10,
                    },
                }
            ],
            title: "Familienminister",
            photo: aileBakanı,
            level: 2,
        },
        {
            id: 12,
            question: "Herr Präsident, wir müssen den Zugang zu Websites mit Erwachseneninhalt einschränken, um unsere Familienwerte zu schützen.",
            answers: [
                {
                    text: "Beschränkung umsetzen",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        budget: -10,
                    },
                },
                {
                    text: "Zugang bleibt unbeschränkt",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        budget: +10,
                    },
                }
            ],
            title: "Minister für Familie und Soziales",
            photo: aileBakanı,
            level: 2,
        }

    ],
    fr: [
        {
            id: 10,
            question: "Offrons une aide directe aux familles à faible revenu, mais cela pourrait peser sur le budget et réduire les investissements dans les infrastructures.",
            answers: [
                {
                    text: "Fournir une assistance directe",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                    },
                },
                {
                    text: "Reporter pour l'instant",
                    effect: {
                        publicSupport: -10,
                        budget: +10,
                    },
                }
            ],
            title: "Ministre de la Famille",
            photo: aileBakanı,
            level: 1,
        },
        {
            id: 11,
            question: "Les réfugiés des pays voisins sont employés illégalement dans l'agriculture sans assurance, utilisés comme main-d'œuvre bon marché.",
            answers: [
                {
                    text: "Employer les réfugiés dans notre pays",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +10,
                    },
                    listID: "aile1",
                },
                {
                    text: "Commencer à expulser les réfugiés",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: -10,
                    },
                }
            ],
            title: "Ministre de la Famille",
            photo: aileBakanı,
            level: 2,
        },
        {
            id: 12,
            question: "Monsieur le Président, nous devons imposer des restrictions d'accès aux sites à contenu adulte pour protéger nos valeurs familiales.",
            answers: [
                {
                    text: "Mettre en œuvre la restriction",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        budget: -10,
                    },
                },
                {
                    text: "L'accès restera non restreint",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        budget: +10,
                    },
                }
            ],
            title: "Ministre de la Famille et des Services Sociaux",
            photo: aileBakanı,
            level: 2,
        }

    ],
    pt: [
        {
            id: 10,
            question: "Vamos oferecer ajuda direta às famílias de baixa renda, mas isso pode pressionar o orçamento e cortar investimentos em infraestrutura.",
            answers: [
                {
                    text: "Fornecer assistência direta",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                    },
                },
                {
                    text: "Adiar por enquanto",
                    effect: {
                        publicSupport: -10,
                        budget: +10,
                    },
                }
            ],
            title: "Ministro da Família",
            photo: aileBakanı,
            level: 1,
        },
        {
            id: 11,
            question: "Refugiados de países vizinhos estão sendo empregados ilegalmente na agricultura sem seguro, usados como mão de obra barata.",
            answers: [
                {
                    text: "Empregar refugiados em nosso país",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +10,
                    },
                    listID: "aile1",
                },
                {
                    text: "Iniciar a deportação dos refugiados",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: -10,
                    },
                }
            ],
            title: "Ministro da Família",
            photo: aileBakanı,
            level: 2,
        },
        {
            id: 12,
            question: "Senhor Presidente, precisamos impor restrições de acesso a sites com conteúdo adulto para proteger nossos valores familiares.",
            answers: [
                {
                    text: "Implementar a restrição",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        budget: -10,
                    },
                    listID: "familia1",
                },
                {
                    text: "O acesso permanecerá irrestrito",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        budget: +10,
                    },
                }
            ],
            title: "Ministro da Família e dos Serviços Sociais",
            photo: aileBakanı,
            level: 2,
        }

    ],
    zh: [
        {
            id: 10,
            question: "让我们向低收入家庭提供直接援助，但这可能会对预算造成压力并削减基础设施投资。",
            answers: [
                {
                    text: "提供直接援助",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                    },
                },
                {
                    text: "暂时搁置",
                    effect: {
                        publicSupport: -10,
                        budget: +10,
                    },
                }
            ],
            title: "家庭部长",
            photo: aileBakanı,
            level: 1,
        },
        {
            id: 11,
            question: "来自邻国的难民在农业领域非法就业，没有保险，被当作廉价劳动力使用。",
            answers: [
                {
                    text: "雇佣难民",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +10,
                    },
                    listID: "aile1",
                },
                {
                    text: "开始遣返难民",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: -10,
                    },
                }
            ],
            title: "家庭部长",
            photo: aileBakanı,
            level: 2,
        },
        {
            id: 12,
            question: "总统先生，我们需要限制访问成人内容网站，以保护我们的家庭价值观。",
            answers: [
                {
                    text: "实施限制",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        budget: -10,
                    },
                },
                {
                    text: "访问将保持不受限制",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        budget: +10,
                    },
                }
            ],
            title: "家庭和社会服务部长",
            photo: aileBakanı,
            level: 2,
        }

    ],
    es: [
        {
            id: 10,
            question: "Ofrezcamos ayuda directa a las familias de bajos ingresos, pero esto puede tensar el presupuesto y recortar las inversiones en infraestructura.",
            answers: [
                {
                    text: "Brindar asistencia directa",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                    },
                },
                {
                    text: "Posponerlo por ahora",
                    effect: {
                        publicSupport: -10,
                        budget: +10,
                    },
                }
            ],
            title: "Ministro de Familia",
            photo: aileBakanı,
            level: 1,
        },
        {
            id: 11,
            question: "Los refugiados de países vecinos están siendo empleados ilegalmente en la agricultura sin seguro, usados como mano de obra barata.",
            answers: [
                {
                    text: "Emplear a los refugiados en nuestro país",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +10,
                    },
                    listID: "aile1",
                },
                {
                    text: "Comenzar a deportar a los refugiados",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: -10,
                    },
                }
            ],
            title: "Ministro de Familia",
            photo: aileBakanı,
            level: 2,
        },
        {
            id: 12,
            question: "Señor Presidente, necesitamos imponer restricciones de acceso a sitios de contenido para adultos para proteger nuestros valores familiares.",
            answers: [
                {
                    text: "Implementar la restricción",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        budget: -10,
                    },
                },
                {
                    text: "El acceso seguirá siendo libre",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        budget: +10,
                    },
                }
            ],
            title: "Ministro de Familia y Servicios Sociales",
            photo: aileBakanı,
            level: 2,
        }

    ],
    ru: [
        {
            id: 10,
            question: "Давайте предложим прямую помощь семьям с низким доходом, но это может привести к сокращению бюджета и инвестиций в инфраструктуру.",
            answers: [
                {
                    text: "Предоставить прямую помощь",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                    },
                },
                {
                    text: "Отложить на данный момент",
                    effect: {
                        publicSupport: -10,
                        budget: +10,
                    },
                }
            ],
            title: "Министр семьи",
            photo: aileBakanı,
            level: 1,
        },
        {
            id: 11,
            question: "Беженцы из соседних стран нелегально работают в сельском хозяйстве без страховки, используя их как дешевую рабочую силу.",
            answers: [
                {
                    text: "Трудоустроить беженцев в нашей стране",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +10,
                    },
                    listID: "aile1",
                },
                {
                    text: "Начать депортацию беженцев",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: -10,
                    },
                }
            ],
            title: "Министр семьи",
            photo: aileBakanı,
            level: 2,
        },
        {
            id: 12,
            question: "Господин Президент, нам нужно ввести ограничения на доступ к сайтам с контентом для взрослых, чтобы защитить наши семейные ценности.",
            answers: [
                {
                    text: "Ввести ограничение",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        budget: -10,
                    },
                },
                {
                    text: "Доступ останется без ограничений",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        budget: +10,
                    },
                }
            ],
            title: "Министр семьи и социальных услуг",
            photo: aileBakanı,
            level: 2,
        }

    ],
};
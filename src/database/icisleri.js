import icisleriBakani from "../../public/ministers/icisleri-bakani.webp";
// 5 soru var
export const icisleriQuestions = {
    tr: [

        {
            id: 90,
            question: "Ülkedeki mülteci sayısı toplumsal tansiyonu artırıyor. Halk bu konudan şikayetçi. Ne yapmalıyız? ",
            answers: [
                {
                    text: "Kademeli olarak göndereceğiz",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Entegrasyon projesini başlatacağız",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Türkiye deprem riski taşıyan bir ülke. Şehirlerin altyapılarını güçlendirmek ve yeni kentsel dönüşüm projeleri başlatabiliriz. Ancak bu uzun süreli bir süreç olacak ve bütçemizi bir hayli zorlayacak.",
            answers: [
                {
                    text: "Kentsel dönüşümü başlatın",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Şimdilik ertelemek zorundayız",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Sınır bölgelerimizde kaçakçılık ve insan kaçakçılığı faaliyetleri artıyor. Bu sorunu nasıl çözebiliriz?",
            answers: [
                {
                    text: "Sınırdan tüm geçişleri kapatın",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Yakalananları sınır dışı edin",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Büyük şehirlerde trafik sorunları giderek artıyor. Halk bu durumdan çok rahatsız",
            answers: [
                {
                    text: "Yeni yollar inşa edilsin",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Toplu taşımaya teşvik edin",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Cumhurbaşkanım, ülkede terör örgütleri faaliyetlerini artırıyor. Büyük şehirler çok büyük risk altında!",
            answers: [
                {
                    text: "Uluslararası işbirliğine başvuracağız",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Askeri operasyona başlamalıyız",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "İçişleri Bakanı",
            photo: icisleriBakani,
            level: 1,
        },
    ],
    en: [
        {
            id: 90,
            question: "The number of refugees in the country is increasing social tension. The public is complaining about this issue. What should we do?",
            answers: [
                {
                    text: "Start the deportation process",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Begin the integration process",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Our cities face earthquake risks. We can strengthen infrastructure and start urban transformation, but this will strain the budget.",
            answers: [
                {
                    text: "Start the transformation",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Postpone it for now",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Smuggling and human trafficking activities are increasing in our border regions. How can we resolve this issue?",
            answers: [
                {
                    text: "Close all border crossings",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Deport those caught",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "inister of Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Traffic problems are worsening in major cities. The public is very upset about this situation.",
            answers: [
                {
                    text: "Build new roads",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Encourage public transportation",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Mr. President, terrorist organizations are increasing their activities in the country. Major cities are at great risk!",
            answers: [
                {
                    text: "Seek international cooperation",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Launch a military operation",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
    ],
    de: [
        {
            id: 90,
            question: "Die Anzahl der Flüchtlinge im Land erhöht die soziale Spannung. Die Öffentlichkeit beschwert sich über dieses Problem. Was sollen wir tun?",
            answers: [
                {
                    text: "Abschiebungsprozess einleiten",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Integrationsprozess starten",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Minister of Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Unsere Städte sind durch Erdbeben gefährdet. Wir können die Infrastruktur verstärken und eine städtische Transformation einleiten, aber das wird das Budget belasten.",
            answers: [
                {
                    text: "Die Transformation einleiten",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Es vorerst verschieben",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Schmuggel- und Menschenhandelsaktivitäten nehmen in unseren Grenzregionen zu. Wie können wir dieses Problem lösen?",
            answers: [
                {
                    text: "Alle Grenzübergänge schließen",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Die Festgenommenen abschieben",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "icisleri3",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Die Verkehrsprobleme in den großen Städten verschlechtern sich immer mehr. Die Öffentlichkeit ist sehr verärgert über diese Situation.",
            answers: [
                {
                    text: "Neue Straßen bauen",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Den öffentlichen Nahverkehr fördern",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Herr Präsident, terroristische Organisationen erhöhen ihre Aktivitäten im Land. Die größten Städte sind in großer Gefahr!",
            answers: [
                {
                    text: "Internationale Kooperation suchen",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Eine Militäroperation starten",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Innenminister",
            photo: icisleriBakani,
            level: 1,
        },
    ],
    fr: [
        {
            id: 90,
            question: "Le nombre de réfugiés dans le pays augmente les tensions sociales. Le public se plaint de ce problème. Que devrions-nous faire ?",
            answers: [
                {
                    text: "Lancer le processus de déportation",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Lancer le processus d'intégration",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "Innenminister",
                }
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Nos villes font face à des risques de tremblements de terre. Nous pouvons renforcer les infrastructures et lancer une transformation urbaine, mais cela mettra le budget sous pression.",
            answers: [
                {
                    text: "Lancer la transformation",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Reporter pour l'instant",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Les activités de contrebande et de trafic de personnes augmentent dans nos régions frontalières. Comment pouvons-nous résoudre ce problème ?",
            answers: [
                {
                    text: "Fermer tous les passages frontaliers",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Expulser les personnes arrêtées",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Les problèmes de trafic s'aggravent dans les principales villes. Le public est très mécontent de cette situation.",
            answers: [
                {
                    text: "Construire de nouvelles routes",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Encourager les transports publics",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Monsieur le Président, les organisations terroristes augmentent leurs activités dans le pays. Les principales villes sont en grand danger!",
            answers: [
                {
                    text: "Chercher une coopération internationale",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Lancer une opération militaire",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Ministre de l'Intérieur",
            photo: icisleriBakani,
            level: 1,
        },
    ],
    pt: [
        {
            id: 90,
            question: "O número de refugiados no país está aumentando a tensão social. O público está se queixando desse problema. O que devemos fazer?",
            answers: [
                {
                    text: "Iniciar o processo de deportação",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Iniciar o processo de integração",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Nossas cidades enfrentam riscos de terremotos. Podemos reforçar a infraestrutura e iniciar uma transformação urbana, mas isso pressionará o orçamento.",
            answers: [
                {
                    text: "Iniciar a transformação",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Adiar por enquanto",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "inistro do Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "As atividades de contrabando e tráfico de pessoas estão aumentando em nossas regiões fronteiriças. Como podemos resolver esse problema?",
            answers: [
                {
                    text: "Fechar todas as passagens fronteiriças",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Deportar os capturados",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Os problemas de tráfego estão piorando cada vez mais nas principais cidades. O público está muito insatisfeito com essa situação.",
            answers: [
                {
                    text: "Construir novas estradas",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Incentivar o transporte público",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Senhor Presidente, as organizações terroristas estão aumentando suas atividades no país. As principais cidades estão em grande risco!",
            answers: [
                {
                    text: "Buscar cooperação internacional",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Lançar uma operação militar",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Ministro do Interior",
            photo: icisleriBakani,
            level: 1,
        },
    ],
    zh: [
        {
            id: 90,
            question: "难民数量的增加正在加剧社会紧张局势。公众对此问题提出了许多抱怨。我们该怎么办？",
            answers: [
                {
                    text: "启动遣返程序",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "启动融合程序",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "我们的城市面临地震风险。我们可以加强基础设施并启动城市改造，但这会对预算造成压力。",
            answers: [
                {
                    text: "开始城市改造",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "暂时搁置",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "我们的边境地区走私和人口贩运活动正在增加。我们该如何解决这个问题？",
            answers: [
                {
                    text: "关闭所有边境通道",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "驱逐被捕者",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "主要城市的交通问题日益严重。公众对此情况非常不满。",
            answers: [
                {
                    text: "修建新道路",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "鼓励公共交通",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "总统先生，恐怖组织在我国的活动正在增加！主要城市面临重大风险！",
            answers: [
                {
                    text: "寻求国际合作",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "发起军事行动",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "内政部长",
            photo: icisleriBakani,
            level: 1,
        },
    ],
    es: [
        {
            id: 90,
            question: "El número de refugiados en el país está aumentando la tensión social. El público se está quejando de este problema. ¿Qué debemos hacer?",
            answers: [
                {
                    text: "Iniciar el proceso de deportación",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Iniciar el proceso de integración",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Nuestras ciudades enfrentan riesgos sísmicos. Podemos fortalecer la infraestructura y comenzar la transformación urbana, pero esto tensará el presupuesto.",
            answers: [
                {
                    text: "Iniciar la transformación",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Posponerlo por ahora",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Las actividades de contrabando y tráfico de personas están aumentando en nuestras regiones fronterizas. ¿Cómo podemos resolver este problema?",
            answers: [
                {
                    text: "Cerrar todos los cruces fronterizos",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Deportar a los que sean atrapados",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Los problemas de tráfico están empeorando en las principales ciudades. El público está muy molesto por esta situación.",
            answers: [
                {
                    text: "Construir nuevas carreteras",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Fomentar el transporte público",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Señor Presidente, las organizaciones terroristas están aumentando sus actividades en el país. ¡Las principales ciudades están en gran peligro!",
            answers: [
                {
                    text: "Buscar cooperación internacional",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Iniciar una operación militar",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Ministro del Interior",
            photo: icisleriBakani,
            level: 1,
        },
    ],
    ru: [
        {
            id: 90,
            question: "Количество беженцев в стране увеличивает социальную напряженность. Общественность жалуется на эту проблему. Что нам следует делать?",
            answers: [
                {
                    text: "Начать процесс депортации",
                    effect: {
                        publicSupport: +15,
                        budget: +10,
                        internationalRelations: -15,
                        internalSecurity: +10
                    }
                },
                {
                    text: "Начать процесс интеграции",
                    effect: {
                        publicSupport: -15,
                        budget: -15,
                        internationalRelations: +15,
                        internalSecurity: -10
                    },
                    listID: "icisleri1",
                }
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 1,
        },
        {
            id: 91,
            question: "Наши города подвержены рискам землетрясений. Мы можем укрепить инфраструктуру и начать городскую трансформацию, но это окажет давление на бюджет.",
            answers: [
                {
                    text: "Начать трансформацию",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +10,
                        publicSupport: +10
                    }
                },
                {
                    text: "Отложить на данный момент",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -25,
                        publicSupport: -10
                    },
                    listID: "icisleri2",
                }
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 92,
            question: "Контрабанда и торговля людьми увеличиваются в наших приграничных регионах. Как мы можем решить эту проблему?",
            answers: [
                {
                    text: "Закрыть все пограничные переходы",
                    effect: {

                        budget: -15,
                        internalSecurity: +10,
                        internationalRelations: -20
                    }
                },
                {
                    text: "Депортировать тех, кто будет пойман",
                    effect: {
                        budget: +10,
                        internalSecurity: +10,
                    }
                }
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 93,
            question: "Проблемы с трафиком все больше ухудшаются в крупных городах. Общественность крайне недовольна этой ситуацией.",
            answers: [
                {
                    text: "Построить новые дороги",
                    effect: {
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                        publicSupport: +10,
                    }
                },
                {
                    text: "Стимулировать общественный транспорт",
                    effect: {
                        budget: +10,
                        publicSupport: -25,
                    }
                }
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 2,
        },
        {
            id: 94,
            question: "Господин Президент, террористические организации увеличивают свою активность в стране. Крупные города находятся под большим риском!",
            answers: [
                {
                    text: "Искать международное сотрудничество",
                    effect: {
                        internalSecurity: -10,
                        internationalRelations: +10,
                        budget: +10,
                    }
                },
                {
                    text: "Начать военную операцию",
                    effect: {
                        internalSecurity: +15,
                        internationalRelations: -15,
                        budget: -15,
                    },
                    listID: "icisleri3",
                },
            ],
            title: "Министр внутренних дел",
            photo: icisleriBakani,
            level: 1,
        },
    ],
};
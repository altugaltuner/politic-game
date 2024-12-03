import tarimBakani from "../../public/ministers/tarim-bakani.webp";
// 5 soru var
export const tarimQuestions = {
    tr: [
        {
            id: 130,
            question: "Son yıllarda kuraklık artıyor ve tarımsal üretim ciddi şekilde düşüyor. Tarıma büyük bir teşvik ve su kaynaklarına yatırım yapmamız gerek.",
            answers: [
                {
                    text: "Yeni barajlar inşa edilmeli",
                    effect: {
                        agriculturalProduction: +15,
                        budget: -10,
                    }
                },
                {
                    text: "Başka önceliklerimiz var, erteleyin",
                    effect: {
                        agriculturalProduction: -15,
                        budget: +15,
                    }
                }
            ],
            title: "Tarım Bakanı",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 131,
            question: "Tarımsal üretim ithalata bağımlı hale geliyor. Bunun önüne geçmeliyiz",
            answers: [
                {
                    text: "Çiftçiye vergi indirimi yapılacak",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        agriculturalProduction: +10,
                        internationalRelations: +10,
                    },
                },
                {
                    text: "Tarım ürünlerine gümrük vergisi artırılacak",
                    effect: {
                        publicSupport: -15,
                        budget: +20,
                        agriculturalProduction: -20,
                        internationalRelations: -20,
                    },
                }
            ],
            title: "Tarım Bakanı",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 132,
            question: "Orman yangınları her yıl artıyor ve ciddi kayıplar yaşanıyor. Nasıl bir önlem almalıyız?",
            answers: [
                {
                    text: "Yeni yangın helikopterleri alacağız",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Yeşil alanlardaki denetimi artıracağız",
                    effect: {
                        budget: +10,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Tarım Bakanı",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 133,
            question: "Sayın Cumhurbaşkanım, tarımda genç iş gücü eksikliği yaşanıyor. Kırsal nüfus şehirlere göç ediyor.",
            answers: [
                {
                    text: "Tarıma teşvik projeleri başlatın",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +15,
                    }
                },
                {
                    text: "Açığı göçmen işçilerle doldurun",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +5,
                        internationalRelations: +5,
                    },
                }
            ],
            title: "Tarım Bakanı",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 134,
            question: "Organik tarım ve sürdürülebilir üretim yöntemlerine geçiş yapmak istiyoruz. Bunun için sizden onay bekliyoruz",
            answers: [
                {
                    text: "Kademeli geçişe başlayın",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Mevcut sistemle devam edin",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Tarım Bakanı",
            photo: tarimBakani,
            level: 3,
        }
    ],
    en: [
        {
            id: 130,
            question: "Drought is increasing, and agriculture is declining. We must strongly incentivize agriculture and invest in water resources.",
            answers: [
                {
                    text: "Build new dams",
                    effect: {
                        agriculturalProduction: +15,
                        budget: -10,
                    }
                },
                {
                    text: "Postpone it",
                    effect: {
                        agriculturalProduction: -15,
                        budget: +15,
                    }
                }
            ],
            title: "Minister of Agriculture",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 131,
            question: "Agricultural production is becoming import-dependent. We must prevent this.",
            answers: [
                {
                    text: "Tax reductions will be implemented",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        agriculturalProduction: +10,
                        internationalRelations: +10,
                    },
                },
                {
                    text: "Tariffs will be increased",
                    effect: {
                        publicSupport: -15,
                        budget: +20,
                        agriculturalProduction: -20,
                        internationalRelations: -20,
                    },
                }
            ],
            title: "Minister of Agriculture",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 132,
            question: "Forest fires are increasing every year, causing significant losses. What measures should we take?",
            answers: [
                {
                    text: "Acquire firefighting helicopters",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Increase inspections in the areas",
                    effect: {
                        budget: +10,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Minister of Agriculture",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 133,
            question: "Mr. President, there is a lack of young labor in agriculture. Rural populations are migrating to cities.",
            answers: [
                {
                    text: "Initiate incentive projects",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +15,
                    }
                },
                {
                    text: "Cover the gap with migrants",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +5,
                        internationalRelations: +5,
                    },
                }
            ],
            title: "Minister of Agriculture",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 134,
            question: "We want to transition to organic farming and sustainable production methods. We are awaiting your approval.",
            answers: [
                {
                    text: "Start a gradual transition",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Continue with the current system",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Minister of Agriculture",
            photo: tarimBakani,
            level: 3,
        }
    ],
    de: [
        {
            id: 130,
            question: "Die Dürre nimmt zu und die Landwirtschaft geht zurück. Wir müssen die Landwirtschaft stark fördern und in Wasserressourcen investieren.",
            answers: [
                {
                    text: "Neue Staudämme bauen",
                    effect: {
                        agriculturalProduction: +15,
                        budget: -10,
                    }
                },
                {
                    text: "Es verschieben",
                    effect: {
                        agriculturalProduction: -15,
                        budget: +15,
                    }
                }
            ],
            title: "Landwirtschaftsminister",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 131,
            question: "Die landwirtschaftliche Produktion wird zunehmend importabhängig. Wir müssen dies verhindern.",
            answers: [
                {
                    text: "Steuern senken",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        agriculturalProduction: +10,
                        internationalRelations: +10,
                    },
                },
                {
                    text: "Zölle erhöhen",
                    effect: {
                        publicSupport: -15,
                        budget: +20,
                        agriculturalProduction: -20,
                        internationalRelations: -20,
                    },
                }
            ],
            title: "Landwirtschaftsminister",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 132,
            question: "Waldbrände nehmen jedes Jahr zu und verursachen erhebliche Verluste. Welche Maßnahmen sollten wir ergreifen?",
            answers: [
                {
                    text: "Feuerwehrhubschrauber anschaffen",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Inspektionen in den Gebieten verstärken",
                    effect: {
                        budget: +10,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Landwirtschaftsminister",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 133,
            question: "Herr Präsident, es fehlt an junger Arbeitskraft in der Landwirtschaft. Die Landbevölkerung wandert in die Städte ab.",
            answers: [
                {
                    text: "Anreizprojekte starten",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +15,
                    }
                },
                {
                    text: "Die Lücke mit Migranten schließen",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +5,
                        internationalRelations: +5,
                    },
                }
            ],
            title: "Landwirtschaftsminister",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 134,
            question: "Wir möchten auf ökologische Landwirtschaft und nachhaltige Produktionsmethoden umstellen. Wir warten auf Ihre Zustimmung.",
            answers: [
                {
                    text: "Eine schrittweise Umstellung starten",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Das aktuelle System beibehalten",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Landwirtschaftsminister",
            photo: tarimBakani,
            level: 3,
        }
    ],
    fr: [
        {
            id: 130,
            question: "La sécheresse augmente et l'agriculture diminue. Nous devons fortement inciter l'agriculture et investir dans les ressources en eau.",
            answers: [
                {
                    text: "Construire de nouveaux barrages",
                    effect: {
                        agriculturalProduction: +15,
                        budget: -10,
                    }
                },
                {
                    text: "Reporter",
                    effect: {
                        agriculturalProduction: -15,
                        budget: +15,
                    }
                }
            ],
            title: "Ministre de l'Agriculture",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 131,
            question: "La production agricole devient dépendante des importations. Nous devons prévenir cela.",
            answers: [
                {
                    text: "Réduire les taxes",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        agriculturalProduction: +10,
                        internationalRelations: +10,
                    },
                },
                {
                    text: "Augmenter les droits de douane",
                    effect: {
                        publicSupport: -15,
                        budget: +20,
                        agriculturalProduction: -20,
                        internationalRelations: -20,
                    },
                }
            ],
            title: "Ministre de l'Agriculture",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 132,
            question: "Les incendies de forêt augmentent chaque année et causent des pertes importantes. Quelles mesures devrions-nous prendre ?",
            answers: [
                {
                    text: "Acheter des hélicoptères anti-incendie",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Augmenter les inspections dans les zones",
                    effect: {
                        budget: +10,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministre de l'Agriculture",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 133,
            question: "Monsieur le Président, il y a un manque de main-d'œuvre jeune dans l'agriculture. Les populations rurales migrent vers les villes.",
            answers: [
                {
                    text: "Lancer des projets d'incitation",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +15,
                    }
                },
                {
                    text: "Compenser avec des migrants",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +5,
                        internationalRelations: +5,
                    },
                }
            ],
            title: "Ministre de l'Agriculture",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 134,
            question: "Nous voulons passer à l'agriculture biologique et aux méthodes de production durables. Nous attendons votre approbation.",
            answers: [
                {
                    text: "Commencer une transition progressive",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Continuer avec le système actuel",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Ministre de l'Agriculture",
            photo: tarimBakani,
            level: 3,
        }
    ],
    pt: [
        {
            id: 130,
            question: "A seca está aumentando e a agricultura está diminuindo. Devemos incentivar fortemente a agricultura e investir em recursos hídricos.",
            answers: [
                {
                    text: "Construir novas barragens",
                    effect: {
                        agriculturalProduction: +15,
                        budget: -10,
                    }
                },
                {
                    text: "Adiar por enquanto",
                    effect: {
                        agriculturalProduction: -15,
                        budget: +15,
                    }
                }
            ],
            title: "Ministro da Agricultura",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 131,
            question: "A produção agrícola está se tornando dependente de importações. Devemos prevenir isso.",
            answers: [
                {
                    text: "Reduzir impostos",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        agriculturalProduction: +10,
                        internationalRelations: +10,
                    },
                },
                {
                    text: "Aumentar tarifas",
                    effect: {
                        publicSupport: -15,
                        budget: +20,
                        agriculturalProduction: -20,
                        internationalRelations: -20,
                    },
                }
            ],
            title: "Ministro da Agricultura",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 132,
            question: "Os incêndios florestais estão aumentando a cada ano, causando perdas significativas. Que medidas devemos tomar?",
            answers: [
                {
                    text: "Adquirir helicópteros para combate a incêndios",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Aumentar inspeções nas áreas",
                    effect: {
                        budget: +10,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministro da Agricultura",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 133,
            question: "Senhor Presidente, há falta de mão de obra jovem na agricultura. As populações rurais estão migrando para as cidades.",
            answers: [
                {
                    text: "Iniciar projetos de incentivo",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +15,
                    }
                },
                {
                    text: "Cobrir a lacuna com migrantes",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +5,
                        internationalRelations: +5,
                    },
                }
            ],
            title: "Ministro da Agricultura",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 134,
            question: "Queremos fazer a transição para a agricultura orgânica e métodos de produção sustentáveis. Estamos aguardando sua aprovação.",
            answers: [
                {
                    text: "Iniciar uma transição gradual",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Continuar com o sistema atual",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Ministro da Agricultura",
            photo: tarimBakani,
            level: 3,
        }
    ],
    zh: [
        {
            id: 130,
            question: "干旱正在加剧，农业正在减少。我们必须大力激励农业并投资于水资源。.",
            answers: [
                {
                    text: "建造新水坝",
                    effect: {
                        agriculturalProduction: +15,
                        budget: -10,
                    }
                },
                {
                    text: "暂缓执行",
                    effect: {
                        agriculturalProduction: -15,
                        budget: +15,
                    }
                }
            ],
            title: "农业部长",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 131,
            question: "农业生产正在依赖进口。我们必须防止这种情况。",
            answers: [
                {
                    text: "降低税收",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        agriculturalProduction: +10,
                        internationalRelations: +10,
                    },
                },
                {
                    text: "提高关税",
                    effect: {
                        publicSupport: -15,
                        budget: +20,
                        agriculturalProduction: -20,
                        internationalRelations: -20,
                    },
                }
            ],
            title: "农业部长",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 132,
            question: "每年森林火灾都在增加，并造成了重大损失。我们应该采取什么措施？",
            answers: [
                {
                    text: "购买消防直升机",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "加强地区检查",
                    effect: {
                        budget: +10,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "农业部长",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 133,
            question: "总统先生，农业领域缺乏年轻劳动力。农村人口正在迁移到城市。",
            answers: [
                {
                    text: "启动激励项目",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +15,
                    }
                },
                {
                    text: "用移民填补空缺",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +5,
                        internationalRelations: +5,
                    },
                }
            ],
            title: "农业部长",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 134,
            question: "我们希望过渡到有机农业和可持续生产方式。我们正在等待您的批准。.",
            answers: [
                {
                    text: "启动逐步过渡",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "继续使用当前系统",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "农业部长",
            photo: tarimBakani,
            level: 3,
        }
    ],
    es: [
        {
            id: 130,
            question: "La sequía está aumentando, y la agricultura está disminuyendo. Debemos incentivar fuertemente la agricultura e invertir en recursos hídricos.",
            answers: [
                {
                    text: "Construir nuevas presas",
                    effect: {
                        agriculturalProduction: +15,
                        budget: -10,
                    }
                },
                {
                    text: "Posponerlo",
                    effect: {
                        agriculturalProduction: -15,
                        budget: +15,
                    }
                }
            ],
            title: "Ministro de Agricultura",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 131,
            question: "La producción agrícola se está volviendo dependiente de las importaciones. Debemos prevenir esto",
            answers: [
                {
                    text: "Se harán reducciones de impuestos",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        agriculturalProduction: +10,
                        internationalRelations: +10,
                    },
                },
                {
                    text: "Se aumentarán los aranceles",
                    effect: {
                        publicSupport: -15,
                        budget: +20,
                        agriculturalProduction: -20,
                        internationalRelations: -20,
                    },
                }
            ],
            title: "Ministro de Agricultura",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 132,
            question: "Los incendios forestales aumentan cada año, y se producen pérdidas significativas. ¿Qué medidas debemos tomar?",
            answers: [
                {
                    text: "Adquirir helicópteros de extinción de incendios",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Aumentar las inspecciones en las áreas",
                    effect: {
                        budget: +10,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministro de Agricultura",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 133,
            question: "Señor Presidente, hay una falta de mano de obra joven en la agricultura. Las poblaciones rurales están migrando a las ciudades",
            answers: [
                {
                    text: "Iniciar proyectos de incentivos",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +15,
                    }
                },
                {
                    text: "Cubrir el vacío con migrantes",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +5,
                        internationalRelations: +5,
                    },
                }
            ],
            title: "Ministro de Agricultura",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 134,
            question: "Queremos pasar a la agricultura orgánica y a métodos de producción sostenibles. Estamos esperando su aprobación.",
            answers: [
                {
                    text: "Comenzar la transición gradual",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Continuar con el sistema actual",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Ministro de Agricultura",
            photo: tarimBakani,
            level: 3,
        }
    ],
    ru: [
        {
            id: 130,
            question: "Засуха усиливается, а сельское хозяйство сокращается. Мы должны активно стимулировать сельское хозяйство и инвестировать в водные ресурсы.",
            answers: [
                {
                    text: "Построить новые дамбы",
                    effect: {
                        agriculturalProduction: +15,
                        budget: -10,
                    }
                },
                {
                    text: "Отложить это",
                    effect: {
                        agriculturalProduction: -15,
                        budget: +15,
                    }
                }
            ],
            title: "Министр сельского хозяйства",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 131,
            question: "Сельскохозяйственное производство становится зависимым от импорта. Мы должны предотвратить это.",
            answers: [
                {
                    text: "Снизить налоги",
                    effect: {
                        publicSupport: +5,
                        budget: -10,
                        agriculturalProduction: +10,
                        internationalRelations: +10,
                    },
                },
                {
                    text: "Увеличить тарифы",
                    effect: {
                        publicSupport: -15,
                        budget: +20,
                        agriculturalProduction: -20,
                        internationalRelations: -20,
                    },
                }
            ],
            title: "Министр сельского хозяйства",
            photo: tarimBakani,
            level: 1,
        },
        {
            id: 132,
            question: "Лесные пожары увеличиваются с каждым годом, приводя к значительным потерям. Какие меры нам следует предпринять?",
            answers: [
                {
                    text: "Приобрести противопожарные вертолеты",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +10,
                    }
                },
                {
                    text: "Увеличить проверки в зонах риска",
                    effect: {
                        budget: +10,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Министр сельского хозяйства",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 133,
            question: "Господин Президент, в сельском хозяйстве не хватает молодых рабочих. Сельское население мигрирует в города.",
            answers: [
                {
                    text: "Начать проекты по стимулированию",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +15,
                    }
                },
                {
                    text: "Заполнить пробел мигрантами",
                    effect: {
                        publicSupport: -20,
                        agriculturalProduction: +5,
                        internationalRelations: +5,
                    },
                }
            ],
            title: "Министр сельского хозяйства",
            photo: tarimBakani,
            level: 2,
        },
        {
            id: 134,
            question: "Мы хотим перейти на органическое сельское хозяйство и устойчивые методы производства. Мы ждем вашего одобрения.",
            answers: [
                {
                    text: "Начать постепенный переход",
                    effect: {
                        budget: -15,
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Продолжить текущую систему",
                    effect: {
                        budget: +15,
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: -10,
                    }
                }
            ],
            title: "Министр сельского хозяйства",
            photo: tarimBakani,
            level: 3,
        }
    ],
}
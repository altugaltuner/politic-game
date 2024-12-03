import enerjiBakani from "../../public/ministers/enerji-bakani.webp";
// 2 soru var
export const enerjiQuestions = {
    tr: [
        {
            id: 60,
            question: "Yerli enerji kaynaklarını keşfetmek için geniş çaplı arama çalışmaları başlatabiliriz. Ancak bu, ciddi bir maliyet getirebilir.",
            answers: [
                {
                    text: "Yerli enerji aramalarına başlayın",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +15,
                    },
                    listID: "enerji1",
                },
                {
                    text: "Erteleyin, şimdilik maliyet çok yüksek",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -20,
                    }
                }
            ],
            title: "Enerji ve Tabii Kaynaklar Bakanı",
            photo: enerjiBakani,
            level: 1,
        },
        {
            id: 61,
            question: "Nükleer enerji santrali kurma fırsatımız var. Bu, uzun vadede enerji ihtiyacımızı karşılayabilir, ancak çevresel ve uluslararası alanda büyük tepki çekebilir.",
            answers: [
                {
                    text: "Santrali kuracağız",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +20,
                        internationalRelations: -10,
                        agriculturalProduction: -5,
                    },
                    listID: "enerji3",
                },
                {
                    text: "Çevreci kaynaklara yatırım yapacağız",
                    effect: {
                        budget: -5,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +5,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Enerji ve Tabii Kaynaklar Bakanı",
            photo: enerjiBakani,
            level: 2,
        },
    ],
    en: [
        {
            id: 60,
            question: "We can initiate extensive exploration efforts to discover national energy sources. However, this could involve significant costs.",
            answers: [
                {
                    text: "Start explorations",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +15,
                    },
                    listID: "enerji1",
                },
                {
                    text: "Postpone it",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -20,
                    }
                }
            ],
            title: "Minister of Energy",
            photo: enerjiBakani,
            level: 1,
        },
        {
            id: 61,
            question: "A nuclear power plant could meet long-term energy needs, but it may raise environmental concerns and international repercussions.",
            answers: [
                {
                    text: "Invest in nuclear energy",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +20,
                        internationalRelations: -10,
                        agriculturalProduction: -5,
                    },
                    listID: "enerji3",
                },
                {
                    text: "Invest in renewable energy",
                    effect: {
                        budget: -5,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +5,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Minister of Energy",
            photo: enerjiBakani,
            level: 2,
        },
    ],
    de: [
        {
            id: 60,
            question: "Wir können umfangreiche Bemühungen zur Erkundung nationaler Energiequellen starten. Dies könnte jedoch erhebliche Kosten mit sich bringen.",
            answers: [
                {
                    text: "Erkundungen starten",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +15,
                    },
                    listID: "enerji1",
                },
                {
                    text: "Vorerst verschieben",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -20,
                    }
                }
            ],
            title: "Energieminister",
            photo: enerjiBakani,
            level: 1,
        },
        {
            id: 61,
            question: "Ein Kernkraftwerk könnte den langfristigen Energiebedarf decken, aber es könnte auch Umweltbedenken und internationale Konsequenzen hervorrufen.",
            answers: [
                {
                    text: "In Kernenergie investieren",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +20,
                        internationalRelations: -10,
                        agriculturalProduction: -5,
                    },
                    listID: "enerji3",
                },
                {
                    text: "In erneuerbare Energien investieren",
                    effect: {
                        budget: -5,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +5,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Energieminister",
            photo: enerjiBakani,
            level: 2,
        },
    ],
    fr: [
        {
            id: 60,
            question: "Nous pouvons lancer des efforts d'exploration à grande échelle pour découvrir des sources d'énergie nationales. Cependant, cela pourrait impliquer des coûts importants.",
            answers: [
                {
                    text: "Lancer les explorations",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +15,
                    },
                    listID: "enerji1",
                },
                {
                    text: "Reporter",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -20,
                    }
                }
            ],
            title: "Ministre de l'Énergie",
            photo: enerjiBakani,
            level: 1,
        },
        {
            id: 61,
            question: "Une centrale nucléaire pourrait répondre aux besoins énergétiques à long terme, mais elle pourrait soulever des préoccupations environnementales et des répercussions internationales.",
            answers: [
                {
                    text: "Investir dans l'énergie nucléaire",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +20,
                        internationalRelations: -10,
                        agriculturalProduction: -5,
                    },
                    listID: "enerji3",
                },
                {
                    text: "Investir dans les énergies renouvelables",
                    effect: {
                        budget: -5,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +5,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministre de l'Énergie",
            photo: enerjiBakani,
            level: 2,
        },
    ],
    pt: [
        {
            id: 60,
            question: "Podemos iniciar amplos esforços de exploração para descobrir fontes de energia nacionais. No entanto, isso pode envolver custos significativos.",
            answers: [
                {
                    text: "Iniciar explorações",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +15,
                    },
                    listID: "enerji1",
                },
                {
                    text: "Ministro da Energia",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -20,
                    }
                }
            ],
            title: "Ministro da Energia",
            photo: enerjiBakani,
            level: 1,
        },
        {
            id: 61,
            question: "Uma usina nuclear poderia atender às necessidades energéticas a longo prazo, mas pode gerar preocupações ambientais e repercussões internacionais.",
            answers: [
                {
                    text: "Investir em energia nuclear",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +20,
                        internationalRelations: -10,
                        agriculturalProduction: -5,
                    },
                    listID: "enerji3",
                },
                {
                    text: "Investir em energia renovável",
                    effect: {
                        budget: -5,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +5,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministro da Energia",
            photo: enerjiBakani,
            level: 2,
        },
    ],
    zh: [
        {
            id: 60,
            question: "我们可以开始广泛的勘探工作来发现国内能源资源。然而，这可能涉及到高昂的成本。",
            answers: [
                {
                    text: "开始勘探",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +15,
                    },
                    listID: "enerji1",
                },
                {
                    text: "暂缓执行",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -20,
                    }
                }
            ],
            title: "能源部长",
            photo: enerjiBakani,
            level: 1,
        },
        {
            id: 61,
            question: "核电站可以满足长期能源需求，但可能引发环境担忧和国际影响。",
            answers: [
                {
                    text: "投资核能",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +20,
                        internationalRelations: -10,
                        agriculturalProduction: -5,
                    },
                    listID: "enerji3",
                },
                {
                    text: "投资可再生能源",
                    effect: {
                        budget: -5,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +5,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "能源部长",
            photo: enerjiBakani,
            level: 2,
        },
    ],
    es: [
        {
            id: 60,
            question: "Podemos iniciar amplios esfuerzos de exploración para descubrir fuentes de energía nacionales. Sin embargo, esto podría conllevar costos significativos.",
            answers: [
                {
                    text: "Iniciar exploraciones",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +15,
                    },
                    listID: "enerji1",
                },
                {
                    text: "Posponerlo",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -20,
                    }
                }
            ],
            title: "Ministro de Energía",
            photo: enerjiBakani,
            level: 1,
        },
        {
            id: 61,
            question: "Una central nuclear podría satisfacer las necesidades energéticas a largo plazo, pero podría desencadenar preocupaciones ambientales y reacciones internacionales.",
            answers: [
                {
                    text: "Invertir en energía nuclear",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +20,
                        internationalRelations: -10,
                        agriculturalProduction: -5,
                    },
                    listID: "enerji3",
                },
                {
                    text: "Invertir en energía renovable",
                    effect: {
                        budget: -5,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +5,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Ministro de Energía",
            photo: enerjiBakani,
            level: 2,
        },
    ],
    ru: [
        {
            id: 60,
            question: "Мы можем начать масштабные усилия по разведке для обнаружения национальных источников энергии. Однако это может повлечь значительные расходы.",
            answers: [
                {
                    text: "Начать разведку",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +15,
                    },
                    listID: "enerji1",
                },
                {
                    text: "Отложить это",
                    effect: {
                        budget: +20,
                        infrastructureAndEnvironment: -20,
                    }
                }
            ],
            title: "Министр энергетики",
            photo: enerjiBakani,
            level: 1,
        },
        {
            id: 61,
            question: "Атомная электростанция может удовлетворить долгосрочные потребности в энергии, но может вызвать экологические опасения и международные последствия.",
            answers: [
                {
                    text: "Инвестировать в ядерную энергию",
                    effect: {
                        budget: -15,
                        infrastructureAndEnvironment: +20,
                        internationalRelations: -10,
                        agriculturalProduction: -5,
                    },
                    listID: "enerji3",
                },
                {
                    text: "Инвестировать в возобновляемую энергию",
                    effect: {
                        budget: -5,
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +5,
                        agriculturalProduction: +10,
                    }
                }
            ],
            title: "Министр энергетики",
            photo: enerjiBakani,
            level: 2,
        },
    ],
};
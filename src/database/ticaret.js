import ticaretBakani from "../../public/ministers/ticaret-bakani.webp";
// 3 soru var
export const ticaretQuestions = {
    tr: [
        {
            id: 140,
            question: "Ülkemizde dijital ticaret hızla büyüyor, ancak küçük işletmeler dijital dönüşüme ayak uyduramıyor. Hangisine destek verilip hangisinden feragat edilmeli?",
            answers: [
                {
                    text: "Küçük işletmelere destek verilecek",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Büyük şirketlerin önü açılacak",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Sınır ticareti bazı bölgelerde ekonomik canlanmaya yol açtı. Ancak bu durum güvenlik sorunlarına ve kaçakçılık faaliyetlerine neden olabilir.",
            answers: [
                {
                    text: "Sınır ticaretini destekleyin",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Sınır ticaretini kısıtlayın",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Sayın Cumhurbaşkanım, uluslararası şirketler yatırım yapmak istiyor. Ancak bu, yerli üreticilerin pazar payını daraltabilir.",
            answers: [
                {
                    text: "Yabancı yatırımları kabul edeceğiz",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Yerli üreticileri düşünmek zorundayız",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Ticaret Bakanı",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    en: [
        {
            id: 140,
            question: "Digital commerce is booming, but small businesses are struggling. Who should we support and what should we sacrifice?",
            answers: [
                {
                    text: "Support small businesses",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Support large companies",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Minister of Commerce",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Border trade has led to economic revitalization in some regions. However, this could cause security problems and smuggling activities.",
            answers: [
                {
                    text: "Support border trade",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Restrict border trade",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Minister of Commerce",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Mr. President, international companies want to invest. However, this could reduce the market share of local producers.",
            answers: [
                {
                    text: "Accept foreign investments",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Support local producers",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Minister of Commerce",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    de: [
        {
            id: 140,
            question: "Der digitale Handel boomt, aber kleine Unternehmen kämpfen ums Überleben. Wen sollten wir unterstützen und was sollten wir opfern?",
            answers: [
                {
                    text: "Kleine Unternehmen unterstützen",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Große Unternehmen unterstützen",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Der Grenzhandel hat in einigen Regionen eine wirtschaftliche Belebung gebracht. Allerdings könnte dies Sicherheitsprobleme und Schmuggelaktivitäten verursachen.",
            answers: [
                {
                    text: "Grenzhandel unterstützen",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Grenzhandel einschränken",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Herr Präsident, internationale Unternehmen wollen investieren. Dies könnte jedoch den Marktanteil lokaler Produzenten verringern.",
            answers: [
                {
                    text: "Ausländische Investitionen akzeptieren",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Lokale Produzenten unterstützen",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Handelsminister",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    fr: [
        {
            id: 140,
            question: "Le commerce numérique est en plein essor, mais les petites entreprises luttent. Qui devrions-nous soutenir et que devons-nous sacrifier ?",
            answers: [
                {
                    text: "Soutenir les petites entreprises",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Soutenir les grandes entreprises",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministre du Commerce",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Le commerce frontalier a conduit à une revitalisation économique dans certaines régions. Cependant, cela pourrait générer des problèmes de sécurité et des activités de contrebande.",
            answers: [
                {
                    text: "Soutenir le commerce frontalier",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Restreindre le commerce frontalier",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministre du Commerce",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Monsieur le Président, des entreprises internationales veulent investir. Cependant, cela pourrait réduire la part de marché des producteurs locaux.",
            answers: [
                {
                    text: "Accepter les investissements étrangers",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Soutenir les producteurs locaux",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Ministre de l'Agriculture",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    pt: [
        {
            id: 140,
            question: "O comércio digital está em alta, mas as pequenas empresas estão enfrentando dificuldades. Quem devemos apoiar e o que devemos sacrificar?",
            answers: [
                {
                    text: "Apoiar as pequenas empresas",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Apoiar as grandes companhias",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministro do Comércio",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "O comércio fronteiriço levou à revitalização econômica em algumas regiões. No entanto, isso pode gerar problemas de segurança e atividades de contrabando.",
            answers: [
                {
                    text: "Apoiar o comércio fronteiriço",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Restringir o comércio fronteiriço",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministro do Comércio",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Senhor Presidente, empresas internacionais querem investir. No entanto, isso pode reduzir a participação de mercado dos produtores locais.",
            answers: [
                {
                    text: "Aceitar investimentos estrangeiros",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Apoiar os produtores locais",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Ministro da Agricultura",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    zh: [
        {
            id: 140,
            question: "数字贸易正在蓬勃发展，但小企业正在苦苦挣扎。我们应该支持谁，又该牺牲什么？",
            answers: [
                {
                    text: "支持小企业",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "支持大公司",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "贸易部长",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "边境贸易在一些地区带来了经济复苏。然而，这可能会引发安全问题和走私活动。",
            answers: [
                {
                    text: "支持边境贸易",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "限制边境贸易",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "贸易部长",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "总统先生，国际公司希望投资。然而，这可能会减少本地生产者的市场份额。",
            answers: [
                {
                    text: "接受外国投资",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "支持本地生产者",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "农业部长",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    es: [
        {
            id: 140,
            question: "El comercio digital está en auge, pero las pequeñas empresas luchan. ¿A quién debemos apoyar y qué debemos sacrificar?",
            answers: [
                {
                    text: "Apoyar a las pequeñas empresas",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Apoyar a las grandes empresas",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministro de Comercio",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "El comercio fronterizo ha llevado a un renacimiento económico en algunas regiones. Sin embargo, esto podría llevar a problemas de seguridad y actividades de contrabando.",
            answers: [
                {
                    text: "Apoyar el comercio fronterizo",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Restringir el comercio fronterizo",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Ministro de Comercio",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Señor Presidente, las empresas internacionales quieren invertir. Sin embargo, esto podría reducir la cuota de mercado de los productores locales.",
            answers: [
                {
                    text: "Aceptar inversiones extranjeras",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Apoyar a los productores locales",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Ministro de Agricultura",
            photo: ticaretBakani,
            level: 3,
        },
    ],
    ru: [
        {
            id: 140,
            question: "Цифровая торговля процветает, но малый бизнес сталкивается с трудностями. Кого мы должны поддержать и чем пожертвовать?",
            answers: [
                {
                    text: "Поддержать малый бизнес",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        internationalRelations: -10,
                    }
                },
                {
                    text: "Поддержать крупные компании",
                    effect: {
                        publicSupport: -15,
                        budget: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 1,
        },
        {
            id: 141,
            question: "Пограничная торговля привела к экономическому оживлению в некоторых регионах. Однако это может вызвать проблемы безопасности и контрабанду.",
            answers: [
                {
                    text: "Поддержать пограничную торговлю",
                    effect: {
                        internalSecurity: -10,
                        budget: +15,
                        internationalRelations: +10,
                    }
                },
                {
                    text: "Ограничить пограничную торговлю",
                    effect: {
                        internalSecurity: +10,
                        budget: -10,
                        internationalRelations: -15,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 2,
        },
        {
            id: 142,
            question: "Господин Президент, международные компании хотят инвестировать. Однако это может сократить долю рынка местных производителей.",
            answers: [
                {
                    text: "Принять иностранные инвестиции",
                    effect: {
                        internationalRelations: +10,
                        budget: +15,
                        agriculturalProduction: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Поддержать местных производителей",
                    effect: {
                        agriculturalProduction: +10,
                        internationalRelations: -10,
                        budget: -10,
                        infrastructureAndEnvironment: -15,
                        publicSupport: +10,
                    }
                }
            ],
            title: "Министр торговли",
            photo: ticaretBakani,
            level: 3,
        },
    ],
};
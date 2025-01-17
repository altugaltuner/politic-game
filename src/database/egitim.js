import egitimBakani from "../../public/ministers/egitim-bakani.webp";
//4 soru var
export const egitimQuestions = {
    tr: [
        {
            id: 50,
            question: "Kırsal kesimdeki okulların fiziki durumu çok kötü. Yeni okulların inşası gündemde...",
            answers: [
                {
                    text: "Köy okulları inşa edin",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Köydeki nüfusu şehre taşıyın",
                    effect: {
                        publicSupport: -20,
                        budget: +15,
                        internalSecurity: -15,
                    }
                }
            ],
            title: "Milli Eğitim Bakanı",
            photo: egitimBakani,
            level: 1,
        },
        {
            id: 51,
            question: "Mesleki eğitime olan ilgi azaldı. Gençleri akademik eğitime mi yoksa mesleki eğitime mi yönlendirelim?",
            answers: [
                {
                    text: "Mesleki eğitime yönlendirin",
                    effect: {
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: -15,
                    },
                    listID: "egitim1",
                },
                {
                    text: "Akademik eğitimi destekleyin",
                    effect: {
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Milli Eğitim Bakanı",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 52,
            question: "Ülkemizde popüler olan Borcaq oyunu pedofiliyi teşvik ediyor. Bu oyunun yasaklanması gerektiğini düşünüyorum.",
            answers: [
                {
                    text: "Engelleyin",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        internationalRelations: -10,
                    },
                },
                {
                    text: "Serbest bırakın",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Milli Eğitim Bakanı",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 53,
            question: "Evrim teorisinin dinimize aykırı olduğunu düşünüyorum. Okullarda bu konunun öğretilmesini yasaklamalıyız.",
            answers: [
                {
                    text: "Haklısın, yasaklansın",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Bilimi kısıtlamayacağız",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Milli Eğitim Bakanı",
            photo: egitimBakani,
            level: 2,
        },
    ],
    en: [
        {
            id: 50,
            question: "The physical condition of schools in rural areas is very poor.The construction of new schools is on the agenda...",
            answers: [
                {
                    text: "Build village schools",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Relocate the rural population",
                    effect: {
                        publicSupport: -20,
                        budget: +15,
                        internalSecurity: -15,
                    }
                }
            ],
            title: "Minister of National Education",
            photo: egitimBakani,
            level: 1,
        },
        {
            id: 51,
            question: "Interest in vocational education has declined. Should we guide young people towards academic education or vocational education?",
            answers: [
                {
                    text: "Support vocational education",
                    effect: {
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: -15,
                    },
                    listID: "egitim1",
                },
                {
                    text: "Support academic education",
                    effect: {
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Minister of National Education",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 52,
            question: "The game Borcaq, which is popular in our country, promotes pedophilia. I believe it should be banned.",
            answers: [
                {
                    text: "Ban it",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        internationalRelations: -10,
                    },
                },
                {
                    text: "Allow it",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Minister of National Education",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 53,
            question: "I believe the theory of evolution contradicts our religion. We should ban teaching this subject in schools.",
            answers: [
                {
                    text: "You’re right, ban it",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "We will not restrict science",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Minister of National Education",
            photo: egitimBakani,
            level: 2,
        }


    ],
    de: [
        {
            id: 50,
            question: "Der bauliche Zustand von Schulen in ländlichen Gebieten ist sehr schlecht. Der Bau neuer Schulen steht auf der Agenda...",
            answers: [
                {
                    text: "Dorfschulen bauen",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Die ländliche Bevölkerung umziehen",
                    effect: {
                        publicSupport: -20,
                        budget: +15,
                        internalSecurity: -15,
                    }
                }
            ],
            title: "Bildungsminister",
            photo: egitimBakani,
            level: 1,
        },
        {
            id: 51,
            question: "Das Interesse an beruflicher Bildung hat nachgelassen. Sollten wir junge Menschen in Richtung akademischer Bildung oder beruflicher Bildung führen?",
            answers: [
                {
                    text: "Berufliche Bildung unterstützen",
                    effect: {
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: -15,
                    },
                    listID: "egitim1",
                },
                {
                    text: "Akademische Bildung unterstützen",
                    effect: {
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Bildungsminister",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 52,
            question: "Das Spiel Borcaq, das in unserem Land beliebt ist, fördert Pädophilie. Ich glaube, es sollte verboten werden.",
            answers: [
                {
                    text: "Verbieten",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        internationalRelations: -10,
                    },
                },
                {
                    text: "Erlauben",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Minister für Bildung",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 53,
            question: "Ich glaube, dass die Evolutionstheorie unserer Religion widerspricht. Wir sollten das Unterrichten dieses Themas in Schulen verbieten.",
            answers: [
                {
                    text: "Du hast recht, verbieten wir es",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Wir werden die Wissenschaft nicht einschränken",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Minister für Bildung",
            photo: egitimBakani,
            level: 2,
        }
    ],
    fr: [
        {
            id: 50,
            question: "L'état physique des écoles dans les zones rurales est très mauvais. La construction de nouvelles écoles est à l'ordre du jour...",
            answers: [
                {
                    text: "Construire des écoles de village",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Relocaliser la population rurale",
                    effect: {
                        publicSupport: -20,
                        budget: +15,
                        internalSecurity: -15,
                    }
                }
            ],
            title: "Ministre de l'Éducation Nationale",
            photo: egitimBakani,
            level: 1,
        },
        {
            id: 51,
            question: "L'intérêt pour l'enseignement professionnel a diminué. Devons-nous orienter les jeunes vers l'enseignement académique ou professionnel?",
            answers: [
                {
                    text: "Soutenir l'enseignement professionnel",
                    effect: {
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: -15,
                    },
                    listID: "egitim1",
                },
                {
                    text: "Soutenir l'enseignement académique",
                    effect: {
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministre de l'Éducation Nationale",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 52,
            question: "Le jeu Borcaq, populaire dans notre pays, encourage la pédophilie. Je pense qu'il devrait être interdit.",
            answers: [
                {
                    text: "Interdisez-le",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        internationalRelations: -10,
                    },
                },
                {
                    text: "Autorisez-le",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministre de l'Éducation Nationale",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 53,
            question: "Je pense que la théorie de l'évolution contredit notre religion. Nous devrions interdire l'enseignement de ce sujet dans les écoles.",
            answers: [
                {
                    text: "Tu as raison, interdisons-le",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Nous ne restreindrons pas la science",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministre de l'Éducation Nationale",
            photo: egitimBakani,
            level: 2,
        }

    ],
    pt: [
        {
            id: 50,
            question: "A condição física das escolas em áreas rurais está muito precária. A construção de novas escolas está em pauta...",
            answers: [
                {
                    text: "Construir escolas nas aldeias",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Relocar a população rural",
                    effect: {
                        publicSupport: -20,
                        budget: +15,
                        internalSecurity: -15,
                    }
                }
            ],
            title: "Ministro da Educação Nacional",
            photo: egitimBakani,
            level: 1,
        },
        {
            id: 51,
            question: "O interesse pela educação profissional diminuiu. Devemos direcionar os jovens para a educação acadêmica ou para a educação profissional?",
            answers: [
                {
                    text: "Apoiar a educação profissional",
                    effect: {
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: -15,
                    },
                    listID: "egitim1",
                },
                {
                    text: "Apoiar a educação acadêmica",
                    effect: {
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministro da Educação Nacional",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 52,
            question: "O jogo Borcaq, popular em nosso país, promove a pedofilia. Eu acredito que ele deve ser proibido.",
            answers: [
                {
                    text: "Proíba-o",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        internationalRelations: -10,
                    },
                },
                {
                    text: "Permita-o",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministro da Educação Nacional",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 53,
            question: "Acredito que a teoria da evolução contradiz nossa religião. Devemos proibir o ensino desse assunto nas escolas.",
            answers: [
                {
                    text: "Você está certo, proíba",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Não vamos restringir a ciência",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministro da Educação Nacional",
            photo: egitimBakani,
            level: 2,
        }


    ],
    zh: [
        {
            id: 50,
            question: "农村地区学校的物理条件非常差，新建学校的计划正在议程上……",
            answers: [
                {
                    text: "建造乡村学校",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "迁移农村人口",
                    effect: {
                        publicSupport: -20,
                        budget: +15,
                        internalSecurity: -15,
                    }
                }
            ],
            title: "教育部长",
            photo: egitimBakani,
            level: 1,
        },
        {
            id: 51,
            question: "职业教育的兴趣下降。我们应该引导年轻人接受学术教育还是职业教育？",
            answers: [
                {
                    text: "支持职业教育",
                    effect: {
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: -15,
                    },
                    listID: "egitim1",
                },
                {
                    text: "支持学术教育",
                    effect: {
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "教育部长",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 52,
            question: "在我国很受欢迎的游戏Borcaq助长了恋童癖。我认为它应该被禁止。",
            answers: [
                {
                    text: "禁止",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        internationalRelations: -10,
                    },
                },
                {
                    text: "允许",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "国家教育部长",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 53,
            question: "我认为进化论与我们的宗教相矛盾。我们应该禁止在学校教授这个主题。",
            answers: [
                {
                    text: "你是对的，禁止吧",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "我们不会限制科学",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "国家教育部长",
            photo: egitimBakani,
            level: 2,
        }


    ],
    es: [
        {
            id: 50,
            question: "La condición física de las escuelas en áreas rurales es muy deficiente. La construcción de nuevas escuelas está en la agenda...",
            answers: [
                {
                    text: "Construir escuelas rurales",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Reubicar a la población rural",
                    effect: {
                        publicSupport: -20,
                        budget: +15,
                        internalSecurity: -15,
                    }
                }
            ],
            title: "Ministro de Educación Nacional",
            photo: egitimBakani,
            level: 1,
        },
        {
            id: 51,
            question: "El interés en la educación vocacional ha disminuido. ¿Deberíamos guiar a los jóvenes hacia la educación académica o la educación vocacional?",
            answers: [
                {
                    text: "Apoyar la educación vocacional",
                    effect: {
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: -15,
                    },
                    listID: "egitim1",
                },
                {
                    text: "Apoyar la educación académica",
                    effect: {
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Ministro de Educación Nacional",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 52,
            question: "El juego Borcaq, que es popular en nuestro país, fomenta la pedofilia. Creo que debería prohibirse.",
            answers: [
                {
                    text: "Prohíbelo",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        internationalRelations: -10,
                    },
                },
                {
                    text: "Permítelo",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministro de Educación Nacional",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 53,
            question: "Creo que la teoría de la evolución contradice nuestra religión. Deberíamos prohibir la enseñanza de este tema en las escuelas.",
            answers: [
                {
                    text: "Tienes razón, prohíbelo",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "No vamos a restringir la ciencia",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Ministro de Educación Nacional",
            photo: egitimBakani,
            level: 2,
        }


    ],
    ru: [
        {
            id: 50,
            question: "Физическое состояние школ в сельских районах очень плохое. На повестке дня стоит строительство новых школ...",
            answers: [
                {
                    text: "Построить сельские школы",
                    effect: {
                        publicSupport: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +10,
                    }
                },
                {
                    text: "Переселить сельское население",
                    effect: {
                        publicSupport: -20,
                        budget: +15,
                        internalSecurity: -15,
                    }
                }
            ],
            title: "Министр национального образования",
            photo: egitimBakani,
            level: 1,
        },
        {
            id: 51,
            question: "Интерес к профессиональному образованию снизился. Должны ли мы направить молодежь на академическое или профессиональное образование?",
            answers: [
                {
                    text: "Поддерживать профессиональное образование",
                    effect: {
                        agriculturalProduction: +15,
                        infrastructureAndEnvironment: -15,
                    },
                    listID: "egitim1",
                },
                {
                    text: "Поддерживать академическое образование",
                    effect: {
                        agriculturalProduction: -15,
                        infrastructureAndEnvironment: +10,
                    }
                }
            ],
            title: "Министр национального образования",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 52,
            question: "Игра Borcaq, популярная в нашей стране, продвигает педофилию. Я считаю, что она должна быть запрещена.",
            answers: [
                {
                    text: "Запретить",
                    effect: {
                        publicSupport: +10,
                        internalSecurity: +10,
                        internationalRelations: -10,
                    },
                },
                {
                    text: "Разрешить",
                    effect: {
                        publicSupport: -10,
                        internalSecurity: -10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Министр национального образования",
            photo: egitimBakani,
            level: 2,
        },
        {
            id: 53,
            question: "Я считаю, что теория эволюции противоречит нашей религии. Мы должны запретить преподавание этой темы в школах.",
            answers: [
                {
                    text: "Вы правы, запретим это",
                    effect: {
                        infrastructureAndEnvironment: -20,
                        internationalRelations: -15,
                    },
                },
                {
                    text: "Мы не будем ограничивать науку",
                    effect: {
                        infrastructureAndEnvironment: +10,
                        internationalRelations: +10,
                    }
                }
            ],
            title: "Министр образования",
            photo: egitimBakani,
            level: 2,
        },
    ],
};
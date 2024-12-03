import turizmBakani from "../../public/ministers/turizm-bakani.webp";
//1 soru var
export const turizmQuestions = {
    tr: [
        {
            id: 160,
            question: "Sayın Cumhurbaşkanım, Akdenizde orman yangınlarından ötürü deniz kıyısnda hektarlarca ormanlık alan yok oldu. Bu alanlar için ne yapmalıyız? ",
            answers: [
                {
                    text: "İmara açın",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Ağaçlandırma çalışması başlatın",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Kültür ve Turizm Bakanı",
            photo: turizmBakani,
            level: 1,
        },
        {
            id: 161,
            question: "Pandemiden dolayı zarar gören turizm sektörünü bu yaz canlandırmak için tarihi eserlerin restorasyonu konusunda büyük bir talep var. Ancak buna ayırdığımız bütçemiz yetersiz",
            answers: [
                {
                    text: "Tarım bütçesinden kesinti yapın",
                    effect: {
                        internationalRelations: +15,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Emekli maaşlarından kesinti yapın",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: -15,
                    }
                }
            ],
            title: "Kültür ve Turizm Bakanı",
            photo: turizmBakani,
            level: 2,
        },
        {
            id: 162,
            question: "Yabancı turistler ülkemizde yaşanan dil bariyerinden dolayı sorunlar yaşıyor. Yerel esnaf ve turizm çalışanları için dil eğitimi talepleri var.",
            answers: [
                {
                    text: "Dil kursları düzenleyin",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: +10,
                        budget: -5,
                    }
                },
                {
                    text: "Teknolojik çeviri cihazları dağıtın",
                    effect: {
                        internationalRelations: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Kültür ve Turizm Bakanı",
            photo: turizmBakani,
            level: 3,
        },
    ],
    en: [
        {
            id: 160,
            question: "Mr. President, forest fires in the Mediterranean have destroyed coastal forests. What actions should we take to restore the areas?",
            answers: [
                {
                    text: "Open them for development",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Start reforestation efforts",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Minister of Culture and Tourism",
            photo: turizmBakani,
            level: 1,
        },
        {
            id: 161,
            question: "There’s high demand to restore historical monuments to boost pandemic-hit tourism, but the allocated budget is insufficient.",
            answers: [
                {
                    text: "Cut from the agriculture budget",
                    effect: {
                        internationalRelations: +15,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Cut from the pension funds",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: -15,
                    }
                }
            ],
            title: "Minister of Culture",
            photo: turizmBakani,
            level: 2,
        },
        {
            id: 162,
            question: "Foreign tourists are experiencing problems in our country due to the language barrier. There are requests for language training for local shopkeepers and tourism workers.",
            answers: [
                {
                    text: "Organize language courses",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: +10,
                        budget: -5,
                    }
                },
                {
                    text: "Distribute translation devices",
                    effect: {
                        internationalRelations: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Minister of Culture",
            photo: turizmBakani,
            level: 3,
        },
    ],
    de: [
        {
            id: 160,
            question: "Herr Präsident, Waldbrände im Mittelmeerraum haben Küstenwälder zerstört. Welche Maßnahmen sollten wir ergreifen, um die Gebiete wiederherzustellen?",
            answers: [
                {
                    text: "Für die Entwicklung freigeben",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Aufforstungsmaßnahmen starten",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Kultur und Tourismusminister",
            photo: turizmBakani,
            level: 1,
        },
        {
            id: 161,
            question: "Es gibt eine hohe Nachfrage nach der Restaurierung historischer Denkmäler, um den pandemiebedingten Tourismuseinbruch auszugleichen, aber das zugewiesene Budget ist unzureichend.",
            answers: [
                {
                    text: "Vom Landwirtschaftsbudget kürzen",
                    effect: {
                        internationalRelations: +15,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Von den Rentenfonds kürzen",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: -15,
                    }
                }
            ],
            title: "Kultur und Tourismusminister",
            photo: turizmBakani,
            level: 2,
        },
        {
            id: 162,
            question: "Ausländische Touristen haben in unserem Land Probleme aufgrund der Sprachbarriere. Es gibt Anfragen nach Sprachschulungen für lokale Ladenbesitzer und Tourismusarbeiter.",
            answers: [
                {
                    text: "Sprachkurse organisieren",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: +10,
                        budget: -5,
                    }
                },
                {
                    text: "Übersetzungsgeräte verteilen",
                    effect: {
                        internationalRelations: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Kultur und Tourismusminister",
            photo: turizmBakani,
            level: 3,
        },
    ],
    fr: [
        {
            id: 160,
            question: "Monsieur le Président, les incendies de forêt en Méditerranée ont détruit les forêts côtières. Quelles actions devrions-nous entreprendre pour restaurer les zones ?",
            answers: [
                {
                    text: "Les ouvrir au développement",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Commencer les efforts de reforestation",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Ministre de la Culture",
            photo: turizmBakani,
            level: 1,
        },
        {
            id: 161,
            question: "Il y a une forte demande pour restaurer les monuments historiques afin de relancer le tourisme frappé par la pandémie, mais le budget alloué est insuffisant.",
            answers: [
                {
                    text: "Réduire le budget de l'agriculture",
                    effect: {
                        internationalRelations: +15,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Réduire les fonds de pension",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: -15,
                    }
                }
            ],
            title: "Ministre de la Culture",
            photo: turizmBakani,
            level: 2,
        },
        {
            id: 162,
            question: "Les touristes étrangers rencontrent des problèmes dans notre pays en raison de la barrière linguistique. Il y a des demandes de formation linguistique pour les commerçants locaux et les travailleurs du tourisme.",
            answers: [
                {
                    text: "Organiser des cours de langue",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: +10,
                        budget: -5,
                    }
                },
                {
                    text: "Distribuer des dispositifs de traduction",
                    effect: {
                        internationalRelations: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministre de la Culture",
            photo: turizmBakani,
            level: 3,
        },
    ],
    pt: [
        {
            id: 160,
            question: "Senhor Presidente, os incêndios florestais no Mediterrâneo destruíram florestas costeiras. Que ações devemos tomar para restaurar as áreas?",
            answers: [
                {
                    text: "Abrir para desenvolvimento",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Iniciar esforços de reflorestamento",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Ministro da Cultura e Turismo",
            photo: turizmBakani,
            level: 1,
        },
        {
            id: 161,
            question: "Há uma grande demanda para restaurar monumentos históricos para impulsionar o turismo afetado pela pandemia, mas o orçamento alocado é insuficiente.",
            answers: [
                {
                    text: "Cortar do orçamento da agricultura",
                    effect: {
                        internationalRelations: +15,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Cortar do fundo de pensões",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: -15,
                    }
                }
            ],
            title: "Ministro da Cultura",
            photo: turizmBakani,
            level: 2,
        },
        {
            id: 162,
            question: "Turistas estrangeiros estão enfrentando problemas em nosso país devido à barreira linguística. Há pedidos de treinamento linguístico para comerciantes locais e trabalhadores do turismo.",
            answers: [
                {
                    text: "Organizar cursos de idiomas",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: +10,
                        budget: -5,
                    }
                },
                {
                    text: "Distribuir dispositivos de tradução",
                    effect: {
                        internationalRelations: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministro da Cultura",
            photo: turizmBakani,
            level: 3,
        },
    ],
    zh: [
        {
            id: 160,
            question: "总统先生，地中海地区的森林火灾摧毁了沿海森林。我们应该采取什么行动来恢复这些地区？",
            answers: [
                {
                    text: "将其开放用于开发",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "开始重新造林工作",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "文化和旅游部长",
            photo: turizmBakani,
            level: 1,
        },
        {
            id: 161,
            question: "恢复历史遗迹以促进受疫情影响的旅游业需求很高，但分配的预算不足。",
            answers: [
                {
                    text: "削减农业预算",
                    effect: {
                        internationalRelations: +15,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "削减养老金基金",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: -15,
                    }
                }
            ],
            title: "文化部长",
            photo: turizmBakani,
            level: 2,
        },
        {
            id: 162,
            question: "外国游客由于语言障碍在我国遇到问题。有要求为本地店主和旅游从业者提供语言培训。",
            answers: [
                {
                    text: "组织语言课程",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: +10,
                        budget: -5,
                    }
                },
                {
                    text: "分发翻译设备",
                    effect: {
                        internationalRelations: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "文化部长",
            photo: turizmBakani,
            level: 3,
        },
    ],
    es: [
        {
            id: 160,
            question: "Señor Presidente, los incendios forestales en el Mediterráneo han destruido bosques costeros. ¿Qué acciones deberíamos tomar para restaurar las áreas?",
            answers: [
                {
                    text: "Abrirlas para desarrollo",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Iniciar esfuerzos de reforestación",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Ministro de Cultura y Turismo",
            photo: turizmBakani,
            level: 1,
        },
        {
            id: 161,
            question: "Hay una gran demanda para restaurar monumentos históricos y así impulsar el turismo afectado por la pandemia, pero el presupuesto asignado es insuficiente.",
            answers: [
                {
                    text: "Recortar del presupuesto agrícola",
                    effect: {
                        internationalRelations: +15,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Recortar de los fondos de pensiones",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: -15,
                    }
                }
            ],
            title: "Ministro de Cultura",
            photo: turizmBakani,
            level: 2,
        },
        {
            id: 162,
            question: "Los turistas extranjeros están teniendo problemas en nuestro país debido a la barrera del idioma. Hay solicitudes para capacitar en idiomas a comerciantes locales y trabajadores del turismo.",
            answers: [
                {
                    text: "Organizar cursos de idiomas",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: +10,
                        budget: -5,
                    }
                },
                {
                    text: "Distribuir dispositivos de traducción",
                    effect: {
                        internationalRelations: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Ministro de Cultura",
            photo: turizmBakani,
            level: 3,
        },
    ],
    ru: [
        {
            id: 160,
            question: "Господин Президент, лесные пожары в Средиземноморье уничтожили прибрежные леса. Какие действия мы должны предпринять для восстановления этих территорий?",
            answers: [
                {
                    text: "Открыть для застройки",
                    effect: {
                        publicSupport: -15,
                        infrastructureAndEnvironment: +10,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Начать восстановление лесов",
                    effect: {
                        publicSupport: +10,
                        agriculturalProduction: +10,
                        infrastructureAndEnvironment: -15,
                    }
                }
            ],
            title: "Министр культуры и туризма",
            photo: turizmBakani,
            level: 1,
        },
        {
            id: 161,
            question: "Спрос на восстановление исторических памятников высок, чтобы оживить туризм, пострадавший во время пандемии, но выделенного бюджета недостаточно.",
            answers: [
                {
                    text: "Сократить бюджет на сельское хозяйство",
                    effect: {
                        internationalRelations: +15,
                        agriculturalProduction: -15,
                    }
                },
                {
                    text: "Сократить пенсионные фонды",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: -15,
                    }
                }
            ],
            title: "Министр культуры",
            photo: turizmBakani,
            level: 2,
        },
        {
            id: 162,
            question: "Иностранные туристы сталкиваются с проблемами в нашей стране из-за языкового барьера. Поступают запросы на обучение языкам для местных торговцев и работников туризма.",
            answers: [
                {
                    text: "Организовать языковые курсы",
                    effect: {
                        internationalRelations: +15,
                        publicSupport: +10,
                        budget: -5,
                    }
                },
                {
                    text: "Распределить переводческие устройства",
                    effect: {
                        internationalRelations: +10,
                        budget: -10,
                        infrastructureAndEnvironment: +5,
                    }
                }
            ],
            title: "Министр культуры",
            photo: turizmBakani,
            level: 3,
        },
    ],
}
import { ListElementsKeyLabels } from "../types/types";

export const languages = [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Türkçe' },
    { value: 'de', label: 'Deutsch' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'pt', label: 'Português' },
    { value: 'ru', label: 'Русский' },
    { value: 'zh', label: '中文 (Chinese)' },
];

export const header = {
    en: 'Settings',
    tr: 'Ayarlar',
    de: 'Einstellungen',
    es: 'Configuraciones',
    fr: 'Paramètres',
    pt: 'Configurações',
    ru: 'Настройки',
    zh: '设置',
};

export const resetGame = {
    en: 'Reset Game',
    tr: 'Oyunu Sıfırla',
    de: 'Spiel zurücksetzen',
    es: 'Restablecer juego',
    fr: 'Réinitialiser le jeu',
    pt: 'Redefinir jogo',
    ru: 'Сбросить игру',
    zh: '重置游戏',
}

export const statNames2 = {
    agriculture: {
        en: "Agriculture",
        tr: "Tarım",
        de: "Landwirtschaft",
        es: "Agricultura",
        fr: "Agriculture",
        pt: "Agricultura",
        ru: "Сельское хозяйство",
        zh: "农业",
    },
    infrastructure: {
        en: "Structure",
        tr: "Altyapı",
        de: "Infrastruktur",
        es: "Infraestructura",
        fr: "Infrastructure",
        pt: "Infraestrutura",
        ru: "Инфраструктура",
        zh: "基础设施",
    },
    internalSecurity: {
        en: " Security",
        tr: " Güvenlik",
        de: "Sicherheit",
        es: "Seguridad",
        fr: "Sécurité",
        pt: "Segurança",
        ru: "Безопасность",
        zh: "内部安全",
    },
    international: {
        en: "Politics",
        tr: "Politika",
        de: "Politik",
        es: "Política",
        fr: "Politique",
        pt: "Política",
        ru: "Политика",
        zh: "政治",
    },
    budget: {
        en: "Budget",
        tr: "Bütçe",
        de: "Haushalt",
        es: "Presupuesto",
        fr: "Budget",
        pt: "Orçamento",
        ru: "Бюджет",
        zh: "预算",
    },
    publicSupport: {
        en: "Support",
        tr: "Destek",
        de: "Unterstützung",
        es: "Apoyo",
        fr: "Soutien",
        pt: "Apoio",
        ru: "Поддержка",
        zh: "支持",
    },
    rule: {
        en: "Rule",
        tr: "Yönetim",
        de: "Regel",
        es: "Regla",
        fr: "Règle",
        pt: "Regra",
        ru: "Правило",
        zh: "规则",
    },
};

export const reset = {
    en: 'Reset',
    tr: 'Sıfırla',
    de: 'Zurücksetzen',
    es: 'Reiniciar',
    fr: 'Réinitialiser',
    pt: 'Redefinir',
    ru: 'Сбросить',
    zh: '重置',
}

export const voice = {
    en: 'Voice',
    tr: 'Ses',
    de: 'Stimme',
    es: 'Voz',
    fr: 'Voix',
    pt: 'Voz',
    ru: 'Голос',
    zh: '声音',
};

export const music = {
    en: 'Music',
    tr: 'Müzik',
    de: 'Musik',
    es: 'Música',
    fr: 'Musique',
    pt: 'Música',
    ru: 'Музыка',
    zh: '音乐',
};

export const selectLanguage = {
    en: 'Select Language',
    tr: 'Dil Seçin',
    de: 'Sprache auswählen',
    es: 'Seleccionar idioma',
    fr: 'Sélectionner la langue',
    pt: 'Selecione o idioma',
    ru: 'Выберите язык',
    zh: '选择语言',
};

export const close = {
    tr: "Kapat",
    en: "Close",
    fr: "Fermer",
    de: "Schließen",
    es: "Cerrar",
    pt: "Fechar",
    ru: "Закрыть",
    zh: "关闭",
}

export const leveltext = {
    tr: "SEVİYE",
    en: "LEVEL",
    fr: "NIVEAU",
    de: "NIVEAU",
    ru: "УРОВЕНЬ",
    zh: "水平",
    es: "NIVEL",
    pt: "NÍVEL",
};

export const effect = {
    tr: "Etkisi:",
    en: "Effect:",
    fr: "Effet:",
    de: "Wirkung:",
    es: "Efecto:",
    pt: "Efeito:",
    ru: "Эффект:",
    zh: "效果:",
};

export const keyLabels = {
    tr: {
        internalSecurity: "Güvenlik",
        publicSupport: "Destek",
        infrastructureAndEnvironment: "Altyapı",
        internationalRelations: "Politika",
        budget: "Bütçe",
        agriculturalProduction: "Tarım",
    },
    en: {
        internalSecurity: "Security",
        publicSupport: "Support",
        infrastructureAndEnvironment: "Infrastructure",
        internationalRelations: "Policy",
        budget: "Budget",
        agriculturalProduction: "Agriculture",
    },
    fr: {
        internalSecurity: "Sécurité",
        publicSupport: "Soutien",
        infrastructureAndEnvironment: "Infrastructure",
        internationalRelations: "Politique",
        budget: "Budget",
        agriculturalProduction: "Agriculture",
    },
    de: {
        internalSecurity: "Sicherheit",
        publicSupport: "Unterstützung",
        infrastructureAndEnvironment: "Infrastruktur",
        internationalRelations: "Politik",
        budget: "Haushalt",
        agriculturalProduction: "Landwirtschaft",
    },
    es: {
        internalSecurity: "Seguridad",
        publicSupport: "Apoyo",
        infrastructureAndEnvironment: "Infraestructura",
        internationalRelations: "Política",
        budget: "Presupuesto",
        agriculturalProduction: "Agricultura",
    },
    pt: {
        internalSecurity: "Segurança",
        publicSupport: "Apoio",
        infrastructureAndEnvironment: "Infraestrutura",
        internationalRelations: "Política",
        budget: "Orçamento",
        agriculturalProduction: "Agricultura",
    },
    ru: {
        internalSecurity: "Безопасность",
        publicSupport: "Поддержка",
        infrastructureAndEnvironment: "Инфраструктура",
        internationalRelations: "Политика",
        budget: "Бюджет",
        agriculturalProduction: "Сельское хозяйство",
    },
    zh: {
        internalSecurity: "安全",
        publicSupport: "支持",
        infrastructureAndEnvironment: "基础设施",
        internationalRelations: "政策",
        budget: "预算",
        agriculturalProduction: "农业",
    },
};

export const gameOverMessages = {
    en: {
        publicOpinion: "You lost the trust and support of the people. You were removed from office in the first opportunity for early elections. Your administration has ended!",
        internalSecurity: "Your poor decisions failed to ensure the people's safety, plunging the country into chaos. Your administration has ended!",
        international: "Your foreign policy mistakes isolated the country, leaving it voiceless on the global stage. Your administration has ended!",
        budget: "Your uncontrolled spending and mismanagement led the country to disaster. The state treasury is completely depleted. Your administration has ended!",
        infrastructure: "Neglecting infrastructure issues has driven the country to collapse. Roads, bridges, and cities are in ruins. The cost of neglect was too high. Your administration has ended!",
        agriculture: "Your neglect of production caused a food crisis in the country. You couldn't even meet the basic needs of your people. Your administration has ended!",
    },
    tr: {
        publicOpinion: "Halkın sana olan güvenini ve desteğini kaybettin. İlk fırsatta erken seçimle görevinden alındın. Yönetimin sona erdi!",
        internalSecurity: "Aldığın yanlış kararlar yüzünden halkın güvenliğini sağlayamadın ve ülkeyi kaosa sürükledin. Yönetimin sona erdi!",
        international: "Dış politikada yaptığın hatalar ülkeyi yalnızlaştırdı. Uluslararası arenada söz hakkını kaybettin. Yönetimin sona erdi!",
        budget: "Kontrolsüz harcamaların ve hatalı yönetimin ülkeyi felakete sürükledi. Devletin hazinesini tamamen tükettin. Yönetimin sona erdi!",
        infrastructure: "Altyapı sorunlarına kayıtsız kalman, ülkeyi çöküşe sürükledi. Yollar, köprüler, şehirler harabeye döndü. İhmalin bedeli ağır oldu. Yönetimin sona erdi!",
        agriculture: "Üretimi ihmal ettiğin için ülkende gıda krizine sebep oldun. Halkın en temel ihtiyaçlarını dahi karşılayamadın. Yönetimin sona erdi!",
    },
    de: {
        publicOpinion: "Du hast das Vertrauen und die Unterstützung des Volkes verloren. Bei der ersten Gelegenheit wurde ein vorzeitiger Wahltag angesetzt und du wurdest aus deinem Amt entfernt. Deine Amtszeit ist beendet!",
        internalSecurity: "Aufgrund deiner falschen Entscheidungen konntest du die Sicherheit der Bevölkerung nicht gewährleisten und hast das Land ins Chaos gestürzt. Deine Amtszeit ist beendet!",
        international: "Deine Fehler in der Außenpolitik haben das Land isoliert und seine Stimme auf der internationalen Bühne verstummen lassen. Deine Amtszeit ist beendet!",
        budget: "Deine unkontrollierten Ausgaben und dein schlechtes Management haben das Land in eine Katastrophe geführt. Die Staatskasse ist vollständig aufgebraucht. Deine Amtszeit ist beendet!",
        infrastructure: "Deine Gleichgültigkeit gegenüber Infrastrukturproblemen hat das Land in den Ruin getrieben. Straßen, Brücken und Städte liegen in Trümmern. Die Kosten für deine Nachlässigkeit waren zu hoch. Deine Amtszeit ist beendet!",
        agriculture: "Deine Vernachlässigung der Produktion hat in deinem Land eine Nahrungsmittelkrise verursacht. Du konntest nicht einmal die Grundbedürfnisse der Bevölkerung decken. Deine Amtszeit ist beendet!",
    },
    es: {
        publicOpinion: "Has perdido la confianza y el apoyo del pueblo. En la primera oportunidad, se convocaron elecciones anticipadas y fuiste destituido de tu cargo. ¡Tu administración ha terminado!",
        internalSecurity: "Tus malas decisiones no lograron garantizar la seguridad del pueblo y sumieron al país en el caos. ¡Tu administración ha terminado!",
        international: "Tus errores en política exterior aislaron al país y le quitaron su voz en el escenario internacional. ¡Tu administración ha terminado!",
        budget: "Tus gastos descontrolados y tu mala gestión llevaron al país al desastre. El tesoro del estado está completamente agotado. ¡Tu administración ha terminado!",
        infrastructure: "Tu indiferencia hacia los problemas de infraestructura llevó al país al colapso. Carreteras, puentes y ciudades están en ruinas. El costo de tu negligencia fue demasiado alto. ¡Tu administración ha terminado!",
        agriculture: "Tu negligencia en la producción causó una crisis alimentaria en el país. No pudiste satisfacer ni las necesidades más básicas del pueblo. ¡Tu administración ha terminado!",
    },
    fr: {
        publicOpinion: "Vous avez perdu la confiance et le soutien du peuple. Lors de la première opportunité, des élections anticipées ont été organisées et vous avez été destitué de votre poste. Votre administration est terminée !",
        internalSecurity: "Vos mauvaises décisions n'ont pas réussi à garantir la sécurité du peuple, plongeant le pays dans le chaos. Votre administration est terminée !",
        international: "Vos erreurs en politique étrangère ont isolé le pays, lui retirant toute influence sur la scène internationale. Votre administration est terminée !",
        budget: "Vos dépenses incontrôlées et votre mauvaise gestion ont conduit le pays au désastre. Le trésor de l'État est complètement épuisé. Votre administration est terminée !",
        infrastructure: "Votre indifférence aux problèmes d'infrastructure a conduit le pays à l'effondrement. Les routes, les ponts et les villes sont en ruines. Le coût de votre négligence a été trop élevé. Votre administration est terminée !",
        agriculture: "Votre négligence de la production a causé une crise alimentaire dans le pays. Vous n'avez même pas pu répondre aux besoins fondamentaux du peuple. Votre administration est terminée !",
    },
    pt: {
        publicOpinion: "Você perdeu a confiança e o apoio do povo. Na primeira oportunidade, foram convocadas eleições antecipadas e você foi destituído do cargo. Sua administração chegou ao fim!",
        internalSecurity: "Suas decisões erradas não garantiram a segurança do povo, mergulhando o país no caos. Sua administração chegou ao fim!",
        international: "Seus erros na política externa isolaram o país, tirando sua voz no cenário internacional. Sua administração chegou ao fim!",
        budget: "Seus gastos descontrolados e má gestão levaram o país ao desastre. O tesouro do estado está completamente esgotado. Sua administração chegou ao fim!",
        infrastructure: "Sua negligência com os problemas de infraestrutura levou o país ao colapso. Estradas, pontes e cidades estão em ruínas. O custo da sua negligência foi alto demais. Sua administração chegou ao fim!",
        agriculture: "Sua negligência na produção causou uma crise alimentar no país. Você não conseguiu atender nem às necessidades básicas do povo. Sua administração chegou ao fim!",
    },
    ru: {
        publicOpinion: "Вы потеряли доверие и поддержку народа. При первой возможности были объявлены досрочные выборы, и вас отстранили от должности. Ваше правление завершилось!",
        internalSecurity: "Ваши ошибочные решения не смогли обеспечить безопасность народа, погрузив страну в хаос. Ваше правление завершилось!",
        international: "Ваши ошибки во внешней политике изолировали страну, лишив её голоса на международной арене. Ваше правление завершилось!",
        budget: "Ваши неконтролируемые расходы и плохое управление привели страну к катастрофе. Государственная казна полностью исчерпана. Ваше правление завершилось!",
        infrastructure: "Ваше равнодушие к проблемам инфраструктуры привело страну к краху. Дороги, мосты и города превратились в руины. Цена вашей халатности оказалась слишком высокой. Ваше правление завершилось!",
        agriculture: "Ваше пренебрежение к сельскому хозяйству вызвало продовольственный кризис в стране. Вы не смогли удовлетворить даже базовые потребности народа. Ваше правление завершилось!",
    },
    zh: {
        publicOpinion: "你失去了人民的信任和支持。在第一次机会中，提前选举被召集，你被罢免了职务。你的统治结束了！",
        internalSecurity: "你的错误决策未能保障人民的安全，将国家推向了混乱。你的统治结束了！",
        international: "你在外交政策上的错误使国家被孤立，失去了在国际舞台上的话语权。你的统治结束了！",
        budget: "你的不受控制的开支和糟糕的管理将国家带入灾难。国家财政完全耗尽。你的统治结束了！",
        infrastructure: "你对基础设施问题的漠视使国家陷入崩溃。道路、桥梁和城市变成了废墟。你的疏忽代价太高。你的统治结束了！",
        agriculture: "你对农业生产的忽视导致了国家的粮食危机。你甚至无法满足人民的基本需求。你的统治结束了！",
    },
};

export const playAgain = {
    en: "Play Again",
    tr: "Tekrar Oyna",
    de: "Nochmal spielen",
    es: "Jugar de nuevo",
    fr: "Rejouer",
    pt: "Jogar novamente",
    ru: "Играть снова",
    zh: "再玩一次",
}

export const daysInOffice = {
    en: "Days in Office",
    tr: "Yönetimde Geçen Gün",
    de: "Tage im Amt",
    es: "Días en el cargo",
    fr: "Jours au pouvoir",
    pt: "Dias no cargo",
    ru: "Дней на посту",
    zh: "在职天数",
}

export const victoryMessage = {
    en: "Congratulations! You have successfully completed the task. You are the one!",
    tr: "Tebrikler! Görevi başarıyla tamamladınız. Siz bir numarasınız!",
    de: "Herzlichen Glückwunsch! Sie haben die Aufgabe erfolgreich abgeschlossen. Sie sind der Beste!",
    es: "¡Felicidades! Has completado con éxito la tarea. ¡Eres el mejor!",
    fr: "Félicitations ! Vous avez réussi la tâche avec succès. Vous êtes le meilleur !",
    pt: "Parabéns! Você completou a tarefa com sucesso. Você é o melhor!",
    ru: "Поздравляем! Вы успешно выполнили задание. Вы лучший!",
    zh: "恭喜！您已成功完成任务。您是最棒的！",
};

export const newsName = {
    en: 'National Newspaper',
    tr: 'Ulus Gazetesi',
    de: 'Nationale Zeitung',
    es: 'Periódico Nacional',
    fr: 'Journal National',
    pt: 'Jornal Nacional',
    ru: 'Национальная газета',
    zh: '全国报纸',
};

export const noNewsYet = {
    en: 'No news yet...',
    tr: 'Henüz bir haber yok...',
    de: 'Noch keine Nachrichten...',
    es: '¡Todavía no hay noticias...',
    fr: 'Pas encore de nouvelles...',
    pt: 'Ainda sem notícias...',
    ru: 'Пока нет новостей...',
    zh: '还没有新闻...',
};

export const statNames: { [language: string]: ListElementsKeyLabels } = {
    en: {
        infrastructureAndEnvironment: "Infrastructure",
        agriculturalProduction: "Agriculture",
        internalSecurity: "Security",
        publicSupport: "Support",
        budget: "Budget",
        internationalRelations: "Politics",
    },
    tr: {
        infrastructureAndEnvironment: "Altyapı",
        agriculturalProduction: "Tarım",
        internalSecurity: "Güvenlik",
        publicSupport: "Destek",
        budget: "Bütçe",
        internationalRelations: "Politika",
    },
    de: {
        infrastructureAndEnvironment: "Infrastruktur",
        agriculturalProduction: "Landwirtschaft",
        internalSecurity: "Sicherheit",
        publicSupport: "Unterstützung",
        budget: "Budget",
        internationalRelations: "Politik",
    },
    es: {
        infrastructureAndEnvironment: "Infraestructura",
        agriculturalProduction: "Agricultura",
        internalSecurity: "Seguridad",
        publicSupport: "Apoyo",
        budget: "Presupuesto",
        internationalRelations: "Política",
    },
    fr: {
        infrastructureAndEnvironment: "Infrastructure",
        agriculturalProduction: "Agriculture",
        internalSecurity: "Sécurité",
        publicSupport: "Soutien",
        budget: "Budget",
        internationalRelations: "Politique",
    },
    pt: {
        infrastructureAndEnvironment: "Infraestrutura",
        agriculturalProduction: "Agricultura",
        internalSecurity: "Segurança",
        publicSupport: "Apoio",
        budget: "Orçamento",
        internationalRelations: "Política",
    },
    ru: {
        infrastructureAndEnvironment: "Инфраструктура",
        agriculturalProduction: "Сельское хозяйство",
        internalSecurity: "Безопасность",
        publicSupport: "Поддержка",
        budget: "Бюджет",
        internationalRelations: "Политика",
    },
    zh: {
        infrastructureAndEnvironment: "基础设施",
        agriculturalProduction: "农业",
        internalSecurity: "安全",
        publicSupport: "支持",
        budget: "预算",
        internationalRelations: "政治",
    },
};

export const myProfile = {
    en: 'My Profile',
    tr: 'Profilim',
    de: 'Mein Profil',
    es: 'Mi perfil',
    fr: 'Mon profil',
    pt: 'Meu perfil',
    ru: 'Мой профиль',
    zh: '我的个人资料',
};

export const president = {
    en: 'President',
    tr: 'Cumhurbaşkanı',
    de: 'Präsident',
    es: 'Presidente',
    fr: 'Président',
    pt: 'Presidente',
    ru: 'Президент',
    zh: '总统',
};

export const lastingEffectText = {
    en: 'Lasting Effect',
    tr: 'Kalıcı Etki',
    de: 'Langfristige Wirkung',
    es: 'Efecto Duradero',
    fr: 'Effet Durable',
    pt: 'Efeito Duradouro',
    ru: 'Долгосрочный эффект',
    zh: '持久效果',
};

export const headerText = {
    tr: 'Cumhurbaşkanı ol ve ülkeyi yönet! Karşına çıkan sorunları çöz ve ülkeni ayakta tut!',
    de: 'Werde Präsident und führe das Land! Löse die auftretenden Probleme und halte dein Land am Leben!',
    en: 'Become the president and lead the country! Solve the problems you face and keep your nation standing!',
    es: '¡Conviértete en presidente y lidera el país! Resuelve los problemas que enfrentas y mantén a tu nación en pie.',
    fr: 'Devenez président et dirigez le pays ! Résolvez les problèmes auxquels vous faites face et maintenez votre nation debout.',
    pt: 'Torne-se presidente e lidere o país! Resolva os problemas que enfrentar e mantenha sua nação de pé.',
    ru: 'Станьте президентом и управляйте страной! Решайте проблемы, с которыми вы сталкиваетесь, и держите свою страну на плаву!',
    zh: '成为总统并领导国家！解决面临的问题，让你的国家屹立不倒！',
  };

export const howToPlay = {
    tr: 'Nasıl Oynanır',
    de: 'Wie spielt man?',
    en: 'How to Play',
    es: 'Cómo Jugar',
    fr: 'Comment Jouer',
    pt: 'Como Jogar',
    ru: 'Как играть',
    zh: '怎么玩',
  };

export const startingText = {
    tr: "Cumhurbaşkanı olarak başlıyorsun. Amacın 4 sene iktidarda kalmak ve bu sürede ülkeni ayakta tutabilmek.",
    de: "Du beginnst als Präsident. Dein Ziel ist es, 4 Jahre an der Macht zu bleiben und dein Land in dieser Zeit am Leben zu halten.",
    en: "You start as the president. Your goal is to stay in power for 4 years and keep your country standing during this time.",
    es: "Empiezas como presidente. Tu objetivo es permanecer en el poder durante 4 años y mantener a tu país en pie durante ese tiempo.",
    fr: "Vous commencez en tant que président. Votre objectif est de rester au pouvoir pendant 4 ans et de maintenir votre pays debout pendant cette période.",
    pt: "Você começa como presidente. Seu objetivo é permanecer no poder por 4 anos e manter seu país de pé durante esse período.",
    ru: "Вы начинаете как президент. Ваша цель - оставаться у власти 4 года и удерживать страну на плаву в это время.",
    zh: "你以总统身份开始。你的目标是在4年内保持执政，并在此期间让你的国家屹立不倒。",
  };

  export const answerText = {
    tr: "Her sorunun iki cevabı ve her cevabın farklı etkileri var. Vereceğin cevaplar istatistikleri etkileyecek. Ayrıca bazı olayların uzun vadeli sonuçları da olabilir.",
    de: "Jedes Problem hat zwei Antworten und jede Antwort hat unterschiedliche Auswirkungen. Deine Antworten beeinflussen die Statistiken. Einige Ereignisse können auch langfristige Auswirkungen haben.",
    en: "Each problem has two answers and each answer has different effects. Your answers will affect the statistics. Some events may also have long-term consequences.",
    es: "Cada problema tiene dos respuestas y cada respuesta tiene diferentes efectos. Tus respuestas afectarán las estadísticas. Algunos eventos también pueden tener consecuencias a largo plazo.",
    fr: "Chaque problème a deux réponses et chaque réponse a des effets différents. Vos réponses affecteront les statistiques. Certains événements peuvent également avoir des conséquences à long terme.",
    pt: "Cada problema tem duas respostas e cada resposta tem diferentes efeitos. Suas respostas afetarão as estatísticas. Alguns eventos também podem ter consequências a longo prazo.",
    ru: "У каждой проблемы два ответа, и каждый ответ имеет разные последствия. Ваши ответы повлияют на статистику. Некоторые события также могут иметь долгосрочные последствия.",
    zh: "每个问题都有两个答案，每个答案都有不同的影响。你的答案将影响统计数据。有些事件也可能会产生长期后果。",
  };

  export const startHeader = {
    tr: "Başlangıç",
    de: "Anfang",
    en: "Start",
    es: "Comienzo",
    fr: "Début",
    pt: "Começo",
    ru: "Начало",
    zh: "开始",
  }

  export const decisionHeader = {
    tr: "Karar",
    de: "Entscheidung",
    en: "Decision",
    es: "Decisión",
    fr: "Décision",
    pt: "Decisão",
    ru: "Решение",
    zh: "决定",
  };

  export const Sources = {
    tr: "Kaynaklar",
    de: "Quellen",
    en: "Sources",
    es: "Fuentes",
    fr: "Sources",
    pt: "Fontes",
    ru: "Источники",
    zh: "资源",
  };

  export const sourceText = {
    tr: " Kaynakları sıfırın üstünde tutmaya çalışmalısın. Bu sırada iraden dışında gelişen olaylar da kaynakları doğrudan etkileyecek.",
    de: " Du solltest die Ressourcen über Null halten. In dieser Zeit werden auch Ereignisse außerhalb deines Willens die Ressourcen direkt beeinflussen.",
    en: " You should try to keep the resources above zero. During this time, events beyond your control will also directly affect the resources.",
    es: " Deberías intentar mantener los recursos por encima de cero. Durante este tiempo, los eventos fuera de tu control también afectarán directamente a los recursos.",
    fr: " Vous devriez essayer de garder les ressources au-dessus de zéro. Pendant ce temps, des événements hors de votre contrôle affecteront également directement les ressources.",
    pt: " Você deve tentar manter os recursos acima de zero. Durante este tempo, eventos fora de seu controle também afetarão diretamente os recursos.",
    ru: " Вы должны попытаться держать ресурсы выше нуля. В это время события вне вашего контроля также будут непосредственно влиять на ресурсы.",
    zh: " 你应该尽量保持资源在零以上。在此期间，超出你控制范围的事件也将直接影响资源。",
  };

  export const finalText = {
    tr: "Eğer bir kaynağın değeri sıfırın altına düşerse iktidarın sona erer. Hadi, ülkenin başına geçme zamanı!",
    de: "Wenn der Wert einer Ressource unter Null fällt, endet die Herrschaft. Los geht's, es ist Zeit, das Land zu führen!",
    en: "If the value of a resource falls below zero, the rule ends. Come on, it's time to lead the country!",
    es: "Si el valor de un recurso cae por debajo de cero, la regla termina. ¡Vamos, es hora de liderar el país!",
    fr: "Si la valeur d'une ressource tombe en dessous de zéro, la règle prend fin. Allez, il est temps de diriger le pays !",
    pt: "Se o valor de um recurso cair abaixo de zero, a regra termina. Vamos lá, é hora de liderar o país!",
    ru: "Если значение ресурса упадет ниже нуля, правление закончится. Давай, пришло время возглавить страну!",
    zh: "如果某种资源的价值低于零，统治就会结束。来吧，是时候领导这个国家了！",
  };

  export const finalHeader = {
    tr: "Final",
    de: "Finale",
    en: "Final",
    es: "Final",
    fr: "Final",
    pt: "Final",
    ru: "Финал",
    zh: "最终",
  };
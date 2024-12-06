"use client";
import president from "../../public/images/be-president.webp";
import choices from "../../public/images/choice-make.webp";
import skulls from "../../public/images/skulls-bones.webp";
import stats from "../../public/images/stats.webp";
import Image from 'next/image';
import SignUpForm from "./components/SignUpForm";
import SettingsArea from "./components/SettingsArea";
import { useState } from "react";
import { useVolume } from "@/contexts/VolumeContext";
import SettingsModal from "./components/SettingsModal";
import { useLanguage } from '@/contexts/LanguageContext';
import logo from "../../public/images/logo.webp";


export default function HomePage() {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [, setOpenInventoryModal] = useState(false);
  const { volume } = useVolume();

  const playTickSound = () => {
    const audio = new Audio("/sound-effects/button-metal.wav");
    audio.volume = volume;
    audio.onerror = () => console.error("Failed to load victory sound");
    audio.play();
  }

  const setModalOpenFunc = () => {
    setModalOpen(false);
    playTickSound();
  }

  const handleOpenModal = () => {
    setModalOpen(true);
    playTickSound();
  }

  const handleOpenInventoryModal = () => {
    setOpenInventoryModal(true);
    playTickSound();
  }

  const headerText = {
    tr: 'Cumhurbaşkanı ol ve ülkeyi yönet! Karşına çıkan sorunları çöz ve ülkeni ayakta tut!',
    de: 'Werde Präsident und führe das Land! Löse die auftretenden Probleme und halte dein Land am Leben!',
    en: 'Become the president and lead the country! Solve the problems you face and keep your nation standing!',
    es: '¡Conviértete en presidente y lidera el país! Resuelve los problemas que enfrentas y mantén a tu nación en pie.',
    fr: 'Devenez président et dirigez le pays ! Résolvez les problèmes auxquels vous faites face et maintenez votre nation debout.',
    pt: 'Torne-se presidente e lidere o país! Resolva os problemas que enfrentar e mantenha sua nação de pé.',
    ru: 'Станьте президентом и управляйте страной! Решайте проблемы, с которыми вы сталкиваетесь, и держите свою страну на плаву!',
    zh: '成为总统并领导国家！解决面临的问题，让你的国家屹立不倒！',
  };

  const NasılOynanır = {
    tr: 'Nasıl Oynanır',
    de: 'Wie spielt man?',
    en: 'How to Play',
    es: 'Cómo Jugar',
    fr: 'Comment Jouer',
    pt: 'Como Jogar',
    ru: 'Как играть',
    zh: '怎么玩',
  };

  const startingText = {
    tr: "Cumhurbaşkanı olarak başlıyorsun. Amacın 4 sene iktidarda kalmak ve bu sürede ülkeni ayakta tutabilmek.",
    de: "Du beginnst als Präsident. Dein Ziel ist es, 4 Jahre an der Macht zu bleiben und dein Land in dieser Zeit am Leben zu halten.",
    en: "You start as the president. Your goal is to stay in power for 4 years and keep your country standing during this time.",
    es: "Empiezas como presidente. Tu objetivo es permanecer en el poder durante 4 años y mantener a tu país en pie durante ese tiempo.",
    fr: "Vous commencez en tant que président. Votre objectif est de rester au pouvoir pendant 4 ans et de maintenir votre pays debout pendant cette période.",
    pt: "Você começa como presidente. Seu objetivo é permanecer no poder por 4 anos e manter seu país de pé durante esse período.",
    ru: "Вы начинаете как президент. Ваша цель - оставаться у власти 4 года и удерживать страну на плаву в это время.",
    zh: "你以总统身份开始。你的目标是在4年内保持执政，并在此期间让你的国家屹立不倒。",
  };

  const answerText = {
    tr: "Her sorunun iki cevabı ve her cevabın farklı etkileri var. Vereceğin cevaplar istatistikleri etkileyecek. Ayrıca bazı olayların uzun vadeli sonuçları da olabilir.",
    de: "Jedes Problem hat zwei Antworten und jede Antwort hat unterschiedliche Auswirkungen. Deine Antworten beeinflussen die Statistiken. Einige Ereignisse können auch langfristige Auswirkungen haben.",
    en: "Each problem has two answers and each answer has different effects. Your answers will affect the statistics. Some events may also have long-term consequences.",
    es: "Cada problema tiene dos respuestas y cada respuesta tiene diferentes efectos. Tus respuestas afectarán las estadísticas. Algunos eventos también pueden tener consecuencias a largo plazo.",
    fr: "Chaque problème a deux réponses et chaque réponse a des effets différents. Vos réponses affecteront les statistiques. Certains événements peuvent également avoir des conséquences à long terme.",
    pt: "Cada problema tem duas respostas e cada resposta tem diferentes efeitos. Suas respostas afetarão as estatísticas. Alguns eventos também podem ter consequências a longo prazo.",
    ru: "У каждой проблемы два ответа, и каждый ответ имеет разные последствия. Ваши ответы повлияют на статистику. Некоторые события также могут иметь долгосрочные последствия.",
    zh: "每个问题都有两个答案，每个答案都有不同的影响。你的答案将影响统计数据。有些事件也可能会产生长期后果。",
  };

  const startHeader = {
    tr: "Başlangıç",
    de: "Anfang",
    en: "Start",
    es: "Comienzo",
    fr: "Début",
    pt: "Começo",
    ru: "Начало",
    zh: "开始",
  }

  const decisionHeader = {
    tr: "Karar",
    de: "Entscheidung",
    en: "Decision",
    es: "Decisión",
    fr: "Décision",
    pt: "Decisão",
    ru: "Решение",
    zh: "决定",
  };

  const Sources = {
    tr: "Kaynaklar",
    de: "Quellen",
    en: "Sources",
    es: "Fuentes",
    fr: "Sources",
    pt: "Fontes",
    ru: "Источники",
    zh: "资源",
  };

  const sourceText = {
    tr: " Kaynakları sıfırın üstünde tutmaya çalışmalısın. Bu sırada iraden dışında gelişen olaylar da kaynakları doğrudan etkileyecek.",
    de: " Du solltest die Ressourcen über Null halten. In dieser Zeit werden auch Ereignisse außerhalb deines Willens die Ressourcen direkt beeinflussen.",
    en: " You should try to keep the resources above zero. During this time, events beyond your control will also directly affect the resources.",
    es: " Deberías intentar mantener los recursos por encima de cero. Durante este tiempo, los eventos fuera de tu control también afectarán directamente a los recursos.",
    fr: " Vous devriez essayer de garder les ressources au-dessus de zéro. Pendant ce temps, des événements hors de votre contrôle affecteront également directement les ressources.",
    pt: " Você deve tentar manter os recursos acima de zero. Durante este tempo, eventos fora de seu controle também afetarão diretamente os recursos.",
    ru: " Вы должны попытаться держать ресурсы выше нуля. В это время события вне вашего контроля также будут непосредственно влиять на ресурсы.",
    zh: " 你应该尽量保持资源在零以上。在此期间，超出你控制范围的事件也将直接影响资源。",
  };

  const finalText = {
    tr: "Eğer bir kaynağın değeri sıfırın altına düşerse iktidarın sona erer. Hadi, ülkenin başına geçme zamanı!",
    de: "Wenn der Wert einer Ressource unter Null fällt, endet die Herrschaft. Los geht's, es ist Zeit, das Land zu führen!",
    en: "If the value of a resource falls below zero, the rule ends. Come on, it's time to lead the country!",
    es: "Si el valor de un recurso cae por debajo de cero, la regla termina. ¡Vamos, es hora de liderar el país!",
    fr: "Si la valeur d'une ressource tombe en dessous de zéro, la règle prend fin. Allez, il est temps de diriger le pays !",
    pt: "Se o valor de um recurso cair abaixo de zero, a regra termina. Vamos lá, é hora de liderar o país!",
    ru: "Если значение ресурса упадет ниже нуля, правление закончится. Давай, пришло время возглавить страну!",
    zh: "如果某种资源的价值低于零，统治就会结束。来吧，是时候领导这个国家了！",
  };

  const finalHeader = {
    tr: "Final",
    de: "Finale",
    en: "Final",
    es: "Final",
    fr: "Final",
    pt: "Final",
    ru: "Финал",
    zh: "最终",
  };

  return (
    <div className="w-full flex flex-col justify-center items-center text-center h-auto sm:p-3 p-1 relative gap-1">
      <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-around items-center bg-white p-4 rounded-3xl border-[5px] border-black">
        <h1 className="font-bold xl:text-[60px] lg:text-[45px] text-[30px]">Leaders Dilemma</h1>
        <Image className="w-60 h-60" width={1440} height={1440} src={logo} alt="logo" />
        <p className="text-sm sm:text-base">{headerText[language]}
        </p>
      </div>
      <SettingsModal modalOpen={modalOpen} setModalOpenFunc={setModalOpenFunc} />
      <SettingsArea handleOpenModal={handleOpenModal} modalOpen={modalOpen} handleOpenInventoryModal={handleOpenInventoryModal} />
      <SignUpForm />
      <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-around items-center bg-white p-4 rounded-3xl border-[5px] border-black">
        <h2 className="font-bold xl:text-[45px] lg:text-[32px] text-[30px]">{NasılOynanır[language]}</h2>
        <div className="md:flex gap-2 grid sm:grid-cols-2 grid-cols-1 w-full">
          <div className="md:w-[24%] w-full flex flex-col gap-2 justify-start items-center text-start border-2 border-black p-2 rounded-xl">
            <h3 className="lg:text-lg text-base font-semibold text-center">{startHeader[language]}</h3>
            <Image src={president} alt={"president"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">{startingText[language]}</p>
          </div>
          <div className="md:w-[24%] w-full flex flex-col gap-2 justify-start items-center text-start border-2 border-black p-2 rounded-xl">
            <h3 className="lg:text-lg text-base font-semibold text-center">{decisionHeader[language]}</h3>
            <Image src={choices} alt={"choices"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">{answerText[language]}</p>
          </div>
          <div className="md:w-[24%] w-full flex flex-col gap-2 justify-start items-center text-start border-2 border-black p-2 rounded-xl">
            <h3 className="lg:text-lg text-base font-semibold text-center">{Sources[language]}</h3>
            <Image src={stats} alt={"stats"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">{sourceText[language]}</p>
          </div>
          <div className="md:w-[24%] w-full flex flex-col gap-2 justify-start items-center text-start border-2 border-black p-2 rounded-xl">
            <h3 className="lg:text-lg text-base font-semibold text-center">{finalHeader[language]}</h3>
            <Image src={skulls} alt={"skulls"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">{finalText[language]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

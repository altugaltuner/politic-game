"use client";
import president from "../../public/images/be-president.webp";
import choices from "../../public/images/choice-make.webp";
import skulls from "../../public/images/skulls-bones.webp";
import stats from "../../public/images/stats.webp";
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from "../../public/images/logo.webp";
import { Button } from "@/components/ui/button";
import { headerText, howToPlay, startHeader, decisionHeader, Sources, sourceText, finalHeader, finalText, startingText, answerText } from './exportedTexts/translatedTexts';

export default function HomePage() {
  const { language } = useLanguage();

  const gotoGame = () => {
    window.location.href = "/game";
  }

  return (
    <div className="w-full flex flex-col justify-center items-center text-center h-auto sm:p-3 p-1 relative gap-1">
      <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-around items-center bg-white p-4 rounded-3xl border-[5px] border-black">
        <h1 className="font-bold xl:text-[60px] lg:text-[45px] text-[30px]">President Simulator</h1>
        <Image className="w-60 h-60" width={1440} height={1440} src={logo} alt="logo" />
        <p className="text-sm sm:text-base">{headerText[language]}
        </p>
        <div>
          <Button className="w-40" onClick={gotoGame}>PLAY</Button>
        </div>
      </div>
      <div className="flex gap-5">
      </div>
      <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-around items-center bg-white p-4 rounded-3xl border-[5px] border-black">
        <h2 className="font-bold xl:text-[45px] lg:text-[32px] text-[30px]">{howToPlay[language]}</h2>
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

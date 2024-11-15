"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import president from "../../public/images/be-president.webp";
import choices from "../../public/images/choice-make.webp";
import skulls from "../../public/images/skulls-bones.webp";
import stats from "../../public/images/stats.webp";
import Image from 'next/image';
import { useUser } from "@/contexts/usernameContext";
import Header from "./components/header";

export default function HomePage() {
  const router = useRouter();
  const { username, setUsername } = useUser();

  const handleSound = () => {
    const audio = new Audio("/sound-effects/button-metal.wav");
    audio.play();
  }

  return (
    <div className="w-full flex flex-col justify-center items-center text-center h-auto sm:p-3 p-2 relative sm:gap-4 gap-2">
      <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-around items-center mb-[10px] bg-white p-5 rounded-3xl border-[5px] border-black">
        <h1 className="font-bold xl:text-[60px] lg:text-[45px] text-[32px]">Cumhurbaşkanı Simülator</h1>
        <p className="text-sm sm:text-base">Cumhurbaşkanı ol ve ülkeyi yönet! Karşına çıkan sorunları çöz ve ülkeni ayakta tut!
        </p>
      </div>

      <Header />
      <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-around items-center bg-white p-5 rounded-3xl border-[5px] border-black">
        <h2 className="font-bold xl:text-[45px] lg:text-[32px] text-[30px]">Nasıl Oynanır</h2>
        <div className="md:flex gap-2 grid sm:grid-cols-2 grid-cols-1 w-full">
          <div className="md:w-[24%] w-full flex flex-col gap-2 justify-start items-center text-start border-2 border-black p-2 rounded-xl">
            <h3 className="lg:text-lg text-base font-semibold text-center">Başlangıç ve Hedefler</h3>
            <Image src={president} alt={"president"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">Cumhurbaşkanı olarak başlıyorsun. Amacın bir ay boyunca ülkeyi yönetebilmek. Her soru ise bir güne eşit oluyor.</p>
          </div>
          <div className="md:w-[24%] w-full flex flex-col gap-2 justify-start items-center text-start border-2 border-black p-2 rounded-xl">
            <h3 className="lg:text-lg text-base font-semibold text-center">Karar Verme Süreci</h3>
            <Image src={choices} alt={"choices"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">Soruların iki cevabı ve her cevabın farklı etkileri var. Bu cevaplar halk desteği, bütçe, politika gibi kaynakları etkiliyor.</p>
          </div>
          <div className="md:w-[24%] w-full flex flex-col gap-2 justify-start items-center text-start border-2 border-black p-2 rounded-xl">
            <h3 className="lg:text-lg text-base font-semibold text-center">Kaynak Yönetimi</h3>
            <Image src={stats} alt={"stats"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs"> Kaynakları en az 30 oyun günü boyunca sıfırın üstünde tutmaya çalışmalısın. Ayrıca bazı iraden dışında gelişen olaylar da kaynakları doğrudan etkiliyor.</p>
          </div>
          <div className="md:w-[24%] w-full flex flex-col gap-2 justify-start items-center text-start border-2 border-black p-2 rounded-xl">
            <h3 className="lg:text-lg text-base font-semibold text-center">Oyunun Sonu</h3>
            <Image src={skulls} alt={"skulls"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">Eğer bir kaynağın değeri sıfırın altına düşerse iktidarın sona eriyor. Ancak 30 gün boyunca iktidarda kalırsan görevini başarıyla tamamlıyorsun</p>
          </div>
        </div>
      </div>

      <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-2 justify-around items-center bg-white p-5 rounded-3xl border-[5px] border-black sm:mb-[80px] mb-[60px]">

        <h2 className="font-bold xl:text-[45px] lg:text-[32px] text-[30px]">Hemen Başla</h2>

        <form className="flex gap-3 sm:flex-row flex-col items-center" onSubmit={(e) => {
          e.preventDefault();
          if (username.trim() !== "") {
            router.push("/game");
          }
        }}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı Adın" className="w-[270px] h-10 border-2 border-black rounded-lg pl-2" />

          <Button onClick={handleSound} className="w-44" type="submit" disabled={username.trim() === ""}>
            Başla
          </Button>
        </form>
      </div>
      <footer className="absolute bottom-0 w-full bg-black text-white text-center sm:p-2 p-1 text-xs sm:text-sm">
        <p>© 2024 Cumhurbaşkanı Simulator. Tüm hakları saklıdır.</p>
        <div className="flex justify-center gap-5 mt-2">
          <a href="/" className="hover:underline">
            <span>Gizlilik Politikası</span>
          </a>
          <a href="/" className="hover:underline">
            Kullanım Koşulları
          </a>
          <a href="/" className="hover:underline">
            İletişim
          </a>
        </div>
      </footer>

    </div>
  );
}

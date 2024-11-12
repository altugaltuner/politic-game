"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import president from "../../public/images/be-president.webp";
import choices from "../../public/images/choice-make.webp";
import skulls from "../../public/images/skulls-bones.webp";
import stats from "../../public/images/stats.webp";
import Image from 'next/image';
import { useUser } from "@/contexts/usernameContext";

export default function HomePage() {
  const router = useRouter();
  const { username, setUsername } = useUser();

  return (
    <div className="w-full flex flex-col justify-center items-center text-center h-auto md:h-[100vh] sm:p-3 p-2 relative">
      <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col md:gap-3 gap-1 justify-around items-center mb-[80px] bg-white p-5 rounded-3xl border-[5px] border-black">
        <h1 className="font-bold xl:text-[60px] lg:text-[45px] text-[32px]">Cumhurbaşkanı Simulator</h1>
        <p className="text-sm sm:text-base">Cumhurbaşkanı ol ve ülkeyi yönet! Karşına çıkan sorunları çöz ve halkın gönlünü kazan!
        </p>
        <div className="md:flex gap-2 grid grid-cols-2">
          <div className="flex flex-col gap-2 justify-center items-center text-start border-2 border-black p-2 rounded-xl">
            <h3>Başlangıç ve Hedefler</h3>
            <Image src={president} alt={"president"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">Oyuna Cumhurbaşkanı olarak başlıyorsun. Amacın, ülkenin çeşitli alanlardaki dengesini koruyarak halkın güvenini kazanmak ve yönetimi başarılı bir şekilde sürdürmek</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-start border-2 border-black p-2 rounded-xl">
            <h3>Karar Verme Süreci</h3>
            <Image src={choices} alt={"choices"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">Karşına gelen olay ve durumlarda, her biri farklı sonuçlar doğuracak iki seçenekle karşılaşırsın. Bu seçenekler ülkenin ekonomik, dış politika ve sosyal dengelerini etkiler</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-start border-2 border-black p-2 rounded-xl">
            <h3>Kaynak Yönetimi</h3>
            <Image src={stats} alt={"stats"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">Seçtiğin her karar, tarım, altyapı, ekonomi gibi kaynakların seviyesini artırır ya da azaltır. Bu değerleri sıfırın üstünde tutmaya çalışmalısın, aksi takdirde oyun sona erer</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-start border-2 border-black p-2 rounded-xl">
            <h3>Oyunun Sonu</h3>
            <Image src={skulls} alt={"skulls"} width={200} height={200} className="md:w-auto w-[90%] border-[2px] rounded-md border-black" />
            <p className="lg:text-sm text-xs">Eğer bir alanın değeri sıfıra düşerse, oyunun sonu gelir ve yönetim başarısız olur. Bu durumlarda oyunun sonucunu ve yaptığın hataları yansıtan bir son mesajı ekranda gösterilir.</p>
          </div>
        </div>
        <form className="flex gap-3 sm:flex-row flex-col items-center" onSubmit={(e) => {
          e.preventDefault();
          if (username.trim() !== "") {
            router.push("/game");
          }
        }}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı Adın" className="w-[270px] h-10 border-2 border-black rounded-lg pl-2" />

          <Button className="w-44" type="submit" disabled={username.trim() === ""}>
            Şimdi Başla
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

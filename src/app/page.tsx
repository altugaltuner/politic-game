"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import president from "../../public/images/be-president.webp";
import choices from "../../public/images/choice-make.webp";
import skulls from "../../public/images/skulls-bones.webp";
import stats from "../../public/images/stats.webp";
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col justify-center items-center text-center h-[100vh] sm:p-3 p-2 relative">
      <div className="h-[80%] w-[90%] flex flex-col gap-3 justify-center items-center bg-white p-5 rounded-3xl border-[5px] border-black">
        <h1 className="font-bold xl:text-[60px] lg:text-[45px] text-[32px]">Cumhurbaşkanı Simulator</h1>
        <p>Cumhurbaşkanı ol ve ülkeyi yönet! Karşına çıkan sorunları çöz ve halkın gönlünü kazan!
        </p>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 justify-center items-center text-start border-2 border-black p-2 rounded-xl">
            <h3>Başlangıç ve Hedefler</h3>
            <Image src={president} alt={"president"} width={200} height={200} className="border-[2px] rounded-md border-black" />
            <p className="text-sm">Oyuna Cumhurbaşkanı olarak başlıyorsun. Amacın, ülkenin çeşitli alanlardaki dengesini koruyarak halkın güvenini kazanmak ve yönetimi başarılı bir şekilde sürdürmek</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-start border-2 border-black p-2 rounded-xl">
            <h3>Karar Verme Süreci</h3>
            <Image src={choices} alt={"choices"} width={200} height={200} className="border-[2px] rounded-md border-black" />
            <p className="text-sm">Karşına gelen olay ve durumlarda, her biri farklı sonuçlar doğuracak iki seçenekle karşılaşırsın. Bu seçenekler ülkenin ekonomik, dış politika ve sosyal dengelerini etkiler</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-start border-2 border-black p-2 rounded-xl">
            <h3>Kaynak Yönetimi</h3>
            <Image src={stats} alt={"stats"} width={200} height={200} className="border-[2px] rounded-md border-black" />
            <p className="text-sm">Seçtiğin her karar, tarım, altyapı, ekonomi gibi kaynakların seviyesini artırır ya da azaltır. Bu değerleri sıfırın üstünde tutmaya çalışmalısın, aksi takdirde oyun sona erer</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-start border-2 border-black p-2 rounded-xl">
            <h3>Oyunun Son</h3>
            <Image src={skulls} alt={"skulls"} width={200} height={200} className="border-[2px] rounded-md border-black" />
            <p className="text-sm">Eğer bir alanın değeri sıfıra düşerse, oyunun sonu gelir ve yönetim başarısız olur. Bu durumlarda oyunun sonucunu ve yaptığın hataları yansıtan bir son mesajı ekranda gösterilir.</p>
          </div>
        </div>
        <Button className="w-44" type="button" onClick={() => router.push('/game')}>
          Şimdi Başla
        </Button>
      </div>
      <footer className="absolute bottom-0 w-full bg-black text-white text-center p-2 text-sm">
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

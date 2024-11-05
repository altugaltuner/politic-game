"use client";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function HomePage() {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full justify-center items-center text-center h-[100vh] sm:p-3 p-2 relative">
      <div className="md:h-1/2 w-4/5 flex flex-col gap-3 justify-center items-center">
        <h1 className="font-bold text-[60px]">Cumhurbaşkanı Simulator</h1>
        <p>Hiç, "Ülkenin başında ben olsaydım nasıl yönetirdim acaba" diye düşündüğünüz oldu mu ? <br />
          Eğer cevabınız evetse bu simülasyon tam size göre ! <br />
        </p>
        <Button className="w-44" type="button" onClick={() => router.push('/game')}>
          Başla
        </Button>
      </div>
      <footer className="absolute bottom-0 w-full bg-black text-white text-center p-3 text-sm">
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
      <Image src="/images/trump.png" alt="Cumhurbaşkanı Simulator" className="absolute top-[5%] left-[5%] rotate-45" width={200} height={200} />

      <Image src="/images/putinpng.png" alt="Cumhurbaşkanı Simulator" className="absolute top-[60%] left-[75%] rotate-45" width={200} height={200} />

      <Image src="/images/vote.png" alt="Cumhurbaşkanı Simulator" className="absolute top-[10%] left-[85%] overflow-hidden rotate-[-90deg]" width={200} height={200} />

      <Image src="/images/hand-people.png" alt="Cumhurbaşkanı Simulator" className="absolute top-[70%] left-[2%]" width={400} height={400} />
    </div>
  );
}

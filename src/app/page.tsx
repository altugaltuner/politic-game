"use client";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col justify-center items-center text-center h-[100vh] sm:p-3 p-2 relative">
      <div className="md:h-2/5 h-1/2 w-4/5 flex flex-col gap-3 justify-center items-center bg-white p-5 rounded-3xl border-[5px] border-black">
        <h1 className="font-bold xl:text-[60px] lg:text-[45px] text-[32px]">Cumhurbaşkanı Simulator</h1>
        <p>Hiç, &quot;Ülkenin başında ben olsaydım nasıl yönetirdim acaba&quot; diye düşündüğünüz oldu mu ? <br />
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
    </div>
  );
}

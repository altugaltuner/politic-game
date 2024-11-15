import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className="h-auto md:h-[90%] lg:w-[90%] w-full flex flex-col justify-around items-center bg-white p-5 rounded-3xl border-[5px] border-black">
            <div className='flex lg:flex-row flex-col justify-center items-center md:gap-3 gap-2'>
                <div className='flex flex-col gap-3 lg:w-[30%] w-full'>
                    <h1 className="font-bold xl:text-[45px] lg:text-[32px] text-[26px]">Ülke Lideri</h1>
                    <p className='2xl:text-[40px] xl:text-[34px] lg:text-[28px] text-[20px]'>Ülkeni sadece bir ay yönetecek iradeye sahip misin? <br /> Bu zorlu görevde karşına çıkacak zorlukları yenebilecek misin?</p>
                </div>
                <div className='lg:w-[67%] w-full'>
                    <Image src="/images/main-pic.webp" alt="main" width={3620} height={2036} className='w-[100%]' />
                </div>
            </div>
        </div>
    )
}

export default Header


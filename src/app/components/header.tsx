import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className="h-auto md:h-[90%] lg:w-[90%] w-full justify-around items-center bg-white p-3 rounded-3xl border-[5px] border-black">
            <div className='flex lg:flex-row flex-col justify-center items-center md:gap-3 gap-2'>
                <div className='flex flex-col gap-3 lg:w-[30%] w-full p-3 border-black border-[5px] rounded-lg'>
                    <h1 className="font-bold xl:text-[45px] lg:text-[32px] text-[26px]">Yönetim</h1>
                    <p className='2xl:text-[40px] xl:text-[34px] lg:text-[28px] text-[20px]'>Cumhurbaşkanı simülatöre hoşgeldin! Bakanlar ve politikacılarla istişare ederek vereceğin kararlara göre ülkenin kaderini sen belirleyeceksin.</p>
                </div>
                <div className='lg:w-[67%] w-full'>
                    <Image src="/images/main-pic.webp" alt="main" width={3620} height={2036} className='w-[100%] border-[5px] border-black rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default Header
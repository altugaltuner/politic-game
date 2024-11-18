import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className="h-auto md:h-[90%] lg:w-[90%] w-full justify-around items-center bg-white sm:p-3 p-2 rounded-3xl border-[5px] border-black">
            <div className='flex lg:flex-row flex-col justify-center items-start md:gap-3 gap-1'>
                <div className='flex flex-col sm:gap-3 gap-1 lg:w-[28%] w-full p-1 rounded-lg'>
                    <h1 className="font-bold xl:text-[45px] lg:text-[32px] text-[26px]">Yönetim</h1>
                    <p className='2xl:text-[30px] xl:text-[26px] lg:text-[24px] text-[20px]'>Cumhurbaşkanı simülatöre hoşgeldin! Bakanlar ve politikacılarla istişare ederek vereceğin kararlara göre ülkenin kaderini sen belirleyeceksin.</p>
                </div>
                <div className='lg:w-[70%] w-full'>
                    <Image priority src="/images/main-pic.webp" alt="main" width={3620} height={2036} className='w-[100%] border-[5px] border-black rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default Header
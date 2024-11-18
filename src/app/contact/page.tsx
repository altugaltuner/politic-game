import React from 'react';
import Image from 'next/image';

const Contactpage = () => {

    const info = {
        name: 'Altuğ Altuner',
        location: 'Düzce, Türkiye',
        email: 'altugaltuner6@gmail.com',
        linkedin: 'https://www.linkedin.com/in/altug-altuner/',
        github: "https://github.com/altugaltuner",
        instagram: "https://www.instagram.com/altugaltuner/",
    }

    return (
        <div className='flex w-full justify-center sm:p-3 p-1'>

            <div className='h-auto sm:w-[90%] w-[95%] flex flex-col items-center bg-white sm:p-5 p-2 rounded-3xl border-[5px] border-black gap-3'>
                <h1 className="font-bold xl:text-[50px] lg:text-[40px] text-[30px]">İletişim</h1>
                <div className='flex lg:flex-row flex-col-reverse sm:gap-4 gap-2 w-full'>
                    <div className='flex flex-col items-start h-full lg:w-[50%] w-full bg-white sm:p-5 p-2 rounded-3xl border-[3px] border-black sm:gap-3 gap-1'>
                        <div className='bg-white  p-2 rounded-xl border-[2px] border-black'>
                            <p className='sm:text-base text-sm'><b>Oyunun Kurucusu :</b> {info.name}</p>
                        </div>
                        <div className='bg-white p-2 rounded-xl border-[2px] border-black'>
                            <p className='sm:text-base text-sm'><b>Konum : </b>{info.location}</p>
                        </div>
                        <div className='bg-white p-2 rounded-xl border-[2px] border-black'>
                            <p className='sm:text-base text-sm'><b>E-mail : </b>{info.email}</p>
                        </div>
                        <div className='bg-white p-2 rounded-xl border-[2px] border-black'>
                            <a className='sm:text-base text-sm whitespace-normal break-all overflow-hidden' href='https://www.linkedin.com/in/altug-altuner/' target="_blank"><b>Linkedin : </b>{info.linkedin}</a>
                        </div>
                        <div className='bg-white p-2 rounded-xl border-[2px] border-black'>
                            <a className='sm:text-base text-sm  whitespace-normal break-all overflow-hidden' href='https://github.com/altugaltuner' target="_blank"><b>Github : </b>{info.github}</a>
                        </div>
                        <div className='bg-white p-2 rounded-xl border-[2px] border-black'>
                            <a className='sm:text-base text-sm  whitespace-normal break-all overflow-hidden' href='https://www.instagram.com/altugaltuner/' target="_blank"><b>Instagram : </b>{info.instagram}</a>
                        </div>
                    </div>
                    <div className="flex border-[3px] rounded-3xl py-4 border-black lg:w-[50%] w-full items-center justify-center h-auto ">
                        <Image src="/images/altug-altuner.webp" alt={"altug-altuner"} width={2048} height={1536} className='rounded-3xl w-[95%] border-black border-[1px]' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contactpage
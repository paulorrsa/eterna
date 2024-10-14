import React from 'react';
import Button from './buttons/Button';
import Card from './cards/Card';

function Home() {
    return (
        <main className='flex flex-col  '>
            <section className='flex justify-center gap-14 items-center h-[90dvh] bg-slate-600 '>
                <div className='text-red-800 text-start w-full gap-4 px-32 '>
                    <h1 className='text-6xl mb-6 text-emerald-50 font-bold  uppercase '>Agência de <span className='text-teal-400'>Marketing digital</span></h1>
                    <p className='text-white cursor-none'>Potencialize sua marca com nossos serviços de desenvolvimento de stes</p>
                    <Button texto={"Saiba mais"} to={"/servicos"} />
                </div>
            </section>
            <section className='bg-[#000000] h-[30dvh] flex items-center  px-32 gap-20 text-slate-100 '>
                <div className='w-5/6'>
                    <h2 className='text-5xl'>Entre em contato  com a nossa equipe</h2>
                </div>
                <div>
                    <Button texto={"Contato"} to={"/contato"} />
                </div>
            </section>
            <section className='bg-orange-600 h-[70dvh]'>
                <h2 className='text-5xl text-center p-4'>O que estamos oferecendo</h2>
                <Card/>
            </section>
        </main>
    )
}

export default Home;

'use client';
import style from './hero.module.css';

export default function Hero() {
  return (
    <div className={`${style.nameContainer} text-base font-bold drop-shadow-2xl text-center`}>
      <p className='text-3xl md:text-7xl lg:text-10xl'>Amanda Rodriguez</p>
      <p className='text-xl md:text-3xl lg:text-5xl'>Full Stack Developer</p>
    </div>
  );
}

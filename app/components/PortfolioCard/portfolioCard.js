'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioCard({ id, title, image, github }) {
  return (
    <Link
      key={id}
      href={`${github}`}
      target='_blank'
      className='group'
    >
      <div className='h-4/5 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group-hover:scale-105'>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className='h-full w-full object-cover object-center group-hover:opacity-75'
        />
      </div>
      <div className='flex flex-row items-center justify-center mt-2'>
          <p className='text-sm text-secondary-content pr-2'>GitHub</p>
          <i className='text-secondary-content bi bi-box-arrow-up-right'></i>
        </div>
    </Link>
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function DesignCard({ id, title, image }) {
  return (
    <div
      key={id}
      className='h-4/5 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group-hover:scale-105'
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className='h-full w-full object-cover object-center group-hover:opacity-75'
      />
    </div>
  );
}

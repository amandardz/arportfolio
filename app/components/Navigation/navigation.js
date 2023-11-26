'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <ul className='menu menu-horizontal bg-neutral-content flex justify-end text-xl'>
      <li className='tooltip tooltip-bottom tooltip-primary' data-tip='home'>
        <Link href='/'>
          <i className='bi bi-house'></i>
        </Link>
      </li>
      <li className='tooltip tooltip-bottom tooltip-primary' data-tip='about'>
        <Link href='/about'>
          <i className='bi bi-person-vcard'></i>
        </Link>
      </li>
      <li
        className='tooltip tooltip-bottom tooltip-primary'
        data-tip='portfolio'
      >
        <Link href=''>
          <i className='bi bi-code-square'></i>
        </Link>
      </li>
    </ul>
  );
}

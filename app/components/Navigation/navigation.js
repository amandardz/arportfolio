'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <ul className='menu menu-horizontal bg-dark-white flex justify-end text-xl'>
      <li className='tooltip tooltip-bottom' data-tip='home'>
        <Link href='/'>
          <i className='bi bi-house'></i>
        </Link>
      </li>
      <li className='tooltip tooltip-bottom' data-tip='about'>
        <Link href='/about'>
          <i className='bi bi-person-vcard'></i>
        </Link>
      </li>
      <li
        className='tooltip tooltip-bottom'
        data-tip='portfolio'
      >
        <Link href='/portfolio'>
          <i className='bi bi-code-square'></i>
        </Link>
      </li>
      <li
        className='tooltip tooltip-bottom'
        data-tip='design'
      >
        <Link href='/design'>
          <i className='bi bi-pencil'></i>
        </Link>
      </li>
    </ul>
  );
}

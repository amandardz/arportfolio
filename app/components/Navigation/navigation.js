'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <ul className='menu menu-horizontal bg-dark-white flex justify-end text-xl'>
      <li className='tooltip tooltip-bottom' data-tip='home'>
        <Link href='/'>
          <i className='bi bi-house'></i>Home
        </Link>
      </li>
      <li className='tooltip tooltip-bottom' data-tip='about'>
        <Link href='/about'>
          <i className='bi bi-person-vcard'></i>About
        </Link>
      </li>
      <li
        className='tooltip tooltip-bottom'
        data-tip='web-dev'
      >
        <Link href='/web-dev'>
          <i className='bi bi-code-square'></i>Web Development
        </Link>
      </li>
      <li
        className='tooltip tooltip-bottom'
        data-tip='design'
      >
        <Link href='/design'>
          <i className='bi bi-pencil'></i> Designs
        </Link>
      </li>
    </ul>
  );
}

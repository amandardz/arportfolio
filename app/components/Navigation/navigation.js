'use client';

export default function Navigation() {
  return (
    <ul className='menu menu-horizontal bg-neutral-content flex justify-end text-xl'>
      <li className='tooltip tooltip-bottom tooltip-primary' data-tip='home'><a href=''><i className='bi bi-house'></i></a></li>
      <li className='tooltip tooltip-bottom tooltip-primary' data-tip='about'><a href=''><i className='bi bi-person-vcard'></i></a></li>
      <li className='tooltip tooltip-bottom tooltip-primary' data-tip='portfolio'><a href=''><i className='bi bi-code-square'></i></a></li>
    </ul>
  );
}

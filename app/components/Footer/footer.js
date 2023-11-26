'use client';

export default function Footer() {
  return (
    <footer className='grid grid-cols-2 items-center px-2.5 bg-neutral-content'>
      <p className='text-sm md:text-base'>
        Copyright © 2023 - All right reserved
      </p>
      <div className='place-self-end'>
        <ul className='menu menu-horizontal text-2xl'>
          <li>
            <a
              href='https://github.com/amandardz'
              target='_blank'
              className='tooltip tooltip-primary'
              data-tip='GitHub'
            >
              <i className='bi bi-github'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/amandardz/'
              target='_blank'
              className=' tooltip tooltip-primary'
              data-tip='LinkedIn'
            >
              <i className='bi bi-linkedin'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

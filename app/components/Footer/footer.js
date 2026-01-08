'use client';

export default function Footer() {
  return (
    <footer className='grid grid-cols-2 items-center px-2.5 bg-dark-white'>
      <p className='text-sm md:text-main'>
        Copyright © 2025 - All right reserved
      </p>
      <div className='place-self-end'>
        <ul className='menu menu-horizontal text-2xl'>
          <li>
            <a
              href='https://github.com/amandardz'
              target='_blank'
              className='tooltip'
              data-tip='GitHub'
            >
              <i className='bi bi-github'></i>
            </a>
          </li>
          <li>
            <a
              href='mailto:amandardz15@gmail.com'
              target='_blank'
              className='tooltip'
              data-tip='Email'
            >
              <i className='bi bi-envelope-at'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import avatar from '../../public/avatar.png';
import style from './about.module.css';

export default function About() {
  return (
    <div className='p-10 border-4 rounded-md lg:mx-auto lg:my-0 md:w-8/12 lg:9/12'>
      <div className='text-secondary-content text-center font-bold text-3xl mb-5'>
        About me
      </div>
      <div>
        <Image
          src={avatar}
          className={style.avatarImg}
          alt='Image of a woman smiling by Sara Pelaez from Blush Collections Women Power'
        />
        <p className='text-primary-content md:text-2xl font-bold'>
          Hello World! My name is Amanda Rodriguez. I have experience in
          designing, developing, and deploying interactive user-centric
          applications with programming languages and front-end and backend technologies such as HTML, CSS, Javascript, React, MySQL, SQL, GraphQL, and more <Link className='underline' href='https://github.com/amandardz' target='_blank'>(check out my GitHub Profile)</Link>. I enjoy learning new things, working on
          projects that broaden my horizons, and discovering fresh perspectives.
          I also like coming up with creative solutions to problems and finding
          innovative ways to solve them so that the applications I develop offer
          positive user experiences. I am excited about the prospect of
          contributing to innovative projects, working with fellow developers,
          and making meaningful impact through my work. Check out the applications I&apos;ve created in the portfolio section. I&apos;d love to hear what you think and receive any feedback. Get in contact with me by clicking on the icons below. 
        </p>
      </div>
    </div>
  );
}

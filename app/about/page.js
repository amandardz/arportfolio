import Image from 'next/image';
import avatar from '../../public/avatar.png';
import style from './about.module.css';

export default function About() {
  return (
    <div className='p-10 border-4 rounded-md'>
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
          applications using front-end and backend technologies and languages
          such as HTML, CSS, Javascript, React, MySQL, SQL, GraphQL, and more
          (check out my GitHub Profile). I enjoy learning new things, working on
          projects that broaden my horizons, and discovering fresh perspectives.
          I also like coming up with creative solutions to problems and finding
          innovative ways to solve them so that the applications I develop offer
          positive user experiences. I am excited about the prospect of
          contributing to innovative projects, working with fellow developers,
          and making meaningful impact through my work.
        </p>
      </div>
    </div>
  );
}

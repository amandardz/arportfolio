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
          Hello! I’m Amanda Rodriguez. I bring ideas to life by creating
          solutions that connect with people, solve problems, and inspire
          action. My work spans designing, building, and delivering interactive
          experiences that are thoughtful, user-focused, and meaningful. I’m
          passionate about education, empowerment, and giving voices to those
          who might not always be heard. Through collaboration, creative
          problem-solving, and leading projects from concept to completion, I
          strive to make an impact in every project I touch. My goal is to
          Build. Empower. Inspire. Check out my portfolio to see the projects
          I’ve brought to life — I’d love to hear your thoughts and feedback.
          You can reach me through the icons below.
        </p>
      </div>
    </div>
  );
}

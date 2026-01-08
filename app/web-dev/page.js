import ProjectCard from '../components/ProjectCard/projectCard';
import style from './portfolio.module.css';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Rocket Launch',
      image: '/rocket.png',
      github: 'https://github.com/amandardz/rocketlaunch',
    },
    {
      id: 2,
      title: 'Car Hunt',
      image: '/carhunt.png',
      github: 'https://github.com/amandardz/carhunt',
    },
    {
      id: 3,
      title: 'Tech Blog',
      image: '/techblog.png',
      github: 'https://github.com/amandardz/tech-blog',
    },
    {
      id: 4,
      title: 'E-Commerce Backend',
      image: '/ecommerce.png',
      github: 'https://github.com/amandardz/e-commerce-backend',
    },
    {
      id: 5,
      title: 'Book Club',
      image: '/bookclub.png',
      github: 'https://github.com/amandardz/book-club',
    },
    {
      id: 6,
      title: 'Google Book Search',
      image: '/google.png',
      github: 'https://github.com/amandardz/google-books-search',
    },
  ];
  return (
      <div className={`${style.portfolio} mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8`}>
        <p className='text-2xl text-center text-primary-content font-bold mb-4'>Web Development Projects</p>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 rounded-lg'>
          {projects.map(({ id, title, image, github }) => (
            <ProjectCard
              key={id}
              title={title}
              image={image}
              github={github}
            />
          ))}
        </div>
      </div>
  );
}

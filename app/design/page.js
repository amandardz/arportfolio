import DesignCard from '../components/DesignCard/designCard';
import style from './design.module.css';

export default function Designs() {
  const designs = [
    {
      id: 1,
      title: 'Freedom',
      image: '/ar_ex1.jpg',
    },
    {
      id: 2,
      title: 'Dog Stamps',
      image: '/ar_ex2.jpg',
    },
    {
      id: 3,
      title: 'Concert Flyer',
      image: '/ar_ex3.jpg',
    },
    {
      id: 4,
      title: 'Thinking Gif',
      image: '/ar_ex4.gif',
    },
    {
      id: 5,
      title: 'Balloon Gif',
      image: '/ar_ex5.gif',
    },
  ];
  return (
      <div className={`${style.portfolio} mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8`}>
        <p className='text-2xl text-center text-primary-content font-bold mb-4'>Gallery</p>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 rounded-lg'>
          {designs.map(({ id, title, image }) => (
            <DesignCard
              key={id}
              title={title}
              image={image}
            />
          ))}
        </div>
      </div>
  );
}

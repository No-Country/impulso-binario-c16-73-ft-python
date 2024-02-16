import Carousel from '../../Carousel/Carousel';

const images = [
  'https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tDc_k7lXn5GGuWYoxbtHMfxdvBDYfSrw7w&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUeP2xOXVi5xIgH5wrbtlYZQGOhEffJncbQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLkIW9DOhcxFh8uLYube2bPK-AzS7Ywhi9Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrNVwxlBhUzwBd6H4YqdJckckasr4N6PjQw&usqp=CAU',
];

const reviews = [
  {user: 'Samuel Gomez', comment: '¡Increíble experiencia en Impulso Binario! Gracias a la comunidad, logré financiar mi proyecto.'},
  { user: 'Carlos Costa', comment: 'Impulso Binario nos brindó el respaldo financiero necesario para lanzar nuestro proyecto de software.' },
  { user: 'Sandra Sanchez', comment: 'Gracias a Impulso Binario, mi sueño de desarrollar una innovadora aplicación se hizo realidad.' }];

const Carousels = () => {
  return (
    <>
      <Carousel items={images} carouselType={'images'} numItems={3}/>
      <Carousel items={reviews} carouselType={'reviews'} numItems={1}/>
    </>
  );
};

export default Carousels;

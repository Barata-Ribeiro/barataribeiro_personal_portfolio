import Link from 'next/link';

export const Logo = () => {
  return (
    <Link className='py-5' href='/'>
      <h1
        title='Barata Ribeiro Logo'
        className='font-Kanit font-semibold uppercase tracking-widest text-mistGray-950 sm:text-2xl md:text-4xl'>
        Barata{' '}
        <span className='font-Comfortaa font-bold tracking-normal text-rioGrande-600'>
          &#60;/&#62;
        </span>{' '}
        Ribeiro
      </h1>
    </Link>
  );
};

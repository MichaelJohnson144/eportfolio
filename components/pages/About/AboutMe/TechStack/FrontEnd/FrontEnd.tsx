import Link from 'next/link';
import Image from 'next/image';
import React from '../../../../../../public/assets/images/react.js.svg';
import NextJs from '../../../../../../public/assets/images/next.js.svg';
import TypeScript from '../../../../../../public/assets/images/typescript.svg';
import JavaScript from '../../../../../../public/assets/images/javascript.svg';
import Bootstrap from '../../../../../../public/assets/images/bootstrap.svg';
import HTML5 from '../../../../../../public/assets/images/html5.svg';
import TailwindCSS from '../../../../../../public/assets/images/tailwindcss-mark.svg';
import CSS3 from '../../../../../../public/assets/images/css3.svg';

export default function FrontEnd() {
  return (
    <>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://beta.reactjs.org/'}
      >
        <Image
          alt={'React'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={React}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://nextjs.org/'}
      >
        <Image
          alt={'Next.js'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={NextJs}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://www.typescriptlang.org/branding/'}
      >
        <Image
          alt={'TypeScript'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={TypeScript}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/'}
      >
        <Image
          alt={'JavaScript'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={JavaScript}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://getbootstrap.com/docs/5.2/about/brand/'}
      >
        <Image
          alt={'Bootstrap'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={Bootstrap}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://html.spec.whatwg.org/'}
      >
        <Image
          alt={'HTML5'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={HTML5}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://tailwindcss.com/brand/'}
      >
        <Image
          alt={'Tailwind CSS'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={TailwindCSS}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://www.w3.org/Style/CSS/Overview.en.html'}
      >
        <Image
          alt={'CSS3'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={CSS3}
        />
      </Link>
    </>
  );
}

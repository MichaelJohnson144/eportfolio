import Link from 'next/link';
import Image from 'next/image';
import Python from '../../../../../../public/assets/images/python.svg';
import PHP from '../../../../../../public/assets/images/php.svg';
import CSharp from '../../../../../../public/assets/images/c-sharp.svg';
import CPlusPlus from '../../../../../../public/assets/images/c-plus-plus.svg';
import Django from '../../../../../../public/assets/images/django.svg';
import NodeJS from '../../../../../../public/assets/images/node.js.svg';
import MySQL from '../../../../../../public/assets/images/mysql.svg';

export default function BackEnd() {
  return (
    <>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://www.python.org/psf/trademarks/'}
      >
        <Image
          alt={'Python'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={Python}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://www.php.net/license/index.php'}
      >
        <Image
          alt={'PHP'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={PHP}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://learn.microsoft.com/en-us/dotnet/csharp/'}
      >
        <picture>
          <Image
            alt={'C#'}
            className={
              'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
            }
            priority={true}
            src={CSharp}
          />
        </picture>
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://cplusplus.com/'}
      >
        <Image
          alt={'C++'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={CPlusPlus}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://www.djangoproject.com/trademarks/'}
      >
        <Image
          alt={'Django'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={Django}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={
          'https://openjsf.org/wp-content/uploads/sites/84/2021/01/OpenJS-Foundation-Trademark-Policy-2021-01-12.docx.pdf'
        }
      >
        <Image
          alt={'Node.js'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={NodeJS}
        />
      </Link>
      <Link
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
        href={'https://www.mysql.com/'}
      >
        <Image
          alt={'MySQL'}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
          priority={true}
          src={MySQL}
        />
      </Link>
    </>
  );
}

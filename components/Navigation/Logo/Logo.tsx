import Link from 'next/link';

export default function Logo() {
  return (
    <Link className={'font-helvetica-now text-2xl font-bold'} href={'/'}>
      Michael&nbsp;&nbsp;Johnson
    </Link>
  );
}

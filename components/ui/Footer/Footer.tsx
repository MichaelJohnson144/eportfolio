export default function Footer() {
  return (
    <footer
      className={
        'z-10 flex flex-col sm:flex-row flex-nowrap justify-center content-center items-center bg-transparent-carbon-black-70'
      }
      data-testid={'footer'}
    >
      <p className={'p-4 font-bold tracking-widest animate-text-animation'}>
        © 2023 Michael Johnson. All Rights Reserved.
      </p>
    </footer>
  );
}

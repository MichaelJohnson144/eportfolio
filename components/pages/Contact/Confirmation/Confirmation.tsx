import cn from "classnames";
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
//
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

const contact = cn(
  'bg-contact',
  'overflow-auto w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover',
);

export default function Confirmation() {
  return (
    <main className={contact}>
      <div
        className={
          'flex flex-row flex-nowrap justify-center content-center items-center w-full h-screen bg-transparent-carbon-black-65'
        }
      >
        <div className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
          <FontAwesomeIcon className={'text-5xl text-pink-400'} icon={faCircleCheck} />
          <div
            className={
              'my-6 flex flex-row flex-nowrap justify-center content-center items-center w-screen h-full'
            }
          >
            <div
              className={
                'w-full border-t-0 border-x-0 border-b-4 border-solid border-b-pink-400'
              }
            />
            <h2 className={'mx-2 text-4xl sm:text-6xl font-bold whitespace-nowrap'}>
              T H A N K&nbsp;&nbsp;Y O U !
            </h2>
            <div
              className={
                'w-full border-t-0 border-x-0 border-b-4 border-solid border-b-pink-400'
              }
            />
          </div>
          <h2 className={'text-base sm:text-2xl font-bold tracking-widest'}>
            <span className={'text-pink-400'}>Your message</span> has been{' '}
            <span className={'text-pink-400'}>received!</span> I will{' '}
            <span className={'text-pink-400'}>reply</span> within{' '}
            <span className={'text-pink-400'}>2 business days!</span>
          </h2>
        </div>
      </div>
    </main>
  );
}

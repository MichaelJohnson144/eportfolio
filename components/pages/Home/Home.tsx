import { useCallback, useState } from "react";
import Video from "./Video";
import Heading from "./Heading/Heading";
import SubHeading from "./SubHeading/SubHeading";
import Icon from "../../ui/Icon";
import Link from "next/link";
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function Home() {
  const [wasClicked, setWasClicked] = useState(false);
  const handleOnClick = useCallback(() => {
    setWasClicked(!wasClicked);
  }, [wasClicked]);

  return (
    <main
      className={
        'flex flex-col flex-nowrap justify-center content-center items-center w-full h-screen'
      }
    >
      <Video />
      <div className={'inline-block drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
        <Heading />
        <SubHeading />
      </div>
      <div
        className={
          'container fixed inset-x-0 bottom-0 flex flex-col flex-nowrap justify-center content-center items-center mx-auto w-fit h-fit'
        }
      >
        <p
          className={
            'mb-1 sm:mb-2 text-base sm:text-2xl font-bold text-white leading-loose drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'
          }
        >
          WILLING TO HIRE ME?
        </p>
        <Link href={'/contact'}>
          <Icon onClick={handleOnClick}>
            <FontAwesomeIcon
              className={
                'hover:text-2xl hover:sm:text-3xl hover:text-pink-600 transition-all duration-200 ease-in-out text-xl sm:text-2xl text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'
              }
              icon={faAddressCard}
            />
          </Icon>
        </Link>
      </div>
    </main>
  );
}

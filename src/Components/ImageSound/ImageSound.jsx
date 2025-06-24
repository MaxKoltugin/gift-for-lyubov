import { useMemo, useRef } from "react";
import "./image-sound.css";

const ImageSound = () => {
  const audioMap = useMemo(
    () => ({
      sound1: new Audio("sound.mp3"),
      sound2: new Audio("sound2.mp3"),
      sound3: new Audio("sound3.mp3"),
      sound4: new Audio("sound4.mp3"),
      sound5: new Audio("sound5.mp3"),
      sound6: new Audio("sound6.mp3"),
      sound7: new Audio("sound7.mp3"),
      sound8: new Audio("sound8.mp3"),
      sound9: new Audio("sound9.mp3"),
      sound10: new Audio("sound10.mp3"),
    }),
    []
  );

  const currentAudioRef = useRef(null);

  const playSound = (soundKey) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    const audio = audioMap[soundKey];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      currentAudioRef.current = audio;
    }
  };

  return (
    <div className="sound-image-wrapper">
      <img className="sound-img" src="FamilyImage.jpg" alt="Фон" />

      <div className="zone-wrapper zone-wrapper-max">
        <svg
          className="zone zone-max"
          onClick={() => playSound("sound1")}
          width="301"
          height="766"
          viewBox="0 0 301 766"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M160.5 762C156.833 764.5 140.2 766.7 103 755.5L139 678L144.5 524L128.5 521.5L90.5 684V732L26.5 747L2 732L62 661.5L77 508L62 493L90.5 358.5L110 266.5V168.5L97.5 105.5L155 98.5L139 54L162 12.5L207 2L245 32V83.5L221.5 117L300 39V123L286.5 145.5L245 250.5L266.5 370.5L235 381.5L207 500L189.5 615.5L168.5 684L177 732L160.5 762Z"
            stroke="#FF0000"
            strokeWidth="5"
          /> */}
        </svg>
      </div>
      <div className="zone-wrapper zone-wrapper-andr">
        <svg
          className="zone zone-andr"
          onClick={() => playSound("sound2")}
          width="265"
          height="865"
          viewBox="0 0 265 865"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M139 785C143 798.667 152.9 833.3 160.5 862.5H113.5L103 798L113.5 708V623.5V471H97L83 568L65.5 668V757L59.5 798L50 832H20.5L11.5 798L33.5 751V715V658.5L42 563.5L59.5 426.5L65.5 281L33.5 266.5V242L20.5 235L3 184.5L20.5 152L97 123.5V89.5L86.5 62.5L97 21.5L139 3L176.5 15.5L191 71L160.5 123.5L222.5 160L248.5 218.5L262.5 345.5L208.5 256L201.5 356L191 535.5L176.5 658.5L139 785Z"
            stroke="#00FF7F"
            strokeWidth="5"
          /> */}
        </svg>
      </div>

      <div className="zone-wrapper zone-wrapper-nik">
        <svg
          className="zone zone-nik"
          onClick={() => playSound("sound3")}
          xmlns="http://www.w3.org/2000/svg"
          width="210"
          height="863"
          fill="none"
          viewBox="0 0 210 863"
        >
          {/* <path
            stroke="#06F"
            stroke-width="5"
            d="M139.5 783c-4.833-5.167-31.8-12.4-101 0v-26.5l63.5-37V682L79 550l-34-7.5L26 493 3 459l16.5-159.5V260L14 215l24.5-18.5L68 171l-11-26.5 22-23-11-47 4.5-43 35-28.5L148 16l9 63-23 42.5 72.5 49.5L189 480l-32 22v83.5l13 134 19 63.5 7.5 55-39.5 21-23-21 5.5-55Z"
          /> */}
        </svg>
      </div>
      <div className="zone-wrapper zone-wrapper-kate">
        <svg
          className="zone zone-kate"
          onClick={() => playSound("sound4")}
          width="90"
          height="231"
          viewBox="0 0 90 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path d="M3 3V228H87V3H3Z" stroke="#FF8800" stroke-width="5" /> */}
        </svg>
      </div>
      <div className="zone-wrapper zone-wrapper-dim">
        <svg
          className="zone zone-dim"
          onClick={() => playSound("sound5")}
          width="225"
          height="792"
          viewBox="0 0 225 792"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M129 770.5C147.4 784.1 121.667 745.833 106.5 725L113.5 633.5L106.5 548.5L113.5 506L98.5 496.5L88 576.5V662.5L98.5 748L88 787.5H45.5V760V733L57.5 615L45.5 537.5L32 496.5V455.5L17.5 434L3 423.5L17.5 365V311.5V269L3 249L32 178.5L39 144L88 123L106.5 111L98.5 85.5L88 59L98.5 10L129 3L164 10V59V92.5L154.5 111L178.5 123L198.5 160L222.5 224V260V293L198.5 434L178.5 448.5L185 512.5L154.5 523L142.5 688L178.5 760L185 787.5L129 770.5Z"
            stroke="#EEFF00"
            stroke-width="5"
          /> */}
        </svg>
      </div>
      <div className="zone-wrapper zone-wrapper-jen">
        <svg
          className="zone zone-jen"
          onClick={() => playSound("sound6")}
          width="87"
          height="149"
          viewBox="0 0 87 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M84.5 2.5V141.994L6.89648 146.359L2.57617 2.5H84.5Z"
            stroke="#FF8800"
            stroke-width="5"
          /> */}
        </svg>
      </div>
      <div className="zone-wrapper zone-wrapper-lesh">
        <svg
          className="zone zone-lesh"
          onClick={() => playSound("sound7")}
          width="123"
          height="651"
          viewBox="0 0 123 651"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M72.2043 112.118V102.022M72.2043 102.022V70.9561L88.634 55.4232L72.2043 44.162L62.2468 14.2613L35.8596 3L3 20.8627V44.162V55.4232V70.9561V92.702V112.118V648H120V129.981L72.2043 102.022Z"
            stroke="#B700FF"
            stroke-width="5"
          /> */}
        </svg>
      </div>
      <div className="zone-wrapper zone-wrapper-igor">
        <svg
          className="zone zone-igor"
          onClick={() => playSound("sound8")}
          width="144"
          height="852"
          viewBox="0 0 144 852"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M22.5 769.5L50.5 849H65L94 839.5L80 813L59 759L42.5 681.5V612.5C42.5 605.7 57.5 577.667 65 564.5V512L80 486L107 512L111.5 564.5L107 630V705V786L141 791.5V152.5L135 105.5V73V36.5L111.5 2.5H80L50.5 23.5L42.5 89L11 105.5L2.5 550.5V612.5V681.5L22.5 769.5Z"
            stroke="#15FF00"
            stroke-width="5"
          /> */}
        </svg>
      </div>
      <div className="zone-wrapper zone-wrapper-ilia">
        <svg
          className="zone zone-ilia"
          onClick={() => playSound("sound9")}
          width="321"
          height="998"
          viewBox="0 0 321 998"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M119.5 995L132 933.5V732.5L169 550L181 581V915H214L277.5 933.5H314.5L296 915L257 874L277.5 472V320.5H314.5L296 179L232.5 126L257 81V42L232.5 3H169L142.5 42V68.5L158.5 103.5L132 126L42 179L3 320.5V486.5L15 550L60.5 581L74.5 874V915L60.5 964L74.5 995H119.5Z"
            stroke="white"
            stroke-width="5"
          /> */}
        </svg>
      </div>
      <div className="zone-wrapper zone-wrapper-jes">
        <svg
          className="zone zone-jes"
          onClick={() => playSound("sound10")}
          width="82"
          height="187"
          viewBox="0 0 82 187"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M25.5 158.5L34 176.5L17 184L3 176.5L13.5 133L22 93.5L28.5 60.5L32.5 33.5L40 22L44.5 5L60.5 22L70.5 30.5L79 60.5L75.5 83L67 93.5V106L70.5 126L67 149.5H49L44.5 142.5L52.5 126V102H44.5L40 116L28.5 133L25.5 158.5Z"
            stroke="#505050"
            stroke-width="5"
          /> */}
        </svg>
      </div>
    </div>
  );
};

export default ImageSound;

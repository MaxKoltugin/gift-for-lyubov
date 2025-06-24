import ImageSound from "../../Components/ImageSound/ImageSound.jsx";
import MusicButton from "../../Components/MusicButton/MusicButton.jsx";
// import ImageSoundVectors from "../../Components/ImageSound/ImageSoundVectors.jsx";
import "./celebretions.css";

const Celebretions = () => {
  return (
    <div className="celebretions-wrapper">
      <div className="music-wrapper">
        <MusicButton />
      </div>
      <div className="main-celebretion">
        <div className="image-wrapper">
          <img
            alt="celebretion-img"
            src="celebretion-img.jpg"
            className="celebration-img"
          />
        </div>
        <div className="text-celebration-wrapper">
          <p className="title-celebration">
            <strong>Поздравление 🎂</strong>
          </p>
          <p className="text-celebration">
            Дорогая баба Люба поздравляю с днём рождения! <br /> Желаю крепкого
            здоровья и исполнения желаний. Пусть в твоём доме всегда будет уют,
            а на душе — спокойствие. Спасибо за твою заботу и вкусные пирожки!
            Пусть этот год принесёт тебе только хорошее. Пусть рядом будут те,
            кто дорог. Очень тебя люблю и крепко обнимаю! ❤️ <br />
            <br /> <strong>Максим</strong>
          </p>
        </div>
      </div>
      <div className="image-sound-component">
        <ImageSound />
      </div>
    </div>
  );
};

export default Celebretions;

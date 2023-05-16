import { useEffect } from "react";
import { polishFlagIcon, gbFlagIcon } from "../../../../assets/icons";

const StartScreenStepOne = ({ lang, changeLang, changeStartScreenStep }) => {
  // SetUp default color themes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-bg", "#1c2326");
    root.style.setProperty("--theme-bg-light", "#1c2326cb");
    root.style.setProperty("--theme-font", "#ffffff");
  }, []);

  return (
    <div className="start-screen_step-one">
      <div>
        <b>{lang.chooseLanguage}</b>
      </div>

      <div>
        <button
          onMouseOver={() => {
            changeLang("en");
          }}
          onClick={() => {
            changeLang("en");
            changeStartScreenStep(2);
          }}
        >
          <img src={gbFlagIcon} alt="English" />
        </button>
        <button
          onMouseOver={() => {
            changeLang("pl");
          }}
          onClick={() => {
            changeLang("pl");
            changeStartScreenStep(2);
          }}
        >
          <img src={polishFlagIcon} alt="Polski" />
        </button>
      </div>
    </div>
  );
};

export default StartScreenStepOne;
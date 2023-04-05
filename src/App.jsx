import { useTranslation, Trans } from "react-i18next";
import "./styles.css";

export default function App() {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "English" },
    fr: { nativeName: "Français" },
  };
  return (
    <div className="App">
      <div>
        {Object.keys(lngs).map((lng) => {
          return (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </button>
          );
        })}
      </div>
      <h1>{t("titre")}</h1>
      <Trans i18nKey="subTitle">
        <p>Pour une veille technologique.</p>
      </Trans>

      <h2>{t("installation")}</h2>
      <ul>
        <li>react-i18next</li>
        <li>i18next-browser-languagedetector</li>
        <li>i18next</li>
      </ul>
    </div>
  );
}

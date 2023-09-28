import { languages } from "@/options";
import useStore from "@/store";

export default function LanguageSelect() {
  const language = useStore((state) => state.language);

  const handleChange = (event) => {
    let lang = event.target.value;
    if (lang === "auto-detect") {
      useStore.setState({ autoDetectLanguage: true, language: "plaintext" });
    } else {
      useStore.setState({ autoDetectLanguage: false, language: lang });
    }
  };
  return (
    <select value={language} onChange={handleChange} style={{ width: "100%" }}>
      {Object.entries(languages).map(([lang, name]) => (
        <option key={lang} value={lang}>
          {name}
        </option>
      ))}
    </select>
  );
}

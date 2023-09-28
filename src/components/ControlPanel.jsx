import FontSelect from "./controls/FontSelect";
import FontSizeInput from "./controls/FontSizeInput";
import LanguageSelect from "./controls/LanguageSelect";
import PaddingSlider from "./controls/PaddingSlider";
import TitleEditor from "./controls/TitleEditor";

export default function ControlPanel() {
  return (
    <div className="window" style={{ width: "320px" }}>
      <div className="title-bar">
        <div className="title-bar-text">A Window With A Status Bar</div>
      </div>
      <div className="window-body">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LanguageSelect />
          <FontSelect />
          <FontSizeInput />
          <TitleEditor />
          <PaddingSlider />
        </div>
      </div>
    </div>
  );
}

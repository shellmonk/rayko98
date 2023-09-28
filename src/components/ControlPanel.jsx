import ExportOptions from "./controls/ExportOptions";
import FontSelect from "./controls/FontSelect";
import FontSizeInput from "./controls/FontSizeInput";
import LanguageSelect from "./controls/LanguageSelect";
import PaddingSlider from "./controls/PaddingSlider";
import TitleEditor from "./controls/TitleEditor";

export default function ControlPanel() {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Control Panel</div>
      </div>
      <div className="window-body">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LanguageSelect />
          <FontSelect />
          <FontSizeInput />
          <TitleEditor />
          <PaddingSlider />
          <ExportOptions />
        </div>
      </div>
    </div>
  );
}

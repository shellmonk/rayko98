import ExportOptions from "./controls/ExportOptions";
import FontSelect from "./controls/FontSelect";
import FontSizeInput from "./controls/FontSizeInput";
import LanguageSelect from "./controls/LanguageSelect";
import PaddingSlider from "./controls/PaddingSlider";
import TitleEditor from "./controls/TitleEditor";

export default function ControlPanel({ targetRef }) {
  return (
    <div className="window control_panel">
      <div className="title-bar">
        <div className="title-bar-text">Control Panel</div>
      </div>
      <div className="window-body control_panel_items">
        <fieldset>
          <legend>Font</legend>
          <FontSelect />
          <FontSizeInput />
        </fieldset>
        <fieldset>
          <legend>Language</legend>
          <LanguageSelect />
        </fieldset>
        <fieldset>
          <legend>Window preferences</legend>
          <TitleEditor />
          <PaddingSlider />
        </fieldset>

        <ExportOptions targetRef={targetRef} />
      </div>
    </div>
  );
}

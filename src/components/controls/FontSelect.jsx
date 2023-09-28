import { fonts } from "@/options";
import useStore from "@/store";

export default function FontSelect() {
  const fontStyle = useStore((state) => state.fontStyle);

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Font
      </label>
      <select
        value={fontStyle}
        onChange={(event) => {
          console.log(event.target.value);
          useStore.setState({ fontStyle: event.target.value });
        }}
      >
        {Object.entries(fonts).map(([id, font]) => (
          <option key={id} value={id}>
            {font.name}
          </option>
        ))}
      </select>
    </div>
  );
}

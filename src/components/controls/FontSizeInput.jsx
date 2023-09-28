import useStore from "@/store";

export default function FontSizeInput() {
  const fontSize = useStore((state) => state.fontSize);

  return (
    <div>
      <div className="field-row-stacked" style={{ width: "200px" }}>
        <label className="block mb-2 text-xs font-medium text-neutral-400">
          Font size
        </label>
        <input
          id="text24"
          type="number"
          value={fontSize}
          onChange={(e) =>
            useStore.setState({ fontSize: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
}

import useStore from "@/store";

export default function FontSizeInput() {
  const fontSize = useStore((state) => state.fontSize);

  return (
    <div className="field-row">
      <label>Font size</label>
      <input
        id="text24"
        type="number"
        value={fontSize}
        onChange={(e) =>
          useStore.setState({ fontSize: Number(e.target.value) })
        }
      />
    </div>
  );
}

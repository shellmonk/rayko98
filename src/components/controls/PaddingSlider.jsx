import useStore from "@/store";

export default function PaddingSlider() {
  const padding = useStore((state) => state.padding);

  return (
    <div className="field-row-stacked">
      <label style={{ marginRight: "10px" }}>Padding:</label>
      <div className="field-row">
        <label>Low</label>
        <input
          id="range26"
          type="range"
          min="1"
          max="200"
          value={padding}
          onChange={(event) => {
            console.log(event.target.value);
            useStore.setState({ padding: Number(event.target.value) });
          }}
        />
        <label>High</label>
      </div>
    </div>
  );
}

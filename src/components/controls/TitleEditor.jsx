import useStore from "@/store";

export default function TitleEditor() {
  const title = useStore((state) => state.title);

  return (
    <div className="field-row-stacked" style={{ width: "200px" }}>
      <label>Title</label>
      <input
        id="text22"
        type="text"
        value={title}
        onChange={(evt) => useStore.setState({ title: evt.target.value })}
      />
    </div>
  );
}

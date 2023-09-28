import useStore from "@/store";

export default function TitleEditor() {
  const title = useStore((state) => state.title);

  return (
    <div
      style={{ display: "flex", flexDirection: "row", marginBottom: "15px" }}
    >
      <label style={{ marginRight: "10px" }}>Title</label>
      <input
        id="text22"
        type="text"
        style={{ width: "100%" }}
        value={title}
        onChange={(evt) => useStore.setState({ title: evt.target.value })}
      />
    </div>
  );
}

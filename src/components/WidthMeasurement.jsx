export default function WidthMeasurement({ showWidth, width }) {
  return (
    <div style={{ visibility: showWidth ? "visible" : "hidden" }}>
      <span>{width} px</span>
    </div>
  );
}

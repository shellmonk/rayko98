import { toBlob, toPng, toSvg } from "html-to-image";
import { toast } from "react-hot-toast";
import useStore from "@/store";
import { useHotkeys } from "react-hotkeys-hook";

export default function ExportOptions({ targetRef }) {
  const title = useStore((state) => state.title);

  const copyImage = async () => {
    const loading = toast.loading("Copying...");

    try {
      const imgBlob = await toBlob(targetRef.current, {
        pixelRatio: 2,
      });
      const img = new ClipboardItem({ "image/png": imgBlob });
      navigator.clipboard.write([img]);

      toast.remove(loading);
      toast.success("Image copied to clipboard!");
    } catch (error) {
      toast.remove(loading);
      toast.error("Something went wrong!");
    }
  };

  const copyLink = () => {
    try {
      const state = useStore.getState();
      const queryParams = new URLSearchParams({
        ...state,
        code: btoa(state.code),
      }).toString();
      navigator.clipboard.writeText(`${location.href}?${queryParams}`);

      toast.success("Link copied to clipboard!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const saveImage = async (name, format) => {
    const loading = toast.loading(`Exporting ${format} image...`);

    try {
      let imgUrl, filename;
      switch (format) {
        case "PNG":
          imgUrl = await toPng(targetRef.current, { pixelRatio: 2 });
          filename = `${name}.png`;
          break;
        case "SVG":
          imgUrl = await toSvg(targetRef.current, { pixelRatio: 2 });
          filename = `${name}.svg`;
          break;

        default:
          return;
      }

      const a = document.createElement("a");
      a.href = imgUrl;
      a.download = filename;
      a.click();

      toast.remove(loading);
      toast.success("Exported successfully!");
    } catch (error) {
      toast.remove(loading);
      toast.error("Something went wrong!");
    }
  };

  useHotkeys("ctrl+c", copyImage);
  useHotkeys("shift+ctrl+c", copyLink);
  useHotkeys("ctrl+s", () => saveImage(title, "PNG"));
  useHotkeys("shift+ctrl+s", () => saveImage(title, "SVG"));

  return (
    <div className="field-row-stacked">
      <button onClick={copyImage}>Copy image (CTRL+C)</button>
      <button onClick={copyLink}>Copy link (SHIFT+CTRL+C)</button>
      <button onClick={() => saveImage(title, "PNG")}>
        Save as PNG (CTRL+S)
      </button>
      <button onClick={() => saveImage(title, "SVG")}>
        Save as SVG (SHIFT+CTRL+S)
      </button>
    </div>
  );
}

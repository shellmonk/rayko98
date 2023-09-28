import { useEffect, useRef, useState } from "react";
import { fonts } from "./options";
import useStore from "./store";
import { Resizable } from "re-resizable";
import CodeEditor from "./components/CodeEditor";
import ControlPanel from "./components/ControlPanel";
import WidthMeasurement from "./components/WidthMeasurement";
import "98.css";

function App() {
  const [width, setWidth] = useState("auto");
  const [showWidth, setShowWidth] = useState(false);

  const padding = useStore((state) => state.padding);
  const fontStyle = useStore((state) => state.fontStyle);
  const title = useStore((state) => state.title);
  const editorRef = useRef(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size === 0) return;
    const state = Object.fromEntries(queryParams);

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : "",
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
    });
  }, []);

  return (
    <main className="main">
      <link
        rel="stylesheet"
        href={fonts[fontStyle].src}
        crossOrigin="anonymous"
      />
      <div
        className="container"
        style={{
          padding: padding,
        }}
        ref={editorRef}
      >
        <div className="code_editor">
          <Resizable
            enable={{ left: true, right: true }}
            minWidth={400}
            height={0}
            size={{ width }}
            onResize={(e, dir, ref) => {
              setWidth(ref.offsetWidth);
            }}
            onResizeStart={() => setShowWidth(true)}
            onResizeStop={() => setShowWidth(false)}
          >
            <div className="window">
              <div className="title-bar">
                <div className="title-bar-text">{title}</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>

              <div className="window-body">
                <CodeEditor />
              </div>

              <div className="status-bar">
                <p className="status-bar-field">https://rayko.shellmonk.io</p>
                <p className="status-bar-field">Slide 420</p>
                <p className="status-bar-field">CPU Usage: 69%</p>
              </div>
            </div>
          </Resizable>
          {showWidth && (
            <WidthMeasurement showWidth={showWidth} width={width} />
          )}
        </div>
      </div>
      <ControlPanel targetRef={editorRef} />
    </main>
  );
}

export default App;

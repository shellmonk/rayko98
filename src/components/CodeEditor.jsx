import { codeSnippets, fonts } from "@/options";
import useStore from "@/store";
import { useEffect } from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

export default function CodeEditor() {
  const store = useStore();

  useEffect(() => {
    const randomSnippet =
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    useStore.setState({
      language: randomSnippet.language,
      code: randomSnippet.code,
    });
  }, []);

  return (
    <Editor
      value={store.code}
      onValueChange={(code) => useStore.setState({ code: code })}
      highlight={(code) =>
        hljs.highlight(code, { language: store.language }).value
      }
      style={{
        fontFamily: fonts[store.fontStyle].name,
        fontSize: store.fontSize,
        background: "white",
      }}
      textareaClassName="focus:outline-none"
      onClick={(e) => e.target.select()}
      padding={5}
    />
  );
}

import useStore from "@/store";
import { useEffect } from "react";
import { codeSnippets, fonts } from "@/options";
import Editor from "react-simple-code-editor";
import flourite from "flourite";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

export default function CodeEditor() {
  const store = useStore();

  useEffect(() => {
    const randomSnippet =
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    useStore.setState(randomSnippet);
  }, []);

  useEffect(() => {
    if (store.autoDetectLanguage) {
      const { language } = flourite(store.code, { noUnknown: true });
      useStore.setState({
        language: language.toLowerCase() || "plaintext",
      });
    }
  }, [store.autoDetectLanguage, store.code]);

  return (
    <Editor
      value={store.code}
      onValueChange={(code) => useStore.setState({ code })}
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

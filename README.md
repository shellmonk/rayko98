<h1 align="center">
    <a href="https://rayko.shellmonk.io">
    <img src="./.github/assets/logo.png" width="100" height="100">
    </a>
    <br />
    Rayko (Win98 edition)
</h1>

Rayko is a clone of [Ray.so](https://ray.so), a tool for generating code snippets, but with a touch of '90s nostalgia.

Heavily inspired by [Code Screenshot](https://github.com/nimone/code-screeshot).

## Try it live

[rayko.shellmonk.io](https://rayko.shellmonk.io)

## Sample output

![Rayko sample output](/.github/assets/rayko_example.png "Ackermann function")

## Build and run dev server

```bash
git clone https://github.com/shellmonk/rayko98
cd rayko98
npm install
npm run dev
```

## Tech stack

- [React](https://react.dev) - Main JS library
- [98.css](https://jdan.github.io/98.css/) - CSS component library for Windows 98 look and feel
- [Zustand](https://zustand-demo.pmnd.rs/) - React state management library
- [Highlight.js](https://highlightjs.org/) - Syntax highlighter
- [React Simple Code Editor](https://www.npmjs.com/package/react-simple-code-editor) - Browser based code editor
- [HTML to Image](https://www.npmjs.com/package/html-to-image) - Library for generating an image from a DOM node using HTML5 canvas and SVG
- [React Hot Toast](https://react-hot-toast.com/) - Toast notifications for React
- [React Hotkeys Hook](https://www.npmjs.com/package/react-hotkeys-hook) - A React hook for using keyboard shortcuts in components in a declarative way
- [Resizable](https://www.npmjs.com/package/re-resizable) - A resizable component for React
- [Vite](https://vitejs.dev/) - Frontend toolset

## Known bugs

- Initial code snippets are not loaded in Safari

## License

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).

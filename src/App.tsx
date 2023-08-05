import { diff_match_patch } from "diff-match-patch";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [textArea1, setTextArea1] = useState('const a = "aaa"\n\nreturn a;');
  const [textArea2, setTextArea2] = useState('const a = "bbb"\n\nreturn a;');

  const onClickDiff = () => {
    console.log(textArea1);
    console.log(textArea2);
    const diffMatchPatchObj = new diff_match_patch();
    console.dir(diffMatchPatchObj.diff_main(textArea1, textArea2));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <div>
          <textarea
            id={"textarea1"}
            rows={5}
            value={textArea1}
            onChange={(e) => setTextArea1(e.target.value)}
          />
        </div>
        <div>
          <textarea
            id={"textarea2"}
            rows={5}
            value={textArea2}
            onChange={(e) => setTextArea2(e.target.value)}
          />
        </div>
        <button onClick={() => onClickDiff()}> Diff </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

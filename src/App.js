import React from "react";
import { RecoilRoot } from "recoil";
import { TodoList } from "./components/TodoList";

// utility for creating unique Id

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}


export default App;

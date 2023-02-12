import Todos from "./components/Todos";
import Todo from "./models/Todo";

const todos = [
  new Todo('Clean the room'),
  new Todo('Study well')
];

function App() {
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;

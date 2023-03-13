import TaskList from "./components/TaskList";
import { TarkForm } from "./components/TarkForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen p-10">
      <div className="container mx-auto  ">
        <TarkForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;

import './App.scss';
import Kanban from './components/Kanban';
function App() {

  return (
    <div style={{ padding: '50px' }} className='App'>
      <h1 style={{ marginBottom: '20px' }}>
        Kanban UI
      </h1>
      <Kanban />
    </div>
  );
}

export default App;

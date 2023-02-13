import { AddTeacher,AddStudent, Students, FeeData, AddFee } from './components';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Students />
      <AddStudent />
      <AddTeacher />
      <FeeData />
      <AddFee />
    </div>
  );
}

export default App;

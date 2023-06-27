import './App.css';
import { Base } from './components/Base/Base.tsx';
import { data } from './data/data.ts';
import dataJson from './data/datajson.json';

function App() {

  console.log('data', data);
  console.log('dataJson', dataJson);

  return (
    <div className="App">
      <Base data={dataJson} />
    </div>
  )
}

export default App;
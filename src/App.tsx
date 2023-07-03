import './App.css';
import { Base } from './components/Base/Base.tsx';
// import { data } from './data/data.ts';
// import dataJson from './data/datajson.json';
import dataLinks from './data/data-links.json';

function App() {

  // console.log('data', data);
  // console.log('dataJson', dataJson);
  console.log('dataLink', dataLinks);

  return (
    <div className="App">
      <Base data={dataLinks} />
    </div>
  )
}

export default App;
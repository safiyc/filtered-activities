import './styles.css';

import Filters from './Filters';
import Activiities from './Activities';

function App() {
  return (
    <div className='app_container'>
      <h1>Filter Activities</h1>
      <hr />
      <br />
      <div >
        <label htmlFor='add_filter'>New filter</label>
        <div>
          <input className='add_input' type='text' id='add_filter' />
          <button className='add_button' type='button'>add</button>
        </div>
        <br />
        <label htmlFor='add_activity'>New activity</label>
        <div>
          <input className='add_input' type='text' id='add_activity' />
          <button className='add_button' type='button'>add</button>
        </div>

      </div>
      <br />
      <Filters />
      <br />
      <Activiities />
    </div>
  );
}

export default App;

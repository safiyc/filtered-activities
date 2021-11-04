import { useState } from 'react';

const Activiities = () => {
  const [modeFiltered, setModeFiltered] = useState('on');
  const [modeAll, setModeAll] = useState('off');

  const handleFilterMode = (e) => {
    // console.log('e.target...', e.target);

    if (e.target.value === 'on') {
      return;
    }

    if (modeAll === 'off') {
      setModeAll('on');
      setModeFiltered('off');
    } else if (modeFiltered === 'off') {
      setModeAll('off');
      setModeFiltered('on');
    }
  }

  return (
    <>
      <h2>Activities</h2>
      <div style={{ textAlign: 'center' }}>
        {/* display inline-block to resize div to nested btns */}
        {/* fontSize 0px is hack to remove inline whitespace above btns in div */}
        <div style={{ border: '2px solid black', display: 'inline-block', fontSize: '0px' }}>
          <button className='filter_buttons' value={modeAll} onClick={handleFilterMode}>all</button>
          <button className='filter_buttons' value={modeFiltered} onClick={handleFilterMode}>filtered</button>
        </div>
      </div>
      <ul>
        <li>boardgame</li>
        <li>eat out</li>
        <li>video chat</li>
        <li>boardgame</li>
        <li>tennis</li>
      </ul>
    </>
  )
};

export default Activiities;
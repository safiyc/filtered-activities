const Activiities = (props) => {
  return (
    <>
      <h2>Activities</h2>
      <div style={{ textAlign: 'center' }}>
        <button
          className='filter_toggle_button'
          value={props.filterToggle}
          onClick={props.handleFilterToggle}
        >
          <span
            className='filter_toggle_button_child'
            value={props.filterToggle === 'all' ? 'on' : 'off'}
          >
            all
          </span>
          <span
            className='filter_toggle_button_child'
            value={props.filterToggle === 'filter' ? 'on' : 'off'}
          >
            filter
          </span>
        </button>
      </div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {props.activities.map(item =>
          <li style={{ width: '40%' }} key={item.id}>
            {item.activity}
          </li>
        )}
      </ul>
    </>
  )
};

export default Activiities;
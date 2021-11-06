const filtersContainer = {
  position: 'relative',
};

const h2Absolute = {
  position: 'absolute',
  top: '-10px',
  left: 0,
  right: 0,
  backgroundColor: 'white',
  border: '2px solid lightgray',
  width: '95px',
  margin: '0 auto 10px'
};

const filtersListContainer = {
  border: '10px solid lightgrey',
  padding: '15px',
  paddingTop: '30px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 100px)',
  justifyContent: 'space-between',
  gridGap: '10px',
};

const Filters = (props) => {
  return (
    <div style={filtersContainer}>
      <h2 style={h2Absolute}>Filters</h2>
      <ul style={filtersListContainer}>
        {props.filters.map(item =>
          <li key={item.id}>
            <label className='checkbox_container' htmlFor={item.filterName}>
              {item.filterName}
              <input className='input_checkbox' type='checkbox' value='money' name='filters' id={item.filterName} />
              <span className='custom_checkbox'></span>
            </label>
          </li>
        )}
      </ul>
      <button className='clearAllFiltersBtn' onClick={props.handleClearAll}>clear ALL</button>
    </div>
  );
};

export default Filters;
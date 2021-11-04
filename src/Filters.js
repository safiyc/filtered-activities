const filtersContainer = {
  border: '10px solid lightgrey',
  padding: '15px',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 100px)',
  justifyContent: 'space-between',
  gridGap: '10px',
};

const Filters = () => {
  return (
    <>
      <h2>Filters</h2>
      <div style={filtersContainer}>
        <label className='checkbox_container' htmlFor='ex2'>money
          <input className='input_checkbox' type='checkbox' value='money' name='filters' id='ex2' />
          <span className='custom_checkbox'></span>
        </label>
        <label className='checkbox_container' htmlFor='ex1'>solo
          <input className='input_checkbox' type='checkbox' value='solo' name='filters' id='ex1' />
          <span className='custom_checkbox'></span>
        </label>
        <label className='checkbox_container' htmlFor='ex3'>social
          <input className='input_checkbox' type='checkbox' value='social' name='filters' id='ex3' />
          <span className='custom_checkbox'></span>
        </label>
        <label className='checkbox_container' htmlFor='ex4'>healthy
          <input className='input_checkbox' type='checkbox' value='healthy' name='filters' id='ex4' />
          <span className='custom_checkbox'></span>
        </label>
        <label className='checkbox_container' htmlFor='ex5'>food
          <input className='input_checkbox' type='checkbox' value='food' name='filters' id='ex5' />
          <span className='custom_checkbox'></span>
        </label>
        <label className='checkbox_container' htmlFor='ex6'>food
          <input className='input_checkbox' type='checkbox' value='food' name='filters' id='ex6' />
          <span className='custom_checkbox'></span>
        </label>
        <label className='checkbox_container'>food
          <input className='input_checkbox' type='checkbox' value='food' name='filters' />
          <span className='custom_checkbox'></span>
        </label>
        <label className='checkbox_container'>food
          <input className='input_checkbox' type='checkbox' value='food' name='filters' />
          <span className='custom_checkbox'></span>
        </label>
        <label className='checkbox_container'>food
          <input className='input_checkbox' type='checkbox' value='food' name='filters' />
          <span className='custom_checkbox'></span>
        </label>
      </div>
    </>
  );
};

export default Filters;
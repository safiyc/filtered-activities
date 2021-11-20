const NewItem = (props) => {
  return (
    <div >
      <label style={{ display: 'block', paddingLeft: '5px', color: 'gray' }} htmlFor='add_item_input'>add new filter or activity:</label>
      <div className='add_input_container'>
        <input
          type='text'
          className='add_input'
          id='add_item_input'
          onChange={props.handleNewItemInput}
          value={props.newItemIValue}
        />
        <button
          className='add_button'
          type='button'
          onClick={props.addNewFilter}
        >filter</button>
        <button
          className='add_button'
          type='button'
          // onClick={props.addNewActivity}
          onClick={props.handleModalToggle}
        >activity</button>
      </div>
      <div style={{ height: '20px', color: 'gray', padding: '5px' }}>{props.notification}</div>
    </div>
  );
};

export default NewItem;
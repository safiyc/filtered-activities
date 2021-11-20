const ModalWindow = (props) => {
  // if modalToggle = true >>> opens modal
  // if modalToggle = false >>> closes modal
  if (props.modalToggle) {
    return (
      <div className='modal_window'>
        <div className='modal_content_container'>
          <h2 className='modal_h2'>Filters For New Activity</h2>
          <ul className='modal_ul_container'>
            {props.filters.map(item =>
              <li key={item.id}>
                <label className='checkbox_container' htmlFor={item.filterName}>
                  {item.filterName}
                  <input
                    className='input_checkbox'
                    type='checkbox'
                    value={item.filterName}
                    name='filters'
                    id={item.filterName}
                    onChange={props.handleCheckedFilters}
                  />
                  <span className='custom_checkbox'></span>
                </label>
              </li>
            )}
          </ul>
          <div className='modal_notification'>{props.notification}</div>
          <button className='modal_submit_btn' onClick={props.addNewActivity}>add filters</button>
        </div>
      </div>
    );
  };
  return null;
};

export default ModalWindow;
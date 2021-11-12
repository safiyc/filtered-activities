const Heading = (props) => {
  return (
    <>
      <h2>Activities</h2>
      <div style={{ textAlign: 'center' }}>
        <button
          className='filter_toggle_button'
          onClick={props.handleFilterToggle}
          value={props.filterToggle}
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
    </>
  )
};

const Activiities = (props) => {
  // console.warn('refreshed');
  let filteredActivities = []; // arr of filtered activity objects

  for (let i = 0; i < props.activities.length; i++) {
    // console.log(`[${props.activities[i].filterNames}] ...... [${props.checkedFilters}]`);
    // sort arrays of string values before comparisons
    const sortedActivitiesFilters = props.activities[i].filterNames.sort();
    const sortedCheckedFilters = props.checkedFilters.sort();

    // returns true or false
    const filterCheck = sortedActivitiesFilters.length === sortedCheckedFilters.length &&
      sortedActivitiesFilters.every((el, ind) => el === sortedCheckedFilters[ind]);
    // console.log(filterCheck);

    // if both arrays contain the same filters, push props.activities[i] to filteredActivities
    if (filterCheck) {
      filteredActivities.push(props.activities[i]);
    }
  }
  // console.log('outside of loops... filteredActivities is: ', filteredActivities);

  if (props.filterToggle === 'all') {
    return (
      <>
        <Heading
          filterToggle={props.filterToggle}
          handleFilterToggle={props.handleFilterToggle}
        />
        <ul style={{
          display: 'grid',
          gridTemplateColumns: '40% 40%',
          justifyContent: 'space-evenly'
        }}>
          {props.activities.map(item =>
            <li style={{ backgroundColor: 'azure', padding: '5px' }} key={item.id}>
              {item.activity}
            </li>
          )}
        </ul>
      </>
    )
  } else if (props.filterToggle === 'filter') {
    if (filteredActivities.length === 0) {
      return (
        <>
          <Heading
            filterToggle={props.filterToggle}
            handleFilterToggle={props.handleFilterToggle}
          />
          <h4 style={{ marginTop: '50px' }}>There are no matches.</h4>
        </>
      )
    }
    return (
      <>
        <Heading
          filterToggle={props.filterToggle}
          handleFilterToggle={props.handleFilterToggle}
        />
        <ul style={{
          display: 'grid',
          gridTemplateColumns: '40% 40%',
          justifyContent: 'space-evenly'
        }}>
          {filteredActivities.map(item =>
            <li style={{ backgroundColor: 'azure', padding: '5px' }} key={item.id}>
              {item.activity}
            </li>
          )}
        </ul>
      </>
    )
  }
};

export default Activiities;
import { useState } from 'react';

import './styles.css';

import Filters from './Filters';
import Activiities from './Activities';
import NewItem from './NewItem';
import ModalWindow from './ModalWindow';

const filtersArr = [
  {
    filterName: 'social',
    isChecked: false,
    id: '1'
  },
  {
    filterName: 'solo',
    isChecked: false,
    id: '2'
  },
  {
    filterName: 'money',
    isChecked: false,
    id: '3'
  },
  {
    filterName: 'food',
    isChecked: false,
    id: '4'
  },
  {
    filterName: 'outdoor',
    isChecked: false,
    id: '5'
  },
  {
    filterName: 'indoor',
    isChecked: false,
    id: '6'
  },
  {
    filterName: 'healthy',
    isChecked: false,
    id: '7'
  },
  {
    filterName: 'create',
    isChecked: false,
    id: '8'
  }
];

const activitiesArr = [
  {
    activity: 'boardgame',
    filterNames: ['social'],
    id: '1'
  },
  {
    activity: 'eatout',
    filterNames: ['social', 'solo'],
    id: '2'
  },
  {
    activity: 'videochat',
    filterNames: ['social', 'healthy'],
    id: '3'
  },
  {
    activity: 'prepare a dish',
    filterNames: ['create', 'social'],
    id: '4'
  },
  {
    activity: 'go for a walk',
    filterNames: ['healthy', 'social'],
    id: '5'
  }
];

function App() {
  const [activities, setActivities] = useState(activitiesArr);
  const [filters, setFilters] = useState(filtersArr);
  const [filterToggle, setFilterToggle] = useState('all');  // 'all', 'filter'
  const [newItemValue, setNewItemValue] = useState('');  // input field for new activity/filter
  const [checkedFilters, setCheckedFilters] = useState([]);  // arr of filterName from checked  elements 
  const [modalToggle, setModalToggle] = useState(false);  // true, false

  const handleNewItemInput = (e) => {
    setNewItemValue(e.target.value);
    // console.log('e.target.value...', e.target.value);
  };

  const handleModalToggle = () => {
    // if modal is false, set to true and display modal
    if (modalToggle === false) {
      // uncheck checked elements in Filter componenent (hack to resolve checked els in Filter component from conflict with checked els in ModalWindow)
      // should refactor this mess
      handleClearAll();

      // cant empty string
      if (newItemValue === '') {
        console.log('Can\'t add an empty input item.');
        return;
      }
      // find if item is a duplicate of item in activities array
      // returns 'undefined' if no duplicate
      const itemCheck = activities.find(ind => ind.activity === newItemValue);
      // console.log('itemCheck...', itemCheck);

      if (itemCheck === undefined) {
        setModalToggle(true);  // open the modal window

        // don't open modal window
      } else {
        console.log('The new item is a duplicate.');
        return;
      }
    }
  };
  // console.log('modalToggle...', modalToggle);

  // save seleted filter names into arr checkedFilters
  const handleCheckedFilters = (e) => {
    // console.log('checkbox is checked or not...', e.target.checked);  // true, false

    const aCheckedFilter = e.target.value; // filter's id of clicked checkbox

    // update ischecked of filters arr state
    const index = filters.findIndex(item => item.filterName === aCheckedFilter);
    // console.log('index of checked item in filters arr...', index);

    // add checked filter to arr
    if (e.target.checked) {
      setCheckedFilters(checkedFilters.concat(aCheckedFilter));

      // refactor: dont directly change state
      filters[index].isChecked = true;
      setFilters(filters);

      // if unchecking checked filter
    } else {
      // console.log('unchecking..', aCheckedFilter);

      // find index of item to uncheck
      const uncheckedFilter = checkedFilters.indexOf(aCheckedFilter);
      // console.log('index of unchecked..', uncheckedFilter);

      // remove unchecked from arr
      // clone of checkedFilters arr, so isnt affected when modifying clone
      const tempCheckedFilters = JSON.parse(JSON.stringify(checkedFilters));
      tempCheckedFilters.splice(uncheckedFilter, 1);
      // console.log('tempCheckedFilters...', tempCheckedFilters);

      setCheckedFilters(tempCheckedFilters);

      // refactor: dont directly change state
      filters[index].isChecked = false;
      setFilters(filters);
    }
  };

  const addNewFilter = () => {
    if (newItemValue === '') {
      console.log('Can\'t add an empty input item.');
      return;
    }
    // find if item is a duplicate of item in filters array
    // returns 'undefined' if filters has no duplicate
    const itemCheck = filters.find(ind => ind.filterName === newItemValue);
    console.log('itemCheck...', itemCheck);

    const id = Math.floor(Math.random() * 1000000);

    const item = {
      filterName: newItemValue,
      isChecked: false,
      id: id
    };

    if (itemCheck === undefined) {
      setFilters(filters.concat(item));
    } else {
      console.log('The new item is a duplicate.');
    }
  };

  // console.log('filters arr...', filters);

  const addNewActivity = () => {
    // uncheck checked elements in Filter componenent (hack to resolve checked els in Filter component from conflict with checked els in ModalWindow)
    // should refactor this mess
    handleClearAll();

    const id = Math.floor(Math.random() * 1000000);

    const item = {
      activity: newItemValue,
      filterNames: checkedFilters,
      id: id
    };

    setActivities(activities.concat(item));

    const tempCheckedFilters = [];
    // clone of tempCheckedFilters to assign empty arr
    setCheckedFilters(JSON.parse(JSON.stringify(tempCheckedFilters)));

    setModalToggle(false);
  };

  // console.log('activities arr...', activities);

  // uncheck all checked input filters (Filter component) and empty checkedFilters arr
  const handleClearAll = () => {
    let tempFilters = JSON.parse(JSON.stringify(filters));
    tempFilters.forEach(item => item.isChecked = false);
    // console.log('tempFilters...', tempFilters);

    setFilters(tempFilters);
    setCheckedFilters([]);
  };

  // console.log('filters...', filters);

  // render Activities as 'all' or as 'filter' based on checked filter inputs
  const handleFilterToggle = (e) => {
    // will log clicked child of button instead
    // console.log('e.target child...', e.target);
    // wont log child elements when button clicked
    // console.log('e.target button...', e.currentTarget);

    if (e.currentTarget.value === 'all') {
      setFilterToggle('filter');

    } else {
      setFilterToggle('all');
    }
    // console.log('e.target button...', e.currentTarget);
  };

  return (
    <div className='app_container'>
      <h1>Filter Activities</h1>
      <hr />
      <br />
      <NewItem
        handleNewItemInput={handleNewItemInput}
        newItemValue={newItemValue}
        addNewFilter={addNewFilter}
        handleModalToggle={handleModalToggle}
      />

      {/* modal for add activity */}
      <ModalWindow
        filters={filters}
        modalToggle={modalToggle}
        handleModalToggle={handleModalToggle}
        addNewActivity={addNewActivity}
        handleCheckedFilters={handleCheckedFilters}
      />
      <br />
      <br />
      <br />
      <Filters
        filters={filters}
        handleClearAll={handleClearAll}
        handleCheckedFilters={handleCheckedFilters}
      />
      <br />
      <Activiities
        filterToggle={filterToggle}
        handleFilterToggle={handleFilterToggle}
        activities={activities}
        checkedFilters={checkedFilters}
      />
    </div>
  );
}

export default App;

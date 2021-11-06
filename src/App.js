import { useState } from 'react';

import './styles.css';

import Filters from './Filters';
import Activiities from './Activities';
import NewItem from './NewItem';

const filtersArr = [
  {
    filterName: 'social',
    id: '1'
  },
  {
    filterName: 'solo',
    id: '2'
  },
  {
    filterName: 'money',
    id: '3'
  },
  {
    filterName: 'food',
    id: '4'
  },
  {
    filterName: 'outdoor',
    id: '5'
  },
  {
    filterName: 'indoor',
    id: '6'
  },
  {
    filterName: 'healthy',
    id: '7'
  },
  {
    filterName: 'create',
    id: '8'
  }
];

const activitiesArr = [
  {
    activity: 'boardgame',
    filterNames: [],
    id: '1'
  },
  {
    activity: 'eatout',
    filterNames: [],
    id: '2'
  },
  {
    activity: 'videochat',
    filterNames: [],
    id: '3'
  },
  {
    activity: 'prepare a dish',
    filterNames: [],
    id: '4'
  },
  {
    activity: 'go for a walk',
    filterNames: [],
    id: '5'
  },
  {
    activity: 'go for a run',
    filterNames: [],
    id: '6'
  },
  {
    activity: 'work on a 3d project',
    filterNames: [],
    id: '7'
  },
  {
    activity: 'play tennis',
    filterNames: [],
    id: '8'
  }
];

function App() {
  const [activities, setActivities] = useState(activitiesArr);
  const [filters, setFilters] = useState(filtersArr);
  const [filterToggle, setFilterToggle] = useState('all');

  const [newItemValue, setNewItemValue] = useState('');

  const handleNewItemInput = (e) => {
    setNewItemValue(e.target.value);
    console.log('e.target.value...', e.target.value);
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
      id: id
    };

    if (itemCheck === undefined) {
      setFilters(filters.concat(item));
    } else {
      console.log('The new item is a duplicate.');
    }
  };

  console.log('filters arr...', filters);

  const addNewActivity = () => {
    if (newItemValue === '') {
      console.log('Can\'t add an empty input item.');
      return;
    }

    // find if item is a duplicate of item in activities array
    // returns 'undefined' if activities arr has no duplicate
    const itemCheck = activities.find(ind => ind.activity === newItemValue);
    console.log('itemCheck...', itemCheck);

    const id = Math.floor(Math.random() * 1000000);

    const item = {
      activity: newItemValue,
      filterNames: ['social', 'money'],
      id: id
    };

    if (itemCheck === undefined) {
      // open modal to select filter items to associate with this new activity


      setActivities(activities.concat(item));
    } else {
      console.log('The new item is a duplicate.');
    }

  };

  console.log('activities arr...', activities);

  const handleFilterToggle = (e) => {
    // will log clicked child of button instead
    // console.log('e.target child...', e.target);

    // wont log child elements when button clicked
    // console.log('e.target button...', e.currentTarget);
    // console.log('first child...', e.currentTarget.firstChild);
    // console.log('last child...', e.currentTarget.lastChild);

    if (e.currentTarget.value === 'all') {
      setFilterToggle('filter');
    } else {
      setFilterToggle('all');
    }

    console.log('e.target button...', e.currentTarget);
  };

  const handleClearAll = (e) => {
    console.log('e.target...', e.target);
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
        addNewActivity={addNewActivity}
      />
      <br />
      <br />
      <br />
      <Filters filters={filters} handleClearAll={handleClearAll} />
      <br />
      <Activiities filterToggle={filterToggle} activities={activities} handleFilterToggle={handleFilterToggle} />
    </div>
  );
}

export default App;

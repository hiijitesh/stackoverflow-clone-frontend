import { FilterList } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import AllQuestions from './AllQuestions';

import './css/Main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-top'>
          <h2>All Questions</h2>
          <Link>
            <button>Ask Questions</button>
          </Link>
        </div>

        <div className='main-desc'>
          <p>all question count</p>
          <div className='main-filter'>
            <div className='main-tabs'>
              <div className='main-tab'>
                <Link>Newest</Link>
              </div>
              <div className='main-tab'>
                <Link>Active</Link>
              </div>
              <div className='main-tab'>
                <Link>More</Link>
              </div>
            </div>

            <div className='main-filter-item'>
              <FilterList />
              <p>filters</p>
            </div>
          </div>
        </div>

        <div className='questions'>
          <div className='question'>
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

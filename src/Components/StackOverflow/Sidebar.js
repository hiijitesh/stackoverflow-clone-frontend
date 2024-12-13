import { Public, Star, Stars, Work } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-options'>
          <div className='sidebar-option'>
            <Link>Home</Link>
          </div>
          <div className='sidebar-option'>
            <Link>Public</Link>
            <div className='link'>
              <div className='link-tag'>
                <Public />
                <Link>Question</Link>
              </div>
              <div className='tags'>
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>

          <div className='sidebar-option'>
            <p>Collectives</p>
            <div className='link'>
              <div className='link-tag'>
                <Stars />
                <a>Explore Collectives</a>
              </div>
            </div>
          </div>

          <div className='sidebar-option'>
            <p>Find a Job</p>
            <div className='link'>
              <div className='link-tag'>
                <div className='tags'>
                  <p>Job</p>
                  <p>Companies</p>
                </div>
              </div>
            </div>
          </div>

          <div className='sidebar-option'>
            <p>Team</p>
            <div className='link'>
              <div className='link-tag'>
                <Work />
                <Link>Companies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

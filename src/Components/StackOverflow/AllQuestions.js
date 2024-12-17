import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import './css/AllQuestions.css';

const AllQuestions = () => {
  return (
    <div className='all-questions'>
      <div className='all-questions-container'>
        <div className='all-questions-left'>
          <div className='all-options'>
            <div className='all-option'>
              <p>10</p>
              <span>votes</span>
            </div>
            <div className='all-option'>
              <p>1</p>
              <span>answers</span>
            </div>
            <div className='all-option'>
              <small>2 views</small>
            </div>
          </div>
        </div>

        <div className='question-answer'>
          <Link>How to build an astro.build app inside a dockerfile</Link>
          <div style={{ width: '90%' }}></div>
          <div>
            Almost every step is copied from the nextjs example but when i run
            this it can't find the react package (which is a dependency in the
            package.json). When i inspect the files in the docker container it
            seems that it has symlinks in the node_modules pointing to
            ../../node_modules which now don't exist anymore because of the
            pruning etc. I got it to work by just copying the entire app and
            running it then but that caused the image to be around 700mb. In
            comparison, nextjs is around 190mb. Does anyone know what steps i'm
            missing or what i'm doing wrong?
          </div>

          <div style={{ display: 'flex' }}>
            <span className='question-tags'>node</span>
            <span className='question-tags'>java</span>
            <span className='question-tags'>python</span>
          </div>

          <div className='author'>
            <small>asked 55 secs ago</small>
            <div className='auth-details'>
              <Avatar />
              <p>jitesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;

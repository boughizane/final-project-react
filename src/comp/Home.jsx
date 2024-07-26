import React from 'react'
import { useState } from 'react';
import List from '../List';
import Nav from './Nav';
import Add from '../Add';

const Home = () => {
    const [search, setsearch] = useState("") 
  return (
    <div>
        <Nav setsearch={setsearch}/>
        <List search={search}/>
        <Add/>

    </div>
  )
}

export default Home
import axios from 'axios';
import React, { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';
import Items from '../Items/Items';
import ItemsForm, { UserForm } from '../NewItems/ItemsForm';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const [jobs, setJobs] = useState([]);
  const authCtx = useContext(AuthContext);
  const userDatas = {
    username: localStorage.getItem('email')
  }

  const saveItemsDataHandler = (enteredItemsData) => {
    const ItemsData = {
        ...enteredItemsData,
        id: Math.random().toString(),
        username: localStorage.getItem('email')
    };
    axios.post('http://localhost:5000/newjob', ItemsData);
    setTimeout(() => {
    }, 500);
};
  axios.post('http://localhost:5000/getjobs', userDatas)
  .then((res) => {
    setJobs(res.data);
  })
  return (
    <Card className={classes.home}>
      <ItemsForm onSaveItemsData={saveItemsDataHandler} />
      <Items items={jobs} />
      {/* <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button> */}
      
      
    </Card>
  );
};

export default Home;

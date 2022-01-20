 import React from 'react';

 import './styles.css'
interface ActivityProps{
  user: string;
  activity: string;
}

export const Activity:React.FunctionComponent<ActivityProps> =({user, activity}) =>{
  return(
    <div className='activityContainer'> 
      <div id='userField'>
        <label>{user}</label>
      </div>
      <div id='activityField'>
        <label>{activity}</label>
      </div>
    </div>
  )
}
 import React from 'react';

 import './styles.css'
interface ActivityProps{
  activity:{
    user: string;
    activity: string;
  }
}

export const Activity:React.FunctionComponent<ActivityProps> =({activity}) =>{
  return(
    <div className='activityContainer'> 
      <div id='userField'>
        <label>{activity.user}</label>
      </div>
      <div id='activityField'>
        <label>{activity.activity}</label>
      </div>
    </div>
  )
}
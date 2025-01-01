
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ChildC = () => {
      // const user = useContext(userContext);
  const user = useContext(MyContext);

  return (
    <div>
      {user.name}
    </div>
  ); 
};

export default ChildC;

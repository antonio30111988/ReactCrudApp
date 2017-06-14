import React, {PropTypes} from 'react';

//functional, presenattional component
//PRESENATIONAL CONPONENT - can be defined as in function with no render() method
const ProfileList = ({profiles}) => {  
  return (
      <ul className="list-group">
        {profiles.map(cat => 
          <li className="list-group-item" key={profile.id}>
            {profile.name}
          </li>
        )}
      </ul>
  );
};

//same validation
ProfileList.propTypes = {  
  cats: PropTypes.array.isRequired
};

export default ProfileList;  
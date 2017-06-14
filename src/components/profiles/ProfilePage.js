import React, {PropTypes} from 'react'; 

//CONNECT-subscribe this conztainer compoanent to storem so to get notification when 
//state updated.
// Only container, or "stateful", components will be connected to the store.
// Then It takes that state and passes aspects of it to presentational components as props. 
import {connect} from 'react-redux';  
import * as profileActions from '../../actions/profileActions';

//IMPORT PRESENTATIONAČL COMPONENT
import ProfileList from './ProfileList';

class ProfilePage extends React.Component {  
  render() {
    return(
    	<div className="col-md-12">
	        <h1>Profiles:</h1>
	        <div className="col-md-4">
	          <ProfileList profiles={this.props.profiles} />
	        </div>
	     </div>
    )
  }
}
//for extend all props received by parent component
//VALIDATION
ProfilePage.propTypes = {
	//render only if received as prop and type of array
	 profiles: PropTypes.array.isRequired
};
//The mapStateToProps function has a very important job: 
//receive application state from the store 
//whenever state has changed and make data from 
//that data available to the component as props. 
//DIRECTRLY PASS STATE TO PROPS FROM STORE NOT FROM PARENT APP COMPONENT
function mapStateToProps(state, ownProps) {
	 // for etc: state = {profiles: [{id:1, name: "Maru"}, etc.]}
	 // pass state object to props.profiles of component
  return {
    profiles: state.profiles
  };
} 

export default connect(mapStateToProps)(ProfilePage);   

class ProfileApi {  
  static getAllProfiles() {
    return fetch('http://localhost:5000/api/profiles').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default ProfileApi;  
class UsersApi {
  

  static getAllUsers() {
    const baseUrl = "https://59f999a5f5e01400123e9955.mockapi.io/api/v1/users/";
    return fetch(baseUrl).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateUsers(user) {
    const baseUrl = "https://59f999a5f5e01400123e9955.mockapi.io/api/v1/users/";
    const request = new Request(baseUrl + '${user.id}', {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({user: user})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createUsers(user) {
    const baseUrl = "https://59f999a5f5e01400123e9955.mockapi.io/api/v1/users/";
    const request = new Request(baseUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({user: user})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteUsers(user) {
    const baseUrl = "https://59f999a5f5e01400123e9955.mockapi.io/api/v1/users/";
    const request = new Request(baseUrl + '${user.id}', {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UsersApi;

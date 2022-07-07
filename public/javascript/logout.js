async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
<<<<<<< HEAD
    headers: {
      'Content-Type': 'application/json'
    }
=======
    headers: { 'Content-Type': 'application/json' }
>>>>>>> d04b892ab74693416c29f36dd7b13c060bec4b79
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

<<<<<<< HEAD
document.querySelector('#logout').addEventListener('click', logout);
=======
document.querySelector('#logout').addEventListener('click', logout);
>>>>>>> d04b892ab74693416c29f36dd7b13c060bec4b79

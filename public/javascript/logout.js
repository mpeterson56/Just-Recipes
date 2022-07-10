async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
<<<<<<< HEAD
    headers: { 'Content-Type': 'application/json' }
=======
    headers: {
      'Content-Type': 'application/json'
    }
>>>>>>> feature/handlebars
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);

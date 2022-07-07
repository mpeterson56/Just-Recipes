async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

<<<<<<< HEAD
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
=======
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
>>>>>>> d04b892ab74693416c29f36dd7b13c060bec4b79

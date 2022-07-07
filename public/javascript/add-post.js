async function newFormHandler(event) {
  event.preventDefault();

<<<<<<< HEAD
  const title = document.querySelector('input[name="recipe-title"]').value;
  const post_text = document.querySelector('input[name="ingredient-title"]').value;
const ingredients = document.querySelector('input[name="measurement-title"]').value;
const step_text = document.querySelector('input[name="step_text"]').value;

=======
  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('input[name="post-url"]').value;
>>>>>>> d04b892ab74693416c29f36dd7b13c060bec4b79

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
<<<<<<< HEAD
      post_text,
      ingredients,
      step_text
=======
      post_text
>>>>>>> d04b892ab74693416c29f36dd7b13c060bec4b79
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

<<<<<<< HEAD
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
=======
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
>>>>>>> d04b892ab74693416c29f36dd7b13c060bec4b79

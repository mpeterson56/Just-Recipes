async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value;
  const post_text = document.querySelector('input[name="ingredient-title"]').value;
const ingredients = document.querySelector('input[name="measurement-title"]').value;
const step_text = document.querySelector('input[name="step_text"]').value;


  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_text,
      ingredients,
      step_text
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

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

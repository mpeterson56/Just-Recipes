async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value.trim();
  const ingredient = document.querySelector('input[name="ingredient-title"]').value.trim();
const measurement = document.querySelector('input[name="measurement-title"]').value.trim();
const step_text = document.querySelector('input[name="step_text"]').value.trim();



  const response = await fetch(`/api/posts`, {
    
    method: 'POST',
    body: JSON.stringify({
      title,
     ingredient,
     measurement,
     step_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });


  

  if (response.ok ) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);

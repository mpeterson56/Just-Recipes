async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value.trim();
  const ingredient = document.querySelector('input[name="ingredient-title1"]').value.trim();
const measurement = document.querySelector('input[name="measurement-title1"]').value.trim();
const step_text = document.querySelector('input[name="step_text1"]').value.trim();



  const response2 = await fetch(`/api/ingredients`, {
    
    method: 'POST',
    body: JSON.stringify({
      ingredient,
   measurement,
   
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  );
console.log(response2.statusText);
  const response3 = await fetch(`/api/steps`, {
    
    method: 'POST',
    body: JSON.stringify({
   step_text,
   
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response3.statusText);
  const response = await fetch(`/api/posts`, {
    
    method: 'POST',
    body: JSON.stringify({
      title,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  

  if (response.ok && response2.ok && response3.ok ) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let tasks = document.getElementById('#tasks');
  let form = document.querySelector('#create-task-form');
  
  form.addEventListener('submit', function(e){
     e.preventDefault();
     console.log(form.elements[0].value);
     
     
  });
  
});

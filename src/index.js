document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let tasks = document.querySelector('#tasks');
  let form = document.querySelector('#create-task-form');
  
  form.addEventListener('submit', function(e){
     e.preventDefault();
     let input = form.elements[0].value;
     tasks.append(<li> + input + </li>)
     
  });
  
});

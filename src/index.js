document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let tasks = document.querySelector('#tasks');
  let form = document.querySelector('#create-task-form');
  
  form.addEventListener('submit', function(e){
     e.preventDefault();
     console.log(form.element[0])
    // let input = form.elements[0].value;
    // tasks.append(input)
     
  });
  
});

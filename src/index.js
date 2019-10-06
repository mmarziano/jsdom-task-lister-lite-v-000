document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let tasks = document.getElementById('#tasks');
  let form = document.querySelector('#create-task-form');
  
  form.addEventListener('submit', function(e){
     e.preventDefault();
     let input = form.elements[0].val;
     console.log(input)
     tasks.append('<li>' + input + '</li>')
     
  });
  
});

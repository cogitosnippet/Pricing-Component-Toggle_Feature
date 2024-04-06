let input = document.getElementById('input-id');

input.addEventListener('click',()=>{
  let year = document.getElementsByClassName('yearly');
  let month = document.getElementsByClassName('monthly');
  if(input.checked){
    for (let index = 0; index < year.length; index++) {
      year[index].style.display = 'none';
    }
    for (let index = 0; index < month.length; index++) {
      month[index].style.display = 'block';
    }
  }else{
    for (let index = 0; index < year.length; index++) {
      year[index].style.display = 'block';
    }
    for (let index = 0; index < month.length; index++) {
      month[index].style.display = 'none';
    }
  }
})
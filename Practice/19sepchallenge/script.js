document.querySelector('button').addEventListener('click',function(){
    validateMyForm();
    validate2();
})


var inputval=document.querySelector('#pass').value.trim();
function validateMyForm()
{
    
    console.log(inputval);
  if(inputval.length<5)
  { 
    alert("validation failed false");
    // returnToPreviousPage();
    // return false;
  }
else{
  alert("validations passed");
//   return true;
}
}
v
function validate2()
{

  for (var ​i = 0; i < inputval.length; i++) 
{
    if (inputval[i] !== inputval[i].toUpperCase())
        {
            alert("validations passed");
    } 
    else {
        alert("validation failed false");;
    }
}​

}
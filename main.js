var button_translate=document.querySelector("#btn-translate");

var input=null; 
var serverURL= "https://api.funtranslations.com/translate/chef.json";


  document.getElementById('user_input').addEventListener('input', function() {
    input = document.getElementById('user_input').value;
    document.getElementById('user_input').placeholder = input;
  
  });
  button_translate.addEventListener("click", function clickEventHandler() {

    console.log("output.innerText "+getTranslationURL(input));
    fetch(getTranslationURL(input))
    .then(response=>response.json())
    .then(json=>{document.getElementById('output').value=json.contents.translated})
    .catch(errorHandler);
  });
function errorHandler(error)
{
    console.log("error occured"+error);
}

  function getTranslationURL(text)
  {
   return serverURL +"?text="+text;
  }
  var output=document.querySelector("#output");
 
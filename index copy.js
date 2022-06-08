let texto1 = document.getElementById('texto1');
let texto2 = document.getElementById('texto2');
let texto3 = document.getElementById('texto3');

function comparador(){
          if(texto1 == texto2){
            let result = text1.localeCompare(text2);
            document.getElementById('test').innerHTML = result; 
          }
}
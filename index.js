    function compare(){
                let string1 = document.getElementById('texto1');
                let string2 = document.getElementById('texto2');
                let result = string1.localeCompare(string2);
                document.getElementById('test').innerHTML = result;
            }
   

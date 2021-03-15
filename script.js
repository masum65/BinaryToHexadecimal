  function convert(){
        let binaryNum = document.getElementById("b_no");
        let num = binaryNum.value;
        let hexNum = parseInt(num,2).toString(16);
        let hexaDecNum= document.getElementById("h_no");
        hexaDecNum.innerHTML =hexNum;
      }
 function add() {
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);
        let sum = (num1 + num2)
        //alert(num1 + " + " + num2 + " = " + sum)
        document.getElementById('result').value = sum;
    }
    function sub() {
        let num1 = Number(document.getElementById("num1").value)
        let num2 = Number(document.getElementById("num2").value)
        let sum = (num1 - num2)
        document.getElementById('result').value = sum;
        //alert(num1 + " - " + num2 + " = " + sum)

    }
    function multi() {
        let num1 = Number(document.getElementById("num1").value)
        let num2 = Number(document.getElementById("num2").value)
        let sum = (num1 * num2)
        document.getElementById('result').value = sum;
        //alert(num1 + " * " + num2 + " = " + sum)
    }
    function div() {
        let num1 = Number(document.getElementById("num1").value)
        let num2 = Number(document.getElementById("num2").value)
        let sum = (num1 / num2)
        document.getElementById('result').value = sum;
        //alert(num1 + " / " + num2 + " = " + sum)
    }

    document.getElementById('sum').value = result;


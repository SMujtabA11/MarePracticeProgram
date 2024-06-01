/*VEGETABLE CODE
var money = prompt("How much money you have");
if (money>=1000)
    {
        var vegetables= prompt("Enter vegetable");
        var price = +prompt("Enter price");
        var kilo = +prompt("How much you wanted");
        var totalPrice = price * kilo;
        alert(`YOUR BILL SIR\n----------------------------------\nYOUR VEGETABLE ${vegetables}\nTotal Kilos ${kilo}\nTotal price of ${kilo} kilo is ${totalPrice}`);
    }
    else{
        alert("sorry you cant buy");
    }*/

   /*even odd checker program 
var number = +prompt("enter number");
if (number%2 == 0)
    {
        alert(`Number checker Program\n**************************\nNumber you have input ${number} : is even`)
    }
    else{
        alert(`Number you have input ${number} : is odd`);
    }*/

    var traficlight = prompt("traffic light konse hn ")
    
    if(traficlight === "red")
        {
            alert(`RUK JAHU`)
        }else if(traficlight === "yellow")
            {
                alert(`ready hu jahu`)
            }else if( traficlight === "green")
                {
                    alert(`jahu`)
                }
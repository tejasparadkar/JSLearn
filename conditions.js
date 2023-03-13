function validateNum() 
{
    let x = document.getElementById("t1").value;
    
    if (x < 1) 
    {
        const message = document.querySelector("div");
        message.innerHTML  = "below the range";

    } 
    else if (x > 0 && x < 21 )
    {
        const message = document.querySelector("div");
        message.innerHTML  = "Good";
    }
    else if (x > 20 && x < 61 )
    {
        const message = document.querySelector("div");
        message.innerHTML  = "Very Good";
    }
    else if (x > 60 && x < 81 )
    {
        const message = document.querySelector("div");
        message.innerHTML  = "Excellent";
    }
    else if (x > 81 )
    {
        const message = document.querySelector("div");
        message.innerHTML  = "out of range";
    }
    else 
    {
        const message = document.querySelector("div");
        message.innerHTML  = "Enter a number";
    }
}
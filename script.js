function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    total = (p * r *y )/1000
    years = y +2020

    document.getElementById("result").innerHTML = "if you despoiy "+p+" at in interst rate of "+r+" You will revice "+ total+" in the year "+years;
   
}
        
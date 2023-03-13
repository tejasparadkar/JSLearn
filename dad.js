var dragValue;
function start()
{
    move1(dad1);
    move2(dad2);
    overlayCheck();
}
function move1(id)
{
    var element = document.getElementById("dad1");
    element.style.position="absolute";
    element.onmousedown = function()
    {
        dragValue = element;
    }
}
function move2(id)
{
    var element = document.getElementById("dad2");
    element.style.position="absolute";
    element.onmousedown = function()
    {
        dragValue = element;
    }
}
document.onmouseup = function(e)
{
    dragValue = null;
}
document.onmousemove = function(e)
{
    var x = e.pageX;
    var y = e.pageY;
    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px"; 
}



  

  
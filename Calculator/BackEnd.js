let history
function dis(val)
{
    document.getElementById("screen1").value+=val;
}
function clearinput()
{
    document.getElementById("screen1").value="";
}
function clearall()
{
    document.getElementById("screen1").value="";
    document.getElementById("screen2").value="";
    document.getElementById("screen3").value="";
}
function solve()
{
    let x = document.getElementById("screen1").value
	let y = eval(x)
	document.getElementById("screen2").value = y
    document.getElementById("screen3").value = history
    history = y
}
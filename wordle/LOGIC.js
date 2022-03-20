let i=1;
/*function dis(val)
{
    if(i == 6 || i == 11 || i == 16 || i == 21 || i == 26){
        setTimeout(function(){
            alert("Word Complete"); 
       }, 200);
    }
    else{
        while(i<=30){
            screen = "screen"+i
            if(document.getElementById(screen).value == "")
                document.getElementById(screen).value +=val;
                i++;
            break;
        }
    }
}
function enter(){
    i++;
}

*/
function dis(val)
{
    if(i == 5 || i == 10 || i == 15 || i == 20 || i == 25 ||i == 30){
        setTimeout(function(){
            alert("Word Complete"); 
       }, 200);
    }
    while(i<=30){
        let screen = "screen"+i;
        if(document.getElementById(screen).innerHTML == "")
            document.getElementById(screen).innerHTML +=val;
            i++;
        break;
    }
    return i;
}
function back()
{
    while(j>=1)
    {
        let screenO = "screen"+j;
        if(document.getElementById(screenO).innerHTML != ""){
            document.getElementById(screenO).innerHTML = ""
        }
        j--;
        console.log(j);
        break;
    }

}
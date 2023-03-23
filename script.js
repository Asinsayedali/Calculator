function cleardisplay(){
    document.getElementById("output").value=""
}
function buttonclick(value1){
      document.getElementById("output").value+=value1
}
function equalbutton(){
    var text=document.getElementById("output").value
    var sum
    sum=eval(text)
    document.getElementById("output").value=sum
}
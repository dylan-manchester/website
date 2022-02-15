var list = document.getElementsByClassName('editableItemList');
var deleteParent = function(){
    this.parentElement.remove();
}
var red = 
    function(){
        var temp = this.classList.toggle('red');
        if (temp){
            var button = document.createElement('button');
            button.innerHTML = "X"
            button.classList 
            button.addEventListener('click',deleteParent);
            button.backgroundColor = "red";
            this.appendChild(button);
        }
        else{
            this.getElementsByTagName('button')[0].remove();
        }
    }
var playground = document.querySelector('ul[name=playground]');
var submitButton = document.getElementById("submitButton");
var playgroundInput = document.getElementById('playgroundInput');
playgroundInput.addEventListener('keypress',addItem);
submitButton.addEventListener('click',addItem);
for (var x=0;x<list.length;x++){
    list[x].addEventListener('click',red);
}
function addItem(event){
    if (event.keyCode==13 || event.type=='click'){
        var li = document.createElement('li');
        var playgroundInput = document.getElementById('playgroundInput');
        var textNode = document.createTextNode(playgroundInput.value);
        li.classList.add('editableItemList');
        li.addEventListener('click',red);
        li.appendChild(textNode);
        playground.appendChild(li);
        playgroundInput.value = '';
    }
}
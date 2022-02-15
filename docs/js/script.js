var list = document.getElementsByClassName('editableItemList');
var deleteParent = function(){this.parentElement.remove();}
var red = 
    function(){
        var temp = this.classList.toggle('red');
        if (temp){
            var button = document.createElement('button');
            button.innerHTML = "X";
            button.classList.toggle('red_bg')
            button.addEventListener('click',deleteParent);
            this.prepend(button);
        }
        else{
            this.getElementsByTagName('button')[0].remove();
        }
    }
var playground = document.getElementById("playgroundList");
var submitButton = document.getElementById("playgroundSubmit");
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
        li.classList.add('show');
        li.addEventListener('click',red);
        li.appendChild(textNode);
        playground.appendChild(li);
        playgroundInput.value = '';
    }
}
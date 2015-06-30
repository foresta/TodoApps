(function(){

    var inputTag = document.getElementById('input');
    var submitBtn = document.getElementById('submit');
    var listWrap = document.getElementById('list_wrap');
    var checkboxes = document.getElementsByClassName('check');

    inputTag.addEventListener('keypress', function(e){
        var key = e.which || e.keyCode;
        if (key == 13){  // 13 is Enter Key
            submitBtn.click();
            return false;
        }
    });

    submitBtn.addEventListener('click', function() {
        var text = inputTag.value;
        if (text == "")
            return false;

        inputTag.value = "";

        var inputCheckBox = document.createElement('input');
        inputCheckBox.type = 'checkbox';
        inputCheckBox.className = 'check';
        inputCheckBox.addEventListener('click', onChecked, false);

        var span = document.createElement('span');
        span.className = "task";
        span.innerText = text;

        var a = document.createElement('a');
        a.className = "btn delete list";
        a.innerText = "削除";
        a.addEventListener('click', deleteTask, false);

        var p = document.createElement('p');
        p.className = "task-wrap";
        p.appendChild(inputCheckBox);
        p.appendChild(span);
        p.appendChild(a);

        var li = document.createElement('li');
        li.appendChild(p);
        listWrap.insertBefore(li, listWrap.firstChild);
    });

    for (var i = 0; i < checkboxes.length;i++){
        checkboxes[i].addEventListener('click', onChecked, false);
    }
  
    function deleteTask(){
        var self = this;
        var list = self.parentNode.parentNode;
        var ul = list.parentNode;
        ul.removeChild(list);
    }

    function onChecked(){
        var self = this;
        var parentTag = self.parentNode;
        if (parentTag.classList.contains('done'))
        {
            parentTag.classList.remove('done');
        }
        else {
            parentTag.classList.add("done");
        }
        return false;
    }
})();

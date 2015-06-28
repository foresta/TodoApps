(function(){

    var inputTag = document.getElementById('input');
    var submitBtn = document.getElementById('submit');
    var listWrap = document.getElementById('list_wrap');
    var checkboxes = document.getElementsByClassName('check');

    submitBtn.addEventListener('click', function() {
        var text = inputTag.value;
        if (text == "")
            return false;

        var li = document.createElement('li');
        li.innerHTML = '<p><input type="checkbox" class="check" />' + text + '</p>';
        listWrap.insertBefore(li, listWrap.firstChild);
    });

    for (var i = 0; i < checkboxes.length;i++){
        checkboxes[i].addEventListener('click', onChecked, false);
    }
    
    function onChecked(){
        var self = this;
        var parentTag = self.parentNode;
        if (parentTag.className == "done")
        {
            parentTag.className = "";
        }
        else {
            parentTag.className = "done";
        }
        return false;
    }
})();

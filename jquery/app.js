(function(){

    var inputTag   = $('#input');
    var submitBtn  = $('#submit');
    var listWrap   = $('#list_wrap');
    var checkboxes = $('.check');

    inputTag.keypress(function(e){
        var key = e.which || e.keyCode;
        if (key == 13) {  // 13 is Enter Key
            submitBtn.click();
            return false;
        }
    });

    submitBtn.on('click', function() {
        var text = inputTag.val();
        if (text == "")
            return false;

        inputTag.val('');

        var inputCheckBox = $('<input>').attr('type', 'checkbox').addClass('check').on('click', onChecked);
        var span = $('<span>').addClass("task").text(text);
        var a = $('<a>').addClass('btn').addClass('delete').addClass('list').text('削除').on('click', deleteTask);
        var p = $('<p>').addClass('task-wrap').append(inputCheckBox).append(span).append(a);
        $('<li>').append(p).prependTo(listWrap);
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

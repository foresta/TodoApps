(function(){

    var inputTag = document.getElementById('input');
    var submitBtn = document.getElementById('submit');
    var listWrap = document.getElementById('list_wrap');

    submitBtn.addEventListener('click', function() {
        var text = inputTag.value;
        if (text == "")
            return false;

        var li = document.createElement('li');
        li.innerHTML = '<p><input type="checkbox" class="check" />' + text + '</p>';
        listWrap.insertBefore(li, listWrap.firstChild);
    });
})();

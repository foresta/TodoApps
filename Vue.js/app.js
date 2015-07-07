 
var listWrap = new Vue({
    el: '#list_wrap',
    data: {
        todos: [
        ]
    },
    methods: {
        deleteTask: function(index) {
            this.todos.$remove(index);         
        },
        toggle: function (item) {
            item.done = !item.done;        
        }
    }
});


var inputWrap = new Vue({
    el: '#input_wrap',
    data: {
        input_task: ""
    },
    methods: {
        addTask: function(){
            if (this.input_task == "") return;
            listWrap.todos.push({ done: false, content: this.input_task});
            this.input_task = "";
        }         
    }

});


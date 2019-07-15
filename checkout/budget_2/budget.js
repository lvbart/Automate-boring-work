var createBtn = $('#createBtn');
var todoListBlock = $('#todoListBlock');
var todo = $("input[name=todo]");
createBtn.on('click' , function(){
      var Today=new Date();
      
      if(todo.val() != ''){
      console.log(todo.val())
      
      var todoListContent = $('<div></div>').addClass('todoListContent')
      
      
      var todoName = $('<div></div>').addClass('todoName')
      todoName.html(todo.val())
      var todoDate = $('<div></div>').addClass('todoDate')
      todoDate.html('created: ' +Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日")
      todoName.append(todoDate)
      
      var btnList = $('<div></div>').addClass('btnList')
      var checkBtn = $('<div></div>').addClass('checkBtn')
      checkBtn.html('<i class="fas fa-check"></i>')
      var delBtn = $('<div></div>').addClass('delBtn')
      delBtn.html('<i class="fas fa-times"></i>')
      btnList.append(checkBtn)
      btnList.append(delBtn)
      
      todoListContent.append(todoName)
      
      todoListContent.append(btnList)
      
      todoListBlock.append(todoListContent)
      checkBtn.on('click' , function(){
            $(this).parent().prev().addClass('checkout')
      })
      
      delBtn.on('click' , function(){
            $(this).parent().parent().fadeOut();
      })
      
      }
      
      })
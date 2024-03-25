$(document).ready(function () {
  
  $("#myForm").on("submit", function (e) {
    e.preventDefault();
    var Input = $(this).serialize();
    Input = Input.replace(/%20/g, ' ');
    let todo = Input.substring(6, Input.length);
    $(".textInput").val("");

    let colorList = ['7f5539','9c6644','b08968','ddb892','e6ccb2','212529','343a40','495057','6c757d','590d22',
    '800f2f','a4133c','c9184a','ff4d6d','718355','87986a','2dc653','208b3a','1a7431','155d27','10451d','76520e',
    'b69121','c9a227','edc531','fad643','ffe169','709775','415d43','111d13','fbc3bc','f38375','f7a399','ef6351',
    '3dccc7','07beb8','ffb3c6','ff8fab','fb6f92','97a97c','97a97c','00406c','3c0663','3c0663','4a0a77','ab51e3',
    '6818a5','1efc1e']
    let color = colorList[parseInt(Math.random() * colorList.length)]


    window.radioClicked = (element) => {
      if($(element).find(".radio").hasClass("hidden") === false) {
        $(element).find('.radio').addClass('hidden')
        $(element).find('.img').removeClass('hidden')
        $(element).find('.todoText').addClass('line-through text-green-600')
        $(element).find('.todoText').removeClass('text-white')
      } else if ($(element).find(".radio").hasClass("hidden") === true){
        $(element).find('.radio').removeClass('hidden')
        $(element).find('.img').addClass('hidden')
        $(element).find('.todoText').removeClass('line-through text-green-600')
        $(element).find('.todoText').addClass('text-white')
      }
    }

    window.deleteTodo = (element) => {
      $(element).remove();
    }

    window.editTodo = (element) => {
      if($(element).find('.edit').hasClass('hidden') === false) {
        let todoText = $(element).find('.todoText').text()
        $(element).find('.todoText').addClass('hidden')
        $(element).find('.edit').addClass('hidden')
        $(element).find('.inputEdit').removeClass('hidden')
        $(element).find('.save').removeClass('hidden')
        $(element).find('.inputEdit').val(todoText)
      }
    }

    window.saveTodo = (element) => {
      if($(element).find('.save').hasClass('hidden') === false) {
        let todoText = $(element).find('.inputEdit').serialize()
        let todo = todoText.substring(7, todoText.length);
        todo = todo.replace(/%20/g, ' ');

        $(element).find('.todoText').removeClass('hidden')
        $(element).find('.edit').removeClass('hidden')
        $(element).find('.inputEdit').addClass('hidden')
        $(element).find('.save').addClass('hidden')
        $(element).find('.todoText').text(todo)
      }
    }

    $('.main1').append(`
    <div class="boxWithRadio w-[50%] min-h-[50px] flex justify-between items-center bg-[#000000] rounded-md overflow-hidden">

      <div class="radioBtn rounded-tl-md rounded-bl-md w-[10%] flex justify-center items-center">
          <div onclick=radioClicked(this.parentNode.parentNode) class="radio w-[20px] h-[20px] rounded-full bg-white"></div>
          <img onclick=radioClicked(this.parentNode.parentNode) class=" img w-[20px] h-[20px] bg-cover hidden" src="./assets/check.png" alt="">
      </div>
  
      <div class="boxes w-[90%] min-h-[50px] flex justify-between items-center" style="background-color: #${color};">
    
          <p class="todoText text-xl text-white font-semibold ml-2 w-[500px] break-all">${todo}</p>
          <input class="inputEdit bg-[#444444] px-3 outline-none text-xl hidden h-[45px] w-[70%] border-2 rounded-md" type="text" name="Input2">
          <div class="flex justify-center items-center">
              <button onclick=editTodo(this.parentNode.parentNode) class="edit bg-black mr-2 h-[35px] pl-2 pr-2 rounded-[5px]">Edit</button>
              <button onclick=saveTodo(this.parentNode.parentNode) class="save bg-black mr-2 h-[35px] pl-2 pr-2 rounded-[5px] hidden">Save</button>
              <button onclick=deleteTodo(this.parentNode.parentNode.parentNode) class="bg-black mr-2 h-[35px] pl-2 pr-2 rounded-[5px]">Delete</button>
          </div>
    
      </div>
  
    </div>`)

  });
});


$(function(){

    //list
    $("#list-form nutton[type='submit']").click((event)=>{
        event.preventDefault()
        $getJSON("./studentlist.json", function(data){
            $.each(data,function(ud,name){
                $('#list-output').append('<p>'+sid+':'+sname+'</p>')
            })
        })
    })

    //search
    $("#search-from button[type='submit']").click((event) => {
		event.preventDefault()
		
		$('#search-output').html("")
		var search_id = $("#search-from input[name=sid]").val()
		$.getJSON("./students.json", function(data) {
			var find_student = false
			if(!search_id || search_id == " "){
				alert('There is no input!')
				find_student = true
				}
			$.each(data, function(id, name){
				if(search_id == id){
					$('#search-output').append('<h1>'+'Hello,'+name+'</h1>')
					find_student = true
			  }
			})
			if(find_student == false){alert('There is no'+search_id)}
        })
	})

    //add
    $("#add-form button[type = 'submit']").click((event) => {
		event.preventDefault()
		
		$('#add-output').html("")
		var input_id = $('#add-form input[name=sid]').val()
		var input_name = $('#add-from input[name=sname]').val()
		
		if(!input_id || !input_name){
			alert('lack of input!')
		}
		
		else{
			$.post('./add', {
				add_id: input_id,
				add_name: input_name,
				},(data) => {
					$("#add-output").html(data)})
		}
	})

    //delete
    $("#delete-from button[type = 'submit']").click((event) => {
		event.preventDefault()
		
		$('#delete-ourput').html("")
		var del_input_id = $("#delete-from input[name=sid]").val()
		
		if(!del_input_id){
			alert('lack of input!')
		}
		
		else{
			$.post('./del', {
			del_id: del_input_id
			}, (data) => {
			$("#delete-outout").html(data)})
		}
	})

})


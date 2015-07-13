var io = require('socket')



function getData(){
	var input = document.getElementById('msg')
	$('#chat-messages ul').append('<li class="li">'+input.value+'</li>')


	console.log(input.value)
}
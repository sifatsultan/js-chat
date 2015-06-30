function getData(){
	// var input = document.getElementById('msg')
	// var ul = document.getElementById("display")
	// var li = document.createElement("li");
	// li.appendChild(document.createTextNode(<span class="chat-text">input.value</span>))
	// ul.appendChild(li);

	/*
	<div id="header">
	    <ul class="tabs">
	        <li><a href="/user/view"><span class="tab">Profile</span></a></li>
	        <li><a href="/user/edit"><span class="tab">Edit</span></a></li>
	    </ul>
	</div>


	$("#header ul").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>');

	*/


	/*
	
    <div id='chat-messages'>
        <ul class='column-pad' id="display"></ul>
    </div>
	*/
	var input = document.getElementById('msg')
	$('#chat-messages ul').append('<li class="li">'+input.value+'</li>')


	console.log(input.value)
}
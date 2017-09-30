// Grab the articles as a json
$.getJSON("/news", data => {
  // For each one
  data.forEach( item => {
  	$("#middle").append(
    	`<p data-id="${item.id}"> 
    	${item.title} 
    	<br/> ${item.link} </p> 
    	<button class="btn-large" id="saveArticle"> Save Article </button>`
    );
  }) 
});

$(document).on('click','#saveArticle', event => {

	//save the title and link to a variable

	//take that object variable and pass it to the ajax
	//access that object from the server.js through the matching route and make sure to use 
	// req.body.(object property name)
	$.ajax({
		method: "POST",
		url: '/',
		dataType: 'json',
		data:"something"
	}).done(data => alert("Article has been saved"))
})


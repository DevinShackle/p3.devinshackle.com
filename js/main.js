
$(document).ready(function() {

	/**
	*	Datums
	**/
	var fontsList = ['Georgia, serif',
		'"Palatino Linotype", "Book Antiqua", Palatino, serif',
		'"Times New Roman", Times, serif',
		'Arial, Helvetica, sans-serif',
		'"Arial Black", Gadget, sans-serif',
		'"Comic Sans MS", cursive, sans-serif',
		'Impact, Charcoal, sans-serif',
		'"Lucida Sans Unicode", "Lucida Grande", sans-serif',
		'Tahoma, Geneva, sans-serif',
		'"Trebuchet MS", Helvetica, sans-serif',
		'Verdana, Geneva, sans-serif',
		'"Courier New", Courier, monospace',
		'"Lucida Console", Monaco, monospace'];

	var defaultText = "The quick brown fox jumped over the lazy dog"
		
	/**
	*	Set up example blocks
	**/	
	fontsList.forEach(function(font) {
		var name = font.split(',')[0];
		if(name.substring(0,1) == '"')
			name = name.substring(1,name.length-1); 

		var toAdd = $('<div class="example">'+ name +'<p>' + defaultText + '</p></div>');
		toAdd.css({'font-family':font});

		$('#examples').append(toAdd);
	});


	/**
	*	Change text color
	**/
	$("input[name=textcolor]").bind("change", function() {
		var textColor = $(this).css('background-color'); 
		$('.example').css({'color':textColor});
	});

	/**
	*	Change text background color
	**/
	$("input[name=backgroundcolor]").bind("change", function() {
		var backgroundColor = $(this).css('background-color');
		$('.example').css({'background-color':backgroundColor});
	});

	/**
	*	Detect change in drop-down text size chooser
	**/
	$("#sizeSelect").bind("change", function() {
		var textSize = $("select option:selected").text();
		var target = $(".example");
		var boxSize = parseInt(textSize.substring(0,textSize.length-2)) * 10;

		target.css({"font-size":textSize});

		//update box size too
		target.css({"height": boxSize});
		target.css({"width": boxSize});

	});

	/**
	*	Text effect options 
	**/

	//bold
	$("#boldText").change(function() {
		var target = $(".example");
		if($(this).is(":checked")){
			target.css("font-weight", "bold");
		} else {
			target.css("font-weight", "normal");
		};
	});

	//italics
	$("#italicText").change(function() {
		var target = $(".example");
		if($(this).is(":checked")){
			target.css("font-style", "italic");
		} else {
			target.css("font-style", "normal");
		};
	});

	//underline
	$("#underlineText").change(function() {
		var target = $(".example");
		if($(this).is(":checked")){
			target.css("text-decoration", "underline");
		} else {
			target.css("text-decoration", "none");
		};
	});

	/**
	*	Change example text
	**/
	$('#exampleText').on('keyup change', function(event) {
	var exampleText = $(this).val();
	$('.example > p').html(exampleText); //this will set the content of the p element in each .example div 
	});


});

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
	*	Change text size
	**/
	//NEED TO VALIDATE FOR NUMERIC INPUT BETWEEN 10 AND 100
	$("input[name=textsize]").bind("change", function() {
		var textSize = $(this).val();
		$('.example').css({'font-size':textSize + "px"});
	});

	/**
	*	Change text box height
	**/
	$("input[name=textheight").bind("change", function() {
		var textHeight = $(this).val();
		$('.example').css({'height':textHeight + 'px'});
	});


	/**
	*	Change text box width
	**/
	$("input[name=textwidth").bind("change", function() {
		var textWidth = $(this).val();
		$('.example').css({'width':textWidth + 'px'});
	});

	/**
	*	Change example text
	**/
	$('#exampleText').on('keyup change', function(event) {
	var exampleText = $(this).val();
	$('.example > p').html(exampleText); //this will set the content of the p element in each .example div 
	});


});
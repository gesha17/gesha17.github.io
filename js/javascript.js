const fadeTime = 500;
var username = "Anonymous";
//Image click popup
$(document).on('click', '.card-img-top', function (event){
	const recipe = $(event.currentTarget).siblings('.recipe').html();
	const imageSource = $(event.currentTarget).attr('src');
	$('.modalImage').attr("src", imageSource);
	$('.modalRecipe').html(recipe);
});

//Comment button popup
$(document).on('click', '.cardbutton .btn', function (event) {
	const titleName = $(event.currentTarget).parent().siblings('.card-body').children('.card-title').children().text();
	$('.modal-title').text(titleName);
  var index = 0;
	while(localStorage.getItem(titleName+ String(index)) != null){
		index++;
	}

	var $fullCom = $("#fullComment").clone();
	$fullCom.css('display','block');
  $("#commentSection").empty();
	while(index>0){
		$fullCom.html($fullCom.html() + localStorage.getItem(titleName + String(index)));
		index--;
	}
	$fullCom.appendTo("#commentSection");
});

//share button comment Section
$(document).on('click', '#buttonShare', function (event){
	//TODO:add the comments to the local storage
	var cocktailName = $("#CommentSectionTitle").text();
	if(localStorage.getItem(cocktailName + "0") == null){
		localStorage.setItem(cocktailName + "0", "0");
	}
	var index=0;
	while(localStorage.getItem(cocktailName+ String(index)) != null){
		index++;
	}
	index++;
	const comment = $('#commentTyped').val();
	$(event.currentTarget).siblings('#fullComment').children("#commentForm").children('.media-body').children('#userComment').text(comment);
	$(event.currentTarget).siblings('#fullComment').children("#commentForm").children('.media-body').children("#commentUserName").html(username);
  var $fullCom = $("#fullComment").clone();
	$fullCom.css('display','block');
	localStorage.setItem(cocktailName + String(index), $fullCom.html());
	$("#commentSection").empty();
	while(index>0){
		$fullCom.html($fullCom.html() + localStorage.getItem(cocktailName + String(index)));
		index--;
	}
	$fullCom.appendTo("#commentSection");
});

//Pages switch
$(document).on('click', '#singInButton', function (event){
	username = $('#loginUsername').val();
	const password = $('#loginPass').val();
	if(username !== "" && password !== "" ){
		const message  = 'Welcome ' + username + '!';
		$('#loginButtonNav').css('display', 'none');
		$('#UsernamePass').text(message).css('display', 'block');
		$('.dropdown-toggle').dropdown('toggle');
		$('#profileButton').css('display', 'flex');
  }
});

$(document).on('click', '#buttonShots', function(event){
	$('#MostPopular').fadeOut(fadeTime);
	$('#Specials').fadeOut(fadeTime);
	setTimeout(function(){
		$('#ShotsPage').fadeIn(fadeTime).css('display', 'flex');
	}, fadeTime);
});

$(document).on('click', '#buttonMostPopular', function(event){
	$('#ShotsPage').fadeOut(fadeTime);
	$('#Specials').fadeOut(fadeTime);
	setTimeout(function(){
		$('#MostPopular').fadeIn(fadeTime).css('display', 'flex');
	}, fadeTime);
});

$(document).on('click', '#buttonSpecials', function(event){
	$('#MostPopular').fadeOut(fadeTime);
	$('#ShotsPage').fadeOut(fadeTime);
	setTimeout(function(){
		$('#Specials').fadeIn(fadeTime).css('display', 'flex');
	}, fadeTime);
});

$(document).on('click','#profileButton', function(event){
	$('.modalProfileName').html(username + "'s Profile");

})

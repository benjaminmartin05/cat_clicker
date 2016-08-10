// here is our dom that has the cats array
	//trying to create new lists with div items in the unordered list dropdown menu
	var catCollector = [];

		function addLists(){
		for (var i = 0; i < catCollector.length; i++) {
			catCollector[i] = new Object();
		};
	}
	addLists();

	catCollector[0] = {
		name:"White Cat",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/white-cat.jpg",
		clickCount: 0
	}
	catCollector[1] = {
		name:"Yellow Cat",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/yellow-cat.jpg",
		clickCount: 0
	}
	catCollector[2] = {
		name:"Black Cat",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/black-cat.jpg",
		clickCount: 0
	}
	catCollector[3] = {
		name:"Mad Cat",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/mad-cat.jpg",
		clickCount: 0
	}
	catCollector[4] = {
		name:"Sleepy Cat",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/sleepy-cat.jpg",
		clickCount: 0
	}


//octopus....get info from model and give it to view
	var octopus = {
		getAllNames: function(){
			var names =[];
			for(var i = 0; i < catCollector.length; i++){
				names.push(catCollector[i].name);
			}
			return names;
		},
		getAllSrc: function(){
			var src =[];
			for(var i = 0; i < catCollector.length; i++){
				src.push(catCollector[i].src);
			}
			return src;
		},
		getAllCount: function(){
			var count =[];
			for(var i = 0; i < catCollector.length; i++){
				count.push(catCollector[i].clickCount);
			}
			return count;
		},
		adminButton: function(){

			$('#admin').hide();
			$('#adButton').click(function(){
			    $("#admin").show();
			});
			$('#cancel').click(function(){
				$("#admin").hide();
			})
		},
		submitButton: function(){
			$( "#form1" ).submit(function( event ) {
			  var name = $('input[name="new name"]').val();
			  var url = $('input[name="new url"]').val();
			  var count = $('input[name="new count"]').val();

			  $("#name").empty();
			  $('#count').empty();
			  $('#name').append(name);
			  $('#count').append(count);

			  var img = document.getElementById('img');
			  img.src = url;

			  $('img').on('click', function() {
				count++;
				$('#count').empty();
				$('#count').append(count);
			  })
			  $("#admin").hide();
			  event.preventDefault();
			});
		}
	}
//view

	var listView = {
		//collect info to create a button
		init: function(){
			octopus.getAllNames();
			listView.render();
		},
		//add buttons to page
		render: function(){
			picView.init();
			var names = octopus.getAllNames();
			var srcs = octopus.getAllSrc();
			var counts = octopus.getAllCount();

			for(var i = 0; i < names.length; i++){
				var name = names[i];
				var src = srcs[i];
				var count = counts[i];
				var elem = document.createElement('li');
			    elem.textContent = name;
			    $('#dropMenu').append(elem);

			    elem.addEventListener('click', (function(nameCopy, srcCopy, countCopy) {
			        return function() {
			        	$("#name").empty();
			    		$('#count').empty();
						$('#name').append(nameCopy);
						$('#count').append(countCopy);
						var img = document.getElementById('img');
						img.src = srcCopy;
						var count = countCopy;
						$('input[name="new name"]').val(nameCopy);
			    		$('input[name="new url"]').val(srcCopy);
			    		$('input[name="new count"]').val(count);
				        $('img').on('click', function() {
						    count++;
						    $('#count').empty();
						    $('#count').append(count);
						})
					};
				})(name,src,count));
			}
		}
	}


	// lets render onclick each individual picture here
	var picView = {
		init: function(){
			octopus.getAllSrc();
			octopus.getAllCount();
		},
		// render: function() {
		// }
	};

listView.init();

	var adminView = {
		init: function(){

		},
		render: function(){
			octopus.adminButton();
			octopus.submitButton();
		}
	};
adminView.render();


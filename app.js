//cat_clicker js broken down into dom(document object model), octopus(model/view connectors), view/render(show on the page)

//separate out the view entirely from the model, never let them connect directly with each other
//allow an octopus to be the communication between the two

//build 2 views, one for the catList and one for the detailed view


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
		buttonClass: "cat_button0",
		name:"White Cat",
		id:"cat1",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/white-cat.jpg",
		counter:"counter1",
		clickCount: 0,
		pic_id:"catPic1"
	}
	catCollector[1] = {
		buttonClass: "cat_button1",
		name:"Yellow Cat",
		id:"cat2",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/yellow-cat.jpg",
		counter:"counter2",
		clickCount: 0,
		pic_id:"catPic2"
	}
	catCollector[2] = {
		buttonClass: "cat_button2",
		name:"Black Cat",
		id:"cat3",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/black-cat.jpg",
		counter:"counter3",
		clickCount: 0,
		pic_id:"catPic3"
	}
	catCollector[3] = {
		buttonClass: "cat_button3",
		name:"Mad Cat",
		id:"cat4",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/mad-cat.jpg",
		counter:"counter4",
		clickCount: 0,
		pic_id:"catPic4"
	}
	catCollector[4] = {
		buttonClass: "cat_button4",
		name:"Sleepy Cat",
		id:"cat5",
		src:"C:/Users/CarolinaBlue/Desktop/udacity/p.5/cat_clicker/sleepy-cat.jpg",
		counter:"counter5",
		clickCount: 0,
		pic_id:"catPic5"
	}


//lets get started here with our octopus




// $(function(){
	//here will be an object of functions to run connecting dom and view
	var octopus = {
		// get info from dom to create button catCollector[selectedCat].id,catCollector[selectedCat].name
		catButtonInfo: function(){
						for (var i = 0; i < catCollector.length; i++) {
			    // This is the cat we're on...
			    var cat = catCollector[i];

			    // We're creating a DOM element
			    var elem = document.createElement('div');
			    elem.textContent = cat.name;
			    $('#dropMenu').append(elem);
			    $(elem).each(function(i) {
				    $(this).attr('id', cat.pic_id);
				    // You can also add more code here if you wish to manipulate each IMG element further
				});
			    //this doesnt need to be a part of the cat button info function
				elem.addEventListener('click', (function(catCopy) {
			        return function() {
		        		$("#placeholder").empty();
			        	var name = $('<div id="'+catCopy.id+'">Here is the '+catCopy.name+'</div>');
						var pic = $('<img id="'+catCopy.pic_id+'" src='+catCopy.src+' />');
						$('#placeholder').append(name,pic);
						$('#placeholder').append('<div id="'+catCopy.counter+'">Is this showing</div>');

						var count = 0;
				        $('img').on('click', function() {
						    count++;
						    $('#'+catCopy.counter+'').empty();
						    $('#'+catCopy.counter+'').append(count);
						})
					};
				})(cat));

			}

		},
		clickCat: function(cat){
			console.log("test");
			// 				elem.addEventListener('click', (function(catCopy) {
			//         return function() {
		 //        		$("#placeholder").empty();
			//         	var name = $('<div id="'+catCopy.id+'">Here is the '+catCopy.name+'</div>');
			// 			var pic = $('<img id="'+catCopy.pic_id+'" src='+catCopy.src+' />');
			// 			$('#placeholder').append(name,pic);
			// 			$('#placeholder').append('<div id="'+catCopy.counter+'">Is this showing</div>');

			// 			var count = 0;
			// 	        $('img').on('click', function() {
			// 			    count++;
			// 			    $('#'+catCopy.counter+'').empty();
			// 			    $('#'+catCopy.counter+'').append(count);
			// 			})
			// 		// octopus.clickCat();
			// 		};
			// 	})(cat));
		},

		init: function() {
            listView.render();
            picView.render();
        }
            // document.body.appendChild(elem);
    // $('#drop').append(elem);

	};

	//lets render the cat list view for the page here
	var listView = {
		//collect button information
		init: function(){
			octopus.catButtonInfo();
		},
		//add buttons to page
		render: function(){
			listView.init();
		}
	};

	//lets render onclick each individual picture here
	var picView = {
		init: function(){
			octopus.clickCat();
		},
		render: function(){
			picView.init();

		}
	};

	octopus.init();
// });
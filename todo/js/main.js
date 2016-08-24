(function ($)
{
	// Get DOM elements
	var todoDom = document.querySelector('#todo'),
		completedDom = document.querySelector('#completed');

	
	// Initialize the app
	var init = function ()
	{
		// Needed to trigger the "Add this modal"
		$('.modal-trigger').leanModal();
		
		// Load Data
		api.loadData().done(function (res)
		{
			api.setData(res);
			
			// Load DOM
			loadDom(res);
		});

		// Onclick events
		onclickEvents();
	};

	// Load Todo and Completed dom elements
	var loadDom = function (data)
	{
		// load domElement, with property, from the given data
		view.load(todoDom, 'todo', data);
		view.load(completedDom, 'completed', data);
	};

	var onclickEvents = function ()
	{
		// Event listener for Add New 

		// Event listener for Checkbox in todo list

		// Event listener for Checkbox in completed list

		// Event listener for Delete button
	};

	init();

})(jQuery);
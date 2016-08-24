var api = function ()
{
	var data;

	// Load data from API
	function loadData ()
	{	
		var deferredObject = $.Deferred();
		$.get('http://www.json-generator.com/api/json/get/clpOtzubKG?indent=4', function(response)
	 	{
	 		deferredObject.resolve(response); 
	 	});
	 	return deferredObject.promise();
	};

	// Get data
	function getData ()
	{
		return data;
	}

	// Set data
	function setData(updatedData)
	{
		data = updatedData;
	}

	// Remove Object
	function remove()
	{

	}

	// Add Object
	function add()
	{

	}

	return {
		getData: getData,
		setData: setData,
		loadData: loadData,
		remove: remove,
		add: add
	}
}();
var view = function()
{
	// Get HTML 
	function _getHtml(prop, data)
	{
		if(data && data[prop] && data[prop].length > 0)
		{
			return _createUl(data[prop]);
		}
		else
		{
			return '<h5>'+constants.errorMessage[prop]+'</h5>'
		}
	}

	// Create UL
	function _createUl(array, ul)
	{
		if (array.length === 0)
		{
			return ul;
		}
		else
		{ 
			// Create UL if ul is not created yet
			if (!ul)
			{
				ul = document.createElement('ul');
				ul.className = 'collection';
			}

			// Create li element
			var li = document.createElement('li');
			li.className = 'collection-item';

			// Create input element
			var input = document.createElement('input');
			input.className = 'filled-in';
			input.type = 'checkbox';
			input.id = 'item-'+array[0].id;

			// Create label 
			var label = document.createElement('label');
			var labelText = document.createTextNode(array[0].value);
			label.appendChild(labelText)
			label.setAttribute('for', input.id);

			// Create anchor tag
			var anchor = document.createElement('a');
			anchor.href = "#";

			// Create icon 
			var icon = document.createElement('i');
			icon.className = "material-icons";
			var iconText = document.createTextNode('delete');
			icon.appendChild(iconText);

			// Append icon into anchor
			anchor.appendChild(icon);

			// Append input, label and icon to li
			li.appendChild(input);
			li.appendChild(label);
			li.appendChild(anchor);

			ul.appendChild(li);
			array.shift();

			return _createUl(array, ul);
		}
	}

	// Load created HTML into the DOM element
	function load(domEle, prop, data)
	{
		var html = _getHtml(prop, data);
		domEle.appendChild(html);
	}

	return {
		load: load
	}
}();
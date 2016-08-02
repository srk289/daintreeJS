function submitAns()
{
	var total = 1;
	var score = 0;
	var q1 = document.forms['quiz']['q1'].value;
	// var q2 = document.forms['quiz']['q2'].value;

	// alert(q1);

	// validate
	if (q1 === null || q1 === '')
	{
		alert('You missed question q1');
		return false;
	}

	// for (var i=1; i<=5; i++)
	// {
	// 	if (eval('q'+i) === null || eval('q'+i) === '')
	// 	{
	// 		alert('You missed question '+ i);
	// 	}
	// }

	// ans
	// var ans = ['b', 'a', 'd', 'b', 'd'];

	if (q1 === 'b')
	{
		score++;
	}

	document.getElementById('result').innerHTML = 'you scored '+score+' out of '+total;

	return false;
}
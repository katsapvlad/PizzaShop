function add(id) 
{	
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x=x*1+1;
	window.localStorage.setItem(key, x);
	alert('Items in your cart: ' + cart_get_number_of_items());
	update_orders_input();
}

function something() 
{
	var x = window.localStorage.getItem('aaa');
	x=x*1+1;
	window.localStorage.setItem('aaa', x);
	alert(x);
}

function cart_get_number_of_items() 
{
	var count = 0;
	for(var i = 0; i < window.localStorage.length; i++) 
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if(key.indexOf('product_')==0)
		{
			count = count + value*1;
		}
	}
	return count;
}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}


function cart_get_orders() 
{
	var orders = '';
	for(var i = 0; i < window.localStorage.length; i++) 
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if(key.indexOf('product_')==0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}
	return orders;
}
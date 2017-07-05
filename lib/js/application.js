'use strict';
(function(){	
	var itemslist = [];
	$('#addList').click(function(e){
		var item = $('#itemname').val();
		if(item == '')
		{	alert('Cannot be empty!')
			return false;
		} else {
			e.preventDefault();
			itemslist.push(item);						
			update(item);			
		}			
	})

	var update = function(itemname){
		$('#itemname').val('');
		$('#shopList').append("<section class='items-list'>"+itemname+"</section>")
	}

	$('body').on('click','.items-list',function(){
		$(this).toggleClass('done')
	})

})(window);
	
/*  Author Details
    ==============
    Author: Ranjith Pandi

    Author URL: http://ranjithpandi.com

    Attribution is must on every page, where this work is used.

    For Attribution removal request. please consider contacting us through http://ranjithpandi.com/#contact
*/

;(function($){
	$.fn.caps = function (options) {

		var defaults = $.extend({"firstChar": "start"}, options);

		var patt;
		if(defaults.firstChar == "all"){
			patt = new RegExp("\\b[a-z]", "g");
		}else{
			patt = new RegExp("^[a-z]", "g");
		}

		$.each(this, function () {
			var str = $(this).val();
			str = str.toLowerCase().replace(patt, function(letter) {
				return letter.toUpperCase();
			});
			$(this).val(str);
		});
		return this;
	};
})(jQuery);
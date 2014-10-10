/*  Author Details
	==============
	Author: Ranjith Pandi

	Author URL: http://ranjithpandi.com

	Attribution is must on every page, where this work is used.

	For Attribution removal request. please consider contacting us through http://ranjithpandi.com/#contact
*/

;(function($){
	$.fn.linkNewWindow = function (options) {

		var defaults = $.extend({"samedomain": true}, options);

		$.each(this, function () {
			$(this).click(function(){
				var href = this.href;
				if(defaults.samedomain || (!defaults.samedomain && href.indexOf(window.location.host) == -1)){
					window.open(href);
					return false;
				}
				return true;
			});
		});
		return this;
	}

})(jQuery);
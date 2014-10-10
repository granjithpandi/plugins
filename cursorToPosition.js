/*  Author Details
    ==============
    Author: Ranjith Pandi

    Author URL: http://ranjithpandi.com

    Attribution is must on every page, where this work is used.

    For Attribution removal request. please consider contacting us through http://ranjithpandi.com/#contact
*/

;(function($){
	$.fn.cursorToPosition = function(start, end) {
		return this.each(function() {
			if (this.setSelectionRange) {
				this.focus();
				this.setSelectionRange(start, end);
			} else if (this.createTextRange) {
				var range = this.createTextRange();
				range.collapse(true);
				range.moveStart('character', start);
				range.moveEnd('character', end);
				range.select();
			}
		});
	};
})(jQuery);
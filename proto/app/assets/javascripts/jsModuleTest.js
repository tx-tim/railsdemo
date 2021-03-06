console.log("js module test");

var moduleTest = (function(){
	var message = "howdy";

	return {
		moduleTest1: function(){
			return message;
		},

		moduleTest2: function(){
			var x = this.moduleTest1() + " baby steps";
			console.log(x);
			return this;
		},

	}
})();

var YourStore = function(){
	var self = this;
	this.isActive = false;

	return {
		init: function(){
			$('.your-store-dropdown').appendTo('.top-bar-container');
		},

		getIsActive: function(){
			return self.isActive;
		},

		setIsActive: function(activeSwitch){
			if(activeSwitch == true)
				self.isActive = true;
			else
				self.isActive = false;
		},

		toggleDetails: function(){
			if(self.isActive){
				self.isActive = false;
				this.hideDetails();
			}
			else{
				self.isActive = true;
				this.showDetails();
			}	
		},

		hideDetails: function(){
			if(self.isActive != true){
				$('.your-store-dropdown').removeClass("active");
			}
		},

		showDetails: function(){
			if(self.isActive == true){
				var dropdownPosition = this.determinePosition();
				$('.your-store-dropdown')
					.css({
							'top': dropdownPosition.top, 
							'left': dropdownPosition.left
						})
					.addClass("active");
			}
		},

		determinePosition: function(){
			return $('.local-store').position();
		}
	}
}

$(function(){
	moduleTest.moduleTest2();
	window.yourStore = new YourStore();
	yourStore.init();

	$('.page-headline').on('click',function(e){
		e.preventDefault();
		moduleTest.moduleTest2()}
	);

	$('.your-store').on('click', function(){
		yourStore.toggleDetails();
	})	

	$('.your-store-dropdown').on('click', function(){
		yourStore.toggleDetails();
	})


});
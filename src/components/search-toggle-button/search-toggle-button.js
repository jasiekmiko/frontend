HMCTSFrontend.SearchToggleButton = function(options) {
  this.options = options;
  this.toggleButton = $('<button class="hmcts-search-toggle-button" type="button" aria-haspopup="true" aria-expanded="false">'+this.options.toggleButton.text+'</button>');
	this.toggleButton.on('click', $.proxy(this, 'onToggleButtonClick'));
  this.options.toggleButton.container.append(this.toggleButton);
  this.options.search.container.addClass('hmcts-hidden');
};

HMCTSFrontend.SearchToggleButton.prototype.onToggleButtonClick = function() {
  if(this.toggleButton.attr('aria-expanded') == 'false') {
    this.toggleButton.attr('aria-expanded', 'true');
    this.options.search.container.addClass('hmcts-search--showing');
    this.options.search.container.find('input').first().focus();
	} else {
		this.options.search.container.removeClass('hmcts-search--showing');
		this.toggleButton.attr('aria-expanded', 'false');
	}
};
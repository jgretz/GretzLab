class TalksController extends BaseController
	@register 'TalksController'
	
	constructor: ->
		super(arguments...)
		
		@setMoneyImage 'talks'
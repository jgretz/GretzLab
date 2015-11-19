class KitchenController extends BaseController
	@register 'KitchenController'
	
	constructor: ->
		super(arguments...)
		
		@setMoneyImage 'kitchen'
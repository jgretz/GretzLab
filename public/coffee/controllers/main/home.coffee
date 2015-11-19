class HomeController extends BaseController
	@register 'HomeController'

	constructor: ->
		super(arguments...)
		
		@setMoneyImage 'home'
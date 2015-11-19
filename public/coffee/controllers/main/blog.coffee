class BlogController extends BaseController
	@register 'BlogController'
	
	constructor: ->
		super(arguments...)
		
		@setMoneyImage 'blog'
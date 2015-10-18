class LabController extends BaseController
	@register 'LabController'

	constructor: ->
		super(arguments...)
		
		@setMoneyImage 'lab'
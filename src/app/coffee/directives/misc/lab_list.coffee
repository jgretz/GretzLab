class LabListController extends BaseController
	@inject 'labService', 'renderListService'

	link: (scope, element, attrs) ->
		@labService.itemsBySource(attrs.source).then (items) =>
			@renderListService.renderIn(items, element, scope)

window.app.registerElementDirective 'labList', LabListController, 'misc/lab_list.html'
class LabBenchController extends BaseController
	@inject 'labService', 'renderListService'

	link: (scope, element, attrs) ->
		@labService.itemsBySource(attrs.source).then (items) =>
			@renderListService.renderIn(items, element, scope)

window.app.registerElementDirective 'labBench', LabBenchController, 'misc/lab_bench.html'
class ExperimentListController extends BaseController
	@inject 'experimentService', 'renderListService'

	link: (scope, element, attrs) ->
		@experimentService.experimentsBySource(attrs.source).then (experiments) =>
			@renderListService.renderIn(experiments, element, scope)

window.app.registerElementDirective 'experimentList', ExperimentListController, 'misc/experiment_list.html'
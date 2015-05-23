class ExperimentListController extends BaseController
	@inject 'experimentService'

	link: (scope, elemnent, attrs) ->
		scope.experiments = []

		@experimentService.experimentsBySource(attrs.source).then (experiments) ->
			scope.experiments = experiments

			console.log experiments

window.app.registerElementDirective 'experimentList', ExperimentListController, 'misc/experiment_list.html'
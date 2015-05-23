class ExperimentTitleListController extends BaseController
	@inject 'experimentService', 'renderListService'

	link: (scope, element, attrs) ->
		scope.items = []

		@experimentService.experimentsBySource(attrs.source).then (experiments) =>
			groups = Enumerable.From(experiments).GroupBy((x)=>x.type).OrderBy((x)=>x.sort).ToArray()

			items = []
			for group in groups
				items.push
					type: 0
					count: group.Count()
					title: Humanize.pluralize(2, Humanize.titleCase(group.Key()))

				for exp in group.source
					items.push
						type: 1
						title: exp.title

			scope.items = items

window.app.registerElementDirective 'experimentTitleList', ExperimentTitleListController, 'misc/experiment_title_list.html'
class LabTitleListController extends BaseController
	@inject 'labService', 'renderListService'

	link: (scope, element, attrs) ->
		scope.items = []

		@labService.itemsBySource(attrs.source).then (rawItems) =>
			groups = Enumerable.From(rawItems).GroupBy((x)=>x.category).ToArray()

			items = []
			for group in groups
				items.push
					type: 0
					count: group.Count()
					title: Humanize.pluralize(2, Humanize.titleCase(group.Key()))

				for exp in Enumerable.From(group.source).OrderBy((x)=>x.sort).ToArray()
					items.push
						type: 1
						title: exp.title

			scope.items = items

window.app.registerElementDirective 'labTitleList', LabTitleListController, 'misc/lab_title_list.html'
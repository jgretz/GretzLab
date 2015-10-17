class LabShelfController extends BaseController
	@inject 'labService', 'renderListService'

	link: (scope, element, attrs) ->
		scope.items = []

		@labService.itemsBySource(attrs.source).then (rawItems) =>
			groups = rawItems.groupBy("category")
			items = []

			for key in groups
				group = groups[key].sort('sort')

				console.log key
				console.log group

				items.push
					type: 0
					count: group.length
					title: Humanize.pluralize(2, Humanize.titleCase(key))

				for exp in group
					items.push
						type: 1
						title: exp.title

			scope.items = items

window.app.registerElementDirective 'labShelf', LabShelfController, 'misc/lab_shelf.html'
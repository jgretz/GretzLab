class ContentListController extends BaseController
	@inject 'contentService'

	link: (scope, element, attrs) ->
		scope.items = []
		source = attrs.source

		@contentService.itemsBySource(source).then (items) =>
			scope.title = Humanize.titleCase(source)
			scope.items = items.sortBy('sort')

window.app.registerElementDirective 'contentList', ContentListController, 'misc/content_list.html'
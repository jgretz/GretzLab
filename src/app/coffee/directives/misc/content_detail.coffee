class ContentDetailController extends BaseController
	@inject '$routeParams', 'contentService', 'renderListService'

	link: (scope, element, attrs) ->
		source = attrs.source
		detailTag = @$routeParams.item

		render = (item) =>
			@renderListService.renderIn([ item ], element, scope)

		if detailTag
			@contentService.itemBySourceAndTag(source, detailTag).then (item) =>
				render item
		else
			@contentService.itemsBySource(source).then (all) =>
				render all[0] unless all.length == 0

window.app.registerElementDirective 'contentDetail', ContentDetailController, 'misc/content_detail.html'
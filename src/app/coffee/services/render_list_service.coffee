class RenderListService extends AngularService
	@register 'renderListService'
	@inject '$compile'

	renderIn: (list, element, scope) ->
		sorted = list.sortBy('sort')

		for item in sorted
			newScope = scope.$new(true)
			newScope.info = Humanize.titleCase(item.category)

			tag = '<' + item.tag + '></' + item.tag + '>'
			resolved = @$compile(tag)(newScope)

			element.append(resolved)
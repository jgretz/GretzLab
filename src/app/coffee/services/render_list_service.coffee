class RenderListService extends AngularService
	@register 'renderListService'
	@inject '$compile'

	renderIn: (list, element, scope) ->
		sorted = list.sort('sort')

		for item in sorted
			newScope = scope.$new(true)
			newScope.item = item

			tag = '<' + item.tag + '></' + item.tag + '>'
			resolved = @$compile(tag)(newScope)

			element.append(resolved)
class RenderListService extends AngularService
	@register 'renderListService'
	@inject '$compile'

	renderIn: (list, element, scope) ->
		for item in Enumerable.From(list).OrderBy((x) => x.sort).ToArray()
			newScope = scope.$new(true)
			newScope.info = Humanize.titleCase(item.category)

			tag = '<' + item.tag + '></' + item.tag + '>'
			resolved = @$compile(tag)(newScope)

			element.append(resolved)
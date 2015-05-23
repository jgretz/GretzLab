class RenderListService extends AngularService
	@register 'renderListService'
	@inject '$compile'

	renderIn: (list, element, scope) ->
		for item in Enumerable.From(list).OrderBy((x) => x.sort).ToArray()
				tag = '<' + item.tag + '></' + item.tag + '>'
				resolved = @$compile(tag)(scope)

				element.append(resolved)
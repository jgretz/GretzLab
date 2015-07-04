class @LabItem extends BaseController

	@registerItem: (id, source, category, sort, title, tag) ->
		window.app.lab = {} unless window.app.lab
		window.app.lab[source] = [] unless window.app.lab[source]

		window.app.lab[source].push
			id: id
			source: source
			category: category
			sort: sort
			title: title
			tag: tag

		window.app.registerElementDirective tag, @, 'lab/' + tag + '.html'
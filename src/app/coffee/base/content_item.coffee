class @ContentItem extends BaseController

	@registerItem: (source, sort, title, tag) ->
		window.app.content = {} unless window.app.content
		window.app.content[source] = [] unless window.app.content[source]

		window.app.content[source].push
			source: source
			sort: sort
			title: title
			tag: tag

		window.app.registerElementDirective tag, @, source + '/' + tag + '.html'
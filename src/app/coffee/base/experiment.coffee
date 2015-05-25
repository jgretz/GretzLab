class @Experiment extends BaseController

	@registerExperiment: (id, source, category, sort, title, tag) ->
		window.app.experiments = {} unless window.app.experiments
		window.app.experiments[source] = [] unless window.app.experiments[source]

		window.app.experiments[source].push
			id: id
			source: source
			category: category
			sort: sort
			title: title
			tag: tag

		window.app.registerElementDirective tag, @, 'experiments/' + tag + '.html'
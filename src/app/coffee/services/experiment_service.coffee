class ExperimentService extends AngularService
	@register 'experimentService'
	@inject 'httpService'

	experimentsBySource: (source) ->
		@promise (deferred) =>
			deferred.resolve(window.app.experiments[source])
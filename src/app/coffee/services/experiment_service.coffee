class ExperimentService extends AngularService
	@register 'experimentService'
	@inject 'httpService'

	experimentsBySource: (source) ->
		@promise (deferred) =>
			@httpService.get('/data/experiments.json').then (experiments) ->
				deferred.resolve(experiments[source])
			.catch (error) ->
				deferred.reject(error)
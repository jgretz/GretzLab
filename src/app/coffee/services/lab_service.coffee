class LabService extends AngularService
	@register 'labService'

	itemsBySource: (source) ->
		@promise (deferred) =>
			deferred.resolve(window.app.lab[source])
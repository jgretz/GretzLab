class ContentService extends AngularService
	@register 'contentService'

	itemsBySource: (source) ->
		@promise (deferred) =>
			deferred.resolve(window.app.content[source])

	itemBySourceAndTag: (source, tag) ->
		@promise (deferred) =>
			deferred.resolve window.app.content[source].find (x) => x.tag == tag
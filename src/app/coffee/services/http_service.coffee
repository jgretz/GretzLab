class HttpService extends AngularService
	@register 'httpService'
	@inject '$http', '$location'

	get: (url) ->
		@promise (deferred) =>
			@$http.get(url).success (data, status, headers, config) ->
				deferred.resolve(data, status, headers, config)
			.error (data, status, headers, config) ->
				deferred.reject(data, status, headers, config)

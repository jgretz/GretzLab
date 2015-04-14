class @AngularService extends AngularComponent
    @register: (name) ->
        super(name, 'service')
        
    @inject '$q', '$http', 'ENV'
        
    getAsync: (url) ->
        @httpRequest('GET', url)

    postAsync: (url, data) ->
        @httpRequest('POST', url, data)
        
    patchAsync: (url, data) ->
        @httpRequest('PATCH', url, data)
        
    putAsync: (url, data) ->
        @httpRequest('PUT', url, data)

    # Helpers #
    httpRequest: (verb, url, data) ->
        result = @$q.defer()
        
        request =
            method: verb
            url: @ENV.apiEndpoint + url

        if data
            request.data = data
        
        @$http(request)
        .success (data, status, headers, config) ->
            result.resolve(
                data: data
                status: status
            )
        .error (data, status, headers, config) ->
            result.reject(
                data: data
                status: status
            )

        return result
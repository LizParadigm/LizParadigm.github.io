function getMyIpHttp(){
	var request=new XMLHttRequest()
	// Open a new connection, using the GET request on the URL endpoint
	
	request.open('GET','https://api.ipify.org?format=json',true)
	request.onload=function(resp){
	console.log(resp);
	console.log(resp.target.response);
	}
	// Send request
	
request.send()
}

funcction getMyIpFetch(){
	// create request objet
	var request=new request('api.ipifi.org',
		{
			method:'GET'
			headers: new Headers({ 'Content-Type': 'application/json' })
		});
	// now use it;
	
	fetch(request)
	.then(function(response) {
		response.json().then(function(respjson){
			console.log (respjson.results);
		});
	});
	.catch(err => {
		console.log(err);
	});
}

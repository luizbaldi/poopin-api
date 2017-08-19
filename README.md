# poopin-api
 ==========
 Describe your poop places or search places near to you.

API
---------------------------------------------
User /user
* POST /save

  	Parameters
  	```
   { 
   	id         : string,
   	name       : string,
		nickname   : string,
		birthDate  : string || dd/mm/yyyy,
		email      : atring,
		password   : string 
   }
  	``` 
  	Response
  	```
   { 
   	error    : bool,
		message  : string,
		data     : [{
			_id  : string
		}]
   }
  	``` 	
   Case id <> null, the profile data of the user will be updated
* POST /user/login

  	Parameters
  	```
   { 
   	email      : string,
		password   : string 
   }
  	``` 
  	Response
  	```
   { 
   	error    : bool,
		message  : string,
		data     : [{
			_id  	   : string,
			name       : string,
			nickname   : string,
			birthDate  : string || dd/mm/yyyy,
			email      : atring
		}]
   }
   	```
Toilet /toilet/
* GET /getAll

  	Response
  	```
   { 
   	error    : bool,
		message  : string,
		data     : [{
			_id	    : string,
			description : string,
			title       : string,
			address     : string,
			city	    : string,
			state	    : string,
			country	    : string,
			lat	    : string,
			lng	    : string,
			avaliations: [
				{
					id		: string,
				    	toiletId	: string,
				    	stars	: integer,
				    	observation : string,
				    	userId      : {
						_id      : string,
						name     : string,
						nickname : string
				    	}	
				}
			],
			userId : {
				_id      : string,
				name     : string,
				nickname : string
			}
		}]
   }
  	```   	 	
* POST /save

  	Parameters
  	```
   { 
   	description : string,
		title       : string,
		address     : string,
		city        : string,
		state       : string,
		country     : string,
	    	lat         : string,
	    	lng         : string,
	    	userId      : string,
	    	avaliations : [{
	    		stars       : integer,
            	observation : string
		}] 
   }
  	``` 
  	Response
  	```
   { 
   	error    : bool,
		message  : string,
		data     : []
   }
  	``` 	
   Case "lat" and "lng" are empty the API will request the toilet coordinates with geocoder API.
   Case "lat" and "lng" aren't empty the API will request the toilet address info with geocorder API (reverse search).
	
Avaliation /avaliation/
* GET /user/{userId}

  	Response
  	```
   { 
   	error    : bool,
		message  : string,
		data     : [{
			userId      : string,
			stars       : integer,
			observation : string
			toiledId    : {
				description : string,
				title       : string,
				address     : string,
				city	    : string,
				state	    : string,
				country	    : string,
				lat	    : string,
				lng	    : string,
				userId      : {
					_id      : string,
					name     : string,
					nickname : string		
				}
			}
		}]
   }
  	``` 
	
* POST /save

	Parameters
  	```
   { 
   	userId      : string,
		toiletId    : string,
		stars       : integer,
		observation : string
   }
  	``` 
  	Response
  	```
   { 
   	error    : bool,
		message  : string,
		data     : []
   }
  	``` 	



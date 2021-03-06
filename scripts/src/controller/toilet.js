'use strict';

var ToiletService = require('../service/toilet.js');

function save(request,reply) {
	var mongo  = request.mongo;	
	var params = request.payload;
	
    var toilet = {
        description : params.description,
        title       : params.title,
        address     : params.address,
        city        : params.city,
        state       : params.state,
        country     : params.country,
        lat         : params.lat,
        lng         : params.lng,
        userId      : params.userId,
        _id         : params.id
    };

    var avaliations = params.avaliations;

    ToiletService.save(toilet,avaliations,mongo).then(function(response){
        return reply.response(response);
    });    

};

function getAll(request, reply){ 
    
    ToiletService.getAll().then(function(response){
        return reply.response(response);                
    });

};

var exports = module.exports = {
	save   : save,
	getAll : getAll
};




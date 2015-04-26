/**
 * @author Adrien Alwin SAUNIER
 * @version 0.0.1
 */
function MetaResponse () {

	this.response = {
        "links": {},
        "included": {}
    }
}

/**
 * Get the default Content-Type header's value
 * 
 * @return {String} Header value
 */
MetaResponse.prototype.getContentType = function() {
    return "application/vnd.api+json";
}

/**
 * Add a link with a name
 *
 * @param {string} name Link name
 * @param {string} url URL
 */
MetaResponse.prototype.addLink = function(name, url) {
	this.getResponse().links[name] = url;

    return this;
}

/**
 * Remove a link, identified by a name
 *
 * @param  {string} name
 * @return {string}
 */
MetaResponse.prototype.removeLink = function(name) {
    if(this.getResponse().links.hasOwnProperty(name)) {
        delete this.getResponse().links[name];
    }

    return this;
}

/**
 * Add an object
 *
 * @param {json} object Object to add
 */
MetaResponse.prototype.addData = function(object) {

    if(!this.getResponse().hasOwnProperty('data')) {
        this.getResponse()['data'] = [];
    }

    if(typeof object.getResponse === "function") {
        this.getResponse().data.push(object.getResponse());
    }
    else {
        this.getResponse().data.push(object);
    }

    return this;
}

/**
 * Get the data
 * 
 * @return {string}
 */
MetaResponse.prototype.getData = function() {
    return (this.response.hasOwnProperty('data')) ? this.response['data'] : undefined ;
}

/**
 * Get response
 * 
 * @return {json} JSON formatted response
 */
MetaResponse.prototype.getResponse = function() {
    return this.response;
}

MetaResponse.prototype.addError = function(error) {
    if(!this.getResponse().hasOwnProperty('errors')) {
        this.getResponse()['errors'] = [];
    }

    if(typeof error.getResponse === "function") {
        this.getResponse().errors.push(error.getResponse());
    } else {
        this.getResponse().errors.push(error);
    }

    return this;
}

module.exports = MetaResponse;
/**
 * @author Adrien Alwin SAUNIER
 * @version 0.0.1
 */
function MetaResponse () {

	this.response = {
        "links": {},
        "data": [],
        "included": {}
    }
}

/**
 * Add a link with a name
 *
 * @param {string} name Link name
 * @param {string} url URL
 */
MetaResponse.prototype.addLink = function(name, url) {
	this.getResponse().links[name] = url;
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
}

/**
 * Add an object
 *
 * @param {json} object Object to add
 */
MetaResponse.prototype.addData = function(object) {

    if(typeof object.getResponse === "function") {
        this.response.data.push(object.getResponse());
    }
    else {
        this.response.data.push(object);
    }
}

/**
 * Get the data
 * 
 * @return {string}
 */
MetaResponse.prototype.getData = function() {
    return this.response['data'];
}

/**
 * Get response
 * 
 * @return {json} JSON formatted response
 */
MetaResponse.prototype.getResponse = function() {
    return this.response;
}

module.exports = MetaResponse;
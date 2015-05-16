/**
 * @author Adrien Alwin SAUNIER
 * @version 0.0.1
 */
function MetaData () {

    this.data = {
        "links": [],
        "attributes": []
    }

}

/**
 * Set the data type
 * 
 * @param {String} type Type of the data
 */
MetaData.prototype.setType = function(type) {
    this.data["type"] = type;

    return this;
}

/**
 * Get type document
 * 
 * @return {mixed} Return the document type if it exists
 */
MetaData.prototype.getType = function() {
    return (this.data.hasOwnProperty("type")) ? this.data["type"] : undefined;
}

/**
 * Add a link with a name
 *
 * @param {string} name Link name
 * @param {string} url URL
 */
MetaData.prototype.addLink = function(name, url) {
    this.getResponse().links[name] = url;

    return this;
}

/**
 * Remove a link, identified by a name
 *
 * @param  {string} name
 * @return {string}
 */
MetaData.prototype.removeLink = function(name) {
    if(this.getResponse().links.hasOwnProperty(name)) {
        delete this.getResponse().links[name];
    }

    return this;
}

/**
 * Set the document id
 * @param {[type]} id [description]
 */
MetaData.prototype.setId = function(id) {
    this.data["id"] = id;

    return this;
}

/**
 * Get the object ID
 * @return {mixed}  
 */
MetaData.prototype.getId = function() {
    return (this.data.hasOwnProperty("id")) ? this.data["id"] : undefined;
}

MetaData.prototype.addAttribute = function(name, value) {
    this.getResponse().attributes[name] = value;

    return this;
}

MetaData.prototype.removeAttribute = function(name) {
    if(this.getResponse().attributes.hasOwnProperty(name)) {
        delete this.getResponse().attributes[name];
    }

    return this;
}

/**
 * Return the data response
 * 
 * @return {json} Data response
 */
MetaData.prototype.getResponse = function() {
    return this.data;
}

module.exports = MetaData;
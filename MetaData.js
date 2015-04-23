/**
 * @author Adrien Alwin SAUNIER
 * @version 0.0.1
 */
function MetaData () {

    this.data = {
        "links": []
    }

}

/**
 * Set the data type
 * 
 * @param {String} type Type of the data
 */
MetaData.prototype.setType = function(type) {
    this.data["type"] = type;
}

/**
 * Get type document
 * 
 * @return {String} Return the document type if it exists
 */
MetaData.prototype.getType = function() {
    return (this.data.hasOwnProperty("type")) ? this.data["type"] : "";
}

/**
 * Add a link with a name
 *
 * @param {string} name Link name
 * @param {string} url URL
 */
MetaData.prototype.addLink = function(name, url) {
    this.getResponse().links[name] = url;
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
}

/**
 * Set the document id
 * @param {[type]} id [description]
 */
MetaData.prototype.setId = function(id) {
    this.data["id"] = id;
}

MetaData.prototype.getId = function() {
    return (this.data.hasOwnProperty("id")) ? this.data["id"] : "";
}

MetaData.prototype.addAttribute = function(name, value) {
    this.data[name] = value;
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
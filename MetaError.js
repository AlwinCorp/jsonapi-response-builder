/**
 * @author Adrien Alwin SAUNIER
 * @version 0.0.3
 */
function MetaError () {
    this.response = {
    }
}

/**
 * A unique identifier for this particular occurrence of the problem.
 * @param {int} id Error id
 * 
 * @return {self}
 */
MetaError.prototype.setId = function(id) {
    this.response['id'] = id;

    return this;
}

/**
 * Return id
 * @return {int} Error id
 */
MetaError.prototype.getId = function() {
    return (this.response.hasOwnProperty('id')) ? this.response['id'] : '';
}

/**
 * A URI that MAY yield further details about this particular occurrence of the problem.
 * @param {string} url
 */
MetaError.prototype.setExtraInformation = function(url) {
    this.response['href'] = url;

    return this;
}

/**
 * Return the extra informations
 * @return {[type]} [description]
 */
MetaError.prototype.getExtraInformation = function() {
    return (this.response.hasOwnProperty('href')) ? this.response['href'] : '';
}

/**
 * The HTTP status code applicable to this problem, expressed as a string value
 * @param {string} status
 * @return {self}
 */
MetaError.prototype.setStatus = function(status) {
    this.response['status'] = status;
    return this;
}

MetaError.prototype.getStatus = function() {
    return (this.response.hasOwnProperty('status')) ? this.response['status'] : '';
}

/**
 * An application-specific error code, expressed as a string value.
 * @param {int} code
 * @return {self}
 */
MetaError.prototype.setStatusCode = function(code) {
    this.response['code'] = code;
    return this;
}

MetaError.prototype.getStatusCode = function() {
    return (this.response.hasOwnProperty('code')) ? this.response['code'] : '';
}

/**
 * A short, human-readable summary of the problem.
 * It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
 * @param {string} title
 * @return {self}
 */
MetaError.prototype.setTitle = function(title) {
    this.response['title'] = title;
    return this;
}

MetaError.prototype.getTitle = function() {
    return (this.response.hasOwnProperty('title')) ? this.response['title'] : '';
}

/**
 * A human-readable explanation specific to this occurrence of the problem.
 * @param {string} detail
 * @return {self}
 */
MetaError.prototype.setDetail = function(detail) {
    this.response['detail'] = detail;
    return this;
}

MetaError.prototype.getDetail = function() {
    return (this.response.hasOwnProperty('detail')) ? this.response['detail'] : '';
}

/**
 * An array of JSON Pointers [RFC6901] to the associated resource(s) within the request document
 * [e.g. ["/data"] for a primary data object].
 * @param {string} link
 */
MetaError.prototype.addLink = function(link) {
    if(!this.response.hasOwnProperty('links')) {
        this.response['links'] = [];
    }

    this.response['links'].push(link);

    return this;
}

/**
 * Get links
 * @return {mixed}
 */
MetaError.prototype.getLinks = function() {
    return (this.response.hasOwnProperty('links')) ? this.response['links'] : '';
}

/**
 * Remove a link
 * @param  {string} link
 * @return {self}
 */
MetaError.prototype.removeLink = function(link) {
    if(!this.response.hasOwnProperty('paths') && !this.response['paths'].hasOwnProperty(link)) {
        delete this.response['paths'][link];
    }

    return this;
}

/**
 * An array of JSON Pointers to the relevant attribute(s) within the associated resource(s) in the request document.
 * Each path MUST be relative to the resource path(s) expressed in the error object's "links" member
 * [e.g. ["/first-name", "/last-name"] to reference a couple attributes].
 * @param {string} link
 *
 * @return {self}
 */
MetaError.prototype.addPath = function(link) {
    if(!this.response.hasOwnProperty('paths')) {
        this.response['paths'] = [];
    }

    this.response['paths'].push(link);

    return this;
}

MetaError.prototype.getResponse = function() {
    return this.response;
}

module.exports = MetaError;
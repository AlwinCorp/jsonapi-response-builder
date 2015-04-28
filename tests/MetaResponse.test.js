var MetaResponse = require('../MetaResponse');
var chai = require('chai');

var expect = chai.expect;

describe('MetaResponse', function() {

	var metaResponse = new MetaResponse();

	describe('#constructor', function() {
		describe('response', function() {
			it('Should exist', function() {
				expect(metaResponse).to.contain.property('response');			
			});
			it('Should be an object', function() {
				expect(metaResponse.response).to.be.an('object');
			});
		});

		describe('response.links', function() {
			it('Should exist', function() {
				expect(metaResponse.response).to.contain.property('links');
			});
			it('Should be an object', function() {
				expect(metaResponse.response.links).to.be.an('object');
			});
		});

		describe('response.included', function() {
			it('Should exist', function() {
				expect(metaResponse.response).to.contain.property('included');
			});
			it('Should be an object', function() {
				expect(metaResponse.response.links).to.be.an('object');
			});
		});
	});

	describe('#getContentType', function() {
		it('Should be a function', function() {
			expect(metaResponse.getContentType).to.be.a('function');
		});
		it('Should return a string', function() {
			expect(metaResponse.getContentType()).to.be.a('string');
		});
		it('Should return the correct content-type', function() {
			expect(metaResponse.getContentType()).to.equal('application/vnd.api+json');
		});
	});
});

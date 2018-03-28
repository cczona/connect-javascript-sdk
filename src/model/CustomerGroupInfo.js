/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The CustomerGroupInfo model module.
 * @module model/CustomerGroupInfo
 * @version 2.6.0
 */

/**
 * Constructs a new <code>CustomerGroupInfo</code>.
 * Contains some brief information about a customer group with its identifier included.
 * @alias module:model/CustomerGroupInfo
 * @class
 * @param id {String} The ID of the customer group.
 * @param name {String} The name of the customer group.
 */
var exports = function(id, name) {
  var _this = this;

  _this['id'] = id;
  _this['name'] = name;
};

/**
 * Constructs a <code>CustomerGroupInfo</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerGroupInfo} obj Optional instance to populate.
 * @return {module:model/CustomerGroupInfo} The populated <code>CustomerGroupInfo</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    }
  return obj;
}

/**
 * The ID of the customer group.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The name of the customer group.
 * @member {String} name
 */
exports.prototype['name'] = undefined;



module.exports = exports;




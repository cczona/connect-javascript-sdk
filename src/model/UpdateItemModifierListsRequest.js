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
 * The UpdateItemModifierListsRequest model module.
 * @module model/UpdateItemModifierListsRequest
 * @version 2.6.0
 */

/**
 * Constructs a new <code>UpdateItemModifierListsRequest</code>.
 * 
 * @alias module:model/UpdateItemModifierListsRequest
 * @class
 * @param itemIds {Array.<String>} The [CatalogItem](#type-catalogitem)s whose [CatalogModifierList](#type-catalogmodifierlist)s are being updated.
 */
var exports = function(itemIds) {
  var _this = this;

  _this['item_ids'] = itemIds;


};

/**
 * Constructs a <code>UpdateItemModifierListsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateItemModifierListsRequest} obj Optional instance to populate.
 * @return {module:model/UpdateItemModifierListsRequest} The populated <code>UpdateItemModifierListsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('item_ids')) {
      obj['item_ids'] = ApiClient.convertToType(data['item_ids'], ['String']);
    }
      if (data.hasOwnProperty('modifier_lists_to_enable')) {
      obj['modifier_lists_to_enable'] = ApiClient.convertToType(data['modifier_lists_to_enable'], ['String']);
    }
      if (data.hasOwnProperty('modifier_lists_to_disable')) {
      obj['modifier_lists_to_disable'] = ApiClient.convertToType(data['modifier_lists_to_disable'], ['String']);
    }
    }
  return obj;
}

/**
 * The [CatalogItem](#type-catalogitem)s whose [CatalogModifierList](#type-catalogmodifierlist)s are being updated.
 * @member {Array.<String>} item_ids
 */
exports.prototype['item_ids'] = undefined;
/**
 * The set of [CatalogModifierList](#type-catalogmodifierlist)s (referenced by ID) to enable for the [CatalogItem](#type-catalogitem).
 * @member {Array.<String>} modifier_lists_to_enable
 */
exports.prototype['modifier_lists_to_enable'] = undefined;
/**
 * The set of [CatalogModifierList](#type-catalogmodifierlist)s (referenced by ID) to disable for the [CatalogItem](#type-catalogitem).
 * @member {Array.<String>} modifier_lists_to_disable
 */
exports.prototype['modifier_lists_to_disable'] = undefined;



module.exports = exports;




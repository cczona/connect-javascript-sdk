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
var V1ModifierOption = require('./V1ModifierOption');




/**
 * The V1ModifierList model module.
 * @module model/V1ModifierList
 * @version 2.6.0
 */

/**
 * Constructs a new <code>V1ModifierList</code>.
 * @alias module:model/V1ModifierList
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>V1ModifierList</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ModifierList} obj Optional instance to populate.
 * @return {module:model/V1ModifierList} The populated <code>V1ModifierList</code> instance.
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
      if (data.hasOwnProperty('selection_type')) {
      obj['selection_type'] = ApiClient.convertToType(data['selection_type'], 'String');
    }
      if (data.hasOwnProperty('modifier_options')) {
      obj['modifier_options'] = ApiClient.convertToType(data['modifier_options'], [V1ModifierOption]);
    }
    }
  return obj;
}

/**
 * The modifier list's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The modifier list's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Indicates whether MULTIPLE options or a SINGLE option from the modifier list can be applied to a single item.
 * @member {module:model/V1ModifierList.SelectionTypeEnum} selection_type
 */
exports.prototype['selection_type'] = undefined;
/**
 * The options included in the modifier list.
 * @member {Array.<module:model/V1ModifierOption>} modifier_options
 */
exports.prototype['modifier_options'] = undefined;


  /**
   * Allowed values for the <code>selection_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SelectionTypeEnum = {
    /**
     * value: "SINGLE"
     * @const
     */
    "SINGLE": "SINGLE",
    /**
     * value: "MULTIPLE"
     * @const
     */
    "MULTIPLE": "MULTIPLE"  };


module.exports = exports;




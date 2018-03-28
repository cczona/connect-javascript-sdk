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
var V1Money = require('./V1Money');
var V1SettlementEntry = require('./V1SettlementEntry');




/**
 * The V1Settlement model module.
 * @module model/V1Settlement
 * @version 2.6.0
 */

/**
 * Constructs a new <code>V1Settlement</code>.
 * @alias module:model/V1Settlement
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>V1Settlement</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Settlement} obj Optional instance to populate.
 * @return {module:model/V1Settlement} The populated <code>V1Settlement</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = V1Money.constructFromObject(data['total_money']);
    }
      if (data.hasOwnProperty('initiated_at')) {
      obj['initiated_at'] = ApiClient.convertToType(data['initiated_at'], 'String');
    }
      if (data.hasOwnProperty('bank_account_id')) {
      obj['bank_account_id'] = ApiClient.convertToType(data['bank_account_id'], 'String');
    }
      if (data.hasOwnProperty('entries')) {
      obj['entries'] = ApiClient.convertToType(data['entries'], [V1SettlementEntry]);
    }
    }
  return obj;
}

/**
 * The settlement's unique identifier.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The settlement's current status.
 * @member {module:model/V1Settlement.StatusEnum} status
 */
exports.prototype['status'] = undefined;
/**
 * The amount of money involved in the settlement. A positive amount indicates a deposit, and a negative amount indicates a withdrawal. This amount is never zero.
 * @member {module:model/V1Money} total_money
 */
exports.prototype['total_money'] = undefined;
/**
 * The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format.
 * @member {String} initiated_at
 */
exports.prototype['initiated_at'] = undefined;
/**
 * The Square-issued unique identifier for the bank account associated with the settlement.
 * @member {String} bank_account_id
 */
exports.prototype['bank_account_id'] = undefined;
/**
 * The entries included in this settlement.
 * @member {Array.<module:model/V1SettlementEntry>} entries
 */
exports.prototype['entries'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",
    /**
     * value: "SENT"
     * @const
     */
    "SENT": "SENT"  };


module.exports = exports;




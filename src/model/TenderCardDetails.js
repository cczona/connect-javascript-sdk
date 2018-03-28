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
var Card = require('./Card');




/**
 * The TenderCardDetails model module.
 * @module model/TenderCardDetails
 * @version 2.6.0
 */

/**
 * Constructs a new <code>TenderCardDetails</code>.
 * Represents additional details of a tender with &#x60;type&#x60; &#x60;CARD&#x60; or &#x60;SQUARE_GIFT_CARD&#x60;
 * @alias module:model/TenderCardDetails
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>TenderCardDetails</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/TenderCardDetails} obj Optional instance to populate.
 * @return {module:model/TenderCardDetails} The populated <code>TenderCardDetails</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('card')) {
      obj['card'] = Card.constructFromObject(data['card']);
    }
      if (data.hasOwnProperty('entry_method')) {
      obj['entry_method'] = ApiClient.convertToType(data['entry_method'], 'String');
    }
    }
  return obj;
}

/**
 * The credit card payment's current state (such as `AUTHORIZED` or `CAPTURED`). See [TenderCardDetailsStatus](#type-tendercarddetailsstatus) for possible values.
 * @member {module:model/TenderCardDetails.StatusEnum} status
 */
exports.prototype['status'] = undefined;
/**
 * The credit card's non-confidential details.
 * @member {module:model/Card} card
 */
exports.prototype['card'] = undefined;
/**
 * The method used to enter the card's details for the transaction.
 * @member {module:model/TenderCardDetails.EntryMethodEnum} entry_method
 */
exports.prototype['entry_method'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "AUTHORIZED"
     * @const
     */
    "AUTHORIZED": "AUTHORIZED",
    /**
     * value: "CAPTURED"
     * @const
     */
    "CAPTURED": "CAPTURED",
    /**
     * value: "VOIDED"
     * @const
     */
    "VOIDED": "VOIDED",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"  };

  /**
   * Allowed values for the <code>entry_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntryMethodEnum = {
    /**
     * value: "SWIPED"
     * @const
     */
    "SWIPED": "SWIPED",
    /**
     * value: "KEYED"
     * @const
     */
    "KEYED": "KEYED",
    /**
     * value: "EMV"
     * @const
     */
    "EMV": "EMV",
    /**
     * value: "ON_FILE"
     * @const
     */
    "ON_FILE": "ON_FILE",
    /**
     * value: "CONTACTLESS"
     * @const
     */
    "CONTACTLESS": "CONTACTLESS"  };


module.exports = exports;




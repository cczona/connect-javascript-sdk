# SquareConnect.V1UpdateOrderRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | The action to perform on the order (COMPLETE, CANCEL, or REFUND). | 
**shippedTrackingNumber** | **String** | The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. | [optional] 
**completedNote** | **String** | A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. | [optional] 
**refundedNote** | **String** | A merchant-specified note about the refunding of the order. Only valid if action is REFUND. | [optional] 
**canceledNote** | **String** | A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `COMPLETE` (value: `"COMPLETE"`)

* `CANCEL` (value: `"CANCEL"`)

* `REFUND` (value: `"REFUND"`)





// Initialize order fields 
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add new text field to order comments section at checkout
ec.order.extraFields.delivery_day = {
    'title': 'Preferred delivery day',
    'textPlaceholder': 'When would you like your order delivered?',
    'type': 'datetime',
    'required': true,
    'checkoutDisplaySection': 'shipping_address', // show new field in order comments block
    'orderDetailsDisplaySection': 'order_comments' // show saved data in order comments block in order details to merchant and customer
};

Ecwid.refreshConfig();

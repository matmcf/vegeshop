// The field "how_did_you_find_us" asks user about how they found the store. Drop down type
ec.order.extraFields.how_did_you_find_us = {
    'title': 'How did you find us?',
    'type': 'select',
    'required': false,
    'selectOptions': ['Google Ads', 'Friend told me', 'TV show', 'Other'],
    'value': 'TV show', // Default value
    'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig();

// Add pickup time selection for customer
ec.order.extraFields.ecwid_pickup_time = {
    'title': '_msg_ShippingDetails.pickup.customer_header',
    'required': true,
    'type': 'datetime',
    'checkoutDisplaySection': 'pickup_details',
    'orderDetailsDisplaySection': 'payment_details',
}

Ecwid.refreshConfig();

// Hidden field, which is not shown at checkout
ec.order.extraFields.my_custom_field = {
    'value': 'abcd12345'
};

Ecwid.refreshConfig();

/**
 * Copyright © 2018 EaDesign by Eco Active S.R.L. All rights reserved.
 * See LICENSE for license details.
 */

var config = {
    map: {
        '*': {
            cityUpdater:'Eadesigndev_RomCity/js/city-updater',
           regionUpdater:'Eadesigndev_RomCity/js/form/element/city'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/model/shipping-rates-validation-rules': {
                'Eadesigndev_RomCity/js/model/shipping-rates-validation-rules-mixin': true
            },
            'Magento_Customer/js/addressValidation': {
                'Eadesigndev_RomCity/js/action/set-shipping-information-customer': true
            },
            'Magento_Checkout/js/action/create-shipping-address': {
                'Eadesigndev_RomCity/js/action/create-shipping-address-mixin': true
            }
        }
    }
};
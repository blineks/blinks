(function(require){
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    'waitSeconds': 0,
    'map': {
        '*': {
            'ko': 'knockoutjs/knockout',
            'knockout': 'knockoutjs/knockout',
            'mageUtils': 'mage/utils/main',
            'rjsResolver': 'mage/requirejs/resolver'
        }
    },
    'shim': {
        'jquery/jquery-migrate': ['jquery'],
        'jquery/jquery.hashchange': ['jquery', 'jquery/jquery-migrate'],
        'jquery/jstree/jquery.hotkeys': ['jquery'],
        'jquery/hover-intent': ['jquery'],
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/common': ['jquery'],
        'mage/new-gallery': ['jquery'],
        'mage/webapi': ['jquery'],
        'jquery/ui': ['jquery'],
        'MutationObserver': ['es6-collections'],
        'tinymce': {
            'exports': 'tinymce'
        },
        'moment': {
            'exports': 'moment'
        },
        'matchMedia': {
            'exports': 'mediaCheck'
        },
        'jquery/jquery-storageapi': {
            'deps': ['jquery/jquery.cookie']
        }
    },
    'paths': {
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/hover-intent': 'jquery/jquery.hoverIntent',
        'jquery/file-uploader': 'jquery/fileUploader/jquery.fileupload-fp',
        'jquery/jquery.hashchange': 'jquery/jquery.ba-hashchange.min',
        'prototype': 'legacy-build.min',
        'jquery/jquery-storageapi': 'jquery/jquery.storageapi.min',
        'text': 'mage/requirejs/text',
        'domReady': 'requirejs/domReady',
        'tinymce': 'tiny_mce/tiny_mce_src'
    },
    'deps': [
        'jquery/jquery-migrate'
    ],
    'config': {
        'mixins': {
            'jquery/jstree/jquery.jstree': {
                'mage/backend/jstree-mixin': true
            }
        },
        'text': {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
};

require(['jquery'], function ($) {
    'use strict';

    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'rowBuilder':             'Magento_Theme/js/row-builder',
            'toggleAdvanced':         'mage/toggle',
            'translateInline':        'mage/translate-inline',
            'sticky':                 'mage/sticky',
            'tabs':                   'mage/tabs',
            'zoom':                   'mage/zoom',
            'collapsible':            'mage/collapsible',
            'dropdownDialog':         'mage/dropdown',
            'dropdown':               'mage/dropdowns',
            'accordion':              'mage/accordion',
            'loader':                 'mage/loader',
            'tooltip':                'mage/tooltip',
            'deletableItem':          'mage/deletable-item',
            'itemTable':              'mage/item-table',
            'fieldsetControls':       'mage/fieldset-controls',
            'fieldsetResetControl':   'mage/fieldset-controls',
            'redirectUrl':            'mage/redirect-url',
            'loaderAjax':             'mage/loader',
            'menu':                   'mage/menu',
            'popupWindow':            'mage/popup-window',
            'validation':             'mage/validation/validation',
            'welcome':                'Magento_Theme/js/view/welcome'
        }
    },
    paths: {
        'jquery/ui': 'jquery/jquery-ui'
    },
    deps: [
        'jquery/jquery.mobile.custom',
        'mage/common',
        'mage/dataPost',
        'mage/bootstrap'
    ]
};

require.config(config);
})();
(function() {
var config = {paths: {
	'df': 'Df_Core/my/all'
	,'dfHasValue': 'Df_Core/my/hasValue'
	,'df-lodash': 'https://cdn.jsdelivr.net/lodash/4.14.1/lodash'
	,'df-lodash-local': 'Df_Core/thirdParty/lodash'
	// 2019-08-01 https://github.com/flesler/jquery.scrollTo
	,'df-scroll': 'Df_Core/thirdParty/scrollTo'
	,'df-uniform': 'Df_Core/my/uniform'
	/**
	 * 2017-10-18
	 * Note 1.
	 * «JavaScript Unicode 8.0 Normalization - NFC, NFD, NFKC, NFKD»: https://github.com/walling/unorm
	 * Note 2.
	 * `The ineligible characters should be automatically replaced by the corresponding eligible ones
	 * while prefilling the cardholder's name
	 * (if «Prefill the cardholder's name from the billing address?» option is enabled)`:
	 * https://github.com/mage2pro/core/issues/37#issuecomment-337537967
	 */
	,'df-unorm': 'Df_Core/thirdParty/unorm'
	,'Df_Core/ColorPicker': 'Df_Core/thirdParty/ColorPicker/main'
	,'Df_Core/Handsontable': 'Df_Core/thirdParty/Handsontable/main'
	,'Df_Core/HighlightJs': 'Df_Core/thirdParty/HighlightJs/main'
	,'Df_Core/Mask': 'Df_Core/thirdParty/Mask/main'
	,'Df_Core/Select2': 'Df_Core/thirdParty/Select2/main'
	,'Df_Core/TableSorter': 'Df_Core/thirdParty/TableSorter/main'
}};
require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            checkoutBalance:    'Magento_Customer/js/checkout-balance',
            address:            'Magento_Customer/address',
            changeEmailPassword: 'Magento_Customer/change-email-password',
            passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
            zxcvbn: 'Magento_Customer/js/zxcvbn',
            addressValidation: 'Magento_Customer/js/addressValidation'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            editTrigger: 'mage/edit-trigger',
            addClass: 'Magento_Translation/add-class'
        }
    },
    deps: [
        'mage/translate-inline'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            compareList:            'Magento_Catalog/js/list',
            relatedProducts:        'Magento_Catalog/js/related-products',
            upsellProducts:         'Magento_Catalog/js/upsell-products',
            productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
            catalogGallery:         'Magento_Catalog/js/gallery',
            priceBox:               'Magento_Catalog/js/price-box',
            priceOptionDate:        'Magento_Catalog/js/price-option-date',
            priceOptionFile:        'Magento_Catalog/js/price-option-file',
            priceOptions:           'Magento_Catalog/js/price-options',
            priceUtils:             'Magento_Catalog/js/price-utils',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            creditCardType: 'Magento_Payment/cc-type'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            consoleLogger:  'Magento_Ui/js/lib/logger/console-logger',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter'
        }
    }
};

require.config(config);
})();
(function() {
// 2017-04-28
// «Replace a default JS component»:
// http://devdocs.magento.com/guides/v2.0/javascript-dev-guide/javascript/custom_js.html#js_replace
var config = {paths: {
	'Magento_Payment/js/model/credit-card-validation/credit-card-number-validator/credit-card-type': 'Df_Payment/card-types'
}};
require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftMessage:    'Magento_Sales/gift-message',
            ordersReturns:  'Magento_Sales/orders-returns'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            wishlist:       'Magento_Wishlist/js/wishlist',
            addToWishlist:  'Magento_Wishlist/js/add-to-wishlist',
            wishlistSearch: 'Magento_Wishlist/js/search'
        }
    }
};

require.config(config);
})();
(function() {
/*jshint browser:true jquery:true*/
/*global alert*/
var config = {
    map: {
        '*': {
            continue_to_payment: 'Dyson_AmastyCheckoutExtension/js/gv/continue-to-payment',
            reformat_payment_methods: 'Dyson_AmastyCheckoutExtension/js/gv/reformat-payment-methods',
            checkout_summary_mobile: 'Dyson_AmastyCheckoutExtension/js/gv/checkout-summary-mobile',
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        "*": {
            slick: 'Dyson_Leap/js/slick.min',
            toggle: 'Dyson_Leap/js/toggle',
            'browser-sniff': 'Dyson_Leap/js/browser-sniff',
            'dyson-honeypot': 'Dyson_Leap/js/dyson-honeypot',
            'dyson-minicart': 'Dyson_Leap/js/dyson-minicart',
            'dyson-slider': 'Dyson_Leap/js/dyson-slider',
            'dyson-slider-gallery': 'Dyson_Leap/js/dyson-slider-gallery',
            'dyson-parts': 'Dyson_Leap/js/dyson-parts',
            'dyson-reviews': 'Dyson_Leap/js/dyson-reviews',
            'dyson-specs': 'Dyson_Leap/js/dyson-specs',
            'dyson-support': 'Dyson_Leap/js/dyson-support',
            'dyson-iframe': 'Dyson_Leap/js/dyson-iframe',
            'store-selector': 'Dyson_Leap/js/store-selector',
            'svg4everybody.min': 'Dyson_Leap/js/svg4everybody.min',
            'svg4everybody.init': 'Dyson_Leap/js/svg4everybody.init',
            'jquery.matchHeight-min': 'Dyson_Leap/js/jquery.matchHeight-min',
            'jquery.matchHeight.init': 'Dyson_Leap/js/jquery.matchHeight.init',
            'picturefill': 'Dyson_Leap/js/picturefill.min',
            'toggle-content': 'Dyson_Leap/js/toggle-content',
            'jquery.debouncedresize': 'Dyson_Leap/js/jquery.debouncedresize',
            'faqs-dropdown': 'Dyson_Leap/js/faqs-dropdown',
            'dyson-notifyme': 'Dyson_Leap/js/dyson-notifyme',
            'dyson-product-slideshow': 'Dyson_Leap/js/dyson-product-slideshow',
            'dyson-bg-styling-override': 'Dyson_Leap/js/dyson-bg-styling-override',
            'dyson-autoplay-video': 'Dyson_Leap/js/dyson-autoplay-video',
            'dyson-language-change': 'Dyson_Leap/js/dyson-language-change',
            'dyson-menu-sticky': 'Dyson_Leap/js/dyson-menu-sticky',
            'dyson-carousel': 'Dyson_Leap/js/dyson-carousel'
        }
    },
    paths: {
        "slick": 'js/slick.min'
    },
    "shim": {
        "slick" : ["jquery"],
        "svg4everybody.init": ["svg4everybody.min"],
        "jquery.matchHeight.init": ["jquery.matchHeight-min"],
        "browser-sniff": ["jquery"]
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/summary/shipping': {
                'Dyson_Leap/js/view/summary/shipping-mixin': true
            },
            'Magento_Tax/js/view/checkout/summary/shipping': {
                'Dyson_Leap/js/view/checkout/summary/shipping-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multiShipping: 'Magento_Multishipping/js/multi-shipping',
            orderOverview: 'Magento_Multishipping/js/overview',
            payment: 'Magento_Multishipping/js/payment'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        "*": {
            'dyson-product-registration-serial': 'Dyson_ProductRegistration/js/product-registration-serial',
            'dyson-product-registration-date': 'Dyson_ProductRegistration/js/product-registration-date',
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            regionlookup: 'Dyson_RegionLookup/js/regionlookup',
            "Magento_Checkout/js/view/billing-address": "Dyson_RegionLookup/js/components/checkout/billing-address"
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            serialNumberLookup: 'Dyson_SerialNumberLookup/js/serial-number-lookup',
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            softOption:   'Dyson_Soft/soft',
            priceSoft:    'Dyson_Soft/js/price-soft',
            slide:          'Dyson_Soft/js/slide',
            productSummary: 'Dyson_Soft/js/product-summary',
            customisations: 'Dyson_Soft/js/customisations'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            browserSniffer: 'GoramVincent_BrowserSniffer/js/browser-sniffer'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            discountCode:           'Magento_Checkout/js/discount-codes',
            shoppingCart:           'Magento_Checkout/js/shopping-cart',
            regionUpdater:          'Magento_Checkout/js/region-updater',
            sidebar:                'Magento_Checkout/js/sidebar',
            checkoutLoader:         'Magento_Checkout/js/checkout-loader',
            checkoutData:           'Magento_Checkout/js/checkout-data',
            proceedToCheckout:      'Magento_Checkout/js/proceed-to-checkout'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            bundleOption:   'Magento_Bundle/bundle',
            priceBundle:    'Magento_Bundle/js/price-bundle',
            slide:          'Magento_Bundle/js/slide',
            productSummary: 'Magento_Bundle/js/product-summary'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            captcha: 'Magento_Captcha/captcha'
        }
    }
};

require.config(config);
})();
(function() {
/*jshint browser:true jquery:true*/
/*global alert*/
var amasty_mixin_enabled = !window.amasty_checkout_disabled;
var config = {
    "map": {"*": {}},
    config: {
        mixins: {
            'Magento_Checkout/js/model/new-customer-address': {
                'Amasty_Checkout/js/model/new-customer-address-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/action/get-payment-information': {
                'Amasty_Checkout/js/action/get-payment-information-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/view/payment/list': {
                'Amasty_Checkout/js/view/payment/list': amasty_mixin_enabled
            },
            'Magento_Checkout/js/view/summary/abstract-total': {
                'Amasty_Checkout/js/view/summary/abstract-total': amasty_mixin_enabled
            },
            'Magento_Checkout/js/model/step-navigator': {
                'Amasty_Checkout/js/model/step-navigator-mixin': amasty_mixin_enabled
            },
            'Magento_Paypal/js/action/set-payment-method': {
                'Amasty_Checkout/js/action/set-payment-method-mixin': amasty_mixin_enabled
            },
            'Magento_CheckoutAgreements/js/model/agreements-assigner': {
                'Amasty_Checkout/js/model/agreements-assigner-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/view/summary': {
                'Amasty_Checkout/js/view/summary-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/view/shipping': {
                'Amasty_Checkout/js/view/shipping-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/view/summary/cart-items': {
                'Amasty_Checkout/js/view/summary/cart-items-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/model/payment/additional-validators': {
                'Amasty_Checkout/js/model/payment-validators/additional-validators-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/model/checkout-data-resolver': {
                'Amasty_Checkout/js/model/checkout-data-resolver-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/model/shipping-rates-validator': {
                'Amasty_Checkout/js/model/shipping-rates-validator-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'Amasty_Checkout/js/action/set-shipping-information-mixin': amasty_mixin_enabled
            },
            'Magento_Checkout/js/model/full-screen-loader': {
                'Amasty_Checkout/js/model/full-screen-loader-mixin': amasty_mixin_enabled
            }
        }
    }
};
if (amasty_mixin_enabled) {
    config["map"]["*"] = {
        "Magento_Checkout/template/billing-address/details.html": 'Amasty_Checkout/template/onepage/billing-address/details.html',
        "Magento_Checkout/template/shipping-address/address-renderer/default.html": 'Amasty_Checkout/template/onepage/shipping/shipping-address/address-renderer/default.html'
    };
}
require.config(config);
})();
(function() {
/*jshint browser:true jquery:true*/
/*global alert*/
var config = {
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Amasty_Preorder/js/product/catalog-add-to-cart-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            addToCart: 'Magento_Msrp/js/msrp'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Magento_Search/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Magento_CheckoutAgreements/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Magento_CheckoutAgreements/js/model/set-payment-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurable: 'Magento_ConfigurableProduct/js/configurable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie',
            cookieNotices: 'Magento_Cookie/js/notices'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            downloadable: 'Magento_Downloadable/downloadable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderReview: 'Magento_Paypal/order-review',
            paypalCheckout: 'Magento_Paypal/js/paypal-checkout'
        }
    },
    paths: {
        paypalInContextExpressCheckout: 'https://www.paypalobjects.com/api/checkout'
    },
    shim: {
        paypalInContextExpressCheckout: {
            exports: 'paypal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftOptions:    'Magento_GiftMessage/gift-options',
            extraOptions:   'Magento_GiftMessage/extra-options'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            pageCache:  'Magento_PageCache/js/page-cache'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            braintree: 'https://js.braintreegateway.com/js/braintree-2.32.0.min.js'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            loadPlayer: 'Magento_ProductVideo/js/load-player',
            fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events'
        }
    },
    shim: {
        vimeoAPI: {}
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            catalogSearch: 'Magento_CatalogSearch/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    paths: {
        temandoCheckoutFieldsDefinition: 'Temando_Shipping/js/model/fields-definition',
        temandoDeliveryOptions: 'Temando_Shipping/js/model/delivery-options',
        temandoShippingRatesValidator: 'Temando_Shipping/js/model/shipping-rates-validator/temando',
        temandoShippingRatesValidationRules: 'Temando_Shipping/js/model/shipping-rates-validation-rules/temando'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'taxToggle': 'Magento_Weee/tax-toggle'
        }
    }
};

require.config(config);
})();



})(require);
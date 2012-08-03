$(function () {

    jQuery.validator.addMethod("defaultInvalid", function (value, element) {
        return !(element.value === element.defaultValue);
    });

//    jQuery.validator.addMethod("defaultSelectInvalid", function (value, element) {
//        return !(element.value === "-1");
    //    });
    jQuery.validator.addMethod("selectNone", function (value, element) {
        return !(element.value === '' || element.value === 0 || element.value === -1 || element.value === '-1');
    });

    jQuery.validator.addMethod("selectNone", function (value, element) {
        return !(element.value === '' || element.value === 0 || element.value === -1 || element.value === '-1');
    });

    jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
              phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
    }, "Please specify a valid phone number");

});
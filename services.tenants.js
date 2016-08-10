RapidRents.services.tenants = RapidRents.services.tenants || {};//assign to search the first not null value, otherwise set default to an empty object

RapidRents.services.tenants.add = function (myData, onSuccess, onError) {

    var url = "/api/tenants";
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: myData,
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "POST",
    };
    $.ajax(url, settings);
}

RapidRents.services.tenants.update = function (id, myData, onSuccess, onError) {

    var url = "/api/tenants/" + id;
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: myData,
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "PUT",
    };
    $.ajax(url, settings);


}

RapidRents.services.tenants.get = function (id, onSuccess, onError) {

    var url = "/api/tenants/" + id;
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET",
    };
    $.ajax(url, settings);
}

RapidRents.services.tenants.getAll = function (onSuccess, onError) {

    var url = "/api/tenants";
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    };
    $.ajax(url, settings);
}

RapidRents.services.tenants.deleteById = function (id, onSuccess, onError) {

    var url = "/api/tenants/" + id;
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "DELETE",
    }
    $.ajax(url, settings);
}

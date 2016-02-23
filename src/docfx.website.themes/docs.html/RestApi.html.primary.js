function transform(model, _attrs){
    var vm = {};
    // Copy default _attrs and override name/id
    for (var key in _attrs) {
        if (_attrs.hasOwnProperty(key)) {
            vm[key] = _attrs[key];
        }
    }
    // Copy model
    for (var key in model) {
        if (model.hasOwnProperty(key)) {
            vm[key] = model[key];
        }
    }
	return vm;
}

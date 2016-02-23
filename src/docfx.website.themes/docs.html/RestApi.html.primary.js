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
    
    // Sort the children by order
    if (vm.children) {
        var ordered = [];
        for (var i = 0; i < vm.children.length; i++) {
            var child = vm.children[i];
            child.conceptual = child.conceptual || ''; // set to empty incase mustache looks up
            if (vm._displayItems && child.uid) {
                var index = vm._displayItems.indexOf(child.uid);
                if (index > -1) {
                    ordered[index] = child;
                }
            }
        };
        if (vm._displayItems) {
            vm.children = ordered;
        }
    }
    
    return vm;
}

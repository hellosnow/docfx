function transform(model, _attrs){
  var swaggerContentKey = "_raw";
  var vm = {};
  if (model.hasOwnProperty(swaggerContentKey)) {
    vm[swaggerContentKey] = model[swaggerContentKey];
  }
  return vm;
}

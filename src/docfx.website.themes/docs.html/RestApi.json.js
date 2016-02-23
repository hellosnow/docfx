function transform(model, _attrs){
  var vm = {};
  if (model.hasOwnProperty("_raw")) {
    vm["content"] = model["_raw"];
  }
  return vm;
}

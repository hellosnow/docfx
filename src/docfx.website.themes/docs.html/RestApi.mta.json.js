function transform(model, _attrs){
    model.layout = "Reference";
	model.title = model.name;
	
  if (!model.toc_asset_id){
    model.toc_asset_id = _attrs._tocPath;
  }
	model.toc_rel = _attrs._tocRel;
	  if (!model.breadcrumb_path) {
    model.breadcrumb_path = "/toc.html";
  }
  
	model.content_git_url = "";
  // model.content_git_url = getContentGitUrl(model.items[0], model.newFileRepository);
  
  model.langs = ["cplusplus"];
  
  // Clean up unused predefined properties
  model.uid = undefined;
  model.htmlId = undefined;
  model.name = undefined;
  model.path = undefined;
  model.operation = undefined;
  model.operationId = undefined;
  model.description = undefined;
  model.summary = undefined;
  model._raw = undefined;
  model.children = undefined;
  
  model.conceptual = undefined;
	  model.newFileRepository = undefined;
	  
	  return {
    content: JSON.stringify(model)
  };
  
  function getContentGitUrl(item, newFileRepository) {
    if (!item) return '';
    if (!item.documentation || !item.documentation.remote) {
      return getNewFileUrl(item.uid, newFileRepository);
    } else {
      return getRemoteUrl(item.documentation.remote, item.documentation.startLine + 1);
    }
	}
}

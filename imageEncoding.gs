function getImageDetails (elementId) {
  var elementId = 'g3e23147e82_0_0';
  var elements = slide.getPageElements();
  for (var i = 0; i < elements.length; i ++){
     Logger.log(elements[i].getObjectId())
    if( elements[i].getObjectId() === elementId){
     Logger.log(elements[i].getTitle())
     var newData = JSON.parse(elements[i].getDescription())
     Logger.log(newData.objects[1].text)
    }
  }
}

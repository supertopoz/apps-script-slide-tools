//  var slides = SlidesApp.getActivePresentation();
//  var slide = slides.getSlides()[0];
//  var page = slide.getPageElements();


function updateExistingImageWithName(data) {
  var slides = SlidesApp.getActivePresentation();
  var slide = slides.getSlides()[0];
  var page = slide.getPageElements();
  var id = slides.getId();
    try {
     var resource = {"requests": [ {"updatePageElementAltText": {"objectId": data.elementId,"description": data.description,"title": data.title}}]};     
     Slides.Presentations.batchUpdate(resource, id); 
     return data;
    } catch (e){
     Logger.log(e)
     return e;
    }
    
  SlidesApp.getActivePresentation().saveAndClose()  
}

function updateImageData(id, title, slideNumber){
  //Logger.log(dataString)
  var title = title
   Logger.log(title)
  if(title === undefined) title = null;
 
  var data = {};
  data.elementId = id;
  data.description = dataString;
  data.title = title
  try{
   updateExistingImageWithName(data)
   return data;
  } catch (e){
  Logger.log(e)
  return e
  }

}

//function getImageDetails (elementId) {
//  var elementId = 'g3e225b055e_0_0';
//  var elements = slide.getPageElements();
//  for (var i = 0; i < elements.length; i ++){
//     Logger.log(elements[i].getObjectId())
//    if( elements[i].getObjectId() === elementId){
//     Logger.log(elements[i].getTitle())
//     var newData = JSON.parse(elements[i].getDescription())
//     Logger.log(newData.objects[0].src)
//    }
//  }
//}

 
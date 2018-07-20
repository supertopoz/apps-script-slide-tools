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
    } catch (e){
     Logger.log(e)
    }
    
  SlidesApp.getActivePresentation().saveAndClose()  
}

function update(){
  //Logger.log(dataString)
  var data = {};
  data.elementId = 'g3e2d2fc8e1_0_1';
  data.description = dataString;
  data.title = "boy V2"
  try{
   updateExistingImageWithName(data)
  } catch (e){
  Logger.log(e)
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

 
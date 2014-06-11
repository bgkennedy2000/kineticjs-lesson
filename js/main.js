var editor = editor || {};


editor.setStage = function() {
  editor.stage = new Kinetic.Stage({
        container: 'canvas',
        width: 600,
        height: 600
      });
}

editor.setLayer = function() {
  editor.layer = new Kinetic.Layer();
}

editor.createImageObj = function() {
  editor.imageObj = new Image();
}

editor.setImage = function() {  
  editor.imageObj.onload = function() {
    var image = new Kinetic.Image({
    x: 0,
    y: 0,
    image: editor.imageObj,
    width: 600,
    height: 600,
    wrap: "word"
    });

    editor.layer.add(image);
    editor.stage.add(editor.layer);
  }
}

editor.newText = function() {
  editor.text = new Kinetic.Text({
    x: 200,
    y: 200,
    fontFamily: 'Calibri',
    fontSize: 24,
    text: $('#text_box').val(),
    fill: 'black',
    draggable: true
  });
  editor.layer.add(editor.text);
  editor.stage.add(editor.layer);
} 

editor.changeTextColor = function() {
  var newTextColor = _(['blue', 'red', 'yellow', 'black']).sample();
  editor.text.setAttr("fill", newTextColor);
  editor.text.draw();
}

editor.fontUp = function() {
  var currentFontSize = editor.text.getAttr("fontSize");
  editor.text.setAttr("fontSize", currentFontSize * 1.2);
  editor.text.draw();
}

editor.fontDown = function() {
  var currentFontSize = editor.text.getAttr("fontSize");
  editor.text.setAttr("fontSize", currentFontSize * 0.8);
  editor.text.draw();
}

editor.inputClickHandler = function() {
  $('#text_button').submit(function(ev) {
    ev.preventDefault();
    editor.newText();
  }); 
}



editor.setup = function() {
  
  editor.createImageObj();
  editor.imageObj.src = 'upload.png';
  editor.setStage();
  editor.setLayer();
  editor.newText();
  editor.setImage();
  editor.inputClickHandler();

  

}
$(editor.setup);
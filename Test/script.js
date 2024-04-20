function chooseFile() {
    var fileInput = document.getElementById('fileInput');
    fileInput.click(); // Trigger the file input
  }

document.getElementById('fileInput').addEventListener('change', function() {
  var file = this.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var image = document.getElementById('myImage');
      image.src = e.target.result;
      image.alt = "Ảnh mới";
    };
    reader.readAsDataURL(file);
  }
});

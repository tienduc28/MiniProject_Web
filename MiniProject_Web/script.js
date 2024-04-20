const TTSV = {
    hoTen: "Trần Tiến Đức",
    namVaoTruong: "2020",
    bacDaoTao: "Đại học đại trà",
    chuongTrinh: "Khoa học máy tính 2020",
    khoaVienQuanLy: "Trường Công nghệ Thông tin và Truyền Thông",
    tinhTrangHocTap: "Đang học",
    gioiTinh: "Nam",
    lop: "Khoa học máy tính 05-K65",
    khoaHoc: "65",
    email: "duc.tt204643@sis.hust.edu.vn"
};

const info = {
    fullname: localStorage.getItem('fullName'),
    year: localStorage.getItem('year'),
    educationlevel: localStorage.getItem('educationLevel'),
    course: localStorage.getItem('course'),
    school: localStorage.getItem('school'),
    status: localStorage.getItem('status'),
    sex: localStorage.getItem('sex'),
    study: localStorage.getItem('study'),
    KH: localStorage.getItem('KH'),
    email: localStorage.getItem('email')
    };
    
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

console.log(TTSV);
console.log(info);

      



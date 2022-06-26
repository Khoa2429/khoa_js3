// Bài tập 1:
document.querySelector('#btnKetQuathi').onclick = function () {
    var khuVuc = document.querySelector('#chonKhuvuc').value;
    var Doituong = document.querySelector('#chonDoituong').value;
    var diemKhuvuc = 0;
    var diemDoituong = 0;
    var diemChuan= Number(document.querySelector('#diemChuan').value);
    var diemMonthu1 = Number(document.querySelector('#diemMonthu1').value);
    var diemMonthu2 = Number(document.querySelector('#diemMonthu2').value);
    var diemMonthu3 = Number(document.querySelector('#diemMonthu3').value);
    var ketQua='';
    
    if (khuVuc === 'A') {
        diemKhuvuc = 2;
    } else if (khuVuc === 'B') {
        diemKhuvuc = 1;
    } else if (khuVuc === 'C') {
        diemKhuvuc=0.5;
    } else {
        diemKhuvuc =0;
    }
    if (Doituong === 'mot') {
        diemDoituong = 2.5;
    } else if (khuVuc === 'hai') {
        diemKhuvuc = 1.5;
    } else if (khuVuc === 'ba') {
        diemDoituong=1;
    } else {
        diemDoituong =0;
    }
    var tongDiem= diemDoituong+diemKhuvuc+diemMonthu1+diemMonthu2+diemMonthu3;
    if (tongDiem >=diemChuan) {
        ketQua='Đậu';
    } else {ketQua='Rớt'}
    document.querySelector('#ketQuathi').innerHTML=ketQua;
}
// Bài tập 2: tính tiền điện:
document.querySelector('#btntinhTiendien').onclick=function(){
    var ten=document.querySelector('#hoTen').value;
    var soDien=Number(document.querySelector('#soDien').value);
    var thanhTien=0;
    if (soDien<=50) {
        thanhTien=soDien*500;
    } else if (soDien>50 && soDien<=100) {
        thanhTien=50*500+(soDien-50)*650;
    } else if (soDien>100 && soDien<=200) {
        thanhTien=50*500+50*650+(soDien-100)*850;
    } else if (soDien>200 && soDien<=350) {
        thanhTien=50*500+50*650+100*850+(soDien-200)*1100;
    }  else {
        thanhTien=50*500+50*650+100*850+150*1100+(soDien-350)*1300;  
    }
    document.querySelector('#ketQuatiendien').innerHTML='Tên khách hàng:'+ten+' -Số tiền điện của khách hàng: '+thanhTien+' VND';
}
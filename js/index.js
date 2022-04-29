$(document).ready(function(){
    var i=1;
    $("#btn2").click(function(){
        $("#myModal").modal();

    });
    function kiemTraTen(){
        var i=1;
        let mauKT =/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == ""){
            $("#tbName").html("Khong de trong");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("tbName").html("Moi ky tu dau viet hoa khong su dung so");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo(){
        var mauKT = /^\d*$/;
        if($("#Ao").val()==""){
            $("#tnAo").html("Khong de trong");
            return false;
        }
        if(!mauKT.test($("#Ao").val())){

            $("tbAo").html("Dung so tu 1 den 100");
            return false;
        }else   {
            var soAo =$("#Ao").val();
            if (soAo <1 || soAo > 100 ){
                $("#tbAo").html("tu 1 den 100");
            }else{
                $("#tnName").html("*");
                return true;
            }
        }
    }
    
    $("#Ao").blur(kiemTraSoAo);

    function kiemTraDiaChi(){
        var mauKT =/^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if  ($("#DC").val() == ""){
            $("#tbDC").html("Khong de trong");
            return  false;
        }
        if (!mauKT.test($("#DC").val())){
            $("#tbDc").html("Moi ky tu dau viet hoa khong su dung so");
            return true;
        }
        $("tbDc").html("*");
        return true;
    }
    $("#DC").blur(kiemTraDiaChi);

    function kiemTraNTT(){

        if ($("#NTT").val()==""){
            $("#tbNTT").html("Khong de trong");
            return false;
        }
        var today =new Date();
        var ntt = new Date($("#NTT").val());
        today=today.setDate(today.getDate()+7);
        if (today>ntt){
            $("#tbNTT").html("Phai sau ngat hien tai 7 ngay");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemTraNTT);

    function kiemTraSDT(){
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val()== ""){
            $("#tbSDT").html("Khong duoc de trong");
            return false;
        }
        if (!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("Theo Dang 0xxx-xxx-xxx trong do x la so");
            return true;
        }
        $("#tnSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    $("#Save").click(function() {
        if (kiemTraTen()==true &&kiemTraSoAo()==true&&kiemTraSDT()==true&&kiemTraNTT()==true&&kiemTraDiaChi()==true){
            row ="<tr>"
            row +="<tr>" + (i++)+"</th>";
            row +="<tr>" + $("#Name").val()+"</th>";
            row +="<tr>" + $("#Ao").val()+"</th>";
            row +="<tr>" + $("#DC").val()+"</th>";
            row +="<tr>" + $("#NTT").val()+"</th>";
            row +="<tr>" + $("#SDT").val()+"</th>";
            row +="<tr>" + $("#ADD").val()+"</th>";
            $("#danhSach").apend(row);
            $("#myModal").modal("hide");
        }
    })
})
        $(document) .ready (function () { 
   var i = 1; 
   $ ("# myBtn"). click (function () {
   $ ("# myModal"). modal ();
 });
  
   function KiemtraStt () { var re = / ^ [A-Z] {3} \ - [A-Z] {3} \ - \ d {2} \ - \ d {4} $ /;
    if ($ ("# txtStt"). val () == "") {
         $("#tbStt").html(". bắt buộc nhập"); 
         return false;
         }
          if (! re.test ($ ("# txtStt"). val ())) { 
              $ ("# tbStt"). html ("* STT: XXX-XXX-00-0000");
               return false; 
            }
             $ ("# tbStt"). html ("*"); 
             return true; } 
    $("#txtStt") .blur (KiemtraStt);
    function KiemtraScmnd () 
    { if ($("#txtScmnd").val() == "") {
         $("#tbScmnd").html(" bắt buộc nhập"); 
         return false; 
        }
         $("#tbScmnd").html(" "); 
         return true; 
         $ ("# txtScmnd") .blur (KiemtraScmnd); 
         fuction KiemtraQuequan(){
              if ($("#txtQuequan").val() == "") {
               $("#tbQuequan").html(" bắt buộc nhập");
                return false;
             }
              
         }
         $ ("# txtQuequan") .blur (KiemtraQuequan);
      
          function KTEmail () {
             var email = $("#txtEmail").val();
              if (email == "") { $("#tbEmail").html(". Bat buoc");
               return false; 
            }
             if (isNaN (email)) { 
                 $("#tbEmail").html("* Phai nhập so");
                  return false; 
                }
                 if (eval (email) < 0) { 
                 $("#tbEmail").html(". Phai nhập chu va so > 0"); 
                 return false; 
                }
                 $ ("# tbEmail"). html ("*");
                  return true;
            }
                   $ ("# txtEmail") .blur (KTEmail);
                   $ ("# btnSave"). nhấp vào (function () { 
                       if (!KiemtraStt () || !KiemtraScmnd () || !KiemtraQuequan () || !KTEmail ()) {
                            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin") 
                            return false;
                         }
                          var stt = $ ("# txtStt"). val ();
                           var SCMND = $ ("# txtScmnd"). val ();
                            var Quequan = $("#txtQuequan").val(); 
                            var Email = $ ("# txtEmail"). val (); 
                            var sdt $ ("# txtSdt"). val (); 
                            var anh = $ ("# txtAnh"). val (). substring (12);
var them = "<tr> <td>" + (i ++) + "</td> <td>" + stt + "</td> <td>" + SCMND "</td> <td>" + Quequan + "</td> <td>" + Email; + "</td> <td>" + sdt + "</td> </tr>" + anh + "</td> <td>"
                                   $ ("table tbody"). append (them);
                                    $ ("# myModal"). modal ("hide"); 
                                    return true; }) 
                                });
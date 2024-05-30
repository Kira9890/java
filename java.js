function sub(){

    var n1 = document.getElementById("n1").value;
    var n2= document.getElementById("n2").value;
    parseInt(document.getElementById("result").innerHTML =n1*n2) ;
}
 f = new Date();
 m = f.getHours();
     if(m==18);
     {
         a=prompt("كلمة السر")
     };
     if(a=="45")
     {
         alert('تم تفعيل الموقع بنجاح')
     };

        m=prompt("ماهواسمك")
        if (m=="سعد")
        {
            document.write("السلام عليكم")
        }
        else if (m=="محمد")
        {
            document.write("جيد")
        }
        else {
            document.write("لااعرفك")
        };

        var e = "thank you very much"
        document.getElementById("btn").onclick = function () {
          document.getElementById("res").innerHTML = e;
          //console.log("thank you")
        };
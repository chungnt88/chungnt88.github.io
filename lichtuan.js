let api="https://lichtuan.npc.com.vn/LT_WebAPI/api/PageBase/LichtuanJson?Madviqly=EVN&start=2023-04-17&end=2023-04-23&nvid=1&loai=1&xacthuc=Auth";

function get_lich(params) {
    var settings = {
        "url": "https://lichtuan.npc.com.vn/LT_WebAPI/api/PageBase/LichtuanJson?Madviqly=EVN&start=2023-04-17&end=2023-04-23&nvid=1&loai=1&xacthuc=Auth",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });   
}
window.onload = function() {
function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }

    document.getElementById('current_date_time_block').innerHTML = date_time();

    var date = new Date();
    var minutes = (date.getMinutes());
    if (minutes % 2 == 0)
        document.getElementById("head").innerHTML = "Игры по жанрам";
    else
        document.getElementById("head").innerHTML = "Андрей Солодухин";

r = Math.floor(Math.random() * (256))
g = Math.floor(Math.random() * (256))
b = Math.floor(Math.random() * (256))
var d = document.getElementById("head");
d.style.color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
 
        var urls  = [
            'fight.html',
            'novely.html',
            'platformer.html',
            'shuter.html'
        ];

        document.getElementById("random-link").addEventListener("click", function(){
            var url = urls[Math.floor(Math.random()*urls.length)]
            alert("вы собираетесь перейти по ссылке: " + url);
          this.href = url;
        });
    
}
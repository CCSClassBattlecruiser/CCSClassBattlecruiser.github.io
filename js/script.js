function daychange()
    {
    var time = new Date().getHours;
    element = document.getElementById('planeptune')
    if(6<time<20)
    {
            element.src="backgroudimage/1-day.jpg";
           }
        else
           {
            element.src="backgroudimage/1-night.jpg";
           }
    }
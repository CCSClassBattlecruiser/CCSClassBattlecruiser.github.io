function daychange()
    {
    var date =new Date();
    var time = date.getHours;
    element = document.getElementById('planeptune');
     if(6<time&&time<20)
    { 
        element.src="backgroudimage/1-day.jpg";
    }
    else
    {
    element.src="backgroudimage/1-night.jpg";
    }
    }
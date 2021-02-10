// PRELOADER

$(window).on('load', ()=>{
    $("#status").delay(350).fadeOut();
    $("#preloader").delay(350).fadeOut();
});

$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        //get section ID #home #about

        var section_id = $(this).attr("href"); //this => current link clicked

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250, "easeInOutExpo");
    });
});




$(document).ready(()=>{

    var entries = [
        {label: 'JAVA'},
        {label: 'NODE JS'},
        {label: 'ANGULAR'},
        {label: 'MONGO DB'},
        {label: 'HTML'},
        {label: 'CSS'},
        {label: 'GIT'},
        {label: 'Algorithms'},
        {label: 'C/C++'},
        {label: 'Android'}
    ];

    var settings = {
        entries : entries,
        width : '100px',
        height : '100px',
        radius: '65%',
        bgDraw:true,
        bgColor: 'rgb(1, 22, 39)',
        opacityOver:1.00,
        opacityOut:0.05,
        opacitySpeed:6,
        fov:800,
        speed:1,
        fontFamily: 'Raleway, sans-serif',
        fontSize: '20',
        fontColor: '#E71D36',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        fontToUpperCase: true
    };

    //

    if(screen.width>=768){
        changeVAL(640);
    }

    if(screen.width<768 && screen.width>=450){
        changeVAL(400);
    }

    else if(screen.width<450){
        changeVAL(320);
        changeFNT(10,35)
    }

    
    function changeVAL(res){
        settings.width = res+'px';
        settings.height = res+'px';
    }

    function changeFNT(fnt,rad){
        settings.fontSize = 'fnt';
        settings.radius = rad+'%';
    }


    $('#tag').svg3DTagCloud(settings)

    

    
});



//portfolio
$(window).on('load', ()=>{
    // intialize isotope
    $("#isotope-container").isotope({});
    
    // filter items on button click
    $("#isotope-filters").on( 'click', 'button', function() {
        // get filter value
        var filterValue= $(this).attr('data-filter');
            
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
           
    });
});


/*============================================
            Mobile Menu
============================================*/
$(function(){
    //show mobile navigation
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");
    });
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height","0%");
    });
    
    
});


/*============================================
           MAP
============================================*/
$(window).on('load', ()=>{
    
	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1Ijoib21haXJhciIsImEiOiJja2E4aWkzY2MwZDRmMnlwY3JkeHlyZjR6In0.kD7nj4AfModhfbxM5G2AaA';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [78.496865, 17.347832], // starting position [lng, lat]
        zoom: 14.9 // starting zoom
    });

    var geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [78.496865, 17.347832]
          },
          properties: {
            title: 'I Can Be Found Here',
            description: 'Hyderabad, Telengana'
          }
        }]
      };

    // add markers to map
    geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
      .addTo(map);
    });
  
    

    
});



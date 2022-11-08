// const apiKey = "pk.eyJ1IjoibWVydWVtOTIiLCJhIjoiY2xhNWRyN3JkMWJvbTNvcXZvYXU0cWl0aiJ9.pWdlzMRfATUD5FvD1fkOUA"

// const myMap = L.map('map').setView([48.848795, 2.242751], 6);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(myMap);

// // adding markers
// const marker = L.marker([48.86855929293761, 2.784103507725828]).addTo(myMap);

// // adding popup
// // marker.bindPopup("Yo sekai !");
// // marker.bindPopup("<h1>Yo sekai !</h1>").openPopup();  // showing popup when load
// let template = `
//     <h1>Yo sekai !</h1>
//     <img src="images/disney.jpg" alt="" />
// `
// marker.bindPopup(template);

// //adding circle
// const circle = L.circle([48.86855929293761, 2.784103507725828], {
//     radius: 500,
//     color: "gray",
//     // fillColor: "red",
//     // fillOpacity: .2
// }).addTo(myMap)

// ------------------------------------------------
mapboxgl.accessToken =
  "pk.eyJ1IjoibWVydWVtOTIiLCJhIjoiY2xhNWRyN3JkMWJvbTNvcXZvYXU0cWl0aiJ9.pWdlzMRfATUD5FvD1fkOUA";

const map = new mapboxgl.Map({
  container: "map",
  //   style: 'mapbox://styles/mapbox/light-v10',
  // style: 'mapbox://styles/meruem92/cla6k8k0w005v15o42page5q4',
  style: "mapbox://styles/meruem92/cla6ktb2n001v16nw5ludpq67",
  center: [2.5, 48],
  zoom: 4.4,
});

// var myLayer = L.mapbox.featureLayer().addTo(map);

let template = `
    <h1>Yo sekai !</h1>
    <img src="images/disney.jpg" alt="" />
`;
var geoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [2.3484063461432183, 48.857478354732855],
      },
      properties: {
        tooltip: "Tooltip 1",
        title: "Haute École de la Joaillerie (75)",
        description: "Haute École de la Joaillerie (75)", 
        'marker-size': 'large',
        'marker-color': '#444',
        'marker-symbol': '1',

        adresse1: "58 rue du Louvre, Paris (75002)",
        tel1: "+33 (0)1 40 26 98 00",

        localisation: "Parc Techonologue Henri Farman",
        adresse2: "3 rue Max Holste, Reims (51685)",
        tel2: "+33 (0)1 40 26 98 00",

        cursus: "Cursus",

        c1: "CSJ",
        desc1: "Certificat Supérieur de Joaillerie",
        c2: "CAP / BMA Bijouterie Joaillerie ",
        desc2: "Option Bijouterie",
        c3: "CAP / BMA Bijouterie Joaillerie ",
        desc3: "Option Sertissage",

        c4: "CSJ",
        desc4: "Certificat Supérieur de Joaillerie",
        c5: "CAP / BMA Bijouterie Joaillerie ",
        desc5: "Option Bijouterie",
        c6: "CAP / BMA Bijouterie Joaillerie ",
        desc6: "Option Sertissage",

        qrCode: "../images/qr-code.png",
        goSite: "Accédez au site de l’école",
        // Store the image url and caption in an array.
        images: [
          [
            "../images/logo-university.png",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "2 Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-3.721208820629982, 40.72384968227116],
      },
      properties: {
        tooltip: "Tooltip 2",
        title: "Mapbox",
        description: "Spain, España",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 3",
        title: "Lincoln Park",
        description: "A northside park that is home to the Lincoln Park Zoo",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.637596, 41.940403],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 4",
        title: "Burnham Park",
        description: "A lakefront park on Chicago's south side",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.603735, 41.829985],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 5",
        title: "Millennium Park",
        description:
          "A downtown park known for its art installations and unique architecture",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.622554, 41.882534],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 6",
        title: "Grant Park",
        description:
          "A downtown park that is the site of many of Chicago's favorite festivals and events",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.619185, 41.876367],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 7",
        title: "Humboldt Park",
        description: "A small park on Chicago's northwest side",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.70199, 41.905423],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 8",
        title: "Douglas Park",
        description:
          "A small park near in Chicago's North Lawndale neighborhood",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.699329, 41.860092],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 9",
        title: "Calumet Park",
        description:
          "A park on the Illinois-Indiana border featuring a historic fieldhouse",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.530221, 41.715515],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 10",
        title: "Jackson Park",
        description:
          "A lakeside park that was the site of the 1893 World's Fair",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.580389, 41.783185],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        tooltip: "Tooltip 11",
        title: "Columbus Park",
        description: "A small park in Chicago's Austin neighborhood",

        // Store the image url and caption in an array.
        images: [
          [
            "https://i.imgur.com/O6QEpBs.jpg",
            "The U.S. Capitol after the burning of Washington during the War of 1812",
          ],
          [
            "https://i.imgur.com/xND1MND.jpg",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
          ],
          [
            "https://i.imgur.com/EKJmqui.jpg",
            "The National Cherry Blossom Festival is celebrated around the city each spring.",
          ],
        ],
        icon: {
          iconUrl: "../images/marker-figma.svg",
          // iconSize: [20, 20], // size of the icon
          iconAnchor: [10, 25], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
          className: "dot",
        },
        //   'marker-color': '#1F2F37',
        //   'marker-symbol': 'circle',
        //   'marker-size': 'small',
      },
      geometry: {
        coordinates: [-87.769775, 41.873683],
        type: "Point",
      },
    },
  ],
};

map.on("load", function () {
  geoJson.features.forEach(function (marker, i) {
    var el = document.createElement("div");
    el.className = "marker";
    el.innerHTML = '<span><b>' + (i + 1) + '</b></span>'

    el.style.backgroundImage =
      "../images/marker-figma.svg";
    el.style.width = 25 + "px";
    el.style.height = 28 + "px";

    var images = marker.properties.images;
    var slideshowContent = "";
    
  var tooltip = marker.properties.tooltip;

    for (var i = 0; i < images.length; i++) {
      var img = images[i];

      slideshowContent +=
        '<div class="popup-slider' +
        (i === 0 ? " active" : "") +
        '">'+
        "<div class='popup-left'>" 
          + 
          '<img src="' +
          img[0] +
          '" />' 
          + "<p>" + marker.properties.adresse1 + "</p>" + "<p>" + marker.properties.tel1 +"</p>" 
          + "<p>" + marker.properties.localisation + "</p>" + "<p>" + marker.properties.adresse2 +"</p>"  + "<p>" + marker.properties.tel2 + "</p>"
        +"</div>"+
        
        "<div class='popup-right'>"+
          "<div class='popup__qrCode'>" + "<img alt='logo' src="+ marker.properties.qrCode + " />" + 
          "<p>" + marker.properties.goSite + "</p>" +
        "</div>"
        +"</div>"+ 
        "</div>";
    }

    var popupContent =
      '<div id="' +
      marker.properties.id +
      '" class="popup">' +
      
      '<div class="slideshow">' +
      slideshowContent +
      "</div>" +
        '<div class="cycle">' +
          '<a href="#" class="prev">&laquo; Previous</a>' +
          '<a href="#" class="next">Next &raquo;</a>' +
        "</div>";
    ("</div>");

    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);
    var tool = new mapboxgl.Popup({ offset: 25 }) ;




    // ------------------------------
      // Change the cursor style as a UI indicator.
      // map.getCanvas().style.cursor = 'pointer';
      
      // // Copy coordinates array.
      // const coordinates = marker.geometry.coordinates.slice();
      // const description = marker.properties.description;
      
      // // Ensure that if the map is zoomed out such that multiple
      // // copies of the feature are visible, the popup appears
      // // over the copy being pointed to.
      // // while (Math.abs(marker.lngLat.lng - coordinates) > 180) {
      // // coordinates += marker.lngLat.lng > coordinates ? 360 : -360;
      // // }
      
      // // Populate the popup and set its coordinates
      // // based on the feature found.
      // tool.setLngLat(coordinates).setHTML("<div class='tooltip-desc'>" + description + "</div>" ).addTo(map);
        
      // var toolDesc = document.getElementsByClassName('tooltip-desc')[0].parentNode.parentNode;
      // // var removeTip =  document.getElementsByClassName('mapboxgl-popup-tip')[0];
      // toolDesc.removeChild(toolDesc.firstElementChild)
      // // toolDesc.firstElementChild.remove();
      // // // destroy(removeTip);
      // console.log(toolDesc)
      // ------------------------------



    
    // create a HTML element for each feature
    // var el = document.getElementsByClassName('marker');
    // el.className = 'marker-';
    // el.innerHTML = '<span><b>' + (i + 1) + '</b></span>'


    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(popup)
      .addTo(map);


      
    for (var i = 0; i < tooltip.length; i++) {
      // marker.bindTooltip(tooltip, {direction: 'top', offset: [-0, 28]}).on('click', function () { return true }).openTooltip();
      // closeOnClick: false
      // console.dir(tooltip);
    }
  });
});

$("#map").on("click", ".popup .cycle a", function () {
  var $slideshow = $(".slideshow"),
    $newSlide;

  if ($(this).hasClass("prev")) {
    $newSlide = $slideshow.find(".active").prev();
    if ($newSlide.index() < 0) {
      $newSlide = $(".popup-slider").last();
    }
  } else {
    $newSlide = $slideshow.find(".active").next();
    if ($newSlide.index() < 0) {
      $newSlide = $(".popup-slider").first();
    }
  }

  $slideshow.find(".active").removeClass("active").hide();
  $newSlide.addClass("active").show();
  return false;
});

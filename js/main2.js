L.mapbox.accessToken = process.env.MAPBOX_API_KEY;
var map = L.mapbox
  .map("map")
  .setView([48, 2.5], 5)
  .addLayer(
    L.mapbox.styleLayer("mapbox://styles/meruem92/cla6ktb2n001v16nw5ludpq67")
  );

var myLayer = L.mapbox.featureLayer().addTo(map);

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
        description: template, 
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

        qrCode: "/images/qr-code.png",
        goSite: "Accédez au site de l’école",
        // Store the image url and caption in an array.
        images: [
          [
            "/images/logo-university.png  ",
            "Ford's Theatre in the 19th century, site of the 1865 assassination of President Lincoln",
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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
          iconUrl: "images/marker-figma.svg",
          iconSize: [20, 20], // size of the icon
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

// Add custom popup html to each marker.
myLayer.on("layeradd", function (e) {
  var marker = e.layer;
  // marker.bindTooltip("my tooltip text").openTooltip();

  var feature = marker.feature;
  var images = feature.properties.images;
  var tooltip = feature.properties.tooltip;
  var slideshowContent = "";

  for (var i = 0; i < images.length; i++) {
    var img = images[i];

    slideshowContent +=
      '<div class="popup-slider' +
      (i === 0 ? " active" : "") +
      '">' +
      '<img src="' +
      img[0] +
      '" />' +
      '<div class="caption">' +
      img[1] +
      "</div>" +
      "</div>";

    //     L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
    // .addTo(map);
  }

  // Create custom popup content
  var popupContent ='<div id="' + feature.properties.id + '" class="popup">' +
  '<h2>' + feature.properties.title + '</h2>' +
  '<div class="slideshow">' +
      slideshowContent +
  '</div>' +
  '<div class="cycle">' +
      '<a href="#" class="prev">&laquo; Previous</a>' +
      '<a href="#" class="next">Next &raquo;</a>' +
  '</div>'
'</div>';

  // http://leafletjs.com/reference.html#popup
  marker.bindPopup(popupContent, {
    // closeButton: false,
    minWidth: 320,
  });

  marker.setIcon(L.icon(feature.properties.icon));

  for (var i = 0; i < tooltip.length; i++) {
    marker.bindTooltip(tooltip, {direction: 'top', offset: [-0, 28]}).on('click', function () { return true }).openTooltip();
    closeOnClick: false
    console.dir(tooltip);
  }
});

myLayer.setGeoJSON(geoJson);


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

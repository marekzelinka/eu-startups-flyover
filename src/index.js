import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const startups = [
  {
    location: [-0.167249, 51.493132],
    name: "Babylon Health",
    description:
      "Babylon Health aims to provide accessible, affordable healthcare by combining AI with doctors.",
    linkedin: "https://www.linkedin.com/company/babylonhealth/",
  },
  {
    location: [21.02303091390573, 52.22945498221201],
    name: "Docplanner Tech",
    description:
      "DocPlanner is a booking platform and management software provider for doctors.",
    linkedin: "https://www.linkedin.com/company/docplanner/",
  },
  {
    location: [18.062513129183202, 59.337360593539735],
    name: "Klarna Bank",
    description:
      "Klarna is an e-commerce payment solutions platform for merchants and shoppers.",
    linkedin: "http://www.linkedin.com/company/klarna-ab/",
  },
  {
    location: [24.74757100434462, 59.42426256895523],
    name: "Bolt",
    description:
      "Bolt provides a ride-sharing platform that connects passengers and drivers from different countries.",

    linkedin: "https://www.linkedin.com/company/taxify/",
  },
  {
    location: [-0.07844122167434352, 51.539934138853795],
    name: "AccuRx",
    description:
      "AccuRx is on a mission to bring patients and their healthcare teams together.",
    linkedin: "https://www.linkedin.com/company/accurx/",
  },
  {
    location: [2.3086912273157068, 48.886670329300586],
    name: "Payfit",
    description:
      "Payfit allows small and medium enterprises to easily and quickly pay their employees.",
    linkedin: "https://www.linkedin.com/company/payfit/",
  },
  {
    location: [2.3631121694684807, 48.87683122252165],
    name: "Alan",
    description:
      "Alan is a digital health insurance platform with a focus on user experience with an excellent price-quality ratio health plan.",
    linkedin: "https://www.linkedin.com/company/10424439/",
  },
  {
    location: [2.3250984831347283, 48.87844076554885],
    name: "Spendesk",
    description:
      "Spendesk is the all-in-one spend management platform built for employees and finance.",
    linkedin: "https://www.linkedin.com/company/spendesk",
  },
  {
    location: [12.52985359661567, 56.17018231183657],
    name: "Pleo",
    description:
      "Pleo offers smart payment cards for employees for them to buy things they need for work, while keeping the companies in control of spending.",
    linkedin: "https://www.linkedin.com/company/pleo-company/",
  },
  {
    location: [13.407055195060586, 53.02687684848117],
    name: "N26",
    description:
      "N26 offers mobile banking solutions to customers in the European Union through its subsidiary.",
    linkedin: "https://www.linkedin.com/company/n26/",
  },
  {
    location: [0.00201221732959088, 51.86674409350798],
    name: "Transferwise",
    description:
      "TransferWise is a money transfer service allowing private individuals and businesses to send money abroad without hidden charges.",
    linkedin: "https://www.linkedin.com/company/transferwise",
  },
  {
    location: [2.3536911069966577, 48.88925775200902],
    name: "Front",
    description: "Front App is the shared inbox for teams.",
    linkedin: "https://www.linkedin.com/company/front-app/",
  },
  {
    location: [11.224038460415905, 48.229920570049615],
    name: "Lilium",
    description:
      "Lilium is a Munich-based startup developing a revolutionary on-demand air mobility service.",
    linkedin: "https://www.linkedin.com/company/lilium-aviation-",
  },
  {
    location: [3.5467705067550472, 49.39514416120203],
    name: "Meero",
    description:
      "Meero is an AI company providing enhanced photography services.",
    linkedin: "https://www.linkedin.com/company/meero/",
  },
  {
    location: [13.401151044608937, 52.52639045501625],
    name: "Pitch",
    description:
      "Pitch offers a next generation of content collaboration and presentation software.",
    linkedin: "https://www.linkedin.com/company/27222819/",
  },
  {
    location: [8.493753827277946, 47.378220546339186],
    name: "Coople",
    description:
      "Coople operates as a staffing platform that connects companies and workers.",
    linkedin: "https://www.linkedin.com/company/coople/",
  },
  {
    location: [2.7732010506225313, 42.463132454510905],
    name: "Glovo",
    description:
      "Glovo allows customers to track their deliveries in real-time and locate the nearest glover (courier).",
    linkedin: "http://www.linkedin.com/company/glovo-app/",
  },
  {
    location: [11.798182447122436, 49.34832903395094],
    name: "Personio",
    description:
      "Personio offers a holistic HR management and recruiting solution for Startups and SMEs.",
    linkedin: "https://www.linkedin.com/company/personio/",
  },
];

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: startups[0].location,
  zoom: 12,
});

for (const startup of startups) {
  new mapboxgl.Marker()
    .setLngLat(startup.location)
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `<h2>${startup.name}</h2><p>${startup.description}</p><a href=${startup.linkedin}>LinkedIn</a>`
      )
    )
    .addTo(map);
}

// when we click the button, the map is centered on startups[0], we want to
// move to the next one
let index = 1;

document.getElementById("fly").addEventListener("click", function () {
  console.log("clicked", index, startups[index].location);
  map.flyTo({
    center: startups[index].location,
    essential: true, // ignore reduce-motion pref
  });

  index = (index + 1) % startups.length;
});

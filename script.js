document.addEventListener("DOMContentLoaded", function (event) {
  let dList = document.getElementById("dropdown1");
  let str = "";
  for (let i in timeZones) {
    str += `<li value = ${timeZones[i]["GMT Offset"]}> <a class="dropdown-item" href="#" onclick= ChangeZone(${i})>${timeZones[i]["Time Zone"]}</a></li> `;
    dList.innerHTML = str;
  }
});

// jQuery soln by Amal

// $(document).ready(function () {
//   var options = "";
//   for (var i in timeZones) {
//     //s.push(zones[i]);
//     options +=
//       "<li value = '" +
//       timeZones[i]["GMT Offset"] +
//       "'><a class='dropdown-item' href='#' onclick= 'ChangeZone(this)'>" +
//       timeZones[i]["Time Zone"] +
//       "</a></li>";
//   }

//   $("#dropdown1").html(options);

//   //   $("li a").click(function (e) {
//   //     e.preventDefault();

//   //     // do something with the value here...
//   //   });
//   console.log(options);
// });

// function ChangeZone(ob) {
//   var value = $(ob).closest("li").attr("value"); // = 9
//   alert(value);
// }
var timeZones = [
  {
    "Time Zone": "Asia/Kabul",
    "GMT Offset": 4.5,
  },
  {
    "Time Zone": "Europe/Tirane",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Algiers",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Pacific/Pago_Pago",
    "GMT Offset": -11,
  },
  {
    "Time Zone": "Europe/Andorra",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Luanda",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Anguilla",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Antarctica/Casey",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Antarctica/Davis",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Antarctica/DumontDUrville",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "Antarctica/Mawson",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Antarctica/McMurdo",
    "GMT Offset": 13,
  },
  {
    "Time Zone": "Antarctica/Palmer",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Antarctica/Rothera",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Antarctica/Syowa",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Antarctica/Vostok",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "America/Antigua",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Argentina/Buenos_Aires",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/Catamarca",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/Cordoba",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/Jujuy",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/La_Rioja",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/Mendoza",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/Rio_Gallegos",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/Salta",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/San_Juan",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/San_Luis",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/Tucuman",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Argentina/Ushuaia",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Asia/Yerevan",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "America/Aruba",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Antarctica/Macquarie",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Australia/Adelaide",
    "GMT Offset": 10.5,
  },
  {
    "Time Zone": "Australia/Brisbane",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "Australia/Broken_Hill",
    "GMT Offset": 10.5,
  },
  {
    "Time Zone": "Australia/Darwin",
    "GMT Offset": 9.5,
  },
  {
    "Time Zone": "Australia/Eucla",
    "GMT Offset": "+08:45",
  },
  {
    "Time Zone": "Australia/Hobart",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Australia/Lindeman",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "Australia/Lord_Howe",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Australia/Melbourne",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Australia/Perth",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Australia/Sydney",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Europe/Vienna",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Baku",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "America/Nassau",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Asia/Bahrain",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Asia/Dhaka",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "America/Barbados",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Europe/Minsk",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Europe/Brussels",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Belize",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "Africa/Porto-Novo",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Atlantic/Bermuda",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Asia/Thimphu",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "America/La_Paz",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Kralendijk",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Europe/Sarajevo",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Gaborone",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "America/Araguaina",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Bahia",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Belem",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Boa_Vista",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Campo_Grande",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Cuiaba",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Eirunepe",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Fortaleza",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Maceio",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Manaus",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Noronha",
    "GMT Offset": -2,
  },
  {
    "Time Zone": "America/Porto_Velho",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Recife",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Rio_Branco",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Santarem",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Sao_Paulo",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Indian/Chagos",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "Asia/Brunei",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Europe/Sofia",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Africa/Bujumbura",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Phnom_Penh",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Africa/Douala",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Atikokan",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Blanc-Sablon",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Cambridge_Bay",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Creston",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Dawson",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Dawson_Creek",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Edmonton",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Fort_Nelson",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Glace_Bay",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Goose_Bay",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Halifax",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Inuvik",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Iqaluit",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Moncton",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Nipigon",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Pangnirtung",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Rainy_River",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Rankin_Inlet",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Regina",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Resolute",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/St_Johns",
    "GMT Offset": -3.5,
  },
  {
    "Time Zone": "America/Swift_Current",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Thunder_Bay",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Toronto",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Vancouver",
    "GMT Offset": -8,
  },
  {
    "Time Zone": "America/Whitehorse",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Winnipeg",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Yellowknife",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "Atlantic/Cape_Verde",
    "GMT Offset": -1,
  },
  {
    "Time Zone": "America/Cayman",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Africa/Bangui",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Ndjamena",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Punta_Arenas",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Santiago",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Pacific/Easter",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Asia/Shanghai",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Asia/Urumqi",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "Indian/Christmas",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Indian/Cocos",
    "GMT Offset": 6.5,
  },
  {
    "Time Zone": "America/Bogota",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Indian/Comoro",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Africa/Brazzaville",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Kinshasa",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Lubumbashi",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Pacific/Rarotonga",
    "GMT Offset": -10,
  },
  {
    "Time Zone": "America/Costa_Rica",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "Europe/Zagreb",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Havana",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Curacao",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Asia/Famagusta",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Nicosia",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Prague",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Copenhagen",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Djibouti",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "America/Dominica",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Santo_Domingo",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Guayaquil",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Pacific/Galapagos",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "Africa/Cairo",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "America/El_Salvador",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "Africa/Malabo",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Asmara",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Europe/Tallinn",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Africa/Addis_Ababa",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Atlantic/Stanley",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Pacific/Fiji",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Europe/Helsinki",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Paris",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Cayenne",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Pacific/Gambier",
    "GMT Offset": -9,
  },
  {
    "Time Zone": "Pacific/Marquesas",
    "GMT Offset": -9.5,
  },
  {
    "Time Zone": "Pacific/Tahiti",
    "GMT Offset": -10,
  },
  {
    "Time Zone": "Indian/Kerguelen",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Africa/Libreville",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Tbilisi",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "Europe/Berlin",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Busingen",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Gibraltar",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Athens",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "America/Nuuk",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Scoresbysund",
    "GMT Offset": -1,
  },
  {
    "Time Zone": "America/Thule",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Grenada",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Guadeloupe",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Pacific/Guam",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "America/Guatemala",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Guyana",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Port-au-Prince",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Europe/Vatican",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Tegucigalpa",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "Asia/Hong_Kong",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Europe/Budapest",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Kolkata",
    "GMT Offset": 5.5,
  },
  {
    "Time Zone": "Asia/Jakarta",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Jayapura",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Asia/Makassar",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Asia/Pontianak",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Tehran",
    "GMT Offset": 3.5,
  },
  {
    "Time Zone": "Asia/Baghdad",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Asia/Jerusalem",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Rome",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Jamaica",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Asia/Tokyo",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Asia/Amman",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Almaty",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "Asia/Aqtau",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Asia/Aqtobe",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Asia/Atyrau",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Asia/Oral",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Asia/Qostanay",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "Asia/Qyzylorda",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Africa/Nairobi",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Pacific/Kanton",
    "GMT Offset": 13,
  },
  {
    "Time Zone": "Pacific/Kiritimati",
    "GMT Offset": 14,
  },
  {
    "Time Zone": "Pacific/Tarawa",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Asia/Pyongyang",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Asia/Seoul",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Asia/Kuwait",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Asia/Bishkek",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "Asia/Vientiane",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Europe/Riga",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Beirut",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Africa/Maseru",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Africa/Tripoli",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Vaduz",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Vilnius",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Luxembourg",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Macau",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Europe/Skopje",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Indian/Antananarivo",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Africa/Blantyre",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Kuala_Lumpur",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Asia/Kuching",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Indian/Maldives",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Europe/Malta",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Pacific/Kwajalein",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Pacific/Majuro",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "America/Martinique",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Indian/Mauritius",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "Indian/Mayotte",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "America/Bahia_Banderas",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Cancun",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Chihuahua",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Hermosillo",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Matamoros",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Mazatlan",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Merida",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Mexico_City",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Monterrey",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Ojinaga",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Tijuana",
    "GMT Offset": -8,
  },
  {
    "Time Zone": "Pacific/Chuuk",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "Pacific/Kosrae",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Pacific/Pohnpei",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Europe/Chisinau",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Monaco",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Choibalsan",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Asia/Hovd",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Ulaanbaatar",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Europe/Podgorica",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "America/Montserrat",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Africa/Casablanca",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Maputo",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Yangon",
    "GMT Offset": 6.5,
  },
  {
    "Time Zone": "Africa/Windhoek",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Pacific/Nauru",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Asia/Kathmandu",
    "GMT Offset": "+05:45",
  },
  {
    "Time Zone": "Europe/Amsterdam",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Pacific/Noumea",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Pacific/Auckland",
    "GMT Offset": 13,
  },
  {
    "Time Zone": "Pacific/Chatham",
    "GMT Offset": "+13:45",
  },
  {
    "Time Zone": "America/Managua",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "Africa/Niamey",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Lagos",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Pacific/Niue",
    "GMT Offset": -11,
  },
  {
    "Time Zone": "Pacific/Norfolk",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Pacific/Saipan",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "Europe/Oslo",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Muscat",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "Asia/Karachi",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Pacific/Palau",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Asia/Gaza",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Hebron",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "America/Panama",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Pacific/Bougainville",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Pacific/Port_Moresby",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "America/Asuncion",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/Lima",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Asia/Manila",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Pacific/Pitcairn",
    "GMT Offset": -8,
  },
  {
    "Time Zone": "Europe/Warsaw",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Atlantic/Azores",
    "GMT Offset": -1,
  },
  {
    "Time Zone": "America/Puerto_Rico",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Asia/Qatar",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Europe/Bucharest",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Anadyr",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Asia/Barnaul",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Chita",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Asia/Irkutsk",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Asia/Kamchatka",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Asia/Khandyga",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Asia/Krasnoyarsk",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Magadan",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Asia/Novokuznetsk",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Novosibirsk",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Omsk",
    "GMT Offset": 6,
  },
  {
    "Time Zone": "Asia/Sakhalin",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Asia/Srednekolymsk",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Asia/Tomsk",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Ust-Nera",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "Asia/Vladivostok",
    "GMT Offset": 10,
  },
  {
    "Time Zone": "Asia/Yakutsk",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Asia/Yekaterinburg",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Europe/Astrakhan",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "Europe/Kaliningrad",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Kirov",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Europe/Moscow",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Europe/Samara",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "Europe/Saratov",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "Europe/Ulyanovsk",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "Europe/Volgograd",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Africa/Kigali",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Indian/Reunion",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "America/St_Barthelemy",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/St_Kitts",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/St_Lucia",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Marigot",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/Miquelon",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "America/St_Vincent",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Pacific/Apia",
    "GMT Offset": 13,
  },
  {
    "Time Zone": "Europe/San_Marino",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Riyadh",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Europe/Belgrade",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Indian/Mahe",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "Asia/Singapore",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "America/Lower_Princes",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Europe/Bratislava",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Ljubljana",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Pacific/Guadalcanal",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "Africa/Mogadishu",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Africa/Johannesburg",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Atlantic/South_Georgia",
    "GMT Offset": -2,
  },
  {
    "Time Zone": "Africa/Juba",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Africa/Ceuta",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Madrid",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Colombo",
    "GMT Offset": 5.5,
  },
  {
    "Time Zone": "Africa/Khartoum",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "America/Paramaribo",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Arctic/Longyearbyen",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Africa/Mbabane",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Stockholm",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Zurich",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Damascus",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Taipei",
    "GMT Offset": 8,
  },
  {
    "Time Zone": "Asia/Dushanbe",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Africa/Dar_es_Salaam",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Asia/Bangkok",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "Asia/Dili",
    "GMT Offset": 9,
  },
  {
    "Time Zone": "Pacific/Fakaofo",
    "GMT Offset": 13,
  },
  {
    "Time Zone": "Pacific/Tongatapu",
    "GMT Offset": 13,
  },
  {
    "Time Zone": "America/Port_of_Spain",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Africa/Tunis",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Europe/Istanbul",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Asia/Ashgabat",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "America/Grand_Turk",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "Pacific/Funafuti",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Africa/Kampala",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Europe/Kiev",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Simferopol",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Europe/Uzhgorod",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Zaporozhye",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Asia/Dubai",
    "GMT Offset": 4,
  },
  {
    "Time Zone": "America/Adak",
    "GMT Offset": -10,
  },
  {
    "Time Zone": "America/Anchorage",
    "GMT Offset": -9,
  },
  {
    "Time Zone": "America/Boise",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Chicago",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Denver",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Detroit",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Indiana/Indianapolis",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Indiana/Knox",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Indiana/Marengo",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Indiana/Petersburg",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Indiana/Tell_City",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Indiana/Vevay",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Indiana/Vincennes",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Indiana/Winamac",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Juneau",
    "GMT Offset": -9,
  },
  {
    "Time Zone": "America/Kentucky/Louisville",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Kentucky/Monticello",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Los_Angeles",
    "GMT Offset": -8,
  },
  {
    "Time Zone": "America/Menominee",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Metlakatla",
    "GMT Offset": -9,
  },
  {
    "Time Zone": "America/New_York",
    "GMT Offset": -5,
  },
  {
    "Time Zone": "America/Nome",
    "GMT Offset": -9,
  },
  {
    "Time Zone": "America/North_Dakota/Beulah",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/North_Dakota/Center",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/North_Dakota/New_Salem",
    "GMT Offset": -6,
  },
  {
    "Time Zone": "America/Phoenix",
    "GMT Offset": -7,
  },
  {
    "Time Zone": "America/Sitka",
    "GMT Offset": -9,
  },
  {
    "Time Zone": "America/Yakutat",
    "GMT Offset": -9,
  },
  {
    "Time Zone": "Pacific/Honolulu",
    "GMT Offset": -10,
  },
  {
    "Time Zone": "Pacific/Midway",
    "GMT Offset": -11,
  },
  {
    "Time Zone": "Pacific/Wake",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "America/Montevideo",
    "GMT Offset": -3,
  },
  {
    "Time Zone": "Asia/Samarkand",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Asia/Tashkent",
    "GMT Offset": 5,
  },
  {
    "Time Zone": "Pacific/Efate",
    "GMT Offset": 11,
  },
  {
    "Time Zone": "America/Caracas",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Asia/Ho_Chi_Minh",
    "GMT Offset": 7,
  },
  {
    "Time Zone": "America/Tortola",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "America/St_Thomas",
    "GMT Offset": -4,
  },
  {
    "Time Zone": "Pacific/Wallis",
    "GMT Offset": 12,
  },
  {
    "Time Zone": "Africa/El_Aaiun",
    "GMT Offset": 1,
  },
  {
    "Time Zone": "Asia/Aden",
    "GMT Offset": 3,
  },
  {
    "Time Zone": "Africa/Lusaka",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Africa/Harare",
    "GMT Offset": 2,
  },
  {
    "Time Zone": "Europe/Mariehamn",
    "GMT Offset": 2,
  },
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let offset = 0;
let zone = "UTC";
setInterval(() => {
  var today = new Date();
  var localtime = today.getTime();
  //console.log(new Date(localtime));
  var localoffset = today.getTimezoneOffset() * 60000;
  //console.log(localoffset);
  var utc = localtime + localoffset;
  //console.log(utc);
  // console.log(new Date(utc));
  var newcitytime = utc + offset * 3600000;
  var yourtime = new Date(newcitytime);
  //  console.log(yourtime);
  var date =
    yourtime.getDate() +
    "-" +
    month[yourtime.getMonth()] +
    "-" +
    yourtime.getFullYear();
  if (yourtime.getHours() < 10) {
    var hours = "0" + yourtime.getHours();
  } else {
    var hours = yourtime.getHours();
  }
  if (yourtime.getMinutes() < 10) {
    var mins = "0" + yourtime.getMinutes();
  } else {
    var mins = yourtime.getMinutes();
  }

  if (yourtime.getSeconds() < 10) {
    var secs = "0" + yourtime.getSeconds();
  } else {
    var secs = yourtime.getSeconds();
  }
  var time = hours + ":" + mins + ":" + secs;
  var dateTime = time + "<br> " + date + "  " + zone;
  let timeElement = document.getElementById("displayTime");
  timeElement.innerHTML = dateTime;
}, 1000);

// let dropdown = document.getElementById("dropdown1");
// let str = "";
// timeZones.forEach(([key, value]) => {
//   console.log(`${key}, ${value}`);
// });

function ChangeZone(i) {
  offset = timeZones[i]["GMT Offset"];
  zone = timeZones[i]["Time Zone"];
}

function darkmodeON() {
  var checkbox = document.getElementById("darkbutton");
  if (checkbox.checked == true) {
    document.getElementById("body").classList.add("dark-mode");
    document.getElementById("navbar").classList.remove("navbar-light");
    document.getElementById("navbar").classList.remove("bg-light");
    document.getElementById("navbar").classList.add("navbar-dark");
    document.getElementById("navbar").classList.add("bg-dark");
  } else {
    document.getElementById("body").classList.remove("dark-mode");
    document.getElementById("navbar").classList.remove("navbar-dark");
    document.getElementById("navbar").classList.remove("bg-dark");
    document.getElementById("navbar").classList.add("navbar-light");
    document.getElementById("navbar").classList.add("bg-light");
  }
}

var res = document.getElementById("latloninp");
        var dupres = document.getElementById("duplatloninp");
        var loched= document.getElementById("lcname");
        const Http = new XMLHttpRequest();
        
        function getLocation() {
            var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    bdcApi = bdcApi
                        + "?latitude=" + position.coords.latitude
                        + "&longitude=" + position.coords.longitude
                        + "&localityLanguage=en";
                    getApi(bdcApi);
                    let latitude =position.coords.latitude;
                    let longitude =position.coords.longitude;
                    find_near_area(latitude,longitude);
                },
                (err) => { getApi(bdcApi); },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                });
        }
        function getApi(bdcApi) {
            Http.open("GET", bdcApi);
            Http.send();
            Http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    //res.innerHTML = this.responseText;
                    const jsobj = JSON.parse(this.responseText);
                    // res.value = jsobj.city;
                    // dupres.value = jsobj.city;
                    // res.value += "#" + jsobj.latitude;
                    // dupres.value += "#" + jsobj.latitude;
                    // res.value += "#" + jsobj.longitude;
                    // dupres.value += "#" + jsobj.longitude;
                   
		    loched.innerHTML = `<font id="font"> <b> உங்கள் ஜி.பி.எஸ் படி நீங்கள் இருக்கும் இடம்  <span class="area"> ${jsobj.city}  </span></b></font>` ;
		}
            };
        }

	window.onload = function() { 
                getLocation();
		if(res.value==''){
			getLocation();
		}
		

        }
        function getComboA(selectObject) {
        
 		var plcvalue = selectObject.value;
 		boxarea(plcvalue);
		// if(plcvalue.includes("currentGPS")){
		// 	getLocation();
		// }
		// else{
		// 	document.getElementById("latloninp").value = plcvalue;
		// }
	}

function boxarea(plcvalue){
	var s=plcvalue;
	const s1 =s.split("#");
	const val =s1[0].toLowerCase();

	fetch("./Widgets-Details-forNewSite/"+val+".html")
    .then(response => {
      
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        return response.text();
    })
    .then(html => {
        
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;
        const basicDetailsDiv1 = tempContainer.querySelector('.div1');
        const basicDetailsDiv2 = tempContainer.querySelector('.div2');
        const basicDetailsDiv3 = tempContainer.querySelector('.div3');
        const basicDetailsDiv4 = tempContainer.querySelector('.div4');
        const basicDetailsDiv5 = tempContainer.querySelector('.div5');
        const basicDetailsDiv6 = tempContainer.querySelector('.div6'); 
      
        const contentContainer1 = document.querySelectorAll('.contentContainer1');
        const contentContainer2 = document.querySelectorAll('.contentContainer2');
        const contentContainer3 = document.querySelectorAll('.contentContainer3');
        const contentContainer4 = document.querySelectorAll('.contentContainer4');
        const contentContainer5 = document.querySelectorAll('.contentContainer5');
        const contentContainer6 = document.querySelectorAll('.contentContainer6');
        
        
        if (basicDetailsDiv1,basicDetailsDiv2,basicDetailsDiv3,basicDetailsDiv4,basicDetailsDiv5,basicDetailsDiv6) {
           contentContainer1.forEach(container => {
                    container.innerHTML = basicDetailsDiv1.outerHTML;
                });
            contentContainer2.forEach(container => {
                    container.innerHTML = basicDetailsDiv2.outerHTML;
                });
             contentContainer3.forEach(container => {
                    container.innerHTML = basicDetailsDiv3.outerHTML;
                });
              contentContainer4.forEach(container => {
                    container.innerHTML = basicDetailsDiv4.outerHTML;
                });
               contentContainer5.forEach(container => {
                    container.innerHTML = basicDetailsDiv5.outerHTML;
                });
                contentContainer6.forEach(container => {
                    container.innerHTML = basicDetailsDiv6.outerHTML;
                });
         
        } else {
            console.error('Basic details not found in the fetched content');
        }
    })
    .catch(error => {
        console.error('There was a problem fetching the content:', error);
    });

}

function find_near_area(latitude,longitude) {
	const addresses = [
    {name: 'alangudi', lat: 10.4593096, lon: 78.7027302},
{name: 'ambasamuthiram', lat: 8.711232, lon: 77.449389},
{name: 'ammoor', lat: 12.9249606, lon: 79.3668505},
{name: 'anaimalai', lat: 10.5847477, lon: 76.9369355},
{name: 'annur', lat: 11.2014671, lon: 77.2349899},
{name: 'anthiyur', lat: 11.5748588, lon: 77.5865973},
{name: 'arani', lat: 12.6668202, lon: 79.2706576},
{name: 'aranthangi', lat: 10.1631, lon: 78.996201},
{name: 'arcot', lat: 12.9056446, lon: 79.3252376},
{name: 'aruppukottai', lat: 9.50278, lon: 78.05735},
{name: 'atthur', lat: 11.5869403, lon: 78.6178807},
{name: 'avalpoondurai', lat: 11.23435, lon: 77.72115},
{name: 'avalurpet', lat: 12.250306, lon: 79.416535},
{name: 'batlagundu', lat: 10.03015, lon: 78.0358},
{name: 'bhavani', lat: 11.450007, lon: 77.683293},
{name: 'bodinayakanur', lat: 10.0208443, lon: 77.3467399},
{name: 'boothapadi', lat: 11.342243, lon: 77.7274689},
{name: 'budalur', lat: 10.7826, lon: 78.95455},
{name: 'chetpet', lat: 12.464433, lon: 79.347539},
{name: 'cheyyar', lat: 12.6630445, lon: 79.5367251},
{name: 'chinnamanur', lat: 9.8023121, lon: 77.3606369},
{name: 'chinnasalem', lat: 11.649546, lon: 78.859863},
{name: 'coimbatore', lat: 10.9934, lon: 76.94325},
{name: 'cuddaloreot', lat: 11.750018, lon: 79.749982},
{name: 'cumbum', lat: 10.02383, lon: 78.22352},
{name: 'desur', lat: 12.502865, lon: 79.605761},
{name: 'devakottai', lat: 9.9475466, lon: 78.8205643},
{name: 'dharmapuri', lat: 12.1462091, lon: 78.1578583},
{name: 'dindigul', lat: 10.3491857, lon: 77.9879389},
{name: 'edappadi', lat: 11.5662, lon: 77.8396},
{name: 'elumathur', lat: 11.26265, lon: 77.77265},
{name: 'erode', lat: 11.3649089, lon: 77.7480554},
{name: 'gangavalli', lat: 11.5662, lon: 77.8396},
{name: 'gingee', lat: 12.2541472, lon: 79.4164899},
{name: 'gobichettipalayam', lat: 11.3642483, lon: 77.4554185},
{name: 'gopalpatti', lat: 10.0163663, lon: 77.9642771},
{name: 'gudiyatham', lat: 12.9179463, lon: 78.8755409},
{name: 'harur', lat: 12.046967, lon: 78.483273},
{name: 'hosur', lat: 12.7212445, lon: 77.8079526},
{name: 'iluppur', lat: 10.512194, lon: 78.623923},
{name: 'jeyankondam', lat: 11.2071999, lon: 79.367602},
{name: 'kadayanallur', lat: 9.0022176, lon: 77.2476065},
{name: 'kalavai', lat: 12.7674633, lon: 79.4169356},
{name: 'kallakurichi', lat: 11.739325, lon: 78.962375},
{name: 'kamuthi', lat: 9.38343, lon: 78.31395},
{name: 'kancheepuram', lat: 12.848627, lon: 79.70516},
{name: 'kangeyam', lat: 11.00599, lon: 77.5609},
{name: 'karikudi', lat: 10.062707, lon: 78.7900282},
{name: 'karumandurai', lat: 11.8255537, lon: 78.6278915},
{name: 'kattumannarkoil', lat: 11.2600711, lon: 79.5544653},
{name: 'kilpennathur', lat: 12.2252961, lon: 79.0746837},
{name: 'kinathukadavu', lat: 10.8203, lon: 77.00425},
{name: 'kodumudi', lat: 11.0656458, lon: 77.8785688},
{name: 'konganapuram', lat: 11.5607696, lon: 77.9084737},
{name: 'koyambedu', lat: 13.0694, lon: 80.1948},
{name: 'krishnagiri', lat: 12.5249536, lon: 78.2080908},
{name: 'kudavasal', lat: 10.8631718, lon: 79.4787287},
{name: 'kulasekharam', lat: 8.2543714, lon: 77.3393285},
{name: 'kumbakonam', lat: 10.9616945, lon: 79.3881132},
{name: 'kurunjipady', lat: 11.5955, lon: 79.59865},
{name: 'kuthalam', lat: 10.8424, lon: 79.79105},
{name: 'lalgudi', lat: 10.875319, lon: 78.8183035},
{name: 'madathukulam', lat: 10.5595839, lon: 77.3654611},
{name: 'madurai', lat: 9.9599655, lon: 78.1349839},
{name: 'maduranthagam', lat: 12.5102166, lon: 79.8849354},
{name: 'manalurpet', lat: 12.01473, lon: 79.10187},
{name: 'manamadurai', lat: 9.6901803, lon: 78.4521029},
{name: 'manapparai', lat: 10.4593016, lon: 78.7027382},
{name: 'mannarkudi', lat: 10.7713187, lon: 79.6369974},
{name: 'marakkanam', lat: 12.186952, lon: 79.927895},
{name: 'mayiladuthurai', lat: 11.1014129, lon: 79.6744558},
{name: 'mecheri', lat: 11.8362039, lon: 77.9453668},
{name: 'melur', lat: 10.0336855, lon: 78.3358366},
{name: 'moolanur', lat: 10.792987, lon: 77.708006},
{name: 'mudhukalathur', lat: 9.3542083, lon: 78.5007537},
{name: 'namagiripettai', lat: 11.4281568, lon: 78.2685402},
{name: 'natham', lat: 10.2175291, lon: 78.3578755},
{name: 'negamam', lat: 11.09735, lon: 77.3093},
{name: 'oddanchatram', lat: 10.45604, lon: 77.75114},
{name: 'omalur', lat: 11.740327, lon: 78.0439797},
{name: 'orathanadu', lat: 10.58745, lon: 79.2593},
{name: 'palacode', lat: 12.3027104, lon: 78.0741888},
{name: 'palani', lat: 10.3659711, lon: 77.9750828},
{name: 'panruti', lat: 11.778624, lon: 79.5894832},
{name: 'papanasam', lat: 10.9232664, lon: 79.2688912},
{name: 'paramakudi', lat: 9.5460681, lon: 78.587774},
{name: 'paramathi_velur', lat: 11.1486003, lon: 78.0124894},
{name: 'pattukkottai', lat: 10.4252814, lon: 79.3140301},
{name: 'pavoorchatram', lat: 8.865761, lon: 77.497015},
{name: 'perumbalur', lat: 11.2404097, lon: 78.8547142},
{name: 'perundurai', lat: 11.3391202, lon: 77.7105902},
{name: 'pethappampatti', lat: 10.67762, lon: 77.216085},
{name: 'pochampalli', lat: 12.3831976, lon: 78.4113506},
{name: 'pollachi', lat: 10.65373, lon: 77.00835},
{name: 'polur', lat: 12.4943985, lon: 79.1543735},
{name: 'pongalur', lat: 11.26251, lon: 77.03912},
{name: 'punjai_puliampaddi', lat: 11.3516, lon: 77.1667},
{name: 'rajapalayam', lat: 9.4407754, lon: 77.5913176},
{name: 'rajasingamangalam', lat: 9.780664, lon: 78.9214},
{name: 'ramanathapuram', lat: 9.37084, lon: 78.8287},
{name: 'redhills', lat: 13.3378381, lon: 80.1928933}, 
{name: 'salem', lat: 11.6611115, lon: 78.1533734}, 
{name: 'sankarankovil', lat: 9.1681736, lon: 77.525265}, 
{name: 'sankarapuram', lat: 11.887289, lon: 78.916718} ,
{name: 'sathyamangalam', lat: 11.4929498, lon: 77.2794059}, 
{name: 'sattur', lat: 9.361723, lon: 77.9165611},
{name: 'sembanarkoil', lat: 11.1051, lon: 79.7421},
{name: 'senjeri_malaiyadipalayam', lat: 11.11005, lon: 76.9208},
{name: 'sethiathope', lat: 11.275828, lon: 79.551532},
{name: 'sevur', lat: 11.2464, lon: 77.2372},
{name: 'singampuneri', lat: 10.2175231, lon: 78.3578815}, 
{name: 'sirkali', lat: 11.2428165, lon: 79.7282161},
{name: 'sivagangai', lat: 9.850009, lon: 78.499991},
{name: 'sivagiri', lat: 9.3573371, lon: 77.4372004},
{name: 'srimushnam', lat: 11.275827, lon: 79.551533},
{name: 'srivaikundam', lat: 8.628852, lon: 77.912921},
{name: 'sulur', lat: 11.0126482, lon: 77.1937931},
{name: 't_vadipatti', lat: 10.02383, lon: 78.22352},
{name: 'tenkasi', lat: 8.9598406, lon: 77.3055111},
{name: 'thalavadi', lat: 11.504784, lon: 77.2383862},
{name: 'thammampatti', lat: 11.448608, lon: 78.5023128},
{name: 'thanjavur', lat: 10.7869994, lon: 79.1378274},
{name: 'theni', lat: 10.008839, lon: 77.4923747},
{name: 'thirukovilur', lat: 11.9674015, lon: 79.2027428},
{name: 'thirumangalam', lat: 9.81294, lon: 77.9974},
{name: 'thirupathur', lat: 10.108477, lon: 78.59731},
{name: 'thirupoondi', lat: 10.6267662, lon: 79.8142568},
{name: 'thiruppur', lat: 12.725957, lon: 80.189323},
{name: 'thiruvadanai', lat: 9.783363, lon: 78.918278},
{name: 'thiruvallur', lat: 13.1405269, lon: 79.9064019},
{name: 'thiyagaduram', lat: 11.7441045, lon: 79.0729793},
{name: 'thondamuthur', lat: 10.97455, lon: 76.86295},
{name: 'thuraiyur', lat: 11.1414545, lon: 78.5944718},
{name: 'thuvarankurichy', lat: 10.606775, lon: 78.423073}, 
{name: 'tindivanam', lat: 12.236884, lon: 79.649948}, 
{name: 'tiruchirapalli', lat: 10.80595, lon: 78.69665}, 
{name: 'tirunelveli', lat: 8.731395, lon: 77.708214}, 
{name: 'tiruttani', lat: 13.1435215, lon: 79.8932108},
{name: 'tiruvarur', lat: 10.7756475, lon: 79.6043282},
{name: 'udumalpet', lat: 10.58457, lon: 77.251446},
{name: 'ulundurpettai', lat: 11.6921612, lon: 79.2864166}, 
{name: 'usilampatti', lat: 9.96754, lon: 77.786711}, 
{name: 'uthiramerur', lat: 12.635, lon: 79.76805},
{name: 'vadamadurai', lat: 10.5116363, lon: 78.0596044}, 
{name: 'valangaiman', lat: 10.8897397, lon: 79.3910058}, 
{name: 'valathi', lat: 12.230737, lon: 79.655622},
{name: 'vallioor', lat: 8.3798984, lon: 77.6233274}, 
{name: 'vandavasi', lat: 12.5077136, lon: 79.606138}, 
{name: 'vaniyambadi', lat: 12.6950325, lon: 78.6218853},
{name: 'vazhappadi', lat: 11.6492191, lon: 78.4024106},
{name: 'vellakoil', lat: 10.95425, lon: 77.68744},
{name: 'vellamkoil', lat: 11.342245, lon: 77.7274669}, 
{name: 'vellore', lat: 12.9086275, lon: 79.0638549},
{name: 'vettavalam', lat: 12.2232311, lon: 79.0798639},
{name: 'vikiravandi', lat: 12.0645, lon: 79.54175},
{name: 'villupuram', lat: 11.97005, lon: 79.50625},
{name: 'virudhachalam', lat: 11.5228084, lon: 79.324538},
{name: 'virudhunagar', lat: 9.5786392, lon: 77.9731392}
];

// Random latitude and longitude provided by the user
const userLat = latitude;
const userLon = longitude;

function distance(lat1, lon1, lat2, lon2) {
    const pi = Math.atan2(1, 1) * 4;
    const theta = lon1 - lon2;
    let dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
    dist = Math.acos(dist);
    dist = rad2deg(dist);
    dist = dist * 60 * 1.1515;
    return dist;
}

function deg2rad(deg) {
    const pi = Math.atan2(1, 1) * 4;
    return (deg * pi) / 180;
}

function rad2deg(rad) {
    const pi = Math.atan2(1, 1) * 4;
    return (rad * 180) / pi;
}

let minDistance = Number.MAX_VALUE;
let nearestAddress = null;

// Loop through each address to find the nearest one
for (const address of addresses) {
    const dist = distance(userLat, userLon, address.lat, address.lon);
    if (dist < minDistance) {
        minDistance = dist;
        nearestAddress = address;
    }
}
n=nearestAddress.name;
boxarea(n);

}

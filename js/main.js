window.onload = () =>{
/*=========================VARIABELEN======================*/
  /*==TUTORIAL=*/
  const verderKnop = document.getElementsByClassName('js--tutorial--knop');
  const tutorialBox = document.getElementsByClassName('js--tutorial--box');

  /*==EIND PUZZEL*/
  var oplossing = "";
  var plekCode = 0;
  var plekEindInput = 0;
  const choice = "12 1.6 40";
  const eindToetsen = document.getElementsByClassName("js--eind--toets");
  const keuzes = document.getElementsByClassName("js--keuze");
  const keuzeAlive = "10 1.6 27.5";
  const keuzeDead = "10 1.6 52.5";

            /*==========LOPEN===========*/
  const places = document.getElementsByClassName('js--place');
  const roomPlace = document.getElementsByClassName('js--roomPlace');
  const camera = document.getElementById('js--camera');
  const roomDoor = document.getElementsByClassName('js--roomDoor');

  const startRoom = "-8 1.6 0";
  const danielToTeresa = "-13.5 1.6 -3.5";
  const danielToKilian = "19 1.6 -21";
  const kilianToDaniel = "22 1.6 4";
  const teresaToDaniel = "19 1.6 -4";
  const danielToEnd = "0 1.6 40";
  const endToDaniel= "28 1.6 2";

  /*==KAMER DANIEL==*/
  const tegelOne = document.getElementById("js--code1");
  const tegelTwo = document.getElementById("js--code2");
  const tegelThree = document.getElementById("js--code3");
  const tegelFour = document.getElementById("js--code4");
  const tegelFive = document.getElementById("js--code5");
  const toetsen = document.getElementsByClassName("js--toets");
  const gate = document.getElementById("js--gate");
  const rock = document.getElementById("js--rock");
  const grave = document.getElementById("js--grave");
  const teleportGate = document.getElementById("js--gate--teleport")
  const teleportRock = document.getElementById("js--rock--teleport")
  const placeholders = document.getElementsByClassName('js--placeholder');
  const crystalPlace = document.getElementById("js--crystal");
  const timedDoor = document.getElementById("js--timed--door");
  const easter = document.getElementById("js--easter");
  const duif = document.getElementById("js--duif");
  const secret = "2.5 31.6 0"
  let scene = document.getElementById('js--scene');
  let plekInput = 0;
  let code = "";
  let input = "";
  let pickups = document.getElementsByClassName('js--pickup');
  let hold = null;
  var firstGood = false;
  var secondGood = false;
  var thirdGood = false;
  var fourthGood = false;

  /*==KAMER TERESA==*/
  let elementId = "";
  let numpadCode = "";
  let elementCode = ["fire", "water", "earth", "air"];
  const elementDoor = document.getElementById("js--elementDoor");
  let elementNumbers = document.getElementsByClassName("js--elementNumber");
  let numpadNumbers = document.getElementsByClassName("js--numpadNumber");
  let numpadAnswers = document.getElementsByClassName("js--numpadAnswer");
  let keys = document.getElementsByClassName("js--key");

  let numpadNumber1 = document.getElementById("js--numpadNumber1");
  let numpadNumber2 = document.getElementById("js--numpadNumber2");
  let numpadNumber3 = document.getElementById("js--numpadNumber3");
  let numpadNumber4 = document.getElementById("js--numpadNumber4");
  let numpadNumber5 = document.getElementById("js--numpadNumber5");
  let numpadNumber6 = document.getElementById("js--numpadNumber6");
  let numpadNumber7 = document.getElementById("js--numpadNumber7");
  let numpadNumber8 = document.getElementById("js--numpadNumber8");
  let numpadNumber9 = document.getElementById("js--numpadNumber9");
  let numpadNumber0 = document.getElementById("js--numpadNumber0");

  let elementNumber1 = document.getElementById("js--elementNumber1");
  let elementNumber2 = document.getElementById("js--elementNumber2");
  let elementNumber3 = document.getElementById("js--elementNumber3");
  let elementNumber4 = document.getElementById("js--elementNumber4");
  let elementNumber5 = document.getElementById("js--elementNumber5");
  let elementNumber6 = document.getElementById("js--elementNumber6");
  let elementNumber7 = document.getElementById("js--elementNumber7");
  let elementNumber8 = document.getElementById("js--elementNumber8");
  let elementNumber9 = document.getElementById("js--elementNumber9");
  let elementNumber0 = document.getElementById("js--elementNumber0");

/*==SOUNDS==*/
  function playSound(object, soundFile, volume){
    object.setAttribute("sound", "src: " + soundFile + "; volume: " + volume );
    object.components.sound.playSound();
  }

/*==EIND PUZZEL==*/
  AFRAME.registerComponent("endgame", {
    init: function() {
      this.makeCode = function(){
        let randomNum = Math.floor(Math.random() * 9) + 1;
        oplossing = oplossing + randomNum;
        switch(randomNum){
          case 0:
            setEndCode("#toets1")
            break;
          case 1:
            setEndCode("#toets1")
            break;
          case 2:
            setEndCode("#toets2")
            break;
          case 3:
            setEndCode("#toets3")
            break;
          case 4:
            setEndCode("#toets4")
            break;
          case 5:
            setEndCode("#toets5")
            break;
          case 6:
            setEndCode("#toets6")
            break;
          case 7:
            setEndCode("#toets7")
            break;
          case 8:
            setEndCode("#toets8")
            break;
          case 9:
            setEndCode("#toets9")
            break;
          default:
        }
      }

    /*MAAKT DE EIND CODE*/
    function setEndCode(model){
      const eindNum = document.getElementsByClassName("js--endGame");
        eindNum[plekCode].removeAttribute("gltf-model");
        eindNum[plekCode].setAttribute("gltf-model", model)
        plekCode = plekCode + 1;
    }
  },
  update: function() {
    this.makeCode();
  },
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});

/*CHECKED DE INPUT*/
for (let i = 0; i < eindToetsen.length; i++) {
  eindToetsen[i].addEventListener('click', function(evt){
    playSound(eindToetsen[i], "#key", "1");
    switch (eindToetsen[i]) {
      case eindToetsen[0]:
        checkEindGetallen("1");
        break;
      case eindToetsen[1]:
        checkEindGetallen("2");
        break;
      case eindToetsen[2]:
        checkEindGetallen("3");
        break;
      case eindToetsen[3]:
        checkEindGetallen("4");
        break;
      case eindToetsen[4]:
        checkEindGetallen("5");
        break;
      case eindToetsen[5]:
        checkEindGetallen("6");
        break;
      case eindToetsen[6]:
        checkEindGetallen("7");
        break;
      case eindToetsen[7]:
        checkEindGetallen("8");
        break;
      case eindToetsen[8]:
        checkEindGetallen("9");
        break;
      case eindToetsen[9]:
        checkEindGetallen("0");
        break;
      default:
    }
  });
}

  /*CHECKED OF DE INPUT CORRECT IS*/
  function checkEindGetallen(input){
      if(oplossing[plekEindInput] == input){
        plekEindInput = plekEindInput + 1;
        if(plekEindInput == 6){
          teleport(choice);
          playSound(camera, "#correct", "0.05");
          keuzes[0].setAttribute("position", "16.5 1.5 37.5");
          keuzes[1].setAttribute("position", "16.5 1.5 42.5");
        }
      }
    }

  /*CHECKED WELKE KEUZE JE MAAKT*/
  for (let i = 0; i < keuzes.length; i++) {
    keuzes[i].addEventListener('click', function(evt){
      switch (keuzes[i]) {
        case keuzes[0]:
          teleport(keuzeAlive);
          playSound(camera, "#alive", "0.05")
          break;
        case keuzes[1]:
          teleport(keuzeDead);
          playSound(camera, "#died", "0.2")
        default:
      }
    });
  }


  /*==EASTER EGG*/
  AFRAME.registerComponent("easter", {
    init: function() {
      this.el.addEventListener('click', function(evt){
        teleport(secret);
        playSound(duif, "#easter", "0.1")
      })
    },
    update: function() {},
    tick: function() {},
    remove: function() {},
    pause: function() {},
    play: function() {}
  });

  /*==KAMER KILIAN==*/
  AFRAME.registerComponent("nasa-input", {
    init: function() {},
    update: function() {},
    tick: function() {},
    remove: function() {},
    pause: function() {},
    play: function() {}
  });

  const nasa_toetsen = document.getElementsByClassName("js--nasa-toets");
  const nasa_toetsen_door = document.getElementsByClassName("js--nasa-toets-door");
  const nasa_screen_1 = document.getElementById("js--nasa-screen-1");
  const nasa_screen_2 = document.getElementById("js--nasa-screen-2");
  const nasa_screen_3 = document.getElementById("js--nasa-screen-3");
  const dv_nasa_startup = document.getElementById("js--nasa-startup");
  const dv_nasa_reset = document.getElementById("js--nasa-reset");
  const dv_nasa_next = document.getElementById("js--nasa-next");
  const nasa_dates = document.getElementsByClassName("js--nasa-date");
  var nasa_keypad_input = [];
  var nasa_door_input = [];
  var nasa_default_psw = [1, 2, 3, 4];
  var nasa_proven = false;

  // Get random date this week
  let d = new Date();
  let d7 = new Date(d - (1000*60*60*24*(Math.floor(Math.random() * 8))));
  // 3 arrays are made and filled (d-m-y)
  // Days
  var d7d = d7.getDate();
  var dArray = [0];
  var sd7d = d7d.toString();
  for (var i = 0, len = sd7d.length; i < len; i += 1) {
      dArray.push(+sd7d.charAt(i));
  }
  // Months  -- +1 because .getMonth => 0-11
  var d7m = d7.getMonth()+1;
  var mArray = [0];
  var sd7m = d7m.toString();
  for (var i = 0, len = sd7m.length; i < len; i += 1) {
      mArray.push(+sd7m.charAt(i));
  }
  // Year
  var d7y = d7.getFullYear();
  var yArray = [0];
  var sd7y = d7y.toString();
  for (var i = 0, len = sd7y.length; i < len; i += 1) {
      yArray.push(+sd7y.charAt(i));
  }

  //set computer date password
  const nasa_rdate_psw = [];
  nasa_rdate_psw[1] = dArray.pop();
  nasa_rdate_psw[0] = dArray.pop();
  nasa_rdate_psw[3] = mArray.pop();
  nasa_rdate_psw[2] = mArray.pop();
  nasa_rdate_psw[5] = yArray.pop();
  nasa_rdate_psw[4] = yArray.pop();

  //set API URL correct
  const nasa_rdate_url = [];
  nasa_rdate_url[0] = "2";
  nasa_rdate_url[1] = "0";
  nasa_rdate_url[2] = nasa_rdate_psw[4].toString();
  nasa_rdate_url[3] = nasa_rdate_psw[5].toString();
  nasa_rdate_url[4] = "-";
  nasa_rdate_url[5] = nasa_rdate_psw[2].toString();
  nasa_rdate_url[6] = nasa_rdate_psw[3].toString();
  nasa_rdate_url[7] = "-";
  nasa_rdate_url[8] = nasa_rdate_psw[0].toString();
  nasa_rdate_url[9] = nasa_rdate_psw[1].toString();

  function nasa_pc_startup(){
    nasa_screen_1.setAttribute("src","#nasa_bg");
    nasa_screen_2.setAttribute("src","#nasa_bg");
    nasa_screen_3.setAttribute("src","#nasa_bg");
    dv_nasa_reset.setAttribute("color","rgb(255, 0, 0)")
    dv_nasa_reset.addEventListener("click", nasa_pc_reset);
  };

  // Pick random picture date to display
  function nasa_week_date(){
    let d = new Date();
    let d7 = new Date(d - (1000*60*60*24*7));
  };

  function openMetalDoor(){
    document.getElementById("js--nasa-door1").setAttribute("visible","false");
    document.getElementById("js--nasa-door2").setAttribute("visible","true");
  };

  function nasa_pc_reset(){
    // Show user NASA picture is loading
    nasa_screen_1.setAttribute("src","#nasa_bg_l");
    nasa_screen_2.setAttribute("src","#nasa_bg_l");
    nasa_screen_3.setAttribute("src","#nasa_bg_l");

    // Load NASA picture
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const BASE_URL = "https://api.nasa.gov/planetary/apod?";
    const API_URL = "date=" + nasa_rdate_url.join("") + "&api_key=DEMO_KEY";
    fetch(proxyurl + BASE_URL + API_URL)
    .then(response => response.json())
    .then(data => nasa_screen_2.setAttribute("src", data.hdurl))
    // Show normal screens and display buttons
    nasa_screen_1.setAttribute("src","#nasa_bg_q");
    nasa_screen_3.setAttribute("src","#nasa_bg_i");
    for(let i = 0; i < nasa_toetsen.length; i++){
      nasa_toetsen[i].setAttribute("visible", "true");
    };
    for(let i = 0; i < nasa_dates.length; i++){
      nasa_dates[i].setAttribute("visible", "true");
    };
  };

  // Padlock reset on
  function nasa_pc_reset_succes(){
    nasa_screen_1.setAttribute("src","#nasa_bg");
    nasa_screen_2.setAttribute("src","#nasa_bg_s");
    nasa_screen_3.setAttribute("src","#nasa_bg");
    for(let j = 0; j < 6; j++){
      nasa_dates[j].setAttribute("visible", "false");
    };
    for(let i = 0; i < nasa_toetsen.length; i++){
      nasa_toetsen[i].setAttribute("visible", "false");
    };

  };

  // Dev tools
  dv_nasa_startup.addEventListener("click", nasa_pc_startup);
  //dv_nasa_next.addEventListener("click", nasa_pc_reset_succes);

  // NASA computer keypad
    for (let i = 0; i < nasa_toetsen.length; i++) {
      nasa_toetsen[i].addEventListener("click", function(evt){
        playSound(nasa_toetsen[i], "#key", "0.1")
        let keyValue = i;
        let d = nasa_keypad_input.length;
        nasa_keypad_input[d] = keyValue;
        nasa_dates[d].setAttribute("visible","false");
        if(nasa_keypad_input.toString() == nasa_rdate_psw.toString()){
          nasa_pc_reset_succes();
          nasa_proven = true;
          playSound(camera, "#correct", "0.1");
        };
        if(nasa_keypad_input.length == 6){
          nasa_keypad_input = [];
          if(nasa_proven == false){
            for(let i = 0; i < nasa_dates.length; i++){
              nasa_dates[i].setAttribute("visible", "true");
            };
          };

          playSound(camera, "#wrong", "0.1");
          //Hier code om andere foto te laden
        };
      })
    };
    // NASA door keypad
    for (let i = 0; i < nasa_toetsen_door.length; i++) {
      nasa_toetsen_door[i].addEventListener("click", function(evt){
        playSound(nasa_toetsen_door[i], "#key", "0.1")
        let keyValue = i;
        let d = nasa_door_input.length;
        nasa_door_input[d] = keyValue;
        if(nasa_door_input.toString() == nasa_default_psw.toString() && nasa_proven == true){
          openMetalDoor();
          playSound(camera, "#correct", "0.1");
        };
        if(nasa_door_input.length == 4){
          nasa_door_input = [];
          playSound(camera, "#wrong", "0.1");
          //Hier code om andere foto te laden
        }
      })
    };

/*======================================LOPEN=================================*/
    /*KIJKT NAAR WELKE PLEK JE KIJKT EN TELEPORTEERT JE DAAR HEEN*/
    for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function(evt){
        let att = document.createAttribute("position");
        att.value =  this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
        teleport(att.value);
      });
    }

/*==========================KAMER SWITCHEN====================================*/
      /*KIJKT NAAR WELKE DEUR JE KIJKT*/
      for (let i = 0; i < roomDoor.length; i++) {
        roomDoor[i].addEventListener('click', function(evt){
          playSound(camera, "#tp", "0.05");
          /*Hier kijkt welke deuren gelinked zijn*/
          switch(roomDoor[i]){
            case roomDoor[0]:
              teleport(danielToEnd);
              break;
            case roomDoor[1]:
              teleport(endToDaniel);
              break;
            case roomDoor[2]:
              teleport(danielToTeresa);
              break;
            case roomDoor[3]:
              teleport(danielToKilian);
              break;
            case roomDoor[4]:
              teleport(teresaToDaniel);
              break;
            case roomDoor[5]:
              teleport(kilianToDaniel);
              break;
            default:
          }
      });
    }

      /*TELEPORTEERT TE GEBRUIKER MET EEN FADE-IN FADE-OUT*/
      function teleport(values){
        const fade = document.getElementById('js--fade');
        /*Animatie voor fade to black*/
        fade.setAttribute('animation', "property: opacity; from:0; to:1; dur:300");

        /*Timer na 600ms teleporteer*/
        setTimeout(function(){
          camera.setAttribute('position', values);
        }, 400);

        /*Timer naa 1000ms zwart weer terug naar normaal*/
        setTimeout(function(){
          fade.setAttribute('animation', "property: opacity; from:1; to:0; dur:300");
        }, 800);
      }

/*====================OPPAKKEN EN NEERZETTEN=================================*/

      /*OPPAKKEN*/
      function addListeners() {
        for (let i = 0; i < pickups.length; i++) {
          pickups[i].addEventListener('click', function(evt){
            playSound(camera, "#pop", "0.02")
            if (hold == null) {
              switch (pickups[i]) {
                case pickups[0]:
                  camera.innerHTML += '<a-box  id="js--hold" class="js--interact js--pickup" color="green" position="0.5 -0.2 -0.5" width="0.2" height="0.2" depth="0.2"></a-box>';
                  hold = "box";
                  this.remove();
                  break;
                case pickups[1]:
                  camera.innerHTML += '<a-entity id="js--hold" class="js--interact js--pickup" gltf-model="#crystal" position="-3.3 -.5 4"></a-entity>';
                  hold = "crystal";
                  this.remove();
                  break;
                default:
              }
            }
            });

            /*KIJKT NAAR WELK ELEMENT JE WILT OPPAKKEN*/
            pickups[i].addEventListener('click', function(evt){
              if (hold == null) {
                elementId = this.id;
                playSound(camera, "#pop", "0.02")
                switch(elementId) {
                  case "js--fire":
                    camera.innerHTML += '<a-entity id="js--hold" obj-model="obj: #fire-obj; mtl: #fire-mtl;" position="0.5 -0.2 -0.5" scale="0.1 0.1 0.1"></a-entity>'
                    hold = "fire";
                    this.remove();
                    break;
                  case "js--water":
                    camera.innerHTML += '<a-entity id="js--hold" obj-model="obj: #water-obj; mtl: #water-mtl;" position="0.5 -0.2 -0.5" scale="0.1 0.1 0.1"></a-entity>'
                    hold = "water";
                    this.remove();
                    break;
                  case "js--earth":
                    camera.innerHTML += '<a-entity id="js--hold" obj-model="obj: #earth-obj; mtl: #earth-mtl;" position="0.5 -0.2 -0.5" scale="0.1 0.1 0.1"></a-entity>'
                    hold = "earth";
                    this.remove();
                    break;
                  case "js--air":
                    camera.innerHTML += '<a-entity id="js--hold" obj-model="obj: #air-obj; mtl: #air-mtl;" position="0.5 -0.2 -0.5" scale="0.1 0.1 0.1"></a-entity>'
                    hold = "air";
                    this.remove();
                    break;
                }
              }
            });
          }
        }

      addListeners();

      /*NEERZETTEN*/
      for (let i = 0; i < placeholders.length; i++) {
        placeholders[i].addEventListener('click', function(evt){
          playSound(camera, "#pop", "0.05")
          switch (hold) {
            case "crystal":
              let crystal = document.createElement('a-entity');
              crystal.setAttribute("class", "js--pickup js--interact");
              crystal.setAttribute("gltf-model", "#crystal")
              crystal.setAttribute("position", {x:"20.65", y:"1", z: "7.55"});
              scene.appendChild(crystal);
              document.getElementById("js--hold").remove();
              hold = null;
              removeRock();
              break;
            case "box":
              let boxje = document.createElement('a-box');
              boxje.setAttribute("position", {x:"1", y:".1", z: "-6"});
              boxje.setAttribute("color", "green");
              boxje.setAttribute("depth", "0.2");
              boxje.setAttribute("width", "0.2");
              boxje.setAttribute("height", "0.2");
              scene.appendChild(boxje);
              document.getElementById("js--hold").remove();
              hold = null;
              setTimeout(function(){
                teleport("0 1.6 -9")
              }, 2000);
              break;
            case "fire":
              fire = document.createElement('a-entity');
              fire.setAttribute("id", "js--fire");
              fire.setAttribute("class", "js--interact js--pickup");
              fire.setAttribute("obj-model", "obj: #fire-obj; mtl: #fire-mtl;");
              fire.setAttribute("position", {x: this.getAttribute('position').x, y: this.getAttribute('position').y, z: this.getAttribute('position').z});
              fire.setAttribute("scale", "0.1 0.1 0.1");
              scene.appendChild(fire);
              document.getElementById("js--hold").remove();
              setElement(i, "fire");
              hold = null;
              addListeners();
              checkElementCode(elementCode);
              break;
            case "water":
              water = document.createElement('a-entity');
              water.setAttribute("id", "js--water");
              water.setAttribute("class", "js--interact js--pickup");
              water.setAttribute("obj-model", "obj: #water-obj; mtl: #water-mtl;");
              water.setAttribute("position", {x: this.getAttribute('position').x, y: this.getAttribute('position').y, z: this.getAttribute('position').z});
              water.setAttribute("scale", "0.1 0.1 0.1");
              scene.appendChild(water);
              document.getElementById("js--hold").remove();
              setElement(i, "water");
              hold = null;
              addListeners();
              checkElementCode(elementCode);
              break;
            case "earth":
              earth = document.createElement('a-entity');
              earth.setAttribute("id", "js--earth");
              earth.setAttribute("class", "js--interact js--pickup");
              earth.setAttribute("obj-model", "obj: #earth-obj; mtl: #earth-mtl;");
              earth.setAttribute("position", {x: this.getAttribute('position').x, y: this.getAttribute('position').y, z: this.getAttribute('position').z});
              earth.setAttribute("scale", "0.1 0.1 0.1");
              scene.appendChild(earth);
              document.getElementById("js--hold").remove();
              setElement(i, "earth");
              hold = null;
              addListeners();
              checkElementCode(elementCode);
              break;
            case "air":
              air = document.createElement('a-entity');
              air.setAttribute("id", "js--air");
              air.setAttribute("class", "js--interact js--pickup");
              air.setAttribute("obj-model", "obj: #air-obj; mtl: #air-mtl;");
              air.setAttribute("position", {x: this.getAttribute('position').x, y: this.getAttribute('position').y, z: this.getAttribute('position').z});
              air.setAttribute("scale", "0.1 0.1 0.1");
              scene.appendChild(air);
              document.getElementById("js--hold").remove();
              setElement(i, "air");
              hold = null;
              addListeners();
              checkElementCode(elementCode);
              break;
          }
        });
      }

      /*=============================TUTORIAL=======================================*/
          /*ZORGT DAT GEBRUIKER GOED TELEPORTEERT DOOR TUTORIAL*/
          for (let i = 0; i < verderKnop.length; i++) {
            verderKnop[i].addEventListener('click', function(evt){
              switch (verderKnop[i]) {
                case verderKnop[0]:
                  teleport("1.2 1.6 -3");
                  break;
                case verderKnop[1]:
                  teleport("-1 1.6 -6.5");
                  break;
                case verderKnop[2]:
                  teleport("0 1.6 -13");
                  playSound(camera, "#laugh", "0.1")
                  break;
                case verderKnop[3]:
                  teleport(startRoom);
                  break;
                default:
              }
            });
          }

/*=============================CODE DANIEL====================================*/
  /*CODE VOOR PUZZEL CREATIE*/
  makeCode();

  function makeCode(){
    code = "";
    decideKind(tegelOne);
    decideKind(tegelTwo);
    decideKind(tegelThree);
    decideKind(tegelFour);
    decideKind(tegelFive);
  }

  /*BESLIST WELKE TEGEL WELK NUMMER IS*/
  function decideKind(tegel){
    let randomNumber = randomiser();
    switch (randomNumber) {
      case 1:
        setModel(tegel, "#tegel6");
        break;
      case 2:
        setModel(tegel, "#tegel3");
        break;
      case 3:
        setModel(tegel, "#tegel4");
        break;
      case 4:
        setModel(tegel, "#tegel8");
        break;
      case 5:
        setModel(tegel, "#tegel5");
        break;
      case 6:
        setModel(tegel, "#tegel2");
        break;
      case 7:
        setModel(tegel, "#tegel7");
        break;
      case 8:
        setModel(tegel, "#tegel1");
        break;
      case 9:
        setModel(tegel, "#tegel9");
        break;
      case 0:
        setModel(tegel, "#tegel0");
        break;
      default:
    }
  }

  /*SET HET MODEL NAAR GEGEVEN NUMMER*/
  function setModel(tegel, model){
    tegel.setAttribute("gltf-model", model)
  }

  /*RANDOMISED CODE*/
  function randomiser(){
    let nummer = Math.floor(Math.random() * 9) + 1
    nummer.toString();
    code = code + nummer
    return nummer
  }

  /*CODE VOOR INTOETSEN*/
  for (let i = 0; i < toetsen.length; i++) {
    toetsen[i].addEventListener('click', function(evt){
      playSound(toetsen[i], "#key", "0.5")
      switch (toetsen[i]) {
        case toetsen[0]:
          checkGetallen("1");
          break;
        case toetsen[1]:
          checkGetallen("2");
          break;
        case toetsen[2]:
          checkGetallen("3");
          break;
        case toetsen[3]:
          checkGetallen("4");
          break;
        case toetsen[4]:
          checkGetallen("5");
          break;
        case toetsen[5]:
          checkGetallen("6");
          break;
        case toetsen[6]:
          checkGetallen("7");
          break;
        case toetsen[7]:
          checkGetallen("8");
          break;
        case toetsen[8]:
          checkGetallen("9");
          break;
        case toetsen[9]:
          checkGetallen("0");
          break;
        default:
      }
    });
  }

  /*CHECKED OF CODE KLOPT*/
  function checkGetallen(input){
      if(code[plekInput] == input){
        plekInput = plekInput + 1;
        if(plekInput == 5){
          playSound(camera, "#correct", "0.1");
          removeGate()
        }
      }
    }

  /*Verplaatsen van dingen*/
  function removeGate(){
    gate.setAttribute("position", "21.5 0 0");
    teleportGate.setAttribute("position", "22 0 -3");
    crystalPlace.setAttribute("position", "20.5 0 2");
    playSound(gate, "#iron", "0.5");
  }

  function removeRock(){
    setTimeout(function(){ playSound(camera, "#grave", "0.1"); }, 500);
    rock.setAttribute("animation", "property: position; easing: linear; dur: 4000; to: " + " 20 -2 0")
    setTimeout(function(){
    teleportRock.setAttribute("position", "28 0 2");
    timedDoor.setAttribute("position", "28 0.9 8.5");
  }, 500);

    setTimeout(function(){ removeGrave() }, 7000);
  }

  function removeGrave(){
    grave.setAttribute("animation", "property: position; easing: linear; dur: 2000; to: " + " 21 0 0")
  }

/*=============================CODE TERESA====================================*/

  /*input elementen*/
  function setElement(place, element) {
    switch (place) {
      case 2:
        elementCode[0] = element;
        break;
      case 3:
        elementCode[1] = element;
        break;
      case 4:
        elementCode[2] = element;
        break;
      case 5:
        elementCode[3] = element;
        break;
      default:
    }
  }

  /*input code*/
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(evt){
      playSound(keys[i], "#key", "0.5")
      switch (i) {
        case 0:
          numpadCode += "1";
          hideNumpadNumbers();
          numpadNumber1.setAttribute("visible", "true");
          break;
        case 1:
          numpadCode += "2";
          hideNumpadNumbers();
          numpadNumber2.setAttribute("visible", "true");
          break;
        case 2:
          numpadCode += "3";
          hideNumpadNumbers();
          numpadNumber3.setAttribute("visible", "true");
          break;
        case 3:
          numpadCode += "4";
          hideNumpadNumbers();
          numpadNumber4.setAttribute("visible", "true");
          break;
        case 4:
          numpadCode += "5";
          hideNumpadNumbers();
          numpadNumber5.setAttribute("visible", "true");
          break;
        case 5:
          numpadCode += "6";
          hideNumpadNumbers();
          numpadNumber6.setAttribute("visible", "true");
          break;
        case 6:
          numpadCode += "7";
          hideNumpadNumbers();
          numpadNumber7.setAttribute("visible", "true");
          break;
        case 7:
          numpadCode += "8";
          hideNumpadNumbers();
          numpadNumber8.setAttribute("visible", "true");
          break;
        case 8:
          numpadCode += "9";
          hideNumpadNumbers();
          numpadNumber9.setAttribute("visible", "true");
          break;
        case 9:
          numpadCode += "0";
          hideNumpadNumbers();
          numpadNumber0.setAttribute("visible", "true");
          break;
        case 10:
          numpadCode = "";
          hideNumpadNumbers();
          break;
        case 11:
          checkCode(numpadCode);
          break;
      }
    });
  }

  /*check element code*/
  function checkElementCode(elementCode) {
    if(elementCode[0] == "water" &&
    elementCode[1] == "earth" &&
    elementCode[2] == "fire" &&
    elementCode[3] == "air") {
      elementNumber1.setAttribute("visible", "true");
    }else if(elementCode[0] == "air" &&
    elementCode[1] == "water" &&
    elementCode[2] == "fire" &&
    elementCode[3] == "earth"){
      elementNumber2.setAttribute("visible", "true");
    }else if(elementCode[0] == "earth" &&
    elementCode[1] == "water" &&
    elementCode[2] == "air" &&
    elementCode[3] == "fire"){
      elementNumber3.setAttribute("visible", "true");
    }else if(elementCode[0] == "earth" &&
    elementCode[1] == "fire" &&
    elementCode[2] == "water" &&
    elementCode[3] == "air"){
      elementNumber4.setAttribute("visible", "true");
    }else if(elementCode[0] == "fire" &&
    elementCode[1] == "earth" &&
    elementCode[2] == "air" &&
    elementCode[3] == "water"){
      elementNumber5.setAttribute("visible", "true");
    }else if(elementCode[0] == "air" &&
    elementCode[1] == "earth" &&
    elementCode[2] == "water" &&
    elementCode[3] == "fire"){
      elementNumber6.setAttribute("visible", "true");
    }else if(elementCode[0] == "water" &&
    elementCode[1] == "fire" &&
    elementCode[2] == "air" &&
    elementCode[3] == "earth"){
      elementNumber7.setAttribute("visible", "true");
    }else if(elementCode[0] == "air" &&
    elementCode[1] == "fire" &&
    elementCode[2] == "earth" &&
    elementCode[3] == "water"){
      elementNumber8.setAttribute("visible", "true");
    }else if(elementCode[0] == "fire" &&
    elementCode[1] == "air" &&
    elementCode[2] == "water" &&
    elementCode[3] == "earth"){
      elementNumber9.setAttribute("visible", "true");
    }else if(elementCode[0] == "earth" &&
    elementCode[1] == "air" &&
    elementCode[2] == "water" &&
    elementCode[3] == "fire"){
      elementNumber0.setAttribute("visible", "true");
    } else {
      for(i = 0; i < elementNumbers.length; i++) {
        elementNumbers[i].setAttribute("visible", "false");
      }
    }
  }

  /*check code*/
  function checkCode(code) {
    if(code == "5976") {
      playSound(camera, "#correct", "0.1")
      hideNumpadNumbers();
      elementDoor.setAttribute("visible", "true");
      for(i=0; i < numpadAnswers.length; i++) {
        numpadAnswers[i].setAttribute("visible", "true");
      }
    }else {
      hideNumpadNumbers();
      numpadCode = "";
      playSound(camera, "#wrong", "0.1")
    }
  }

  /*hide all numpadnumbers*/
  function hideNumpadNumbers() {
    for(i = 0; i < numpadNumbers.length; i++) {
      numpadNumbers[i].setAttribute("visible", "false");
    }
  }
}

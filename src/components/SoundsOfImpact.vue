<template>
  <div id="background">
  <h1 id="messageThree" v-bind:style="{ color: activeColor}">{{ msg3 }}</h1> 
  <h2 id="time" class="messageOne" v-bind:style="{color: timeColor}">{{ msg }}</h2>
    <h3 id="messageTwo">{{ msg2 }}</h3> 
    <h2 class="blink_me" id="processing">{{ processing }}</h2> 
    <p id="overview" v-if="!isHidden">There are around 3 billion fewer birds alive in North America today than there were in 1970. 3 billion is one of those numbers that is so big, it is difficult to understand.<br><br>Interested to learn what 3 billion less birds in the environment sounds like, we built Byrd Bot, a tool that generates artificial bird soundscapes that simulate what the woods would sound like at 3 different points in time: 1970, 2017, and 2065.<br><br>Users can compare the soundscapes to experience decades of past or projected future environmental change, expressed in the form of bird songs.<br><br> <span id="instructions">Push <span id="yellow"></span> and the system will create a unique soundscape that spans across time periods.</span></p> 
      <!--<p><button class="landscape" id="woodlands" v-if="isHidden3" v-on:click="isWoodLand(); generateSoundscape(); isHidden3=false; isHidden4=false; isHidden2=true; other()">Listen to Soundscape</button><p>-->
    <span>
 
     <p v-if="!isHidden" id="surveyQuestion"><br><br><br><br>Are you interested to help us learn more about environmental communication? If so, use the QR code below to open a survey that you can fill out before and after interacting with ByrdBot. <br>
         <br><a href="https://rowan.co1.qualtrics.com/jfe/form/SV_eR5SdXa3GylTHBI"><img src="byrdbotsurvey.png"></a> </p>
	

     <!--<button id="aboutButton" v-if="!aboutHidden" v-on:click="isModalVisible=true">About</button>-->
     <!-- <button id="voiceButton" v-if="!voiceHidden" v-on:click="initiateVoiceControl()">Enable Voice Control</button>
     <br><button id="aboutButton" v-on:click="aboutHidden=true; voiceHidden=true; isHidden=true; isHidden2=true; isHidden3=true; isHidden4=true; biome(); isWoodLand(); generateSoundscape()">Yes</button>-->
    <!-- 
</p>
    <iframe id="survey" v-if="isHidden4" src="https://rowan.co1.qualtrics.com/jfe/form/SV_5ulN08dAFJakrwW" width="640" height="2336" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   -->  </span> 
   <h3>{{ msg4 }}</h3> 
    <button id="generateButton" v-if="!isHidden" v-on:click="aboutHidden=true; voiceHidden=true; isHidden=true; isHidden3=true; isWoodLand(); generateSoundscape();"></button>

   <!-- <button class="landscape" id="coast" v-if="isHidden3" v-on:click="isCoast(); generateSoundscape(); isHidden3=false; isHidden2=true">Coast</button>  
    <button class="landscape" id="backyard" v-if="isHidden3" v-on:click="isBackYard(); generateSoundscape(); isHidden3=false; isHidden2=true">Backyard</button>-->  
    <!--code for tracking frequency with box size fontSize: birdSoundVolume10/2 +'px' -->
	<button id="nineteenSeventyButton" v-if="isHidden2" v-on:click="nineteenSeventy"><span id="nineteenSeventyCircle"></span> to hear <b>1970</b></button>
    <button id="twentyTwentyButton" v-if="isHidden2" v-on:click="twentyTwenty"><span id="twentyTwentyCircle"></span> to hear <b>2017</b></button> 
    <button id="twentyTwentyFiftyFive" v-if="isHidden2" v-on:click="fiftyFifty"><span id="twentyTwentyFiftyFiveCircle"></span> to hear <b>2065</b></button>
    <canvas id="canvas"></canvas>
        <button id="resetButton" v-if="resetHidden" v-on:click="aboutHidden=false; isHidden=false; isHidden2=false; surveyShow=false; reset(); voiceHidden=false"><span id="resetCircle"></span> to <b>reset</b></button> 

    <ul class="birdBox" id="birds3" >
      <li class="card" v-bind:style="{color: birdColor6, fontSize: 50 +'px'}" v-show="card6"><!-- <img class="card" :alt="birdName6" :src="birdImage6"> -->{{birdName6}}</li>
      <li class="card" v-bind:style="{color: birdColor7, fontSize: 50 +'px'}" v-show="card7"><!-- <img class="card" :alt="birdName7" :src="birdImage7"> -->{{birdName7}}</li>
      <li class="card" v-bind:style="{color: birdColor8, fontSize: 50 +'px'}" v-show="card8"><!-- <img class="card" :alt="birdName8" :src="birdImage8"> -->{{birdName8}}</li>
      <li class="card" v-bind:style="{color: birdColor9, fontSize: 50 +'px'}" v-show="card9"><!-- <img class="card" :alt="birdName9" :src="birdImage9"> -->{{birdName9}}</li>
      <li class="card" v-bind:style="{color: birdColor10, fontSize: 50 +'px'}" v-show="card10"><!-- <img class="card" :alt="birdName10" :src="birdImage10"> -->{{birdName10}}</li>
      <li class="card" v-bind:style="{color: birdColor11}" v-show="card11"><!-- <img class="card" :alt="birdName11" :src="birdImage11"> -->{{birdName11}}</li>
      <li class="card" v-bind:style="{color: birdColor12}" v-show="card12"><!-- <img class="card" :alt="birdName12" :src="birdImage12"> -->{{birdName12}}</li>
      <li class="card" v-bind:style="{color: birdColor13}" v-show="card13"><!-- <img class="card" :alt="birdName13" :src="birdImage13"> -->{{birdName13}}</li>
      <li class="card" v-bind:style="{color: birdColor14}" v-show="card14"><!-- <img class="card" :alt="birdName14" :src="birdImage14"> -->{{birdName14}}</li>
      <li class="card" v-bind:style="{color: birdColor15}" v-show="card15"><!-- <img class="card" :alt="birdName15" :src="birdImage15"> -->{{birdName15}}</li>
      <li class="card" v-bind:style="{color: birdColor16}" v-show="card16"><!-- <img class="card" :alt="birdName16" :src="birdImage15"> -->{{birdName16}}</li>
    </ul> <h4> {{ meters3 }} </h4>
    <ul class="birdBox" id="birds2" >
      <li class="card" v-bind:style="{color: birdColor3, fontSize: 50 +'px'}" v-show="card3"><!-- <img class="card" :alt="birdName3" :src="birdImage3"> -->{{birdName3}}</li>
      <li class="card" v-bind:style="{color: birdColor4, fontSize: 50 +'px'}" v-show="card4"><!-- <img class="card" :alt="birdName4" :src="birdImage4"> -->{{birdName4}}</li>
      <li class="card" v-bind:style="{color: birdColor5, fontSize: 50 +'px'}" v-show="card5"><!-- <img class="card" :alt="birdName5" :src="birdImage5"> -->{{birdName5}}</li>
    </ul> <h4> {{ meters2 }} </h4>
     <ul class="birdBox" id="birds1" > 
      <li class="card" v-bind:style="{color: birdColor1, fontSize: 50 +'px'}" v-show="card1"><!-- <img class="card" :alt="birdName1" :src="birdImage1"> -->{{birdName1}}</li>
      <li class="card" v-bind:style="{color: birdColor2, fontSize: 50 +'px'}" v-show="card2"><!-- <img class="card" :alt="birdName2" :src="birdImage2"> -->{{birdName2}}</li>
	</ul> <h4> {{ meters1 }} </h4>
    <Modal v-show="isModalVisible" @voice="this.reInitiateVoiceControl" @close="isModalVisible = false"/> 
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<footer id= "footer">Bird songs are sourced from <a href="https://www.macaulaylibrary.org">Cornell Lab of Ornithology/Macaulay Library</a> This physical installation of ByrdBot was made possible by funding from the <a href="https://ccca.rowan.edu/">Ric Edelman College of Communication & Creative Arts</a> as well as the <a href="https://earth.rowan.edu/">School of Earth & Environment</a> at <a href="https://www.rowan.edu">Rowan University</a>.</footer>
  </div>
</template>

<script>
import axios from 'axios'
//import Pizzicato from 'pizzicato'
// Oscilloscope from 'oscilloscope'
import Modal from './Modal.vue'
export default {
  name: 'SoundsOfImpact',
  components: {
    Modal
  },
  data () {
    return {
		timeColor: '', 
      msg: '',
      msg2: '',
      msg3: '', 
      msg4: '',
      processing: '', 
      meters1: '', 
      meters2: '', 
      meters3: '', 
         
      birdName1: '', 
      birdName2: '', 
      birdName3: '',
      birdName4: '',
      birdName5: '',
      birdName6: '',
      birdName7: '',
      birdName8: '',
      birdName9: '',
      birdName10: '',
      birdName11: '',
      birdName12: '',
      birdName13: '',
      birdName14: '',
      birdName15: '',
      birdName16: '',
      
      birdNumber1: '', 
      birdNumber2: '',
      birdNumber3: '',
      birdNumber4: '',
      birdNumber5: '',
      birdNumber6: '', 
      birdNumber7: '', 
      birdNumber8: '', 
      birdNumber9: '', 
      birdNumber10: '', 
      birdNumber11: '', 
      birdNumber12: '', 
      birdNumber13: '', 
      birdNumber14: '', 
      birdNumber15: '', 
      birdNumber16: '',  
      
      birdSound1: '',
      birdSound2: '',
      birdSound3: '',
      birdSound4: '',
      birdSound5: '',
      birdSound6: '',
      birdSound7: '',
      birdSound8: '',
      birdSound9: '',
      birdSound10: '',
      birdSound11: '',
      birdSound12: '',
      birdSound13: '',
      birdSound14: '',
      birdSound15: '',
      birdSound16: '',
      
      birdSound1Pan: '',
      birdSound2Pan: '',
      birdSound3Pan: '',
      birdSound4Pan: '',
      birdSound5Pan: '',
      birdSound6Pan: '',
      birdSound7Pan: '',
      birdSound8Pan: '',
      birdSound9Pan: '',
      birdSound10Pan: '',
      birdSound11Pan: '',
      birdSound12Pan: '',
      birdSound13Pan: '',
      birdSound14Pan: '',
      birdSound15Pan: '',
      birdSound16Pan: '',
      
      birdAudio1: '', 
      birdAudio2: '',
      birdAudio3: '',
      birdAudio4: '',
      birdAudio5: '',
      birdAudio6: '',
      birdAudio7: '',
      birdAudio8: '',
      birdAudio9: '',
      birdAudio10: '',
      birdAudio11: '',
      birdAudio12: '',
      birdAudio13: '',
      birdAudio14: '',
      birdAudio15: '',
      birdAudio16: '',
      
      birdSong1: '',
      birdSong2: '', 
      birdSong3: '', 
      birdSong4: '', 
      birdSong5: '', 
      birdSong6: '', 
      birdSong7: '', 
      birdSong8: '', 
      birdSong9: '', 
      birdSong10: '', 
      birdSong11: '', 
      birdSong12: '', 
      birdSong13: '', 
      birdSong14: '', 
      birdSong15: '', 
      birdSong16: '',  
      
      
      birdSoundVolume1: '',
      birdSoundVolume2: '',
      birdSoundVolume3: '',
      birdSoundVolume4: '',
      birdSoundVolume5: '',
      birdSoundVolume6: '',
      birdSoundVolume7: '',
      birdSoundVolume8: '',
      birdSoundVolume9: '',
      birdSoundVolume10: '',
      birdSoundVolume11: '',
      birdSoundVolume12: '',
      birdSoundVolume13: '',
      birdSoundVolume14: '',
      birdSoundVolume15: '',
      birdSoundVolume16: '',
      
      nineteenSeventyVolume1: '', 
      nineteenSeventyVolume2: '', 
      nineteenSeventyVolume3: '', 
      nineteenSeventyVolume4: '', 
      nineteenSeventyVolume5: '', 
      nineteenSeventyVolume6: '', 
      nineteenSeventyVolume7: '', 
      nineteenSeventyVolume8: '', 
      nineteenSeventyVolume9: '', 
      nineteenSeventyVolume10: '', 
      
      twentyTwentyVolume1: '',
      twentyTwentyVolume2: '',
      twentyTwentyVolume3: '',
      twentyTwentyVolume4: '',
      twentyTwentyVolume5: '',
      twentyTwentyVolume6: '', 
      twentyTwentyVolume7: '', 
      twentyTwentyVolume8: '', 
      twentyTwentyVolume9: '', 
      twentyTwentyVolume10: '', 
      
      twentySixtyFiveVolume1: '',
      twentySixtyFiveVolume2: '',
      twentySixtyFiveVolume3: '',
      twentySixtyFiveVolume4: '',
      twentySixtyFiveVolume5: '',
      twentySixtyFiveVolume6: '',
      twentySixtyFiveVolume7: '',
      twentySixtyFiveVolume8: '',
      twentySixtyFiveVolume9: '',
      twentySixtyFiveVolume10: '', 
      
      birdAudio1Pan: '',
      birdAudio2Pan: '',
      birdAudio3Pan: '',
      birdAudio4Pan: '',
      birdAudio5Pan: '',
      birdAudio6Pan: '',
      birdAudio7Pan: '',
      birdAudio8Pan: '',
      birdAudio9Pan: '',
      birdAudio10Pan: '',
      birdAudio11Pan: '',
      birdAudio12Pan: '',
      birdAudio13Pan: '',
      birdAudio14Pan: '',
      birdAudio15Pan: '',
      birdAudio16Pan: '', 
       
       birdSongAudio1Pan: '',
       birdSongAudio2Pan: '',
       birdSongAudio3Pan: '',
       birdSongAudio4Pan: '',
       birdSongAudio5Pan: '',
       birdSongAudio6Pan: '',
       birdSongAudio7Pan: '',
       birdSongAudio8Pan: '',
       birdSongAudio9Pan: '', 
       birdSongAudio10Pan: '', 
      
      card1: false, 
      card2: false, 
      card3: false, 
      card4: false, 
      card5: false,
      card6: false, 
      card7: false, 
      card8: false, 
      card9: false, 
      card10: false, 
      card11: false, 
      card12: false, 
      card13: false, 
      card14: false, 
      card15: false, 
      card16: false,  
      
      birdColor1: 'salmon', 
      birdColor2: 'turquoise', 
      birdColor3: 'violet',
      birdColor4: 'orange',
      birdColor5: 'yellow',
      birdColor6: 'red', 
      birdColor7: 'green', 
      birdColor8: 'brown', 
      birdColor9: 'blue', 
      birdColor10: 'bisque', 
      birdColor11: 'aquamarine', 
      birdColor12: 'chartreuse', 
      birdColor13: 'cyan', 
      birdColor14: 'coral', 
      birdColor15: 'white', 
      birdColor16: 'gray', 
      
      flipCard1: false, 
      flipCard2: false, 
      flipCard3: false, 
      flipCard4: false, 
      flipCard5: false, 
      flipCard6: false, 
      flipCard7: false, 
      flipCard8: false, 
      flipCard9: false, 
      flipCard10: false, 
      flipCard11: false, 
      flipCard12: false, 
      flipCard13: false, 
      flipCard14: false, 
      flipCard15: false, 
      flipCard16: false, 
      
      
      flipCardA: false, 
      flipCardB: false, 
      flipCardC: false, 
      flipCardD: false, 
      flipCardE: false, 
      flipCardF: false,
      flipCardG: false,
      flipCardH: false,
      flipCardI: false,
      flipCardJ: false,
      flipCardK: false,
      flipCardL: false,
      flipCardM: false,
      flipCardN: false,
      flipCardO: false,
      flipCardP: false,
      
      flipCardOne: false, 
      flipCardTwo: false, 
      flipCardThree: false, 
      flipCardFour: false, 
      flipCardFive: false, 
      flipCardSix: false,
      flipCardSeven: false,
      flipCardEight: false,
      flipCardNine: false,
      flipCardTen: false,
      flipCardElevent: false,
      flipCardTwelve: false,
      flipCardThirteen: false,
      flipCardFourteen: false,
      flipCardFifteen: false,
      flipCardSixteen: false,
      
      
      twenty: false, 
      group: [],
      isHidden: false, 
      isHidden2: false, 
      isHidden3: false, 
      isHidden4: false, 
      resetHidden: false, 
      resetNotNeeded: false, 
      aboutHidden: false, 
      voiceHidden: false, 
      isModalVisible: false,
      stop: false, 
      doItAgain: false, 
      woodLand: false, 
      activeColor: "white", 
      integer: "", 
      coast: false, 
      backYard: false,
      filteredResults: [], 
      seventyStop: false, 
      twentyStop: false, 
      sixtyFiveStop: false,
      resultsType: '', 
      survey: false, 
      surveyShow: false, 
      
      bs1: true,
      bs2: true,
      bs3: true,
      bs4: true,
      bs5: true,
      bs6: true,
      bs7: true,
      bs8: true,
      bs9: true,
      bs10: true 
    }
  },
  
created: function () {
var time = new Date().getTime();
window.addEventListener("keypress", function(event) {

if (event.key !== "z") {
    time = new Date().getTime();
    console.log("screensaver timer reset")
    }
});

function refresh() {
    if(new Date().getTime() - time >= 110000) 
        window.location.href = 'https://soundsofhumanimpact.github.io/byrdbot2screensaver/'; 
    else 
        setTimeout(refresh, 10000);
}

setTimeout(refresh, 10000);
},

mounted: function () {
// Get the input field

// Execute a function when the user presses a key on the keyboard
window.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "b") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("generateButton").click();
  }
  
  if (event.key === "y") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("resetButton").click();
  }
  
    if (event.key === "r") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("nineteenSeventyButton").click();
  }
	if (event.key === "d") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("twentyTwentyButton").click();
  }
  
	if (event.key === "o") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("twentyTwentyFiftyFive").click();
  }
});



      this.msg = "BYRD BOT"
      this.msg2 = ""
      if ('webkitSpeechRecognition' in window) {
        this.voiceHidden = false; 
      } else {
        this.voiceHidden = true; 
	}
    },
  methods: {
  initiateVoiceControl: function () {
  console.log('voice control initiated')
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  let finalTranscript = '';
  let recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.continuous = true;
  recognition.onresult = (event) => {
  let interimTranscript = '';
    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
      let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
          if (interimTranscript == "generate soundscape") {
            this.generateSoundscape()
            this.isHidden2 = true
            this.aboutHidden = true
            this.resetHidden = true
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "about") {
            this.isModalVisible = true
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "close") {
            this.isModalVisible = false
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "play 1970") {
            this.nineteenSeventy()
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "play today") {
            this.twentyTwenty()
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "reset") {
            this.reset()
            this.aboutHidden = false
            this.isHidden2 = false
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "disable voice control") {
             recognition.abort();
             console.log('voice control disabled')
             this.doItAgain = false
          }
          else {
              this.sleep(3500).then(() => {
              this.reInitiateVoiceControl()
              }) 
          }
      }
    console.log("transcript: " + finalTranscript)
  }
recognition.start()
  },
     reInitiateVoiceControl: function (){
     console.log('reinitiate')
     if (this.doItAgain == true){
       this.initiateVoiceControl()
       }
  },
  biome: function (){
  this.msg2 = "Survey"
  this.msg = ""
    this.survey = true
  },
    other: function (){
  this.msg2 = ""
  this.msg = ""
  
  if (this.survey == true) {
	this.surveyShow = true 
  }
  else {
  this.surveyShow = false
  }
  },
  isWoodLand: function (){
    this.woodLand = true
    this.msg3 = ""
    this.activeColor = "green"
    this.resultsType = "Woodlands"
  },
	isCoast: function (){
      alert('Coming soon! For now, current variables are set to Woodlands.')
//       this.coast = true
//       this.msg3 = "Coast"
//       this.activeColor = "lightblue"
//       this.resultsType = "Coast"
         this.woodLand = true //remove after updating data set
  },
    isBackYard: function (){
      alert('Coming soon! For now, current variables are set to Woodlands.')
      //this.msg3 = "Back Yard"
      //this.activeColor = "limegreen"
      //this.backYard = true
      //this.resultsType = "Back Yard"
      //for use later when more options are available
      this.woodLand = true //remove after updating data set
  },
     generateSoundscape: function () {
     var self = this; 
     var returnedResults = []
     
     //make a call to get the data
     console.log ("birdsoundTest")
        axios.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/bird_data_simple_future2.json")
       .then(function (response) { 
      
      returnedResults = response.data
		//filter data to return only "woodland" entries
        self.filteredResults = returnedResults.filter(function(item){
        return item.scape === "woodland"
       })
      
     var numberOfFilteredObjects = Object.keys(self.filteredResults).length
     console.log("Total number of " + self.resultsType + " birds is: " + numberOfFilteredObjects)
     console.log (self.filteredResults)
     
		
		var randomEntries = [];
		
		
		function getRandomEntry() {
		return self.filteredResults[Math.round(Math.random() * (self.filteredResults.length))];
		}
		for (var i=0; i<16; i++) {
		var soundScapeVariables
		
		soundScapeVariables = getRandomEntry();
		
		randomEntries.push(soundScapeVariables);
		}
		
		self.msg4 = randomEntries
		
		console.log("Random entries retrieved:" + randomEntries)
			self.processing = "Generating Soundscape"
          
          
          //die roll
          var probability = Math.random()* 100
            console.log("Probability number is: " + probability)
          
          
          var soundConstructor = "sound" + Math.floor(Math.random()*4+1) 
//BIRD 1 - 10-40 Meters - 100% Volume          
          self.birdName1 = randomEntries[0].species
          self.birdNumber1 = randomEntries[0][soundConstructor]
          var birdProbability1 = randomEntries[0].frequency_1970 * 10000
          console.log("70:" + birdProbability1)
          var birdProbabilityA = randomEntries[0].frequency_2017 * 10000
          console.log("17:" + birdProbabilityA)
          var birdProbabilityOne = randomEntries[0].frequency_2065 * 10000
          console.log("65:" + birdProbabilityOne)
          
            //1970
            if (probability <= birdProbability1) {
              self.bs1 = true
              self.flipCard1 = true
            }
            if (probability >= birdProbability1) {
              self.bs1 = false
              self.flipCard1 = false
            }
            
            //2017
            if (probability <= birdProbabilityA) {
              self.flipCardA = true
            }
            if (probability >= birdProbabilityA) {
              self.flipCardA = false
            }
            
            //2065
            if (probability <= birdProbabilityOne) {
              self.flipCardOne = true
            }
            if (probability >= birdProbabilityOne) {
              self.flipCardOne = false
            }
            
//BIRD 2 - 10-40 Meters - 100% Volume            
          self.birdName2 = randomEntries[1].species
          self.birdNumber2 = randomEntries[1][soundConstructor]
          var birdProbability2 = randomEntries[1].frequency_1970 * 10000
          var birdProbabilityB = randomEntries[1].frequency_2017 * 10000
          var birdProbabilityTwo = randomEntries[1].frequency_2065 * 10000
          
          //1970
            if (probability <= birdProbability2) {
              self.bs2 = true
              self.flipCard2 = true
            }
            if (probability >= birdProbability2) {
              self.bs2 = false
              self.flipCard2 = false
            }
            
            //2017
            if (probability <= birdProbabilityB) {
              self.flipCardB = true
            }
            if (probability >= birdProbabilityB) {
              self.flipCardB = false
            }
            
            //2065
            if (probability <= birdProbabilityTwo) {
              self.flipCardTwo = true
            }
            if (probability >= birdProbabilityTwo) {
              self.flipCardTwo = false
            }
            
//BIRD 3 - 50 Meters - 50% Volume  
          self.birdName3 = randomEntries[2].species
          self.birdNumber3 = randomEntries[2][soundConstructor]
          var birdProbability3 = randomEntries[2].frequency_1970 * 10000
          var birdProbabilityC = randomEntries[2].frequency_2017 * 10000
          var birdProbabilityThree = randomEntries[2].frequency_2065 * 10000
          
            //1970
            if (probability <= birdProbability3) {
              self.bs3 = true
              self.flipCard3 = true
            }
            if (probability >= birdProbability3) {
              self.bs3 = false
              self.flipCard3 = false
            }
            
            //2017
            if (probability <= birdProbabilityC) {
              self.flipCardC = true
            }
            if (probability >= birdProbabilityC) {
              self.flipCardC = false
            }
            
            //2065
            if (probability <= birdProbabilityThree) {
              self.flipCardThree = true
            }
            if (probability >= birdProbabilityThree) {
              self.flipCardThree = false
            }
//BIRD 4 - 50 Meters - 50% Volume 
          self.birdName4 = randomEntries[3].species
          self.birdNumber4 = randomEntries[3][soundConstructor]
          var birdProbability4 = randomEntries[3].frequency_1970 * 10000
          var birdProbabilityD = randomEntries[3].frequency_2017 * 10000
          var birdProbabilityFour = randomEntries[3].frequency_2065 * 10000
          
            //1970
            if (probability <= birdProbability4) {
              self.bs4 = true
              self.flipCard4 = true
            }
            if (probability >= birdProbability4) {
              self.bs4 = false
              self.flipCard4 = false
            }
            
            //2017
            if (probability <= birdProbabilityD) {
              self.flipCardD = true
            }
            if (probability >= birdProbabilityD) {
              self.flipCardD = false
            }
            
            //2065
            if (probability <= birdProbabilityFour) {
              self.flipCardFour = true
            }
            if (probability >= birdProbabilityFour) {
              self.flipCardFour = false
            }
//BIRD 5 - 50 Meters - 50% Volume 
          self.birdName5 = randomEntries[4].species
          self.birdNumber5 = randomEntries[4][soundConstructor]
          var birdProbability5 = randomEntries[4].frequency_1970 * 10000
          var birdProbabilityE = randomEntries[4].frequency_2017 * 10000
          var birdProbabilityFive = randomEntries[4].frequency_2065 * 10000
          
            //1970
            if (probability <= birdProbability5) {
              self.bs5 = true
              self.flipCard5 = true
            }
            if (probability >= birdProbability5) {
              self.bs5 = false
              self.flipCard5 = false
            }
            
            //2017
            if (probability <= birdProbabilityE) {
              self.flipCardE = true
            }
            if (probability >= birdProbabilityE) {
              self.flipCardE = false
            }
            
            //2065
            if (probability <= birdProbabilityFive) {
              self.flipCardFive = true
            }
            if (probability >= birdProbabilityFive) {
              self.flipCardFive = false
            }
            
//BIRD 6 - 60 Meters - 25% Volume 
          self.birdName6 = randomEntries[5].species
          self.birdNumber6 = randomEntries[5][soundConstructor]
          var birdProbability6 = randomEntries[5].frequency_1970 * 10000
          var birdProbabilityF = randomEntries[5].frequency_2017 * 10000
          var birdProbabilitySix = randomEntries[5].frequency_2065 * 10000
          
            //1970
            if (probability <= birdProbability6) {
              self.bs6 = true
              self.flipCard6 = true
            }
            if (probability >= birdProbability6) {
              self.bs6 = false
              self.flipCard6 = false
            }
            
            //2017
            if (probability <= birdProbabilityF) {
              self.flipCardF = true
            }
            if (probability >= birdProbabilityF) {
              self.flipCardF = false
            }
            
            //2065
            if (probability <= birdProbabilitySix) {
              self.flipCardSix = true
            }
            if (probability >= birdProbabilitySix) {
              self.flipCardSix = false
            }
//BIRD 7 - 60 Meters - 20% Volume 
          self.birdName7 = randomEntries[6].species
          self.birdNumber7 = randomEntries[6][soundConstructor]
          var birdProbability7 = randomEntries[6].frequency_1970 * 10000
          var birdProbabilityG = randomEntries[6].frequency_2017 * 10000
          var birdProbabilitySeven = randomEntries[6].frequency_2065 * 10000
          
          //1970
            if (probability <= birdProbability7) {
              self.bs7 = true
              self.flipCard7 = true
            }
            if (probability >= birdProbability7) {
              self.bs7 = false
              self.flipCard7 = false
            }
            
            //2017
            if (probability <= birdProbabilityG) {
              self.flipCardG = true
            }
            if (probability >= birdProbabilityG) {
              self.flipCardG = false
            }
            
            //2065
            if (probability <= birdProbabilitySeven) {
              self.flipCardSeven = true
            }
            if (probability >= birdProbabilitySeven) {
              self.flipCardSeven = false
            }
            
//BIRD 8 - 70 Meters - 12% Volume 
          self.birdName8 = randomEntries[7].species
          self.birdNumber8 = randomEntries[7][soundConstructor]
          var birdProbability8 = randomEntries[7].frequency_1970 * 10000
          var birdProbabilityH = randomEntries[7].frequency_2017 * 10000
          var birdProbabilityEight = randomEntries[7].frequency_2065 * 10000
          
          //1970
            if (probability <= birdProbability8) {
              self.bs8 = true
              self.flipCard8 = true
            }
            if (probability >= birdProbability8) {
              self.bs8 = false
              self.flipCard5 = false
            }
            
            //2017
            if (probability <= birdProbabilityH) {
              self.flipCardH = true
            }
            if (probability >= birdProbabilityH) {
              self.flipCardH = false
            }
            //2065
            if (probability <= birdProbabilityEight) {
              self.flipCardEight = true
            }
            if (probability >= birdProbabilityEight) {
              self.flipCardEight = false
            }
            
//BIRD 9 - 90 Meters - 08% Volume 
          self.birdName9 = randomEntries[8].species
          self.birdNumber9 = randomEntries[8][soundConstructor]
          var birdProbability9 = randomEntries[8].frequency_1970 * 10000
          var birdProbabilityI = randomEntries[8].frequency_2017 * 10000
          var birdProbabilityNine = randomEntries[8].frequency_2065 * 10000
         
          //1970
            if (probability <= birdProbability9) {
              self.bs9 = true
              self.flipCard9 = true
            }
            if (probability >= birdProbability9) {
              self.bs9 = false
              self.flipCard9 = false
            }
            
            //2017
            if (probability <= birdProbabilityI) {
              self.flipCardI = true
            }
            if (probability >= birdProbabilityI) {
              self.flipCardI = false
            }
            
            //2065
            if (probability <= birdProbabilityNine) {
              self.flipCardNine = true
            }
            if (probability >= birdProbabilityNine) {
              self.flipCardNine = false
            }
            
//BIRD 10 - 100 Meters - 03% Volume 
          self.birdName10 = randomEntries[9].species
          self.birdNumber10 = randomEntries[9][soundConstructor]
          var birdProbability10 = randomEntries[9].frequency_1970 * 10000
          var birdProbabilityJ = randomEntries[9].frequency_2017 * 10000
          var birdProbabilityTen = randomEntries[9].frequency_2065 * 10000
          
          //1970
            if (probability <= birdProbability10) {
              self.bs10 = true
              self.flipCard10 = true
            }
            if (probability >= birdProbability10) {
              self.bs10 = false
              self.flipCard10 = false
            }
            
            //2017
            if (probability <= birdProbabilityJ) {
              self.flipCardJ = true
            }
            if (probability >= birdProbabilityJ) {
              self.flipCardJ = false
            }
            
            //2065
            if (probability <= birdProbabilityTen) {
              self.flipCardTen = true
            }
            if (probability >= birdProbabilityTen) {
              self.flipCardTen = false
            }
			if (self.bs1 == false || self.bs2 == false || self.bs3 == false || self.bs4 == false || self.bs5 == false || self.bs6 == false || self.bs7 == false || self.bs8 == false || self.bs9 == false || self.bs10 == false) {
				self.sleep(200).then(() => {
				console.log("insufficient birds")
				setInterval(self.generateSoundscape(), 500)
				return	
				})
					
			}
			else {
				console.log("sufficient birds generated")
				self.msg2 = "Soundscapes Generated"
				self.msg4 = "Select a Time Period to Listen"
				self.processing = ""
				self.isHidden2 = true
				self.resetHidden = true
				self.loadSounds()
				
				
			}
				
          //self.group = new Pizzicato.Group([]);
       })
       .catch(function (error) {
       console.log(error);
       self.processing = error + ". Restarting."
       self.sleep(200).then(() => {
        self.loopFour()
          })
       if (error) {self.resetHidden = true
       }
       })
       
    }, 
    sleep: function (milliseconds){
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    },
        loopOne: function () {
      this.nineteenSeventy()
    }, 
        loopTwo: function () {
      this.twentyTwenty()
    },
        loopThree: function () {
      this.fiftyFifty()
    },
    
    loopFour: function () {
      this.generateSoundscape()
    },
    
		loadSounds: function () {
//1970	
		this.birdSound1 = new Audio(this.birdNumber1)
        this.birdSound1.volume = 1
        
        this.birdSound2 = new Audio(this.birdNumber2)
        this.birdSound2.volume = 1
        
        this.birdSound3 = new Audio(this.birdNumber3)
        this.birdSound3.volume = .5
        
        this.birdSound4 = new Audio(this.birdNumber4)
        this.birdSound4.volume = .5
        
        this.birdSound5 = new Audio(this.birdNumber5)
        this.birdSound5.volume = .5
        
        this.birdSound6 = new Audio(this.birdNumber6)
        this.birdSound6.volume = .25
        
        this.birdSound7 = new Audio(this.birdNumber7)
        this.birdSound7.volume = .2
        
        this.birdSound8 = new Audio(this.birdNumber8)
        this.birdSound8.volume = .12
        
        this.birdSound9 = new Audio(this.birdNumber9)
        this.birdSound9.volume = .08
        
        this.birdSound10 = new Audio(this.birdNumber10)
        this.birdSound10.volume = .03
//2020       
//         this.birdAudio1 = new Audio(this.birdNumber1)
//         this.birdAudio1.volume = 1
//         
//         this.birdAudio2 = new Audio(this.birdNumber2)
//         this.birdAudio2.volume = 1
//         
//         this.birdAudio3 = new Audio(this.birdNumber3)
//         this.birdAudio3.volume = .5
        
        this.birdAudio4 = new Audio(this.birdNumber4)
        this.birdAudio4.volume = .5
        
        this.birdAudio5 = new Audio(this.birdNumber5)
        this.birdAudio5.volume = .5
        
        this.birdAudio6 = new Audio(this.birdNumber6)
        this.birdAudio6.volume = .25
        
        this.birdAudio7 = new Audio(this.birdNumber7)
        this.birdAudio7.volume = .2
        
        this.birdAudio8 = new Audio(this.birdNumber8)
        this.birdAudio8.volume = .12
        
        this.birdAudio9 = new Audio(this.birdNumber9)
        this.birdAudio9.volume = .08
        
        this.birdAudio10 = new Audio(this.birdNumber10)
        this.birdAudio10.volume = .03
//2065
// 		this.birdSong1 = new Audio(this.birdNumber1)
//         this.birdSong1.volume = 1
//         
//         this.birdSong2 = new Audio(this.birdNumber2)
//         this.birdSong2.volume = 1
//         
//         this.birdSong3 = new Audio(this.birdNumber3)
//         this.birdSong3.volume = .5
//         
//         this.birdSong4 = new Audio(this.birdNumber4)
//         this.birdSong4.volume = .5
//         
//         this.birdSong5 = new Audio(this.birdNumber5)
//         this.birdSong5.volume = .5
//         
        this.birdSong6 = new Audio(this.birdNumber6)
        this.birdSong6.volume = .25
        
        this.birdSong7 = new Audio(this.birdNumber7)
        this.birdSong7.volume = .2
        
        this.birdSong8 = new Audio(this.birdNumber8)
        this.birdSong8.volume = .12
        
        this.birdSong9 = new Audio(this.birdNumber9)
        this.birdSong9.volume = .08
        
        this.birdSong10 = new Audio(this.birdNumber10)
        this.birdSong10.volume = .03
    },
    
    //TODO convert plays from pizzicato groups for twenty and sixty five conditions
    nineteenSeventy: function (){
        if (this.twentyStop == true) {
//           this.birdAudio1.pause();
//           this.birdAudio1.currentTime = 0;
//           this.birdAudio2.pause();
//           this.birdAudio2.currentTime = 0;
//           this.birdAudio3.pause();
//           this.birdAudio3.currentTime = 0;
          this.birdAudio4.pause();
          this.birdAudio4.currentTime = 0;
          this.birdAudio5.pause();
          this.birdAudio5.currentTime = 0;
          this.birdAudio6.pause();
          this.birdAudio6.currentTime = 0;
          this.birdAudio7.pause();
          this.birdAudio7.currentTime = 0;
          this.birdAudio8.pause();
          this.birdAudio8.currentTime = 0;
          this.birdAudio9.pause();
          this.birdAudio9.currentTime = 0;
          this.birdAudio10.pause();
          this.birdAudio10.currentTime = 0;
          
          this.twentyStop = false
          this.sleep(200).then(() => {
            this.loopOne()
          })
        }
        if (this.sixtyFiveStop == true) {
			//this.birdSong1.pause();
//           this.birdSong1.currentTime = 0;
//           this.birdSong2.pause();
//           this.birdSong2.currentTime = 0;
//           this.birdSong3.pause();
//           this.birdSong3.currentTime = 0;
//           this.birdSong4.pause();
//           this.birdSong4.currentTime = 0;
//           this.birdSong5.pause();
//           this.birdSong5.currentTime = 0;
          this.birdSong6.pause();
          this.birdSong6.currentTime = 0;
          this.birdSong7.pause();
          this.birdSong7.currentTime = 0;
          this.birdSong8.pause();
          this.birdSong8.currentTime = 0;
          this.birdSong9.pause();
          this.birdSong9.currentTime = 0;
          this.birdSong10.pause();
          this.birdSong10.currentTime = 0;
          
          this.sixtyFiveStop = false
          this.sleep(200).then(() => {
            this.loopOne()
          })
        }
        else {
        this.msg4 = ""
        //this.meters1 = '--------------------------------------------------------------------------------   10-40 Meters   --------------------------------------------------------------------------------', 
        //this.meters2 = '--------------------------------------------------------------------------------   50 Meters   --------------------------------------------------------------------------------', 
        //this.meters3 = '--------------------------------------------------------------------------------   60+ Meters   -----------------------------------------------------------------------------------' 
        
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        
        this.msg = "1970"
        this.timeColor = "#f5602a"
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.card7 = false;
        this.card8 = false;
        this.card9 = false;
        this.card10 = false;
        this.stop = false; 
        
        if (this.flipCard1 == true) {
          this.card1 = true; 
        }
        if (this.flipCard2 == true) {
          this.card2 = true; 
        }
        if (this.flipCard3 == true) {
          this.card3 = true; 
        }
        if (this.flipCard4 == true) {
          this.card4 = true; 
        }
        if (this.flipCard5 == true) {
          this.card5 = true; 
        }
        if (this.flipCard6 == true) {
          this.card6 = true; 
        }
        if (this.flipCard7 == true) {
          this.card7 = true; 
        }
         if (this.flipCard8 == true) {
          this.card8 = true; 
        }
         if (this.flipCard9 == true) {
          this.card9 = true; 
        }
         if (this.flipCard10 == true) {
          this.card10 = true; 
        }
        
        if (this.flipCard1 == false && this.flipCard2 == false && this.flipCard3 == false && this.flipCard4 == false && this.flipCard5 == false && this.flipCard6 == false && this.flipCard7 == false && this.flipCard8 == false && this.flipCard9 == false && this.flipCard10 == false ) {
          this.msg4 = "Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."
        }
        
        this.sleep(500).then(() => {
			this.visualizeNineteenSeventy()
        })
        }
    },
    twentyTwenty: function (){
        if (this.seventyStop == true) {
          this.birdSound1.pause();
          this.birdSound1.currentTime = 0;
          this.birdSound2.pause();
          this.birdSound2.currentTime = 0;
          this.birdSound3.pause();
          this.birdSound3.currentTime = 0;
          this.birdSound4.pause();
          this.birdSound4.currentTime = 0;
          this.birdSound5.pause();
          this.birdSound5.currentTime = 0;
          this.birdSound6.pause();
          this.birdSound6.currentTime = 0;
          this.birdSound7.pause();
          this.birdSound7.currentTime = 0;
          this.birdSound8.pause();
          this.birdSound8.currentTime = 0;
          this.birdSound9.pause();
          this.birdSound9.currentTime = 0;
          this.birdSound10.pause();
          this.birdSound10.currentTime = 0;
          
          this.seventyStop = false
          this.sleep(200).then(() => {
            this.loopTwo()
          })
        }
        if (this.sixtyFiveStop == true) {
//           this.birdSong1.pause();
//           this.birdSong1.currentTime = 0;
//           this.birdSong2.pause();
//           this.birdSong2.currentTime = 0;
//           this.birdSong3.pause();
//           this.birdSong3.currentTime = 0;
//           this.birdSong4.pause();
//           this.birdSong4.currentTime = 0;
//           this.birdSong5.pause();
//           this.birdSong5.currentTime = 0;
          this.birdSong6.pause();
          this.birdSong6.currentTime = 0;
          this.birdSong7.pause();
          this.birdSong7.currentTime = 0;
          this.birdSong8.pause();
          this.birdSong8.currentTime = 0;
          this.birdSong9.pause();
          this.birdSong9.currentTime = 0;
          this.birdSong10.pause();
          this.birdSong10.currentTime = 0;
          
          this.sixtyFiveStop = false
          this.sleep(200).then(() => {
            this.loopTwo()
          })
        }
        else {
        this.msg4 = ""
        //this.meters1 = '--------------------------------------------------------------------------------   10-40 Meters   --------------------------------------------------------------------------------', 
        //this.meters2 = '--------------------------------------------------------------------------------   50 Meters   --------------------------------------------------------------------------------', 
        //this.meters3 = '--------------------------------------------------------------------------------   60+ Meters   -----------------------------------------------------------------------------------' 
        
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0 
        
        this.msg = "2017"
        this.timeColor = "limegreen" 
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.card7 = false;
        this.card8 = false;
        this.card9 = false;
        this.card10 = false;
        this.stop = false; 
        
        if (this.flipCardA == true) {
          //this.card1 = true; 
        }
        if (this.flipCardB == true) {
          //this.card2 = true; 
        }
        if (this.flipCardC == true) {
          //this.card3 = true; 
        }
        if (this.flipCardD == true) {
          this.card4 = true; 
        }
        if (this.flipCardE == true) {
          this.card5 = true; 
        }
         if (this.flipCardF == true) {
          this.card6 = true; 
        }
         if (this.flipCardG == true) {
          this.card7 = true; 
        }
        if (this.flipCardH == true) {
          this.card8 = true; 
        }
        if (this.flipCardI == true) {
          this.card9 = true; 
        }
        if (this.flipCardJ == true) {
          this.card10 = true; 
        }
        
        if (this.flipCardA == false && this.flipCardB == false && this.flipCardC== false && this.flipCardD == false && this.flipCardE == false && this.flipCardF == false && this.flipCardG == false && this.flipCardH == false && this.flipCardI == false && this.flipCardJ == false  ) {
          this.msg4 = "Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."
        }
        this.stop = true; 
        this.sleep(500).then(() => {
			this.visualizeTwentyTwenty()
        })
        }
    },
    fiftyFifty: function (){
        if (this.seventyStop == true) {
          this.birdSound1.pause();
          this.birdSound1.currentTime = 0;
          this.birdSound2.pause();
          this.birdSound2.currentTime = 0;
          this.birdSound3.pause();
          this.birdSound3.currentTime = 0;
          this.birdSound4.pause();
          this.birdSound4.currentTime = 0;
          this.birdSound5.pause();
          this.birdSound5.currentTime = 0;
          this.birdSound6.pause();
          this.birdSound6.currentTime = 0;
          this.birdSound7.pause();
          this.birdSound7.currentTime = 0;
          this.birdSound8.pause();
          this.birdSound8.currentTime = 0;
          this.birdSound9.pause();
          this.birdSound9.currentTime = 0;
          this.birdSound10.pause();
          this.birdSound10.currentTime = 0;
          
          this.seventyStop = false
          this.sleep(200).then(() => {
            this.loopThree()
          })
        }
        
        if (this.twentyStop == true) {
//           this.birdAudio1.pause();
//           this.birdAudio1.currentTime = 0;
//           this.birdAudio2.pause();
//           this.birdAudio2.currentTime = 0;
//           this.birdAudio3.pause();
//           this.birdAudio3.currentTime = 0;
          this.birdAudio4.pause();
          this.birdAudio4.currentTime = 0;
          this.birdAudio5.pause();
          this.birdAudio5.currentTime = 0;
          this.birdAudio6.pause();
          this.birdAudio6.currentTime = 0;
          this.birdAudio7.pause();
          this.birdAudio7.currentTime = 0;
          this.birdAudio8.pause();
          this.birdAudio8.currentTime = 0;
          this.birdAudio9.pause();
          this.birdAudio9.currentTime = 0;
          this.birdAudio10.pause();
          this.birdAudio10.currentTime = 0;
          
          this.twentyStop = false
          this.sleep(200).then(() => {
            this.loopThree()
          })
        }
        else {
        this.msg4 = ""
        //this.meters1 = '--------------------------------------------------------------------------------   10-40 Meters   --------------------------------------------------------------------------------', 
        //this.meters2 = '--------------------------------------------------------------------------------   50 Meters   --------------------------------------------------------------------------------', 
        //this.meters3 = '--------------------------------------------------------------------------------   60+ Meters   -----------------------------------------------------------------------------------' 
        
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        
        this.msg = "2065"
        this.timeColor = "#4287f5" 
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.card7 = false;
        this.card8 = false;
        this.card9 = false;
        this.card10 = false;
        this.stop = false; 
        
        if (this.flipCardOne == true) {
          //this.card1 = true; 
        }
        if (this.flipCardTwo == true) {
          //this.card2 = true; 
        }
        if (this.flipCardThree == true) {
          //this.card3 = true; 
        }
        if (this.flipCardFour == true) {
          //this.card4 = true; 
        }
        if (this.flipCardFive == true) {
          //this.card5 = true; 
        }
         if (this.flipCardSix == true) {
          this.card6 = true; 
        }
         if (this.flipCardSeven == true) {
          this.card7 = true; 
        }
        if (this.flipCardEight == true) {
          this.card8 = true; 
        }
        if (this.flipCardNine == true) {
          this.card9 = true; 
        }
        if (this.flipCardTen == true) {
          this.card10 = true; 
        }
        
        if (this.flipCardA == false && this.flipCardB == false && this.flipCardC== false && this.flipCardD == false && this.flipCardE == false && this.flipCardF == false && this.flipCardG == false && this.flipCardH == false && this.flipCardI == false && this.flipCardJ == false  ) {
          this.msg4 = "Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."
        }
        this.stop = true; 
        this.sleep(500).then(() => {
			this.visualizeTwentySixtyFive()
        })
        }
    },
    reset: function () {window.location.reload()
        
     },   
     visualizeNineteenSeventy: function (){
		this.seventyStop = true
		
			this.birdSound1.play();
          this.birdSound2.play();
          this.birdSound3.play();
          this.birdSound4.play();
          this.birdSound5.play();
          this.birdSound6.play();
          this.birdSound7.play();
          this.birdSound8.play();
          this.birdSound9.play();
          this.birdSound10.play();
// var audioContext = new (window.AudioContext || window.webkitAudioContext)();
// 		var analyser = audioContext.createAnalyser();
// 		var source = audioContext.createMediaStreamSource();
// 		source.connect(analyser);
// 
//        
//        var canvas = document.getElementsByTagName("canvas")[0]
//        canvas.width = window.innerWidth
//        canvas.height = window.innerHeight
//        
// 
//        
//        var scope = new Oscilloscope(analyser)
// 
//        analyser.connect(audioContext.destination)
// 
//        var ctx = canvas.getContext('2d')
//        ctx.lineWidth = 3
//        ctx.shadowBlur = 4
//        ctx.shadowColor = 'white'
// 
//        function drawLoop () {
//           ctx.clearRect(0, 0, canvas.width, canvas.height)
// 
//           var centerY = canvas.height / 3
//           ctx.strokeStyle = 'limegreen'
//           scope.draw(ctx, 0, centerY, undefined, centerY)
// 
//           window.requestAnimationFrame(drawLoop)
//        }
//       drawLoop()
    },
    visualizeTwentyTwenty: function () {
		this.twentyStop = true
		
		//           this.birdAudio1.play();
//           this.birdAudio2.play();
//           this.birdAudio3.play();
          this.birdAudio4.play();
          this.birdAudio5.play();
          this.birdAudio6.play();
          this.birdAudio7.play();
          this.birdAudio8.play();
          this.birdAudio9.play();
          this.birdAudio10.play();
// var audioContext = Pizzicato.context;
//        this.group.play()
// 
//        
//        var canvas = document.getElementsByTagName("canvas")[0]
//        canvas.width = window.innerWidth
//        canvas.height = window.innerHeight
//        
//        var analyser = Pizzicato.context.createAnalyser();
//        this.group.connect(analyser);
//        
//        var scope = new Oscilloscope(analyser)
// 
//        analyser.connect(audioContext.destination)
// 
//        var ctx = canvas.getContext('2d')
//        ctx.lineWidth = 3
//        ctx.shadowBlur = 4
//        ctx.shadowColor = 'white'
// 
//        function drawLoop () {
//           ctx.clearRect(0, 0, canvas.width, canvas.height)
// 
//           var centerY = canvas.height / 3
//           ctx.strokeStyle = 'salmon'
//           scope.draw(ctx, 0, centerY, undefined, centerY)
// 
//           window.requestAnimationFrame(drawLoop)
//        }
//       drawLoop()
    }, 
      visualizeTwentySixtyFive: function () {
		this.sixtyFiveStop = true
		
		//           this.birdSong1.play();
//           this.birdSong2.play();
//           this.birdSong3.play();
//           this.birdSong4.play();
//           this.birdSong5.play();
          this.birdSong6.play();
          this.birdSong7.play();
          this.birdSong8.play();
          this.birdSong9.play();
          this.birdSong10.play();
// var audioContext = Pizzicato.context;
//        this.group.play()
// 
//        
//        var canvas = document.getElementsByTagName("canvas")[0]
//        canvas.width = window.innerWidth
//        canvas.height = window.innerHeight
//        
//        var analyser = Pizzicato.context.createAnalyser();
//        this.group.connect(analyser);
//        
//        var scope = new Oscilloscope(analyser)
// 
//        analyser.connect(audioContext.destination)
// 
//        var ctx = canvas.getContext('2d')
//        ctx.lineWidth = 3
//        ctx.shadowBlur = 4
//        ctx.shadowColor = 'white'
// 
//        function drawLoop () {
//           ctx.clearRect(0, 0, canvas.width, canvas.height)
// 
//           var centerY = canvas.height / 3
//           ctx.strokeStyle = 'orange'
//           scope.draw(ctx, 0, centerY, undefined, centerY)
// 
//           window.requestAnimationFrame(drawLoop)
//        }
//       drawLoop()
//     }
  },
  closeModal: function () {
     this.isModalVisible = false; 
  }, 
  }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to self component only -->
<style scoped>
.blink_me {
  animation: blinker 1s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}

#instructions {
    
}

#yellow {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display:inline-block;
  background-color: yellow;
}
 
#surveyQuestion {
width: 40%; 
float: right;
text-align: center;  
margin-right: 4.5%; 
}
#overview {
font-size: 20px; 
width: 50%; 
text-align: left;
float: left;  
margin-top: 5%; 
margin-left: 25px; 
}
#messageTwo {
font-size: 50px;
color: green; 
}
#messageThree {
font-size: 30px;
}
#processing {
color: red; 
}
#birds1 {
}
#birds2 {
}
#birds3 {
}
.birdBox {
padding-bottom: 0; 
z-index: 2
}
.card {
border-style: solid; 
border-width: 1px;
padding: 5px; 
}
.landscape {
height: 100px; 
}
#time {
font-size: 65px;
margin-top: -25px; 
margin-bottom: -25px; 
}
#woodlands {
  background-color: purple;
}
#coast {
  background-color: lightblue;
}
#backyard {
  background-color: limegreen;
}
h3 {
margin-top: 0; 
margin-bottom: 0; 
}
button {
  background-color: limegreen; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold; 
  font-size: large;  
}
#generateButton {
background-color: black;
margin-top: 15%; 
}
#voiceButton {
background-color: orange; 
font-size: small; 
font-size: 12; 
padding: 7px 16px;
}
#aboutButton {
background-color: purple;
font-size: small; 
font-size: 12; 
padding: 7px 16px;
}

#resetButton {
background-color: black; 
text-align: left;
}
#resetCircle {
  border: none;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  border-radius: 50%;
  background-color: white; 
}
#nineteenSeventyButton{
background-color: black; 
}

#twentyTwentyButton {
background-color: black; 
}

#twentyTwentyFiftyFive {
background-color: black; 
}

#nineteenSeventyCircle {
  border: none;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  border-radius: 50%;
  background-color: #f5602a; 
}
#twentyTwentyCircle {
  border: none;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  border-radius: 50%;
  background-color: limegreen;
  }
#twentyTwentyFiftyFiveCircle {
  border: none;
  padding: 12px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  border-radius: 50%;
  background-color: #4287f5;
  }  
  
  
h4 {
  margin: 40px 0 0;
  text-align: center;
  margin-right: -25px; 
  margin-top: 0px; 
  margin-bottom: 40px; 
}
ul {
  list-style-type: none;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-left: -25px; 
}
li {
  display: inline-block;
  margin: 0 10px;
  
}
a {
  color: #42b983;
}
canvas {
height: 20px; 
width: 100%; 
}
#footer {
    position: relative;
    margin-top: 10px;
}
</style>
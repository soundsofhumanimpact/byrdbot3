(function(i){function e(e){for(var t,s,n=e[0],a=e[1],u=e[2],b=0,c=[];b<n.length;b++)s=n[b],Object.prototype.hasOwnProperty.call(d,s)&&d[s]&&c.push(d[s][0]),d[s]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t]);l&&l(e);while(c.length)c.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var i,e=0;e<o.length;e++){for(var r=o[e],t=!0,n=1;n<r.length;n++){var a=r[n];0!==d[a]&&(t=!1)}t&&(o.splice(e--,1),i=s(s.s=r[0]))}return i}var t={},d={app:0},o=[];function s(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return i[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=i,s.c=t,s.d=function(i,e,r){s.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:r})},s.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,e){if(1&e&&(i=s(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var t in i)s.d(r,t,function(e){return i[e]}.bind(null,t));return r},s.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return s.d(e,"a",e),e},s.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},s.p="/byrdbot3/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],a=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var l=a;o.push([0,"chunk-vendors"]),r()})({0:function(i,e,r){i.exports=r("56d7")},"034f":function(i,e,r){"use strict";var t=r("85ec"),d=r.n(t);d.a},"22d7":function(i,e,r){"use strict";var t=r("be87"),d=r.n(t);d.a},"56d7":function(i,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),d=function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("div",{attrs:{id:"app"}},[r("SoundsOfImpact")],1)},o=[],s=function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("div",{attrs:{id:"background"}},[r("h1",{style:{color:i.activeColor},attrs:{id:"messageThree"}},[i._v(i._s(i.msg3))]),r("h2",{staticClass:"messageOne",style:{color:i.timeColor},attrs:{id:"time"}},[i._v(i._s(i.msg))]),r("h3",{attrs:{id:"messageTwo"}},[i._v(i._s(i.msg2))]),r("h2",{staticClass:"blink_me",attrs:{id:"processing"}},[i._v(i._s(i.processing))]),i.isHidden?i._e():r("p",{attrs:{id:"overview"}},[i._v("There are around 3 billion fewer birds alive in North America today than there were in 1970. 3 billion is one of those numbers that is so big, it is difficult to understand."),r("br"),r("br"),i._v("Interested to learn what 3 billion less birds in the environment sounds like, we built Byrd Bot, a tool that generates artificial bird soundscapes that simulate what the woods would sound like at 3 different points in time: 1970, 2017, and 2065."),r("br"),r("br"),i._v("Users can compare the soundscapes to experience decades of past or projected future environmental change, expressed in the form of bird songs."),r("br"),r("br"),i._v(" "),i._m(0)]),r("span"),r("h3",[i._v(i._s(i.msg4))]),i.isHidden?i._e():r("button",{attrs:{id:"generateButton"},on:{click:function(e){i.aboutHidden=!0,i.voiceHidden=!0,i.isHidden=!0,i.isHidden3=!0,i.isWoodLand(),i.generateSoundscape()}}}),i.isHidden2?r("button",{attrs:{id:"nineteenSeventyButton"},on:{click:i.nineteenSeventy}},[r("span",{attrs:{id:"nineteenSeventyCircle"}}),i._v(" to hear "),r("b",[i._v("1970")])]):i._e(),i.isHidden2?r("button",{attrs:{id:"twentyTwentyButton"},on:{click:i.twentyTwenty}},[r("span",{attrs:{id:"twentyTwentyCircle"}}),i._v(" to hear "),r("b",[i._v("2017")])]):i._e(),i.isHidden2?r("button",{attrs:{id:"twentyTwentyFiftyFive"},on:{click:i.fiftyFifty}},[r("span",{attrs:{id:"twentyTwentyFiftyFiveCircle"}}),i._v(" to hear "),r("b",[i._v("2065")])]):i._e(),r("canvas",{attrs:{id:"canvas"}}),i.resetHidden?r("button",{attrs:{id:"resetButton"},on:{click:function(e){i.aboutHidden=!1,i.isHidden=!1,i.isHidden2=!1,i.surveyShow=!1,i.reset(),i.voiceHidden=!1}}},[r("span",{attrs:{id:"resetCircle"}}),i._v(" to "),r("b",[i._v("reset")])]):i._e(),r("ul",{staticClass:"birdBox",attrs:{id:"birds3"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:i.card6,expression:"card6"}],staticClass:"card",style:{color:i.birdColor6,fontSize:"50px"}},[i._v(i._s(i.birdName6))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card7,expression:"card7"}],staticClass:"card",style:{color:i.birdColor7,fontSize:"50px"}},[i._v(i._s(i.birdName7))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card8,expression:"card8"}],staticClass:"card",style:{color:i.birdColor8,fontSize:"50px"}},[i._v(i._s(i.birdName8))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card9,expression:"card9"}],staticClass:"card",style:{color:i.birdColor9,fontSize:"50px"}},[i._v(i._s(i.birdName9))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card10,expression:"card10"}],staticClass:"card",style:{color:i.birdColor10,fontSize:"50px"}},[i._v(i._s(i.birdName10))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card11,expression:"card11"}],staticClass:"card",style:{color:i.birdColor11}},[i._v(i._s(i.birdName11))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card12,expression:"card12"}],staticClass:"card",style:{color:i.birdColor12}},[i._v(i._s(i.birdName12))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card13,expression:"card13"}],staticClass:"card",style:{color:i.birdColor13}},[i._v(i._s(i.birdName13))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card14,expression:"card14"}],staticClass:"card",style:{color:i.birdColor14}},[i._v(i._s(i.birdName14))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card15,expression:"card15"}],staticClass:"card",style:{color:i.birdColor15}},[i._v(i._s(i.birdName15))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card16,expression:"card16"}],staticClass:"card",style:{color:i.birdColor16}},[i._v(i._s(i.birdName16))])]),i._v(" "),r("h4",[i._v(" "+i._s(i.meters3)+" ")]),r("ul",{staticClass:"birdBox",attrs:{id:"birds2"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:i.card3,expression:"card3"}],staticClass:"card",style:{color:i.birdColor3,fontSize:"50px"}},[i._v(i._s(i.birdName3))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card4,expression:"card4"}],staticClass:"card",style:{color:i.birdColor4,fontSize:"50px"}},[i._v(i._s(i.birdName4))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card5,expression:"card5"}],staticClass:"card",style:{color:i.birdColor5,fontSize:"50px"}},[i._v(i._s(i.birdName5))])]),i._v(" "),r("h4",[i._v(" "+i._s(i.meters2)+" ")]),r("ul",{staticClass:"birdBox",attrs:{id:"birds1"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:i.card1,expression:"card1"}],staticClass:"card",style:{color:i.birdColor1,fontSize:"50px"}},[i._v(i._s(i.birdName1))]),r("li",{directives:[{name:"show",rawName:"v-show",value:i.card2,expression:"card2"}],staticClass:"card",style:{color:i.birdColor2,fontSize:"50px"}},[i._v(i._s(i.birdName2))])]),i._v(" "),r("h4",[i._v(" "+i._s(i.meters1)+" ")]),r("Modal",{directives:[{name:"show",rawName:"v-show",value:i.isModalVisible,expression:"isModalVisible"}],on:{voice:this.reInitiateVoiceControl,close:function(e){i.isModalVisible=!1}}}),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),i._m(1)],1)},n=[function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("span",{attrs:{id:"instructions"}},[i._v("Push "),r("span",{attrs:{id:"yellow"}}),i._v(" and the system will create a unique soundscape that spans across time periods.")])},function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("footer",{attrs:{id:"footer"}},[i._v("Bird songs are sourced from "),r("a",{attrs:{href:"https://www.macaulaylibrary.org"}},[i._v("Cornell Lab of Ornithology/Macaulay Library")]),i._v(" This physical installation of ByrdBot was made possible by funding from the "),r("a",{attrs:{href:"https://earth.rowan.edu/"}},[i._v("School of Earth & Environment")]),i._v(" at "),r("a",{attrs:{href:"https://www.rowan.edu"}},[i._v("Rowan University")]),i._v(".")])}],a=(r("4de4"),r("b64b"),r("d3b7"),r("bc3a")),u=r.n(a),l=function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("transition",{attrs:{name:"modal-fade"}},[r("div",{staticClass:"modal-backdrop"},[r("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[r("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[i._v(" About ")]),r("div",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[i._v(" Byrd Bot expresses differences in bird populations between 1970 and 2020 as unique soundscapes, composed computationally using known bird population data and the Audubon Society's database of bird songs. "),r("p",[i._v("The application is born out of the Sounds of Human Impact project, a collaborative effort between communication studies and environmental science scholars interested to explore the role of sound as a means to expressing the impacts of the Anthroprocene. ")]),r("p",[i._v("When the user clicks "),r("button",{attrs:{id:"generate"}},[i._v("Generate Soundscape")]),i._v(" the software will generate a new soundscape, based on probabilities in which birds might be heard in "),r("button",{attrs:{id:"nineteenSeventy"}},[i._v("1970")]),i._v(". Then, the system generates a soundscape of those very same bird sounds, using probabilities for "),r("button",{attrs:{id:"twentyTwenty"}},[i._v("2020")]),i._v(". ")]),r("p",[i._v(" The listener is invited to listen deeply for the differences in ecology between these two time periods. ")])]),r("footer",{staticClass:"modal-footer"},[r("button",{on:{click:i.close}},[i._v("Close ")])])])])])},b=[],c={name:"Modal",methods:{close:function(){this.$emit("close")}}},h=c,p=(r("22d7"),r("2877")),f=Object(p["a"])(h,l,b,!1,null,null,null),m=f.exports,v={name:"SoundsOfImpact",components:{Modal:m},data:function(){return{timeColor:"",msg:"",msg2:"",msg3:"",msg4:"",processing:"",meters1:"",meters2:"",meters3:"",birdName1:"",birdName2:"",birdName3:"",birdName4:"",birdName5:"",birdName6:"",birdName7:"",birdName8:"",birdName9:"",birdName10:"",birdName11:"",birdName12:"",birdName13:"",birdName14:"",birdName15:"",birdName16:"",birdNumber1:"",birdNumber2:"",birdNumber3:"",birdNumber4:"",birdNumber5:"",birdNumber6:"",birdNumber7:"",birdNumber8:"",birdNumber9:"",birdNumber10:"",birdNumber11:"",birdNumber12:"",birdNumber13:"",birdNumber14:"",birdNumber15:"",birdNumber16:"",birdSound1:"",birdSound2:"",birdSound3:"",birdSound4:"",birdSound5:"",birdSound6:"",birdSound7:"",birdSound8:"",birdSound9:"",birdSound10:"",birdSound11:"",birdSound12:"",birdSound13:"",birdSound14:"",birdSound15:"",birdSound16:"",birdSound1Pan:"",birdSound2Pan:"",birdSound3Pan:"",birdSound4Pan:"",birdSound5Pan:"",birdSound6Pan:"",birdSound7Pan:"",birdSound8Pan:"",birdSound9Pan:"",birdSound10Pan:"",birdSound11Pan:"",birdSound12Pan:"",birdSound13Pan:"",birdSound14Pan:"",birdSound15Pan:"",birdSound16Pan:"",birdAudio1:"",birdAudio2:"",birdAudio3:"",birdAudio4:"",birdAudio5:"",birdAudio6:"",birdAudio7:"",birdAudio8:"",birdAudio9:"",birdAudio10:"",birdAudio11:"",birdAudio12:"",birdAudio13:"",birdAudio14:"",birdAudio15:"",birdAudio16:"",birdSong1:"",birdSong2:"",birdSong3:"",birdSong4:"",birdSong5:"",birdSong6:"",birdSong7:"",birdSong8:"",birdSong9:"",birdSong10:"",birdSong11:"",birdSong12:"",birdSong13:"",birdSong14:"",birdSong15:"",birdSong16:"",birdSoundVolume1:"",birdSoundVolume2:"",birdSoundVolume3:"",birdSoundVolume4:"",birdSoundVolume5:"",birdSoundVolume6:"",birdSoundVolume7:"",birdSoundVolume8:"",birdSoundVolume9:"",birdSoundVolume10:"",birdSoundVolume11:"",birdSoundVolume12:"",birdSoundVolume13:"",birdSoundVolume14:"",birdSoundVolume15:"",birdSoundVolume16:"",nineteenSeventyVolume1:"",nineteenSeventyVolume2:"",nineteenSeventyVolume3:"",nineteenSeventyVolume4:"",nineteenSeventyVolume5:"",nineteenSeventyVolume6:"",nineteenSeventyVolume7:"",nineteenSeventyVolume8:"",nineteenSeventyVolume9:"",nineteenSeventyVolume10:"",twentyTwentyVolume1:"",twentyTwentyVolume2:"",twentyTwentyVolume3:"",twentyTwentyVolume4:"",twentyTwentyVolume5:"",twentyTwentyVolume6:"",twentyTwentyVolume7:"",twentyTwentyVolume8:"",twentyTwentyVolume9:"",twentyTwentyVolume10:"",twentySixtyFiveVolume1:"",twentySixtyFiveVolume2:"",twentySixtyFiveVolume3:"",twentySixtyFiveVolume4:"",twentySixtyFiveVolume5:"",twentySixtyFiveVolume6:"",twentySixtyFiveVolume7:"",twentySixtyFiveVolume8:"",twentySixtyFiveVolume9:"",twentySixtyFiveVolume10:"",birdAudio1Pan:"",birdAudio2Pan:"",birdAudio3Pan:"",birdAudio4Pan:"",birdAudio5Pan:"",birdAudio6Pan:"",birdAudio7Pan:"",birdAudio8Pan:"",birdAudio9Pan:"",birdAudio10Pan:"",birdAudio11Pan:"",birdAudio12Pan:"",birdAudio13Pan:"",birdAudio14Pan:"",birdAudio15Pan:"",birdAudio16Pan:"",birdSongAudio1Pan:"",birdSongAudio2Pan:"",birdSongAudio3Pan:"",birdSongAudio4Pan:"",birdSongAudio5Pan:"",birdSongAudio6Pan:"",birdSongAudio7Pan:"",birdSongAudio8Pan:"",birdSongAudio9Pan:"",birdSongAudio10Pan:"",card1:!1,card2:!1,card3:!1,card4:!1,card5:!1,card6:!1,card7:!1,card8:!1,card9:!1,card10:!1,card11:!1,card12:!1,card13:!1,card14:!1,card15:!1,card16:!1,birdColor1:"salmon",birdColor2:"turquoise",birdColor3:"violet",birdColor4:"orange",birdColor5:"yellow",birdColor6:"red",birdColor7:"green",birdColor8:"brown",birdColor9:"blue",birdColor10:"bisque",birdColor11:"aquamarine",birdColor12:"chartreuse",birdColor13:"cyan",birdColor14:"coral",birdColor15:"white",birdColor16:"gray",flipCard1:!1,flipCard2:!1,flipCard3:!1,flipCard4:!1,flipCard5:!1,flipCard6:!1,flipCard7:!1,flipCard8:!1,flipCard9:!1,flipCard10:!1,flipCard11:!1,flipCard12:!1,flipCard13:!1,flipCard14:!1,flipCard15:!1,flipCard16:!1,flipCardA:!1,flipCardB:!1,flipCardC:!1,flipCardD:!1,flipCardE:!1,flipCardF:!1,flipCardG:!1,flipCardH:!1,flipCardI:!1,flipCardJ:!1,flipCardK:!1,flipCardL:!1,flipCardM:!1,flipCardN:!1,flipCardO:!1,flipCardP:!1,flipCardOne:!1,flipCardTwo:!1,flipCardThree:!1,flipCardFour:!1,flipCardFive:!1,flipCardSix:!1,flipCardSeven:!1,flipCardEight:!1,flipCardNine:!1,flipCardTen:!1,flipCardElevent:!1,flipCardTwelve:!1,flipCardThirteen:!1,flipCardFourteen:!1,flipCardFifteen:!1,flipCardSixteen:!1,twenty:!1,group:[],isHidden:!1,isHidden2:!1,isHidden3:!1,isHidden4:!1,resetHidden:!1,resetNotNeeded:!1,aboutHidden:!1,voiceHidden:!1,isModalVisible:!1,stop:!1,doItAgain:!1,woodLand:!1,activeColor:"white",integer:"",coast:!1,backYard:!1,filteredResults:[],seventyStop:!1,twentyStop:!1,sixtyFiveStop:!1,resultsType:"",survey:!1,surveyShow:!1,bs1:!0,bs2:!0,bs3:!0,bs4:!0,bs5:!0,bs6:!0,bs7:!0,bs8:!0,bs9:!0,bs10:!0}},created:function(){var i=(new Date).getTime();function e(){(new Date).getTime()-i>=11e4?window.location.href="https://soundsofhumanimpact.github.io/byrdbot3screensaver/":setTimeout(e,1e4)}window.addEventListener("keypress",(function(e){"z"!==e.key&&(i=(new Date).getTime(),console.log("screensaver timer reset"))})),setTimeout(e,1e4)},mounted:function(){window.addEventListener("keypress",(function(i){"b"===i.key&&(i.preventDefault(),document.getElementById("generateButton").click()),"y"===i.key&&(i.preventDefault(),document.getElementById("resetButton").click()),"r"===i.key&&(i.preventDefault(),document.getElementById("nineteenSeventyButton").click()),"d"===i.key&&(i.preventDefault(),document.getElementById("twentyTwentyButton").click()),"o"===i.key&&(i.preventDefault(),document.getElementById("twentyTwentyFiftyFive").click())})),this.msg="BYRD BOT",this.msg2="","webkitSpeechRecognition"in window?this.voiceHidden=!1:this.voiceHidden=!0},methods:{initiateVoiceControl:function(){var i=this;console.log("voice control initiated"),window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;var e="",r=new window.SpeechRecognition;r.interimResults=!0,r.maxAlternatives=10,r.continuous=!0,r.onresult=function(t){for(var d="",o=t.resultIndex,s=t.results.length;o<s;o++){var n=t.results[o][0].transcript;t.results[o].isFinal?e+=n:d+=n,"generate soundscape"==d&&(i.generateSoundscape(),i.isHidden2=!0,i.aboutHidden=!0,i.resetHidden=!0,i.doItAgain=!0,i.reInitiateVoiceControl()),"about"==d&&(i.isModalVisible=!0,i.doItAgain=!0,i.reInitiateVoiceControl()),"close"==d&&(i.isModalVisible=!1,i.doItAgain=!0,i.reInitiateVoiceControl()),"play 1970"==d&&(i.nineteenSeventy(),i.doItAgain=!0,i.reInitiateVoiceControl()),"play today"==d&&(i.twentyTwenty(),i.doItAgain=!0,i.reInitiateVoiceControl()),"reset"==d&&(i.reset(),i.aboutHidden=!1,i.isHidden2=!1,i.doItAgain=!0,i.reInitiateVoiceControl()),"disable voice control"==d?(r.abort(),console.log("voice control disabled"),i.doItAgain=!1):i.sleep(3500).then((function(){i.reInitiateVoiceControl()}))}console.log("transcript: "+e)},r.start()},reInitiateVoiceControl:function(){console.log("reinitiate"),1==this.doItAgain&&this.initiateVoiceControl()},biome:function(){this.msg2="Survey",this.msg="",this.survey=!0},other:function(){this.msg2="",this.msg="",1==this.survey?this.surveyShow=!0:this.surveyShow=!1},isWoodLand:function(){this.woodLand=!0,this.msg3="",this.activeColor="green",this.resultsType="Woodlands"},isCoast:function(){alert("Coming soon! For now, current variables are set to Woodlands."),this.woodLand=!0},isBackYard:function(){alert("Coming soon! For now, current variables are set to Woodlands."),this.woodLand=!0},generateSoundscape:function(){var i=this,e=[];console.log("birdsoundTest"),u.a.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/bird_data_simple_future2.json").then((function(r){e=r.data,i.filteredResults=e.filter((function(i){return"woodland"===i.scape}));var t=Object.keys(i.filteredResults).length;console.log("Total number of "+i.resultsType+" birds is: "+t),console.log(i.filteredResults);var d=[];function o(){return i.filteredResults[Math.round(Math.random()*i.filteredResults.length)]}for(var s=0;s<16;s++){var n;n=o(),d.push(n)}i.msg4=d,console.log("Random entries retrieved:"+d),i.processing="Generating Soundscape";var a=100*Math.random();console.log("Probability number is: "+a);var u="sound"+Math.floor(4*Math.random()+1);i.birdName1=d[0].species,i.birdNumber1=d[0][u];var l=1e4*d[0].frequency_1970;console.log("70:"+l);var b=1e4*d[0].frequency_2017;console.log("17:"+b);var c=1e4*d[0].frequency_2065;console.log("65:"+c),a<=l&&(i.bs1=!0,i.flipCard1=!0),a>=l&&(i.bs1=!1,i.flipCard1=!1),a<=b&&(i.flipCardA=!0),a>=b&&(i.flipCardA=!1),a<=c&&(i.flipCardOne=!0),a>=c&&(i.flipCardOne=!1),i.birdName2=d[1].species,i.birdNumber2=d[1][u];var h=1e4*d[1].frequency_1970,p=1e4*d[1].frequency_2017,f=1e4*d[1].frequency_2065;a<=h&&(i.bs2=!0,i.flipCard2=!0),a>=h&&(i.bs2=!1,i.flipCard2=!1),a<=p&&(i.flipCardB=!0),a>=p&&(i.flipCardB=!1),a<=f&&(i.flipCardTwo=!0),a>=f&&(i.flipCardTwo=!1),i.birdName3=d[2].species,i.birdNumber3=d[2][u];var m=1e4*d[2].frequency_1970,v=1e4*d[2].frequency_2017,S=1e4*d[2].frequency_2065;a<=m&&(i.bs3=!0,i.flipCard3=!0),a>=m&&(i.bs3=!1,i.flipCard3=!1),a<=v&&(i.flipCardC=!0),a>=v&&(i.flipCardC=!1),a<=S&&(i.flipCardThree=!0),a>=S&&(i.flipCardThree=!1),i.birdName4=d[3].species,i.birdNumber4=d[3][u];var y=1e4*d[3].frequency_1970,C=1e4*d[3].frequency_2017,w=1e4*d[3].frequency_2065;a<=y&&(i.bs4=!0,i.flipCard4=!0),a>=y&&(i.bs4=!1,i.flipCard4=!1),a<=C&&(i.flipCardD=!0),a>=C&&(i.flipCardD=!1),a<=w&&(i.flipCardFour=!0),a>=w&&(i.flipCardFour=!1),i.birdName5=d[4].species,i.birdNumber5=d[4][u];var g=1e4*d[4].frequency_1970,_=1e4*d[4].frequency_2017,A=1e4*d[4].frequency_2065;a<=g&&(i.bs5=!0,i.flipCard5=!0),a>=g&&(i.bs5=!1,i.flipCard5=!1),a<=_&&(i.flipCardE=!0),a>=_&&(i.flipCardE=!1),a<=A&&(i.flipCardFive=!0),a>=A&&(i.flipCardFive=!1),i.birdName6=d[5].species,i.birdNumber6=d[5][u];var T=1e4*d[5].frequency_1970,N=1e4*d[5].frequency_2017,x=1e4*d[5].frequency_2065;a<=T&&(i.bs6=!0,i.flipCard6=!0),a>=T&&(i.bs6=!1,i.flipCard6=!1),a<=N&&(i.flipCardF=!0),a>=N&&(i.flipCardF=!1),a<=x&&(i.flipCardSix=!0),a>=x&&(i.flipCardSix=!1),i.birdName7=d[6].species,i.birdNumber7=d[6][u];var V=1e4*d[6].frequency_1970,P=1e4*d[6].frequency_2017,F=1e4*d[6].frequency_2065;a<=V&&(i.bs7=!0,i.flipCard7=!0),a>=V&&(i.bs7=!1,i.flipCard7=!1),a<=P&&(i.flipCardG=!0),a>=P&&(i.flipCardG=!1),a<=F&&(i.flipCardSeven=!0),a>=F&&(i.flipCardSeven=!1),i.birdName8=d[7].species,i.birdNumber8=d[7][u];var H=1e4*d[7].frequency_1970,I=1e4*d[7].frequency_2017,q=1e4*d[7].frequency_2065;a<=H&&(i.bs8=!0,i.flipCard8=!0),a>=H&&(i.bs8=!1,i.flipCard5=!1),a<=I&&(i.flipCardH=!0),a>=I&&(i.flipCardH=!1),a<=q&&(i.flipCardEight=!0),a>=q&&(i.flipCardEight=!1),i.birdName9=d[8].species,i.birdNumber9=d[8][u];var B=1e4*d[8].frequency_1970,k=1e4*d[8].frequency_2017,O=1e4*d[8].frequency_2065;a<=B&&(i.bs9=!0,i.flipCard9=!0),a>=B&&(i.bs9=!1,i.flipCard9=!1),a<=k&&(i.flipCardI=!0),a>=k&&(i.flipCardI=!1),a<=O&&(i.flipCardNine=!0),a>=O&&(i.flipCardNine=!1),i.birdName10=d[9].species,i.birdNumber10=d[9][u];var E=1e4*d[9].frequency_1970,M=1e4*d[9].frequency_2017,z=1e4*d[9].frequency_2065;a<=E&&(i.bs10=!0,i.flipCard10=!0),a>=E&&(i.bs10=!1,i.flipCard10=!1),a<=M&&(i.flipCardJ=!0),a>=M&&(i.flipCardJ=!1),a<=z&&(i.flipCardTen=!0),a>=z&&(i.flipCardTen=!1),0==i.bs1||0==i.bs2||0==i.bs3||0==i.bs4||0==i.bs5||0==i.bs6||0==i.bs7||0==i.bs8||0==i.bs9||0==i.bs10?i.sleep(200).then((function(){console.log("insufficient birds"),setInterval(i.generateSoundscape(),500)})):(console.log("sufficient birds generated"),i.msg2="Soundscapes Generated",i.msg4="Select a Time Period to Listen",i.processing="",i.isHidden2=!0,i.resetHidden=!0,i.loadSounds())})).catch((function(e){console.log(e),i.processing=e+". Restarting.",i.sleep(200).then((function(){i.loopFour()})),e&&(i.resetHidden=!0)}))},sleep:function(i){return new Promise((function(e){return setTimeout(e,i)}))},loopOne:function(){this.nineteenSeventy()},loopTwo:function(){this.twentyTwenty()},loopThree:function(){this.fiftyFifty()},loopFour:function(){this.generateSoundscape()},loadSounds:function(){this.birdSound1=new Audio(this.birdNumber1),this.birdSound1.volume=1,this.birdSound2=new Audio(this.birdNumber2),this.birdSound2.volume=1,this.birdSound3=new Audio(this.birdNumber3),this.birdSound3.volume=.5,this.birdSound4=new Audio(this.birdNumber4),this.birdSound4.volume=.5,this.birdSound5=new Audio(this.birdNumber5),this.birdSound5.volume=.5,this.birdSound6=new Audio(this.birdNumber6),this.birdSound6.volume=.25,this.birdSound7=new Audio(this.birdNumber7),this.birdSound7.volume=.2,this.birdSound8=new Audio(this.birdNumber8),this.birdSound8.volume=.12,this.birdSound9=new Audio(this.birdNumber9),this.birdSound9.volume=.08,this.birdSound10=new Audio(this.birdNumber10),this.birdSound10.volume=.03,this.birdAudio4=new Audio(this.birdNumber4),this.birdAudio4.volume=.5,this.birdAudio5=new Audio(this.birdNumber5),this.birdAudio5.volume=.5,this.birdAudio6=new Audio(this.birdNumber6),this.birdAudio6.volume=.25,this.birdAudio7=new Audio(this.birdNumber7),this.birdAudio7.volume=.2,this.birdAudio8=new Audio(this.birdNumber8),this.birdAudio8.volume=.12,this.birdAudio9=new Audio(this.birdNumber9),this.birdAudio9.volume=.08,this.birdAudio10=new Audio(this.birdNumber10),this.birdAudio10.volume=.03,this.birdSong6=new Audio(this.birdNumber6),this.birdSong6.volume=.25,this.birdSong7=new Audio(this.birdNumber7),this.birdSong7.volume=.2,this.birdSong8=new Audio(this.birdNumber8),this.birdSong8.volume=.12,this.birdSong9=new Audio(this.birdNumber9),this.birdSong9.volume=.08,this.birdSong10=new Audio(this.birdNumber10),this.birdSong10.volume=.03},nineteenSeventy:function(){var i=this;if(1==this.twentyStop&&(this.birdAudio4.pause(),this.birdAudio4.currentTime=0,this.birdAudio5.pause(),this.birdAudio5.currentTime=0,this.birdAudio6.pause(),this.birdAudio6.currentTime=0,this.birdAudio7.pause(),this.birdAudio7.currentTime=0,this.birdAudio8.pause(),this.birdAudio8.currentTime=0,this.birdAudio9.pause(),this.birdAudio9.currentTime=0,this.birdAudio10.pause(),this.birdAudio10.currentTime=0,this.twentyStop=!1,this.sleep(200).then((function(){i.loopOne()}))),1==this.sixtyFiveStop)this.birdSong6.pause(),this.birdSong6.currentTime=0,this.birdSong7.pause(),this.birdSong7.currentTime=0,this.birdSong8.pause(),this.birdSong8.currentTime=0,this.birdSong9.pause(),this.birdSong9.currentTime=0,this.birdSong10.pause(),this.birdSong10.currentTime=0,this.sixtyFiveStop=!1,this.sleep(200).then((function(){i.loopOne()}));else{this.msg4="";var e=document.getElementsByTagName("canvas")[0];e.width=0,e.height=0,this.msg="1970",this.timeColor="#f5602a",this.msg2="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1,this.card6=!1,this.card7=!1,this.card8=!1,this.card9=!1,this.card10=!1,this.stop=!1,1==this.flipCard1&&(this.card1=!0),1==this.flipCard2&&(this.card2=!0),1==this.flipCard3&&(this.card3=!0),1==this.flipCard4&&(this.card4=!0),1==this.flipCard5&&(this.card5=!0),1==this.flipCard6&&(this.card6=!0),1==this.flipCard7&&(this.card7=!0),1==this.flipCard8&&(this.card8=!0),1==this.flipCard9&&(this.card9=!0),1==this.flipCard10&&(this.card10=!0),0==this.flipCard1&&0==this.flipCard2&&0==this.flipCard3&&0==this.flipCard4&&0==this.flipCard5&&0==this.flipCard6&&0==this.flipCard7&&0==this.flipCard8&&0==this.flipCard9&&0==this.flipCard10&&(this.msg4="Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."),this.sleep(500).then((function(){i.visualizeNineteenSeventy()}))}},twentyTwenty:function(){var i=this;if(1==this.seventyStop&&(this.birdSound1.pause(),this.birdSound1.currentTime=0,this.birdSound2.pause(),this.birdSound2.currentTime=0,this.birdSound3.pause(),this.birdSound3.currentTime=0,this.birdSound4.pause(),this.birdSound4.currentTime=0,this.birdSound5.pause(),this.birdSound5.currentTime=0,this.birdSound6.pause(),this.birdSound6.currentTime=0,this.birdSound7.pause(),this.birdSound7.currentTime=0,this.birdSound8.pause(),this.birdSound8.currentTime=0,this.birdSound9.pause(),this.birdSound9.currentTime=0,this.birdSound10.pause(),this.birdSound10.currentTime=0,this.seventyStop=!1,this.sleep(200).then((function(){i.loopTwo()}))),1==this.sixtyFiveStop)this.birdSong6.pause(),this.birdSong6.currentTime=0,this.birdSong7.pause(),this.birdSong7.currentTime=0,this.birdSong8.pause(),this.birdSong8.currentTime=0,this.birdSong9.pause(),this.birdSong9.currentTime=0,this.birdSong10.pause(),this.birdSong10.currentTime=0,this.sixtyFiveStop=!1,this.sleep(200).then((function(){i.loopTwo()}));else{this.msg4="";var e=document.getElementsByTagName("canvas")[0];e.width=0,e.height=0,this.msg="2017",this.timeColor="limegreen",this.msg2="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1,this.card6=!1,this.card7=!1,this.card8=!1,this.card9=!1,this.card10=!1,this.stop=!1,this.flipCardA,this.flipCardB,this.flipCardC,1==this.flipCardD&&(this.card4=!0),1==this.flipCardE&&(this.card5=!0),1==this.flipCardF&&(this.card6=!0),1==this.flipCardG&&(this.card7=!0),1==this.flipCardH&&(this.card8=!0),1==this.flipCardI&&(this.card9=!0),1==this.flipCardJ&&(this.card10=!0),0==this.flipCardA&&0==this.flipCardB&&0==this.flipCardC&&0==this.flipCardD&&0==this.flipCardE&&0==this.flipCardF&&0==this.flipCardG&&0==this.flipCardH&&0==this.flipCardI&&0==this.flipCardJ&&(this.msg4="Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."),this.stop=!0,this.sleep(500).then((function(){i.visualizeTwentyTwenty()}))}},fiftyFifty:function(){var i=this;if(1==this.seventyStop&&(this.birdSound1.pause(),this.birdSound1.currentTime=0,this.birdSound2.pause(),this.birdSound2.currentTime=0,this.birdSound3.pause(),this.birdSound3.currentTime=0,this.birdSound4.pause(),this.birdSound4.currentTime=0,this.birdSound5.pause(),this.birdSound5.currentTime=0,this.birdSound6.pause(),this.birdSound6.currentTime=0,this.birdSound7.pause(),this.birdSound7.currentTime=0,this.birdSound8.pause(),this.birdSound8.currentTime=0,this.birdSound9.pause(),this.birdSound9.currentTime=0,this.birdSound10.pause(),this.birdSound10.currentTime=0,this.seventyStop=!1,this.sleep(200).then((function(){i.loopThree()}))),1==this.twentyStop)this.birdAudio4.pause(),this.birdAudio4.currentTime=0,this.birdAudio5.pause(),this.birdAudio5.currentTime=0,this.birdAudio6.pause(),this.birdAudio6.currentTime=0,this.birdAudio7.pause(),this.birdAudio7.currentTime=0,this.birdAudio8.pause(),this.birdAudio8.currentTime=0,this.birdAudio9.pause(),this.birdAudio9.currentTime=0,this.birdAudio10.pause(),this.birdAudio10.currentTime=0,this.twentyStop=!1,this.sleep(200).then((function(){i.loopThree()}));else{this.msg4="";var e=document.getElementsByTagName("canvas")[0];e.width=0,e.height=0,this.msg="2065",this.timeColor="#4287f5",this.msg2="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1,this.card6=!1,this.card7=!1,this.card8=!1,this.card9=!1,this.card10=!1,this.stop=!1,this.flipCardOne,this.flipCardTwo,this.flipCardThree,this.flipCardFour,this.flipCardFive,1==this.flipCardSix&&(this.card6=!0),1==this.flipCardSeven&&(this.card7=!0),1==this.flipCardEight&&(this.card8=!0),1==this.flipCardNine&&(this.card9=!0),1==this.flipCardTen&&(this.card10=!0),0==this.flipCardA&&0==this.flipCardB&&0==this.flipCardC&&0==this.flipCardD&&0==this.flipCardE&&0==this.flipCardF&&0==this.flipCardG&&0==this.flipCardH&&0==this.flipCardI&&0==this.flipCardJ&&(this.msg4="Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."),this.stop=!0,this.sleep(500).then((function(){i.visualizeTwentySixtyFive()}))}},reset:function(){window.location.reload()},visualizeNineteenSeventy:function(){this.seventyStop=!0,this.birdSound1.play(),this.birdSound2.play(),this.birdSound3.play(),this.birdSound4.play(),this.birdSound5.play(),this.birdSound6.play(),this.birdSound7.play(),this.birdSound8.play(),this.birdSound9.play(),this.birdSound10.play()},visualizeTwentyTwenty:function(){this.twentyStop=!0,this.birdAudio4.play(),this.birdAudio5.play(),this.birdAudio6.play(),this.birdAudio7.play(),this.birdAudio8.play(),this.birdAudio9.play(),this.birdAudio10.play()},visualizeTwentySixtyFive:function(){this.sixtyFiveStop=!0,this.birdSong6.play(),this.birdSong7.play(),this.birdSong8.play(),this.birdSong9.play(),this.birdSong10.play()},closeModal:function(){this.isModalVisible=!1}}},S=v,y=(r("b5e3"),Object(p["a"])(S,s,n,!1,null,"aa18234c",null)),C=y.exports,w={name:"App",components:{SoundsOfImpact:C}},g=w,_=(r("034f"),Object(p["a"])(g,d,o,!1,null,null,null)),A=_.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(i){return i(A)}}).$mount("#app")},"85ec":function(i,e,r){},b5e3:function(i,e,r){"use strict";var t=r("d67e"),d=r.n(t);d.a},be87:function(i,e,r){},d67e:function(i,e,r){}});
//# sourceMappingURL=app.f55ee771.js.map
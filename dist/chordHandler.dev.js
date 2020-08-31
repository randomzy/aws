"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var data = '{\
"file_metadata": {\
  "jams_version": "0.2.0",\
  "identifiers": { "filename": "A_MjCqQoLLA.ogg" },\
  "duration": 489.523083900\
},\
"annotations": [\
{\
  "namespace": "unknown",\
  "annotation_metadata": {\
    "annotation_tools": "Sonic Annotator v1.6",\
    "data_source": "Automatic feature extraction",\
    "annotator": {\
      "plugin_id": "vamp:nnls-chroma:chordino",\
      "output_id": "simplechord",\
      "plugin_version": "5",\
      "step_size": 2048,\
      "block_size": 16384,\
      "sample_rate": 44100,\
      "parameters": {\
        "boostn": 0.1,\
        "rollon": 0,\
        "s": 0.69999999,\
        "tuningmode": 0,\
        "useNNLS": 1,\
        "usehartesyntax": 0,\
        "whitening": 1\
      },\
      "transform_id": "vamp:nnls-chroma:chordino:simplechord"\
    }\
  },\
  "data": [\
    { "time": 0.000000000, "duration": 0.0, "confidence": 1.0, "value": "N" },\
    { "time": 1.300317460, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 2.879274376, "duration": 0.0, "confidence": 1.0, "value": "N" },\
    { "time": 6.130068027, "duration": 0.0, "confidence": 1.0, "value": "F#/G#" },\
    { "time": 7.151746032, "duration": 0.0, "confidence": 1.0, "value": "Am7b5/G" },\
    { "time": 9.009342404, "duration": 0.0, "confidence": 1.0, "value": "Em" },\
    { "time": 9.705941043, "duration": 0.0, "confidence": 1.0, "value": "Am" },\
    { "time": 10.820498866, "duration": 0.0, "confidence": 1.0, "value": "Bbmaj7" },\
    { "time": 12.585215420, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 13.374693878, "duration": 0.0, "confidence": 1.0, "value": "Bm7b5" },\
    { "time": 15.325170068, "duration": 0.0, "confidence": 1.0, "value": "Cmaj7" },\
    { "time": 17.832925170, "duration": 0.0, "confidence": 1.0, "value": "Gm" },\
    { "time": 19.783401361, "duration": 0.0, "confidence": 1.0, "value": "A7/C#" },\
    { "time": 21.501678005, "duration": 0.0, "confidence": 1.0, "value": "Dm" },\
    { "time": 22.941315193, "duration": 0.0, "confidence": 1.0, "value": "Gm6" },\
    { "time": 26.006349206, "duration": 0.0, "confidence": 1.0, "value": "N" },\
    { "time": 29.535782313, "duration": 0.0, "confidence": 1.0, "value": "Abmaj7" },\
    { "time": 30.743219955, "duration": 0.0, "confidence": 1.0, "value": "Bmaj7" },\
    { "time": 31.950657596, "duration": 0.0, "confidence": 1.0, "value": "Gm" },\
    { "time": 32.461496599, "duration": 0.0, "confidence": 1.0, "value": "Dm7" },\
    { "time": 33.390294785, "duration": 0.0, "confidence": 1.0, "value": "Eb7/G" },\
    { "time": 35.015691610, "duration": 0.0, "confidence": 1.0, "value": "Gmaj7" },\
    { "time": 36.223129252, "duration": 0.0, "confidence": 1.0, "value": "N" },\
    { "time": 40.356281179, "duration": 0.0, "confidence": 1.0, "value": "F/G" },\
    { "time": 41.981678005, "duration": 0.0, "confidence": 1.0, "value": "E" },\
    { "time": 43.096235828, "duration": 0.0, "confidence": 1.0, "value": "Eb" },\
    { "time": 43.653514739, "duration": 0.0, "confidence": 1.0, "value": "Dm7" },\
    { "time": 44.025034014, "duration": 0.0, "confidence": 1.0, "value": "Am" },\
    { "time": 47.833106576, "duration": 0.0, "confidence": 1.0, "value": "F7" },\
    { "time": 51.269659864, "duration": 0.0, "confidence": 1.0, "value": "N" },\
    { "time": 57.121088435, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 60.464761905, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 63.297596372, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 63.669115646, "duration": 0.0, "confidence": 1.0, "value": "C7" },\
    { "time": 66.919909297, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 70.031383220, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 73.235736961, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 76.486530612, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 79.551564626, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 86.099591837, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 88.978866213, "duration": 0.0, "confidence": 1.0, "value": "Fmaj7" },\
    { "time": 89.303945578, "duration": 0.0, "confidence": 1.0, "value": "C7" },\
    { "time": 92.508299320, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 95.712653061, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 99.009886621, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 102.260680272, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 105.418594104, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 108.576507937, "duration": 0.0, "confidence": 1.0, "value": "F7" },\
    { "time": 111.687981859, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 113.266938776, "duration": 0.0, "confidence": 1.0, "value": "Dm" },\
    { "time": 114.799455782, "duration": 0.0, "confidence": 1.0, "value": "Gm7" },\
    { "time": 116.517732426, "duration": 0.0, "confidence": 1.0, "value": "F6" },\
    { "time": 118.143129252, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 121.208163265, "duration": 0.0, "confidence": 1.0, "value": "Fmaj7" },\
    { "time": 124.598276644, "duration": 0.0, "confidence": 1.0, "value": "F7" },\
    { "time": 125.852154195, "duration": 0.0, "confidence": 1.0, "value": "Dm" },\
    { "time": 126.362993197, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 127.802630385, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 129.428027211, "duration": 0.0, "confidence": 1.0, "value": "Dm" },\
    { "time": 130.681904762, "duration": 0.0, "confidence": 1.0, "value": "Am" },\
    { "time": 131.053424036, "duration": 0.0, "confidence": 1.0, "value": "Gm7" },\
    { "time": 132.771700680, "duration": 0.0, "confidence": 1.0, "value": "F6" },\
    { "time": 134.443537415, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 137.508571429, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 140.805804989, "duration": 0.0, "confidence": 1.0, "value": "F7" },\
    { "time": 142.524081633, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 146.471473923, "duration": 0.0, "confidence": 1.0, "value": "C7" },\
    { "time": 148.932789116, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 152.230022676, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 155.109297052, "duration": 0.0, "confidence": 1.0, "value": "F/G" },\
    { "time": 155.527256236, "duration": 0.0, "confidence": 1.0, "value": "C7" },\
    { "time": 158.731609977, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 161.843083900, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 165.140317460, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 168.483990930, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 171.688344671, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 174.846258503, "duration": 0.0, "confidence": 1.0, "value": "F7" },\
    { "time": 177.911292517, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 179.722448980, "duration": 0.0, "confidence": 1.0, "value": "Dm" },\
    { "time": 181.208526077, "duration": 0.0, "confidence": 1.0, "value": "Gm7" },\
    { "time": 183.066122449, "duration": 0.0, "confidence": 1.0, "value": "F6" },\
    { "time": 184.645079365, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 187.710113379, "duration": 0.0, "confidence": 1.0, "value": "Fmaj7" },\
    { "time": 191.146666667, "duration": 0.0, "confidence": 1.0, "value": "F7" },\
    { "time": 194.583219955, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 196.069297052, "duration": 0.0, "confidence": 1.0, "value": "F/A" },\
    { "time": 197.648253968, "duration": 0.0, "confidence": 1.0, "value": "Gm7" },\
    { "time": 199.320090703, "duration": 0.0, "confidence": 1.0, "value": "F6" },\
    { "time": 200.991927438, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 203.128163265, "duration": 0.0, "confidence": 1.0, "value": "C7" },\
    { "time": 204.056961451, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 207.168435374, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 207.539954649, "duration": 0.0, "confidence": 1.0, "value": "F7" },\
    { "time": 209.211791383, "duration": 0.0, "confidence": 1.0, "value": "Am" },\
    { "time": 209.583310658, "duration": 0.0, "confidence": 1.0, "value": "F/C" },\
    { "time": 210.094149660, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 213.437823129, "duration": 0.0, "confidence": 1.0, "value": "C7" },\
    { "time": 215.620498866, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 219.289251701, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 222.168526077, "duration": 0.0, "confidence": 1.0, "value": "C7" },\
    { "time": 225.837278912, "duration": 0.0, "confidence": 1.0, "value": "Dm" },\
    { "time": 226.301678005, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 229.088072562, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 232.431746032, "duration": 0.0, "confidence": 1.0, "value": "Fmaj7" },\
    { "time": 235.728979592, "duration": 0.0, "confidence": 1.0, "value": "C" },\
    { "time": 239.026213152, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 248.871473923, "duration": 0.0, "confidence": 1.0, "value": "Eb" },\
    { "time": 252.261587302, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 255.465941043, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 262.106848073, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 265.496961451, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 268.747755102, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 275.295782313, "duration": 0.0, "confidence": 1.0, "value": "Eb" },\
    { "time": 278.685895692, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 281.936689342, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 288.624036281, "duration": 0.0, "confidence": 1.0, "value": "Eb" },\
    { "time": 292.014149660, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 295.264943311, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 301.812970522, "duration": 0.0, "confidence": 1.0, "value": "Eb" },\
    { "time": 305.203083900, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 308.500317460, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 314.955464853, "duration": 0.0, "confidence": 1.0, "value": "Eb" },\
    { "time": 318.206258503, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 321.503492063, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 327.912199546, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 331.209433107, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 334.460226757, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 340.822494331, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 344.212607710, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 347.324081633, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 353.779229025, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 357.680181406, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 360.234376417, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 366.735963719, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 370.126077098, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 373.191111111, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 379.646258503, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 382.943492063, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 386.008526077, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 392.463673469, "duration": 0.0, "confidence": 1.0, "value": "Eb" },\
    { "time": 395.853786848, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 398.918820862, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 405.234648526, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 408.485442177, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 411.643356009, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 418.098503401, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 421.674376417, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 424.553650794, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 430.915918367, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 434.584671202, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 437.463945578, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 443.779773243, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 447.077006803, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 450.188480726, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 456.457868481, "duration": 0.0, "confidence": 1.0, "value": "Eb" },\
    { "time": 459.662222222, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 462.773696145, "duration": 0.0, "confidence": 1.0, "value": "F" },\
    { "time": 469.182403628, "duration": 0.0, "confidence": 1.0, "value": "Eb6" },\
    { "time": 472.526077098, "duration": 0.0, "confidence": 1.0, "value": "Bb" },\
    { "time": 489.198004535, "duration": 0.0, "confidence": 1.0, "value": "N" }\
  ]\
}\
]\
}'; // Array Remove - By John Resig (MIT Licensed)

Array.prototype.remove = function (from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

var rootChords = ['A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab'];
var typeChord = ['', 'm', '7', 'maj7', 'm7', 'sus4', '5', 'dim', 'sus2', '7sus4', '9', '7#9', 'm9', 'maj9', 'maj6', 'm6'];
var rootSelect = document.querySelector(".root-select");
var bassSelect = document.querySelector(".bass-select");
var typeSelect = document.querySelector(".type-select");
rootChords.forEach(function (element) {
  var option = document.createElement("option");
  option.text = element;
  rootSelect.add(option);
});
rootChords.forEach(function (element) {
  var option = document.createElement("option");
  option.text = element;
  bassSelect.add(option);
});
typeChord.forEach(function (element) {
  var option = document.createElement("option");
  option.text = element;
  typeSelect.add(option);
}); //returns index of first element that is smaller than the searched one

function binarySearch(arr, element) {
  var start = 0;
  var ans = undefined;
  var end = arr.length;

  while (start <= end) {
    var mid = (start + end) / 2;
  }
}

var ChordHandler =
/*#__PURE__*/
function () {
  function ChordHandler(chordJson) {
    _classCallCheck(this, ChordHandler);

    this.chordJson = JSON.parse(chordJson);
    this.file_metadata = this.chordJson['file_metadata'];
    this.annotations = this.chordJson['annotations'];
    this.data = this.annotations[0]['data'];
    this.selectedDiv = undefined;
    chordHandler.makeDivs();
    this.addEventListeners();
  }

  _createClass(ChordHandler, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var deleteButton = document.querySelector(".delete-btn");
      deleteButton.addEventListener('click', this.deleteSelected.bind(this));
    }
  }, {
    key: "deleteSelected",
    value: function deleteSelected() {
      var selectedId = Array.from(this.selectedDiv.parentNode.children).indexOf(this.selectedDiv);
      console.log(selectedId);
      this.data.remove(selectedId);
      var previousDiv = this.selectedDiv.previousSibling;
      console.log(previousDiv);
      var numberPattern = /\d+/g;
      var curWidth = this.selectedDiv.style.minWidth.match(numberPattern);
      var prevWidth = previousDiv.style.minWidth.match(numberPattern);
      var newWidth = parseInt(curWidth) + parseInt(prevWidth);
      previousDiv.style.minWidth = newWidth + "px";
      this.selectedDiv.parentNode.removeChild(this.selectedDiv);
      this.selectDiv(previousDiv.nextSibling);
    }
  }, {
    key: "insertAtCurrentLocation",
    value: function insertAtCurrentLocation() {//previous needs to become shorter
    }
  }, {
    key: "amendSelected",
    value: function amendSelected() {//previous needs to change lenght
      //amend is delete + insert
    }
  }, {
    key: "selectDiv",
    value: function selectDiv(currentDiv) {
      if (typeof this.selectedDiv === 'undefined') {
        this.selectedDiv = currentDiv;
        this.selectedDiv.style.backgroundColor = 'yellow';
      } else {
        if (this.selectedDiv !== currentDiv) {
          this.selectedDiv.style.backgroundColor = 'blue';
          this.selectedDiv = currentDiv;
          this.selectedDiv.style.backgroundColor = 'yellow';
        } else {
          currentDiv.style.backgroundColor = "blue";
          this.selectedDiv = undefined;
        }
      }
    }
  }, {
    key: "selectDivEvent",
    value: function selectDivEvent(e) {
      this.selectDiv(e.target);
    }
  }, {
    key: "makeDivs",
    value: function makeDivs() {
      var _this = this;

      var chordsContainer = document.querySelector(".reels-chords");
      var prevTime = 0;
      var id = 0;
      this.data.forEach(function (element) {
        var tile = document.createElement('div');
        tile.addEventListener('click', _this.selectDivEvent.bind(_this)); // tile.id = 'block-'+id;

        var currentTime = element.time;
        var sizePercentage = 30000 * (currentTime - prevTime) / _this.file_metadata.duration;
        prevTime = currentTime;
        tile.style.minWidth = sizePercentage + "px";
        tile.style.backgroundColor = id % 2 ? "darkblue" : "blue";
        tile.style.height = "60px";
        tile.innerText = element.value;
        chordsContainer.appendChild(tile);
        ++id;
      });
    }
  }, {
    key: "currentChord",
    value: function currentChord() {}
  }, {
    key: "nextChord",
    value: function nextChord() {}
  }]);

  return ChordHandler;
}();

var chordHandler;

document.onload = function () {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      chordHandler = new ChordHandler(this.responseText);
    }
  };

  xhttp.open("GET", "songData.php?songId=" + window.location, true);
}; //ajax
//on update button
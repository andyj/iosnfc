(function() {
    var exLog = console.log;
    console.log = function(msg) {
        exLog.apply(this, arguments);
        consoleLog.innerHTML += msg + '<br><br>';
    };
})();

var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
    document.getElementById('swipeTag').addEventListener("click",iosNFC,false);
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log('Received Event: ' + id);
  }
};

iosNFC = function(){
  console.log('NFC button hit');
  nfc.beginSession(
    function(){},
    function(){}
  );
};

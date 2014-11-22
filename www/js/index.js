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
        //document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    takePicture: function() {

        navigator.camera.getPicture(onSuccess, onFail, { 
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI 
        });

        function onSuccess(imageURI) {
            var image = document.getElementById('MyImg');
            image.src = imageURI;
            image.style.visibility= "visible";
            var btn = document.getElementById('btnBuscarXFoto');
            btn.style.visibility= "visible";
        }

        function onFail(message) {
            alert('Error');
            console.log('Failed because: ' + message);
        }
    },

    fromGallery: function() {

         navigator.camera.getPicture(onSuccess, onFail, { 
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        });

        function onSuccess(dataUrl) {
            var image = document.getElementById('MyImg');
            image.src = 'data:image/jpeg;base64,'+ dataUrl;
            image.style.visibility= "visible";
            var btn = document.getElementById('btnBuscarXFoto');
            btn.style.visibility= "visible";
        }

        function onFail(message) {
            alert('Error');
            console.log('Failed because: ' + message);
        }
    },
};

function mostrarOpcionesCamara(){
    var panel = document.getElementById('pantallaBienvenida');
    panel.style.display= "none";

    var panel2 = document.getElementById('opcionesCamara');
    panel2.style.display= "block";

}

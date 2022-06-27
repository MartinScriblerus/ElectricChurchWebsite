var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
document.addEventListener("click", function () {
    var videoDome = new BABYLON.VideoDome(
        "videoDome",
        ["https://yoda.blob.core.windows.net/videos/uptale360.mp4"],
        {
            resolution: 32,
            clickToPlay: true
        },
        scene
    );
    videoDome.videoTexture.video.play();
    scene.onPointerDown = null;
    
});
//var camera = new BABYLON.ArcRotateCamera("cam", 0, Math.PI / 2, 10, BABYLON.Vector3(0, 0, 0), scene);
var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);

var light = new BABYLON.HemisphericLight("hemo", new BABYLON.Vector3(0, 1, 0), scene);
// var box = BABYLON.Mesh.CreateBox("box", 3, scene);
// var material = new BABYLON.StandardMaterial("nut", scene);

// box.material = material;
// material.diffuseColor = BABYLON.Color3.Red();


engine.runRenderLoop(function () {
    // box.rotation.y += 0.01;
    scene.render();
});
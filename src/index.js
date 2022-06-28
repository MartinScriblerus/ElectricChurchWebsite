

game.canvas = document.getElementById("renderCanvas");

game.engine = new BABYLON.Engine(game.canvas, true);
game.scene = new BABYLON.Scene(game.engine);
game.scene.id = "scene";
game.videoDome = game.videoDome || {};
game.scene.sequence = game.scene.sequence || [];
game.scene.storedSequence = ["1","4","3","2"];
game.scene.enteredNameAnte = game.scene.enteredNameAnte || '';

// document.addEventListener("click", function () {
game.scene.onPointerDown = function () {
    // if(game.videoDome !== {}){
    //     console.log()
    // }
    game.videoDome = new BABYLON.VideoDome(
        "videoDome",
        ["https://yoda.blob.core.windows.net/videos/uptale360.mp4"],
        {
            resolution: 32,
            clickToPlay: true,
            loop: true,
            size: 1000,
            autoPlay: true
        },
        game.scene
    );
    game.videoDome.videoTexture.video.play();
    game.scene.onPointerDown = null;
    
};



//var camera = new BABYLON.ArcRotateCamera("cam", 0, Math.PI / 2, 10, BABYLON.Vector3(0, 0, 0), scene);
game.camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), game.scene);
game.camera.attachControl(game.canvas, true);

game.light = new BABYLON.HemisphericLight("hemo", new BABYLON.Vector3(0, 1, 0), game.scene);
// var box = BABYLON.Mesh.CreateBox("box", 3, scene);
// var material = new BABYLON.StandardMaterial("nut", scene);

// box.material = material;
// material.diffuseColor = BABYLON.Color3.Red();
game.scene.clearColor = new BABYLON.Color3.FromHexString("#2a6270");

game.checkInitTest = () => {
    if(game.scene.sequence.toString() === game.scene.storedSequence.toString()){
        game.scene.enteredNameAnte = prompt("Who goes there?", "");
        if(game.scene.enteredAnte === "!QAZ2wsx"){
            window.location.href = "https://www.wikipedia.org"
        }
        console.log("!!!!", game.scene.enteredNameAnte);
    } 
}

document.getElementById("container").addEventListener("click", (e)=>{
    console.log("THIS IS E!!!! ", e.target.id);
 
    switch(e.target.id){
        case "wheel":
            game.scene.sequence.push("1");
            break;
        case "wheel2": 
            game.scene.sequence.push("2");
            game.checkInitTest();
            break;
        case "wheel3": 
            game.scene.sequence.push("3");
            break;
        case "wheel4":
            game.scene.sequence.push("4");
            break;
        default:
            // game.scene.sequence = [];
    };
})

game.engine.runRenderLoop(function () {
    // box.rotation.y += 0.01;
    game.scene.render();
});

// if(game.elapsed < 60000){
//     game.checkInitTest()
// }
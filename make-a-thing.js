// // Set the screen size
// let sceneWidth = document.querySelector("#main").clientWidth;
// let sceneHeight = document.querySelector("#main").clientHeight;

// // Set some camera attributes
// const viewAngle = 45;
// const aspectRatio = sceneWidth / sceneHeight;
// const near = 0.1;
// const far = 10000;

// // Create a WebGL Renderer, camera and scene
// const camera = new THREE.PerspectiveCamera(viewAngle, aspectRatio, near, far);













// const renderer = new THREE.WebGLRenderer();

// const scene = new THREE.Scene();

// // Set the size of the renderer
// renderer.setSize(sceneWidth, sceneHeight);
// // Get the DOM element to attach to
// const sceneContainer = document.querySelector("#main");
// // Attach the renderer-supplied DOM element
// sceneContainer.appendChild(renderer.domElement);

// // Add the camera to the scene
// scene.add(camera);

// // Can move the camera around even after it's been added to the scene
// camera.position.z = -400;
// camera.lookAt(0, 0, 0);

// // This asks the renderer to draw the scene out
// const update = () => {
//   renderer.render(scene, camera);
//   sceneParticles.rotation.y += 0.001;

//   requestAnimationFrame(update);
// }

// requestAnimationFrame(update);









// /** PARTICLES! **/

// let particles = new THREE.Geometry();
// let pMaterial = new THREE.PointsMaterial({
//   color: 0xFFFFFF,
//   size: 5,
//   // map: new THREE.TextureLoader().load("./assets/baby.png")
//   // map: new THREE.TextureLoader().load("./assets/spacepug.png")
// });

// const particleCount = 2000;

// // create a particle with random
// const randomPosition = () => Math.random() * 500 - 250;

// for (let p = 0; p < particleCount; p++) {
//   const pX = randomPosition();
//   const pY = randomPosition();
//   const pZ = randomPosition();
//   const particle = new THREE.Vector3(pX, pY, pZ);
  
//   // add it to the geometry
//   particles.vertices.push(particle);
// }

// const sceneParticles = new THREE.Points(particles, pMaterial);

// scene.add(sceneParticles);

// /** Particles END **/











// Code to update the camera's viewing frustum and renderer's size when the window resizes (responsiveness!)
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

  sceneWidth = document.querySelector("#main").clientWidth;
  sceneHeight = document.querySelector("#main").clientHeight;

  camera.aspect = sceneWidth / sceneHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(sceneWidth, sceneHeight);
}

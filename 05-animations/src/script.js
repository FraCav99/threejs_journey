import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Renderer
// renderer.render(scene, camera);

gsap.to(mesh.position, { x: 2, delay: 1, duration: 1 });
gsap.to(mesh.position, { x: 0, delay: 2, duration: 1 });

function tick() {
  // Renderer
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
}

tick();

/**
 * Rotating a cube with Clock Threejs class
 */
/*let clock = new THREE.Clock();

function tick() {
  // Clock
  let elapsedTime = clock.getElapsedTime();

  mesh.position.y = Math.sin(elapsedTime);
  mesh.position.x = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);

  // Renderer
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
}

tick();
*/

/*
Rotate a cube with "manual" method
// Time
let time = Date.now();

// Animations
function tick() {
  // Time
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  // Update objects
  mesh.rotation.y += 0.002 * deltaTime;

  // Renderer
  renderer.render(scene, camera);

  // Call tick function on the next frame
  requestAnimationFrame(tick);
}

tick();
*/

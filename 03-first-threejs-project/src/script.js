import * as Three from "three";

// The canvas is where our results will be shown
const canvas = document.querySelector("canvas.webgl");

/**
 * To render something on screen when need 4 things:
 * 1. Scene
 * 2. Objects
 * 3. Camera
 * 4. Renderer
 */

// 1. Scene
const scene = new Three.Scene();

// 2. Objects
const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new Three.Mesh(geometry, material);
scene.add(mesh);

// 3. Camera
const sizes = {
  width: 800,
  height: 600,
};

const camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// 4. Renderer
const renderer = new Three.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

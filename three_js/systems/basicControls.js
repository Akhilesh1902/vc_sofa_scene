import { MOUSE } from 'three';
function basicControls(scene, camera, controls, renderer) {
  // controls.minPolarAngle = controls.maxPolarAngle = 1;
  // controls.maxPolarAngle = Math.PI / 2;

  controls.listenToKeyEvents(window);

  controls.mouseButtons = {
    LEFT: MOUSE.ROTATE,
    MIDDLE: MOUSE.DOLLY,
    RIGHT: MOUSE.PAN,
  };

  controls.maxDistance = 11;
  controls.update();
}

export { basicControls };

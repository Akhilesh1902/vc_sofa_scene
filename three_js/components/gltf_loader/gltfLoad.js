import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import GLTFMeshGpuInstancingExtension from 'three-gltf-extensions/loaders/EXT_mesh_gpu_instancing/EXT_mesh_gpu_instancing';
import GLTFMaterialsVariantsExtension from 'three-gltf-extensions/loaders/KHR_materials_variants/KHR_materials_variants';
import { LoadingManager } from 'three';

export default async function gltfLoad(modelURL) {
  const manager = new LoadingManager();
  manager.onError = (url) => {
    // eslint-disable-next-line
    alert(`There was an error loading gltf model ${url}`);
  };

  const loader = new GLTFLoader(manager);
  const dracoLoader = new DRACOLoader(manager);
  dracoLoader.setDecoderPath('decoder/draco/');
  loader.setDRACOLoader(dracoLoader);

  loader.register((parser) => new GLTFMeshGpuInstancingExtension(parser));
  loader.register((parser) => new GLTFMaterialsVariantsExtension(parser));

  const gltfData = await loader.loadAsync(modelURL);
  return { gltfData };
}

const { ConvertGLBtoGltf, ConvertGltfToGLB, ConvertToGLB} = require('gltf-import-export');
const fs = require('fs')
const inputGlb = 'tshirt_round_neck_men_displaced.glb';
const extractedGltfFilename = 'shirt.gltf';

// // Perform the conversion; output paths are overwritten
ConvertGLBtoGltf(inputGlb, extractedGltfFilename);

// let gltfContent = fs.readFileSync(extractedGltfFilename, 'utf8');
// let gltf = JSON.parse(gltfContent);

// const outputGlb = 'newSampleBox.glb';

// // Perform the conversion; output path is overwritten
// ConvertToGLB(gltf, extractedGltfFilename, outputGlb);

// const gltfFilename = 'pathtoyour.gltf';

// // optionally if you haven't already parsed the gltf JSON
// ConvertGltfToGLB(gltfFilename, outputGlb);
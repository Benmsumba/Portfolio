import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Decorative, abstract molecular structure; not a model of a specific drug.
export function Molecules() {
  const mount = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const host = mount.current;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x001020, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.z = 10.7;
    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    room.dispose(); pmrem.dispose();
    scene.add(new THREE.AmbientLight(0xc8e5ff, 1.1));
    const lime = new THREE.PointLight(0xc9ed70, 28, 20); lime.position.set(3, 4, 4); scene.add(lime);
    const blue = new THREE.PointLight(0x91cce8, 30, 20); blue.position.set(-3, -2, 3); scene.add(blue);
    const group = new THREE.Group(); scene.add(group);
    // An abstract fused-ring ball-and-stick sculpture, with consistent atomic
    // proportions and parallel bonds. Decorative, not a specific compound.
    const sphere = new THREE.SphereGeometry(1, 48, 32);
    const cylinder = new THREE.CylinderGeometry(0.044, 0.044, 1, 20);
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x87b5bd, metalness: 0.2, roughness: 0.13, transmission: 0.48, thickness: 0.65, ior: 1.46, clearcoat: 1, envMapIntensity: 1.65 });
    const accent = new THREE.MeshPhysicalMaterial({ color: 0xb4d966, metalness: 0.28, roughness: 0.15, transmission: 0.25, thickness: 0.65, clearcoat: 1, envMapIntensity: 1.6 });
    const bondMaterial = new THREE.MeshPhysicalMaterial({color: 0x97b7c1, metalness: 0.8, roughness: 0.21, clearcoat: 0.65});
    const points = [
      [-1.32,1.48,0.12],[-0.12,2.17,0.12],[1.08,1.48,0.12],
      [1.08,0.10,0.12],[-0.12,-0.59,0.12],[-1.32,0.10,0.12],
      [2.28,-0.59,0.12],[2.28,-1.97,0.12],[1.08,-2.66,0.12],[-0.12,-1.97,0.12],
      [-2.52,2.17,0.12],[-3.15,2.82,0.95],[3.48,0.10,0.12],
      [3.96,0.84,-0.83],[1.08,-3.85,0.38],[-1.26,-2.65,-0.35]
    ];
    const accents = new Set([1,7,10,12]);
    points.forEach(([x,y,z], i) => {
      const atom = new THREE.Mesh(sphere, accents.has(i) ? accent : glass);
      atom.position.set(x,y,z);
      atom.scale.setScalar(i > 9 ? 0.26 : 0.32);
      group.add(atom);
    });
    const bonds = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[3,6],[6,7],[7,8],[8,9],[9,4],[0,10],[10,11],[6,12],[12,13],[8,14],[9,15]];
    const doubles = new Set(['1-2','4-5','6-7','8-9']);
    const axis = new THREE.Vector3(0,1,0);
    bonds.forEach(([a,b]) => {
      const start = new THREE.Vector3(...points[a]);
      const end = new THREE.Vector3(...points[b]);
      const direction = end.clone().sub(start);
      const normal = new THREE.Vector3(-direction.y,direction.x,0).normalize();
      const offsets = doubles.has(`${a}-${b}`) ? [-0.085,0.085] : [0];
      offsets.forEach(offset => {
        const bond = new THREE.Mesh(cylinder,bondMaterial);
        bond.position.copy(start).add(end).multiplyScalar(.5).addScaledVector(normal,offset);
        bond.scale.y = direction.length();
        bond.quaternion.setFromUnitVectors(axis,direction.clone().normalize());
        group.add(bond);
      });
    });
    // Center and angle the sculpture so its three-dimensional form reads clearly.
    const center = new THREE.Box3().setFromObject(group).getCenter(new THREE.Vector3());
    group.children.forEach(child => child.position.sub(center));
    group.scale.setScalar(0.85);
    group.rotation.set(-0.14,-0.35,-0.3);
    let targetX = 0, targetY = 0, time = 0, last = 0, visible = true, dirty = true;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const resize = () => { const {width, height} = host.getBoundingClientRect(); if (!width || !height) return; renderer.setSize(width,height); camera.aspect = width/height; camera.updateProjectionMatrix(); dirty = true; };
    const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host); resize();
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }); intersection.observe(host);
    const move = event => { const rect = host.parentElement.getBoundingClientRect(); targetY = ((event.clientX-rect.left)/rect.width-.5)*.5; targetX = ((event.clientY-rect.top)/rect.height-.5)*.3; };
    const leave = () => { targetX = 0; targetY = 0; };
    const hero = host.parentElement; hero.addEventListener('pointermove', move); hero.addEventListener('pointerleave', leave);
    let lost = false;
    const contextLost = event => { event.preventDefault(); lost = true; setReady(false); };
    renderer.domElement.addEventListener('webglcontextlost',contextLost);
    renderer.setAnimationLoop(stamp => {
      const delta = Math.min((stamp-last)/1000, .05); last = stamp;
      if (!visible || document.hidden || lost) return;
      if (!reduce.matches) {
        time += delta;
        group.position.y = Math.sin(time*.35)*.09;
        group.rotation.x = THREE.MathUtils.damp(group.rotation.x, -0.14 + Math.sin(time*.14)*.055 + targetX, 4, delta);
        group.rotation.y = THREE.MathUtils.damp(group.rotation.y, -0.35 + Math.sin(time*.16)*.18 + targetY, 4, delta);
        group.rotation.z = -0.3 + Math.sin(time*.12)*.025;
      }
      if (reduce.matches && !dirty) return;
      renderer.render(scene,camera); dirty = false;
    });
    renderer.render(scene,camera); setReady(true);
    return () => { renderer.setAnimationLoop(null); resizeObserver.disconnect(); intersection.disconnect(); hero.removeEventListener('pointermove',move); hero.removeEventListener('pointerleave',leave); renderer.domElement.removeEventListener('webglcontextlost',contextLost); sphere.dispose(); cylinder.dispose(); glass.dispose(); accent.dispose(); bondMaterial.dispose(); environment.dispose(); renderer.dispose(); renderer.domElement.remove(); };
  }, []);
  return <div className={`molecule-scene ${ready ? 'is-ready' : ''}`} ref={mount} aria-hidden="true" />;
}

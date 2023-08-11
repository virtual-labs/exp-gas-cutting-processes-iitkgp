/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { STLLoader } from 'three/addons/loaders/STLLoader.js';

const mn=0.1;
const mx=100;
let sizs={
    wd:window.innerWidth,
    ht:window.innerHeight
    
};
console.log(sizs.wd);
window.addEventListener("resize",()=>{
    sizs.wd=window.innerWidth;
    sizs.ht=window.innerHeight;
});
function adi(){
    console.log('Aditya function');
    const scn=new THREE.Scene();
    const gmt= new THREE.SphereGeometry(3, 64, 64);
    const mat= new THREE.MeshStandardMaterial({
        color:"#00ff83"
    });
    const msh=new THREE.Mesh(gmt,mat);
    scn.add(msh);
    const lgt=new THREE.PointLight(0xffffff, mn, mx);
    lgt.position.set(0, 10, 10);
    scn.add(lgt);
    const cam=new THREE.PerspectiveCamera(45, sizs.wd / sizs.ht, mn, mx);
    cam.position.z=20;
    scn.add(cam);            
    const cnvs= document.querySelector("#wes");
    console.log(cnvs.innerWidth);
    const rndr=new THREE.WebGLRenderer({cnvs});
    rndr.setSize(sizs.wd, sizs.ht);
    rndr.render(scn,cam);
}
$(document).ready(()=>{
    $("#wes").animate({
        width:'100%'
    },1);
    adi();
});
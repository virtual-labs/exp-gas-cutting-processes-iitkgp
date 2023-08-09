/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

import * as THREE from 'three' ;

import { STLLoader } from './threejs/jsm/loaders/STLLoader.js';

import {OrbitControls} from './threejs/jsm/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';


function aditya(){
const mn=0.0001;
const mx=100;
var mldme, trnme;
const sizs={
    wd:window.innerWidth*0.5,
    ht:window.innerHeight*0.5
};
let l=(sizs.wd / sizs.ht /1000).toFixed(4);
let b=(sizs.wd / sizs.ht /1000).toFixed(4);
let h=(sizs.wd / sizs.ht /1000).toFixed(4);
window.addEventListener("resize",()=>{
    rndr.setSize(sizs.wd, sizs.ht, mn, mx);
    $("#wes4").animate({
        width:sizs.wd,
        height:sizs.ht
    },1);
    window.location.reload();
});
const stldr = new STLLoader();
const scn=new THREE.Scene();
const lgt=new THREE.PointLight(0xffffff, mn, mx);
lgt.position.set(20, 20, 20);
const cam=new THREE.PerspectiveCamera(45, sizs.wd / sizs.ht, mn, mx);
cam.position.set(0,2,6);
scn.add(cam);            
scn.add(lgt);

const cnvs= document.querySelector("#wes4");
const rndr=new THREE.WebGLRenderer({canvas:cnvs});

rndr.setSize(sizs.wd, sizs.ht, mn, mx);
rndr.render(scn,cam);


let ml='./images/cwrk.stl';
stldr.load(ml, function ( mld ) {
    const mldma = new THREE.MeshMatcapMaterial( { opacity: mld.alpha, vertexColors: true } );
    mldme = new THREE.Mesh( mld, mldma );
	scn.add( mldme );
    mldme.rotation.set( Math.PI/2, 0, 0 );
    mldme.position.set( 0 , sizs.wd / sizs.ht*0.053, 0 );
    mldme.scale.set(sizs.wd / sizs.ht*0.005, sizs.wd / sizs.ht*0.005, sizs.wd / sizs.ht*0.005 );
    mldme.castShadow = true;
    mldme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );

const tr='./images/ctrch.stl';
stldr.load(tr, function ( trn ) {
    const trnma = new THREE.MeshMatcapMaterial( { opacity: trn.alpha, vertexColors: true } );
    trnme = new THREE.Mesh( trn, trnma );
	scn.add( trnme );
    trnme.rotation.set( 0, 0, Math.PI/2 );
    trnme.position.set(-sizs.wd / sizs.ht*0.04, sizs.wd / sizs.ht*0.55, sizs.wd / sizs.ht*0.05);
    trnme.scale.set(sizs.wd / sizs.ht*0.004, sizs.wd / sizs.ht*0.004, sizs.wd / sizs.ht*0.004 );
    trnme.castShadow = true;
    trnme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );

let wbv = new THREE.Shape();
wbv.moveTo( 0,0 );
wbv.lineTo( ((sizs.wd / sizs.ht)*0.5).toFixed(4), 0 );
wbv.lineTo( ((sizs.wd / sizs.ht)*0.5).toFixed(4), ((sizs.wd / sizs.ht)*1.1).toFixed(4) );
wbv.lineTo( -((sizs.wd / sizs.ht)*0.5).toFixed(4), ((sizs.wd / sizs.ht)*1.1).toFixed(4) );
wbv.lineTo( -((sizs.wd / sizs.ht)*0.5).toFixed(4), 0 );
wbv.lineTo( 0, 0 );
wbv.closed=true;
var extset = {
	steps: 0,
	depth: 0,
	bevelEnabled: false,    
};
const gmtf = new THREE.ExtrudeGeometry( wbv, extset );
const matf = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: false, side: THREE.DoubleSide } );
const fill = new THREE.Mesh( gmtf, matf );
fill.position.set(-sizs.wd / sizs.ht*0.088, -sizs.wd / sizs.ht*0.075, sizs.wd / sizs.ht*0.994);
fill.rotation.set( Math.PI/1*0, -Math.PI/6*0, -Math.PI/2*0);
fill.scale.set((sizs.wd / sizs.ht*0.0269).toFixed(4),(sizs.wd / sizs.ht*0.038).toFixed(4),(sizs.wd / sizs.ht*0.12).toFixed(4));
scn.add( fill );

const ctr = new OrbitControls(cam, cnvs);

let i=0,j=0, k=sizs.wd / sizs.ht*0.0011, m=sizs.wd / sizs.ht*0.0019, adi=0;

const loop = () => {
    console.clear();
    rndr.render(scn,cam);
    window.requestAnimationFrame(loop);
    
    if(i<= ((sizs.wd / sizs.ht)*0.725)){
     trnme.position.set(-sizs.wd / sizs.ht*0.04, sizs.wd / sizs.ht*0.545, sizs.wd / sizs.ht*0.05-m);
 
    k+=sizs.wd / sizs.ht*0.0011;
    m+=sizs.wd / sizs.ht*0.0019;    
 
    i+=sizs.wd / sizs.ht*0.001455;
    extset = {
        steps: j,
        depth: -j/100,
        bevelEnabled: false
    };
   fill.geometry= new THREE.ExtrudeGeometry( wbv, extset );
    j=j+1.6625;
    rndr.render(scn,cam);
    }
    else{
        if (adi==0){
            adi=1;
        scn.remove(fill);
        scn.remove(trnme);
        scn.remove(mldme);
        let ml='./images/cwrkt.stl';
    stldr.load(ml, function ( mld ) {
    const mldma = new THREE.MeshMatcapMaterial( { opacity: mld.alpha, vertexColors: true } );
    mldme = new THREE.Mesh( mld, mldma );
	scn.add( mldme );
    mldme.rotation.set( Math.PI/2, 0, 0 );
    mldme.position.set( 0 , sizs.wd / sizs.ht*0.053, 0 );
    mldme.scale.set(sizs.wd / sizs.ht*0.005, sizs.wd / sizs.ht*0.005, sizs.wd / sizs.ht*0.005 );
    mldme.castShadow = true;
    mldme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );
console.clear();
        }
    }
}
loop();
}
$(document).ready(()=>{
 
    if ( WebGL.isWebGLAvailable() ) {

        aditya();
    
    } else {
    
        const warning = WebGL.getWebGLErrorMessage();
        document.getElementById( 'war' ).appendChild( warning );
    
    }
    

 
});
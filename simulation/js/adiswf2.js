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


function aditya2(){
const mn=0.0001;
const mx=100;
var actme, oxyme, mldme, trnme;
const sizs={
    wd:window.innerWidth*0.5,
    ht:window.innerHeight*0.5
};
let l=(sizs.wd / sizs.ht /1000).toFixed(4);
let b=(sizs.wd / sizs.ht /1000).toFixed(4);
let h=(sizs.wd / sizs.ht /1000).toFixed(4);
window.addEventListener("resize",()=>{
    rndr.setSize(sizs.wd, sizs.ht, mn, mx);
    $("#wes2").animate({
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
cam.position.set(-3,1,4);
scn.add(cam);            
scn.add(lgt);

const cnvs= document.querySelector("#wes2");
const rndr=new THREE.WebGLRenderer({canvas:cnvs});

rndr.setSize(sizs.wd, sizs.ht, mn, mx);
rndr.render(scn,cam);

stldr.load( './images/act.stl', function ( act ) {
    const actma = new THREE.MeshBasicMaterial( { opacity: act.alpha, vertexColors: true } );
    actme = new THREE.Mesh( act, actma );
	scn.add( actme );
    actme.position.set( sizs.wd / sizs.ht *1.2, -sizs.wd / sizs.ht, 0 );
   actme.rotation.set( 0, -Math.PI / 2, 0 );
    actme.scale.set(l, b, h );
    actme.castShadow = true;
    actme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );
stldr.load( './images/oxy.stl', function ( oxy ) {
    const oxyma = new THREE.MeshBasicMaterial( { opacity: oxy.alpha, vertexColors: true } );
    oxyme = new THREE.Mesh( oxy, oxyma );
	scn.add( oxyme );
    oxyme.position.set( sizs.wd / sizs.ht *1.55, -sizs.wd / sizs.ht, 0 );
    oxyme.rotation.set( 0, -Math.PI / 2, 0 );
    oxyme.scale.set(l, b*1.2, h );
    oxyme.castShadow = true;
    oxyme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );
let ml='./images/harb.stl';
stldr.load(ml, function ( mld ) {
    const mldma = new THREE.MeshMatcapMaterial( { opacity: mld.alpha, vertexColors: true } );
    mldme = new THREE.Mesh( mld, mldma );
	scn.add( mldme );
    mldme.rotation.set( -Math.PI / 2, 0, Math.PI/1.2 );
    mldme.position.set( -sizs.wd / sizs.ht*0.8 , -sizs.wd / sizs.ht*0.3, -sizs.wd / sizs.ht*0.3 );
    mldme.scale.set(sizs.wd / sizs.ht*0.01 , sizs.wd / sizs.ht*0.01, sizs.wd / sizs.ht*0.01 );
    mldme.castShadow = true;
    mldme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );

const tr='./images/trcar.stl';
stldr.load(tr, function ( trn ) {
    const trnma = new THREE.MeshMatcapMaterial( { opacity: trn.alpha, vertexColors: true } );
    trnme = new THREE.Mesh( trn, trnma );
	scn.add( trnme );
    trnme.rotation.set( Math.PI/9.5, -Math.PI/6.5, Math.PI/1.9 );
    trnme.position.set(-sizs.wd / sizs.ht*0.60, sizs.wd / sizs.ht*0.48, -sizs.wd / sizs.ht*0.49);
    trnme.scale.set(l*5.4,b*5.4,h*5.4 );
    trnme.castShadow = true;
    trnme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );



let crvo = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*1.5, sizs.wd / sizs.ht*0.815, 0 ),
    new THREE.Vector3( sizs.wd / sizs.ht*1.25, sizs.wd / sizs.ht*0.815, 0 ),
    new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.75 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.52, sizs.wd / sizs.ht*0.76, -sizs.wd / sizs.ht*0.74 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.58, sizs.wd / sizs.ht*0.72, -sizs.wd / sizs.ht*0.62 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.70, sizs.wd / sizs.ht*0.660, -sizs.wd / sizs.ht*0.48 )
] );


let crva = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*1.15, sizs.wd / sizs.ht*0.51, 0 ),
    new THREE.Vector3( sizs.wd / sizs.ht*0.95, sizs.wd / sizs.ht*0.51, 0 ),
    new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.5 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.52, sizs.wd / sizs.ht*0.66, -sizs.wd / sizs.ht*0.74 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.60, sizs.wd / sizs.ht*0.60, -sizs.wd / sizs.ht*0.62 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.70, sizs.wd / sizs.ht*0.63, -sizs.wd / sizs.ht*0.55 )
] );

const gmtryo = new THREE.TubeGeometry( crvo, 64, sizs.wd / sizs.ht*0.028, 16, false );
const mtuo = new THREE.MeshStandardMaterial( { color: 0x39a300, emissive: 0x39a300, metalness:1.0 ,side: 2 } );
const mshtuo = new THREE.Mesh( gmtryo, mtuo );
const gmtrya = new THREE.TubeGeometry( crva, 64, sizs.wd / sizs.ht*0.028, 16, false );
const mtua = new THREE.MeshStandardMaterial( { color: 0xe60505, emissive: 0xe60505, metalness:1.0 ,side: 2 } );
const mshtua = new THREE.Mesh( gmtrya, mtua );

scn.add(mshtua);
scn.add(mshtuo);


const wr = new THREE.CylinderGeometry(1,1,3,15);
const wrm = new THREE.MeshMatcapMaterial( {color: '#5a6977'} );
const wrv = new THREE.Mesh( wr, wrm );
wrv.rotation.set( -Math.PI/8*0, Math.PI*0, Math.PI/8);
wrv.position.set(-sizs.wd / sizs.ht*1.273, -sizs.wd / sizs.ht*0.055, sizs.wd / sizs.ht*0.42);
wrv.scale.set(l*20,b*150,h*10.0);
scn.add(wrv);

let wbv = new THREE.Shape();
wbv.moveTo( 0,0 );
wbv.lineTo( ((sizs.wd / sizs.ht)/12).toFixed(2), 0 );
wbv.lineTo( (sizs.wd / sizs.ht+0.5).toFixed(2), (sizs.wd / sizs.ht+0.5).toFixed(2) );
wbv.lineTo( -(sizs.wd / sizs.ht+0.5).toFixed(2), (sizs.wd / sizs.ht+0.5).toFixed(2) );
wbv.lineTo( -((sizs.wd / sizs.ht)/12).toFixed(2), 0 );
wbv.lineTo( 0, 0 );
wbv.closed=true;
var extset = {
	steps: 0,
	depth: 0,
	bevelEnabled: false,    
};
const gmtf = new THREE.ExtrudeGeometry( wbv, extset );
const matf = new THREE.MeshBasicMaterial( { color: 0x404040, wireframe: false, side: THREE.DoubleSide } );
const fill = new THREE.Mesh( gmtf, matf );
fill.position.set(-sizs.wd / sizs.ht*1.2043, -sizs.wd / sizs.ht*0.30, sizs.wd / sizs.ht*0.390);
fill.rotation.set( Math.PI/1*0, -Math.PI/6, -Math.PI/2*0);
fill.scale.set((sizs.wd / sizs.ht*0.0269).toFixed(4),(sizs.wd / sizs.ht*0.042).toFixed(4),(sizs.wd / sizs.ht*0.12).toFixed(4));
scn.add( fill );


const ctr = new OrbitControls(cam, cnvs);

const lstnr = new THREE.AudioListener();
cam.add(lstnr);
const aud = new THREE.Audio(lstnr);
const adldr = new THREE.AudioLoader();
adldr.load('./images/Wldsd.mp3', (buffer) => {
    aud.setBuffer(buffer);
});


const adit = () => {
            aud.playbackRate = 2.0;
                aud.play();
                setTimeout(() => {
                    aud.stop();
                }, 100);
        };
function lblupd(objprt,sprt,arw,upof){
    if (!objprt || !sprt || !arw) return;
        const lblps = objprt.position.clone().add(upof);
        sprt.position.copy(lblps);
        arw.position.copy(lblps);
}

let actLabelSprite = null;
let actArrow = null;

function crtlbl(text,fnt) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.font =  fnt+'px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
}

function crtar(objprt,objnm) {
    if (!objprt) return;
    const nameText = objnm;
    const tex = crtlbl(nameText,23);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
    actLabelSprite = new THREE.Sprite(mat);

    const upOffset = new THREE.Vector3(0, (sizs.wd / sizs.ht) * 0.45, 0);
    actLabelSprite.position.copy(objprt.position).add(upOffset);

    const baseScale = (sizs.wd / sizs.ht) * 0.8;
    actLabelSprite.scale.set(baseScale * 2.2, baseScale * 0.6, 1);

    scn.add(actLabelSprite);

    const dir = new THREE.Vector3().subVectors(objprt.position, actLabelSprite.position).normalize();
    const length = actLabelSprite.position.distanceTo(objprt.position);
    const headLength = (sizs.wd / sizs.ht) * 0.03;
    const headWidth = (sizs.wd / sizs.ht) * 0.15;
    actArrow = new THREE.ArrowHelper(dir, actLabelSprite.position.clone(), length, 0xffcc00, headLength, headWidth);
    scn.add(actArrow);

    return [actLabelSprite, actArrow];
}


let bslbl = null;

const bsmtlbl = setInterval(() => {
    if (!mldme) return;
    if (bslbl) return;
    const lbar=crtar(mldme,"Base material");
    bslbl=lbar[0];
    if (lbar[0] &&  lbar[1]) {
        const upOffset = new THREE.Vector3(-1.0, (sizs.wd / sizs.ht) * 0.30, 0.25);
        const labelPos = mldme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);
        const dir = new THREE.Vector3().subVectors(mldme.position, labelPos).normalize();
        const length = labelPos.distanceTo(mldme.position);
        lbar[1].position.copy(labelPos);
        //lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.35, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }
}, 100);

let ecblsprt = null;
let ecblarw = null;
let ecblof = null;

const eclbl = setInterval(() => {
    if (!trnme) return;
    if (ecblsprt || ecblarw) {return;}
    else
    {const lbar=crtar(trnme,"Gas welding torch");
    ecblsprt=lbar[0];
    ecblarw=lbar[1];
    if (lbar[0] &&  lbar[1]) {
        let upOffset = new THREE.Vector3(-0.3, (sizs.wd / sizs.ht) * 0.45, 0.5);
        ecblof=upOffset;
        let labelPos = trnme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);
        let dir = new THREE.Vector3(Math.PI/2*0,-Math.PI/2*1,0).normalize();
        let length = labelPos.distanceTo(trnme.position);
        lbar[1].position.copy(labelPos);
        lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.58, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }}
}, 10);


let ocsprt = null;

const ocbl = setInterval(() => {
    if (!oxyme) return;
    if (ocsprt) {return;}
    else
    {const lbar=crtar(oxyme,"Oxygen gas cylinder");
    ocsprt=lbar[0];
    if (lbar[0] &&  lbar[1]) {
        let upOffset = new THREE.Vector3(0.85, (sizs.wd / sizs.ht) * 1.0, 0.1);
        let labelPos = oxyme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);
        let dir = new THREE.Vector3(Math.PI/2*-1, Math.PI/2*0, Math.PI/2*0).normalize();
        let length = labelPos.distanceTo(oxyme.position);
        lbar[1].position.copy(labelPos);
        lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.26, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }}
}, 10);

let acsprt = null;

const acbl = setInterval(() => {
    if (!actme) return;
    if (acsprt) {return;}
    else
    {const lbar=crtar(actme,"Acetylene gas cylinder");
    acsprt=lbar[0];
    if (lbar[0] &&  lbar[1]) {
        let upOffset = new THREE.Vector3(-1.68, (sizs.wd / sizs.ht)*1.0, 0.1);
        let labelPos = oxyme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);
        let dir = new THREE.Vector3(Math.PI/2*1, Math.PI/2*0, Math.PI/2*0).normalize();
        let length = labelPos.distanceTo(oxyme.position);
        lbar[1].position.copy(labelPos);
        lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.25, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }}
}, 10);

window.addEventListener('beforeunload', () => {
    clearInterval(bsmtlbl);
    clearInterval(eclbl);
    clearInterval(ocbl);
    clearInterval(acbl);
});






let i=0,j=0, adi=0, k=sizs.wd / sizs.ht*0.0011, m=sizs.wd / sizs.ht*0.0019;

const loop = () => {

    rndr.render(scn,cam);
    window.requestAnimationFrame(loop);
    
    if(i<= ((sizs.wd / sizs.ht)*0.525)){
  trnme.position.set(-sizs.wd / sizs.ht*0.60+k, sizs.wd / sizs.ht*0.48, -sizs.wd / sizs.ht*0.49-m);
 adit();
 lblupd(trnme,ecblsprt,ecblarw,ecblof);
let crvo = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*1.5, sizs.wd / sizs.ht*0.815, 0 ),
    new THREE.Vector3( sizs.wd / sizs.ht*1.25, sizs.wd / sizs.ht*0.815, 0 ),
    new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.75-m ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.52+k, sizs.wd / sizs.ht*0.76, -sizs.wd / sizs.ht*0.74-m ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.58+k, sizs.wd / sizs.ht*0.72, -sizs.wd / sizs.ht*0.62-m ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.70+k, sizs.wd / sizs.ht*0.660, -sizs.wd / sizs.ht*0.48-m )
] );


let crva = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*1.15, sizs.wd / sizs.ht*0.51, 0 ),
    new THREE.Vector3( sizs.wd / sizs.ht*0.95, sizs.wd / sizs.ht*0.51, 0 ),
    new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.5-m ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.52+k, sizs.wd / sizs.ht*0.66, -sizs.wd / sizs.ht*0.74-m ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.60+k, sizs.wd / sizs.ht*0.60, -sizs.wd / sizs.ht*0.62-m ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.70+k, sizs.wd / sizs.ht*0.63, -sizs.wd / sizs.ht*0.55-m )
] );
scn.remove(mshtuo);
scn.remove(mshtua);
mshtuo.geometry= new THREE.TubeGeometry( crvo, 64, sizs.wd / sizs.ht*0.025, 16, false );
mshtua.geometry= new THREE.TubeGeometry( crva, 64, sizs.wd / sizs.ht*0.025, 16, false );
scn.add(mshtuo);
scn.add(mshtua);

rndr.render(scn,cam);
    k+=sizs.wd / sizs.ht*0.0011;
    m+=sizs.wd / sizs.ht*0.0019;    
 
    wrv.position.x +=sizs.wd / sizs.ht*0.0011;
    wrv.position.y +=sizs.wd / sizs.ht*0.0000;
    wrv.position.z -=sizs.wd / sizs.ht*0.0019;
    wrv.scale.set(l*20,b*150-i/9,h*10.0);

    i+=sizs.wd / sizs.ht*0.001455;
    extset = {
        steps: j,
        depth: -j/100,
        bevelEnabled: false
    };
   fill.geometry= new THREE.ExtrudeGeometry( wbv, extset );
    j=j+1.85;
    console.clear();
    rndr.render(scn,cam);
    }
    else {
        if (adi==0){
        scn.remove(mldme);
        scn.remove(trnme);
        scn.remove(wrv);
        ml='./images/hcwb.stl';
stldr.load(ml, function ( mld ) {
    const mldma = new THREE.MeshMatcapMaterial( { opacity: mld.alpha, vertexColors: true } );
    mldme = new THREE.Mesh( mld, mldma );
	scn.add( mldme );
    mldme.rotation.set( -Math.PI / 2, 0, Math.PI/1.2 );
    mldme.position.set( -sizs.wd / sizs.ht*0.8 , -sizs.wd / sizs.ht*0.3, -sizs.wd / sizs.ht*0.3 );
    mldme.scale.set(sizs.wd / sizs.ht*0.01 , sizs.wd / sizs.ht*0.01, sizs.wd / sizs.ht*0.01 );
    mldme.castShadow = true;
    mldme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );

const tr='./images/trh.stl';
stldr.load(tr, function ( trn ) {
    const trnma = new THREE.MeshMatcapMaterial( { opacity: trn.alpha, vertexColors: true } );
    trnme = new THREE.Mesh( trn, trnma );
	scn.add( trnme );
    trnme.rotation.set( Math.PI/9.5, -Math.PI/6.5, Math.PI/1.9 );
    trnme.position.set(-sizs.wd / sizs.ht*0.60+k, sizs.wd / sizs.ht*0.48, -sizs.wd / sizs.ht*0.49-m);
    trnme.scale.set(l*5.4,b*5.4,h*5.4 );
    trnme.castShadow = true;
    trnme.receiveShadow = true;

}, undefined, function ( error ) {

	console.error( error );

} );
console.clear();
adi=adi+1;
}
    }
}
loop();
}
$(document).ready(()=>{
 
    if ( WebGL.isWebGLAvailable() ) {

        aditya2();
    
    } else {
    
        const warning = WebGL.getWebGLErrorMessage();
        document.getElementById( 'war' ).appendChild( warning );
    
    }
    

 
});
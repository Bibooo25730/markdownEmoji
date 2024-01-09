import React, { useRef,useState,useEffect } from 'react';
import fscreen from 'fscreen';
import play from "./play.module.css";
import Particles from "react-particles";
import {Play} from "next/dist/compiled/@next/font/dist/google";
import { throttle } from 'lodash';
import {event} from "next/dist/build/output/log";

const  Player =()=>{
    // 播放
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute,setMute] = useState(false);
      let currentTime = useState(0);
      let src = useState('/trailer.mp4');
      let domRefs = useRef({});
   //声音大小
    let [audio,setaudio] = useState(0.5);

    // 视频播放暂停函数
    function videoPause(play){
        let videoRef = domRefs.current[1];
        if (videoRef.paused || videoRef.ended) {
            videoRef.play();
            setIsPlaying(false);
        } else {
            videoRef.pause();
            setIsPlaying(true);
        }

    }
    // 声音

    useEffect(() => {
        let video = domRefs.current[1];
        if (video) {
            if (isPlaying) {
                video.play();
            } else {
                video.pause();
            }
        }

    }, [isPlaying]);
    function videoMute(Play_pause){
      if(domRefs.current[1]){
            let video = domRefs.current[1];
      }
      

        if (video) {
            if (video.muted) {
                video.muted =false;
                setMute(true)
                let volume = 0;
                setaudio(volume);
            } else {
                video.muted =true;
                setMute(false)
                let volume = 1;
                setaudio(volume);
            }
        }
    }
    useEffect(() => {
        let video = domRefs.current[1];
        if (video) {
            if (video.muted) {
                video.muted = false
            } else {
                video.muted = true
            }
        }

    }, [isMute]);

    // 声音加减
    function AudioControls(video,dir){
        const currentVolume = Math.floor(video.volume * 10) /10;
        if(dir === "+" && currentVolume<1){
            video.volume +=0.1;
        }else{
            video.volume -=0.1;
        }
    }
    // function handleTouchStart(e){
    //     console.log(e)
    //     let Play_pauses = domRefs.current[11];
    //     let uls = domRefs.current[2];
    //     Play_pauses.style.opacity = 1;
    //     uls.style.opacity = 1;
    //
    // }

    useEffect(()=>{
          const supportsVideo = !!document.createElement("video").canPlayType;
          // 是否支持 Video
          if (supportsVideo) {
              let Play_pause = domRefs.current[1];
              let progress = domRefs.current[5];
              let figure = domRefs.current[0];
              let progres = domRefs.current[11];
              let i = domRefs.current[15];
              Play_pause.volume = 0.5;
              Play_pause.controls = false;
              // domRefs.current[2].style.display = 'block';
              Play_pause.addEventListener('click', ()=>{
                  videoPause(Play_pause)
              })
              
              domRefs.current[3].addEventListener('click',()=>{
                  videoPause(Play_pause)
              })
              // 重新开始
              // domRefs.current[4].addEventListener('click',()=>{
              //     videoStop(Play_pause)
              // })
              domRefs.current[7].addEventListener('click',()=>{
                  videoMute(Play_pause)
              })
         
           // 监听视频播放进度
              progres.addEventListener('click',(e)=>{
                      if (e){
                          if(e.target.clientWidth > 2){
                              let offsetWidth = progres.offsetWidth;
                              let clickPosition  = null;
                              let clickPercentage = null;
                              clickPosition = e.offsetX; // 计算点击位置
                              clickPercentage = clickPosition / offsetWidth; // 计算点击百分比
                              console.log(e)
                              Play_pause.currentTime = clickPercentage * Play_pause.duration; // 设置视频播放时间
                              progress.style.width = `${Math.floor(
                                  (Play_pause.currentTime * 100) / Play_pause.duration
                              )}%`
                          }


                      }
              })
              const handleTimeUpdate = () => {
                  progress.style.width = `${Math.floor(
                      (Play_pause.currentTime * 100) / Play_pause.duration
                  )}%`
              };
              const handleTouchEnd =() =>{
                  progress.style.width = 0;

              }
              const handleMouseenter = throttle(function() {
                     progres.style.height = '12px';
                  console.log('Scroll event throttled!');

              }, 2000);
              progres.addEventListener("mouseenter",handleMouseenter);
              progres.addEventListener("mouseleave", () => {
                  progres.style.height = '8px';
              });
              const handleMouseenters = throttle(function(event) {
                  if (i) {
                      i.style.left = event.offsetX + 'px'; // 使用event.offsetX获取鼠标相对于progress元素的水平偏移量
                  }

              }, 2000);
              progres.addEventListener("mousemove",handleMouseenters(event))
              Play_pause.addEventListener("timeupdate",handleTimeUpdate);
              return () => {
                  if  ( Play_pause){
                        Play_pause.removeEventListener('touchend', handleTouchEnd);
                  }
                 
              };
          }

      },[])
    //触摸开始

    // 全屏
    function quanPing(){
        if (fscreen.fullscreenEnabled) {
            fscreen.addEventListener('fullscreenchange', handler, false);
            let videoElement = document.querySelector("video");
            if (videoElement && videoElement.requestFullscreen){
                fscreen.requestFullscreen(videoElement).then((err)=>{
                    console.log(err)
                })
            }
        } else {
            console.log('浏览器当前不能全屏');
        }
    }

    function handler() {
        if (fscreen.fullscreenElement !== null) {
            console.log('Entered fullscreen mode');
        } else {
            console.log('Exited fullscreen mode');
        }
    }
    const handleVolumeChange = (event) => {
        let video = domRefs.current[1];
        const volume = event.target.value;
        video.volume = volume;
        setaudio(volume);
        // 在这里处理音量的变化
    };

        return (
            <main className="flex items-center justify-center my-2">
               <div className={play.video_container}>
                       <figure className={play.figule} ref={ref => (domRefs.current[0] = ref)}>
                           <video className={play.video} id="my-video" ref={ref => (domRefs.current[1] = ref)} controls
                                  poster="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg">
                               <source src="/nainiu.mp4" type="audio/mpeg"/>
                               <p>
                                   Your browser doesn t support HTML5 video. Here is a
                                   <a href="myVideo.mp4">link to the video</a> instead.
                               </p>
                           </video>
                           {/* 进度条 */}

                               <div ref={ref => (domRefs.current[11] = ref)} className={play.progressContainer}>
                                   <div className={play.progress} ref={ref => (domRefs.current[5] = ref)}></div>
                                   <i ref={ref => (domRefs.current[15] = ref)} className={play.i}></i>
                               </div>



                           <ul ref={ref => (domRefs.current[2] = ref)} className={play.ul}>
                               <li className={"w-14"} ref={ref => (domRefs.current[3] = ref)}>
                                   {isPlaying ? <svg version="1.1"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     xmlnsXlink="http://www.w3.org/1999/xlink"
                                                     viewBox="0 0 512 512" xmlSpace="preserve">
                                       <g id="chick">
                                           <rect x="332.8" y="153.6" width="25.6" height="25.6"/>
                                           <polygon style={{fill: '#D68400'}}
                                                    points="435,179 435,154 410,154 410,179.2 410,204.8 410,230 435,230 435,205 461,205 461,179 	"/>
                                           <g>
                                               <polygon style={{fill: '#964B00'}}
                                                        points="154,435.2 154,461 179,461 179,435.2 179,410 154,410 		"/>
                                               <polygon style={{fill: '#964B00'}}
                                                        points="230,410 230,435.2 230,461 256,461 256,435.2 256,410 		"/>
                                           </g>
                                           <path style={{fill: '#FEE257'}} d="M384,128v-26h-25.6h-25.6h-25.6h-25.6H256v26h-26v26h-25v25.2V205h-25.8h-25.6H128h-26v25H77v26H51
		v25.6v25.6v25.6V358h26v26h25v26h26h25.6h25.6h25.6h25.6H256h26v-26h25.2H333v-26h25v-25.2v-25.6V282h26v-26h26v-25.6v-25.6v-25.6
		v-25.6V128H384z M358,179h-25v-25h25V179z"/>
                                           <g>
                                               <rect x="-955" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="0" style={{fill: '#E6E6E6'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="0" style={{fill: '#E6E6E6'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="0" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="25.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="51.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="76.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="102.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="128" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="153.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="179.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="204.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="230.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="256" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="281.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="307.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="332.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="358.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="384" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="409.6" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="435.2" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="460.8" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-929.4" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-955" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-903.8" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-878.2" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-852.6" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-827" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-801.4" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-775.8" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-750.2" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-724.6" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-699" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-673.4" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-647.8" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-622.2" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-596.6" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-571" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-545.4" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-519.8" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-494.2" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                               <rect x="-468.6" y="486.4" style={{fill: '#F2F2F2'}} width="25.6"
                                                     height="25.6"/>
                                           </g>

                                           <image style={{overflow: 'visible'}} width="1250" height="498"
                                               // xlinkHref="../animals_pixel_art_base_1.png - paint.net 4.0.6.jpg"
                                                  transform="matrix(1.8552 0 0 1.8552 -205.8073 -1323.3146)">
                                           </image>
                                       </g>
                                       <g id="Layer_1">
                                       </g>
                                   </svg> : <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                                 viewBox="0 0 512 512" xmlSpace="preserve">
                                       <g id="rat">
                                           <rect x="358.011" y="281.6" style={{fill: '#010000'}} width="25.989"
                                                 height="25.6"/>
                                           <path style={{fill: '#A0A0A0'}} d="M435,333v-26h-25v-25.4V256h-26v-25.6V205h-26v25h-25v26h-26v-26h-25v-25h-26v-26h-25.6h-25.6h-25.6
		h-25.6H128v26h-26v25H77v26H51v26h26v25.2V333h25v25h26h25.6h25.6h25.6h25.6H256v-25h26v25h25.2h25.6h25.6H384h25.6h25.6H461v-25
		H435z M384,307h-26v-25h26V307z"/>
                                           <g>
                                               <polygon style={{fill: '#7F7F7F'}} points="179.2,358 153.6,358 128,358 102,358 102,333 77,333 77,358.4 77,384 102.4,384 128,384
			153.6,384 179.2,384 204.8,384 230,384 230,358 204.8,358 		"/>
                                               <polygon style={{fill: '#7F7F7F'}} points="307.2,358 282,358 282,333 256,333 256,358.4 256,384 281.6,384 307.2,384 333,384
			333,358 		"/>
                                           </g>
                                           <polygon style={{fill: '#404040'}} points="77,410 77,384 77,358.4 77,332.8 77,307.2 77,282 51,282 51,307.2 51,332.8 51,358.4
		51,384 51,410 77,410 77,435 102,435 102,410 	"/>
                                       </g>
                                       <g id="Layer_1">
                                       </g>
                                   </svg>}


                               </li>
                               <li className={play.mute} >
                                   <div ref={ref => (domRefs.current[7] = ref)}>
                                       {isMute ? <svg fill="white" width="25px" height="25px"
                                                      viewBox="0 0 400 400" id="Mute" version="1.1" xmlSpace="preserve"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      xmlnsXlink="http://www.w3.org/1999/xlink">

                                               <g id="XMLID_51_">

                                                   <rect height="26.7" id="XMLID_52_" width="26.7" x="146.7" y="26.7"/>

                                                   <rect height="26.7" id="XMLID_163_" width="26.7" x="120" y="53.3"/>

                                                   <rect height="26.7" id="XMLID_164_" width="26.7" x="93.3" y="80"/>

                                                   <path
                                                       d="M93.3,240v-26.7v-26.7V160v-26.7v-26.7H66.7H40H13.3v26.7V160v26.7v26.7V240v26.7v26.7H40h26.7h26.7v-26.7   V240z M66.7,160v26.7v26.7V240v26.7H40V240v-26.7v-26.7V160v-26.7h26.7V160z"
                                                       id="XMLID_167_"/>

                                                   <rect height="26.7" id="XMLID_168_" width="26.7" x="253.3" y="133.3"/>

                                                   <rect height="26.7" id="XMLID_169_" width="26.7" x="360" y="133.3"/>

                                                   <rect height="26.7" id="XMLID_170_" width="26.7" x="280" y="160"/>

                                                   <rect height="26.7" id="XMLID_171_" width="26.7" x="333.3" y="160"/>

                                                   <rect height="26.7" id="XMLID_172_" width="26.7" x="93.3" y="293.3"/>

                                                   <rect height="26.7" id="XMLID_173_" width="26.7" x="306.7" y="186.7"/>

                                                   <rect height="26.7" id="XMLID_174_" width="26.7" x="120" y="320"/>

                                                   <rect height="26.7" id="XMLID_175_" width="26.7" x="280" y="213.3"/>

                                                   <rect height="26.7" id="XMLID_176_" width="26.7" x="333.3" y="213.3"/>

                                                   <rect height="26.7" id="XMLID_177_" width="26.7" x="146.7" y="346.7"/>

                                                   <rect height="26.7" id="XMLID_178_" width="26.7" x="253.3" y="240"/>

                                                   <rect height="26.7" id="XMLID_179_" width="26.7" x="360" y="240"/>

                                                   <polygon id="XMLID_180_"
                                                            points="173.3,0 173.3,26.7 200,26.7 200,53.3 200,80 200,106.7 200,133.3 200,160 200,186.7 200,213.3    200,240 200,266.7 200,293.3 200,320 200,346.7 200,373.3 173.3,373.3 173.3,400 200,400 226.7,400 226.7,373.3 226.7,346.7    226.7,320 226.7,293.3 226.7,266.7 226.7,240 226.7,213.3 226.7,186.7 226.7,160 226.7,133.3 226.7,106.7 226.7,80 226.7,53.3    226.7,26.7 226.7,0 200,0  "/>

                                               </g>

                                           </svg> :
                                           <svg fill="white" width="22px" height="22px" viewBox="0 0 400 400" id="Sound"
                                                version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">

                                               <g id="XMLID_53_">

                                                   <rect height="26.7" id="XMLID_54_" width="26.7" x="146.7" y="26.7"/>

                                                   <polygon id="XMLID_159_"
                                                            points="173.3,0 173.3,26.7 200,26.7 200,53.3 200,80 200,106.7 200,133.3 200,160 200,186.7 200,213.3    200,240 200,266.7 200,293.3 200,320 200,346.7 200,373.3 173.3,373.3 173.3,400 200,400 226.7,400 226.7,373.3 226.7,346.7    226.7,320 226.7,293.3 226.7,266.7 226.7,240 226.7,213.3 226.7,186.7 226.7,160 226.7,133.3 226.7,106.7 226.7,80 226.7,53.3    226.7,26.7 226.7,0 200,0  "/>

                                                   <polygon id="XMLID_160_"
                                                            points="360,26.7 360,53.3 360,80 360,106.7 360,133.3 360,160 360,186.7 360,213.3 360,240 360,266.7    360,293.3 360,320 360,346.7 360,373.3 386.7,373.3 386.7,346.7 386.7,320 386.7,293.3 386.7,266.7 386.7,240 386.7,213.3    386.7,186.7 386.7,160 386.7,133.3 386.7,106.7 386.7,80 386.7,53.3 386.7,26.7  "/>

                                                   <rect height="26.7" id="XMLID_161_" width="26.7" x="120" y="53.3"/>

                                                   <rect height="26.7" id="XMLID_162_" width="26.7" x="93.3" y="80"/>

                                                   <polygon id="XMLID_181_"
                                                            points="306.7,106.7 306.7,133.3 306.7,160 306.7,186.7 306.7,213.3 306.7,240 306.7,266.7 306.7,293.3    306.7,320 333.3,320 333.3,293.3 333.3,266.7 333.3,240 333.3,213.3 333.3,186.7 333.3,160 333.3,133.3 333.3,106.7 333.3,80    306.7,80  "/>

                                                   <polygon id="XMLID_182_"
                                                            points="253.3,160 253.3,186.7 253.3,213.3 253.3,240 253.3,266.7 280,266.7 280,240 280,213.3 280,186.7    280,160 280,133.3 253.3,133.3  "/>

                                                   <path
                                                       d="M93.3,240v-26.7v-26.7V160v-26.7v-26.7H66.7H40H13.3v26.7V160v26.7v26.7V240v26.7v26.7H40h26.7h26.7v-26.7   V240z M66.7,160v26.7v26.7V240v26.7H40V240v-26.7v-26.7V160v-26.7h26.7V160z"
                                                       id="XMLID_185_"/>

                                                   <rect height="26.7" id="XMLID_186_" width="26.7" x="93.3" y="293.3"/>

                                                   <rect height="26.7" id="XMLID_187_" width="26.7" x="120" y="320"/>

                                                   <rect height="26.7" id="XMLID_188_" width="26.7" x="146.7" y="346.7"/>

                                               </g>

                                           </svg>}
                                   </div>

                                   <div className={play.mutes}>
                                       <input className={play.input} onChange={handleVolumeChange} 
                                              ref={ref => (domRefs.current[8] = ref)} type="range" id="volume"
                                              name="volume" min="0" max="1" step="0.1" value={audio}/>

                                       {/*<button ref={ref => (domRefs.current[8] = ref)} type="button">Vol+</button>*/}
                                   </div>

                               </li>

                               {/*<li>*/}
                               {/*    <button ref={ref => (domRefs.current[9] = ref)} type="button">Vol-</button>*/}
                               {/*</li>*/}
                               <li>
                                   <button onClick={quanPing} ref={ref => (domRefs.current[10] = ref)}
                                           type="button">
                                           <svg width="34px" height="34px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                           <path d="M6 15V16C6 17.1046 6.89543 18 8 18H9M18 15V16C18 17.1046 17.1046 18 16 18H15M6 9V8C6 6.89543 6.89543 6 8 6H9M18 9V8C18 6.89543 17.1046 6 16 6H15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                           </svg>
                                   </button>
                               </li>
                           </ul>

                       </figure>

               </div>


            </main>
        );

}

export default Player;
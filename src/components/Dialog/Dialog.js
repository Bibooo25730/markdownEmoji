import {useState} from "react"
import styles from "./Dialog.module.css"
export default function Dialog(props){

     let {showBtn,short} = props;
    console.log(short)
     function  handleRemove(){

           showBtn(false)
     }
    return(
        <div className={styles.position_right}>
            <div  className={styles.container}>
                <div className={styles.p}>
                    <p>已为你复制了{short.alt}  </p>
                    <p>{short.shortcode} </p>
                    <p>快给你的笔记添加更多表情吧！</p>
                </div>
                <div onClick={handleRemove} className={styles.position_left}>
                    x
                </div>
            </div>

        </div>

    )
}
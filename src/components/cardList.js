import styles from "./cardList.module.css"
import emoji from "@/src/module/module";
import Dialog from "./Dialog/Dialog";

import {useState,useEffect} from "react";

export default function CardList({OptionData,SearchData}){
    let viBean = OptionData
    let [show,setShow] = useState(true);
    const emojiSearch = emoji.filter((item=>{
        return item.shortcode.includes(SearchData)
    }))


    console.log("emoji",emojiSearch)
    const [notifications, setNotifications] = useState([]);
    function handleClick(item){
        setShow(true)
        navigator.clipboard.writeText(item.alt).then(
            function (alt) {
                /* clipboard successfully set */
                const newNotification = {
                    id: Date.now(),
                    message: item
                };
                setNotifications([...notifications, newNotification]);
            },
            function (err) {
                /* clipboard write failed */
                let item = {
                    alt:"暂无表情",
                    shortcode:'看看其他的吧！！！'
                }
            },
        );
    }
    useEffect(() => {
        if (notifications.length > 0) {
            const lastNotification = notifications[notifications.length - 1];
            const timer = setTimeout(() => {
                setNotifications((prevNotifications) => prevNotifications.filter(notification => notification.id !== lastNotification.id));
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [notifications]);
    function handleRemove(boolean){
        console.log("boolean",boolean)
        setShow(boolean)
    }

    return (
        <div   style={{maxWidth:'1100px' ,margin:'0 auto'}} className="flex flex-wrap">

            {emojiSearch.length !==0?viBean?emojiSearch.map((item,index)=>{
                    return (
                        <article  key={index}  className="flex px-6 pt-3 w-1/4  py-6  max-md:flex-col max-lg:w-1/3 max-md:w-1/2 max-sm:w-full" >
                            <div  onClick={()=>handleClick(item)} className={styles.code}>
                                <header className=" bg-footerColor flex justify-center items-center" style={{borderTopLeftRadius:'4px',borderTopRightRadius:'4px'}}>
                                    <button type="button" className={styles.emoji_clipboard_emoji}
                                            data-clipboard-text={item.alt}>{item.alt}
                                    </button>
                                </header>

                                <div  className="p-7 text-center" style={{wordBreak:'break-all',backgroundColor:'var(--card-back-color)',transition:"all .25s ease"}}>
                                    <button   className="" style={{width:'93px'}}
                                            data-clipboard-text=":arrow_down:" tabIndex="-1" type="button"><code className={styles.codeH1}><span>:{item.unicode}:</span></code>
                                    </button>
                                    <p  className={styles.codeP}>{item.shortcode} </p>
                                </div>
                            </div>

                            {notifications.map(notification => (
                                show?<Dialog showBtn={handleRemove}  key={notification.id}   short={notification.message?notification.message:'为空'}  />:''
                            ))}

                        </article>


                    )

                }):emoji.map((item,index)=>{
                return (
                    <article key={index}  className="flex px-6 pt-3 w-1/3  py-6  max-md:flex-col max-lg:w-1/3 max-md:w-1/2 max-sm:w-full" >
                        <div  onClick={()=>handleClick(item)}  className={ styles.codeOne }>
                            <header className=" bg-footerColor flex justify-center items-center" style={{borderTopLeftRadius:'4px',borderTopRightRadius:'4px'}}>
                                <button type="button" className={styles.emoji_clipboard_emoji}
                                        data-clipboard-text={item.alt}>{item.alt}
                                </button>
                            </header>

                            <div className="p-2.5 text-left flex flex-col justify-center" style={{wordBreak:'break-all',backgroundColor:'var(--card-back-color)',transition:"all .25s ease"}}>
                                <button className="" style={{width:'93px'}}
                                        data-clipboard-text=":arrow_down:" tabIndex="-1" type="button"><code className={styles.codeH1}><span>:{item.unicode}:</span></code>
                                </button>
                                <p  className={styles.codeP}>{item.shortcode}</p>
                            </div>
                        </div>

                        {notifications.map(notification => (
                                show?<Dialog showBtn={handleRemove}  key={notification.id}   short={notification.message?notification.message:'为空'}  />:''
                            ))}
                    </article>


                )

            }):<div className="py-4">
                <h2 className="text-3xl">未找到符合搜索条件的 mdemoji：{SearchData}</h2>
            </div>}



        </div>

    )
}
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import {useState} from "react";
import styles from "./Header.module.css"
export default function Header(){
    let [boolean,setBoolean] = useState(true)
    return (
        <header className="font-zpix bg-headerColor text-white">
            <Head>
                <title>MdmojiCopy | Related tools | An emoji guide for your commit messages</title>
                <meta name="author" content="Angel eyes"></meta>
                <meta name="description" content="This is my Mdmoji Page 为你的笔记添加更多表情吧！！！" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content="mdmoji"/>
                <meta name="og:description" content="为你的笔记添加更多表情吧！！！"/>
                {/*<meta property="og:image" content=""/>*/}
                {/*<meta name="og:url" content="">*/}
                <meta name="robots" content="index, follow"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"></link>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <meta name="msapplication-TileColor" content="#FFDD67"/>
                <meta name="msapplication-TileImage" content="/apple-icon-114x114.png"/>
                <meta name="theme-color" content="#FFDD67"/>
                {/*<meta name="google-site-verification" content=""/>*/}
                <link rel="search" type="application/opensearchdescription+xml" href="/opensearchdescription.xml"/>
                {/*<link rel="canonical" href="https://gitmoji.dev/related-tools"/>*/}
                <noscript>
                    <p>您的浏览器不支持 JavaScript 或已禁用 JavaScript。请启用 JavaScript 以正常浏览网站。</p>
                </noscript>

            </Head>
                {boolean? <div className="fixed right-0"><button onClick={(()=>setBoolean(false))} aria-label="Open navigation menu" className="p-3">
                    <svg className={"text-btnColor"}  xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor">
                        <path  d="M6 12H42V16.032H6V12ZM6 25.968V22.03H42V25.968H6ZM6 36V31.968H42V36H6Z"></path>
                    </svg>
                </button>   </div>:
                    <div className="z-10 fixed w-full h-full top-0 bg-footerColor">
                     <div className="fixed right-0">
                         <button onClick={(()=>setBoolean(true))} aria-label="Close navigation menu" className="p-3">
                             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor">
                                 <path
                                     d="M37.968 12.844L26.812 24L37.968 35.156L35.156 37.968L24 26.812L12.844 37.968L10.032 35.156L21.188 24L10.032 12.844L12.844 10.032L24 21.188L35.156 10.032L37.968 12.844Z"></path>
                             </svg>
                         </button>
                     </div>
                    <ul className="flex justify-center items-center flex-col h-full">
                        <li className="p-3"><Link className="text-8xl" title="Home" href="/">🏠</Link></li>
                        <li className="p-3"><Link  className="text-8xl" title="关于"  href="/about">🙄</Link></li>
                        <li className="p-3"><Link className="text-8xl" title='Play' href="/PlayCom">🔮</Link></li>
                    </ul>
            </div >
                }
            <div  className="text-center px-4 py-24 flex justify-center items-center flex-col">
                <Image src="../images/Logo.svg"   alt="SVG Image"  width={510} height={300}/>
                <p className="font-zpix text-4xl py-10">为你的markdown笔记添加更加丰富的表情吧</p>
                <div>
                    <Link className={styles.button} href="https://github.com/">
                        GitHub
                    </Link>
                    <Link className={styles.button} href="https://www.bibooo.cn/">
                        Blog
                    </Link>
                </div>
            </div>

        </header>
    )
}
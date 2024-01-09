import Link from "next/link";
import styles from "./Footer.module.css"
export default function Footer(){

    return (
        <footer className="p-6 bg-footerBackground">
            <div style={{maxWidth:'1100px' ,margin:'0 auto'}}  className="max-md:flex-wrap max-md:justify-center  my-0 ml-auto mr-auto flex justify-between items-center ">
                <div className="w-full text-center">
                    <h3 className="text-2xl">Made with
                        <svg className="inline m-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="rgb(255, 90, 121)"  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                        by   <a className="text-footerColor" href="#">Angel eyes</a></h3>
                </div>

                <div className="w-full text-center">
                    <nav className="text-footerColor">
                        <Link href="https://www.bibooo.cn/pages/about" className={styles.apding}>
                            About
                        </Link>
                        <Link href="https://bibooo.cn/" className={styles.apding}>
                            Blog
                        </Link>
                        <Link href="https://github.com/Bibooo25730" className={styles.apding} >
                            Github
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
import Layout from "../components/Layout";
import styles from "./about.module.css"
export default function about(){
    return (
        <Layout>
                <main className="font-zpix max-w-3xl mx-auto block p-6 ">
                    <h1 className="text-center text-3xl mb-2 transition-all">关于</h1>
                    <div className="typo_typo__Nf2TS py-5">
                        <h3 className="text-2xl mb-2">Hi there 👋, this is Bibooo</h3>
                        <h3 className="text-2xl mb-2">Why  ✨ <em>Bibooo</em> ✨?</h3>
                        <ul className={styles.ul}>
                            <li>Bibo的身法简直就是一种艺术。</li>
                            <li>一种站在世界巅峰环视全球的感觉！简单却又华丽！</li>
                            <li>所有的溢美之词都不能表达我的崇拜！</li>
                        </ul>
                        <h3 className="text-2xl mb-2">Hobbies</h3>
                        <ul className={styles.ul}>
                            <li>🔭看书</li>
                            <li>👯修道 （奇门遁甲，易经，推背图）</li>
                            <li>🌱CSKZ</li>
                            <li>😄写码</li>
                            <li>🐤开源&amp;分享&amp;无偿</li>
                        </ul>
                        <h3 className="text-2xl mb-2">call me</h3>
                        <p>📫 <a target="_self" href="mailto:Bibooo@88.com">Bibooo@88.com</a></p>
                        <h3 className="text-2xl mb-2">My Github</h3>
                        <p>⚡ Bibooo</p></div>
                </main>
        </Layout>
    )
}
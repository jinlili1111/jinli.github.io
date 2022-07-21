import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Online from '../components/online'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
      <title>{siteTitle}</title>
      </Head>

      <div class="home">

        <h1 class="title">
          欢迎来到 {siteTitle}
        </h1>

        <p class="description">
          玩的开心哦！
        </p>

        <div class="text-center py-4">
          
          <div class="stats bg-primary text-primary-content servers">
            <Online server="近离2.8服" />
            <Online server="3.0尝鲜服" />
            <Online server="备用" />
          </div>

        </div>
        
        <p class="text-center">
          服务器地址是输入到代理里面的，请勿将其直接输入浏览器，不会请进群<br/>
          电脑的端口留空或者输443就好 <br/>
        </p>

        <p class="description">
        <a href="https://jq.qq.com/?_wv=1027&k=3hgYbb9U" target="_blank" rel="sponsored">Q群|教程</a>
        </p>

      </div>
    </Layout>
  )
}

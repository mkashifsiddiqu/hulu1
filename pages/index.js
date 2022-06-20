import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import request from '../utlity/request'
import Result from '../components/Result'
export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>HuluPk</title>
        <meta name="description" content="website Is Develop by Kashif" />
      </Head>
      {/* header of Website  */}
      <Header/>
      <Nav/>
      <Result results={results}/>
    </div>
  )
}
export async function getServerSideProps(context){
  const genre = context.query.genre;
  const reqt = await fetch(`https://api.themoviedb.org/3/${request[genre].url 
  || request.fetchTrending.url}`).then((res)=>res.json())
  return {
    props:{
      results:JSON.parse(JSON.stringify(reqt.results)),
    }
  }
}

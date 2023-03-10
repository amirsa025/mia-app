import Head from 'next/head'
import Image from 'next/image'
import Navbar from "@/app/component/Navbar";
import SectionItem from "@/app/component/sectionItems";
import MobileHome from "@/app/component/Mobile/Home-Mobile";




export default function Home() {

  return (
    <>
      <Head>
        <title>Mia Application </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/favicon.png" />
      </Head>
      <div className=" md:pt-[68px] text-white  md:pr-[9.25rem] lg:pl-[7.25rem] xl:lg:pl-[9.25rem] hidden md:block ">
         <Navbar/>
          <div className="grid grid-cols-2 ">
            <div>
              <div className={"text-white"}>
                <SectionItem/>
              </div>
            </div>
            <div className={"md:flex md:items-center  md:justify-center md:ml-12 lg:ml-0"}>
              <div >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/image/Group.png" alt=""  className={"md:max-w-lg lg:max-w-xl  xl:max-w-2xl  max-w-screen-0"}/>
              </div>
            </div>
          </div>

      </div>
      {/*Moblie*/}
     <MobileHome/>
    </>
  )
}

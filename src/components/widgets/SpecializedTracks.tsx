"use client"
import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "../shared/QuarterBox";
import { programsData } from "@/data/CoreCourses";
import Image from "next/image";
import { useState } from "react";

const SpecializedTracks = () => {
const [selectetItem, setSelectedItem]= useState("wmd")

const selectedItemData = programsData.find((item) => item.slug === selectetItem )
  return (
   <section>
    <Wrapper>
{/* header */}
<div>
<h2 className="text-5xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
<p className="mt-3 text-xl text-slate-600 max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
</div>

<div className="mt-10 flex gap-x-6 gap-y-8">
{/* content left */}
<div className="shadow-xl basis-8/12 rounded-xl border border-slate-200 py-8 px-8">
    <h4 className="text-primary text-lg font-medium">Specialized Program</h4>
    <h3 className="text-2xl font-bold">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
    <p className="text-lg text-slate 600 mt-2">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
</p>
<button className="text-primary text-xl mt-4 underline flex gap-2 items-end">Learn More<svg className="mb-1.5" width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
</svg>

</button>
<div className="flex gap-4 mt-8">
  <QuarterBox 
  description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
  header="Quarter IV"
  number={4}
  haveBorder={false}
  />

  <QuarterBox 
  description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
  header="Quarter V"
  number={5}
  haveBorder={false}
  />
</div>
</div>

{/* content right */}
<div className="px-4  space-y-4 py-6 basis-4/12 bg-slate-100 flex-1 ">
  {
    programsData.map((item, i) => (
<div onClick={() => setSelectedItem(item.slug)} key={item.slug}className="flex gap-x-4 items-center cursor-pointer">
    <div className="flex-shrink-0 h-24 w-36">
  
  <Image src={item.image} alt={item.header} className={"h-24  object-cover rounded-md"} />
  </div>
  <div>
<h4 className="text-primary font-medium">Specialized Program</h4>
<h3 className="text-xl font-semibold">{item.header}</h3>
  </div>
</div>
    ))
  }
  

 

</div>
</div>

    </Wrapper>
   </section>
  )
}

export default SpecializedTracks
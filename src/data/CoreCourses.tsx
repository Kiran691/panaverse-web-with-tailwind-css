import Wrapper from "@/components/shared/Wrapper"
import Web3Img from "@/assets/images/metaverse.png"
import AiImg from "@/assets/images/ai.png"

export const programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: Web3Img,
        quarters:[
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number:4
    
               
            },
            {
                header: "Quarter V",
                description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number:5
            },
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: AiImg,
        quarters:[
            {
                header: "Quarter IV",
                description:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number:4
            },
            {
                header: "Quarter V",
                description:"AI-361: Deep Learning and MLOps",
                number:5
            },
        ]
    },
]
  
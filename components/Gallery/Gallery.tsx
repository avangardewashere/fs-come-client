 'use client'

import { Tab } from "@headlessui/react"
import Image from "next/image"
import {Image as ImageType } from "@/types"
const Gallery = () => {
  return (
    <div>
      <Tab /> 
      <Image /> 
      <span>Gallery</span>
    </div>
  )
}

export default Gallery

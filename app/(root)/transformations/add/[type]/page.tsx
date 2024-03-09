import Header from '@/components/Shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'

const AddTransformationTypePage = ({ params: { type }} : SearchParamProps) => {
  const transformation = transformationTypes[type]
  return (
    <Header 
      title={transformation.title} 
      subtitle={transformation.subTitle}
    />
  )
}

export default AddTransformationTypePage
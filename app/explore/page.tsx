"use client"

import ExploreComponent from '@/components/features/explore'
import { useRocketHooks } from '@/sdk/hooks'
import React from 'react'

const Explore = () => {
  return (
    <ExploreComponent {...useRocketHooks()}/>
  )
}

export default Explore
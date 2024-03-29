import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterP from './Log/RegisterP'
import LoginP from './Log/LoginP'
import Chart1 from './Charts/Chart1'
import Dashboard from './Dashboard'
import Chart2 from './Charts/Chart2'
import Subscription from './PaymentPart/Subscription'
import AllCharts from './AllCharts'

function MainFile() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<RegisterP />} />
            <Route path='/login' element={<LoginP />} />
            <Route path='/chart1' element={<Chart1 />} />
            <Route path='/chart2' element={<Chart2 />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/chart' element={<AllCharts />} />
        </Routes>
    </div>
  )
}

export default MainFile
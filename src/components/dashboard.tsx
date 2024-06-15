"use client"
import React, { useContext } from 'react'
import DashboardTitle from './dashboardTitle'
import Networks from './networks'
import TransparentButton from './transparentButton'
import HeroButton from './buttons'
import Airtime from './airtime'
import MobileData from './mobileData'
import { AppContext } from '../context/provider'

function Dashboard() {
  const { activeTab, changeToAirtime, changeToMObileDate } = useContext(AppContext)

  return (
    <div className="dashboard mt-12 flex gap-8 w-full min-h-screen">
      <div className="payment-board p-16 basis-3/4 rounded-2xl">
        <DashboardTitle paragraph='Enjoy the convenience of paying bill with ease.' heading='Pay bill with ease' />
        <div className="board-tabs-container flex w-full h-12">
          <div className={`${activeTab == "airtime" && "active"} tab-1 h-full flex items-center justify-center  flex-1`} onClick={changeToAirtime}>
            <h4>Buy aritime</h4>
          </div>
          <div className={`${activeTab == "mobileData" && "active"} tab-1 h-full flex items-center justify-center  flex-1`} onClick={changeToMObileDate}>
            <h4>Buy data</h4>

          </div>
          <div className="tab-3  h-full  flex items-center justify-center flex-1">
            <h4>Buy utilites</h4>

          </div>

        </div>
        {
          activeTab == "airtime" ? <Airtime /> : <MobileData />
        }


      </div>
      <div className="advert-board basis-1/4 flex flex-col gap-8">
        <div className="shop-adert rounded-2xl basis-2/3 w-full"></div>
        <div className="shop-adert rounded-2xl basis-1/3 w-full"></div>
      </div>
    </div>
  )
}

export default Dashboard

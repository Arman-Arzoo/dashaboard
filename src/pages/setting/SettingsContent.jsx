import React from 'react'
import GeneralSetting from './GeneralSetting'
import {Route} from "react-router-dom"
import AlertNotification from './AlertNotification'
import PaymentSetting from './PaymentSetting'
import SupportSetting from './SupportSetting'
import ProfileSetting from './ProfileSetting'

export default function SettingsContent() {
    return (
        <div className="pt-3 pr-2 ">
            <Route path="/setting/general-setting" component={GeneralSetting}></Route>
            <Route path="/setting/alert-notification" component={AlertNotification}></Route>
            <Route path="/setting/payment-setting" component={PaymentSetting}></Route>
            <Route path="/setting/support-setting" component={SupportSetting}></Route>
            <Route path="/setting/profile-setting" component={ProfileSetting}></Route>
        </div>
    )
}

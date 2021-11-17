import React from "react";
import GeneralSetting from "./GeneralSetting";
import { Route } from "react-router-dom";
import AlertNotification from "./AlertNotification";
import PaymentSetting from "./PaymentSetting";
import SupportSetting from "./SupportSetting";
import ProfileSetting from "./ProfileSetting";

export default function SettingsContent() {
  return (
    <div className="pt-3 pr-2 ">
      <Route
        path="/dashboard/setting/general-setting"
        component={GeneralSetting}
      ></Route>
      <Route
        path="/dashboard/setting/alert-notification"
        component={AlertNotification}
      ></Route>
      <Route
        path="/dashboard/setting/payment-setting"
        component={PaymentSetting}
      ></Route>
      <Route
        path="/dashboard/setting/support-setting"
        component={SupportSetting}
      ></Route>
      <Route
        path="/dashboard/setting/profile-setting"
        component={ProfileSetting}
      ></Route>
    </div>
  );
}

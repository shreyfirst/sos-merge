import React from 'react'
import axios from "axios";

const postUserNotificationToken = async (data) => {
    const options = {
      method: "POST",
      url: "https://merge-user-id.shrey.workers.dev",
      body: {
        id: data.id
      }
    };
  
    return axios.request(options).catch(err=>console.log(err))

  };

const postCurrentLocation = async (data) => {
    const options={
        method: "POST",
        url: "https://merge-location.shrey.workers.dev",
        body: {
            location: {
                lat: data.lat,
                long: data.long
            }
        }
    }
    return axios.request(options).catch(err=>console.log(err))
}

const alertVicinityAPI = async(data) => {
    const options = {
        method: "POST",
        url: "https://merge-alert.shrey.workers.dev",
        body: {
            location: {
                lat: data.lat,
                long: data.long
            }
        }
    }
    return axios.request(options).catch(err=>console.log(err))
}

  export default {postUserNotificationToken, postCurrentLocation, alertVicinityAPI}

  
import {test, expect} from "@playwright/test"
import { request } from "http"

test("Create post request with static data", async({request})=>{

 const requestBody  = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-09-09",
        "checkout" : "2026-10-10"
    },
    "additionalneeds" : "Breakfast"
}

// Send post request
 const responseBody = await request.post("/booking",{data:requestBody});

 //console.log(await responseBody.json());

    const responseJson = await responseBody.json();
    console.log(responseJson);

  // validate the status code
  expect(responseBody.status()).toBe(200);

  // validate body 
   expect(responseJson).toHaveProperty("bookingid");
   expect(responseJson).toHaveProperty("booking");
   expect(responseJson).toHaveProperty("booking.additionalneeds")

});

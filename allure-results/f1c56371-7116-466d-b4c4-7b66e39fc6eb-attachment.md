# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTest\post_api_request_createbooking.spec.ts >> Create post request with static data
- Location: tests\apiTest\post_api_request_createbooking.spec.ts:4:5

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test"
  2  | import { request } from "http"
  3  | 
  4  | test("Create post request with static data", async({request})=>{
  5  | 
  6  |  const requestBody  = {
  7  |     "firstname" : "Jim",
  8  |     "lastname" : "Brown",
  9  |     "totalprice" : 111,
  10 |     "depositpaid" : true,
  11 |     "bookingdates" : {
  12 |         "checkin" : "2026-09-09",
  13 |         "checkout" : "2026-10-10"
  14 |     },
  15 |     "additionalneeds" : "Breakfast"
  16 | }
  17 | 
  18 | // Send post request
> 19 |  const responseBody = await request.post("/booking",{data:requestBody});
     |                                     ^ TypeError: apiRequestContext.post: Invalid URL
  20 | 
  21 |  console.log(responseBody.json());
  22 | })
```
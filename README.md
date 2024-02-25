## EXECUTE
**Install dependencies:**

```bash
$ yarn install
```

This command downloads and installs the dependencies required for the project.

**Start the project:**

```bash
$ yarn start
```

This command initiates the build process for the project and starts the application.



<br/><br/>

## FOLDER STRUCTURE

> /src
>
> - /assets
> - /components
> - /apis
> - /pages
> - /store

- **/assets:** This directory serves as a repository for images and other static files. It's the designated location for storing non-code assets used throughout the application.

- **/components:** Within this folder, reusable components are stored. These components are designed to be used across different parts of the application, contributing to a modular and maintainable codebase.

- **/apis:** The /apis directory is dedicated to handling API-related logic. Code responsible for making API calls and managing data from the server is likely stored here, promoting a clean separation of concerns.

- **/pages:** In the /pages folder, each component corresponds to a specific page in your application. This structure aids in organizing and managing the components associated with distinct sections or views.

- **/store:** The /store directory houses logic related to global state management using Zustand. This is where you manage the application's overarching state, allowing for centralized control and access to shared data across various components.

<br/><br/>


## FEATURES
### Business Owner Features
1. Acquiring Materials
Input: Types of materials, Quantity, Desired condition, Produced items, Points per weight, Pickup restrictions/available areas
Points per weight are flexible, akin to delivery tips on food delivery platforms.
Notification: Inform users if provided materials are in a lower condition than expected, indicating that points may not be awarded.
2. Confirmation of Material Pickup Requests
Review material supply requests: Quantity, Condition images, Pickup location
Confirm or cancel pickup requests, set pickup dates.
Cancellation requires providing a reason.
Mark pickups as complete and award points based on material condition.
3. Upcycled Product Upload
Input: Main product image (thumbnail), Product description, FAQ, etc.
Include review and 1-to-1 inquiry sections.
4. Sales Record Review
Access product-specific sales records.
5. Point Usage History + Recharge
Preload and utilize points.
Review point usage history.
### Consumer Features
1. Material Supply Request
Input: Quantity, Condition images, Pickup location
Users can send pickup requests by pressing the request button on material search listings.
2. Purchase of Upcycled Products
Browse and purchase upcycled products.
3. My Page
Material Supply History
Check pickup confirmation/cancellation status.
Review points earned upon material pickup.
(Additional) Write reviews or rate business owners.
Product Purchase History
Write reviews.
My Written Reviews
Inquiries I've Made
4. Point Accumulation/Usage History
Review points earned for material supply.
Review points used.

import img1 from "../public/img/profile_icon.svg";
import img2 from "../public/img/order-list.svg";
import img3 from "../public/img/booking_icon.svg";
import img4 from "../public/img/package_icon.svg";
import img5 from "../public/img/wishlist_icon.svg";

let dashboardlinkUser = [
  // { name: "Wishlist", path: "/dashboard/Wishlist", img: img5 },
  { name: "Profile", path: "/dashboard/profile", img: img1 },
  { name: "My booking", path: "/dashboard/my-booking", img: img3 },
];

let dashboardlinkVendor = [
  { name: "Profile", path: "/dashboard/profile", img: img1 },
  { name: "Order list", path: "/dashboard/order-list", img: img2 },
  { name: "My package", path: "/dashboard/my-package", img: img4 },
  { name: "Withdraw", path: "/dashboard/withdraw", img: img3 },
];
export { dashboardlinkUser, dashboardlinkVendor };

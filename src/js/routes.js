import HomePage from "../pages/home.vue";
import AboutPage from "../pages/about.vue";
import FormPage from "../pages/form.vue";
import SigninPage from "../pages/signin.vue";
import SignupPage from "../pages/signup.vue";
import OrderPage from "../pages/order-details.vue";
import ShoppingCartPage from "../pages/shopping-cart.vue";
import TrackingPage from "../pages/tracking.vue";
import WishlistPage from "../pages/wishlist.vue";
import NotificationsAppPage from "../pages/notifications-app.vue";
import RewardsPage from "../pages/rewards.vue";
import ProfilePage from "../pages/profile.vue";
import WriteRiviewsPage from "../pages/write-reviews.vue";
import DeliveryPage from "../pages/delivery-form.vue";
import CollectionPage from "../pages/collection.vue";
import PaymentPage from "../pages/payment.vue"
import InvoicePage from "../pages/invoice.vue";
import BacaanPage from "../pages/bacaan.vue";
import KwitansiPage from "../pages/kwitansi.vue";
import LokasiTujuanPage from "../pages/lokasi-tujuan.vue";
import BarangDiTerima from "../pages/barang-diterima.vue";
import JadwalPengiriman from "../pages/jadwal-pengiriman.vue";
import HasilScan from "../pages/hasil-scan.vue";
import PackingPage from "../pages/packing.vue";


import DynamicRoutePage from "../pages/dynamic-route.vue";
import RequestAndLoad from "../pages/request-and-load.vue";
import NotFoundPage from "../pages/404.vue";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/packing/",
    component:PackingPage,
  },
  {
    path: "/hasil-scan/",
    component: HasilScan,
  },
  {
    path: "/jadwal-pengiriman/",
    component: JadwalPengiriman,
  },
  {
    path: "/barang-diterima/",
    component: BarangDiTerima,
  },
  {
    path:"/lokasi-tujuan/",
    component: LokasiTujuanPage,
  },
  {
    path: "/kwitansi/",
    component: KwitansiPage,
  },
  {
    path: "/bacaan/",
    component: BacaanPage,
  },
  {
    path: "/invoice/",
    component: InvoicePage,
  },
  {
    path: "/payment/",
    component: PaymentPage,
  },
  {
    path: "/collection/",
    component: CollectionPage,
  },
  {
    path: "/delivery/",
    component: DeliveryPage,
  },
  {
    path: "/write-reviews/",
    component: WriteRiviewsPage,
  },
  {
    path: "/profile/",
    component: ProfilePage,
  },
  {
    path: "/rewards/",
    component: RewardsPage,
  },
  {
    path: "/notifications-app/",
    component: NotificationsAppPage,
  },
  {
    path: "/wishlist/",
    component: WishlistPage,
  },
  {
    path: "/tracking/",
    component: TrackingPage,
  },
  {
    path: "/shopping-cart/",
    component: ShoppingCartPage,
  },
  {
    path: "/order/",
    component: OrderPage,
  },
  {
    path: "/home/",
    component: HomePage,
  },
  {
    path: "/register/",
    component: SignupPage,
  },
  {
    path: "/login/",
    component: SigninPage,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/form/",
    component: FormPage,
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;

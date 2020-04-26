'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "6ef9f5c3c99978bbff1c33347a7a3d62",
"favicon.ico": "e4b6258579b4e1284a54c547e2ed7a71",
"index.html": "95a2e82ee2603ddc79f38edb16566761",
"/": "95a2e82ee2603ddc79f38edb16566761",
"apple-icon.png": "3ad4a749741e718a20ae447e4c3a3c0a",
"apple-icon-144x144.png": "716b2f0fdf4a0999def2b0fc6c6b9769",
"android-icon-192x192.png": "ba3a23848531c95ae6d731f7e1ea1f59",
"apple-icon-precomposed.png": "3ad4a749741e718a20ae447e4c3a3c0a",
"apple-icon-114x114.png": "b977b3d140092b7de525900162212733",
"main.dart.js": "e68f6003ef0b6b7b9b72c7310ecdb5e6",
"ms-icon-310x310.png": "0685054745e7579579dbd7939bdad0c6",
"ms-icon-144x144.png": "716b2f0fdf4a0999def2b0fc6c6b9769",
"apple-icon-57x57.png": "d343d6895e133b2a9e3e7e05782d86f5",
"apple-icon-152x152.png": "9a67359e17a116b93377f2c9e267a515",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"ms-icon-150x150.png": "d55d79f5d9dbd0e193bb2380790f2703",
"android-icon-72x72.png": "1a737e0fb6f66857cf3eee01708e0f25",
"android-icon-96x96.png": "7bae46598d428b3b967ca4910a3601e7",
"android-icon-36x36.png": "8c10aeb0bf43912c7ecf000d88f57999",
"apple-icon-180x180.png": "25e252aa4f64c27a8a7e14a8304e7798",
"favicon-96x96.png": "7bae46598d428b3b967ca4910a3601e7",
"icons/Icon-192.png": "c4c561091b623cc0db7dec0ae97a83a2",
"icons/Icon-512.png": "1ee07fb483dffa7a7bc56138cdfaa3c0",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"android-icon-48x48.png": "b02a2271aefe466619af472091c69479",
"apple-icon-76x76.png": "1a30cc7b0ab8c477658d6d2f88589aeb",
"apple-icon-60x60.png": "7a4e46243a6943badcb2c06675db1e97",
"app.html": "750a370ba6cc880233f248e46329de7a",
"assets/LICENSE": "0fd6adc1ec0e6f3e32cc88876075f6d8",
"assets/AssetManifest.json": "9539467cb6f5aca5a13b68072f90ec54",
"assets/FontManifest.json": "92f8fe616884b539a8c9a6b2ae33b130",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/line_awesome_icons/assets/fonts/icon_font.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/lives2504_02.json": "37049f23e0376929cbbc7833848e4ac5",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "716b2f0fdf4a0999def2b0fc6c6b9769",
"apple-icon-72x72.png": "1a737e0fb6f66857cf3eee01708e0f25",
"apple-icon-120x120.png": "cc43da10a2a4e51fa43dec4b87116ffc",
"favicon-32x32.png": "0dc195a5260d36856b1c8393f8cec918",
"ms-icon-70x70.png": "95581ad07366da746a61e45b4ae3218f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

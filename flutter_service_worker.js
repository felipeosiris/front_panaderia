'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "30feeea21fbe596a4d705142788ee755",
"version.json": "19642e0f279e1b6f7d7ebdb3ac320f9a",
"index.html": "2e0c853dc8c4227b5fd34ca39c68bc65",
"/": "2e0c853dc8c4227b5fd34ca39c68bc65",
"main.dart.js": "d38d5ff81feb65bf833fd38f207dd14b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dc523d1773aa1b8a200ea6f6ce9de9ca",
"assets/AssetManifest.json": "d079f77a7f616094895e661042fd40e1",
"assets/NOTICES": "b93278de2edb214af00622b956f98f68",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6ec69ed8ae706102588bca2c1be8fc4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "86286e5e069cc43811f65e1e78694634",
"assets/fonts/MaterialIcons-Regular.otf": "07211f27c7d8b9b77c29cdc52037bc88",
"assets/assets/images/2350502_00.jpg": "e558c74a99f38f6294114ea9cb0eb887",
"assets/assets/images/2350510_00.jpg": "c5290f9c0262fdfd5d833c8f4c941aac",
"assets/assets/images/7501253612697_00.jpg": "6849ebe4422bf6b83343698dd0ddc2e2",
"assets/assets/images/2350512_00.jpg": "0579ec69a3997f577e599b8acd8cfc96",
"assets/assets/images/2350500_00.jpg": "fab711f4eb3b409e2c4e2c93aae4017c",
"assets/assets/images/2350528_00.jpg": "f77574d7a68824affabf94c7bdd65dd2",
"assets/assets/images/2350436_00.jpg": "24a3e79145382e3585b3eb1516cfdd13",
"assets/assets/images/7501253612062_00.jpg": "9f032725f4e32ee4e9a98204a9bf76be",
"assets/assets/images/2350532_00.jpg": "46e51a98947d431fdeac155649a1eb84",
"assets/assets/images/2350432_00.jpg": "43934d541dba511c78dc03f738b4454d",
"assets/assets/images/2350504_00.jpg": "4e3f9a9ecb1a0c904fc8adcb07b4d3de",
"assets/assets/images/2350508_00.jpg": "0e6328a33a95f5eb49c26c1b1b9b8752",
"assets/assets/images/2350516_00.jpg": "9e9a4ed618ed6e504c553f973da5ddb0",
"assets/assets/images/2350530_00.jpg": "d9adbbf130c665f4a546d0811930d9b1",
"assets/assets/images/2350430_00.jpg": "88fe57e83fd8a869d06a3c5d38deef73",
"assets/assets/images/2350514_00.jpg": "7ff7298293c76e9c28b179dd54e2d897",
"assets/assets/images/2350506_00.jpg": "cd84352a00e1a5f76c23b20a2640fb7f",
"assets/assets/images/2350556_00.jpg": "2cf40ba702461d19d5fab3847f6e085f",
"assets/assets/images/2350560_00.jpg": "09d4e622f8ae649425e7f4c01d0fbe86",
"assets/assets/images/2350572_00.jpg": "49b86714f804f4105079a110c65b9288",
"assets/assets/images/2350558_00.jpg": "bf906e61afd938c71145d2057f39ac65",
"assets/assets/images/2350546_00.jpg": "b68ba6e1b932aad02b68276fa476cbad",
"assets/assets/images/2350570_00.jpg": "9e688fa96862e491f6af560a9814f9f1",
"assets/assets/images/2350562_00.jpg": "a28290151b677d704448e99653622dbe",
"assets/assets/images/7501253612079_00.jpg": "a4a95716655b3e3bd432677ddeb56a26",
"assets/assets/images/2350566_00.jpg": "6b6cda08349ed643672fa6c1195420d2",
"assets/assets/images/2350574_00.jpg": "f2a2d2173e61abb154de3314c405c80a",
"assets/assets/images/2350542_00.jpg": "b0117e4bcf0f0986dca1105a5ea4cba5",
"assets/assets/images/2350442_00.jpg": "91341d7b662c006ec7da631ee04d95ed",
"assets/assets/images/2350576_00.jpg": "a3506c513619c975eb4d8f61815d5112",
"assets/assets/images/2350568_00.jpg": "20044ad894c6d8ff331f2da45d3ebb5f",
"assets/assets/images/2350468_00.jpg": "eafe2302705f0883298d31821f49dc05",
"assets/assets/images/2350540_00.jpg": "4e3e5543dd5993ef8550bb675f5fca2c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a568dfc76a6d20d35075f1e0076ba6fa",
".git/config": "c9d83d7476d3e5c5fca11aaa7b55dd0a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "21346aedbe9f7eae81bcd096efc4799f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "65e9ceba45805637435167e55c97920f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "274edfc4becf06b4873c3f134e62d78c",
".git/logs/refs/heads/master": "274edfc4becf06b4873c3f134e62d78c",
".git/logs/refs/remotes/origin/master": "a25aa8fcf7fe38c2ad9aeb2e20a553bd",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/0c/687b7b5b884cae2aea121d49b8d2afe56d48c8": "5a5d825ca0ce935dabef23bdf92fb124",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/28c08a92f6ae8cf9b3f716188c4f1144314451": "ac373e5e878426d4aaabf8e953363f78",
".git/objects/0e/6c5fdad225b8c242e6cf1cdaec32d7599b361e": "efdb1fceb58fd91f8b916d48691a94cf",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1d/04d6fcf60167f3da7790a43a7e7c81ceedb9e2": "57200f66a03f1bf4f6bf1334ab7315cf",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/438ce0f7da16fb1e94c714abd3f3f642cde028": "c270ed685c974798074649b88b22fae5",
".git/objects/2a/79b6f00303f7ae506992ba02586dc3bf2666b5": "142cf445585671616dfacfb0f7621080",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/a7a32947351c53090886e9195067e927ecb0c9": "5a4f3025c5bfa3c4c394302771bf9811",
".git/objects/2f/7efbeab578c8042531ea7908ee8ffd7589fe46": "aa9408a44a7560b833dd793a6cb10ddd",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/ec4d0765fce55dc3f9db47fb8015f259adec54": "573153d35d6eae3d4ecee1728a165b0e",
".git/objects/4b/a7855b93503835d93a0413f8c3f28f8548c456": "9bbe01f796746f607554f08e1c1435e4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/578af838edc7c969f2108e468f28eaa16488e8": "409414663d5fbe607b4244069e83a82d",
".git/objects/5f/d758584872732a11e7b52f716faf81e0968ebc": "b15f2454d499a198b19ece45ea3b4e63",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6e/8a2614a8f18b57e03867eb5ef3ac367b0cc27d": "6fe32df0eed060e2be94a7a98d746a91",
".git/objects/6f/c61d981d52ca2af026e994fe5c2a38d96b15f1": "a83eada62a133c6c0d10c099215a1c30",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9986445776635b2831ce887da4ea03ef27bb1a": "4699413aafa67f771d2fbf7c7376132f",
".git/objects/7b/ec09f09a85b7413854ce47e5a6c938b765e078": "0dfaa16e164c384a3a4f19ccae917738",
".git/objects/81/4b73fcfdffcaa14e8fb90f0e9d80f3f5224cd4": "e54547de9b42b6c43a6e1cac785d15c2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bde300bf76514ba6b41295e981a4946ecd9be0": "f29f45e613e6699cd23497b14ee3b09b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/72ee6b136ff58e3f2c214ecefb9cf4e21c33a1": "4ae488457e1d81665f69d7644b3b8a8c",
".git/objects/9e/b2ec8f5b22e49f158c9c0865aae867dc9daa36": "997cac529ec5ba831d6937fdb5c2e229",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/9158d805e999ecd0cc68b8f4849ed0b73b2892": "656c704ca198805a521eb35f33866177",
".git/objects/a9/24b25d71db00c04b26907da6ccf837f970b592": "d376e18b47b10ba6049f505fe4ee3018",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b0/abb24b94a847106dd2a1bb4dad83bb06234e52": "c9e58e990238774d4cbc0272ba95c733",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/786463c4cfe412f60f7a480db615cad54fda1b": "b665ec6a923e25bfae27d302a7ac82bf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/74f9ae3f9d2cf41d3d9c8ab4d15a03733ed9dc": "75190ea006439a48c385f9d388886a44",
".git/objects/c8/3c1b3d746d9d39f2c5865a96346e363a947c76": "8622f54244fc5b5aec3ba05cc929b8bf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/8786c0c2a70ed5643142d0360dbbac4510fae6": "db332c7120d38e639b979307125f71c9",
".git/objects/d9/0a5196483414d5b26a32f1e0d0dfcc860b26fd": "4db8493794c3c55ab6ad21439cbc54b9",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/78e3594a18b2bfcaf2ace015ddb698ffa4a134": "ebedc6f8fe6f9722f0e855c286fd45a5",
".git/objects/e3/56ec84a4a4688b85e30df6560d8641f8cda21e": "07468a2e27edb5dd7ff74015689d6a56",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/2fb5b015fc0b3a724939ed67c36cbb5344f7a4": "32e9c87b2341b6ab959d56f2bb8d8a3a",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/d324a9169345d0ce9fe232dc0c0c67cf71b462": "a5b83c239a1845bc9412f3dd0ebe6262",
".git/objects/f7/bacc1ba001d415721e89b0dcc31a20573e8bc6": "581c1f2f79cb2b0c733f41adb557c651",
".git/objects/fe/21190cadb05bb780a34d1205fd7d2371ca9691": "9c8d0d8953074ca21455315d37271727",
".git/ORIG_HEAD": "aa52a298b1cb3d3fb9e4f23b8d58e692",
".git/refs/heads/master": "df0cf963536d8c070fdd2fdecea9f9e2",
".git/refs/remotes/origin/master": "df0cf963536d8c070fdd2fdecea9f9e2",
"1024.png": "033592d71b27a96416140bb6a45ef6ea",
"assets/AssetManifest.json": "b97ae56166f2fa1448f2ea1e9b0bb7da",
"assets/assets/fonts/CustomIcons.ttf": "b75a4bb2b81f009ebe1592cac99eb0e3",
"assets/FontManifest.json": "f8ec27312bf02bf4ac4f918c39934293",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4cd1647b0bc8e960cc3a1afc5c3af889",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon_bk.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba03752fe8f08a82cd814709cd484cce",
"/": "ba03752fe8f08a82cd814709cd484cce",
"main.dart.js": "09803004fd870f4a11cbc9b0d2610a4b",
"manifest.json": "f0486a54dc93d957c053d3176d7f6c90",
"version.json": "0b79c0c6bab131ce8cf0b8b4258b6b53",
"_config.yml": "d88166bbeaf9421921db9fb119080112"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

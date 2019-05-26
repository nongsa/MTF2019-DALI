/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

const version = "0.6.11";
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/styles/main.css`,
        `/scripts/main.min.js`,
        `/scripts/comlink.global.js`,
        `/scripts/messagechanneladapter.global.js`,
        `/scripts/pwacompat.min.js`,        
        '/styles/style.css',
        '/style-custom.css',
        '/style-responsive.css',
        '/style.css',
        '/menustyle.css',
        '/images/icon/MTF19_96x96.png',
        '/images/icon/MTF19_144x144.png',
        '/images/icon/MTF19_192x192.png',
        '/images/icon/MTF19_512x512.png',
        '/images/icon/MTF2019-logo.jpg',
        '/images/icon/mtco_favicon.png',
        '/program.html',
        '/program28.html',
        '/program29.html',
        '/partners.html',
        '/about-dali.html',
        '/Brian-Linden.html',
        '/contact.html',
        '/visa.html',
        '/Zhang-Hailin.html',
        '/images/Zhang-Hailin.png',
        '/faq.html',
        '/hotel.html',
        '/images/Jens.jpg',
        '/Jens-Thraenhart.html',
        '/Kanha-Sam.html',
        '/Latdaphone-Vongkhamheng.jpg',
        '/Latdaphone-Vongkhamheng.html',
        '/images/Ksnha.jpg',
        '/Mei-Zhang.html',
        '/Social-Feed.html',
        '/Steven-Schipani.html',
        '/images/Steven.jpg',
        '/transportation.html',
        '/images/Mei-Zhang.jpg',
        '/images/Latdaphone-Vongkhamheng.jpg',
        '/images/dali-international-hotel.jpg',
        '/images/cangshan-hotel-dali.png',
        '/images/Jereth-150x150.jpeg',
        '/images/Mei-Zhang-150x150.jpg',
        '/images/Jens-150x150.jpg',
        '/images/Brian-Linden-SquareCrop-150x150.jpg',
        '/images/Ksnha-150x150.jpg',
        '/images/Steven-150x150.jpg',
        '/photo.-copy-150x150.jpg',
        '/images/Zhang-Hailin-150x150.png',
        '/images/KKHIN-THAN-WIN-150x150.jpg',
        '/MTF18_PostReport_06.pdf',
        '/speakers.html',
        '/information.html',
        '/images/Sojern.jpg',
        '/images/Odyssey.jpg',
        '/images/MBI.png',
        '/images/EXO.png',
        '/images/CO.png',
        '/images/AUSAID.png',
        '/images/ADB.png',
        '/images/tourism-insider.png',
        '/images/travindy.png',
        '/images/trweekly.jpg',
        '/images/travel-news-asia.jpg',
        '/images/travelindexx.jpg',
        '/images/travel-daily-news-asia1.jpg',
        '/images/travhq.jpg',
        '/images/MM.jpg',
        '/images/MT.jpg',
        '/images/hotel-intel.jpg',
        '/images/eglobal-travel-media.jpg',
        '/images/discover-350.jpg',
        '/images/bangkok101.jpg',
        '/images/asean-travel.jpg',
        '/images/unwto.jpg',
        '/images/pata.jpg',
        '/images/DM.jpg',
        '/images/asean-logo1.jpg',
        '/images/Gokunming.jpg',
        '/images/WWF.png',
        '/images/Refill.png',
        '/images/mtco.jpg',
        '/images/China.jpg',
        '/images/vietnam.jpg',
        '/images/TT.jpg',
        '/images/Wild-China.jpg',
        '/images/ASEAN-China.jpg',
        '/images/CS-New-logo.jpg',
        '/images/Linden.jpg',
        '/images/myanmar.jpg',
        '/images/laos-350x200.png',
        '/images/Yunnan.jpg',
        '/images/dalisanta.jpg',
        '/images/cambodia.jpg',
        '/css/bootstrap.css'
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
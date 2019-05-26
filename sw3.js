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
        `/sounds/airhorn.mp3`,
        '/styles/style.css',
        '/style-custom.css',
        '/style-responsive.css',
        '/style.css',
        '/menustyle.css',
        '/images/icon/MTF19_96x96.png',
        '/images/icon/MTF2019-logo.jpg',
        '/programe28.html',
        '/programe29.html',
        '/mainstyle.css',
        '/MTF19Forum.pdf', 
        '/Brian-Linden.html',
        '/Zhang-Hailin.html',
        '/hang-Hailin.html',
        '/Brian-Linden.html',
        '/Steven-Schipani.html', 
        '/Mei-Zhang.html',		
        '/Latdaphone-Vongkhamheng.html',
        '/Jens-Thraenhart.html',
        '/Kanha-Sam.html',
        '/partners.html',
        '/about-dali.html',
        '/transportation.html',
        '/visa.html',
        '/hotel.html',
        '/contact.html',
        '/faq.html',
        '/Social-Feed.html',
        '/MTF18_PostReport_06.pdf',
        '/speakers.html',
        '/program.html',
        '/information.html',
        '/icon/MTF2019-logo.jpg',
        '/images/Yunnan.jpg',     
        '/images/ADB.png',
        '/images/ASEAN-China.jpg',
        '/images/asean-logo1.jpg',
        '/images/asean-travel.jpg',
        '/images/AUSAID.png',
        '/images/bangkok101.jpg',
        '/images/combodia.jpg',
        '/images/China.jpg',
        '/images/CO.png',
        '/images/CS-New-logo.jpg',
        '/images/discover-350.jpg',
        '/images/discover-350.jpg',
        '/images/DM.jpg',
        '/images/eglobal-travel-media.jpg',
        '/images/EXO.png',
        '/images/Gokunming.jpg',
        '/images/hotel-intel.jpg',
        '/images/hotel4.jpg',
        '/images/laos-350x200.png',
        '/images/Linden.jpg',
        '/images/MBI.png',
        '/images/MM.jpg',
        '/images/mtco.jpg',
        '/images/myanmar.jpg',
        '/images/Odyssey.jpg',
        '/images/pata.jpg',
        '/images/Refill.png',
        '/images/Sojern.jpg',
        '/images/tourism-insider.png',
        '/images/travel-daily-news-asia1.jpg',
        '/images/travel-news-asia.jpg',
        '/images/travelingdexx.jpg',
        '/images/travhq.jpg',
        '/images/tnweekly.jpg',
        '/images/TT.jpg',
        '/images/unwto.jpg',
        '/images/vietnam.jpg',
        '/images/Wild-China.jpg',
        '/images/WWF.png',
        '/images/Zhang-Hailin.png',
        '/images/Steven.jpg',
        '/images/Brian-Linden-SquareCrop.jpg',
        '/images/Latdaphone-Vongkhamheng.jpg',
        '/images/Ksnha.jpg',
        '/font/fontawesome-webfont.ttf',
        '/stylesheet/style-responsive.css',
        '/stylesheet/style-custom.css',
        '/icon/mtco_favicon.png'
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
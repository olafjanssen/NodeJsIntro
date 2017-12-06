@title[Node.js® introductie]
# Inleiding op [Node.js®](https://nodejs.org)

#### Met voorbeelden en Q&A

---
@title[Voor we beginnen]
## Voordat we beginnen

Bekijk de presentatie via [GitPitch](https://gitpitch.com/olafjanssen/NodeJsIntro)

Download de voorbeelden op [Github](https://github.com/olafjanssen/NodeJsIntro)

---
@title[Wat is Node.js®]
## Wat is Node.js®

* **Kort:** Server-side JavaScript
* **Langer:** Heel efficient netwerk-applicatie framework.
<br>
* Er is dus geen DOM (HTML document)
* Command-line tool

---
@title[Voordelen Node.js®]
## Voordelen Node.js®

* **Snel** (vergeleken met JavaScript in browser)
* **Efficient** als server (dan bijv. Apache server) 
<br>
* Alles **async** (wel lastig programmeren)
* Uitgebreid ecosysteem ([npm](https://www.npmjs.com) package manager) en dus te gebruiken met allerlei devices en andere software.

---
@title[Voorbeelden]
## Voorbeelden

* [OpenCV](https://www.sitepoint.com/face-detection-nodejs-opencv/) - beeldherkenning
* [Johnny-Five](http://johnny-five.io/) - Arduino uitlezen/besturen
* [node-kinect](https://github.com/nguyer/node-kinect) - Kinect uilezen
* [Passport](http://www.passportjs.org/) - inloggen social media
* [Discord.io](https://medium.com/@renesansz/tutorial-creating-a-simple-discord-bot-9465a2764dc0) - Discord Chatbot
* Maar ook: build tools, live reload, uglify, scss (S4)

---
@title[Hosting]
## Hosting
Het hosten van je Node.js® applicatie is nog 'onhandig', maar kan voor kleine apps gratis.

* [Redhat OpenShift](https://developers.openshift.com/languages/nodejs/index.html)
* [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

---
@title[Installatie]
### Installatie

[https://nodejs.org](https://nodejs.org)

![logo](https://udemy-images.udemy.com/course/750x422/595294_bc81.jpg)

---
@title[Intro CLI]
### Command line interfaces

Code edit je gewoon in je *code editor*, maar het runnen, debuggen en modules toevoegen doe je in de Command Prompt / Terminal.

Als je hier nog nooit mee gewerkt hebt, is het nu de juiste tijd!

* Download the **cheat sheet** voor [Windows](http://www.cs.columbia.edu/~sedwards/classes/2015/1102-fall/Command%20Prompt%20Cheatsheet.pdf) of [Mac OSX/linux](https://www.git-tower.com/blog/posts/command-line-cheat-sheet)

---
@title[Node.js® runnen]
### Node.js® runnen 

Met `node` kan je code typen net als in de browser console.

Met `node <file.js>` start je code uit een js-file. Dit kan je stoppen met `CTRL-C`.

---
@title[NPM Package management]
## NPM Package management
Node Package Manager: [www.npmjs.com](https://www.npmjs.com/).

Start je eigen project met het commando `npm init`, dit maakt een `package.json` file in je project.

Voeg modules toe met `npm install --save <modulenaam>`. Vaak zie je dit ook staan in Gitgub repo READMEs.

---
@title[Basis Node.js®: modules gebruiken]
## Basis Node.js®

Gebruiken en inladen van modules.

---
@title[Basis Node.js®: modules maken]
## Basis Node.js®

Zelf een module maken.

---
@title[Toepassingen: web server]
## Node.js® als web server

Een typisch web stack:

* **Core:** Node.js®
* **HTTP server:** [Express](https://expressjs.com/)
* **HTML templates:** [Jade](http://jade-lang.com/)

---
@title[Toepassingen: API]
## Node.js® als API

Zet snel een goede en mooie API op met [Restify](http://restify.com/).

---
@title[Toepassingen: WebSockets]
## Node.js® met WebSockets

Real-time communicatie met web client (data-streaming, visualisatie van bijv. Arduino/Kinect-data, chat room).

* **Core:** Node.js
* **WebSockets:** [Socket.io](https://socket.io/) (server & client code)

---
@title[Toepassingen: databases]
## Node.js® met databases

Naast modules voor [MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp), is het ook eenvoudig te verbinden met [Firebase](https://www.npmjs.com/package/firebase) of [MongoDB](https://www.npmjs.com/package/mongoose) databases.

---
@title[Tips]
## Tips

* **NodeMon** module refreshed automatisch je webserver als je aanpassingen aan je code hebt gemaakt.

---



# Voorbeeld: 01-helloworld

### Vind de folder
Vind deze folder met je command prompt of terminal. Start de OSX `terminal` app op of klik op de link in Windows met de naam `Node.js Command Prompt`.

Ga dan naar de juiste folder, waar dit voorbeeld in staat (voor Windows gebruikers):

```bash
cd NodeJsIntro\examples\01-helloworld
```

### Check of Node.js goed geïnstalleerd is

Als Node.js correct werkt kan je de versie opvragen:

```bash
node -v
```

Werkt dit niet? Check dan of je de juiste Command Prompt hebt opgestart. Als het wel werkt kan je Node.js starten met:

```bash
node
```

Je komt dan in een soort console terecht (heet officieel [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)), waarin je JavaScript kan typen. Probeer eens iets te console-loggen:

```javascript
> console.log('Hello World!');
```

Probeer dan eens wat andere JavaScript dingen, zoals variabelen zetten en weergeven. Je sluit de REPL door `.exit` te typen of twee keer `CTRL-C` te drukken. Sluit **niet** je hele Command Prompt window, dat is nergens voor nodig!

### Node.js JavaScript files runnen

Meestal zal je uiteraard code in een code editor schrijven en opslaan in `.js`-files. Deze kan je ook runnen met het `node` commando.

```bash
node helloworld.js
```  

De code draait, eindigt, en je komt weer terug in de Command Prompt. Vaak zal je Node.js applicatie een soort server zijn die altijd blijft luisteren. Probeer maar eens het volgende voorbeeld te runnen waarin een interval blijft lopen.

```bash
node hellointerval.js
```

Je blijft elke seconde `Kiekeboe` zien. Sluit de applicatie wederom af met `CTRL-C`. Typen van `.exit` werkt nu niet, je kan nu geen code meer in de REPL typen.

### Klaar!
Easy-peasy? Mooi, op naar het volgende voorbeeld!
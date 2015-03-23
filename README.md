#Jingle Stanza

Jingle Stanzas is a utility for using [jxt](https://github.com/otalk/jxt/) to translate Jingle objects (from [jingle.js](https://github.com/otalk/jingle.js/)) to and from xml stanzas similar to [stanza.io](https://github.com/otalk/stanza.io/), but for use with an xmpp library other than stanza.io.

##Usage

```javascript
jingleStanza = require('jingle-stanza');
jingle = new Jingle()

jingle.on('send', function(data) {
    var xml = jingleStanza.getXml(data);
    myXmppServer.send(xml);
});

myXmppServer.on('iq:set:jingle', function(stanza) {
    var data = jingleStanza.getData(stanza);
    jingle.process(data);
});
```

'use strict';

var jingleStanza = require('jxt').createRegistry();

jingleStanza.use(require('jxt-xmpp-types'));
jingleStanza.use(require('jxt-xmpp'));

module.exports = {
  getXml: function (data) {
    var Iq = jingleStanza.getIq();
    return new Iq(data);
  },

  getMessageXml: function (data) {
    var Message = jingleStanza.getMessage();
    return new Message(data);
  },

  getData: function (stanza) {
    if (typeof stanza === 'string') {
      return jingleStanza.parse(stanza);
    }

    // Indicates the stanza is an Element rather than a DOMElement,
    // which is what JXT expects so let jxt parse it instead
    if (!stanza.localName && !stanza.namespaceURI) {
      return jingleStanza.parse(stanza.toString());
    }

    return jingleStanza.build(stanza);
  }
};

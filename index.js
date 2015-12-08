'use strict';

var jingleStanza = require('jxt').createRegistry();


jingleStanza.use(require('jxt-xmpp-types'));
jingleStanza.use(require('./stanzas/iq'));
jingleStanza.use(require('./stanzas/message'));
jingleStanza.use(require('./stanzas/error'));
jingleStanza.use(require('./stanzas/jingle'));
jingleStanza.use(require('./stanzas/rtp'));
jingleStanza.use(require('./stanzas/file'));
jingleStanza.use(require('./stanzas/iceUdp'));
jingleStanza.use(require('./stanzas/extdisco'));
jingleStanza.use(require('./stanzas/jingleMessage'));

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
        if (typeof stanza !== 'string') {
            stanza = stanza.toString();
        }
        return jingleStanza.parse(stanza);
    }
};

'use strict';

var jingleStanza = require('jxt').createRegistry();


jingleStanza.use(require('jxt-xmpp-types'));
jingleStanza.use(require('./stanzas/error'));
jingleStanza.use(require('./stanzas/iq'));
jingleStanza.use(require('./stanzas/jingle'));
jingleStanza.use(require('./stanzas/rtp'));
jingleStanza.use(require('./stanzas/iceUdp'));
jingleStanza.use(require('./stanzas/extdisco'));

module.exports = {
    getXml: function (data) {
        var Iq = jingleStanza.getIq();
        return new Iq(data);
    },

    getData: function (stanza) {
        if (typeof stanza === 'string') {
            return jingleStanza.parse(stanza);
        }
        return jingleStanza.build(stanza);
    }
};

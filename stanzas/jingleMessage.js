'use strict';

var NS = 'urn:xmpp:jingle-message:0';
var JINGLE_NS = 'urn:xmpp:jingle:apps:rtp:1';

module.exports = function (stanza) {
    var types = stanza.utils;

    var Accept = stanza.define({
        name: 'accept',
        namespace: NS,
        element: 'accept',
        fields: {
            id: types.attribute('id')
        }
    });

    var Propose = stanza.define({
        name: 'propose',
        namespace: NS,
        element: 'propose',
        fields: {
            id: types.attribute('id')
        }
    });

    var Description = stanza.define({
        name: 'description',
        namespace: JINGLE_NS,
        element: 'description',
        fields: {
            media: types.attribute('media')
        }
    });

    stanza.extend(Propose, Description, 'descriptions');

    var Retract = stanza.define({
        name: 'retract',
        namespace: NS,
        element: 'retract',
        fields: {
            id: types.attribute('id')
        }
    });

    var Reject = stanza.define({
        name: 'reject',
        namespace: NS,
        element: 'reject',
        fields: {
            id: types.attribute('id')
        }
    });

    var Proceed = stanza.define({
        name: 'proceed',
        namespace: NS,
        element: 'proceed',
        fields: {
            id: types.attribute('id')
        }
    });

    stanza.withMessage(function (Message) {
        stanza.extend(Message, Accept);
        stanza.extend(Message, Propose);
        stanza.extend(Message, Retract);
        stanza.extend(Message, Reject);
        stanza.extend(Message, Proceed);
    });
};

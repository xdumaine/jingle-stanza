/* global describe, it, beforeEach, afterEach */

import { assert } from 'chai';
import sinon from 'sinon';
import stanzas from './stanzas';
import stanzaObjects from './stanzaObjects';
import jingleStanza from '../index.js';

describe('jingleStanza', function () {
  let sandbox;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('will parse old style session-accepts', function () {
    const data = jingleStanza.getData(stanzas.sessionAccept);
    assert.ok(data.jingle.contents);
    assert.ok(data.jingle.contents[0].description);
    assert.equal(data.jingle.contents[0].description.descType, 'rtp');
  });

  it('will parse new style session-accepts', function () {
    const data = jingleStanza.getData(stanzas.sessionAccept2);
    assert.ok(data.jingle.contents);
    assert.ok(data.jingle.contents[0].application);
    assert.equal(data.jingle.contents[0].application.applicationType, 'rtp');
    console.log(JSON.stringify(data.attrs));
  });

  it('will parse old/new style session-accepts', function () {
    const data = jingleStanza.getData(stanzas.sessionAccept3);
    assert.ok(data.jingle.contents);
    assert.ok(data.jingle.contents[0].description);
    assert.equal(data.jingle.contents[0].description.descType, 'rtp');
  });

  it('will generate old style session-accepts', function () {
    const stanza = jingleStanza.getXml(JSON.parse(stanzaObjects.sessionAccept)).xml;
    assert.ok(stanza);

    const jingleNode = stanza.getChild('jingle');
    assert.ok(jingleNode);

    const contents = jingleNode.getChildren('content');
    assert.equal(contents.length, 1);

    const audioContent = contents[0];
    const audioDescription = audioContent.getChild('description');
    assert.ok(audioDescription);
    assert.equal(audioDescription.attrs.xmlns, 'urn:xmpp:jingle:apps:rtp:1');
  });

  it('will generate new old style session-accepts from new-style objects', function () {
    const stanza = jingleStanza.getXml(JSON.parse(stanzaObjects.sessionAccept2)).xml;
    assert.ok(stanza);

    console.log(stanza.toString());

    const jingleNode = stanza.getChild('jingle');
    assert.ok(jingleNode);

    const contents = jingleNode.getChildren('content');
    assert.equal(contents.length, 1);

    const audioContent = contents[0];
    const audioApplication = audioContent.getChild('description');
    assert.ok(audioApplication, 'audio application node is generated');
    assert.equal(audioApplication.attrs.xmlns, 'urn:xmpp:jingle:apps:rtp:1');
  });
});

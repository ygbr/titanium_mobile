/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2015-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

var should = require('./utilities/assertions'),
	utilities = require('./utilities/utilities');

describe('Titanium.UI.AttributedString', function () {
	it('Ti.UI.AttributedString', function () {
		should(Ti.UI.AttributedString).not.be.undefined;
	});

	it('apiName', function () {
		var attributedString = Ti.UI.createAttributedString({text : 'abc'});
		should(attributedString).have.readOnlyProperty('apiName').which.is.a.String;
		should(attributedString.apiName).be.eql('Ti.UI.AttributedString');
	});

	it('createAttributedString', function () {
		should(Ti.UI.createAttributedString).not.be.undefined;
		should(Ti.UI.createAttributedString).be.a.Function;

		var attributedString = Ti.UI.createAttributedString({text : 'abc'});
		should(attributedString).be.a.Object;
		should(attributedString.apiName).be.a.String;
		should(attributedString.apiName).be.eql('Ti.UI.AttributedString');
		should(attributedString.text).be.a.String;
	});
	
	it('attributes', function() {
		var str = 'Lorem ipsum dolor sit amet.';
		var attributedString = Ti.UI.createAttributedString({
			text: str,
			attributes: [{
				type: Ti.UI.ATTRIBUTE_PARAGRAPH_STYLE,
				value: {
					alignment: Ti.UI.ATTRIBUTE_TEXT_ALIGNMENT_JUSTIFIED,
					minimumLineHeight: 40,
					headIndent: 5,
					lineSpacing: 5
				},
				range: [0, str.length]
			}]
		});

		should(attributedString.text).be.eql(str);
		should(attributedString.attributes.length).be.eql(1);

		attributedString.addAttribute({
			type: Ti.UI.ATTRIBUTE_FONT,
			value: {fontSize : 16},
			range: [0, str.length]
		});
		should(attributedString.attributes.length).be.eql(2);
	});
});

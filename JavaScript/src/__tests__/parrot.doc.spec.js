import { Parrot, PARROT_TYPES } from '../parrot';

const assert = require('assert');

var approvals = require('approvals');
var ManualNamer = require('approvals/lib/ManualNamer');
var StringWriter = require("approvals/lib/StringWriter");

var verify = function (dirName, testName, data) {
  var newOptions = approvals.getConfig();
  var namer = new ManualNamer(dirName, testName);
  var writer = new StringWriter(newOptions, data, 'adoc');
  approvals.verifyWithControl(namer, writer, null, newOptions);
};

approvals.configure({
  errorOnStaleApprovedFiles: false
});

const docs_path="docs"

describe("Parrot", function () {
    it('test with ApprovalTests', function() {
        verify(docs_path, 'sample-approval-test', "Document content to change");
    });
});
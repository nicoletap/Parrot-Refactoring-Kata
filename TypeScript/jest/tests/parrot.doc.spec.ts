import {Parrot, ParrotTypes} from '../src/parrot'


const assert = require('assert');

const approvals = require("approvals/lib/Approvals");
const ManualNamer:any = require("approvals/lib/ManualNamer");
const StringWriter = require("approvals/lib/StringWriter");

var verify = function (dirName: string, testName: string, data: string) {
  var newOptions = approvals.getConfig();
  var namer = new ManualNamer(dirName, testName);
  var writer = new StringWriter(newOptions, data, 'adoc');
  approvals.verifyWithControl(namer, writer, null, newOptions);
};

approvals.configure({
  errorOnStaleApprovedFiles: false
});

const docs_path="docs"

describe("ParrotDoc", () => {
    it('test with ApprovalTests', () => {
        verify(docs_path, 'sample-approval-test', "Document content to change");
    });
});

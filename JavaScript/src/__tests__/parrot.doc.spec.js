import { Parrot, PARROT_TYPES } from '../parrot';

const assert = require('assert');

var approvals = require('approvals');


const docs_path="docs"

describe("Parrot", function () {
    it('test with ApprovalTests', function() {
        approvals.verify(docs_path, 'sample-approval-test', "???");
    });
});
from parrot import Parrot, ParrotType

from doc_as_test_pytest import DocAsTest, doc, doc_module

def test_parrot_list(doc):
    doc.write("Document content to change")
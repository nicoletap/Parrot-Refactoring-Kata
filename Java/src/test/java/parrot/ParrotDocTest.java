package parrot;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;

import org.sfvl.doctesting.junitextension.SimpleApprovalsExtension;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ParrotDocTest {
    @RegisterExtension
    static SimpleApprovalsExtension doc = new SimpleApprovalsExtension();


    @Test
    public void parrotList() {
        doc.write("Document content to change");
    }

}
package myProject.contactapp.unit;

import myProject.contactapp.entity.Contact;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ContactTest {

    @Test
    void testContactEntity() {
        Contact contact = new Contact();
        contact.setFullName("Jane Doe");
        contact.setPhone("987654321");
        contact.setNotes("Sample contact");

        assertEquals("Jane Doe", contact.getFullName());
        assertEquals("987654321", contact.getPhone());
        assertEquals("Sample contact", contact.getNotes());
    }
}

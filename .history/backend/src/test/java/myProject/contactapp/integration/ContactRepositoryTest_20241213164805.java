package myProject.contactapp.integration;

import myProject.contactapp.entity.Contact;
import myProject.contactapp.dao.ContactRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class ContactRepositoryTest {

    @Autowired
    private ContactRepository contactRepository;

    @Test
    void testSaveAndFindById() {
        Contact contact = new Contact();
        contact.setFullName("John Doe");
        contact.setPhone("123456789");
        contact.setNotes("Test contact");

        Contact savedContact = contactRepository.save(contact);

        Optional<Contact> retrievedContact = contactRepository.findById(savedContact.getId());
        assertTrue(retrievedContact.isPresent());
        assertEquals("John Doe", retrievedContact.get().getFullName());
        List<Contact> allContacts = contactRepository.findAll();
    assertFalse(allContacts.isEmpty());
    }
}

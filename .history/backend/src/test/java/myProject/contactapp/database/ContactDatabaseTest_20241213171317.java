package myProject.contactapp.database;

import myProject.contactapp.entity.Contact;
import myProject.contactapp.dao.ContactRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Testcontainers
class ContactDatabaseTest {

    @Autowired
    private ContactRepository contactRepository;
    
 @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.0.33")
        .withDatabaseName("contacts_app")
        .withUsername("root")
        .withPassword("1");

    static {
        mysql.start();
    }

    @Test
    void testDatabaseConnection() {
      Contact contact = new Contact(0, "Test User", "test@example.com", "123456789");

        Contact savedContact = contactRepository.save(contact);

        assertNotNull(savedContact.getId());
        assertEquals("Test User", savedContact.getFullName());
    }
}

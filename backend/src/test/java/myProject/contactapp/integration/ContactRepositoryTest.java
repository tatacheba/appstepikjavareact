package myProject.contactapp.integration;

import io.qameta.allure.*;
import myProject.contactapp.entity.Contact;
import myProject.contactapp.dao.ContactRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Epic("Интеграционное тестирование")
@Feature("Репозиторий контактов")
   @DisplayName("Integration test")
class ContactRepositoryTest {

    @Autowired
    private ContactRepository contactRepository;

    @Test
    @Story("Сохранение и извлечение контакта")
    @Severity(SeverityLevel.CRITICAL)
    @DisplayName("Тест: Сохранение и получение контакта по ID")
    @Description("Проверка, что контакт может быть сохранен в базе данных и успешно извлечен по его ID")
    void testSaveAndFindById() {
        // Создаем контакт
        Contact contact = new Contact();
        contact.setFullName("John Doe");
        contact.setPhone("123456789");
        contact.setNotes("Test contact");

        // Сохраняем контакт
        Contact savedContact = contactRepository.save(contact);

        // Проверяем, что контакт может быть извлечен по ID
        Optional<Contact> retrievedContact = contactRepository.findById(savedContact.getId());
        assertTrue(retrievedContact.isPresent(), "Контакт не найден в базе данных");
        assertEquals("John Doe", retrievedContact.get().getFullName(), "Имя контакта не совпадает");

        // Проверяем, что в базе данных есть хотя бы один контакт
        List<Contact> allContacts = contactRepository.findAll();
        assertFalse(allContacts.isEmpty(), "Список контактов не должен быть пустым");
    }
}
package myProject.contactapp.database;

import io.qameta.allure.*;
import myProject.contactapp.entity.Contact;
import myProject.contactapp.dao.ContactRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;

@SpringBootTest
@Epic("Тестирование базы данных")
@Feature("Контакты")
  @DisplayName("Database Test")
class ContactDatabaseTest {

    @Autowired
    private ContactRepository contactRepository;

    @Test
    @Story("Сохранение нового контакта")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Добавление строки в базу данных и проверка сохраненного контакта")
    @DisplayName("Тест: Сохранение контакта в базу данных")
    void testDatabaseConnection() {
        // Вызов шагов для Allure
        Contact contact = createContact();
        Contact savedContact = saveContact(contact);
        verifySavedContact(savedContact, contact);
    }

    @Step("Создаем новый контакт")
    private Contact createContact() {
        return new Contact(0, "Test User", "test@example.com", "123456789");
    }

    @Step("Сохраняем контакт в базу данных")
    private Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Step("Проверяем сохраненные данные контакта")
    private void verifySavedContact(Contact savedContact, Contact originalContact) {
        assertNotNull(savedContact.getId(), "Идентификатор контакта не должен быть null");
        assertEquals(originalContact.getFullName(), savedContact.getFullName(), "Имя контакта не совпадает");
        assertEquals(originalContact.getNotes(), savedContact.getNotes(), "Notes не совпадает");
        assertEquals(originalContact.getPhone(), savedContact.getPhone(), "Номер телефона контакта не совпадает");
    }
}
package myProject.contactapp;

import io.qameta.allure.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

import org.junit.jupiter.api.DisplayName;

@SpringBootTest
@Epic("Тестирование приложения")
@Feature("Инициализация контекста")
  @DisplayName("Unit Tests")
class ContactappApplicationTests {

    @Test
    @Story("Запуск приложения")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Проверка успешной загрузки контекста Spring")
    @DisplayName("Тест: Контекст приложения загружается без ошибок")
    void contextLoads() {
        assertDoesNotThrow(() -> {
            // Проверяем, что контекст Spring загружается без исключений
        });
    }
}
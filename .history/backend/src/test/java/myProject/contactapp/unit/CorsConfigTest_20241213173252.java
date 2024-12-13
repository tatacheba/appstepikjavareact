package myProject.contactapp.unit;

import myProject.contactapp.config.CorsConfig;
import myProject.contactapp.entity.Contact;
import myProject.contactapp.env.SettingApp;
import org.junit.jupiter.api.Test;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

class CorsConfigTest {

    @Test
    void testCorsConfiguration() {
        // Моки
        RepositoryRestConfiguration mockConfig = mock(RepositoryRestConfiguration.class);
        CorsRegistry mockCors = mock(CorsRegistry.class);

        // Настраиваем mockCors.addMapping() так, чтобы возвращать тот же mockCors
        when(mockCors.addMapping(anyString())).thenReturn(null);

        CorsConfig corsConfig = new CorsConfig();
        corsConfig.configureRepositoryRestConfiguration(mockConfig, mockCors);

        // Проверки
        verify(mockConfig).exposeIdsFor(Contact.class); // Проверяем, что ID для Contact были раскрыты
        verify(mockCors).addMapping(SettingApp.getHost() + "/**"); // Проверяем, что вызван addMapping с корректным путем
    }
}

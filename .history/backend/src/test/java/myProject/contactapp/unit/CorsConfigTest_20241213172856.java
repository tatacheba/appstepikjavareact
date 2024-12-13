import myProject.contactapp.config.CorsConfig;
import myProject.contactapp.entity.Contact;
import myProject.contactapp.env.SettingApp;
import org.junit.jupiter.api.Test;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import static org.mockito.Mockito.*;

class CorsConfigTest {

    @Test
    void testCorsConfiguration() {
        RepositoryRestConfiguration mockConfig = mock(RepositoryRestConfiguration.class);
        CorsRegistry mockCors = mock(CorsRegistry.class);

        // Настраиваем мок addMapping() без привязки к CorsRegistration
        when(mockCors.addMapping(anyString())).thenAnswer(invocation -> {
            // Возвращаем сам mockCors для цепочки вызовов
            return mockCors;
        });

        CorsConfig corsConfig = new CorsConfig();
        corsConfig.configureRepositoryRestConfiguration(mockConfig, mockCors);

        // Проверяем, что методы были вызваны
        verify(mockConfig).exposeIdsFor(Contact.class);
        verify(mockCors).addMapping(SettingApp.getHost() + "/**");
        verify(mockCors).allowedOrigins(any());
    }
}

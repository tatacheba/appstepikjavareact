package myProject.contactapp.unit;

import myProject.contactapp.config.CorsConfig;
import myProject.contactapp.entity.Contact;
import myProject.contactapp.env.SettingApp;
import org.junit.jupiter.api.Test;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

class CorsConfigTest {

    @Test
    void testCorsConfiguration() {
      RepositoryRestConfiguration mockConfig = mock(RepositoryRestConfiguration.class);
    CorsRegistry mockCors = mock(CorsRegistry.class);
    CorsRegistry.CorsRegistration mockCorsRegistration = mock(CorsRegistry.CorsRegistration.class);

    // Настраиваем поведение мока
    when(mockCors.addMapping(anyString())).thenReturn(mockCorsRegistration);
    when(mockCorsRegistration.allowedOrigins(any())).thenReturn(mockCorsRegistration);

    CorsConfig corsConfig = new CorsConfig();
    corsConfig.configureRepositoryRestConfiguration(mockConfig, mockCors);

    verify(mockConfig).exposeIdsFor(Contact.class);
    verify(mockCors).addMapping(SettingApp.getHost() + "/**");
    }
}

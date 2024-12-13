package myProject.contactapp.unit;

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

        CorsConfig corsConfig = new CorsConfig();
        corsConfig.configureRepositoryRestConfiguration(mockConfig, mockCors);

        verify(mockConfig).exposeIdsFor(Contact.class);
        verify(mockCors).addMapping(SettingApp.getHost() + "/**");
    }
}

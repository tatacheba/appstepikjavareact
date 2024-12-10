package myProject.contactapp.config;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import myProject.contactapp.entity.Contact;
import myProject.contactapp.env.SettingApp;

public class CorsConfig implements RepositoryRestConfigurer {
  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
    config.exposeIdsFor(Contact.class);

    cors
      .addMapping(config.getBasePath() + "/**")
      .allowedOrigins(SettingApp.getHost())
        .allowedMethods("GET", "POST", "PUT", "DELETE")
      .allowCredentials(true);
   }

}

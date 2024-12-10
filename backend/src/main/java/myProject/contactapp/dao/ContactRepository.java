package myProject.contactapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import myProject.contactapp.entity.Contact;

public interface ContactRepository 
  extends JpaRepository<Contact, Long> {}
  


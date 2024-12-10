package myProject.contactapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import myProject.contactapp.entity.Contatct;

public interface ContactRepository {
  extends JpaRepository<Contatct, Long> {}
  
}

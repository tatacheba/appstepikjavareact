package myProject.contactapp.dao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository {
  extends JpaRepository<Contatct, Long> {}
  
}

package myProject.contactapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "contacts")

public class Contatct {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String fullName;
  private String notes;
  private String phone;
  
  public Contatct(String fullName, String notes, String phone) {
    this.fullName = fullName;
    this.phone = phone;
    
  }
  
}

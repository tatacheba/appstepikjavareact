package myProject.contactapp.entity;
import lombok.Data;

public class Contatct {
  private long id;
  private String fullName;
  private String notes;
  private String phone;
  
  public Contatct(String fullName, String notes, String phone) {
    this.fullName = fullName;
    this.phone = phone;
    
  }
  
}

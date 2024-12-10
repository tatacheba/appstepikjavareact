package myProject.contactapp.entity;

public class Contatct {
  private long id;
  private String fullName;
  private String note;
  private String phone;
  
  public Contatct(String name, String email, String phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  
}

package myProject.contactapp.api;

import io.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static io.*;
import static org.hamcrest.Matchers.*;

class ContactApiTest {

    @BeforeEach
    void setUp() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = 8080;
    }

    @Test
    void testGetContacts() {
        given()
            .when()
            .get("/contacts")
            .then()
            .statusCode(200)
            .body("size()", greaterThanOrEqualTo(0));
    }
}

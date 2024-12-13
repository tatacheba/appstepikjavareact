package myProject.contactapp.unit;

import myProject.contactapp.env.SettingApp;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SettingAppTest {

    @Test
    void testGetHost() {
        assertEquals("http://localhost:3000", SettingApp.getHost());
    }
}

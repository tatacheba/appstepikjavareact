package myProject.contactapp.unit;

import myProject.contactapp.entity.Contact;
import myProject.contactapp.service.ContactService;
import myProject.contactapp.dao.ContactRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class ContactServiceTest {

    @InjectMocks
    private ContactService contactService;

    @Mock
    private ContactRepository contactRepository;

    ContactServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindById() {
        Contact mockContact = new Contact(1L, "John Doe", "john@example.com", "123456789");
        when(contactRepository.findById(1L)).thenReturn(Optional.of(mockContact));

        Contact result = contactService.findById(1L);
        assertNotNull(result);
        assertEquals("John Doe", result.getName());
        verify(contactRepository, times(1)).findById(1L);
    }
}

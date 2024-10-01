package com.leilao.backend.service;

import com.leilao.backend.model.Person;
import com.leilao.backend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person create(Person person) {
        return personRepository.save(person);
    }

    public Person update(Person person) {
        Person personSaved = personRepository.findById(person.getId()).
                orElseThrow(() -> new NoSuchElementException("Objeto não encontrado"));

        personSaved.setName(person.getName());
        personSaved.setEmail(person.getEmail());
        personSaved.setPassword(person.getPassword());
        personSaved.setValidationCode(person.getValidationCode());
        personSaved.setValidationCodeValidity(person.getValidationCodeValidity());

        return personRepository.save(personSaved);
    }
}
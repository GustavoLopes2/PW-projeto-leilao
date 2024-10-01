package com.leilao.backend.controller;

import com.leilao.backend.model.Person;
import com.leilao.backend.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @PostMapping
    public Person create(@RequestBody Person person) {
        return personService.create(person);
    }

    @PutMapping
    public Person update(@RequestBody Person person) {
        return personService.create(person);
    }
}

















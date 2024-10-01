package com.leilao.backend.controller;

import com.leilao.backend.model.Profile;
import com.leilao.backend.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping
    public Profile create(@RequestBody Profile profile) {
        return profileService.create(profile);
    }

    @PutMapping
    public Profile update(@RequestBody Profile profile) {
        return profileService.create(profile);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable ("id") Long id) {
        profileService.delete(id);
    }

    @GetMapping("/findAll")
    public List<Profile> findAll() {
        return profileService.findAll();
    }
}
package com.leilao.backend.service;

import com.leilao.backend.model.Profile;
import com.leilao.backend.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;

    public Profile create(Profile profile) {
        return profileRepository.save(profile);
    }

    public Profile update(Profile profile) {
        Profile profileSaved = profileRepository.findById(profile.getId()).
                orElseThrow(() -> new NoSuchElementException("Objeto não encontrado"));

        profileSaved.setName(profile.getName());
        return profileRepository.save(profileSaved);
    }

    public void delete(Long id) {
        Profile profileSaved = profileRepository.findById(id).
                orElseThrow(() -> new NoSuchElementException("Objeto não encontrado"));

        profileRepository.delete(profileSaved);
    }

    public List<Profile> findAll() {
        return profileRepository.findAll();
    }
}
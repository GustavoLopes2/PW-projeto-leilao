package com.leilao.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "person")
@Data
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "validationCode")
    private String validationCode;

    @Column(name = "validationCodeValidity")
    private Date validationCodeValidity;
}
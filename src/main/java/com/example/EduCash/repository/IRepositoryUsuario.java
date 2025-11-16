package com.example.EduCash.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.EduCash.model.Usuario;

@Repository
public interface IRepositoryUsuario extends JpaRepository<Usuario ,Integer > {
        Usuario findByEmail(String email);

}

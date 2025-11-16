package com.example.EduCash.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EduCash.model.Usuario;
import com.example.EduCash.repository.IRepositoryUsuario;

@Service
public class ServiceUsuario implements IServiceUsuario{

    @Autowired
    private IRepositoryUsuario repositoryUsuario;

    @Override
    public void crearUsuario(Usuario usuario) {
        repositoryUsuario.save(usuario);
    }

    @Override
    public void actualizarUsuarrio(Usuario usuario) {
    }

    @Override
    public Usuario buscarCorreo(String email) {
        return repositoryUsuario.findByEmail(email);
    }

    @Override
    public boolean existenciaCorreo(String email) {
        return repositoryUsuario.findByEmail(email) != null;
    }


}

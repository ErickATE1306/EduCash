package com.example.EduCash.service;

import com.example.EduCash.model.Usuario;

public interface IServiceUsuario {

    public void crearUsuario(Usuario usuario);

    public void actualizarUsuarrio (Usuario usuario);

    public Usuario buscarCorreo (String email);

    public boolean existenciaCorreo (String email);
}

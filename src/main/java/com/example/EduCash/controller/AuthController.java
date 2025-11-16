package com.example.EduCash.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.EduCash.model.Usuario;
import com.example.EduCash.service.IServiceUsuario;

@Controller
public class AuthController {

    @Autowired
    private IServiceUsuario serviceUsuario;

    // Página de LOGIN
    @GetMapping("/login")
    public String loginPage() {
        return "auth/login";
    }

    // Página de REGISTRO
    @GetMapping("/registrar")
    public String registerPage() {
        return "auth/registrar"; // muestra tu página de registro
    }

    
    // PROCESO DE LOGIN
    @PostMapping("/login")
    public String loginSubmit(
            @RequestParam String email,
            @RequestParam String password,
            RedirectAttributes ra) {

        Usuario user = serviceUsuario.buscarCorreo(email);

        if (user == null || !user.getPassword().equals(password)) {
            ra.addFlashAttribute("error", "Credenciales incorrectas");
            return "redirect:/login";
        }

        return "redirect:/coAhora"; // login exitoso
    }

    // PROCESO DE REGISTRO
    @PostMapping("/registrar")
    public String registrarUsuario(
            @RequestParam String nombre,
            @RequestParam String apellidos,
            @RequestParam String email,
            @RequestParam String password,
            RedirectAttributes ra) {

        // validar si correo existe
        if (serviceUsuario.existenciaCorreo(email)) {
            ra.addFlashAttribute("errorRegistro", "El correo ya está registrado");
            return "redirect:/registrar";
        }

        // crear usuario
        Usuario nuevo = new Usuario();
        nuevo.setNombre(nombre);
        nuevo.setApellidos(apellidos);
        nuevo.setEmail(email);
        nuevo.setPassword(password);

        serviceUsuario.crearUsuario(nuevo);

        // mensaje y redirección
        ra.addFlashAttribute("registroExitoso", "Cuenta creada correctamente. Ahora inicia sesión.");

        return "redirect:/login"; 
    }
}

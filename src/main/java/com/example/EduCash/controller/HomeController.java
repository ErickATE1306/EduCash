package com.example.EduCash.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping({"/", "/inicio"})
    public String inicio() {
        return "inicio"; // Renderiza templates/inicio.html
    }

    @GetMapping({"/coAhora"})
    public String coAhoraString() {
        return "comenzarAhora"; // Renderiza templates/comenzarAhora.html
    }

    @GetMapping("/cursos")
    public String cursos() {
        return "cursos";
    }

    @GetMapping("/billetera")
    public String billetera() {
        return "billetera";
    }

    @GetMapping("/configuracion")
    public String configuracion() {
        return "configuracion";
    }

    @GetMapping("/demo")
    public String demo() {
        return "demo";
    }
}

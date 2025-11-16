package com.example.EduCash.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class AuthController {

    @GetMapping({"/login", "/ingresar"})
    public String loginPage() {
        return "auth/login";
    }

    // Placeholder: solo redirige, la lógica real vendrá después
    @PostMapping("/login")
    public String loginSubmit(RedirectAttributes ra) {
        // ra.addFlashAttribute("user", "Estudiante");
        return "redirect:/coAhora";
    }

    @GetMapping("/logout")
    public String logout() {
        return "redirect:/login";
    }
}

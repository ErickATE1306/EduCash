package com.example.EduCash;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

// Excluir autoconfiguración de BD/JPA temporalmente para permitir arrancar sin MySQL
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
public class EduCashApplication {

	public static void main(String[] args) {
		SpringApplication.run(EduCashApplication.class, args);
	}

}

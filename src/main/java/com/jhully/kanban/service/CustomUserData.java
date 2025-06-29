package com.jhully.kanban.service;

import com.jhully.kanban.model.entidades.User;
import com.jhully.kanban.model.repositorios.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class CustomUserData implements UserDetailsService {
    UserRepository userRepository;

    @Autowired
    public CustomUserData(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado por email: " + email));
        System.out.println("--- DENTRO DO USER DETAILS SERVICE ---");
        System.out.println("Usuário encontrado no banco! Hash da senha: [" + user.getPassword() + "]");
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                new ArrayList<>()
        );
    }
}
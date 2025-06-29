package com.jhully.kanban.dto;

import lombok.Data;

@Data
public class AuthDTO {
    private String token;

    public AuthDTO(String token){
        this.token = token;
    }
}
package com.camilo.crudProgramacion.controllers;


import com.camilo.crudProgramacion.dto.UserDTO;
import com.camilo.crudProgramacion.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserService userService;
  @PostMapping("/guardar")
  public ResponseEntity<UserDTO> saveUserController(UserDTO obj){
    return ResponseEntity.ok(userService.saveUser(obj));
  }

  public ResponseEntity<List<UserDTO>> getAllUsersControler(){
    return ResponseEntity.ok(userService.getUsers());
  }
}

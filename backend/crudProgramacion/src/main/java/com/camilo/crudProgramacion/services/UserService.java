package com.camilo.crudProgramacion.services;

import com.camilo.crudProgramacion.dto.UserDTO;

import java.util.List;

public interface UserService {

  UserDTO saveUser(UserDTO userDTO);
  List<UserDTO> getUsers();
}

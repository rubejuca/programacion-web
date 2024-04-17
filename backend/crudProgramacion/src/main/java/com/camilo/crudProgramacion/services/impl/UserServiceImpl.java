package com.camilo.crudProgramacion.services.impl;

import com.camilo.crudProgramacion.dto.UserDTO;
import com.camilo.crudProgramacion.entity.UserEntity;
import com.camilo.crudProgramacion.repository.UserRepository;
import com.camilo.crudProgramacion.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;
  @Override
  public UserDTO saveUser(UserDTO userDTO) {

    UserEntity userEntity = UserEntity.builder()
        .idUser(userDTO.getIdUser())
        .name(userDTO.getName())
        .email(userDTO.getEmail())
        .birthDate(userDTO.getBirthDate())
        .build();

    UserEntity savedUser = userRepository.save(userEntity);

    return UserDTO.builder()
        .idUser(userDTO.getIdUser())
        .name(userDTO.getName())
        .email(userDTO.getEmail())
        .birthDate(userDTO.getBirthDate())
        .build();
  }

  @Override
  public List<UserDTO> getUsers() {

    List<UserEntity> userEntities = userRepository.findAll();
    return userEntities.stream() stream<UserEntity>
    .map(userEntity -> UserDTO.builder()
        .idUser(userEntity.get));
  }
}

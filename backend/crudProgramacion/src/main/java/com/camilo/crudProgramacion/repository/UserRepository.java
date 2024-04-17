package com.camilo.crudProgramacion.repository;

import com.camilo.crudProgramacion.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {


}

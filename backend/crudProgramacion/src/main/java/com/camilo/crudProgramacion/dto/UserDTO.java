package com.camilo.crudProgramacion.dto;

import lombok.*;

import java.util.Date;
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor


public class UserDTO {


  private Integer idUser;
  private String name;
  private String email;
  private Date birthDate;
}

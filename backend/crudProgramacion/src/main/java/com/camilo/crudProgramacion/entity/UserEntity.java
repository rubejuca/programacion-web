package com.camilo.crudProgramacion.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Table(name = "users")
@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class UserEntity implements Serializable {

  @Id
  @Column(name = "id_user")

  private Integer idUser;
  private String name;
  private String email;

  @Temporal(TemporalType.DATE)
  private Date birthDate;



}

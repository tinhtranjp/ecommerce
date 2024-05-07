package vn.tdt.demo.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import vn.tdt.demo.util.*;

import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO implements Serializable {

    @NotBlank(message = "firstName must be not blank")
    @JsonProperty("first_name")
    private String firstName;

    @NotNull(message = "dateOfBirth must be not null")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    @JsonProperty("date_of_birth")
    private Date dateOfBirth;


    @GenderSubset(anyOf = {Gender.MALE, Gender.FEMALE, Gender.OTHER})
    private Gender gender;


    @NotBlank(message = "lastName must be not blank")
    @JsonProperty("last_name")
    private String lastName;

    @PhoneNumber(message = "phone invalid format")
    private String phone;


    @Email(message = "email in invalid format")
    private String email;


    @EnumPattern(name = "status", regexp = "ACTIVE|INACTIVE|NONE")
    private UserStatus status;

    @NotNull(message = "username must be not null")
    private String username;

    private String password;

    @NotEmpty(message = "address can not empty")
    private List<AddressDTO> addresses;
}

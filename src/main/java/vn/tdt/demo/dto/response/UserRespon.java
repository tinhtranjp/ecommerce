package vn.tdt.demo.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.*;
import lombok.*;
import vn.tdt.demo.model.Address;
import vn.tdt.demo.model.User;
import vn.tdt.demo.util.Gender;
import vn.tdt.demo.util.UserStatus;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

@JsonPropertyOrder({"id",  "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "status", "username", "password","createAt", "updateAt", "addresses"})
public class UserRespon extends BaseResponse {

    private Long id;

    @JsonProperty("first_name")
    private String firstName;

    @JsonProperty("date_of_birth")
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @JsonProperty("last_name")
    private String lastName;

    private String phone;

    private String email;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    private String username;

    private String password;

    private List<AddressRespon> addresses;


    public static UserRespon fromUser(User user) {
        UserRespon userRespon = UserRespon.builder()
                .dateOfBirth(user.getDateOfBirth())
                .gender(user.getGender())
                .email(user.getEmail())
                .phone(user.getPhone())
                .username(user.getUsername())
                .password(user.getPassword())
                .id(user.getId())
                .status(user.getStatus())
                .lastName(user.getLastName())
                .firstName(user.getFirstName())
                .addresses(user.getAddresses().stream().map(AddressRespon::fromAddress).toList())
                .build();

        userRespon.setCreateAt(user.getCreateAt());
        userRespon.setUpdateAt(user.getUpdateAt());
        return userRespon;
    }
}

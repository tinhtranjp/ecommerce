package vn.tdt.demo.model;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.SqlTypes;
import vn.tdt.demo.util.Gender;
import vn.tdt.demo.util.UserStatus;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user")
@Entity
public class User extends AbstractEntity {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "date_of_birth")
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;


    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private UserStatus status;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "user")
    private List<Address> addresses = new ArrayList<>();

    public void saveAddress(Address address) {
        if(address != null) {
            if(addresses == null) {
                addresses = new ArrayList<>();
            }
            addresses.add(address);
            address.setUser(this);
        }
    }

}

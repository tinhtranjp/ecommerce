package vn.tdt.demo.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.io.Serializable;


@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class AddressDTO implements Serializable {

    @NotBlank(message = "streetNumber khong duoc de null")
    @JsonProperty("street_number")
    private String streetNumber;

    @NotNull(message = "k dc null ban oi")
    private String street;

    private String city;

    private String country;
}

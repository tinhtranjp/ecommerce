package vn.tdt.demo.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.*;
import vn.tdt.demo.model.Address;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

@JsonPropertyOrder({"id", "streetNumber","street","city","country","createAt","updateAt"})
public class AddressRespon extends BaseResponse{
    private Long id;

    @JsonProperty("street_number")
    private String streetNumber;

    private String street;

    private String city;

    private String country;

    public static AddressRespon fromAddress(Address address) {
        AddressRespon addressRespon = AddressRespon.builder()
                .id(address.getId())
                .streetNumber(address.getStreetNumber())
                .street(address.getStreet())
                .city(address.getCity())
                .country(address.getCountry())
                .build();

        addressRespon.setUpdateAt(address.getUpdateAt());
        addressRespon.setCreateAt(address.getCreateAt());
        return addressRespon;
    }
}

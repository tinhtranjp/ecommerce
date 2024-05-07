package vn.tdt.demo.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import vn.tdt.demo.dto.request.UserDTO;
import vn.tdt.demo.dto.response.UserRespon;
import vn.tdt.demo.exception.InvalidParamException;
import vn.tdt.demo.exception.ResourceNotFoundException;
import vn.tdt.demo.model.Address;
import vn.tdt.demo.model.User;
import vn.tdt.demo.repository.UserRepository;
import vn.tdt.demo.service.UserService;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public long createUser(UserDTO request) throws InvalidParamException {
        User existingUsername = userRepository.findByUsername(request.getUsername());
        if(existingUsername != null) {
            throw new InvalidParamException("Username nay da ton tai");
        }

        User existingEmail = userRepository.findByEmail(request.getEmail());
        if(existingEmail != null) {
            throw new InvalidParamException("Email nay da dang ky");
        }

        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .username(request.getUsername())
                .password(request.getPassword())
                .phone(request.getPhone())
                .gender(request.getGender())
                .dateOfBirth(request.getDateOfBirth())
                .status(request.getStatus())
                .build();

        request.getAddresses().forEach(a -> user.saveAddress(
                Address.builder()
                        .streetNumber(a.getStreetNumber())
                        .street(a.getStreet())
                        .city(a.getCity())
                        .country(a.getCountry())
                        .build()
        ));

        userRepository.save(user);

        log.info("User has save!");

        return user.getId();
    }

    @Override
    public Page<User> getUsers(String keyword, PageRequest pageRequest) {
        Page<User> usersPage;
        usersPage = userRepository.searchUsers(keyword, pageRequest);
        log.debug("Users: {}", usersPage);

        return usersPage;
    }

    @Override
    public List<UserRespon> getAllUser() {
       List<User> users = userRepository.findAll();
        log.debug("Users: {}", users);
       return users.stream().map(UserRespon::fromUser).toList();
    }


    private User getUserById(long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}

package vn.tdt.demo.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import vn.tdt.demo.dto.request.UserDTO;
import vn.tdt.demo.dto.response.PageResponse;
import vn.tdt.demo.dto.response.UserRespon;
import vn.tdt.demo.exception.InvalidParamException;
import vn.tdt.demo.model.User;

import java.util.List;

public interface UserService {
    long createUser(UserDTO request) throws InvalidParamException;

    Page<User> getUsers(String keyword, PageRequest pageRequest);

    List<UserRespon> getAllUser();
}

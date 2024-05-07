package vn.tdt.demo.controller;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import vn.tdt.demo.dto.request.UserDTO;
import vn.tdt.demo.dto.response.PageResponse;
import vn.tdt.demo.dto.response.ResponData;
import vn.tdt.demo.dto.response.ResponseError;
import vn.tdt.demo.dto.response.UserRespon;
import vn.tdt.demo.model.User;
import vn.tdt.demo.service.UserService;

import java.util.List;


@RestController
@RequestMapping("/user")
@Validated
@Slf4j
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("")
    public ResponData<?> createUser(@RequestBody @Valid UserDTO user) {
        log.info("Request add user, {} {}", user.getFirstName(), user.getLastName());

        try {
            long userId = userService.createUser(user);
            return new ResponData<>(HttpStatus.CREATED.value(), "user", userId );
        } catch (Exception e) {
            log.error("errorMessage={}", e.getMessage(), e.getCause());
            return new ResponseError(HttpStatus.BAD_REQUEST.value(), e.getMessage());
        }
    }

    @GetMapping("")
    public ResponData<?> getAllUser() {
        log.info("Request all users");
        List<UserRespon> users = userService.getAllUser();
        return new ResponData<>(HttpStatus.OK.value(), "users", users);
    }


    @GetMapping("/all")
    public ResponData<?> getUsers(@RequestParam(defaultValue = "") String keyword,
                                  @RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "10") int limit) {
        log.info("Request all users");
        PageRequest pageRequest = PageRequest.of(page, limit);
        Page<User> users = userService.getUsers(keyword, pageRequest);

        int totalPages = users.getTotalPages();
        int _page = users.getNumber() + 1;
        int _limit = users.getSize();

        List<UserRespon> userRespons = users.map(UserRespon::fromUser).toList();


        PageResponse pageResponse = new PageResponse(_page,_limit,totalPages,userRespons);



        return new ResponData<>(HttpStatus.OK.value(), "users", pageResponse);
    }

}

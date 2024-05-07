package vn.tdt.demo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.tdt.demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    User findByEmail(String email);

    @Query("SELECT DISTINCT u FROM User u LEFT JOIN u.addresses a WHERE " +
            "(:keyword IS NULL OR :keyword = '' OR " +
            "u.firstName LIKE %:keyword% OR u.lastName LIKE %:keyword% OR " +
            "a.city LIKE %:keyword%)")
    Page<User> searchUsers(@Param("keyword") String keyword, Pageable pageable);

}

package vn.tdt.demo.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

public class ResponData<T> {

    private final int status;

    private final String message;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private T data;

    public ResponData(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public ResponData(int status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public T getData() {
        return data;
    }
}

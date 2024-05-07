package vn.tdt.demo.dto.response;

public class ResponseError extends ResponData{
    public ResponseError(int status, String message) {
        super(status, message);
    }
}

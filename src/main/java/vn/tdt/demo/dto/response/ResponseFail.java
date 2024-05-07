package vn.tdt.demo.dto.response;

import org.springframework.http.HttpStatusCode;

public class ResponseFail extends ResponseSuccess{
    public ResponseFail(HttpStatusCode status, String message) {
        super(status, message);
    }
}

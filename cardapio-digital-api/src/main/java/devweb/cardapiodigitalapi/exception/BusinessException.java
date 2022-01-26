package devweb.cardapiodigitalapi.exception;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private final String devMessage;

    private final HttpStatus status;

    public BusinessException(String message) {
        super(message);
        this.devMessage = "";
        this.status = HttpStatus.BAD_REQUEST;
    }

    public BusinessException(String message, Throwable e) {
        super(message, e);
        this.devMessage = "";
        this.status = HttpStatus.BAD_REQUEST;
    }

    public BusinessException(String message, String devMessage, HttpStatus status) {
        super(message);
        this.devMessage = devMessage;
        this.status = status;
    }

    public BusinessException(String message, Throwable e, String devMessage, HttpStatus status) {
        super(message, e);
        this.devMessage = devMessage;
        this.status = status;
    }

}

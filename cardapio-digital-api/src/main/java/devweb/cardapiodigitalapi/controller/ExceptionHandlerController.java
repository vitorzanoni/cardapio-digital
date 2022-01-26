package devweb.cardapiodigitalapi.controller;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import devweb.cardapiodigitalapi.dto.ErroDTO;
import devweb.cardapiodigitalapi.exception.BusinessException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class ExceptionHandlerController {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErroDTO> handleBusinessException(BusinessException e) {
        final ErroDTO erroDTO = new ErroDTO(e.getStatus(), e.getMessage(), e.getDevMessage(), LocalDateTime.now());
        log.error(erroDTO.toString(), e);
        return ResponseEntity.status(e.getStatus()).body(erroDTO);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErroDTO> handleGenericException(Exception e) {
        final ErroDTO erroDTO = new ErroDTO(HttpStatus.INTERNAL_SERVER_ERROR,
                "Não foi possível processar a requisição.", String.format("%s: %s", e.toString(), e.getMessage()),
                LocalDateTime.now());
        log.error(erroDTO.toString(), e);
        return ResponseEntity.internalServerError().body(erroDTO);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErroDTO> handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        final ErroDTO erroDTO = new ErroDTO(HttpStatus.BAD_REQUEST, "Parâmetros enviados são inválidos.",
                String.format("%s: %s", e.toString(), e.getMessage()), LocalDateTime.now());
        log.error(erroDTO.toString(), e);
        return ResponseEntity.badRequest().body(erroDTO);
    }

}

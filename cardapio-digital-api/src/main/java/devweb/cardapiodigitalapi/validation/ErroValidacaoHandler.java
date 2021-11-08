package devweb.cardapiodigitalapi.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import devweb.cardapiodigitalapi.dto.ErroValidacaoDTO;

@RestControllerAdvice
public class ErroValidacaoHandler {
	
	@Autowired
	private MessageSource messageSource;
	
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public List<ErroValidacaoDTO> handle(MethodArgumentNotValidException exception) {
		
		List<ErroValidacaoDTO> dto = new ArrayList<>();
		List<FieldError> fieldErros = exception.getBindingResult().getFieldErrors();
		
		fieldErros.forEach(e -> dto.add(new ErroValidacaoDTO(e.getField(), messageSource.getMessage(e, LocaleContextHolder.getLocale()))));
		
		return dto;
	}
}

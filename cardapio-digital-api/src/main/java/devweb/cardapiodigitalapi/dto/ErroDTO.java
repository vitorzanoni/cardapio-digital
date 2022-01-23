package devweb.cardapiodigitalapi.dto;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErroDTO {

	private String status;
	private String message;
	private String devMessage;
	private LocalDateTime devMessageTime;

	public ErroDTO(HttpStatus status, String message, String devMessage, LocalDateTime devMessageTime) {
		super();
		this.status = String.valueOf(status.value());
		this.message = message;
		this.devMessage = devMessage;
		this.devMessageTime = devMessageTime;
	}
}

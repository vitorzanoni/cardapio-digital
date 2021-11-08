package devweb.cardapiodigitalapi.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErroValidacaoDTO {

	private String campo;
	
	private String erro;

	public ErroValidacaoDTO(String campo, String erro) {
		this.campo = campo;
		this.erro = erro;
	}
}

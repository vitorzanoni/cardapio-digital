package devweb.cardapiodigitalapi.dto;

import java.util.List;
import java.util.stream.Collectors;

import devweb.cardapiodigitalapi.model.Comida;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ComidaDTO {

	private String nome;
	
	private String descricao;
	
	public ComidaDTO(Comida comida) {
		this.nome = comida.getNome();
		this.descricao = comida.getDescricao();
	}
	
	public static List<ComidaDTO> toDTO(List<Comida> restaurantes) {
		return restaurantes.stream().map(ComidaDTO::new).collect(Collectors.toList());
	}
}

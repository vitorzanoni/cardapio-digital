package devweb.cardapiodigitalapi.dto;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import devweb.cardapiodigitalapi.model.Comida;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ComidaDTO {

	private String nome;
	
	private String descricao;

	private BigDecimal valor;

	private String imagem;
	
	public ComidaDTO(Comida comida) {
		this.nome = comida.getNome();
		this.descricao = comida.getDescricao();
		this.valor = comida.getValor();
		this.imagem = comida.getImagem();
	}
	
	public static List<ComidaDTO> toDTO(List<Comida> restaurantes) {
		return restaurantes.stream().map(ComidaDTO::new).collect(Collectors.toList());
	}
}

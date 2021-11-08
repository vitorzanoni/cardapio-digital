package devweb.cardapiodigitalapi.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Comida {
	
	@Id
	private Integer id;
	
	private String nome;
	
	private String descricao;

}
